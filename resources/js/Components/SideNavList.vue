<template>
    <div>
        <h3 class="text-gray-400 font-bold text-sm px-4">{{ heading }}</h3>
        <div>
            <ul v-for="link in links" class="divide-y-2 divide-gray-400" >
                <SideNavListItem :link="link"/>
            </ul>
        </div>
    </div>
</template>

<script>
import SideNavListItem from "@/Components/SideNavListItem";

export default {
    name: "SideNavLists",
    components: {
        SideNavListItem
    },
    props: {
        heading: String,
        links: Array
    }
}
</script>

<style scoped>

</style>
