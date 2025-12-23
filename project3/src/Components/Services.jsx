import React from 'react'

function Services() {
  return (
    <div className='services-section'>
        <div className="card-1 card">
            <h3>Services</h3>
            <h1>Explore our full range of coaching training, and tennis experiences. From first serve to match point we have got the right perform for you</h1>
            <h2>Explore More <i class="ri-arrow-right-up-long-line"></i></h2>
        </div>
        <div className="card-2 card">
            <img src="./tennis1.jpg" alt="tennis" />
            <div className="designed">
                <h3>Training Programs</h3>
                <h2>Program designed for <br/> all ages and abilities <i class="ri-arrow-right-up-long-line"></i></h2>
            </div>
        </div>
        <div className="card-3 card">
            <div className="top">
                <img src="./tennis2.jpg" alt="" />

            </div>
            <div className="bottom">
                <h3>Step into a space built for <br/>
                players to grow compete and thrive
                </h3>
                {/* <h2>
                <i class="ri-arrow-left-long-line"></i>
                <i class="ri-arrow-right-long-fill"></i>
                </h2> */}
            </div>
        </div>
    </div>
  )
}

export default Services