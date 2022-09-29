const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Poppins', sans-serif"],
        serif: ["'Volkhov', serif"]
      },
      colors: {
        "purple-1": "#B45CFF",
        "purple-2": "#5C259C",
        "purple-3": "#310542",
        "purple-4": "#A05DDE",
        "gray-1": "#D9D9D9",
        "black-primary": "#111111"
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const utilities = {
        ".bg-hero": {
          "background-image": "url(/images/bg-hero.png)",
          "background-size": "cover",
          "background-repeat": "no-repeat",
          "layout": "cover"
        }
      }
      addUtilities(utilities);

    })
  ],
}