import { useRef } from "react";
export interface OnSearch {
  onSearch: (search: string | undefined) => void;
}
const SearchInput = ({ onSearch }: OnSearch) => {
  const inputElement = useRef<HTMLInputElement>(null);
  return (
    <form
      className="w-full flex justify-center"
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(inputElement.current?.value);
      }}
    >
      <input
        ref={inputElement}
        type="text"
        className=" px-4 py-1 text-sm lg:w-1/2 lg:px-6 lg:py-2 lg:text-xl rounded-full bg-slate-700 text-slate-300 focus:text-slate-800 hover:bg-slate-100 focus:bg-slate-100 transition-all duration-300"
        placeholder="Search games"
      />
    </form>
  );
};

export default SearchInput;
