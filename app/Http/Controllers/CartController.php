<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CartController extends Controller
{
    /**
     * @param Request $request
     * @param $id
     * @return RedirectResponse
     */
    public function addToCart(Request $request, $id): \Illuminate\Http\RedirectResponse
    {
        $product = Product::find($id);

        $cart = json_decode($request->cookie('cart'), true);

        if (!$cart) {
            $cart = [
                [
                    'id' => $product->id,
                    'name' => $product->name,
                    'quantity' => 1,
                    'price' => $product->price,
                    'store_id' => $product->store->id
                ]
            ];

            session()->put('cart', $cart);
            $cookie = cookie('cart', json_encode($cart), 525600);
            return redirect()->back()->withCookie($cookie)->with('success', 'Item Added to Cart');
        }

        foreach ($cart as &$item) {
            if ($item['id'] === (int)$id) {
                $quantity = intval($item['quantity']);
                $quantity++;
                $item['quantity'] = $request->input('quantity') ? (int) $request->input('quantity') : $quantity;
                $cookie = cookie('cart', json_encode($cart), 525600);
                return redirect()->back()->withCookie($cookie);
            }
        }

        $cart[] = [
            'id' => $product->id,
            'name' => $product->name,
            'quantity' => 1,
            'price' => $product->price,
            'store_id' => $product->store->id
        ];
        $cookie = cookie('cart', json_encode($cart), 525600);
        Inertia::share('visible', true);
        return redirect()->back()->withCookie($cookie);

    }

    public function removeFromCart(Request $request, $id)
    {

        $cart = json_decode($request->cookie('cart'), true);

        if(!$cart) {
            return redirect()->back()->with('error', 'No items in cart');
        }

        foreach($cart as $item) {
            if($item['id'] === (int) $id) {
                $key = array_search($item, $cart);
                unset($cart[$key]);
            }
        }
        $cart = array_values($cart);
        $cookie = cookie('cart', json_encode($cart), 525600);

        return redirect()->back()->withCookie($cookie);



    }
}
