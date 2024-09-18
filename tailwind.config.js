/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'sm': '600px',
        'md': '900px'
      },
      colors: {
        'dark-grey':'rgb(25 25 25)',
        'header-color':'#e50914',
        'header-hover': 'rgb(193, 17, 25);',
        'light-grey': '#5b5b5b',
        'card-color':'#1e162b'
      }
    },
  },
  plugins: [],
};
