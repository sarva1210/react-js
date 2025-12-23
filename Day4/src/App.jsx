import React from 'react'
import Card from './Components/Card'

const App = () => {

  
  const designers = [
  {
    id: 1,
    available: true,
    charge: "$55/hr",
    profilePic: "https://i.pinimg.com/736x/d1/81/e4/d181e44cf0a7d5f9190bc96939da4164.jpg",
    name: "Sourav Giri",
    profession: "UI/UX Designer",
    category: "Freelancer",
    tags: ["UI", "UX",  "Photoshop", "+4"],
    info: "Sourav Giri is a 32-year-old UI/UX designer with an impressive portfolio behind him, specializing in modern, user-focused interfaces.",
    isAvailable:true,
  },
  {
    id: 2,
    available: false,
    charge: "$55/hr",
    profilePic: "https://i.pinimg.com/736x/22/5f/4c/225f4c968155fcd81cc89182f673583b.jpg",
    name: "Ananya Sharma",
    profession: "UI/UX Designer",
    category: "Epic Coders",
    tags: ["UI", "UX", "Wireframing", "+3"],
    info: "Ananya is a detail-oriented UI/UX designer known for creating intuitive digital experiences for startups and SaaS products.",
    isAvailable:false,
  },
  {
    id: 3,
    available: true,
    charge: "$55/hr",
    profilePic: "https://i.pinimg.com/736x/34/da/e2/34dae2b1c9a2c38bfdc18bbb5a414149.jpg",
    name: "Rohit Verma",
    profession: "UI/UX Designer",
    category: "Freelancer",
    tags: ["UX", "Adobe XD", "Figma", "+2"],
    info: "Rohit focuses on clean layouts and usability-driven design, helping brands improve engagement and conversion.",
    isAvailable:false,
  },
  {
    id: 4,
    available: true,
    charge: "$55/hr",
    profilePic: "https://i.pinimg.com/736x/e7/14/d3/e714d385eac4878dd1b5af4716335009.jpg",
    name: "Neha Kapoor",
    profession: "UI/UX Designer",
    category: "Design Studio",
    tags: [ "Design","architect", "Figma", "+5"],
    info: "Neha has worked with multiple global clients, crafting scalable design systems and elegant user interfaces.",
    isAvailable:true,
  },
  {
    id: 5,
    available: false,
    charge: "$55/hr",
    profilePic: "https://i.pinimg.com/1200x/55/18/87/551887f865fe94c481ea9c43daf5e47e.jpg",
    name: "Arjun Mehta",
    profession: "UI/UX Designer",
    category: "Epic Coders",
    tags: [ "Research", "Prototyping","UI","+3"],
    info: "Arjun blends user research with visual design to deliver impactful, data-backed UI/UX solutions.",
    isAvailable:false,
  },
  {
    id: 6,
    available: true,
    charge: "$55/hr",
    profilePic: "https://i.pinimg.com/736x/42/27/2b/42272bb7560299c11b8e677b9a6e4dcb.jpg",
    name: "Pooja Nair",
    profession: "UI/UX Designer",
    category: "Freelancer",
    tags: ["UI", "UX", "Figma", "+4"],
    info: "Pooja specializes in mobile-first UI/UX design, ensuring seamless experiences across devices.",
    isAvailable:false,
  },
  {
    id: 7,
    available: true,
    charge: "$55/hr",
    profilePic: "https://i.pinimg.com/736x/09/38/94/093894f84f4d7b6884a210d7bfbabd19.jpg",
    name: "Kunal Singh",
    profession: "UI/UX Designer",
    category: "Startup Team",
    tags: ["UI", "Interaction", "Framer", "+3"],
    info: "Kunal creates interactive, motion-driven interfaces that enhance usability and user delight.",
    isAvailable:false,
  },
  {
    id: 8,
    available: false,
    charge: "$55/hr",
    profilePic: "https://i.pinimg.com/736x/d7/f7/0f/d7f70feb7b5635840cc317aa24a8043d.jpg",
    name: "Simran Kaur",
    profession: "UI/UX Designer",
    category: "Freelancer",
    tags: ["UI", "UX", "Accessibility","+4"],
    info: "Simran focuses on inclusive and accessible design, ensuring products are usable for everyone.",
    isAvailable:true
  },
  {
    id: 9,
    available: true,
    charge: "$55/hr",
    profilePic: "https://i.pinimg.com/736x/ba/0e/a7/ba0ea74b07017a2661f8ae2d9e717ac8.jpg",
    name: "Aman Patel",
    profession: "UI/UX Designer",
    category: "Design Agency",
    tags: ["UI", "UX", "Branding", "+3"],
    info: "Aman combines branding and UI/UX to create visually strong and consistent digital products.",
    isAvailable:false,
  },
  {
    id: 10,
    available: true,
    charge: "$55/hr",
    profilePic: "https://i.pinimg.com/736x/1a/5d/1d/1a5d1d1806c5348916741aeba044cab9.jpg",
    name: "Riya Malhotra",
    profession: "UI/UX Designer",
    category: "Epic Coders",
    tags: ["UI", "UX", "Figma", "+5"],
    info: "Riya is known for crafting polished UI details and microinteractions that elevate user experience.",
    isAvailable:false
  }
];

  
  return (
    <div className='main'>
        {designers.map((item)=><Card key={item.id}  item={item}/>)}
    </div>
  )
}

export default App
