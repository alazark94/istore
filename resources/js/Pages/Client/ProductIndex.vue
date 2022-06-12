<template>
    <Head title="Products"/>

    <div class="w-10/12 mt-10 align-middle mx-auto">
        <StoreNav class="mb-5" :id="props.store_id"/>
        <ResourceHeading v-model="search" heading="Products" :link="link"/>

        <!-- This example requires Tailwind CSS v2.0+ -->
        <div class="mt-3 flex flex-col">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div
                    class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"
                >
                    <div
                        class="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg"
                    >
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                            <tr>
                                <th
                                    scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                                >
                                    Name
                                </th>
                                <th
                                    scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                                >
                                    Quantity
                                </th>
                                <th
                                    scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                                >
                                    Price
                                </th>


                                <th scope="col" class="relative px-6 py-3">
                                    <span class="sr-only">Action</span>
                                </th>
                            </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200 bg-white">
                            <tr v-for="product in products.data" :key="product.id">
                                <td class="whitespace-nowrap px-6 py-4">
                                    <div class="flex items-center">
                                        <div>
                                            <div
                                                class="text-sm font-medium text-gray-900"
                                            >
                                                <Link :href="`/products/${product.id}`" class="hover:text-blue-600">
                                                    {{ product.name }}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="whitespace-nowrap px-6 py-4">
                                    <div class="flex items-center">
                                        <div>
                                            <div
                                                class="text-sm font-medium text-gray-900"
                                            >
                                                {{ product.quantity }}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="whitespace-nowrap px-6 py-4">
                                    <div class="flex items-center">
                                        <div>
                                            <div
                                                class="text-sm font-medium text-gray-900"
                                            >
                                                {{ product.price }}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td
                                    class="whitespace-nowrap px-6 py-4 text-right text-sm font-medium"
                                >
                                    <div class="flex gap-2">
                                        <Link
                                            :href="`/products/${product.id}/edit`"
                                            class="text-blue-600 hover:text-blue-900"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                                 viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
                                            </svg>
                                        </Link>
                                        <button
                                            @click="warn(product.id)"
                                            class="text-red-600 hover:text-red-900"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                                 viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            <!-- More people... -->
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <Pagination :links="products.links" class="mx-auto mt-6 max-w-3xl"/>
    </div>
</template>
<script>

import ClientLayout from "@/Shared/ClientLayout";

export default {
    layout: ClientLayout
}
</script>
<script setup>
import {defineProps, ref, watch} from "vue";
import Pagination from "@/Shared/Pagination";
import StoreNav from "@/Components/StoreNav";
import {Inertia} from "@inertiajs/inertia";
import {debounce} from "lodash";
import ResourceHeading from "@/Components/ResourceHeading";
import Swal from "sweetalert2";

let props = defineProps({
    products: Object,
    filters: Object,
    can: Object,
    store_id: Number
});
let link = {
    title: 'Create Product',
    url: `/stores/${props.store_id}/products/create`
}
let search = ref(props.filters.search);
const warn = (id) => {
    console.log('clicked')
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            Inertia.delete(`/products/${id}`)

            Swal.fire(
                'Deleted!',
                'You have successfully deleted the product.',
                'success'
            )
        }
    })
}
watch(
    search,
    debounce((value) => {
        Inertia.get(
            "/stores",
            {
                search: value,
            },
            {
                preserveState: true,
                replace: true,
            }
        );
    }, 250)
);
</script>

<style></style>
