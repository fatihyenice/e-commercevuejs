<template>
    <RouterLink :to="url">
        {{ name }}
    </RouterLink>
</template>

<script setup>
const props = defineProps({
    name: String,
    url: String,
})
</script>