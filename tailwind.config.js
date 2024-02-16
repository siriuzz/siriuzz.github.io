/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{html,js}", './index.html'],
  theme: {

    extend: {
      fontFamily: {
        'fredoka': ['"Fredoka"','sans-serif']
      }
    },
  },
  plugins: [],
}

