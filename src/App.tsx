import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import General from "./Layout/General";
import Home from "./Pages/HomePage/Home";
import Page1 from "./Pages/Page1/Page1";
import FAQs from "./Pages/FAQsPage";
import MyContext from "./context/TabContext";
import { RiEarthLine } from "react-icons/ri";
import { ToastContainer } from "react-toastify";

interface Tab {
  icon: React.ElementType;
  description: string;
  id: number;
}

function App() {
  const [tabValue, setTabValue] = useState<Tab[]>([
    { icon: RiEarthLine, description: "New Tab", id: 1 },
  ]);

  return (
    <MyContext.Provider value={{ tabValue, setTabValue }}>
      <Routes>
        <Route path="/" element={<General />}>
          <Route path="/" element={<Home />} />
          <Route path="/add-tab" element={<Page1 />} />
          <Route path="/faqs" element={<FAQs />} />
        </Route>
      </Routes>
      <ToastContainer />
    </MyContext.Provider>
  );
}

export default App;
