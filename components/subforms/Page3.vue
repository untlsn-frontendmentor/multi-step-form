<script setup lang="ts">
const props = defineProps<{ values: boolean[], yearly?: boolean }>();
defineEmits<{ (e: 'update:values', values: boolean[]): void }>();
const checked = ref(props.values || [false, false, false]);

provide(yearlyKey, props.yearly);
</script>

<template>
  <form class="py-8 px-20 flex-(~ col) space-y-4 relative" @submit.prevent="$emit('update:values', props.values)">
    <h2 class="font-semibold text-3xl">
      Pick add-ons
    </h2>
    <p class="text-[#919297]">
      Add-ons help enhance your gaming experience.
    </p>
    <AdditionalCheckbox v-model="checked[0]" title="Online service" :price="1" description="Access to multiplayer games" />
    <AdditionalCheckbox v-model="checked[1]" title="Larger storage" :price="2" description="Extra 1TB of cloud save" />
    <AdditionalCheckbox v-model="checked[2]" title="Customizable Profile" :price="2" description="Custom theme on your profile" />
    <div class="flex justify-between items-center absolute bottom-0 left-0 w-full py-8 px-20">
      <NuxtLink to="/?page=2" class="text-black">
        Go back
      </NuxtLink>
      <FormSubmitButton />
    </div>
  </form>
</template>

<style scoped>

</style>
