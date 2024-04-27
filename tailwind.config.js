/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", './index.html'],
  theme: {
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

