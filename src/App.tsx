import Navbar from "./components/Navbar";
function App() {
  return (
    <main className="grid grid-areas-sm lg:grid-areas-lg">
      <nav className="nav">
        <Navbar />
      </nav>
      <section className="hidden aside lg:block">aside</section>
      <section className="main">main</section>
      <section></section>
    </main>
  );
}

export default App;
