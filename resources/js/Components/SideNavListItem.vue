<template>

    <li class="py-2 px-4 w-full hover:bg-gray-500">
        <Link :href="link.url">
            {{ link.title }}
        </Link>
    </li>

</template>

<script>
export default {
    name: "SideNavListItem",
    props: {
        heading: String,
        link: Object,
    }
}
</script>

<style scoped>

</style>
