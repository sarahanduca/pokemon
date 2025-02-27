export default function TopBall() {
  return (
    <div className="fixed top-0 left-0 w-full h-20 bg-red-600 border-b-4 border-neutral-900 z-10">
      <div className="absolute top-2/3 left-[calc(50%-1.5rem)] h-12 w-12 ballCircle rounded-full bg-neutral-200 border-4 border-neutral-900 z-20">
        <div className="absolute top-2 left-2 h-6 w-6 ballCircleInsider rounded-full bg-white border-2 border-neutral-900 z-30"></div>
      </div>
    </div>
  );
}
