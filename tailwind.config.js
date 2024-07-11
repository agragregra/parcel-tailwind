/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'selector',
	content: [
		'./src/**/*.{html,js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				'accent': 'var(--color-accent)', // app/styles/_config.sass
			},
		},
	},
	plugins: []
}
