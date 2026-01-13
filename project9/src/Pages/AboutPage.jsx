import React from "react";
import heroLeft from "../Images/hero-left.png";

export default function AboutPage() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 md:px-16 py-20">
      <h1 className="text-4xl font-medium mb-6">About Astratto</h1>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-gray-600 leading-relaxed"> Astratto is a creative studio focused on building strong brand identities, animation experiences, and stunning visuals that leave a lasting impression.</p>

          <p className="text-gray-600 leading-relaxed mt-4"> We collaborate with brands worldwide to craft modern design systems, motion graphics, and creative storytelling.</p>
        </div>

        <div className="bg-white rounded-[28px] p-10 shadow-sm">
          <img src={heroLeft} alt="" className="w-full object-contain" />
        </div>
      </div>
    </section>
  )
}
