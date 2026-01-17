import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#f7f8fb] border-t border-slate-100">
      <div className="containerx py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h3 className="font-extrabold text-xl text-[#0b2f44]">Secure<span className="text-slate-500">Pro</span></h3>
          <p className="mt-3 text-sm text-slate-500">Trusted security services for home & business with modern solutions.</p>

          <div className="flex gap-3 mt-4">
            <span className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 transition cursor-pointer"><FaFacebookF size={14} /></span>
            <span className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 transition cursor-pointer"><FaTwitter size={14} /></span>
            <span className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 transition cursor-pointer"><FaLinkedinIn size={14} /></span>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-[#0b2f44]">Navigation</h4>
          <div className="mt-3 flex flex-col gap-2 text-sm text-slate-500">
            <Link to="/" className="hover:text-[#0b2f44]">Home</Link>
            <Link to="/about" className="hover:text-[#0b2f44]">About</Link>
            <Link to="/services" className="hover:text-[#0b2f44]">Services</Link>
            <Link to="/contact" className="hover:text-[#0b2f44]">Contact</Link>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-[#0b2f44]">Quick Link</h4>
          <div className="mt-3 flex flex-col gap-2 text-sm text-slate-500">
            <p>FAQ</p>
            <p>Blog</p>
            <p>Gallery</p>
            <p>Pricing</p>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-[#0b2f44]">Work Hours</h4>
          <p className="mt-3 text-sm text-slate-500">7:00 AM - 5:00 PM</p>
          <button className="mt-4 btnPrimary">Call Us</button>
        </div>
      </div>

      <div className="text-center text-xs text-slate-400 py-6 border-t border-slate-100"> © {new Date().getFullYear()} Developed by Sarva ✅ All Rights Reserved</div>
    </footer>
  )
}

export default Footer;
