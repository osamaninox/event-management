/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx,css,scss}",
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "cursive"],
      dancing: ["Dancing Script", "cursive"],
    },
    extend: {},
  },
  plugins: [],
});

