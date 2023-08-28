import useGameQuery from "../GameQueryStore";

const SearchHeading = () => {
  const searchText = useGameQuery((s) => s.gameQuery.search);
  return (
    searchText && (
      <h2 className="text-3xl ml-4 mb-2">
        Search for <span className="font-bold text-4xl">"{searchText}"</span>
      </h2>
    )
  );
};

export default SearchHeading;
