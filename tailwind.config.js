/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(92.94deg, #087172 0%, #37D7D9 100%)'
      },
      colors: {
        eduTheme: 'rgba(55,215,217,1)',
        eduThemeOP: 'rgba(55,215,217,0.15)',
        eduThemeOPL: 'rgba(55,215,217,0.32)',
        eduThemePhase: 'rgba(201, 208, 214, 0.35)',
        eduThemeCircle: 'rgba(8, 114, 116, 1)'
      },
      fontFamily: {
        robotoCondensed: ['"Roboto Condensed"', 'sans-serif'],
        adramalech: ['"Adramalech"', 'sans-serif']
      },
      borderWidth: {
        '0.7': '0.7px', // Custom border width
      },
      screens: {
        'tablet-range': { min: '580px', max: '1206px' },
        "smallLap": {min: '1207px' , max: '1355px'},
        "mlg": { min: '1200px' },
        'small-laptop': { raw: '(max-width: 1024px) and (max-height: 768px)' }
      },
      height:{
        65: '65px',
      }
    },
  },
  plugins: [],
}

