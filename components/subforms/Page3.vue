<script setup lang="ts">
import FormTitle from '~/components/FormTitle.vue';
import additionalData from '~/data/additionalData';

const props = defineProps<{ values: boolean[], yearly?: boolean }>();
const emit = defineEmits<{ (e: 'update:values', values: boolean[]): void }>();
const checked = ref(props.values || [false, false, false]);

provide(yearlyKey, props.yearly);

const onSubmit = () => {
	emit('update:values', props.values);
	navigateTo('/?page=4');
};
</script>

<template>
  <form class="py-8 px-20 flex-(~ col) space-y-4 relative max-lg:(max-w-90vw fixed z-10 inset-x-0 mx-auto top-32 bg-white rounded-xl)" @submit.prevent="onSubmit">
    <FormTitle title="Pick add-ons" desc="Add-ons help enhance your gaming experience." />
    <AdditionalCheckbox
      v-for="(it, i) in additionalData"
      :key="it.title"
      v-model="checked[i]"
      v-bind="it"
    />
    <div class="flex justify-between items-center absolute bottom-0 left-0 w-full py-8 px-20 max-lg:(fixed bg-white p-4)">
      <GoPageButton page="2" />
      <FormSubmitButton />
    </div>
  </form>
</template>

<style scoped>

</style>
