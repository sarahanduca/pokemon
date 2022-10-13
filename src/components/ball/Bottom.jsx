export default function BottomBall() {
  return (
    <div className="relative bottomBall h-20 bg-neutral-100 border-t-4 border-neutral-900 ">
      <div className="absolute bottom-2/3 left-[calc(50%-1.5rem)] h-12 w-12 ballCircle bg-neutral-200 bg-neutral-300 rounded-full border-2 drop-shadow-md border-neutral-900">
        {/* <div className="absolute top-5 right-0 h-6 w-12 ballCircleInsider rounded-bl-full rounded-br-full bg-white border-4 border-neutral-900"></div> */}
      </div>
    </div>
  );
}
