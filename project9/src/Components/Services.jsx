import React from "react";
import motion from "../Images/service-motion.png";
import animation3d from "../Images/service-3d.png";
import branding from "../Images/service-branding.png";

export default function Services() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 md:px-16 pt-0 py-28">

        <div className="flex justify-between items-end mb-14">
            <h2 className="text-[28px] font-medium tracking-tight">Our Services</h2>
            <p className="text-sm text-gray-700 max-w-xs"> Discover a wide range of opportunities through our qualified services. </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 flex flex-col">

        {/* Motion */}
            <div className="bg-white p-8 rounded-[28px] shadow-sm hover:-translate-y-2 transition">
                <img className="w-full h-[220px] object-contain"  src={motion} alt="Motion graphics" />

                <div className="mt-auto flex justify-between items-center">
                    <h3 className="font-medium">Motion Graphics</h3>
                    <span className="w-9 h-9 border rounded-full flex items-center justify-center"> ↗</span>
                </div>

            </div>

        {/* Active */}
            <div className="bg-purple-600 text-white p-8 rounded-[28px] shadow-md hover:-translate-y-2 transition scale-[1.04]">
                <img className="w-full h-[220px] object-contain"  src={animation3d} alt="2D 3D animation" />

                <div className="mt-auto flex justify-between items-center">
                    <h3 className="font-medium">2D / 3D Animation</h3>
                    <span className="w-9 h-9 bg-white text-purple-600 rounded-full flex items-center justify-center"> ↗ </span>
                </div>

            </div>

        {/* Branding */}
             <div className="bg-white p-8 rounded-[28px] shadow-sm hover:-translate-y-2 transition">
                <img className="w-full h-[220px] object-contain"  src={branding} alt="Brand identity" />

                <div className="mt-auto flex justify-between items-center">
                    <h3 className="font-medium">Visual Identity</h3>
                    <span className="w-9 h-9 border rounded-full flex items-center justify-center">↗</span>
                </div>

            </div>

        </div>
    </section>
  )
}
