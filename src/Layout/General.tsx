import Tabs from "../Components/Tabs";
import { Outlet } from "react-router-dom";
import SearchBar from "../Components/SearchBar";


const General = () => {

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <header className="bg-white  text-white sticky top-0 z-10 ">
          <div className="bg-slate-100  text-white sticky top-0 z-10 ">
            <Tabs />
          </div>
          <SearchBar />
          <hr className="mt-5 sticky top-0 z-10" />
        </header>

        <main className="flex-grow overflow-auto ">
          {" "}
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default General;
