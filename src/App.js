import React  from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Route,Routes } from 'react-router-dom';
// import { Switch } from "react-router";
import Home from './Components/pages/Home'
import Services from './Components/pages/Services'
import Products from './Components/pages/Products'
import SignUp from './Components/pages/SignUp'
import About from './Components/pages/About'






import './App.css';

function App() {
return (
  <div >
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Services" element={<Services/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/Sign-up" element={<SignUp />} />
        <Route path="/About" element={<About/>} />  


      </Routes>
    </Router>
  </div>
);
}

export default App;
