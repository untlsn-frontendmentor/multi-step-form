<script setup lang="ts">
import { useForm } from '@vorms/core';
import * as z from 'valibot';
import passProxy from '~/composables/passProxy';
import FormSubmitButton from '~/components/FormSubmitButton.vue';

type FormInput = {
	name:  string,
	email: string,
	phone: string,
}

const form = useForm<FormInput>({
	initialValues: {
		name:  '',
		email: '',
		phone: '',
	},
	onSubmit (values) {
		console.log(values);
	},
});

const names = passProxy<FormInput>();

</script>

<template>
  <form class="py-8 px-20 flex-(~ col)" @submit="form.handleSubmit">
    <h2 class="font-semibold text-3xl">
      Personal info
    </h2>
    <p class="text-[#919297]">
      Please provide your name, email address, and phone number.
    </p>

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
    <FormSubmitButton />
  </form>
</template>

<style scoped>

</style>
