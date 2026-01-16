import React from "react";
import { processSteps } from "../data/siteData";

const Process = () => {
  return (
    <section className="w-full py-16 bg-[#f7f8fb]">
      <div className="containerx">
        <h2 className="text-3xl font-extrabold text-center text-[#0b2f44]">
          Our Working Process
        </h2>
        <p className="text-center text-slate-500 mt-2 text-sm max-w-lg mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {processSteps.map((p) => {
            const active = p.highlight;
            return (
              <div
                key={p.id}
                className={`rounded-2xl p-6 text-center border transition-all duration-300
                ${
                  active
                    ? "bg-[#0b2f44] text-white shadowPro border-transparent"
                    : "bg-white text-slate-800 shadow-md border-slate-200"
                }`}
              >
                <div
                  className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center text-3xl
                  ${active ? "bg-white/15" : "bg-slate-100"}`}
                >
                  {p.icon}
                </div>

                <h3 className="mt-4 font-bold">{p.title}</h3>

                <p
                  className={`mt-2 text-xs ${
                    active ? "text-white/80" : "text-slate-500"
                  }`}
                >
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
