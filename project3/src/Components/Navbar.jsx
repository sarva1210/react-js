import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
      <div className="left-nav">
        <h3>Horizon Courts</h3>
      </div>
      <div className="center-nav">
        <h4>About us</h4>
        <h4>Services</h4>
        <h4>Coaches</h4>
        <h4>Events</h4>
        <h4>Contacts</h4>
      </div>
      <div className="right-nav">
        <h3>Book Now <span><i class="ri-arrow-right-up-long-line"></i></span></h3>
      </div>
    </div>
  )
}

export default Navbar