<template>

    <div class="flex justify-center my-10">
        <h1 class="text-3xl font-bold">Checkout</h1>
    </div>
    <div class="flex justify-around container mx-auto">
        <div class="flex justify-center w-2/3">

            <form @submit.prevent="submit" class="grid grid-cols-2 gap-10 w-10/12 ">
                <div>
                    <div class="mb-6">
                        <label
                            for="name"
                            class="block mb-2 uppercase font-bold text-xs text-gray-700"
                        >
                            Name
                        </label>
                        <input
                            v-model="form.name"
                            type="text"
                            name="name"
                            id="name"
                            class="border rounded border-gray-400 p-2 w-full"
                        />
                        <span
                            class="block text-red-500 text-xs mt-1"
                            v-if="form.errors.name"
                        >{{ form.errors.name }}</span
                        >
                    </div>
                    <div class="mb-6">
                        <label
                            for="email"
                            class="block mb-2 uppercase font-bold text-xs text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            v-model="form.email"
                            type="email"
                            name="email"
                            id="email"
                            class="border rounded border-gray-400 p-2 w-full"
                        />
                        <span
                            class="block text-red-500 text-xs mt-1"
                            v-if="form.errors.email"
                        >{{ form.errors.email }}</span
                        >
                    </div>
                    <div class="mb-6">
                        <label
                            for="phone"
                            class="block mb-2 uppercase font-bold text-xs text-gray-700"
                        >
                            Phone
                        </label>
                        <input
                            v-model="form.phone"
                            type="tel"
                            name="phone"
                            id="phone"
                            class="border rounded border-gray-400 p-2 w-full"
                        />
                        <span
                            class="block text-red-500 text-xs mt-1"
                            v-if="form.errors.phone"
                        >{{ form.errors.phone }}</span
                        >
                    </div>

                    <div class="mb-6">
                        <label
                            for="address_1"
                            class="block mb-2 uppercase font-bold text-xs text-gray-700"
                        >
                            Address 1
                        </label>
                        <input
                            v-model="form.address_1"
                            type="text"
                            name="address_1"
                            id="address_1"
                            class="border rounded border-gray-400 p-2 w-full"
                        />
                        <span
                            class="block text-red-500 text-xs mt-1"
                            v-if="form.errors.address_1"
                        >{{ form.errors.address_1 }}</span
                        >
                    </div>
                    <div class="mb-6">
                        <label
                            for="address_2"
                            class="block mb-2 uppercase font-bold text-xs text-gray-700"
                        >
                            Address 1
                        </label>
                        <input
                            v-model="form.address_2"
                            type="text"
                            name="address_2"
                            id="address_2"
                            class="border rounded border-gray-400 p-2 w-full"
                        />
                        <span
                            class="block text-red-500 text-xs mt-1"
                            v-if="form.errors.address_2"
                        >{{ form.errors.address_2 }}</span
                        >
                    </div>
                    <div class="mb-6">
                        <label
                            for="city"
                            class="block mb-2 uppercase font-bold text-xs text-gray-700"
                        >
                            City
                        </label>
                        <input
                            v-model="form.city"
                            type="text"
                            name="city"
                            id="city"
                            class="border rounded border-gray-400 p-2 w-full"
                        />
                        <span
                            class="block text-red-500 text-xs mt-1"
                            v-if="form.errors.city"
                        >{{ form.errors.city }}</span
                        >
                    </div>
                </div>
                <div>
                    <div class="mb-6">
                        <label
                            for="State"
                            class="block mb-2 uppercase font-bold text-xs text-gray-700"
                        >
                            State
                        </label>
                        <input
                            v-model="form.state"
                            type="text"
                            name="state"
                            id="state"
                            class="border rounded border-gray-400 p-2 w-full"
                        />
                        <span
                            class="block text-red-500 text-xs mt-1"
                            v-if="form.errors.state"
                        >{{ form.errors.state }}</span
                        >
                    </div>
                    <div class="mb-6">
                        <label
                            for="country"
                            class="block mb-2 uppercase font-bold text-xs text-gray-700"
                        >
                            Country
                        </label>
                        <input
                            v-model="form.country"
                            type="text"
                            name="country"
                            id="country"
                            class="border rounded border-gray-400 p-2 w-full"
                        />
                        <span
                            class="block text-red-500 text-xs mt-1"
                            v-if="form.errors.country"
                        >{{ form.errors.country }}</span
                        >
                    </div>
                    <div class="py-3">
                        <p class="text-sm">
                            For testing purposes please use <br/>
                            4242 4242 4242 4242 <br/>
                            Any CVC and Date after current date
                        </p>
                        <p>Powered By</p>
                        <div class="w-20 flex">

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                                <path
                                    d="M165 144.7l-43.3 9.2-.2 142.4c0 26.3 19.8 43.3 46.1 43.3 14.6 0 25.3-2.7 31.2-5.9v-33.8c-5.7 2.3-33.7 10.5-33.7-15.7V221h33.7v-37.8h-33.7zm89.1 51.6l-2.7-13.1H213v153.2h44.3V233.3c10.5-13.8 28.2-11.1 33.9-9.3v-40.8c-6-2.1-26.7-6-37.1 13.1zm92.3-72.3l-44.6 9.5v36.2l44.6-9.5zM44.9 228.3c0-6.9 5.8-9.6 15.1-9.7 13.5 0 30.7 4.1 44.2 11.4v-41.8c-14.7-5.8-29.4-8.1-44.1-8.1-36 0-60 18.8-60 50.2 0 49.2 67.5 41.2 67.5 62.4 0 8.2-7.1 10.9-17 10.9-14.7 0-33.7-6.1-48.6-14.2v40c16.5 7.1 33.2 10.1 48.5 10.1 36.9 0 62.3-15.8 62.3-47.8 0-52.9-67.9-43.4-67.9-63.4zM640 261.6c0-45.5-22-81.4-64.2-81.4s-67.9 35.9-67.9 81.1c0 53.5 30.3 78.2 73.5 78.2 21.2 0 37.1-4.8 49.2-11.5v-33.4c-12.1 6.1-26 9.8-43.6 9.8-17.3 0-32.5-6.1-34.5-26.9h86.9c.2-2.3.6-11.6.6-15.9zm-87.9-16.8c0-20 12.3-28.4 23.4-28.4 10.9 0 22.5 8.4 22.5 28.4zm-112.9-64.6c-17.4 0-28.6 8.2-34.8 13.9l-2.3-11H363v204.8l44.4-9.4.1-50.2c6.4 4.7 15.9 11.2 31.4 11.2 31.8 0 60.8-23.2 60.8-79.6.1-51.6-29.3-79.7-60.5-79.7zm-10.6 122.5c-10.4 0-16.6-3.8-20.9-8.4l-.3-66c4.6-5.1 11-8.8 21.2-8.8 16.2 0 27.4 18.2 27.4 41.4.1 23.9-10.9 41.8-27.4 41.8zm-126.7 33.7h44.6V183.2h-44.6z"/>
                            </svg>
                        </div>
                    </div>

                    <div ref="cardElement" class="my-5 border rounded p-5">

                        <!-- Elements will create input elements here -->
                    </div>
                    <div id="card-errors" role="alert"></div>
                    <button
                        type="submit"
                        class="bg-blue-400 text-white rounded py-2 px-4 hover:bg-blue-500 disabled:bg-gray-200 disabled:text-gray-700"
                        :disabled="form.processing"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
        <div class="w-1/3 border-2 border-gray-400 rounded-lg">
            <div class="flex justify-between p-6" v-for="item in cartItems">
                <p class="text-lg font-bold">{{ item.name }}</p>
                <p class="text-lg font-bold">{{ item.quantity }} x ${{ item.price }} = ${{item.quantity * item.price}}</p>
            </div>
            <div class="flex justify-between p-6">
                <p class="text-lg font-bold">Total</p>
                <p class="text-lg font-bold">${{totalPrice}}</p>
            </div>
        </div>
    </div>


