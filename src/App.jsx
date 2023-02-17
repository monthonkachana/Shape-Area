import { useState } from "react";
import "./App.css";
import HeaderComp from "./components/HeaderComp";
import Footer from "./components/Footer";

//view
import Circle from "./components/view/Circle";
import Square from "./components/view/Square";
import Triangle from "./components/view/Triangle";
import Home from "./components/view/Home";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Southeast Asia University</h1>

      <Link style={{ padding: "10px" }} to="/">
        Home
      </Link>
      <Link style={{ padding: "10px" }} to="/Circle">
        Circle Area
      </Link>
      <Link style={{ padding: "10px" }} to="/Square">
        Square Area
      </Link>
      <Link style={{ padding: "10px" }} to="/Triangle">
        Triangle Area
      </Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Circle" element={<Circle />} />
        <Route path="/Square" element={<Square />} />
        <Route path="/Triangle" element={<Triangle />} />
      </Routes>
    </div>
  );
}

export default App;
