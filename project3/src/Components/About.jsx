import React from 'react'

function About({data, statss}) {
  console.log(data)
  return (
    <div className='about-section'>
      <div className="top-part">
        <div className="left">
          <h1>About Horizon</h1>
        </div>
        <div className="right">
          <div className="heading">
            <p>"At Horizon, we don't just play tennis — we live it. Since 2021,<br class="desktop-br" />our club has been a home for players of all levels, from eager<br class="desktop-br" />beginners to seasoned pros."</p>
          </div>
        </div>
      </div>

      <div className="card-container">
        <div className="card-one card">
          <img src="./card-logo.png" alt="" />
          <h1>Professional hard courts <span>with tournament grade ligntening and
            climate control play in</span> perfect conditions, in any season
          </h1>
          <div className="button-container">
            <div className="left">
              <div className="toggle">
                <div className="toggle-inner"></div>
              </div>
            </div>
            <div className="right">
              <h1>Game Mode</h1>
            </div>
          </div>
        </div>
        <div className="card-two card">
          <img src="./card-image.png" alt="image" />
          <h1>Private & Group Lessons</h1>
        </div>

        {/* Card Three */}
        <div className="card-three card">
          <div className="top">
            <h1>100+</h1>
            <p>Pro Coaches</p>
            <p className='certi'>Certified Professionals ready to boost your game from first serve to tournament</p>
          </div>
          <div className="bottom">
            {
              data.map((data, index)=>(
                <div key={index} className="stats">
                  <h3>{data.name}</h3>
                  <div className="circles">
                    {
                      [...Array(data.count)].map((_, i)=>(
                        <div key={i} className="circle"></div>
                      ))
                    }
                  </div>
                  <h3>{data.rating}</h3>
                </div>
                 ))
            }
          </div>
        </div>
        {/* CardThree */}
      </div>
      
      <div className="more-about-us">
        <div className="heading">
          <h1>A few mote about us in numbers</h1>
          <div className="more-stats">
            {
              statss.map((stats)=>(
                <div className="stats">
                  <h1>{stats.value}</h1>
                  <h3>{stats.label}</h3>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default About