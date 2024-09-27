import daisyui from "daisyui"
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	 theme: {
		extend: {
			container: {
				center: true,
				padding: "2rem"
			}
		}
	},
	daisyui:{
		themes:["hallowen"],
	},
	plugins: [],
}
