<template>
    <section class="bg-white p-8 rounded-xl w-full lg:w-10/12 mx-auto my-3">
        <div class="flex justify-between">
            <h1 class="text-3xl mb-6">Order</h1>
            <Link class="text-blue-600 hover:underline" :href="`/stores/${order.store_id}/orders`">Go Back</Link>
        </div>

        <div class="flex justify-around">
            <div class="w-1/3">
                <h1 class="text-xl">Customer Detail</h1>
                <div class="border-2 border-gray-400 p-4 rounded-lg">
                    <p>Full Name: {{order.customer.name}}</p>
                    <p>Phone: {{order.customer.phone}}</p>
                    <p>Email: {{order.customer.email}}</p>
                    <p>Address 1: {{order.customer.address_1}}</p>
                    <p v-if="order.customer.address_2">Address 2: {{order.customer.address_2}}</p>
                    <p>City: {{order.customer.city}}</p>
                    <p>State: {{order.customer.state}}</p>
                    <p>Country: {{order.customer.country}}</p>
                </div>
            </div>
            <div class="w-1/3">
                <h1 class="text-xl">Products</h1>
                <div class="border-2 border-gray-400 p-4 rounded-lg">
                    <div class="flex justify-around" v-for="product in JSON.parse(order.line_items)" :key="product.id">
                        <p>{{ product.name }}</p>
                        <p>{{product.quantity}} x ${{product.price}} = ${{product.quantity * product.price}}</p>
                    </div>
                    <div class="flex justify-around mt-5">
                        <p class="text-lg font-bold">Total</p>
                        <p class="text-lg font-bold">${{order.total_price}}</p>
                    </div>
                </div>

            </div>
        </div>
        <h1 class="text-2xl my-5">Update Status</h1>
        <p class="text-sm">Current Status: {{order.status}}</p>
        <form class="w-1/4" @submit.prevent="submit">
            <div class="mb-6">
                <label
                    for="status"
                    class="block mb-2 uppercase font-bold text-xs text-gray-700"
                >
                    Status
                </label>
                <select name="status" id="status" v-model="form.status" class="border rounded border-gray-400 p-2 w-full">
                    <option value="pending_payment">Pending Payment</option>
                    <option value="paid">Paid</option>
                    <option value="completed">Completed</option>
                </select>
                <span
                    class="block text-red-500 text-xs mt-1"
                    v-if="form.errors.status"
                >{{ form.errors.status }}</span
                >
            </div>
            <button
                type="submit"
                class="bg-blue-400 text-white rounded py-2 px-4 hover:bg-blue-500 disabled:bg-gray-200 disabled:text-gray-700"
                :disabled="form.processing"
            >
                Update
            </button>
        </form>


    </section>
</template>

<script>
import AdminLayout from "@/Shared/AdminLayout";

export default {
    name: "OrderView",
    layout: AdminLayout
}
</script>
<script setup>
import {useForm} from "@inertiajs/inertia-vue3";
import Swal from "sweetalert2";

let props = defineProps({
    order: Object
})

let form = useForm({
    status: null
})

let submit = () => {
    form.put('/orders/'+props.order.id, {
        onSuccess: () => {
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Order Status Changed',
                footer: '<a href="/dashboard">Go to dashboard</a>'
            });
        },
        onError: () => {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: form.errors.status,
                footer: '<a href="/dashboard">Go to dashboard</a>'
            });
        }
    })
}
</script>
<style scoped>

</style>
