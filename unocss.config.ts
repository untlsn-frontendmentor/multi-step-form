import {
	defineConfig,
	presetWind,
	presetMini,
	presetTypography,
	presetWebFonts,
	transformerDirectives,
	transformerVariantGroup,
	transformerCompileClass,
} from 'unocss';
import { presetAio } from 'untcss';

export default defineConfig({
	theme: {
		colors: {
			text: {
				gray: '#919297',
			},
			c: {
				blue: '#483FFC',
				navy: '#03295A',
			},
		},
	},
	presets: [
		presetWind(),
		presetMini(),
		presetTypography(),
		presetWebFonts({
			fonts: {
				sans: 'Ubuntu',
			},
		}),
		presetAio(),
	],
	transformers: [
		transformerDirectives(),
		transformerVariantGroup(),
		transformerCompileClass(),
	],
});
