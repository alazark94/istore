<template>
    <Head title="Create Store"/>
    <section class="bg-white p-8 rounded-xl w-full lg:w-10/12 mx-auto my-3">
        <h1 class="text-3xl mb-6">Create Store</h1>

        <form @submit.prevent="submit" class="grid grid-cols-2 gap-10">
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
                        for="address"
                        class="block mb-2 uppercase font-bold text-xs text-gray-700"
                    >
                        Address
                    </label>
                    <input
                        v-model="form.address"
                        type="text"
                        name="address"
                        id="address"
                        class="border rounded border-gray-400 p-2 w-full"
                    />
                    <span
                        class="block text-red-500 text-xs mt-1"
                        v-if="form.errors.address"
                    >{{ form.errors.address }}</span
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

                <button
                    type="submit"
                    class="bg-blue-400 text-white rounded py-2 px-4 hover:bg-blue-500 disabled:bg-gray-200 disabled:text-gray-700"
                    :disabled="form.processing"
                >
                    Submit
                </button>
            </div>
        </form>
    </section>
</template>

<script>
import AdminLayout from "@/Shared/AdminLayout";
import ClientLayout from "@/Shared/ClientLayout";

export default {
    name: "StoreUpdate",
    layout: ClientLayout,
}
</script>

<script setup>
import {useForm} from "@inertiajs/inertia-vue3";
import Swal from "sweetalert2";

let props = defineProps({
    store: Object
});

let form = useForm({
    name: props.store.name,
    phone: props.store.phone,
    address: props.store.address,
    city: props.store.city,
    state: props.store.state,
    country: props.store.country,
});

let submit = (id) => {
    form.put(`/stores/${props.store.id}`, {
        onSuccess: () => {
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Store Updated Added',
                footer: '<a href="/dashboard">Go to dashboard</a>'
            });
        },
    });

}
</script>

<style scoped>

</style>
