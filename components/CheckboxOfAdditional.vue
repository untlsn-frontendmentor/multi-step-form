<script setup lang="ts">
import getPrice from '../utils/getPrice';

defineProps<{
	title:       string,
	description: string,
	price:       number,
}>();
const selected = defineModel<boolean>({ required: true });
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
      +{{ getPrice(price, yearly) }}
    </p>
  </div>
</template>

<style scoped>

</style>
