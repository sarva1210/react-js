import React from "react";
import { blogs } from "../data/siteData";

const Blog = () => {
  return (
    <section id="blog" className="w-full py-16 bg-[#f7f8fb]">
      <div className="containerx">
        <h2 className="text-3xl font-extrabold text-center text-[#0b2f44]">
          Blog & Article
        </h2>
        <p className="text-center text-slate-500 mt-2 text-sm">
          Latest updates and tips for security solutions.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((b) => (
            <div
              key={b.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadowPro"
            >
              <div className="relative overflow-hidden">
                <img
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
                  src={b.img}
                  alt={b.title}
                />
                <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-[#0b2f44] text-white flex items-center justify-center font-bold">
                  {b.date}
                </div>
              </div>

              <div className="p-6">
                <p className="text-xs text-slate-400">{b.category}</p>
                <h3 className="text-lg font-bold text-[#0b2f44] mt-2">
                  {b.title}
                </h3>
                <p className="mt-2 text-slate-500 text-xs">{b.desc}</p>
                <button className="mt-5 text-[#0b2f44] font-semibold hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
