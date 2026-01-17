import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navClass = ({ isActive }) =>
    isActive ? "text-[#0b2f44] font-semibold" : "text-slate-600 hover:text-[#0b2f44]";

  return (
    <header className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-100">
      <nav className="containerx py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-extrabold text-[#0b2f44]">Secure<span className="text-slate-500">Pro</span></Link>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <NavLink className={navClass} to="/">Home</NavLink>
          <NavLink className={navClass} to="/about">About Us</NavLink>
          <NavLink className={navClass} to="/services">Services</NavLink>
          <NavLink className={navClass} to="/contact">Contact Us</NavLink>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <span className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition cursor-pointer"><FaFacebookF size={14} /></span>
          <span className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition cursor-pointer"><FaTwitter size={14} /></span>
          <span className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition cursor-pointer"><FaLinkedinIn size={14} /></span>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden w-10 h-10 rounded-lg border border-slate-200 bg-white flex items-center justify-center">{open ? "✖" : "☰"}</button>
      </nav>

      {open && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="containerx py-4 flex flex-col gap-4">
            <NavLink onClick={() => setOpen(false)} className={navClass} to="/">Home</NavLink>
            <NavLink onClick={() => setOpen(false)} className={navClass} to="/about">About Us</NavLink>
            <NavLink onClick={() => setOpen(false)} className={navClass} to="/services">Services</NavLink>
            <NavLink onClick={() => setOpen(false)} className={navClass} to="/contact">Contact Us</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar;
