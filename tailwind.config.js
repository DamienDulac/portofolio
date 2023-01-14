/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        me: "url('/assets/me.jpg')",
      },
    },
    colors: {
      orange: "#f97316",
      white: "#fafafa",
      black: "#171717",
      gray: "#111827",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
