import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Center from './Components/Center'
import Features from './Components/Features'
import About from './Components/About'
import Advantages from './Components/Advantages'

function App() {

  return (
    <div className='main'>
      <Navbar/>
      <Center/>
      <Features/>
      <About/>
      <Advantages/>
    </div>
  )
}

export default App
