import React from "react";
import { FaStar } from "react-icons/fa";

const NothingSecures = () => {
  return (
    <section className="w-full py-16">
      <div className="containerx grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div className="relative rounded-3xl overflow-hidden shadowPro bg-white">
          <img className="w-full h-[380px] object-cover" src="https://plus.unsplash.com/premium_photo-1729186145998-2412adf3e933?q=80&w=1054&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="security"/>

          {/* Overlay Card */}
          <div className="absolute bottom-5 left-5 bg-white rounded-2xl px-5 py-4 shadowPro w-[260px]">
            <p className="text-sm font-bold text-[#0b2f44]">Best Quality Services</p>
            <p className="text-xs text-slate-500 mt-1">Lorem ipsum dolor sit amet consectetur.</p>
            <button className="mt-3 px-4 py-2 rounded-full bg-[#0b2f44] text-white text-xs font-semibold hover:bg-[#092636] transition">Learn more</button>
          </div>
        </div>

        {/* Right Text */}
        <div>
          <h2 className="text-4xl font-extrabold text-[#0b2f44] leading-tight"> Nothing Secures <br /> You Better <br /> Than Us</h2>

          <p className="mt-4 text-sm text-slate-500 max-w-lg"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi incidunt, aspernatur qui magnam nostrum esse.</p>

          {/* Rating */}
          <div className="mt-6 flex items-center gap-3">
            <div className="flex items-center gap-1 text-yellow-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-sm text-slate-600 font-semibold">5.0 Customer Rating</p>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <button className="btnPrimary">Get Started</button>
            <button className="btnOutline">Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NothingSecures;
