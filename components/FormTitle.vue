<script setup lang="ts">
defineProps<{ title: string, desc: string }>();
</script>

<template>
  <h2 class="font-semibold text-3xl">
    {{ title }}
  </h2>
  <p class="text-text-gray">
    {{ desc }}
  </p>
</template>

<style scoped>

</style>
