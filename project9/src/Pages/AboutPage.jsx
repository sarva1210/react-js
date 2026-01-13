import React from "react";
import heroLeft from "../Images/hero-left.png";

export default function AboutPage() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 md:px-16 py-20">
      <h1 className="text-4xl font-medium mb-6">About Astratto</h1>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-gray-600 leading-relaxed"> Astratto is a creative studio built on the idea that design should feel alive. We craft strong brand identities, animated experiences, and stunning visuals that speak with clarity and emotion.</p>

          <p className="text-gray-600 leading-relaxed mt-4"> Working with brands across the globe, we combine modern design systems, motion graphics, and storytelling to create work that not only looks great—but feels unforgettable.</p>
        </div>

        <div className="bg-white rounded-[40px] px-10 shadow-sm">
          <img src={heroLeft} alt="" className="w-full h-[200px] object-contain" />
        </div>
      </div>
    </section>
  )
}
