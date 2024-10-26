/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				spline: "'Spline Sans', sans-serif",
			},
			textColor: {
				primary: "#c7d300",
				secondary: "rgba(177, 177, 177, 1)",
			},
			backgroundColor: {
				accent: "#c7d300",
				secondary: "#15160e",
			},
		},
	},
	plugins: [require("daisyui")],
};
