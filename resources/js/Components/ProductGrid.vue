<template>
<div class="grid grid-cols-3 gap-4">
    <Product v-for="product in props.products" :product="product"/>
</div>
</template>

<script>
export default {
    name: "ProductGrid",

}
</script>

<script setup>
import Product from "@/Components/Product";
import {defineProps} from "vue";

let props = defineProps({
    products: Array
});
</script>

<style scoped>

</style>
