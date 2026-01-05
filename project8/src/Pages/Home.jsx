import React from "react";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const Home = () => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  const { playSong } = useContext(PlayerContext);
  console.log(useContext(PlayerContext));


  useEffect(() => {
    fetchSongs("eminem");
  }, []);

  const fetchSongs = async (artist) => {
    try {
      setLoading(true);

      const res = await axios.get(
        `https://itunes.apple.com/search?term=${artist}&media=music&limit=50`
      );

      const formattedSongs = res.data.results
        .filter((song) => song.previewUrl)
        .map((song) => ({
          title: song.trackName,
          image: song.artworkUrl100.replace("100x100", "300x300"),
          audio: song.previewUrl,
        }));
      console.log(formattedSongs[0]);
  
      setSongs(formattedSongs);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching songs", error);
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">
        Trending Now
      </h1>

      {/* Artist buttons (Spotify-like) */}
      <div className="flex gap-3 mb-6">
        {["eminem", "arijit singh", "taylor swift", "drake"].map(
          (artist) => (
            <button
              key={artist}
              onClick={() => fetchSongs(artist)}
              className="px-4 py-1 bg-zinc-800 rounded-full text-sm hover:bg-zinc-700"
            >
              {artist}
            </button>
          )
        )}
      </div>

      {/* Songs Grid */}
      {loading ? (
        <p className="text-gray-400">Loading songs...</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {songs.map((song, index) => (
            <div
              key={index}
              onClick={() => playSong(songs, index)}
              className="bg-zinc-900 p-4 rounded-lg cursor-pointer hover:bg-zinc-800 transition"
            >
              <img
                src={song.image}
                onError={(e) =>
                  (e.target.src =
                    "https://via.placeholder.com/300x300?text=No+Image")
                }
                className="w-full h-40 object-cover rounded-md mb-3"
                alt={song.title}
              />
              <p className="text-sm font-semibold truncate">
                {song.title}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
