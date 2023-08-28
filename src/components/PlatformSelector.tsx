import useGameQuery from "../GameQueryStore";
import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = () => {
  const setPlatformId = useGameQuery((s) => s.setPlatformId);
  const { data: platformsData, isSuccess, isError, isLoading } = usePlatforms();
  if (isError) return null;
  if (isLoading) return;
  if (isSuccess)
    return (
      <select
        name="platforms"
        id="platforms"
        className=" appearance-none bg-slate-200 dark:text-white dark:bg-slate-600 dark:hover:bg-slate-500 text-gray-700 drop-shadow-xl py-2 px-2 rounded leading-tight hover:bg-slate-300 focus:outline-none mb-4 ml-4 cursor-pointer block text-sm"
        onChange={(e) => setPlatformId(Number(e.target.value))}
      >
        <option selected>Platforms</option>

        {platformsData?.results.map((platform) => (
          <option value={platform.id}>{platform.name}</option>
        ))}
      </select>
    );
};

export default PlatformSelector;
