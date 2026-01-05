import React from "react";
import { useContext, useEffect, useRef, useState } from "react";
import { PlayerContext } from "../context/PlayerContext";

const Player = () => {
  const {
    playlist,
    currentIndex,
    isPlaying,
    setIsPlaying,
    nextSong,
    prevSong,
  } = useContext(PlayerContext);

  const audioRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const song = playlist[currentIndex];

  // PLAY / PAUSE HANDLER (CRITICAL)
  useEffect(() => {
    if (!audioRef.current || !song) return;

    const playAudio = async () => {
      try {
        if (isPlaying) {
          await audioRef.current.play();
        } else {
          audioRef.current.pause();
        }
      } catch (err) {
        console.log("Autoplay blocked:", err);
      }
    };

    playAudio();
  }, [isPlaying, currentIndex, song]);

  if (!song) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md p-3">
      <div className="flex items-center gap-4">
        {/* Song image */}
        <img
          src={song.image}
          className="w-14 h-14 rounded object-cover"
          alt={song.title}
        />

        {/* Song info + progress */}
        <div className="flex-1">
          <p className="text-sm font-semibold truncate">
            {song.title}
          </p>

          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={(e) => {
              const time =
                (e.target.value / 100) *
                audioRef.current.duration;
              audioRef.current.currentTime = time;
            }}
            className="w-full"
          />
        </div>

        {/* Controls */}
        <div className="flex gap-4 text-xl">
          <button onClick={prevSong}>⏮</button>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="text-2xl"
          >
            {isPlaying ? "⏸" : "▶"}
          </button>

          <button onClick={nextSong}>⏭</button>
        </div>

        {/* AUDIO ELEMENT */}
        <audio
          ref={audioRef}
          src={song.audio}
          onTimeUpdate={() => {
            const percent =
              (audioRef.current.currentTime /
                audioRef.current.duration) *
              100;
            setProgress(percent || 0);
          }}
          onEnded={nextSong}
        />
      </div>
    </div>
  );
};

export default Player;
