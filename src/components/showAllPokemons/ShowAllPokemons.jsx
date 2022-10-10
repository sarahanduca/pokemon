import { useState } from "react";
import { get } from "../../api/api";
import Card from "../../components/card/Card";
import { handleSearch } from "../../components/searchBar/SearchBar";

export default function ShowAllPokemons(props) {
  const { pokemon, setPokemon } = props;
  const [paginationUrl, setPaginationUrl] = useState({
    curr: "",
    next: "?offset=20&limit=20",
    prev: "",
  });
  const [pokemonList, setPokemonList] = useState([pokemon]);

  const handlePagination = (prev, curr, next) => {
    setPaginationUrl({
      prev: prev ? prev.split("/")[6] : null,
      curr: curr,
      next: next.split("/")[6],
    });
  };

  const handleShowPokemons = async (currPage) => {
    pokemonList.length = 0;
    const allPokemonsData = await get(currPage);
    const { results } = allPokemonsData;
    results.forEach(async (pokemon) => {
      const currPokemon = await handleSearch(pokemon.name, setPokemon);
      setPokemonList((pokemonList)=>[...pokemonList, currPokemon]);
    });
    handlePagination(allPokemonsData.previous, currPage, allPokemonsData.next);
    console.log(pokemonList)
  };
  return (
    <div>
      <button
        className="bg-green-400 border-1 p-1 mt-2 text-white"
        onClick={() => handleShowPokemons("")}
      >
        pokemons
      </button>

      <div className="grid grid-cols-4 gap-8">
        {pokemonList.length > 0 ? pokemonList.map((listPokemon) =>{
          return (<div className="flex justify-center">
            <Card pokemon={listPokemon}/>
          </div>)
        }
          ) : null}
      </div>

      <button
        className="bg-blue-400 border-1 p-1 mt-2 mr-6 text-white"
        onClick={() => handleShowPokemons(paginationUrl.prev)}
      >
        prev
      </button>
      <button
        className="bg-blue-400 border-1 p-1 mt-2 text-white"
        onClick={() => handleShowPokemons(paginationUrl.next)}
      >
        next
      </button>
    </div>
  );
}
