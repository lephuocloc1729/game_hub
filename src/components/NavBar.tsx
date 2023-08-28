import useGameQuery from "../GameQueryStore";
import SearchInput from "./SearchInput";
const Navbar = () => {
  const reset = useGameQuery((s) => s.reset);
  return (
    <div className="flex justify-between pt-4 items-center px-4 cursor-pointer">
      <h1 className="text-2xl font-bold" onClick={reset}>
        RAWG
      </h1>
      <SearchInput />
      <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold shrink-0">
        <p>LP</p>
      </div>
    </div>
  );
};

export default Navbar;
