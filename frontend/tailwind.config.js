/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGray: "rgba(211, 209, 196, 1)", //
        customGreen: "#8c8f70", //
        customWhite: "#a2958f",
        customBrown: "#483b32",
        customCream: "#cfb18e",
      },
    },
  },
  plugins: [],
};
