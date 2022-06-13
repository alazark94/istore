<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Inertia\Response;
use Inertia\ResponseFactory;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    /**
     * Display a listing of the resource.
     *
     * @return Response|ResponseFactory
     */
    public function index()
    {
        return inertia('Admin/User', [
            'users' => User::when(request('search'), function ($query, $search) {
                $query->where('name', 'like', "%$search%");
            })->when(!request()->exists('admins_only'), function ($query, $admins_only) {
                $query->where('role_id', '!=', 1);
            })->when(request()->exists('admins_only'), function ($query, $admins_only) {
                $query->where('role_id', 1);
            })
                ->paginate(10)
                ->withQueryString()
                ->through(function ($user) {
                    return [
                        'id' => $user->id,
                        'name' => $user->name,
                        'email' => $user->email,
                        'can' => [
                            'edit' => auth()->user()->can('edit', $user)
                        ]
                    ];
                }),
            'filters' => request()->only(['search']),
            'can' => [
                'create' => auth()->user()->can('create', User::class)
            ]
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response|ResponseFactory
     */
    public function create()
    {
        return inertia('Admin/UserCreate');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return RedirectResponse
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required',
            'email' => ['required', 'email', Rule::unique('users', 'email')],
            'password' => ['required', 'confirmed']
        ]);

        $role = Role::find(1);

        $role->users()->create($validated);

        return redirect()->back()->with('success', 'Success');
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response|Response|ResponseFactory
     */
    public function edit()
    {
        return inertia(auth()->user()->role_id === 1 ?'Admin/ProfileUpdate'
            : 'Client/ProfileUpdate', [
            'user' => auth()->user()
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @return RedirectResponse
     */
    public function update(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => ['required_without_all:email, password, confirm_password'],
            'email' => ['required_without_all:name, password, confirm_password', 'email', Rule::unique('users', 'email')->ignore(auth()->id())],
            'password' => ['required_without_all:name, email', 'confirmed']
        ]);

        $user = User::find(auth()->id());

        $user->update([
            'name' => $validated['name'] ?? $user->name,
            'email' => $validated['email'] ?? $user->email,
            'password' => !is_null($validated['password']) ? Hash::make($validated['password']) : $user->password
        ]);

        return redirect()->back()->with('success', 'Success');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param User $user
     * @return RedirectResponse
     */
    public function destroy(Request $request, User $user): RedirectResponse
    {
        if(auth()->id() === $user->id) {
            Auth::logout();

            $request->session()->invalidate();

            $request->session()->regenerateToken();

            $user->delete();
        }
        $user->delete();
        return back()->with('success', 'Success');
    }

}
