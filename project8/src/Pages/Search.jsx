import React from "react";
import axios from "axios";
import { useState, useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const Search =()=>{
    const [query, setQuery] = useState("");
    const [songs, setSongs] = useState([]);
    const { playSong } = useContext(PlayerContext);

    const searchSongs = async () => {
        if (!query) return;

        const res = await axios.get(
            `https://itunes.apple.com/search?term=${query}&media=music&limit=20`
        );

        const formatted = res.data.results 
          .filter((s)=> s.previewUrl)
          .map((s) => ({
            title: s.trackName, 
            image: s.artworkUrl100,
            audio: s.previewUrl,
        }));

        setSongs(formatted);
    }

    return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Search</h1>

      <div className="flex gap-2 mb-6">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search songs..."
          className="flex-1 p-2 bg-zinc-800 rounded outline-none"/>
        <button onClick={searchSongs} className="bg-green-500 px-4 rounded text-black"> Search </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {songs.map((song, index) => (
          <div key={index} onClick={() => playSong(songs, index)} className="bg-zinc-900 p-3 rounded cursor-pointer" >
            <img src={song.image} className="rounded mb-2" />
            <p className="text-sm truncate">{song.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search