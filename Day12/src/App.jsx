import React from "react"
import Navbar from "./Components/Navbar"
import About from "./Pages/About"
import Home from "./Pages/Home"
import Courses from "./Pages/Courses"
import Kodr from "./Pages/Kodr"
import Kodex from "./Pages/Kodex"

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />}>
          <Route path="/courses/kodr" element={<Kodr />} />
          <Route path="/courses/kodex" element={<Kodex />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
