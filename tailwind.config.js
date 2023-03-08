/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        bebas: ["Bebas Neue", "cursive"],
        poppins: ["Poppins", "sans-serif"],
        comfortaa: ["Comfortaa", "cursive"],
        dancing: ["Dancing Script", "cursive"],
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        krona: ["Krona One", "sans-serif"],
        marienda: ["Marienda", "cursive"],
        carter: ["Carter One", "cursive"],
      },
    },
  },
  plugins: [],
};
