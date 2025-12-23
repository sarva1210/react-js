import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Center from './Components/Center'
import About from './Components/About'
import Services from './Components/Services'

const levels = [
  { name: "Beginner", count: 10, rating: 55 },
  { name: "Intermediate", count: 8, rating: 40 },
  { name: "Advanced", count: 7, rating: 35 },
];

const statsData = [
  { value: "12 000+", label: "Hours of play annually" },
  { value: "89%", label: "Player Retention Rate" },
  { value: "1,200+", label: "Active Members" },
  { value: "125+", label: "Annual Tournaments" }
];
function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="main">
      <Navbar/>
      <Center/>
      <About data= {levels} statss={statsData}/>
      <Services/>
    </div>
  )
}

export default App
