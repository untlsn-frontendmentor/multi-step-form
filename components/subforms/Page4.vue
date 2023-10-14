<script setup lang="ts">
import additionalData, { AdditionalData } from '../../data/additionalData';
import { FlatFormInputs, TupleFormInputs } from '~/types/FormsInputs';
import FormTitle from '~/components/FormTitle.vue';
import plans from '~/data/plans';

const props = defineProps<{ data: TupleFormInputs }>();
const flat = computed((): FlatFormInputs => ({
	...props.data[0],
	...props.data[1],
	additional: props.data[2],
}));
const selectedAdditional = computed(() => {
	const selected: AdditionalData[] = [];
	flat.value.additional.forEach((checked, i) => {
		if (checked) selected.push(additionalData[i]);
	});
	return selected;
});
const plan = computed(() => plans[flat.value.selected]);

const totalPrice = computed(() => plan.value.price + selectedAdditional.value.reduce((acc, cur) => acc + cur.price, 0));
</script>

<template>
  <article class="py-8 px-20 flex-(~ col) space-y-4 relative">
    <FormTitle title="Finishing up" desc="Double-check everything looks OK before confirming." />
    <section class="bg-[#F8F9FE] rounded-lg p-6">
      <div class="flex justify-between items-center border-b pb-4">
        <div>
          <p class="font-semibold">
            {{ plan.title }}
            ({{ flat.isYearly ? 'Yearly' : 'Monthly' }})
          </p>
          <NuxtLink class="underline" href="/?page=2">
            Change
          </NuxtLink>
        </div>
        <p class="font-semibold">
          {{ getPrice(plan.price, flat.isYearly) }}
        </p>
      </div>
      <ul class="pt-4 space-y-4">
        <li v-for="it in selectedAdditional" :key="it.title" class="flex justify-between">
          <p class="text-text-gray">
            {{ it.title }}
          </p>
          <p>
            {{ getPrice(it.price, flat.isYearly) }}
          </p>
        </li>
      </ul>
    </section>
    <div class="flex justify-between mx-6">
      <p class="text-text-gray">
        Total (per {{ flat.isYearly ? 'year' : 'month' }})
      </p>
      <p class="text-lg font-semibold text-c-blue">
        {{ getPrice(totalPrice, flat.isYearly) }}
      </p>
    </div>
    <div class="flex justify-between items-center absolute bottom-0 left-0 w-full py-8 px-20">
      <GoPageButton page="3" />
      <GoPageButton page="5" class="bg-c-navy text-white hocus:bg-c-blue px-6 py-3 rounded-lg">
        Next Step
      </GoPageButton>
    </div>
  </article>
</template>

<style scoped>

</style>
