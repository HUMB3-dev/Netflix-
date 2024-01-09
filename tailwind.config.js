/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      
      height: {
        '241': '15.125rem',
      },
      backgroundImage: {
        'hero-pattern': "url('./img/herobg.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      colors: {
        'gray-input': '#1E1E1E',
      },
      fontFamily:{
        RobotoCondesed:'Roboto Condensed'
      }
    },
  },
  plugins: [],
}