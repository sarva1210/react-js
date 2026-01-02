import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import Navbar from './Components/Navbar'
import MenProduct from './Pages/MenProduct'
import Women from './Pages/Women'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} />
        <Route path='/product/MenProduct' element={<MenProduct />} />
        <Route path='/product/Women' element={<Women />} />
      </Routes>

    </div>
  )
}

export default App
