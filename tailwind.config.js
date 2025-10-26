/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.html"
  ],
  theme: {
    extend: {
      colors: {
        rosaClaro: "#F8EDEB",
        rosaMedio: "#EAC9C1",
        rosaEscuro: "#C57A6A",
        marromSuave: "#5C3B33",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
