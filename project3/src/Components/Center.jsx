import React from 'react'

function Center() {
    return (
        <div className='center-section'>
            <div className="headings">
                <h1>Unleash Your Inner Champion Today.<br class="desktop-br" />All In One Place</h1>
                <h2>Join the ultimate tennis experience - where passion meets performance <br class="desktop-br-h2" /> and every swings brings you closer to victory</h2>
                <h2 className='start'>Start your own journey</h2>
            </div>

            <div className="bottom-section">
                <div className="left">
                    <p>Train with real professionals<br/>  Get the real results</p>
                    <div className="image-section">
                        <img src="./imageOne.jpg" alt="" />
                        <img src="./imageThree.jpg" alt="" />
                        <img src="./imageTwo.jpg" alt="" />
                    </div>
                </div>
                <div className="right">
                    <div className="socials-section">
                        <h1>Instagram <i class="ri-arrow-right-up-long-line"></i></h1>
                        <h1>Facebook <i class="ri-arrow-right-up-long-line"></i></h1>
                        <h1>Twitter <i class="ri-arrow-right-up-long-line"></i></h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Center