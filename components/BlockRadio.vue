<script setup lang="ts">
defineProps<{
	src:      string,
	title:    string,
	price:    string,
	selected: boolean
}>();

defineEmits<{ (e: 'update:selected', selected: boolean): void }>();
</script>

<template>
  <label
    class="flex-(~ col) justify-between border-(~ [#b7b8bd]) hocus:border-[#514E93] w-32 h-40 p-3 rounded-lg text-sm"
    :class="selected && 'bg-[#F9F8FE]'"
  >
    <img :src="src" alt="" class="mb-auto size-8">
    <b class="text-[#132F57]">{{ title }}</b>
    <span class="text-[#919297]">{{ price }}</span>
    <slot />
    <input
      type="radio"
      name="block-radio"
      class="hidden"
      :checked="selected"
      @change="$emit('update:selected', ($event.target as HTMLInputElement).checked)"
    >
  </label>
</template>

<style scoped>

</style>
