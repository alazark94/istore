<template>
    <Head title="Dashboard"/>
    <StatCardGrid/>


</template>

<script>
import AdminLayout from "@/Shared/AdminLayout";
import StatCardGrid from "@/Components/StatCardGrid";

export default {
    name: "Dashboard",
    layout: AdminLayout,
    components: {
        StatCardGrid
    }
}
</script>

<style scoped>

</style>
