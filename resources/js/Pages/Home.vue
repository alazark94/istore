<template>
    <Head title="Home"/>
    <div class="grid gap-6">

        <div class="flex items-center content-center w-10/12 mx-auto text-black space-x-6">
            <div class="w-60 min-h-screen flex items-center bg-gray-300 my-10 sticky">
                <ul v-for="category in categories" :key='category.id' class="divide-y-2 divide-gray-400 w-full" >
                    <li class="text-center">
                        {{ category.name }}
                    </li>
                </ul>
            </div>
            <div class="my-10">
                <ProductGrid :products="props.products.data"/>
                <div class="flex justify-center my-5">
                    <Pagination :links="props.products.links"/>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import FrontLayout from "@/Shared/FrontLayout";

export default {
    layout: FrontLayout
};
</script>
<script setup>
import {computed, defineProps, ref} from "vue";
import ProductGrid from "@/Components/ProductGrid";
import Pagination from "@/Shared/Pagination";
import {usePage} from "@inertiajs/inertia-vue3";
let props = defineProps({
    categories: Array,
    products: Object
});

let categories = computed(() => {
    return new Set(props.categories);
})
</script>

<style></style>
