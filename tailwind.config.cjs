/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
      extend: {
        fontFamily: {
          pf: ['Raleway', 'sans-serif'],
        },
        colors: {
          pc: colors.blue,
        }
      },
    },
    plugins: [],
  }