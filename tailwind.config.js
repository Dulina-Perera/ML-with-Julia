/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'dark-background': '#0f161e',
			},
			fontSize: {
				'fluid-0': 'clamp(.75rem, 2vw, 1rem)',
				'fluid-1': 'clamp(1rem, 4vw, 1.5rem)',
				'fluid-2': 'clamp(1.5rem, 6vw, 2.5rem)',
				'fluid-3': 'clamp(2rem, 9vw, 3.5rem)',
			},
		},
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/typography')
	],
};
