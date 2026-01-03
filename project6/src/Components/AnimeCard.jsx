import React, { useEffect, useRef, useState } from "react";

const AnimeCard = ({ name, affiliation, gender, race, ki, image }) => {

  const [coordinateX, setCoordinateX] = useState(0);
  const [coordinateY, setCoordinateY] = useState(0);
  const [displayStars, setDisplayStars] = useState("hidden");

  const cardRef = useRef(null);

  const cardUrl = [
    "https://i.pinimg.com/736x/21/18/75/211875824ca0103f3a6f696029f63782.jpg",
    "https://i.pinimg.com/736x/c9/27/23/c92723fad20bc338bd967b4779ff5025.jpg",
    "https://i.pinimg.com/1200x/c8/49/1d/c8491d59b63375aee0af502e5efc1d58.jpg",
    "https://i.pinimg.com/736x/98/50/28/985028e3757426c0bc7725bc6f547ecf.jpg",
  ];

  // random background only once
  const randomBg = useRef(
    cardUrl[Math.floor(Math.random() * cardUrl.length)]
  );

  const doSomething = (e) => {
    const rect = cardRef.current.getBoundingClientRect();

    setCoordinateX(e.clientX - rect.left);
    setCoordinateY(e.clientY - rect.top);
    setDisplayStars("block");
  };

  // hide stars after 10s
  useEffect(() => {
    if (displayStars === "block") {
      const timer = setTimeout(() => {
        setDisplayStars("hidden");
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [displayStars]);

  return (
    <div
      ref={cardRef}
      className="card w-70 h-105 rounded-lg relative overflow-hidden"
    >
      {/* Sparkles */}
      <img
        style={{ top: coordinateY, left: coordinateX }}
        className={`${displayStars} absolute z-50`}
        src="https://condaluna.com/assets/stickers/sparkle-trail-1.gif"
        alt=""/>

      <img
        style={{ top: coordinateY + 20, left: coordinateX + 40 }}
        className={`${displayStars} absolute z-50`}
        src="https://condaluna.com/assets/stickers/sparkle-trail.gif"
        alt=""/>

      <div className="relative w-full h-full [perspective:1000px]">
        <div className="card-frame w-full h-full transition-transform duration-500 [transform-style:preserve-3d]">

          <img
            className="object-cover relative dragon-frame"
            src={randomBg.current}
            alt=""/>

          <img
            className="h-80 w-45 absolute top-20 left-28 object-contain"
            src={image}
            alt=""/>

          <div className="absolute top-35 left-12 text-3xl font-semibold"> {name} </div>
          <div className="absolute top-46 left-12 text-2xl"> {affiliation} </div>
          <div className="absolute top-52 left-12 text-2xl"> {race} </div>
          <div className="absolute top-58 left-12 text-2xl"> {gender} </div>
          <div className="absolute top-64 left-12 text-2xl"> {ki} </div>

          <button onClick={doSomething} className="absolute top-78 left-15 text-4xl px-2 text-white py-1 rounded-2xl active:scale-90 cursor-pointer"> Play </button>

        </div>
      </div>
    </div>
  );
};

export default AnimeCard;
