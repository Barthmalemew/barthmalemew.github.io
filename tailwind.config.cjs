/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography"),require("daisyui")],
	daisyui: {
		themes: [
			{
				mytheme: {

					"primary": "#fabd2f",

					"secondary": "#8ec07c",

					"accent": "#fabd2f",

					"neutral": "#fabd2f",

					"base-100": "#282828",

					"info": "#d3869b",

					"success": "#b8bb26",

					"warning": "#fe8019",

					"error": "#fb4934",
				},
			},
		],
	},
}
