const { black } = require('tailwindcss/colors');
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['wavehaus'],
      },
      minWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '160px': '160px',
        64: '16rem',
        56: '14rem',
        '9/10': '90%',
        '30px': '30px',
      },
      width: {
        '1/8': '12.5%',
        '3/8': '37.5%',
        '5/8': '62.5%',
        '7/8': '87.5%',
        '1/7': '14.29%',
        '6/7': '85.71%',
      },
      minHeight: {
        '1/3': '33.33%',
        '9/10': '90%',
        '1/2': '50%',
        '1/4': '25%',
        '5/8': '62.5%',
        16: '4rem',
      },
      backgroundColor: (theme) => ({
        lightBackground: '#F4F4F4',
        aqua: '#D8F8FF',
        darkAqua: '#B0F1FF',
        pink: '#FF00E5',
        cyan: '#00E0FF',
        yellow: '#FFD600',
      }),
      left: {
        '-0.5': '-0.1rem',
      },
      borderColor: (theme) => ({
        aqua: '#00e0ff',
        darkAqua: '#B0F1FF',
        pink: '#FF00E5',
        green: '#66E900',
        purple: '#AD00FF',
        green: '#66E900',
        cyan: '#00E0FF',
      }),
      textColor: {
        aqua: '#00e0ff',
      },
      boxShadow: {
        lgAqua: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 224, 255, 1)',
      },
    },
    fontFamily: {
      sans: ['Neon 80s', 'sans-serif'],
      display: ['Good Times', 'sans-serif'],
      header: ['Neon 80s', 'sans-serif'],
      body: ['sans-wavehaus'],
    },
    extend: {
      display: ['group-hover'],
    },
  },
  plugins: [],
};
