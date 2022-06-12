<template>
    <Head title="Create Store"/>
    <section class="bg-white p-8 rounded-xl w-full lg:w-10/12 mx-auto my-3">
        <h1 class="text-3xl mb-6">Create Product</h1>

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
                        for="quantity"
                        class="block mb-2 uppercase font-bold text-xs text-gray-700"
                    >
                        Quantity
                    </label>
                    <input
                        v-model="form.quantity"
                        type="number"
                        name="quantity"
                        id="quantity"
                        class="border rounded border-gray-400 p-2 w-full"
                    />
                    <span
                        class="block text-red-500 text-xs mt-1"
                        v-if="form.errors.quantity"
                    >{{ form.errors.quantity }}</span
                    >
                </div>

                <div class="mb-6">
                    <label
                        for="price"
                        class="block mb-2 uppercase font-bold text-xs text-gray-700"
                    >
                        Price
                    </label>
                    <input
                        v-model="form.price"
                        type="number"
                        step=".01"
                        name="price"
                        id="price"
                        class="border rounded border-gray-400 p-2 w-full"
                    />
                    <span
                        class="block text-red-500 text-xs mt-1"
                        v-if="form.errors.price"
                    >{{ form.errors.price }}</span
                    >
                </div>

            </div>
            <div>
                <div class="mb-6">
                    <label
                        for="category"
                        class="block mb-2 uppercase font-bold text-xs text-gray-700"
                    >
                        Category
                    </label>
                    <select name="category" id="category" v-model="form.category" class="border rounded border-gray-400 p-2 w-full">
                        <option v-for="category in props.categories" :value="category.id" :key="category.id">{{ category.name }}</option>
                    </select>
                    <span
                        class="block text-red-500 text-xs mt-1"
                        v-if="form.errors.price"
                    >{{ form.errors.price }}</span
                    >
                </div>
                <div class="mb-6">
                    <label
                        for="image"
                        class="block mb-2 uppercase font-bold text-xs text-gray-700"
                    >
                        Image
                    </label>
                    <input
                        @input="form.image = $event.target.files[0]"
                        type="file"
                        name="image"
                        id="image"
                        class="border rounded border-gray-400 p-2 w-full"
                    />
                    <span
                        class="block text-red-500 text-xs mt-1"
                        v-if="form.errors.image"
                    >{{ form.errors.image }}</span
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

export default {
    name: "StoreCreate",
    layout: AdminLayout,
}
</script>

<script setup>
import {useForm} from "@inertiajs/inertia-vue3";
import Swal from "sweetalert2";
import {defineProps} from "vue";

let form = useForm({
    name: '',
    quantity: '',
    price: '',
    image: '',
    category: null
});

let props = defineProps({
    categories: Array,
    store_id: Number
});

console.log(props.categories);

let submit = () => {
    form.post(`/stores/${props.store_id}/products`, {
        onSuccess: () => {
            form.reset();
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'New Store Added',
                footer: '<a href="/admin/dashboard">Go to dashboard</a>'
            });
        },
    });

}
</script>

<style scoped>

</style>
