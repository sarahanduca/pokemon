function setTypeAtributes(attributes) {
  const [color, emoji] = attributes;
  return { color, emoji };
}

export default function typeStyle(type) {
  const typeStyle = {
    bug: setTypeAtributes(["bg-green-400", "🐛"]),
    dark: setTypeAtributes(["bg-gray-800", "⚫"]),
    dragon: setTypeAtributes(["bg-purple-500", "🐉"]),
    electric: setTypeAtributes(["bg-yellow-400", "⚡"]),
    fairy: setTypeAtributes(["bg-pink-400", "🧚"]),
    fighting: setTypeAtributes(["bg-red-500", "🥊"]),
    fire: setTypeAtributes(["bg-red-400", "🔥"]),
    flying: setTypeAtributes(["bg-blue-400", "🦅"]),
    ghost: setTypeAtributes(["bg-purple-400", "👻"]),
    grass: setTypeAtributes(["bg-green-500", "🌿"]),
    ground: setTypeAtributes(["bg-yellow-500", "🌳"]),
    ice: setTypeAtributes(["bg-blue-300", "🧊"]),
    normal: setTypeAtributes(["bg-gray-400", "🧍"]),
    poison: setTypeAtributes(["bg-purple-600", "⚗️"]),
    psychic: setTypeAtributes(["bg-pink-500", "🔮"]),
    rock: setTypeAtributes(["bg-yellow-600", "🤘"]),
    steel: setTypeAtributes(["bg-gray-300", "🔪"]),
    water: setTypeAtributes(["bg-blue-500", "🌊"]),
  };
  return typeStyle[type];
}
