<script setup lang="ts">
import { SecondPageFormInputs } from '~/types/FormsInputs';
import FormTitle from '~/components/FormTitle.vue';
import plans from '~/data/plans';

const props = defineProps<{
	values: SecondPageFormInputs
}>();
const emit = defineEmits<{ (e: 'update:values', values: SecondPageFormInputs): void }>();

const data = ref<SecondPageFormInputs>(props.values);


const submit = () => {
	emit('update:values', data.value);
	navigateTo('/?page=3');
};

</script>

<template>
  <form class="py-8 px-20 flex-(~ col) space-y-4 relative" @submit.prevent="submit">
    <FormTitle title="Select your plan" desc="You have the option of monthly or yearly billing." />
    <div class="flex justify-between gap-4">
      <BlockRadio
        v-for="(it, i) in plans"
        :key="it.title"
        :selected="data.selected == i"
        v-bind="it"
        :price="getPrice(it.price, data.isYearly)"
        @update:selected="data.selected = i"
      >
        <span v-if="data.isYearly" class="text-[#132F57]">2 months free</span>
      </BlockRadio>
    </div>
    <div class="bg-[#F8F9FE] rounded-lg flex gap-2 justify-center p-2">
      <p>Monthly</p>
      <label class="block bg-[#03285C] py-px px-1 w-9 rounded-full">
        <input
          v-model="data.isYearly"
          type="checkbox"
          class="appearance-none size-3 bg-white rounded-full transition-transform checked:translate-x-4"
        >
      </label>
      <p>Yearly</p>
    </div>

    <div class="flex justify-between items-center absolute bottom-0 left-0 w-full py-8 px-20">
      <GoPageButton page="1" />
      <FormSubmitButton />
    </div>
  </form>
</template>

<style scoped>

</style>
