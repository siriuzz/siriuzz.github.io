/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", './index.html'],
  theme: {
    extend: {
      dropShadow: {
        '2xl': '0px 0px 55px rgba(48, 122, 234, 0.55)',
      }
    },
    colors: {
      'blue': '#1b3a67',
      'light-blue': '#224A85',
      'dark-blue':'#0f1e39', 
      'black': '#040101',
      'silver': '#cecccc',
      'white': '#fbfcfa',
    },
    // extend: {
    //   fontFamily: {
    //     'oswald': ['"Oswald"','sans-serif']
    //   }
    // },
  },
  plugins: [],
}

