import { useState } from "react";
import { get } from "../../api/api";
import Card from "../../components/card/Card";
import { handleSearch } from "../../components/searchBar/SearchBar";

export default function ShowAllPokemons(props) {
  const { pokemon, setPokemon } = props;
  const [pokemonList, setPokemonList] = useState([]);
  const [paginationUrl, setPaginationUrl] = useState({
    curr: "",
    next: "?offset=20&limit=20",
    prev: "",
  });

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
    setPokemonList(() => {
      return results.map((pokemon) => handleSearch(pokemon.name, setPokemon));
    });
    // results.forEach((currPokemon) => {
    //   handleSearch(currPokemon.name, setPokemon);
    //   setPokemonList((pokemonList) => [...pokemonList, pokemon]);
    // });

    handlePagination(allPokemonsData.previous, currPage, allPokemonsData.next);
  };

  const showCardList = () => {
    return pokemonList.map((currPokemon) => {
      return <Card pokemon={currPokemon} />;
    });
  };
  console.log(pokemonList);
  return (
    <div>
      <button
        className="bg-green-400 border-1 p-1 mt-2 text-white"
        onClick={() => handleShowPokemons("")}
      >
        pokemons
      </button>

      {pokemonList.length > 0 ? showCardList() : null}

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
