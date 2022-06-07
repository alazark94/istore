<template>
    <div class="p-10 border rounded-3xl">
        <h3 class="text-center text-3xl">
            {{ heading }}
        </h3>
        <h1 class="text-7xl font-bold text-center">
            {{ number }}
        </h1>
    </div>
</template>

<script>
export default {
    name: "StatCard",
    props: {
        heading: String,
        number: Number
    }
}
</script>

<style scoped>

</style>
