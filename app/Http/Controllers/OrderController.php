<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Store;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

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
            'orders' => $store->orders()->when(request('search'), function ($query, $search) use ($store) {
                $query->where('name', 'like', "%$search%");
            })
                ->paginate(10)
                ->withQueryString()
                ->through(function ($order) {
                    return [
                        'id' => $order->id,
                        'name' => $order->name,
                        'customer_name' => $order->customer->name,
                        'created_at' => $order->created_at->diffForHumans()
                    ];
                }),
            'filters' => request()->only(['search']),
            'store_id' => $store->id
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
     * @return \Illuminate\Http\Response|\Inertia\Response|\Inertia\ResponseFactory
     */
    public function show(Order $order)
    {
        return inertia('Admin/OrderView', [
            'order' => $order->load('customer')
        ]);
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
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(Request $request, Order $order)
    {
        $request->validate([
            'status' => ['required', Rule::in(['pending_payment', 'paid', 'completed'])]
        ]);

        $order->update([
            'status' => $request->input('status')
        ]);

        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Order $order)
    {
        $order->delete();
        return redirect()->back();
    }
}
