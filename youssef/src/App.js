import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes> 
    </div>
  );
}

export default App;
