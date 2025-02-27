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
  const [paginationUrl, setPaginationUrl] = useState({
    next: "offset=20",
    prev: "",
  });

  return (
    <PokemonsContext.Provider
      value={{ pokemons, setPokemons, paginationUrl, setPaginationUrl }}
    >
      {children}
    </PokemonsContext.Provider>
  );
};
