/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        eduTheme: 'rgba(55,215,217,1)',
        eduThemeOP: 'rgba(55,215,217,0.15)',
        eduThemeOPL: 'rgba(55,215,217,0.32)'
      },
      fontFamily: {
        robotoCondensed: ['"Roboto Condensed"', 'sans-serif'],
        adramalech: ['"Adramalech"', 'sans-serif'],
      },
      borderWidth: {
        '0.7': '0.7px', // Custom border width
      },
      screens: {
        'tablet-range': { min: '580px', max: '1206px' },
        "smallLap": {min: '1207px' , max: '1355px'},
        'mlg': { min: '1200px' },
      },
      height:{
        65: '65px',
      }
    },
  },
  plugins: [],
}