</template>
<script>
import FrontLayout from "@/Shared/FrontLayout";

export default {
    name: "Checkout",
    layout: FrontLayout,
}
</script>
<script setup>
import {useForm, usePage} from "@inertiajs/inertia-vue3";
import {onMounted, ref, computed, useAttrs} from "vue";
import Swal from "sweetalert2";

const totalPrice = computed(() => {
    let totalPrice = 0;
    usePage().props.value.cart.map(item => {
        totalPrice += item.quantity * item.price
    })
    return totalPrice;
});

const attrs = useAttrs();

const cartItems = computed(() => {
    let items = [];
    usePage().props.value.cart != null
        ?usePage().props.value.cart.forEach(item => {
            items.push(item);
        })
        : null;

    return items;
})

let form = useForm({
    name: '',
    email: '',
    phone: '',
    address_1: '',
    address_2: '',
    city: '',
    state: '',
    country: '',
    paymentMethodID: ''
})

const cardElement = ref(null);
let stripe = Stripe('pk_test_51L9rXXHjtxfULDB0OG0EaIi9DWiWk6burl72ax2RusjGRu0sNEji3QfGlGZL66vQe8PU2VPkpnr3gAFaZBrgz8Az006RW9s6BR');
let style = {
    base: {
        border: '1px solid #D8D8D8',
        borderRadius: '4px',
        color: "#000",
    }
}
let elements = stripe.elements();
let card = elements.create("card", style);
onMounted(() => {

    card.mount(cardElement.value)
})

const submit = () => {
    console.log(cardElement.value);
    stripe.createPaymentMethod({
        type: 'card',
        card: card,
        billing_details: {
            name: form.name,
            email: form.email,
            phone: form.phone,
            address: {
                "city": form.city,
                "line1": form.address_1,
                "line2": form.address_2,
                "state": form.state
            }
        },
    }).then((result) => {
        form.paymentMethodID = result.paymentMethod.id;

        console.log(form.paymentMethodID);

        form.post('/checkout', {
            onSuccess: () => {
                form.reset();
                Swal.fire({
                    title: 'Success',
                    icon: 'success',
                    text: 'We have accepted your order!'
                })
            },
            onError: () => {
                Swal.fire({
                    title: 'Error',
                    icon: 'error',
                    text: attrs.errors.stock
                })
            }
        });
    });
}





// noinspection JSUnresolvedFunction


</script>

<style scoped>

</style>
