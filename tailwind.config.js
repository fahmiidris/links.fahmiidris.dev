const colors = require('tailwindcss/colors');
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
const tailwindConfig = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.cyan,
      },
      fontFamily: {
        sans: ['Poppins', ...fontFamily.sans],
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};

module.exports = tailwindConfig;
