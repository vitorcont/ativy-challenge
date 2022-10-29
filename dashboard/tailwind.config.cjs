/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#6DC843",
			},
		},
	},
	plugins: [],
	corePlugins: {
		preflight: false,
	},
};
