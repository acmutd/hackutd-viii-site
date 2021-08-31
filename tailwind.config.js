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
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
