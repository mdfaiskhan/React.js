import React from "react";
import "./index.css";
import Home from "./routes/Home"
import About from "./routes/About"
import Project from "./routes/Project"
import Pages from "./routes/Pages";
import Contact from "./routes/Contact"

import { Route,Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path="/"  element={<Home />}/>
      <Route path="/Project"  element={<Project />}/>
      <Route path="/Pages"  element={<Pages />}/>
      <Route path="/About"  element={<About />}/>
      <Route path="/Contact"  element={<Contact />}/>
    </Routes>
    </>
  );
}

export default App;
