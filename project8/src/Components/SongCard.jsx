import React from "react";
import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const SongCard = ({ song, index, songs }) => {
  const { playSong } = useContext(PlayerContext);

  return (
    <div
      onClick={() => playSong(songs, index)}
      className="bg-zinc-900 p-4 rounded-lg cursor-pointer hover:bg-zinc-800 transition"
    >
      <img src={song.image} onError={(e) => {
         e.target.src = "https://via.placeholder.com/300x300?text=No+Image"; }}
         alt={song.title} className="w-full h-40 object-cover rounded-md mb-3"/>

      <p className="text-sm font-semibold truncate">
        {song.title}
      </p>
    </div>
  );
};

export default SongCard;
