/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/**/*.tsx",
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto','sans-serif']
      },
      colors: {
        body: "#E3E3E3",
        header: "#141217",
        span: "#31E0D6",
        button: "#31E0D6",
        "input-light": "#121214"
      }
    },
  },
  plugins: [],
}
