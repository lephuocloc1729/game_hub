import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import { useState } from "react";

export interface GameQuery {
  genreId: number | null;
  platformId: number | null;
  ordering: string | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState({} as GameQuery);

  return (
    <main className="grid grid-areas-sm text-slate-700 lg:grid-areas-lg dark:bg-dark-blue dark:text-white min-h-screen">
      <nav className="nav">
        <Navbar />
      </nav>
      <aside className="hidden aside lg:block">
        <GenreList
          onSelectGenre={(genreId: number | null) =>
            setGameQuery({ ...gameQuery, genreId: genreId })
          }
          selectedGenreId={gameQuery.genreId}
        />
      </aside>
      <section className="main">
        <div className="flex">
          <PlatformSelector
            onSelect={(platformId: number | null) =>
              setGameQuery({ ...gameQuery, platformId: platformId })
            }
          />
          <SortSelector
            selectedOrder={gameQuery.ordering}
            onSelectOrdering={(ordering: string | null) =>
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
