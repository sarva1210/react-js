import React, { useState } from "react";
import axios from "axios";
import AnimeCard from "./Components/AnimeCard";

const App = () => {

  const [allAnime, setAllAnime] = useState([]);
  const [animeCount, setAnimeCount] = useState("");
  const [display1, setDisplay1] = useState("block");

  const getAnime = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `https://dragonball-api.com/api/characters?limit=${Number(animeCount)}&page=1`
      );

      setAllAnime(response.data.items);
      setAnimeCount("");
      setDisplay1("hidden");

    } catch (error) {
      console.error("Error fetching anime:", error);
    }
  };

  return (
    <div className="mainContainer w-full min-h-screen p-6 px-20">

      <form onSubmit={getAnime}>
        <input
          type="number"
          min={1}
          placeholder="Enter Anime Count"
          className="bg-[#535353] text-3xl text-white border-4 border-[#d1d1d1] px-4 py-2 mr-5"
          value={animeCount}
          required
          onChange={(e) => setAnimeCount(e.target.value)}
        />

        <button className="bg-[#535353] text-3xl text-[#f1f1f1] border-4 border-[#d1d1d1] px-4 py-2 active:scale-95 mb-10">
          Launch Characters
        </button>
      </form>

      <div className="w-full flex gap-15 flex-wrap relative">

        
        <img
          className={`${display1} invert absolute top-30 h-80 animate-marquee`}
          src="https://i.pinimg.com/originals/f9/2d/eb/f92debea10b3bd06e52ecb96695f56a0.gif"
          alt=""/>
        <img
          className={`${display1} grayscale absolute top-80 h-120 animate-marquee`}
          src="https://i.pinimg.com/originals/f9/2d/eb/f92debea10b3bd06e52ecb96695f56a0.gif"
          alt=""/>
        <img
          className={`${display1} absolute top-40 left-140 h-100 rotate-90 animate-marquee-opposite`}
          src="https://i.pinimg.com/originals/f9/2d/eb/f92debea10b3bd06e52ecb96695f56a0.gif"
          alt=""/>

        {allAnime.map((elem) => (
          <AnimeCard key={elem.id} name={elem.name} affiliation={elem.affiliation} gender={elem.gender} race={elem.race} ki={elem.ki} image={elem.image} />
        ))}
      </div>
    </div>
  );
};

export default App;
