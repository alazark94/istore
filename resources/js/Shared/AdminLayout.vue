<template>
    <div class="flex divide-x-2 divide-gray-400">
        <SideNav class="w-60 min-h-screen"/>
        <main class="w-full">
            <section class="bg-gray-900 p-6">
                <header class="flex justify-between">
                    <div class="flex items-center text-white">
                        <h1 class="text-lg font-bold">iStore</h1>
                        <p class="ml-4 text-sm">
                            Welcome back, {{ $page.props.auth.user.username }}
                        </p>
                    </div>
                    <Nav class="text-white" />
                </header>
            </section>
            <slot/>
        </main>
    </div>
</template>

<script>
import SideNav from "@/Components/SideNav";
import Nav from "@/Shared/Nav";
export default {
    name: "AdminLayout",
    layout: null,
    components: {
        SideNav,
        Nav
    }
}
</script>

<style scoped>

</style>
