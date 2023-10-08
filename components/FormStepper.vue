<script setup lang="ts">
defineProps<{
	step:     number,
	selected: boolean,
}>();
</script>

<template>
  <li class="flex text-white gap-2 items-center">
    <div
      class="rounded-full border-(~ white) size-8 flex justify-center items-center"
      :class="selected && 'bg-[#BFE1FB] text-black'"
    >
      {{ step }}
    </div>
    <div class="uppercase">
      <p class="text-[#C1C2FF]">
        step {{ step }}
      </p>
      <p class="font-bold">
        <slot />
      </p>
    </div>
  </li>
</template>

<style scoped>
</style>
