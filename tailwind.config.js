/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'selector',
	content: [
		'./src/**/*.{html,js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				'accent': 'var(--color-accent)', // app/css/main.css
			},
		},
	},
	plugins: []
}
