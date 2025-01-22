import React, { useState, useEffect } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import Header from './components/Header';
import Presentation from './components/Presentation';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

import './App.css'

const App = () => {



  return (


    <div >

      <Header />
      <Presentation />
      <About />
      <Portfolio />
      <Footer />


    </div>

  )
}

export default App;
