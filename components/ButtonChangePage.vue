<script setup lang="ts">
defineProps<{ page: number | string }>();
</script>

<template>
  <NuxtLink :href="`/?page=${page}`" class="text-text-gray">
    <slot>Go back</slot>
  </NuxtLink>
</template>

<style scoped>

</style>
