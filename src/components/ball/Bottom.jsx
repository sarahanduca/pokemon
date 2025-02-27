export default function BottomBall() {
  return (
    <div className="fixed bottom-0 w-full h-20 bg-neutral-100 border-t-4 border-neutral-900">
      <div className="absolute bottom-2/3 left-[calc(50%-1.5rem)] h-12 w-12 ballCircl bg-neutral-300 rounded-full border-2 drop-shadow-md border-neutral-900"></div>

      <span className="text-xs text-neutral-900 absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        {" "}
        Made with ✨ by{" "}
        <a
          className="underline"
          href="https://github.com/sarahanduca/pokemon"
          target="_blank"
          rel="noreferrer"
        >
          Sarah
        </a>
      </span>
    </div>
  );
}
