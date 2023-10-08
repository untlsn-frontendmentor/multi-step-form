<script setup lang="ts">
import 'untcss-reset';
const page = usePageNumber();
</script>

<template>
  <main class="bg-[#EEF5FF] min-h-screen">
    <article class="bg-white rounded-xl p-4 flex w-max mx-auto">
      <FormAside />
      <LazySubformsPage1 v-if="page == 1" />
      <LazySubformsPage2 v-else-if="page == 2" />
      <LazySubformsPage3 v-else-if="page == 3" />
      <LazySubformsPage4 v-else />
    </article>
  </main>
</template>
