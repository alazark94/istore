<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [\App\Http\Controllers\StoreFrontController::class, 'home'])->name('home');
Route::get('/list-stores', [\App\Http\Controllers\StoreFrontController::class, 'stores']);
Route::get('/cart', [\App\Http\Controllers\StoreFrontController::class, 'cart']);
Route::get('/checkout', [\App\Http\Controllers\StoreFrontController::class, 'checkout']);
Route::post('/checkout', [\App\Http\Controllers\StoreFrontController::class, 'processCheckout']);

Route::get('/login', [\App\Http\Controllers\Auth\LoginController::class, 'showLogin']);
Route::post('/login', [\App\Http\Controllers\Auth\LoginController::class, 'login'])->name('login');
Route::get('/profile-update', [\App\Http\Controllers\UserController::class, 'edit']);
Route::put('/profile-update', [\App\Http\Controllers\UserController::class, 'update']);

Route::get('/dashboard', function () {

    $totalRevenue = \App\Models\Order::sum('total_price');
    $totalStoreAmount = 0;

    foreach (auth()->user()->stores as $store) {
        $totalStoreAmount = $store->orders()->sum('total_price');
    }
    $myTotalRevenue = $totalStoreAmount;

    return auth()->user()->role_id === 1
        ? inertia('Admin/Dashboard', [
            'totalRevenue' => $totalRevenue,
            'myTotalRevenue' => $myTotalRevenue
        ])
        : inertia('Client/Dashboard', [
            'myTotalRevenue' => $myTotalRevenue
        ]);
})->middleware('auth');
Route::post('/logout', [\App\Http\Controllers\Auth\LoginController::class, 'logout']);
Route::resource('users.stores', \App\Http\Controllers\StoreController::class)->shallow();
Route::resource('/users', \App\Http\Controllers\UserController::class);
Route::get('/stores', [\App\Http\Controllers\StoreController::class, 'indexAll']);
Route::resource('stores.products', \App\Http\Controllers\ProductController::class)->shallow();
Route::resource('stores.categories', \App\Http\Controllers\CategoryController::class)->shallow();
Route::resource('stores.customers', \App\Http\Controllers\CustomerController::class)->shallow();
Route::resource('stores.orders', \App\Http\Controllers\OrderController::class)->shallow();



Route::middleware('guest')->group(function () {
    Route::get('/register', function () {
        return inertia('Register');
    });
    Route::post('/register', \App\Http\Controllers\Auth\RegisterController::class);
});

Route::post('/add-to-cart/{id}', [\App\Http\Controllers\CartController::class, 'addToCart']);
Route::post('/remove-from-cart/{id}', [\App\Http\Controllers\CartController::class, 'removeFromCart']);

Route::get('/categories/{category}/products', [\App\Http\Controllers\StoreFrontController::class, 'categoryProducts']);
Route::get('/{store}', [\App\Http\Controllers\StoreFrontController::class, 'storeProducts']);




