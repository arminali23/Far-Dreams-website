import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Contact from "./components/pages/Contact";
import SignUp from "./components/pages/SignUp";



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path = '/' exact Component={Home}/>
          <Route path='/products' exact Component={Products}/>
          <Route path='/services' exact Component={Contact}/>
          <Route path='/sign-up' exact Component={Home}/>
        </Routes>
      </Router>
    
    
    </>

  );
}

export default App;
