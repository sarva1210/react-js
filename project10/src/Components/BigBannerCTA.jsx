import React from "react";
import { FaPlay } from "react-icons/fa";

const BigBannerCTA = () => {
  return (
    <section className="w-full py-16">
      <div className="containerx">
        <div className="bg-[#0b2f44] text-white rounded-3xl p-10 md:p-14 shadowPro relative overflow-hidden">
          {/* Background circles */}
          <div className="absolute top-[-80px] right-[-80px] w-[220px] h-[220px] rounded-full bg-white/10" />
          <div className="absolute bottom-[-90px] left-[-90px] w-[240px] h-[240px] rounded-full bg-white/10" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                Security Solutions <br />
                for your Work and <br />
                Home
              </h2>
              <p className="mt-3 text-white/75 text-sm max-w-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus, veniam.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <button className="px-6 py-3 rounded-full bg-white text-[#0b2f44] font-bold hover:bg-slate-200 transition active:scale-95">
                Get Started
              </button>

              <button className="w-14 h-14 rounded-full bg-white/15 hover:bg-white/25 transition flex items-center justify-center active:scale-95">
                <FaPlay size={16} className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BigBannerCTA;
