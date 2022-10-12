export default function SimpleButton({
  colorBg = "bg-blue-400",
  colorText = "text-white",
  colorShadow = "shadow-blue-400/40",
  text,
  onClick,
  hidden = false,
  moreStyle = ""
}) {
  return (
    <button
      className={`${colorBg} ${colorText} ${moreStyle} ease-in duration-300 shadow-lg ${colorShadow} hover:bg-neutral-200 hover:text-black active:bg-neutral-300 border-1 py-1 px-2 rounded-md ${
        hidden ? "hidden" : null
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
