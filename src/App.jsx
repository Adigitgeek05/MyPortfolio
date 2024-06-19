import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar/navbar'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {
  
  return (
    
      <div>
        <Navbar />
        <Hero />
        <About />
        <Contact />
        <Footer/>
      </div>
    
  )
}

export default App
