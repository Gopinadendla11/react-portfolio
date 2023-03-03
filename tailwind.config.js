/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#ff004f",
        matt: "#28282b",
      },
      fontFamily: { Poppins: ["Poppins"] },
    },
  },
  plugins: [require("flowbite/plugin")],
};
