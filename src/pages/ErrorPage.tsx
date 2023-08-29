import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";

const ErrorPage = () => {
  const routeError = useRouteError();
  return (
    <>
      <Navbar />
      <main className="flex flex-col justify-center items-center bg-dark-blue min-h-screen text-white">
        <p className="text-4xl">Oops</p>
        <p className="text-2xl">
          {isRouteErrorResponse(routeError)
            ? "Invalid Page"
            : "An unexpected error occured"}
        </p>
      </main>
    </>
  );
};

export default ErrorPage;
