
import {Routes, Route, Link } from "react-router-dom";
// import React from "react";
import Blue from "./Blue";
import Red from "./Red";
import Home from "./Home"
export default function Main() {
    return (
    
    <div id="main-section">
  <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/blue" element={<Blue/>} />
  <Route path="/red" element={<Red/>} />
  </Routes>
</div>

    );
  }
  