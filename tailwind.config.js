/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "card-bg": "url('/src/assets/pokemonBg.png')",
        "water-bg": "url('/src/assets/water-bg.png')",
        "fly-bg": "url('/src/assets/flyBg.png')",
      },
      fontSize:{
        'tiny': '0.7rem',
      },
      colors: {
        water: "#6890F0", 
        fire: "#F08030", 
        grass: "#78C850", 
        electric: "#F8D030", 
        ice: "#98D8D8", 
        fighting: "#C03028", 
        poison: "#A040A0", 
        ground: "#E0C068", 
        flying: "#A890F0", 
        psychic: "#F85888", 
        bug: "#A8B820", 
        rock: "#B8A038", 
        ghost: "#705898", 
        dragon: "#7038F8", 
        dark: "#705848", 
        steel: "#B8B8D0", 
        fairy: "#EE99AC", 
        normal: "#A8A878",
      },
    },
  },
  plugins: [],
};
