import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Player from "./Components/Player";
import Home from "./Pages/Home";
import Search from "./Pages/Search";

const App =()=>{
  return(
    <div className="flex h-screen bg-black text-white">
      <Sidebar/>
      <div className="flex-1 overflow-y-auto pb-24">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/search" element={<Search/>}/>
        </Routes>
      </div>
      <Player/>
    </div>
  )
}

export default App