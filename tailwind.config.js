/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				spline: "'Spline Sans', sans-serif",
			},
			textColors: {
				primary: "#c7d300",
				secondary: "rgba(177, 177, 177, 1)",
			},
		},
	},

	plugins: [require("daisyui")],
};

