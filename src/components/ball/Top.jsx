export default function TopBall() {
  return (
    <div className="relative topBall h-20 bg-red-600 border-b-4 border-neutral-900 ">
      <div className="absolute top-2/3 left-1/2 h-12 w-12 ballCircle rounded-full bg-neutral-200 border-4 border-neutral-900">
        <div className="absolute top-2 left-2 h-6 w-6 ballCircleInsider rounded-full bg-white border-2 border-neutral-900"></div>
      </div>
    </div>
  );
}
