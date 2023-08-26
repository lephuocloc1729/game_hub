import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
function App() {
  return (
    <main className="grid grid-areas-sm lg:grid-areas-lg dark:bg-dark-blue dark:text-white min-h-screen">
      <nav className="nav">
        <Navbar />
      </nav>
      <section className="hidden aside lg:block">aside</section>
      <section className="main">
        <GameGrid />
      </section>
      <section></section>
    </main>
  );
}

export default App;
