/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: "class",
  content: [
    "./**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.blue[600],
        accent: colors.orange[500],
        dark: colors.slate[900],
        light: colors.zinc[50],
        danger: colors.red[400],
        success: colors.green[400],
        info: colors.sky[400],
        warning: colors.yellow[400],
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ]
}