<template>
    <div class="w-96 border-2 border-gray-400 rounded-lg p-6 mt-3 shadow-lg">
        <div class="flex justify-between">
            <h1 class="text-3xl">Cart Items</h1>
            <button @click="$emit('close')" class="text-2xl">X</button>
        </div>
        <div class="flex justify-between" v-for="item in cartItems">
            <p class="text-lg font-bold">{{ item.name }}</p>
            <p class="text-lg font-bold">{{ item.quantity }} x {{ item.price }} = {{item.quantity * item.price}}</p>
        </div>
        <Link as="button" :disabled="cartItems === null" href="/checkout" class="mx-auto block px-5 py-3 bg-gray-900 text-white disabled:bg-gray-600">
            Checkout
        </Link>
    </div>
</template>

<script>
export default {
    name: "ThePopUp"
}
</script>

<script setup>

import {computed, defineProps, ref} from "vue";
import {usePage} from "@inertiajs/inertia-vue3";


const cartItems = computed(() => {
    let items = [];
    usePage().props.value.cart != null
        ?usePage().props.value.cart.forEach(item => {
            items.push(item);
        })
        : null;

    return items;
})


</script>

<style scoped>

</style>
