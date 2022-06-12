<template>
    <div class="mb-3 flex justify-between">
        <div class="flex items-baseline">
            <h1 class="text-4xl font-bold">{{ heading }}</h1>
            <Link
                v-if="link"
                :href="link.url"
                class="ml-8 text-blue-500 hover:underline"
            >{{ link.title }}
            </Link>
        </div>
        <input
            type="text"
            placeholder="Search..."
            class="rounded-lg border px-2"
            @input="$emit('update:modelValue', $event.target.value)"
        />
    </div>
</template>

<script>
export default {
    emits: [
        'update:modelValue'
    ],
    name: "ResourceHeading",
    props: {
        heading: String,
        link: {
            url: String,
            title: String
        },
        modelValue: String
    },

}
</script>

<style scoped>

</style>
