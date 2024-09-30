/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'slide-down': {
          '0%': { transform: 'translateY(-100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        }
      },
      colors: {
        'prussian-blue': '#344563',
        'ne-prussianBlue' : '#253858',
        'pale-blue': '#B2F5FE',
        'ef-black': '#242424',
        'gradus-blue': '#286FFF',
      }
    },
  },
  plugins: [],
}