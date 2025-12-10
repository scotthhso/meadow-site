// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./app/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./pages/**/*.{ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				meadow: {
					50: "#f4fbf6",
					100: "#e6f7ea",
					200: "#c9efd3",
					300: "#a2e3b5",
					400: "#6cd787",
					500: "#37c55d",
					600: "#22a64a", // <- good for buttons
					700: "#1b833d",
					800: "#176737",
					900: "#134f2f",
					950: "#0d3722",
				},
			},
		},
	},
	// plugins: [require("tailwindcss-animate")],
};
export default config;
