<template>
    <div class="flex flex-col items-center justify-center w-full m-10">
        <h1 class="font-black text-4xl mb-16">Cart</h1>
        <div v-if="cartItems.length > 0" class="divide-y divide-gray-400 space-y-10 w-10/12">

            <div class=" flex justify-around " v-for="item in cartItems" :key="item.id">
                <div>
                    <h1 class="font-black text-3xl">{{ item.name }}</h1>
                    <div class="text-lg">
                        Quantity: <input @change="changed($event, item.id)" type="number" class="border-2 border-gray-400 rounded-lg w-24 text-center" :value="item.quantity" min="1">
                    </div>
                    <Link :href="`/remove-from-cart/${item.id}`" class="text-red-600" method="post" as="button">Remove</Link>
                </div>
                <div>
                    <h3 class="font-medium text-3xl">{{ item.quantity * item.price }}</h3>

                </div>

            </div>
            <div class="flex justify-around">
                <h1 class="font-black text-3xl">Total</h1>
                <h3 class="font-medium text-3xl">{{ totalPrice }}</h3>
            </div>
        </div>
        <div v-else>
            <h1 class="text-3xl font-bold"> Nothing in Cart</h1>
        </div>
        <div class="flex justify-around items-center w-1/2 mt-10">
            <Link as="button" :disabled="cartItems === null || cartItems.length < 1" href="/checkout" class="px-10 py-5 bg-gray-900 text-white disabled:bg-gray-600">
                Checkout
            </Link>
            <Link href="/" class="text-blue-600 hover:underline">Go Back Shopping</Link>
        </div>

    </div>

</template>

<script>
import FrontLayout from "@/Shared/FrontLayout";

export default {
    name: "Cart",
    layout: FrontLayout
}
</script>

<script setup>

import {computed, defineProps} from "vue";
import {Inertia} from "@inertiajs/inertia";
import Swal from "sweetalert2";

let props = defineProps({
    cartItems: Array
});

const totalItems = computed(() => {
    return props.cartItems == null ? false : props.cartItems.length;
})
let changed = ($event, id) => {
    Inertia.post(`/add-to-cart/${id}`, {
        quantity: $event.target.value
    })
}
const totalPrice = computed(() => {
    let totalPrice = 0;
    props.cartItems.map(item => {
        totalPrice += item.quantity * item.price
    })
    return totalPrice;
})

</script>

<style scoped>

</style>
