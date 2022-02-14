import React from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Signin from './components/Signin'
import Register from './components/Register'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer';
import Contact from './components/Contact';
function App() {
  return (
    <div>
     <Navbar/>
     <div className="container-fluid App">
      
      <Routes>
      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<Register />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/about" element={<About />} />
      <Route path="/" element={<Home />} />
      </Routes>
      </div>
      <Footer/>
    </div>
  );
}



export default App;