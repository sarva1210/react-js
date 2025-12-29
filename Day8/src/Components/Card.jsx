import React from "react";

const Card = (props) => {
    console.log(props)
  return (
    <div className="card">
      <div className="upper">
        <img src="" alt="" />
      </div>

      <div className="lower">
        <h1>John Doe</h1>
        <h4>john@gmail.com</h4>
        <h3>Developer</h3>
      </div>
    </div>
  );
};

export default Card;
