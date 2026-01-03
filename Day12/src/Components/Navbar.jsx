import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">CREATIVE</h2>

      <ul className="nav-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About us</NavLink></li>
        <li><NavLink to="/gallery">Gallery</NavLink></li>
        <li><NavLink to="/contact">Contact us</NavLink></li>
        <li><NavLink to="/search">Search</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar
