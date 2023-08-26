import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
function App() {
  return (
    <main className="grid grid-areas-sm text-slate-700 lg:grid-areas-lg dark:bg-dark-blue dark:text-white min-h-screen">
      <nav className="nav">
        <Navbar />
      </nav>
      <aside className="hidden aside lg:block">
        <GenreList />
      </aside>
      <section className="main">
        <GameGrid />
      </section>
      <section></section>
    </main>
  );
}

export default App;
