import React from "react";

const Card = ({ cardData }) => {
  return (
    <div className="card">
      <div className="upper">
        <img src={cardData.image} alt={cardData.name} />
      </div>

      <div className="lower">
        <h2>{cardData.name}</h2>
        <h4>{cardData.role}</h4>
        <p>{cardData.desc}</p>
      </div>
    </div>
  );
};

export default Card;

