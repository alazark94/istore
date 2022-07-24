<template>
    <Teleport to="body">
        <!-- use the modal component, pass in the prop -->
        <modal :show="showModal" @close="showModal = false" :product="product">
        </modal>
    </Teleport>
<div class="max-w-60">
    <div class="border rounded-3xl mx-auto overflow-hidden max-h-96">
        <div class="w-[15rem] h-[10rem] overflow-hidden">

            <img :src="product.image" alt="">
        </div>
        <h3 class="text-center py-4">
            <span class="font-bold">{{ product.name }}</span>
            ${{ product.price }}
            <br>
            <Link @click="showModal = true" :disabled="product.quantity < 1" :href="`/add-to-cart/${product.id}`" method="post" as="button" class="border rounded bg-gray-900 text-center text-white px-3 py-2 disabled:bg-gray-200">
                Add to Cart
            </Link>
            <span v-if="product.quantity < 1" class="text-xs text-red-600 block">Out of stock</span>
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

<script setup>
import Modal from '@/Components/MiniCart'
import {ref} from "vue";
let isVisible = false;
const showPopup = () => {
    localStorage.setItem('isVisible', 'true');
}

const showModal = ref(false)
</script>

<style scoped>

</style>
