import React from "react";
import heroLeft from "../Images/hero-left.png";
import heroRight from "../Images/hero-right.png";

export default function Hero() {
  return (
    <section className="relative max-w-[1280px] mx-auto px-6 md:px-16 pt-10 pb-32 text-center">

      <img className="absolute left-6 md:left-20 top-18 w-44 md:w-64" src={heroLeft} alt="Hero left illustration"/>

      <img className="absolute right-6 md:right-20 top-26 w-44 md:w-64" src={heroRight} alt="Hero right illustration"/>

      <p className="text-m text-gray-700 mb-6 tracking-wide">Igniting the Spark of Inspiration</p>

      <h1 className="text-[42px] md:text-[64px] font-medium leading-[1.1] tracking-tight"> Unleash Your <br /> Brand ✦ with Our <br />
        <span className="bg-yellow-300 px-3 py-1 rounded-md inline-block"> Mágico </span>{" "} Design </h1>

      <div className="mt-14 flex justify-center">
        <button className="flex items-center gap-3 border border-gray-300 px-6 py-3 rounded-full hover:bg-purple-300 hover:text-white transition hover:scale-98"> Create Magic
          <span className="w-9 h-9 bg-purple-300 text-white rounded-full flex items-center justify-center "> → </span>
        </button>
      </div>
    </section>
  )
}
