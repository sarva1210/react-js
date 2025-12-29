import React from "react";
import Card from "./Components/Card";

const App = () => {
  const cardData = {
    username: "Anubhav",
    role: "Engineer",
    email: "anu@gmail.com",
  };

  return (
    <>
      <Card
        username={cardData.username}
        role={cardData.role}
        email={cardData.email}
      />
    </>
  );
};

export default App;

