const { black } = require('tailwindcss/colors');
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Neon 80s', 'sans-serif'],
      display: ['Good Times', 'sans-serif'],
      header: ['Neon 80s', 'sans-serif'],
    },
    minWidth: {
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      '160px': '160px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
