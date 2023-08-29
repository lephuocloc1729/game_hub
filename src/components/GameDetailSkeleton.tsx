import GameAttributesSkeleton from "./GameAttributesSkeleton";
import GameTrailerSkeleton from "./GameTrailerSkeleton";
import ScreenshotsSkeleton from "./ScreenshotsSkeleton";

const GameDetailSkeleton = () => {
  return (
    <div className="flex px-4 gap-8 pb-12">
      <div className="flex-1 pt-12 animate-pulse">
        <div className="w-1/2 bg-slate-600 h-4 rounded-xl mb-4"></div>
        <div className=" bg-slate-600 h-2 rounded-xl mb-4"></div>
        <div className=" bg-slate-600 h-2 rounded-xl mb-4"></div>
        <div className=" bg-slate-600 h-2 rounded-xl mb-4"></div>
        <div className=" bg-slate-600 h-2 rounded-xl mb-4"></div>
        <div className=" bg-slate-600 h-2 rounded-xl mb-4"></div>
        <GameAttributesSkeleton />
      </div>
      <div className="flex-1 pt-12">
        <GameTrailerSkeleton />
        <ScreenshotsSkeleton />
      </div>
    </div>
  );
};

export default GameDetailSkeleton;
