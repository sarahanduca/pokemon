import { useEffect } from "react";
import { getPokemons } from "../../api/api";
import { mapPokemons } from "../../utils/mapPokemons";

import Card from "../../components/card/Card";
import Button from "../simpleButton/SimpleButton";
import { CardSkeleton } from "../card/Card.skeleton";

export default function ShowAllPokemons({
  pokemons,
  setPokemons = () => {},
  paginationUrl,
  setPaginationUrl = () => {},
  loading,
  setLoading = () => {},
}) {
  const handlePagination = (prev, next) => {
    setPaginationUrl({
      prev: prev ? prev.split("/")[6] : "",
      next: next.split("/")[6],
    });
  };

  const handleShowPokemons = async (paginationQuerry = "") => {
    setLoading(true);
    pokemons.length = 0;

    const allPokemonsData = await getPokemons(paginationQuerry);

    if (allPokemonsData && allPokemonsData?.results.length > 0) {
      const pokemonsMapped = await mapPokemons(allPokemonsData.results);
      setPokemons(pokemonsMapped);

      handlePagination(allPokemonsData?.previous, allPokemonsData?.next);
      setLoading(false);
    }
  };

  useEffect(() => {
    handleShowPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="displayPokemons mt-40 w-full">
      {loading ? (
        <div className="flex gap-16 w-full flex-wrap justify-center">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      ) : (
        <div className="pokemonCards flex flex-wrap gap-8 w-full">
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
      )}

      <div className="buttons flex justify-between mt-4 w-full">
        <Button
          invisible={!paginationUrl?.prev}
          text="previous"
          colorBg="bg-yellow-400"
          onClick={() => handleShowPokemons(paginationUrl?.prev)}
        />

        <Button
          invisible={!paginationUrl?.next}
          text="next"
          onClick={() => handleShowPokemons(paginationUrl?.next)}
        />
      </div>
    </div>
  );
}
