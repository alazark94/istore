<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Customer;
use App\Models\Order;
use App\Models\Product;
use App\Models\Store;
use Illuminate\Http\Request;
use Inertia\Response;
use Inertia\ResponseFactory;

class StoreFrontController extends Controller
{
    /**
     * @return Response|ResponseFactory
     */
    public function home()
    {
        return inertia('Home', [
            'categories' => Category::get('name'),
            'products' => Product::when(request('search'), function ($query, $search) {
                $query->where('name', 'like', "%$search%");
            })->orderBy('created_at', 'desc')
                ->paginate(10)
                ->withQueryString()
                ->through(function ($product) {
                    return [
                        'id' => $product->id,
                        'name' => $product->name,
                        'price' => $product->price,
                        'quantity' => $product->quantity,
                        'image' => \Illuminate\Support\Facades\Storage::url($product->img_url),
                    ];
                }),
            'filters' => request()->only(['search']),
        ]);
    }

    /**
     * @return Response|ResponseFactory
     */
    public function stores()
    {
        return inertia('Stores', [
            'stores' => Store::when(request('search'), function ($query, $search) {
                $query->where('name', 'like', "%$search%");
            })->orderBy('created_at', 'desc')
                ->paginate(10)
                ->withQueryString()
                ->through(function ($store) {
                    return [
                        'id' => $store->id,
                        'name' => $store->name,
                    ];
                }),
            'filters' => request()->only(['search']),
        ]);
    }

    /**
     * @param Store $store
     * @return Response|ResponseFactory
     */
    public function storeProducts(Store $store)
    {
        return inertia('Home', [
            'categories' => $store->categories()->get('name')->unique(),
            'products' => $store->products()->when(request('search'), function ($query, $search) {
                $query->where('name', 'like', "%$search%");
            })->orderBy('created_at', 'desc')
                ->paginate(10)
                ->withQueryString()
                ->through(function ($product) {
                    return [
                        'id' => $product->id,
                        'name' => $product->name,
                        'price' => $product->price,
                        'quantity' => $product->quantity,
                        'image' => \Illuminate\Support\Facades\Storage::url($product->img_url),
                    ];
                }),
            'filters' => request()->only(['search']),
        ]);

    }

    /**
     * @param Request $request
     * @return Response|ResponseFactory
     */
    public function cart(Request $request)
    {
        return inertia('Cart', [
            'cartItems' => json_decode($request->cookie('cart'), true)
        ]);
    }

    /**
     * @return Response|ResponseFactory
     */
    public function checkout()
    {
        return inertia('Checkout');
    }

    public function processCheckout(Request $request)
    {
        if(!$request->cookie('cart')) {
            return redirect('/')->withErrors([
                'shopping_cart' => 'Nothing in you shopping cart!'
            ]);
        }
            $validated = $request->validate([
                'paymentMethodID' => 'required',
                'name' => 'required|string',
                'email' => 'required|email',
                'phone' => 'required|string',
                'address_1' => 'required|string',
                'address_2' => 'nullable|string',
                'city' => 'required|string',
                'state' => 'required|string',
                'country' => 'required|string'
            ], [
                'paymentMethodID.required' => 'The payment method is required'
            ]);

            $customer = Customer::firstOrCreate([
                'email' => $validated['email']
            ], [
                'name' => $validated['name'],
                'phone' => $validated['phone'],
                'address_1' => $validated['address_1'],
                'state' => $validated['state'],
                'city' => $validated['city'],
                'address_2' => $validated['address_2'],
                'country' => $validated['country']
            ]);

            $customer->createOrGetStripeCustomer();

            $totalPrice = 0;
            // $products = json_decode($request->input('products'));

            foreach (json_decode($request->cookie('cart'), true) as $product)  {
                $totalPrice += $product['quantity'] * $product['price'];
                $store = Store::find($product['store_id']);
                $store->customers()->attach($customer);
                $store->orders()->create([
                    'customer_id' => $customer->id,
                    'product_id' => $product['id'],
                    'total_price' => $totalPrice
                ]);

            }

        $stripe = $customer->charge($totalPrice *  100, $validated['paymentMethodID']);



        return redirect('/')->withoutCookie('cart');
    }
}
