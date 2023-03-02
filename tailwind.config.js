/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary1: "#000000",
        secondary1: "#ff004f",
      },
      fontFamily: { Poppins: ["Poppins"] },
    },
  },
  plugins: [require("flowbite/plugin")],
};
