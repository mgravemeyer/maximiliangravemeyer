/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    fontFamily: {
      quickBold: ['Quicksand Bold'],
      quickLight: ['Quicksand Light'],
      quickMedium: ['Quicksand Medium'],
      quickRegular: ['Quicksand Regular'],
      quickSemi: ['Quicksand Semi Bold'],
    },
    extend: {},
  },
  plugins: [],
};
