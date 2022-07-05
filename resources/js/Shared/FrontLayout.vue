<template>
    <main class="w-full min-h-screen">
        <section class="bg-gray-900 p-6">
            <header class="flex justify-between mx-10 container">
                <div class="flex items-center text-white">
                    <h1 class="text-lg font-bold">iStore</h1>
                </div>
                <div class="flex space-x-6 items-center text-white">
                    <NavLink href="/" class="text-white">
                        Home
                    </NavLink>
                    <NavLink href="/list-stores" class="text-white">
                        Stores
                    </NavLink>
                </div>
                <div class="flex gap-5">
                    <NavLink href="/login" class="text-white" v-if="!$page.props.auth">
                        Login
                    </NavLink>
                    <NavLink href="/register" class="text-white" v-if="!$page.props.auth">
                        Become a Seller
                    </NavLink>
                    <NavLink href="/dashboard" class="text-white" v-if="$page.props.auth">
                        Dashboard
                    </NavLink>
                    <div>

                    </div>
                    <NavLink
                        href="/cart"
                        class="text-white flex"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span v-if="cartQuantity > 0">{{ cartQuantity }}</span>
                    </NavLink>
                </div>
            </header>
        </section>
        <ThePopUp class="ml-auto" @clicked="isVisible = true" v-show="isVisible"/>
        <slot/>
    </main>
    <footer class="w-full bg-gray-900 py-6">
        <p class="text-center text-white">
            iStore 2022
        </p>
    </footer>
</template>

<script>
import Nav from "@/Shared/Nav";
import NavLink from "@/Shared/NavLink"
export default {
    name: "FrontLayout",
    components: {
        Nav,
        NavLink
    }
}
</script>

<script setup>
import ThePopUp from "@/Components/ThePopUp";
import {computed, ref} from "vue";
import {usePage} from "@inertiajs/inertia-vue3";
const cartQuantity = computed(() => {
    let amount = 0;
    usePage().props.value.cart != null
        ?usePage().props.value.cart.forEach(item => {
        amount += item.quantity;
    })
        : 0;

    return amount;
})
let isVisible = false;
</script>

<style scoped>

</style>
