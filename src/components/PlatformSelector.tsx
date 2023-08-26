import { Platform } from "../services/fetchGames";
import fetchPlatforms from "../services/fetchPlatforms";
import PlatformSelectorSkeleton from "./PlatformSelectorSkeleton";
import { useQuery } from "@tanstack/react-query";

const PlatformSelector = ({
  onSelect,
}: {
  onSelect: React.Dispatch<React.SetStateAction<number | null>>;
}) => {
  const {
    data: platformsData,
    isSuccess,
    isError,
    isLoading,
  } = useQuery(["platforms"], fetchPlatforms);
  if (isError) return null;
  if (isLoading) return <PlatformSelectorSkeleton />;
  if (isSuccess)
    return (
      <select
        name="platforms"
        id="platforms"
        className="block appearance-none bg-slate-200 dark:text-white dark:bg-slate-600 dark:hover:bg-slate-500 text-gray-700 drop-shadow-xl py-2 px-4 pr-8 rounded leading-tight hover:bg-slate-300 focus:outline-none mb-4 ml-4 cursor-pointer"
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option selected>Choose Platform</option>

        {platformsData?.results.map((platform) => (
          <option value={platform.id}>{platform.name}</option>
        ))}
      </select>
    );
};

export default PlatformSelector;
