/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      height: {
        "all-screen": "100vh",
      },
      colors: {
        DarkGreen: "#013D29",
        MainGray: "#F6F3F6",
      },
    },
  },
  plugins: [],
};
