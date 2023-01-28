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
        "shape-1": "url('/blob.svg')",
      },
    },
    colors: {
      orange: "#f97316",
      white: "#fafafa",
      black: "#171717",
      gray: "#111827",
      red: "#FF0000",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
