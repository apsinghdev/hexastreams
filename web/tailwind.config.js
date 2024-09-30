/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'prussian-blue': '#344563',
        'pale-blue': '#B2F5FE',
        'ef-black': '#242424',
        'gradus-blue': '#286FFF',
      }
    },
  },
  plugins: [],
}