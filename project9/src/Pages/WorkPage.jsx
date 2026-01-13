import React from "react";
import p1 from "../Images/project-1.png";
import p2 from "../Images/project-2.png";
import p3 from "../Images/project-3.png";
import p4 from "../Images/project-4.png";

export default function WorkPage() {
  const projects = [p1, p2, p3, p4];

  return (
    <section className="max-w-[1280px] mx-auto px-6 md:px-16 py-20">
      <h1 className="text-4xl font-medium mb-6">Our Work</h1>
      <p className="text-gray-600 mb-10"> Here are some creative projects we’ve worked on recently.</p>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((img, i) => (
          <div key={i} className="bg-white rounded-[28px] overflow-hidden shadow-sm">
            <img src={img} alt="" />
          </div>
        ))}
      </div>
    </section>
  )
}
