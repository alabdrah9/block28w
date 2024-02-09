import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import './components/Blue'
import './components/Red'
import './components/Home'


function App() {
  const [count, setCount] = useState(0)

  return (

   <div id="container">
    

      <div id="navbar"><link rel="stylesheet" href="./components/Blue.jsx"  />Blue</div>
      <div id="navbar"><link rel="stylesheet" href="./components/Red.jsx" />Red</div>
      <div id="navbar"><link rel="stylesheet" href="./components/Home.jsx." />Home</div>
      <div id="navbar"><link rel="stylesheet" href="./." /></div>
      <div id="main-section">
   <Routes>
     <Route path="/blue" element={<h1>Blue</h1>} />
     <Route path="/red" element={<h1>Red</h1>} />
     <Route path="/home" element={<h1>Home</h1>} />
   </Routes>
</div>
    </div>
    

  )
}

export default App
