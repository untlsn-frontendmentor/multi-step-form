<script setup lang="ts">
import { useForm } from '@vorms/core';
import * as z from 'valibot';
import passProxy from '~/composables/passProxy';
import FormSubmitButton from '~/components/FormSubmitButton.vue';
import { FirstPageFormInputs } from '~/types/FormsInputs';
import FormTitle from '~/components/FormTitle.vue';

const props = defineProps<{
	values: FirstPageFormInputs,
}>();

const emits = defineEmits<{ (e: 'update:values', values: FirstPageFormInputs): void }>();

const form = useForm<FirstPageFormInputs>({
	initialValues: props.values,
	onSubmit (values) {
		emits('update:values', values);
		navigateTo('/?page=2');
	},
});

const names = passProxy<FirstPageFormInputs>();

</script>

<template>
  <form class="py-8 px-20 flex-(~ col) max-lg:(max-w-90vw fixed z-10 inset-x-0 mx-auto top-32 bg-white rounded-xl)" @submit="form.handleSubmit">
    <FormTitle title="Personal info" desc="Please provide your name, email address, and phone number." />
    <FormInput
      label="Name"
      placeholder="e.g. Stephen King"
      :name="names.name"
    />
    <FormInput
      label="Email Address"
      placeholder="e.g. stephenking@lorem.com"
      :name="names.email"
      :validations="[
        z.email('Email is invalid')
      ]"
    />
    <FormInput
      label="Phone Number"
      placeholder="e.g. +1 234 567 890"
      :name="names.phone"
      :validations="[
        z.custom((str) => str.replaceAll(' ', '').length >= 9, 'Phone number is to short'),
        z.regex(/^\+\d+[ \d]+$/, 'Phone number is invalid e.g (+1 123 123 123)')
      ]"
    />
    <div class="text-right mt-auto max-lg:(fixed bottom-0 left-0 w-full bg-white p-4)">
      <FormSubmitButton class="" />
    </div>
  </form>
</template>

<style scoped>

</style>
