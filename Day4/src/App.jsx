import React from 'react'
import Card from './Components/Card'

const App = () => {

  
  const designers = [
  {
    id: 1,
    available: true,
    charge: "$55/hr",
    profilePic: "https://i.pinimg.com/736x/a7/b4/1a/a7b41a1b5c567869056d7cc0f9ebcf9a.jpg",
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
    profilePic: "https://i.pinimg.com/1200x/ec/be/78/ecbe78b49d10a92e67105394ed0f1457.jpg",
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
    profilePic: "https://i.pinimg.com/736x/5e/d7/96/5ed796d40abb7dc3643078537d17b420.jpg",
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
    profilePic: "https://i.pinimg.com/736x/b5/6a/e7/b56ae712f9cc79e1dae55d541a1392ca.jpg",
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
    profilePic: "https://i.pinimg.com/736x/bb/14/53/bb1453d9abeaeb01792ef149e0bbad57.jpg",
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
    profilePic: "https://i.pinimg.com/736x/07/31/4c/07314c114d41c16f80fd8cf0fb39ce93.jpg",
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
    profilePic: "https://i.pinimg.com/1200x/45/9c/49/459c492be46739b3d82e54d727f8fe85.jpg",
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
    profilePic: "https://i.pinimg.com/736x/4b/8e/ec/4b8eecd1db6f61621b7c7569d5dea15b.jpg",
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
    profilePic: "https://i.pinimg.com/1200x/da/a7/83/daa783527e760d8c10241d7798efc46b.jpg",
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
    profilePic: "https://i.pinimg.com/736x/48/b1/3b/48b13b4ff7772be3fdc9c49a63a20da6.jpg",
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
