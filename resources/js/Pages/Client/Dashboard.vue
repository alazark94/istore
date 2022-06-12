<template>
    <Head title="Dashboard"/>
    <StatCardGrid/>
</template>

<script>
import ClientLayout from "@/Shared/ClientLayout";

export default {
    name: "Dashboard",
    layout: ClientLayout
}
</script>

<script setup>
import StatCardGrid from "@/Components/StatCardGrid";
</script>

<style scoped>

</style>
