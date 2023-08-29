import GameGrid from "../components/GameGrid";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SearchHeading from "../components/SearchHeading";
import SortSelector from "../components/SortSelector";

export const HomePage = () => {
  return (
    <main className="grid grid-areas-sm text-slate-700 lg:grid-areas-lg dark:bg-dark-blue dark:text-white min-h-screen">
      <GenreList />
      <section className="main">
        <SearchHeading />
        <div className="flex">
          <PlatformSelector />
          <SortSelector />
        </div>
        <GameGrid />
      </section>
    </main>
  );
};
