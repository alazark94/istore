<template>
    <div class="flex divide-x-2 divide-gray-400">
        <SideNav class="w-60 min-h-screen">
            <SideNavList :links="links" heading="Management" />
            <div class="flex justify-center">
                <Link class="border border-gray-400 rounded mx-auto px-4 py-2 bg-blue-600 hover:bg-blue-900" :href="`/users/${$page.props.auth.user.id}/stores/create`">
                    Create Store
                </Link>
            </div>

        </SideNav>
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
import SideNavList from "@/Components/SideNavList";
export default {
    name: "AdminLayout",
    layout: null,
    components: {
        SideNav,
        Nav,
        SideNavList
    },
    data() {
        return {
            links: [
                {
                    url: '/dashboard',
                    title: 'Dashboard',

                },
                {
                    url: '/profile',
                    title: 'Profile'
                },
                {
                    url: `/users/${this.$page.props.auth.user.id}/stores`,
                    title: 'My Stores'
                },
            ],
        }
    },
    mounted() {
        console.log(this.$page.props.auth.user);
    }
}
</script>

<style scoped>

</style>
