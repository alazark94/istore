<template>
    <Link :href="link.url">
        <li class="py-2 px-4 w-full hover:bg-gray-500">

            {{ link.title }}

        </li>
    </Link>
</template>

<script>
export default {
    name: "SideNavListItem",
    props: {
        heading: String,
        link: Object
    }
}
</script>

<style scoped>

</style>
