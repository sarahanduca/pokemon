import { useState } from "react";
import api from "../../api/api";

export default function ShowAllPokemons() {
  const [pokemonsData, setPokemonsData] = useState([]);
  const [paginationUrl, setPaginationUrl] = useState({
    curr: "",
    next: "?offset=20&limit=20",
    prev: "",
  });

  const handleShowAllPokemons = async (currPage) => {
    const allPokemonsData = await api(currPage);
    setPokemonsData(allPokemonsData.results);
    setPaginationUrl({
      prev: allPokemonsData.previous
        ? allPokemonsData.previous.split("/")[6]
        : null,
      curr: currPage,
      next: allPokemonsData.next.split("/")[6],
    });
  };
  return (
    <div>
      <button
        className="bg-green-400 border-1 p-1 mt-2 text-white"
        onClick={() => handleShowAllPokemons("")}
      >
        pokemons
      </button>
      {pokemonsData.map((pokemon) => (
        <p>{pokemon.name}</p>
      ))}
      <button
        className="bg-blue-400 border-1 p-1 mt-2 mr-6 text-white"
        onClick={() => handleShowAllPokemons(paginationUrl.prev)}
      >
        prev
      </button>
      <button
        className="bg-blue-400 border-1 p-1 mt-2 text-white"
        onClick={() => handleShowAllPokemons(paginationUrl.next)}
      >
        next
      </button>
    </div>
  );
}
