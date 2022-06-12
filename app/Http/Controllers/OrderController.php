<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Store;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->except('store');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response|\Inertia\Response|\Inertia\ResponseFactory
     */
    public function index(Store $store)
    {
        return inertia(auth()->user()->role_id === 1
            ? 'Admin/OrderIndex'
            : 'Client/OrderIndex', [
            'orders' => $store->orders()->when(request('search'), function ($query, $search) {
                $query->where('name', 'like', "%$search%");
            })
                ->paginate(10)
                ->withQueryString()
                ->through(function ($order) {
                    return [
                        'id' => $order->id,
                        'name' => $order->name,
                        'product_name' => $order->product->name,
                        'customer_name' => $order->customer->name,
                        'created_at' => $order->created_at
                    ];
                }),
            'filters' => request()->only(['search']),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function show(Order $order)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Order $order)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function destroy(Order $order)
    {
        //
    }
}
