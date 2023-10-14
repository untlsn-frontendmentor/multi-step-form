<script setup lang="ts">
import 'untcss-reset';
import { FirstPageFormInputs, SecondPageFormInputs } from '~/types/FormsInputs';
const page = usePageNumber();

onMounted(() => {
	page.value = 1;
});
const formsValues = ref<[FirstPageFormInputs, SecondPageFormInputs, boolean[]]>([
	{
		name:  '',
		email: '',
		phone: '',
	},
	{
		selected: 0,
		isYearly: false,
	},
	[false, false, false],
]);
</script>

<template>
  <main class="bg-[#EEF5FF] min-h-screen">
    <article class="bg-white rounded-xl p-4 flex justify-stretch w-max mx-auto">
      <FormAside />

      <LazySubformsPage4
        v-if="page == 4"
        :data="formsValues"
      />
      <LazySubformsPage3 v-else-if="page == 3" v-model:values="formsValues[2]" :yearly="formsValues[1].isYearly" />
      <LazySubformsPage2 v-else-if="page == 2" v-model:values="formsValues[1]" />
      <LazySubformsPage1 v-else v-model:values="formsValues[0]" />
    </article>
  </main>
</template>
