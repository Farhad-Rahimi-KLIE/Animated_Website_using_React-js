import React from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact"

function App() {
  return (
    <div>
       <BrowserRouter>
      <Navbar title="Animated" home="Home" about="About" services="Services" contact="Contact"/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contact" element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
