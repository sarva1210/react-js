import React from "react";

export default function Footer() {
  return (
    <footer className="max-w-[1280px] mx-auto px-6 md:px-16 py-10 pt-0 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left */}
            <p className="text-sm text-gray-400"> Via della Creatività, 23 · 20121 Milano</p>

        {/* Center */}
            <div className="flex gap-10 text-sm text-gray-400">
                <span className="hover:text-black cursor-pointer">X</span>
                <span className="hover:text-black cursor-pointer">LinkedIn</span>
                <span className="hover:text-black cursor-pointer">Instagram</span>
            </div>

        {/* Right */}
            <p className="text-sm text-gray-400"> © 2026 Astratto</p>
        </div>
    </footer>
  )
}
