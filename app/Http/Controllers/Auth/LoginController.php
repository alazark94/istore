<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{

    public function __construct()
    {
        $this->middleware('guest')->only(['showLogin', 'login']);
        $this->middleware('auth')->only('logout');
    }

    public function showLogin()
    {
        return inertia('Login');
    }

    /**
     * @param Request $request
     * @return RedirectResponse
     */
    public function login(Request $request): \Illuminate\Http\RedirectResponse
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => 'required'
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            if(auth()->user()->role_id === 1) {
                return redirect()->intended('dashboard');
            }

            return redirect()->intended('dashboard');

        }

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ])->onlyInput('email');
    }

    /**
     * @param Request $request
     * @return RedirectResponse
     */
    public function logout(Request $request): RedirectResponse
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect()->intended('login');
    }
}
