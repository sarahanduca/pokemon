export default function BottomBall() {
  return (
    <div className="fixed bottom-0 w-full h-20 bg-neutral-100 border-t-4 border-neutral-900">
      <div className="absolute bottom-2/3 left-[calc(50%-1.5rem)] h-12 w-12 ballCircl bg-neutral-300 rounded-full border-2 drop-shadow-md border-neutral-900"></div>
    </div>
  );
}
