import React from 'react';
import './App.css';
import Navbar from './components/Navbar'

// Contents
import Home from './contents/Home'
import About from './contents/About'
import Education from './contents/Education'
import Skills from './contents/Skills'
import Contact from './contents/Certificate'

import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'

function App() {
 

  return (
    <div className="App" >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/certificate" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;