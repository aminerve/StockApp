import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Stock from "./pages/Stock";
import NavBar from "./components/NavBar";
import "./App.css";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stocks" element={<Dashboard />} />
        <Route path="/stocks/:symbol" element={<Stock />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
