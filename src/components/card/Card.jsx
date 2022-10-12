import typeStyle from "../typeStyle/typeStyle";

export default function Card({ pokemon }) {
  const { name, img, type, stats, abilities, id } = pokemon;
  const cardBg = "bg-card-bg";
  return (
    <div className="card h-80 w-60 rounded-lg bg-neutral-100 border-2 border-neutral-800 p-6 pt-3 shadow-lg">
      <div className="flex justify-between mb-2">
        <p className="text-lg">{name}</p>
        <p>#{id}</p>
      </div>
      <div className="flex justify-between">
        <p>❤️ {stats.hp}</p>
        <p>⚔️ {stats.defense}</p>
      </div>
      <div className={`flex justify-center rounded-lg ${cardBg} border-2 border-neutral-800`}>
        <img src={img} alt={`${name} pixel art`} />
      </div>
      <div className="flex justify-between mt-2">
        {type.map((type) => (
          <h1 className={`w-fit pl-1 pr-2 text-sm text-center rounded-lg flex ${typeStyle(type).color}`}>
            {typeStyle(type).emoji}{type}
          </h1>
        ))}
      </div>

      <div className="flex justify-between mt-3">
        <div>
          <p>👊 {stats.attack}</p>
          <p>🏃 {stats.speed}</p>
          <p>🛡️ {stats.defense}</p>
        </div>
        <div className="text-right">
          <p className="text-sm">abilities⬇️</p>
          {abilities.map((ability) => (
            <p>{ability}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
