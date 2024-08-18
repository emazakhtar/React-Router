import React from "react";
import About from "./pages/About";
import Home from "./pages/Home";

import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <h1>JobRouter</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/skills">Skills</NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
