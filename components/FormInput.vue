<script setup lang="ts">
import { useField } from '@vorms/core';
import * as z from 'valibot';

const props = defineProps<{
	label:        string,
	name:         string,
	validations?: z.Pipe<string>
}>();

const { value, attrs, error } = useField<string>(toRef(() => props.name), {
	validate (value) {
		const parse = z.safeParse(
			z.string('Field is required', [
				z.minLength(1, 'Field is required'),
				...props.validations || [],
			]),
			value,
		);

		if (parse.success) return;
		return z.flatten(parse.issues).root?.[0];
	},
});
const isError = computed(() => !!error.value);
</script>

<template>
  <div class="mt-4">
    <div class="flex justify-between text-sm">
      <label :for="label">{{ label }}</label>
      <label v-if="isError" :for="label" class="text-red-5">{{ error }}</label>
    </div>
    <input
      v-bind="attrs"
      v-model="value"
      :aria-errormessage="error"
      class="border rounded px-2 py-1 w-full"
      :class="isError ? 'border-red-5 hocus:border-red-7' : 'border-#DBDADF hocus:border-#514E93'"
    >
  </div>
</template>

<style scoped>

</style>
