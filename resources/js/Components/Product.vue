<template>
<div class="max-w-60">
    <div class="border rounded-3xl mx-auto overflow-hidden max-h-96">
        <img :src="product.image" alt="" class="w-60 h-auto">
        <h3 class="text-center py-4">
            <span class="font-bold">{{ product.name }}</span>
            ${{ product.price }}
            <br>
            <Link :disabled="product.quantity < 1" :href="`/add-to-cart/${product.id}`" method="post" as="button" class="border rounded bg-gray-900 text-center text-white px-3 py-2">
                Add to Cart
            </Link>
        </h3>
    </div>
</div>
</template>

<script>
export default {
    name: "Product",
    props: {
        product: Object
    }
}
</script>

<style scoped>

</style>
