import React from 'react';
import './App.css';
import Navbar from './components/Navbar'

// Contents
import Home from './contents/Home'
import About from './contents/About'


import Certificate from './contents/Certificate'
import Contact from './contents/Contact'

import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'

function App() {
 

  return (
    <div className="App" >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;