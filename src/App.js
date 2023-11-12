import React from "react";
import {BrowserRouter, Routes,Route,} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';

import Home from './contents/home';
import About from './contents/about'
import Education from "./contents/Education";
import Projects from "./contents/skills";
import Contact from "./contents/contacts";



function App() {
  return (
    <div className="App">
<BrowserRouter>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
