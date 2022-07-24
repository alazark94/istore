<?php

namespace App\Http\Controllers;

use App\Models\Store;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Validation\Rule;
use Inertia\ResponseFactory;

class StoreController extends Controller
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
    public function index(User $user)
    {
            return inertia($user->role_id === 1 ? 'Admin/Store' : 'Client/StoreIndex', [
                'stores' => $user->stores()->when(request('search'), function ($query, $search) {
                    $query->where('name', 'like', "%$search%");
                })
                    ->paginate(10)
                    ->withQueryString()
                    ->through(function ($store) {
                        return [
                            'id' => $store->id,
                            'name' => $store->name,
                            'owner' => $store->user->name,
                            'address' => $store->address,
                            'phone' => $store->phone,
                            'city' => $store->city,
                            'state' => $store->state,
                            'country' => $store->country,
                            'is_active' => $store->is_active,
                            'can' => [
                                'edit' => auth()->user()->can('edit', $store)
                            ]
                        ];
                    }),
                'filters' => request()->only(['search', 'id']),
                'can' => [
                    'create' => auth()->user()->can('create', Store::class)
                ]
            ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response|ResponseFactory
     */
    public function create()
    {
        if (auth()->user()->role->title === 'admin') {
            return inertia('Admin/StoreCreate');
        } else if (auth()->user()->role_id === 2) {
            return inertia('Client/StoreCreate');
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return RedirectResponse
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => ['required'],
            'phone' => ['required', Rule::unique('stores', 'phone')],
            'address' => 'required',
            'city' => 'required',
            'state' => 'required',
            'country' => 'required'
        ]);

        $user = User::find(auth()->id());

        $user->stores()->create($validated);

        return back()->with('success', 'Success');
    }

    /**
     * Display the specified resource.
     *
     * @param Store $store
     * @return Response
     */
    public function show(Store $store)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Store $store
     * @return Response|\Inertia\Response|ResponseFactory
     */
    public function edit(Store $store)
    {
        return inertia(auth()->user()->role_id === 1 ? 'Admin/StoreUpdate' : 'Client/StoreUpdate', [
            'store' => $store
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param Store $store
     * @return RedirectResponse
     */
    public function update(Request $request, Store $store): RedirectResponse
    {
        if(auth()->user()->role_id === 1) {

            $validated = $request->validate([
                'is_active' => ['required', 'boolean']
            ]);

            $store->update([
                'is_active' => $validated['is_active']
            ]);
        } else if(auth()->user()->role_id === 2) {
            $validated = $request->validate([
                'name' => ['required_without_all:phone,address,city,state,country'],
                'phone' => ['required_without_all:name,address,city,state,country', Rule::unique('stores', 'phone')->ignore($store)],
                'address' => 'required_without_all:phone,name,city,state,country',
                'city' => 'required_without_all:phone,address,name,state,country',
                'state' => 'required_without_all:phone,address,city,name,country',
                'country' => 'required_without_all:phone,address,city,state,name'
            ]);

            $store->update($validated);
        }

        return back()->with('success', 'Success');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Store $store
     * @return RedirectResponse
     */
    public function destroy(Store $store): RedirectResponse
    {
        $store->delete();
        return back()->with('success', 'Success');
    }

    public function indexAll()
    {
        return inertia('Admin/Store', [
            'stores' => Store::when(request('search'), function ($query, $search) {
                $query->where('name', 'like', "%$search%");
            })->where('user_id', '!=', auth()->id())
                ->paginate(10)
                ->withQueryString()
                ->through(function ($store) {
                    return [
                        'id' => $store->id,
                        'name' => $store->name,
                        'owner' => $store->user->name,
                        'address' => $store->address,
                        'phone' => $store->phone,
                        'city' => $store->city,
                        'state' => $store->state,
                        'country' => $store->country,
                        'can' => [
                            'edit' => auth()->user()->can('edit', $store)
                        ]
                    ];
                }),
            'filters' => request()->only(['search', 'id']),
            'can' => [
                'create' => auth()->user()->can('create', Store::class)
            ]
        ]);
    }
}
