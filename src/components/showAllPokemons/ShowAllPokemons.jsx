import { useState } from "react";
import api from "../../api/api";

export default function ShowAllPokemons() {
  const [pokemonsData, setPokemonsData] = useState([]);
  const [paginationUrl, setPaginationUrl] = useState({
    curr: 0,
    next: 0,
    prev: 0,
  });

  const handleShowAllPokemons = async (currPage) => {
    console.log(paginationUrl.next, paginationUrl.prev);
    console.log(currPage);
    const allPokemonsData = await api(currPage);
    setPokemonsData(allPokemonsData.results);
    setPaginationUrl({
      curr: (paginationUrl.curr += 20),
      prev: paginationUrl.next > 0 ? (paginationUrl.curr -= 20) : 0,
      next: (paginationUrl.curr += 20),
    });
  };
  console.log(paginationUrl.next, paginationUrl.prev);
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
        onClick={() =>
          handleShowAllPokemons(`?offset=${paginationUrl.prev}&limit=20"`)
        }
      >
        prev
      </button>
      <button
        className="bg-blue-400 border-1 p-1 mt-2 text-white"
        onClick={() =>
          handleShowAllPokemons(`?offset=${paginationUrl.next}&limit=20"`)
        }
      >
        next
      </button>
    </div>
  );
}
