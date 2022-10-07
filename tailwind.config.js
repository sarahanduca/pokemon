/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "card-bg": "url('/src/assets/pokemonBg.png')",
        "water-bg": "url('/src/assets/water-bg.png')",
        "fly-bg": "url('/src/assets/flyBg.png')",
      },
    },
  },
  plugins: [],
};
