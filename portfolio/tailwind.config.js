/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {		
		fontFamily: {
			sans: [
				{
					fontFeatureSettings: '"cv11", "ss01"',
					fontVariationSettings: '"opsz" 32',
				},
			],
			serif: [
				'Merriweather, serif',
				{
					fontFeatureSettings: '"liga", "kern"',
				},
			],
		},
		container: {
			center: true,
		},
		extend: {
			screens: {
				'custom':'1350px',
	},
},
	},
	plugins: [],
};
