
// import './App.css'
import { Routes, Route } from "react-router-dom";
import General from "./Layout/General";

function App() {
  return (
    <Routes>
      <Route path="/" element={<General />}>
        
      </Route>
    </Routes>
  );
}

export default App;
