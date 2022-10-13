export default function SimpleButton({
  colorBg = "bg-blue-400",
  colorText = "text-white",
  text,
  onClick,
  invisible = false,
  moreStyle = ""
}) {
  return (
    <button
      className={`${colorBg} ${colorText} ${moreStyle} ease-in duration-300 border-2 border-neutral-800 hover:bg-neutral-200 hover:text-black active:bg-neutral-300 border-1 py-1 px-2 rounded-md ${
        invisible ? "invisible" : null
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
