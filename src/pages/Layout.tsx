import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <section className="bg-dark-blue min-h-section text-white">
        <Outlet />
      </section>
    </>
  );
};

export default Layout;
