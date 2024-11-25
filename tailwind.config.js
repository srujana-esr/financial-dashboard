/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fill: ['current'],
      backgroundImage: {
        'dark-gradient': 'linear-gradient(107.38deg, #5B5A6F 2.61%, #000000 101.2%)',
      },
    },
  },
  plugins: [],
}