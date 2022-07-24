<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Store;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class CategoryController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->except(['index', 'show', 'indexAll']);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response|\Inertia\Response|\Inertia\ResponseFactory
     */
    public function index(Store $store)
    {
        return inertia(auth()->user()->role_id === 1
            ? 'Admin/CategoryIndex'
            : 'Client/CategoryIndex', [
            'categories' => $store->categories()->when(request('search'), function ($query, $search) {
                $query->where('name', 'like', "%$search%");
            })
                ->paginate(10)
                ->withQueryString()
                ->through(function ($category) {
                    return [
                        'id' => $category->id,
                        'name' => $category->name,
                        'price' => $category->price,
                        'quantity' => $category->quantity,
                        'no_of_products' => $category->no_of_products,
                        'can' => [
                            'edit' => auth()->user()->can('edit', $category)
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
     * @return \Illuminate\Http\Response|\Inertia\Response|\Inertia\ResponseFactory
     */
    public function create(Store $store)
    {
        return inertia(auth()->user()->role_id === 1
            ? 'Admin/CategoryCreate'
            : 'Client/CategoryCreate', [
            'store_id' => $store->id
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Store $store, Request $request)
    {
        $validated = $request->validate([
            'name' => 'required'
        ]);

        $validated['slug'] = Str::slug($validated['name']);

        $store->categories()->create($validated);

        return redirect()->back()->with('success', 'Success');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit(Category $category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Category $category)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Category $category)
    {
        $category->delete();

        return redirect()->back()->with('success', 'Success');
    }
}
