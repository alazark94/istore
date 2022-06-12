<!--suppress ALL -->
<template>
    <Head title="Users"/>
    <div class="w-10/12 mt-10 align-middle mx-auto">
        <ResourceHeading v-model="search" :heading="$page.url.includes('?admins_only') ? 'Admin' : 'Users'" :link="$page.url.includes('?admins_only') ? link : null"/>

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

                                <th scope="col" class="relative px-6 py-3">
                                    <span class="sr-only">Action</span>
                                </th>
                            </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200 bg-white">
                            <tr v-for="user in users.data" :key="user.id">

                                <td class="whitespace-nowrap px-6 py-4">
                                    <div class="flex items-center">
                                        <div>
                                            <div
                                                class="text-sm font-medium text-gray-900"
                                            >

                                                {{ user.name }}

                                            </div>
                                            <div class="text-sm text-gray-500">
                                                {{ user.email }}
                                            </div>
                                        </div>
                                    </div>
                                </td>

                                <td
                                    class="whitespace-nowrap px-6 py-4 text-right text-sm font-medium"
                                >
                                    <div>
                                        <button
                                            @click="warn(user.id)"
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

        <Pagination :links="users.links" class="mx-auto mt-6 max-w-3xl"/>
    </div>
</template>
<script>
import AdminLayout from "@/Shared/AdminLayout";

export default {
    layout: AdminLayout
}
</script>
<script setup>
import {defineProps, ref, watch} from "vue";
import Pagination from "@/Shared/Pagination";
import {Inertia} from "@inertiajs/inertia";
import {debounce} from "lodash";
import ResourceHeading from "@/Components/ResourceHeading";
import Swal from "sweetalert2";

let props = defineProps({
    users: Object,
    filters: Object,
    can: Object,
});
let link = {
    title: 'Create Admin',
    url: '/users/create'
}
let search = ref(props.filters.search);

const warn = (id) => {
    Swal.fire({
        title: 'Are you sure you want to delete this user?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            Inertia.delete(`/users/${id}`)

            Swal.fire(
                'Deleted!',
                'You have successfully deleted the user.',
                'success'
            )
        }
    })
}

watch(
    search,
    debounce((value) => {
        Inertia.get(
            "/users",
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
