<script setup>
import {usePage} from "@inertiajs/inertia-vue3";
import {computed} from "vue";
import {Inertia} from "@inertiajs/inertia";

const props = defineProps({
    show: Boolean,
    product: Object
})

const cartItems = computed(() => {
    return usePage().props.value.cart
}) ;

const totalPrice = computed(() => {
    let totalPrice = 0;
    usePage().props.value.cart.map(item => {
        totalPrice += item.quantity * item.price
    })
    return totalPrice;
})

let changed = ($event, id) => {
    Inertia.post(`/add-to-cart/${id}`, {
        quantity: $event.target.value
    })
}
</script>

<template>
    <Transition name="modal">
        <div v-if="show" class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-header mb-5">
                        <h3 class="text-xl">Mini Cart</h3>
                    </div>

                    <div class="modal-body">
                        <div v-for="cartItem in cartItems" class="flex justify-between">
                            <div>
                                <h3 class="text-xl">{{cartItem.name}}</h3>
                                <div class="text-sm">
                                    Quantity: <input @change="changed($event, cartItem.id)" type="number" class="border-2 border-gray-400 rounded-lg w-10 text-center" :value="cartItem.quantity" min="1">
                                </div>
                            </div>
                            <h3 class="text-lg"><input type="number" min="1" >{{cartItem.quantity}} * {{cartItem.price}} = ${{cartItem.quantity * cartItem.price}}</h3>
                        </div>
                        <div class="flex justify-between mt-5">
                            <h3 class="text-xl">Total</h3>
                            <h3 class="text-xl">${{ totalPrice }}</h3>
                        </div>
                    </div>

                    <div class="modal-footer my-5 flex justify-between">
                        <Link href="/checkout" class="text-blue-600">Proceed To Checkout</Link>
                            <button
                                class="modal-default-button"
                                @click="$emit('close')"
                            >Close</button>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<style>
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-container {
    width: 500px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
}

/*.modal-header h3 {*/
/*    margin-top: 0;*/
/*    color: #42b983;*/
/*}*/

/*.modal-body {*/
/*    margin: 20px 0;*/
/*}*/

.modal-default-button {
    float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
    opacity: 0;
}

.modal-leave-to {
    opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
</style>
