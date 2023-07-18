/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary': '#DAAA63',
      'secondary': '#2C1810',
      'terciary':'#fff7e4',
      'white': '#fff',
    }
  },
  plugins: [],
}