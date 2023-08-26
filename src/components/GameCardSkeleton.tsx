const GameCardSkeleton = () => {
  return (
    <div className="flex flex-col gap-6 w-full bg-slate-700 rounded-2xl h-80 overflow-hidden animate-pulse">
      <div className="w-full bg-slate-600 h-[70%]"></div>
      <div className="w-4/5 bg-slate-600 h-3 rounded-3xl ml-4 animate-pulse"></div>
      <div className="w-2/5 bg-slate-600 h-3 rounded-3xl ml-4 animate-pulse"></div>
    </div>
  );
};

export default GameCardSkeleton;
