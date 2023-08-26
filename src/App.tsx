import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";

function App() {
  const [selectedGenreId, setSelectedGenreId] = useState<number | null>(null);
  return (
    <main className="grid grid-areas-sm text-slate-700 lg:grid-areas-lg dark:bg-dark-blue dark:text-white min-h-screen">
      <nav className="nav">
        <Navbar />
      </nav>
      <aside className="hidden aside lg:block">
        <GenreList onSelectGenre={setSelectedGenreId} />
      </aside>
      <section className="main">
        <GameGrid selectedGenre={selectedGenreId} />
      </section>
      <section></section>
    </main>
  );
}

export default App;
