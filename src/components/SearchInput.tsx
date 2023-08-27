import { useEffect, useRef, useState } from "react";
export interface OnSearch {
  onSearch: (search: string | null) => void;
}
const SearchInput = ({ onSearch }: OnSearch) => {
  const inputElement = useRef<HTMLInputElement>(null);
  const [searchText, setSearchText] = useState<string | null>("");

  useEffect(() => {
    const handleSearchShortcut = (e: KeyboardEvent) => {
      if (e.altKey && e.key === "Enter") {
        e.preventDefault();
        inputElement.current && inputElement.current.focus();
      }
    };
    document.addEventListener("keydown", handleSearchShortcut);
    return () => document.removeEventListener("keydown", handleSearchShortcut);
  }, []);

  return (
    <form
      className="w-full flex justify-center"
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(searchText);
        setSearchText("");
        inputElement.current && inputElement.current.blur();
      }}
    >
      <div className="w-1/2 flex justify-center relative items-center">
        <input
          ref={inputElement}
          type="text"
          className=" px-4 py-1 text-sm lg:w-full lg:px-6 lg:py-2 lg:text-xl rounded-full bg-slate-700 text-slate-300 focus:text-slate-800 hover:bg-slate-200 focus:bg-slate-200 transition-all duration-300 after:content-[alt]"
          placeholder="Search games"
          value={searchText ? searchText : ""}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <div className="absolute gap-2 right-5 hidden lg:flex transition-all duration-300">
          <div className="border-[1px] border-slate-200 text-slate-200 px-2 rounded-md text-sm">
            Alt
          </div>
          <span className="text-slate-200">+</span>
          <div className="border-[1px] border-slate-200 text-slate-200 px-2 rounded-md text-sm">
            Enter
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchInput;
