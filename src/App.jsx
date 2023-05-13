import { Outlet } from "react-router-dom";

import logo from "./assets/quade_transparent.svg";
import useTitle from "./lib/useTitle";

function App({ title }) {
  useTitle(title);

  return (
    <>
      <header className="w-full h-12 bg-quade flex gap-2 px-2 items-center">
        <img src={logo} alt="quade logo" width="40" height="40" />
        <span className="flex flex-col justify-start">
          <h1 className="text-2xl text-white font-extrabold">new Quade App</h1>
        </span>
      </header>
      <main className="flex w-full h-[calc(100vh_-_3rem)] items-stretch">
        <Outlet />
      </main>
    </>
  );
}

export default App;
