/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'lightRed': '#ffd7d6',
        'lightGreen': '#c0f4bc'
      },

      fontFamily: {
        'BalsamiqSans': ['Balsamiq Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}
