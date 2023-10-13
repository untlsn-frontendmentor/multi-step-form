<script setup lang="ts">
const props = defineProps<{
	title:       string,
	description: string,
	price:       number,
	modelValue:  boolean
}>();
const emit = defineEmits<{ (e: 'update:modelValue', selected: boolean): void }>();
const selected = useVModel(props, 'modelValue', emit);
const yearly = inject(yearlyKey);
</script>

<template>
  <div
    class="flex items-center gap-4 p-6 border rounded-xl w-full lg:w-120"
    :class="selected && 'bg-[#F8F9FE] border-[#443EFA]'"
    @click="selected = !selected"
  >
    <input
      v-model="selected"
      class="appearance-none text-xl text-[#DBDADF] i-fluent-checkbox-unchecked-24-regular checked:(text-[#443EFA] i-fluent-checkbox-checked-24-filled)"
      type="checkbox"
    >
    <div>
      <h2 class="font-semibold">
        {{ title }}
      </h2>
      <p>{{ description }}</p>
    </div>
    <p class="text-[#565098] ml-auto">
      +${{ yearly ? price * 10 : price }}/{{ yearly ? 'yr' : 'mo' }}
    </p>
  </div>
</template>

<style scoped>

</style>
