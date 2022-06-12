<template>
    <div class="flex flex-col items-center justify-center w-full m-10">
        <h1 class="font-black text-4xl mb-16">Cart</h1>
        <div class="divide-y divide-gray-400 space-y-10 w-10/12">

            <div class=" flex justify-around " v-for="item in cartItems" :key="item.id">
                <div>
                    <h1 class="font-black text-3xl">{{ item.name }}</h1>
                    <div class="text-lg">
                        Quantity: {{ item.quantity }}
                    </div>
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
        <div class="flex justify-around items-center w-1/2 mt-10">
            <Link href="/checkout" class="px-10 py-5 bg-gray-900 text-white ">
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

let props = defineProps({
    cartItems: Array
});

const totalPrice = computed(() => {
    let totalPrice = 0;
    props.cartItems.map(item => {
        totalPrice += item.quantity * item.price
    })
    return totalPrice;
})

console.log(props.cartItems);
</script>

<style scoped>

</style>
