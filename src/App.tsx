// import './App.css'
import { Routes, Route } from "react-router-dom";
import General from "./Layout/General";
import Home from "./Pages/Home/Home";
import Page1 from "./Pages/Page1/Page1";

function App() {
  return (
    <Routes>
      <Route path="/" element={<General />}>
        <Route path="/" element={<Home />} />
        <Route path="/add-tab" element={<Page1 />} />
      </Route>
    </Routes>
  );
}

export default App;
