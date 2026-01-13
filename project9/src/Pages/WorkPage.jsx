import React from "react";
import p1 from "../Images/project-1.png";
import p2 from "../Images/project-2.png";
import p3 from "../Images/project-3.png";
import p4 from "../Images/project-4.png";

export default function WorkPage() {
  const projects = [
    { img: p1, tag: "2D Animation", title: "The Lighthouse" },
    { img: p2, tag: "Visual Identity", title: "Snowscape Haven" },
    { img: p3, tag: "Motion Graphics", title: "Navigating Possibilities" },
    { img: p4, tag: "3D Animation", title: "Nocturnal Symphony" },
  ];
  
  return (
    <section className="max-w-[1280px] mx-auto pt-0 px-6 md:px-16 pb-0 py-10">
      <div className="flex justify-between items-end mb-14">
        <h2 className="text-[28px] font-medium">Recent Projects</h2>
          <p className="text-sm text-gray-700 max-w-xs">Step into the world of our most recent projects.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 pb-10">
        {projects.map((p, i) => (
          <div key={i} className="bg-white rounded-[28px] overflow-hidden shadow-sm hover:scale-[1.02] transition">
            <img src={p.img} alt={p.title} />
            <div className="p-7">
              <span className="text-xs text-purple-600">{p.tag}</span>
              <h3 className="font-medium mt-2">{p.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}