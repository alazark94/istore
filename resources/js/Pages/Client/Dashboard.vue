<template>
    <Head title="Dashboard"/>
    <StatCardGrid :my-total-revenue="myTotalRevenue"/>
</template>

<script>
import ClientLayout from "@/Shared/ClientLayout";

export default {
    name: "Dashboard",
    layout: ClientLayout,
    props: {
        myTotalRevenue: Number
    }
}
</script>

<script setup>
import StatCardGrid from "@/Components/StatCardGrid";
</script>

<style scoped>

</style>
