import React from "react";
import {Routes,Route} from "react-router-dom"
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import ServicesPage from "./Pages/ServicesPage";
import WorkPage from "./Pages/WorkPage";
import AboutPage from "./Pages/AboutPage";
import GalleryPage from "./Pages/GalleryPage";
import ContactPage from "./Pages/ContactPage";

export default function App(){
  return(
    <>
     <Navbar/>

     <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="/services" element={<ServicesPage/>}/>
        <Route path ="/work" element={<WorkPage/>}/>
        <Route path ="/about" element={<AboutPage/>}/>
        <Route path ="/gallery" element={<GalleryPage/>}/>
        <Route path ="/contact" element={<ContactPage/>}/>
     </Routes>

     <Footer/>
    </>
  )
}