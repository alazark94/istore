<template>


    <div class="flex items-center content-center w-10/12 mx-auto text-black space-x-6">
        <div class="my-10 ">
            <StoreGrid :stores="props.stores.data"/>
            <div class="flex justify-center my-5">
                <Pagination :links="props.stores.links"/>
            </div>
        </div>

    </div>
</template>

<script>
import FrontLayout from "@/Shared/FrontLayout";


export default {
    name: "Stores",
    layout: FrontLayout
}
</script>

<script setup>
import StoreGrid from "@/Components/StoreGrid";
import Pagination from "@/Shared/Pagination";
import {defineProps} from "vue";

let props = defineProps({
    stores: Object
})
</script>

<style scoped>

</style>
