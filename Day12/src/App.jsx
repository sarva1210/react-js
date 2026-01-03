import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Gallery from './Pages/Gallery'
import Contact from './Pages/Contact'
import Search from './Pages/Search'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  )
}

export default App


