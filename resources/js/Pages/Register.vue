<template>
    <Head title="Become a Store"/>
    <main class="flex items-center min-h-screen">
        <section class="bg-white p-8 rounded-xl w-full lg:w-1/4 mx-auto border">
            <h1 class="text-3xl text-center mb-6">Become a Store</h1>

            <form @submit.prevent="submit">
                <div class="mb-6">
                    <label
                        for="email"
                        class="block mb-2 uppercase font-bold text-xs text-gray-700"
                    >
                        Full Name
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
                        for="password"
                        class="block mb-2 uppercase font-bold text-xs text-gray-700"
                    >
                        Password
                    </label>
                    <input
                        v-model="form.password"
                        type="password"
                        name="password"
                        id="password"
                        class="border rounded border-gray-400 p-2 w-full"
                    />
                    <span
                        class="block text-red-500 text-xs mt-1"
                        v-if="form.errors.password"
                    >{{ form.errors.password }}</span
                    >
                </div>
                <div class="mb-6">
                    <label
                        for="email"
                        class="block mb-2 uppercase font-bold text-xs text-gray-700"
                    >
                        Confirm Password
                    </label>
                    <input
                        v-model="form.password_confirmation"
                        type="password"
                        name="password_confirmation"
                        id="password_confirmation"
                        class="border rounded border-gray-400 p-2 w-full"
                    />
                    <span
                        class="block text-red-500 text-xs mt-1"
                        v-if="form.errors.password_confirmation"
                    >{{ form.errors.password_confirmation }}</span
                    >
                </div>
                <div class="flex justify-between items-center">
                    <button
                        type="submit"
                        class="bg-blue-400 text-white rounded py-2 px-4 hover:bg-blue-500 disabled:bg-gray-200 disabled:text-gray-700"
                        :disabled="form.processing"
                    >
                        Submit
                    </button>
                    <Link href="/" class="text-blue-600 hover:underline">
                        Go to home
                    </Link>
                </div>
            </form>
        </section>
    </main>
</template>


<script setup>
import {useForm} from "@inertiajs/inertia-vue3";

let form = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
});

let submit = () => {
    form.post("/register");
};
</script>

<style scoped></style>
