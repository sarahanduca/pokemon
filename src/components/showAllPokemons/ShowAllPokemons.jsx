import { useState, useEffect } from "react";
import { get } from "../../api/api";
import Card from "../../components/card/Card";
import { handleSearch } from "../../components/searchBar/SearchBar";
import Button from "../simpleButton/SimpleButton";

export default function ShowAllPokemons(props) {
  const { setPokemon } = props;
  const [pokemonList, setPokemonList] = useState([]);
  const [paginationUrl, setPaginationUrl] = useState({
    curr: "",
    next: "?offset=20&limit=20",
    prev: "",
  });

  useEffect(() => {
    handleShowPokemons("");
  }, []);

  const handlePagination = (prev, curr, next) => {
    setPaginationUrl({
      prev: prev ? prev.split("/")[6] : "",
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
      setPokemonList((pokemonList) => [...pokemonList, currPokemon]);
    });
    handlePagination(allPokemonsData.previous, currPage, allPokemonsData.next);
  };

  return (
    <div className="displayPokemons">
      <div className="pokemonCards grid grid-cols-4 gap-8">
        {pokemonList.length > 0
          ? pokemonList.map((listPokemon) => {
              return (
                <div className="flex justify-center">
                  <Card pokemon={listPokemon} />
                </div>
              );
            })
          : null}
      </div>

      <div className="buttons flex justify-between mx-6 mt-4">
        <Button
          hidden={paginationUrl.prev == "" ? true : false}
          text="previous"
          colorBg="bg-yellow-400"
          colorShadow="shadow-yellow-400/40"
          onClick={() => handleShowPokemons(paginationUrl.prev)}
        />

        <Button
          text="next"
          onClick={() => handleShowPokemons(paginationUrl.next)}
        />
      </div>
    </div>
  );
}
