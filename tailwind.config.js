/** @type {import('tailwindcss').Config} */
const theme = require('./theme');
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: theme,
  },
  plugins: [],
};
