// import './App.css'
import { Routes, Route } from "react-router-dom";
import General from "./Layout/General";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<General />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
