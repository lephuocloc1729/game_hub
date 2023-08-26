import { Platform } from "../services/fetchGames";
import fetchPlatforms from "../services/fetchPlatforms";
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
    error,
    isLoading,
  } = useQuery(["platforms"], fetchPlatforms);
  return (
    <select
      name="platforms"
      id="platforms"
      className="block appearance-none bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-4 ml-4"
      onChange={(e) => onSelect(Number(e.target.value))}
    >
      <option selected>Choose platform</option>

      {platformsData?.results.map((platform) => (
        <option value={platform.id}>{platform.name}</option>
      ))}
    </select>
  );
};

export default PlatformSelector;
