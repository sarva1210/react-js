import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { FaPlay } from "react-icons/fa";

const Hero = () => {
  const { setIsVideoOpen } = useContext(AppContext);

  return (
    <section className="w-full bg-[#f7f8fb] relative overflow-hidden">
      <div className="absolute top-[-120px] left-[-120px] w-[280px] h-[280px] rounded-full bg-[#dfe6ee] blur-2xl opacity-70" />
      <div className="absolute bottom-[-140px] right-[-140px] w-[320px] h-[320px] rounded-full bg-[#e7edf3] blur-2xl opacity-70" />

      <div className="containerx pt-12 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-[#0b2f44]"> Professional <br /> <span className="text-slate-500">Security Services</span> <br /> You Can Trust</h1>

          <p className="mt-5 text-slate-500 max-w-lg text-sm leading-relaxed"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ut dolorem tempore incidunt ut reiciendis.</p>

          <div className="mt-8 flex items-center gap-12">
            <div>
              <h3 className="text-2xl font-bold text-[#0b2f44]">11</h3>
              <p className="text-xs text-slate-500">Experience</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#0b2f44]">25</h3>
              <p className="text-xs text-slate-500">Product</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#0b2f44]">100+</h3>
              <p className="text-xs text-slate-500">Project Done</p>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-[290px] h-[290px] sm:w-[380px] sm:h-[380px] rounded-full bg-white shadowPro flex items-center justify-center">
            <div className="w-[240px] h-[240px] sm:w-[310px] sm:h-[310px] rounded-full bg-slate-100 overflow-hidden border border-slate-200">
              <img className="w-full h-full object-cover" src="https://plus.unsplash.com/premium_photo-1661506793920-77b76b2e3685?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="camera"/>
            </div>

            <button onClick={() => setIsVideoOpen(true)} className="absolute right-5 bottom-10 w-14 h-14 rounded-full bg-[#0b2f44] text-white flex items-center justify-center shadow-lg hover:bg-[#092636] transition active:scale-95"><FaPlay size={14} className="ml-1" /></button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
