import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-20 bg-zinc-900 flex flex-col items-center py-6 gap-10">
      <span className="text-green-400 text-xl">𝄞</span>

      <NavLink to="/" className="text-xl opacity-70 hover:opacity-100">
        🏠︎
      </NavLink>

      <NavLink to="/search" className="text-xl opacity-70 hover:opacity-100">
        🔍︎
      </NavLink>
    </div>
  );
};

export default Sidebar;
