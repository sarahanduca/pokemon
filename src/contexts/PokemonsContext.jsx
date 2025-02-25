import React, { createContext } from "react";
import { useState } from "react";

export const PokemonsContext = createContext(null);

export const PokemonsProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([
    {
      name: "",
      img: "",
      type: [],
      stats: {
        hp: "",
        attack: "",
        defense: "",
        speed: "",
      },
      abilities: [],
      id: "",
    },
  ]);

  return (
    <PokemonsContext.Provider value={{ pokemons, setPokemons }}>
      {children}
    </PokemonsContext.Provider>
  );
};
