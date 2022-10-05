function setTypeAtributes(attributes) {
  const [color, emoji] = attributes;
  return { color, emoji };
}

export default function typeStyle(type) {
  const typeStyle = {
    bug: setTypeAtributes(["green-400", "🐛"]),
    dark: setTypeAtributes(["gray-800", "⚫"]),
    dragon: setTypeAtributes(["purple-500", "🐉"]),
    electric: setTypeAtributes(["yellow-400", "⚡"]),
    fairy: setTypeAtributes(["pink-400", "🧚"]),
    fighting: setTypeAtributes(["red-500", "🥊"]),
    fire: setTypeAtributes(["red-400", "🔥"]),
    flying: setTypeAtributes(["blue-400", "🦅"]),
    ghost: setTypeAtributes(["purple-400", "👻"]),
    grass: setTypeAtributes(["green-500", "🌿"]),
    ground: setTypeAtributes(["yellow-500", "🌳"]),
    ice: setTypeAtributes(["blue-300", "🧊"]),
    normal: setTypeAtributes(["gray-400", "🧍"]),
    poison: setTypeAtributes(["purple-600", "⚗️"]),
    psychic: setTypeAtributes(["pink-500", "🔮"]),
    rock: setTypeAtributes(["yellow-600", "🤘"]),
    steel: setTypeAtributes(["gray-300", "🔪"]),
    water: setTypeAtributes(["blue-500", "🌊"]),
  };
  return typeStyle[type];
}
