export const CardSkeleton = () => {
  return (
    <div className="flex flex-col p-6 w-60 h-80 bg-gray-200 shadow-md rounded-lg -z-30">
      <div className="flex justify-between mb-2">
        <div className="w-1/2 h-4 bg-gray-300 rounded-full animate-pulse"></div>
        <div className="w-1/3 h-4 bg-gray-300 rounded-full animate-pulse"></div>
      </div>
      <div className="w-full h-28 mt-2 bg-gray-300 rounded-lg animate-pulse"></div>

      <div className="flex flex-col justify-between mt-2">
        <div className="w-40 h-4 mt-2 bg-gray-300 rounded-full animate-pulse"></div>
        <div className="w-1/2 h-4 mt-2 bg-gray-300 rounded-full animate-pulse"></div>
        <div className="w-1/2 h-4 mt-2 bg-gray-300 rounded-full animate-pulse"></div>
        <div className="w-1/3 h-4 mt-2 bg-gray-300 rounded-full animate-pulse"></div>
        <div className="w-1/3 h-4 mt-2 bg-gray-300 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};
