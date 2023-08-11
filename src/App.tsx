// import './App.css'
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import General from "./Layout/General";
import Home from "./Pages/Home/Home";
import Page1 from "./Pages/Page1/Page1";
import MyContext from "./context/TabContext";
import { RiEarthLine } from "react-icons/ri";

function App() {
  const [tabValue, setTabValue] = useState([
    { icon: RiEarthLine, description: "New Tab" },
  ]);
  return (
    <MyContext.Provider value={{ tabValue, setTabValue }}>
      <Routes>
        <Route path="/" element={<General />}>
          <Route path="/" element={<Home />} />
          <Route path="/add-tab" element={<Page1 />} />
        </Route>
      </Routes>
    </MyContext.Provider>
  );
}

export default App;
