import React from "react";

export default function Navbar(){
    return(
        <nav className="flex items-center justify-between px-6 md:px-20 py-6">
            <h1 className="text-xl font-bold text-primary">Astratto</h1>
            
            <ul className="hidden md:flex gap-8 text-gray-700">
                <li className="hover:bg-primary hover:text-pink-700 transition">Services</li>
                <li className="hover:bg-primary hover:text-pink-700 transition">Work</li>
                <li className="hover:bg-primary hover:text-pink-700 transition">About</li>
                <li className="hover:bg-primary hover:text-pink-700 transition">Carreers</li>
            </ul>

            <button className="border border-primary px-5 py-2 rounded-full text-primary hover:bg-primary hover:text-pink-700 transition">Contact us ↗</button>
        </nav>
    )
}