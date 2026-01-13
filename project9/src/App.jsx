import React from "react";
import {Routes,Route} from "react-router-dom"
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

export default function App(){
  return(
    <>
     <Navbar/>

     <Routes>
          <Route path ="/" element={<Home/>}/>
     </Routes>

     <Footer/>
    </>
  )
}