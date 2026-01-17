import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="containerx py-16">
        <h1 className="text-4xl font-extrabold text-[#0b2f44]">About Us</h1>
        <p className="mt-4 text-slate-500 max-w-2xl text-sm"> We are a professional security service provider delivering high quality and modern security solutions for homes and offices.</p>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage;
