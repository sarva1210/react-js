import React from "react";
import Card from "./components/Card";

const App = () => {
  const teamData = [
  {
    id: 1,
    name: "Aarav Mehta",
    role: "Software Engineer",
    email: "aarav@gmail.com",
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    desc:
      "Specializing in full-stack development and cloud architecture with a passion for building scalable open-source tools.",
  },
  {
    id: 2,
    name: "Aditya Rao",
    role: "Marketing Director",
    email: "aditya@gmail.com",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    desc:
      "Creative strategist with 10+ years of experience in brand storytelling and global campaigns.",
  },
  {
    id: 3,
    name: "Dr. Neha Patel",
    role: "Telemedicine Physician",
    email: "neha@gmail.com",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    desc:
      "Dedicated to expanding healthcare access through digital platforms and remote patient care.",
  },
];


  return (
    <div className="container">
      {teamData.map((person) => (
        <Card key={person.id} cardData={person} />
      ))}
    </div>
  );
};

export default App;
