/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00807e",
        secondary: "#818a91",
      },
      fontFamily: {
        sans: ["Microsoft JhengHei"],
      },
    },
  },
  variants: {},
  plugins: [],
};
