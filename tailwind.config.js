/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "hero-height": "1000px",
      },
      fontFamily: {
        "first-font": ["Outfit", "sans-serif"],
      },
      colors: {
        "theme-color": "#838383",
        "second-color": "#7b35c8",
        "border-color": "#cccccc",
        blue: "#0098ff",
        "dark-blue": "#12103E",
      },
      screens: {
        xs: "575px",
        ml: "1200px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
