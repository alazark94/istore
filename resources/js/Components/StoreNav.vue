<template>
<div class="flex space-x-4">
    <Link :href="`/stores/${props.id}/products`" class="border px-5 py-3 hover:bg-gray-900 hover:text-white">
        Products
    </Link>
    <Link :href="`/stores/${props.id}/categories`" class="border px-5 py-3 hover:bg-gray-900 hover:text-white">
        Categories
    </Link>
    <Link :href="`/stores/${props.id}/customers`" class="border px-5 py-3 hover:bg-gray-900 hover:text-white">
        Customers
    </Link>
    <Link :href="`/stores/${props.id}/orders`" class="border px-5 py-3 hover:bg-gray-900 hover:text-white">
        Orders
    </Link>

</div>
</template>

<script>
export default {
    name: "StoreNav"
}
</script>
<script setup>
import {defineProps} from "vue";

let props = defineProps({
    id: Number
})
</script>

<style scoped>

</style>
