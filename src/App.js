import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js'
import About from './pages/About.js'
import Contact from './pages/Contact.js';
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';
import Landlord from './pages/Landlord.js';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/landlord" element={<Landlord/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
