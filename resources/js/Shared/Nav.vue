<template>
    <nav>
        <ul class="flex ml-6 space-x-4 list-inside">
            <li>
                <NavLink href="/logout" as="button" method="post"
                >Logout
                </NavLink>
            </li>
        </ul>
    </nav>
</template>

<script>
import NavLink from '@/Shared/NavLink'
export default {
    name: "Nav",
    components: {
        NavLink
    }
}
</script>

<style scoped>

</style>
