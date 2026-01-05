import React from "react";
import { createContext, useState } from "react";

export const PlayerContext = createContext()

const PlayerProvider = ({children})=>{
    const [playlist, setPlaylist] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const PlaySong = (songs, index)=>{
        setPlaylist(songs);
        setCurrentIndex(index);
        setIsPlaying(true);
    };

    const nextSong =()=>{
        setCurrentIndex((prev)=>
            prev +1 >= playlist.length?0 : prev+1);
    };

    const prevSong =()=>{
        setCurrentIndex((prev)=>
            prev === 0? playlist.length-1 : prev-1);
    };

    return(
        <PlayerContext.Provider value={{playlist, currentIndex, isPlaying, setIsPlaying, PlaySong, nextSong, prevSong}}>{children}</PlayerContext.Provider>
    )

}

export default PlayerProvider