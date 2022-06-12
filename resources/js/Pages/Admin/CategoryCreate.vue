<template>
    <Head title="Create Store"/>
    <section class="bg-white p-8 rounded-xl w-full lg:w-1/2 mx-auto my-3">
        <h1 class="text-3xl mb-6">Create Category</h1>

        <form @submit.prevent="submit" >

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
}
</script>

<script setup>
import {useForm} from "@inertiajs/inertia-vue3";
import Swal from "sweetalert2";
import {defineProps} from "vue";

let form = useForm({
    name: '',
});

let props = defineProps({
    categories: Array,
    store_id: Number
});


let submit = () => {
    form.post(`/stores/${props.store_id}/categories`, {
        onSuccess: () => {
            form.reset();
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'New Category Added',
                footer: '<a href="/admin/dashboard">Go to dashboard</a>'
            });
        },
    });

}
</script>

<style scoped>

</style>
