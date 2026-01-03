import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import Navbar from './Components/Navbar'
import MenProduct from './Pages/MenProduct'
import Women from './Pages/Women'
import RandomAbout from './Pages/RandomAbout'
import Courses from './Pages/Courses'
import Cohort1 from './Pages/Cohort1'
import AnyCourse from './Pages/AnyCourse'
import CourseDetail from './Pages/CourseDetail'
import NotFound from './Pages/NotFound'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} />
        <Route path='/courses' element={<Courses />} />

        {/* Nested Routes  */}
        <Route path='/product/MenProduct' element={<MenProduct />} />
        <Route path='/product/women' element={<Women />} />

        {/* Dynamic Route  */}
        <Route path='/about/:id' element={<RandomAbout />} />
        <Route path='/courses/:courseId' element={<AnyCourse />} />

        {/* Nested Dynamic Routes  */}
        <Route path='/courses/:courseId/detail' element={<CourseDetail />} />

        {/* Notfound Page  */}
        <Route path='/*' element={<NotFound />} />

      </Routes>

    </div>
  )
}


export default App
