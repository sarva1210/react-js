import React from "react";
import motion from "../Images/service-motion.png";
import animation3d from "../Images/service-3d.png";
import branding from "../Images/service-branding.png";

export default function ServicesPage() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 md:px-16 py-20">
      <h1 className="text-4xl font-medium mb-6">Our Services</h1>

      <div className="grid md:grid-cols-3 gap-10">
        <div className="bg-white p-8 rounded-[28px] shadow-sm">
          <img className="w-full h-[220px] object-contain" src={motion} alt="" />
          <h2 className="mt-5 font-medium text-lg">Motion Graphics</h2>
          <p className="text-gray-600 mt-2 text-sm">Smooth animations and visual storytelling.</p>
        </div>

        <div className="bg-white p-8 rounded-[28px] shadow-sm">
          <img className="w-full h-[220px] object-contain" src={animation3d} alt="" />
          <h2 className="mt-5 font-medium text-lg">2D / 3D Animation</h2>
          <p className="text-gray-600 mt-2 text-sm">Creative animations for brands and products.</p>
        </div>

        <div className="bg-white p-8 rounded-[28px] shadow-sm">
          <img className="w-full h-[220px] object-contain" src={branding} alt="" />
          <h2 className="mt-5 font-medium text-lg">Visual Identity</h2>
          <p className="text-gray-600 mt-2 text-sm"> Modern identity design and brand visuals.</p>
        </div>
      </div>
    </section>
  )
}
