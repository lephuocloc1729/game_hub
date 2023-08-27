import SearchInput from "./SearchInput";
import { OnSearch } from "./SearchInput";
const Navbar = ({ onSearch }: OnSearch) => {
  return (
    <div className="flex justify-between pt-4 items-center px-4">
      <h1 className="text-2xl font-bold">RAWG</h1>
      <SearchInput onSearch={onSearch} />
      <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
        <p>LP</p>
      </div>
    </div>
  );
};

export default Navbar;
