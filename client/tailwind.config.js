/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        stylish: ["'Dancing Script', cursive"],
      },
      colors: {
        primary: "#102601",
        darkGreen: "#214001",
        lightGreen: "#365902",
        brown: "#736346",
        dark: "#0D0D0D",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
