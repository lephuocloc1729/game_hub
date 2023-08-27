import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import SearchHeading from "./components/SearchHeading";
import { useState } from "react";

export interface GameQuery {
  genreId: number | null;
  platformId: number | null;
  ordering: string | null;
  search: string | null;
}

function App() {
  const originGameQuery = {
    genreId: null,
    platformId: null,
    ordering: "",
    search: null,
  } as GameQuery;
  const [gameQuery, setGameQuery] = useState(originGameQuery);

  return (
    <main className="grid grid-areas-sm text-slate-700 lg:grid-areas-lg dark:bg-dark-blue dark:text-white min-h-screen">
      <nav className="nav mb-5">
        <Navbar
          onReturn={() => setGameQuery(originGameQuery)}
          onSearch={(search) => setGameQuery({ ...gameQuery, search })}
        />
      </nav>
      <aside className="hidden aside lg:block pl-4">
        <GenreList
          onSelectGenre={(genreId: number | null) =>
            setGameQuery({ ...gameQuery, genreId: genreId })
          }
          selectedGenreId={gameQuery.genreId}
        />
      </aside>
      <section className="main">
        <SearchHeading searchText={gameQuery.search} />
        <div className="flex">
          <PlatformSelector
            onSelect={(platformId: number | null) =>
              setGameQuery({ ...gameQuery, platformId: platformId })
            }
          />
          <SortSelector
            selectedOrder={gameQuery.ordering}
            onSelectOrdering={(ordering: string | null) =>
              ordering !== gameQuery.ordering &&
              setGameQuery({ ...gameQuery, ordering })
            }
          />
        </div>
        <GameGrid gameQuery={gameQuery} />
      </section>
      <section></section>
    </main>
  );
}

export default App;
