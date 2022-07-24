<template>
    <div class="max-w-60">

        <div class="border rounded-3xl mx-auto overflow-hidden p-10 hover:bg-gray-300">

            <h3 class="text-center py-4">

                    <span class="font-bold">
                        <Link class="hover:bg-gray-300" :href="`/${props.store.id}`">
                        {{ props.store.name }}
                        </Link>
                    </span>

            </h3>

        </div>

    </div>
</template>

<script>
export default {
    name: "Store"
}

</script>
<script setup>
import {defineProps} from "vue";

let props = defineProps({
    store: Object
});

console.log(props.store.id);
</script>

<style scoped>

</style>
