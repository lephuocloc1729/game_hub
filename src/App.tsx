import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import Navbar from "./components/Navbar";
import PlatformSelector from "./components/PlatformSelector";
import SearchHeading from "./components/SearchHeading";
import SortSelector from "./components/SortSelector";

function App() {
  return (
    <main className="grid grid-areas-sm text-slate-700 lg:grid-areas-lg dark:bg-dark-blue dark:text-white min-h-screen">
      <nav className="nav mb-5">
        <Navbar />
      </nav>
      <aside className="hidden aside lg:block pl-4">
        <GenreList />
      </aside>
      <section className="main">
        <SearchHeading />
        <div className="flex">
          <PlatformSelector />
          <SortSelector />
        </div>
        <GameGrid />
      </section>
      <section></section>
    </main>
  );
}

export default App;
