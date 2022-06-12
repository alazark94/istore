<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Store;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;
use Inertia\ResponseFactory;

class ProductController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->except(['index', 'show', 'indexAll']);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response|ResponseFactory
     */
    public function index(Store $store)
    {
        return inertia(auth()->user()->role_id === 1
            ? 'Admin/ProductIndex'
            : 'Client/ProductIndex', [
            'products' => $store->products()->when(request('search'), function ($query, $search) {
                $query->where('name', 'like', "%$search%");
            })
                ->paginate(10)
                ->withQueryString()
                ->through(function ($product) {
                    return [
                        'id' => $product->id,
                        'name' => $product->name,
                        'price' => $product->price,
                        'quantity' => $product->quantity,
                        'can' => [
                            'edit' => auth()->user()->can('edit', $product)
                        ]
                    ];
                }),
            'filters' => request()->only(['search']),
            'can' => [
                'create' => auth()->user()->can('create', Product::class)
            ],
            'store_id' => $store->id
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response|ResponseFactory
     */
    public function create(Store $store)
    {
        return inertia(auth()->user()->role_id === 1
            ? 'Admin/ProductCreate'
            : 'Client/ProductCreate', [
            'categories' => $store->categories()->get(['id','name']),
            'store_id' => $store->id
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Store $store, Request $request): \Illuminate\Http\RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required',
            'quantity' => ['required', 'integer'],
            'price' => ['required', 'numeric'],
            'image' => ['required', 'image' ],
            'category' => ['required', 'integer']
        ]);

        $path = $request->file('image')->store("public/{$store->id}/products");

        $store->products()->create([
            'name' => $validated['name'],
            'quantity' => $validated['quantity'],
            'price' => $validated['price'],
            'img_url' => $path,
            'category_id' => $validated['category']
        ]);

        return redirect()->back()->with('success', 'Success');
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Product $product
     * @return Response
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\Product $product
     * @return Response|\Inertia\Response|ResponseFactory
     */
    public function edit(Product $product)
    {
        return inertia(auth()->user()->role_id === 1
            ? 'Admin/ProductUpdate'
            : 'Client/ProductUpdate', [
            'product' => $product,
            'categories' => $product->store->categories
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Product $product
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(Request $request, Product $product): \Illuminate\Http\RedirectResponse
    {
//        dd($request);
        $validated = $request->validate([
            'name' => 'nullable',
            'quantity' => ['nullable', 'integer'],
            'price' => ['nullable', 'numeric'],
            'image' => ['nullable', 'image'],
            'category' => ['nullable', 'integer']
        ]);

        if($request->hasFile('image')) {

            $path = $request->file('image')->store("storage/{$product->store->id}/products");
            Storage::delete($product->img_url);
        }

        $product->update([
            'name' => $validated['name'] ?? $product->name,
            'quantity' => $validated['quantity'] ?? $product->quantity,
            'price' => $validated['price'] ?? $product->price,
            'category_id' => $validated['category'] ?? $product->category_id,
            'img_url' => $path ?? $product->img_url
        ]);

        return redirect()->back()->with('success', 'Success');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Product $product
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Product $product): \Illuminate\Http\RedirectResponse
    {
        Storage::delete($product->img_url);
        $product->delete();

        return redirect()->back();
    }
}
