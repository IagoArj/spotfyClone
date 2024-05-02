/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'blackspt': '#0E0E0E',
        'greenspt': '#1ED760',
        'base':'#121212',
        'base-high':"#1a1a1a",
        'whitespt':"#b3b3b3"
      },
      fontFamily:{
        'DM': ['DM Sans'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

