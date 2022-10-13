import typeStyle from "../typeStyle/typeStyle";

export default function SearchTags() {
  const pokemonTypes = [
    { typeName: "bug", emoji: "🐛" },
    { typeName: "dark", emoji: "⚫" },
    { typeName: "dragon", emoji: "🐉" },
    { typeName: "electric", emoji: "⚡" },
    { typeName: "fairy", emoji: "🧚" },
    { typeName: "fighting", emoji: "🥊" },
    { typeName: "fire", emoji: "🔥" },
    { typeName: "flying", emoji: "🦅" },
    { typeName: "ghost", emoji: "👻" },
    { typeName: "grass", emoji: "🌿" },
    { typeName: "ground", emoji: "🌳" },
    { typeName: "ice", emoji: "🧊" },
    { typeName: "normal", emoji: "🧍" },
    { typeName: "poison", emoji: "⚗️" },
    { typeName: "psychic", emoji: "🔮" },
    { typeName: "rock", emoji: "🤘" },
    { typeName: "steel", emoji: "🔪" },
    { typeName: "water", emoji: "🌊" },
  ];

  return (
    <div className="searchTags flex justify-center cursor-pointer overflow-auto object-fill w-3/4">
      {pokemonTypes.map((type) => {
        return (
          <div
            className={`rounded-xl h-fit w-fit mr-2 text-tiny py-2 px-2 ${
              typeStyle(type.typeName).color
            }`}
          >
            {type.emoji}{type.typeName}
          </div>
        );
      })}
    </div>
  );
}
