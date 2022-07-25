<template>
    <Head title="Create Category" />
    <section class="bg-white p-8 rounded-xl w-full lg:w-1/2 mx-auto my-3">
        <div class="flex justify-between">
            <h1 class="text-3xl mb-6">Create Category</h1>
            <Link
                class="text-blue-600 hover:underline"
                :href="`/stores/${props.store_id}/categories`"
                >Go Back</Link
            >
        </div>

        <form @submit.prevent="submit">
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
            <button
                type="submit"
                class="bg-blue-400 text-white rounded py-2 px-4 hover:bg-blue-500 disabled:bg-gray-200 disabled:text-gray-700"
                :disabled="form.processing"
            >
                Submit
            </button>
        </form>
    </section>
</template>

<script>
import AdminLayout from "@/Shared/AdminLayout";

export default {
    name: "CategoryCreate",
    layout: AdminLayout,
};
</script>

<script setup>
import { useForm } from "@inertiajs/inertia-vue3";
import Swal from "sweetalert2";
import { defineProps } from "vue";
import AdminLayoutVue from "../../Shared/AdminLayout.vue";

let form = useForm({
    name: props.category.name,
});

let props = defineProps({
    category: Object,
    store_id: Number,
});

let submit = () => {
    form.put(`/categories/${props.category.id}`, {
        onSuccess: () => {
            form.reset();
            Swal.fire({
                icon: "success",
                title: "Success",
                text: "Category Updated",
                footer: '<a href="/dashboard">Go to dashboard</a>',
            });
        },
    });
};
</script>

<style scoped></style>
