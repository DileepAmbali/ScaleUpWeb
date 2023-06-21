/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
	// darkMode:'media',
	content: [
		"./src/**/*.html",
		"./src/**/*.vue",
		"./src/**/*.jsx",
		"./index.html"
	],
	theme: {
		screens: {
			xxs: "360px",
			xs: "475px",
			ms: "530px",
			...defaultTheme.screens
		},
		extend: {
			gridTemplateRows: {
				"[auto,auto,1fr]": "auto auto 1fr"
			},
			colors: {
				primary: {
					50: "#fff1f2",
					100: "#ffe4e6",
					200: "#fecdd3",
					300: "#fda4af",
					400: "#fb7185",
					500: "#f43f5e",
					600: "#e11d48",
					700: "#be123c",
					800: "#9f1239",
					900: "#881337"
				}
			},
			fontFamily: {
				body: [
					"Inter",
					"ui-sans-serif",
					"system-ui",
					"-apple-system",
					"system-ui",
					"Segoe UI",
					"Roboto",
					"Helvetica Neue",
					"Arial",
					"Noto Sans",
					"sans-serif",
					"Apple Color Emoji",
					"Segoe UI Emoji",
					"Segoe UI Symbol",
					"Noto Color Emoji"
				],
				sans: [
					"Inter",
					"ui-sans-serif",
					"system-ui",
					"-apple-system",
					"system-ui",
					"Segoe UI",
					"Roboto",
					"Helvetica Neue",
					"Arial",
					"Noto Sans",
					"sans-serif",
					"Apple Color Emoji",
					"Segoe UI Emoji",
					"Segoe UI Symbol",
					"Noto Color Emoji"
				],
				serif: [
					"Roboto Slab",
					"ui-serif",
					"Georgia",
					"Cambria",
					"Times New Roman",
					"Times",
					"serif"
				]
			}
		}
	},
	plugins: [require("@tailwindcss/aspect-ratio")]
}

// ,require('@tailwindcss/forms'),require('@tailwindcss/typography'
