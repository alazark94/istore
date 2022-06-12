<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

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
                $item['quantity'] = $quantity;
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
        return redirect()->back()->withCookie($cookie);

    }
}
