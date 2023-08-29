import { Link } from "react-router-dom";
import useGameQuery from "../GameQueryStore";
import SearchInput from "./SearchInput";
const Navbar = () => {
  const reset = useGameQuery((s) => s.reset);
  return (
    <nav className="flex justify-between pt-4 items-center px-4 cursor-pointer nav pb-5 bg-dark-blue text-white">
      <h1 className="text-2xl font-bold" onClick={reset}>
        <Link to="/">RAWG</Link>
      </h1>
      <SearchInput />
      <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold shrink-0">
        <p>LP</p>
      </div>
    </nav>
  );
};

export default Navbar;
