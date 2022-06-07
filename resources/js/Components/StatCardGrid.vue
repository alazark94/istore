<template>
    <div class="grid grid-cols-3 gap-2 justify-center items-center m-10 gap-y-2">
        <StatCard heading="Total Sales" number="999"/>
        <StatCard heading="Total Sales" number="999"/>
        <StatCard heading="Total Sales" number="999"/>
        <StatCard heading="Total Sales" number="999"/>
        <StatCard heading="Total Sales" number="999"/>
    </div>
</template>

<script>
import StatCard from "@/Components/StatCard";
export default {
    name: "StatCardGrid",
    components: {
        StatCard
    }
}
</script>

<style scoped>

</style>
