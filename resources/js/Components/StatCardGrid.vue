<template>
    <div class="grid grid-cols-3 gap-2 justify-center items-center m-10 gap-y-2">
        <StatCard v-if="totalRevenue" heading="Total Revenue" :number="totalRevenue"/>
        <StatCard heading="My Total Revenue" :number="myTotalRevenue"/>
    </div>
</template>

<script>
import StatCard from "@/Components/StatCard";
export default {
    name: "StatCardGrid",
    components: {
        StatCard
    },
    props: {
        totalRevenue: Number,
        myTotalRevenue: Number
    }
}
</script>

<style scoped>

</style>
