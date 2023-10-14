<script setup lang="ts">
const page = usePageNumber(4);

const stepsNames = [
	'your info',
	'select plan',
	'add-ons',
	'summary',
];
</script>

<template>
  <aside
    class="
			aside-background bg-no-repeat bg-cover bg-gradient-to-r from-[#483EFF] to-[#463FFF] p-8 rounded-xl w-68
			lg:(h-140)
			max-lg:(fixed top-0 left-0 w-full h-50)"
  >
    <ul class="flex gap-4 lg:flex-col max-lg:justify-center">
      <FormStepper
        v-for="(step, i) in stepsNames"
        :key="step"
        :selected="page == i+1"
        :step="i+1"
      >
        {{ step }}
      </FormStepper>
    </ul>
  </aside>
</template>

<style scoped>
@media (min-width: 1024px) {
	.aside-background {
		background-image: url('/images/bg-sidebar-desktop.svg');
	}
}
.aside-background {
	background-image: url('/images/bg-sidebar-mobile.svg');
}
</style>
