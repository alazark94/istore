<template>
    <Head title="Dashboard"/>
    <StatCardGrid :totalRevenue="totalRevenue" :myTotalRevenue="myTotalRevenue"/>


</template>

<script>
import AdminLayout from "@/Shared/AdminLayout";
import StatCardGrid from "@/Components/StatCardGrid";

export default {
    name: "Dashboard",
    layout: AdminLayout,
    components: {
        StatCardGrid
    },
    props: {
        totalRevenue: Number,
        myTotalRevenue: Number
    }
}
</script>

<style scoped>

</style>
