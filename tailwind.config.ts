import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-roboto)', 'sans-serif'],
			},
			fontSize: {
				sm: '16px', 
				base: '18px', 
				lg: '24px', 
			},
			letterSpacing: {
				wide: '0.03em', // ~0.5px
				wider: '0.045em', // ~0.75px 
			  },
			colors: {
				primary: 'var(--primary-colour)',
				primaryHover: 'var(--primary-colour-hover)',
				background: 'var(--background-colour)',
				navBackground: 'var(--nav-background-colour)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				fadeInScale: {
				  "0%": { opacity: '0', transform: "scale(0.95)" },
				  "100%": { opacity: '1', transform: "scale(1)" },
				},
			  },
			  animation: {
				fadeInScale: "fadeInScale 0.3s ease-out",
			  },
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
