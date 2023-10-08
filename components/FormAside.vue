<script setup lang="ts">
const page = usePageNumber();

const stepsNames = [
	'your info',
	'select plan',
	'add-ons',
	'summary',
];
</script>

<template>
  <aside class="aside-background bg-no-repeat bg-gradient-to-r from-[#483EFF] to-[#463FFF] p-8 rounded-xl h-140 w-68">
    <ul class="space-y-4">
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
.aside-background {
	background-image: url('/images/bg-sidebar-desktop.svg');
}
</style>
