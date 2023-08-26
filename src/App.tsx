import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import { useState } from "react";

export interface GameQuery {
  genreId: number | null;
  platformId: number | null;
}

function App() {
  // const [selectedGenreId, setSelectedGenreId] = useState<number | null>(null);
  // const [selectedPlatformId, setSelectedPlatformId] = useState<number | null>(
  //   null
  // );
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
        <PlatformSelector
          onSelect={(platformId: number | null) =>
            setGameQuery({ ...gameQuery, platformId: platformId })
          }
        />
        <GameGrid gameQuery={gameQuery} />
      </section>
      <section></section>
    </main>
  );
}

export default App;
