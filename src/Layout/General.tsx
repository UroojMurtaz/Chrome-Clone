import React from "react";
import Tabs from "../Components/Tabs";
import { Outlet } from "react-router-dom";

const General = () => {
  const tabs = [
    { label: "Tab 1 Google Chrome", content: "Content for Tab 1" },
    { label: "Tab 2 its Urooj", content: "Content for Tab 2" },
    { label: "Tab 2 its Urooj", content: "Content for Tab 2" },
    { label: "Tab 2 its Urooj", content: "Content for Tab 2" },

  ];
  return (
    <>
      <div className="min-h-screen flex flex-col">
      {/* <header className="bg-gray-800 text-white p-4 sticky top-0 z-10 w-full">
          <Tabs tabs={tabs} />
        </header> */}
        <header className="bg-gray-800 text-white p-4 sticky top-0 z-10">
        This is the sticky header
      </header>
        <main className="flex-grow p-4 overflow-auto">
          {" "}
          <Outlet />
        </main>
        <footer className="bg-gray-800 text-white p-4">
          This is the footer
        </footer>
      </div>
    </>
  );
};

export default General;
