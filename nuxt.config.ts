// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	vite:     {
		vue: {
			script: {
				defineModel: true,
			},
		},
	},
	modules: [
		'@unocss/nuxt',
		'@vueuse/nuxt',
	],
});
