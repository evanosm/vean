/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#F9F8F2",
        dark: "#141414",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["Didonesque", "serif"],
      },
    },
  },
  plugins: [],
}