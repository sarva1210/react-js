import React from "react";

const Services = () => {
  return (
    <section className="w-full py-16 bg-[#f7f8fb]">
      <div className="containerx">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="text-3xl font-extrabold text-[#0b2f44]">
            We Provide The <br /> Best Services
          </h2>
          <p className="text-slate-500 text-sm max-w-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
            nobis.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Left */}
          <div className="text-center">
            <div className="w-14 h-14 mx-auto rounded-full bg-white shadow flex items-center justify-center text-2xl">
              📷
            </div>
            <h3 className="mt-4 font-bold text-[#0b2f44]">Security Camera</h3>
            <p className="mt-2 text-xs text-slate-500 max-w-xs mx-auto">
              We bring the best quality cameras for monitoring and safety.
            </p>
            <button className="mt-5 btnPrimary">Learn more</button>
          </div>

          {/* Middle Highlight */}
          <div className="flex justify-center">
            <div className="w-[270px] h-[270px] rounded-full bg-white shadowPro flex flex-col items-center justify-center text-center px-7">
              <div className="w-16 h-16 rounded-full bg-[#0b2f44] text-white flex items-center justify-center text-2xl">
                📷
              </div>
              <h3 className="mt-4 text-lg font-bold text-[#0b2f44]">
                Security Camera
              </h3>
              <p className="mt-2 text-xs text-slate-500">
                We bring the best quality cameras for advanced security systems.
              </p>
              <button className="mt-5 btnPrimary">Learn more</button>
            </div>
          </div>

          {/* Right */}
          <div className="text-center">
            <div className="w-14 h-14 mx-auto rounded-full bg-white shadow flex items-center justify-center text-2xl">
              🏠
            </div>
            <h3 className="mt-4 font-bold text-[#0b2f44]">Smart Home</h3>
            <p className="mt-2 text-xs text-slate-500 max-w-xs mx-auto">
              Smart home monitoring solutions for better control and protection.
            </p>
            <button className="mt-5 btnPrimary">Learn more</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
