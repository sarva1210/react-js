import React from "react";

export default function Navbar(){
    return(
        <nav className="max-w-[1280px] mx-auto flex justify-between items-center px-6 md:px-16 py-8">
            
            <div className="hidden  md:flex gap-10 text-l text-gray-700">
                <button className="hover:text-black transition hover:scale-95 cursor-pointer">Services</button>
                <button className="hover:text-black transition hover:scale-95 cursor-pointer">Work</button>
                <button className="hover:text-black transition hover:scale-95 cursor-pointer">About</button>
            </div>

            
            <h1 className="font-medium text-2xl pr-18 flex items-center gap-2 tracking-tight"> <span className="w-4 h-4 bg-purple-300 Main rounded-full"></span> Astratto</h1>

            <button className="border border-gray-300 px-5 py-2.5 rounded-full text-sm hover:bg-purple-300 Main hover:text-white transition hover:scale-98">Contact us ↗</button>
        </nav>
    )
}