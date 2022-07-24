<template>
    <div class="grid grid-cols-3 gap-4">
        <Store v-for="store in props.stores" :key="store.id" :store="store"/>
    </div>
</template>

<script>
export default {
    name: "StoreGrid"
}
</script>
<script setup>
import Store from '@/Components/Store';
import {defineProps} from "vue";

let props = defineProps({
    stores: Array
})
</script>
<style scoped>

</style>
