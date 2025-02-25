import { useState, useEffect } from "react";
import { getPokemons } from "../../api/api";
import { mapPokemons } from "../../utils/mapPokemons";

import Card from "../../components/card/Card";
import Button from "../simpleButton/SimpleButton";

export default function ShowAllPokemons({ pokemons, setPokemons }) {
  const [paginationUrl, setPaginationUrl] = useState({
    next: "offset=20",
    prev: "",
  });

  const handlePagination = (prev, next) => {
    setPaginationUrl({
      prev: prev ? prev.split("/")[6] : "",
      next: next.split("/")[6],
    });
  };

  const handleShowPokemons = async (paginationQuerry = "") => {
    pokemons.length = 0;

    const allPokemonsData = await getPokemons(paginationQuerry);

    if (allPokemonsData && allPokemonsData?.results.length > 0) {
      const pokemonsMapped = await mapPokemons(allPokemonsData.results);

      setPokemons(pokemonsMapped);

      handlePagination(allPokemonsData?.previous, allPokemonsData?.next);
    }
  };

  useEffect(() => {
    handleShowPokemons();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="displayPokemons max-w-7xl m-auto">
      <div className="pokemonCards flex flex-wrap gap-8">
        {pokemons.length > 0
          ? pokemons.map((listPokemon) => {
              return (
                <div
                  className="flex justify-center grow"
                  key={listPokemon.name}
                >
                  <Card pokemon={listPokemon} />
                </div>
              );
            })
          : null}
      </div>

      <div className="buttons flex justify-between mx-6 mt-4">
        <Button
          invisible={paginationUrl.prev === ""}
          text="previous"
          colorBg="bg-yellow-400"
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
