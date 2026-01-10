import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import CTA from "./Components/CTA";
import Footer from "./Components/Footer";

export default function App(){
  return(
    <>
     <Navbar/>
     <Hero/>
     <Services/>
     <Projects/>
     <CTA/>
     <Footer/>
    </>
  )
}