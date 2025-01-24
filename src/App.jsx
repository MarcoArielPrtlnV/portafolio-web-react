import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from './components/Header';
import Presentation from './components/Presentation';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

import './App.css'

const App = () => {



  return (


    <motion.div
    
      initial={{ opacity: 0 }}  // Empieza invisible
      animate={{ opacity: 1 }}  // Se vuelve visible
      transition={{ duration: 1 }}  // Duración de la animación
    
    >

      <Header />
      <Presentation />
      <About />
      <Portfolio />
      <Footer />


    </motion.div>

  )
}

export default App;
