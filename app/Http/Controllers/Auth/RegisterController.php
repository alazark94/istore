<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Role;
use App\Models\User;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Redirector;

class RegisterController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param Request $request
     * @return Application|RedirectResponse|Redirector
     */
    public function __invoke(Request $request)
    {
        $validated = $request->validate([
            'name' => ['string', 'required'],
            'email' => ['required', 'email', 'unique:users,email'],
            'password' => ['required', 'confirmed', 'min:8']
        ]);

        User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => $validated['password'],
            'role_id' => 1
        ]);

        return redirect('/login');

    }
}
