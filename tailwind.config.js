/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#ffffff',
      black: '#000',
      p1: '#0f866c',
      p2: '#d4e300',
      p3: '#12141D',
    },
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', ...fontFamily.sans],
        georgia: ['var(--font-georgia)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}
