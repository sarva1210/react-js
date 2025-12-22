import React from 'react'
const bentoData = [

    {
        id: 1,
        type: "image",
        src: "./advantages-image-2.jpg",
        side: "top"
    },
    {
        id: 2,
        type: "text",
        title: "HIGH QUALITY",
        side: "top",
        desc: "Embrace superior craftsmanship with our meticulously curated, enduringly high-quality garments. Discover garments crafted with utmost attention to detail and finest materials, promising longevity and timeless style."
    },
    {
        id: 3,
        type: "text",
        title: "ECO-FRIENDLY",
        side: "top",
        desc: "Join our commitment to sustainability with eco-friendly fashion options, stylish yet mindful of our planet. Explore guilt-free shopping with our eco-conscious collections, crafted with planet-friendly materials and ethical practices."
    },


    {
        id: 4,
        type: "text",
        title: "INDEPENDENT DESIGNERS",
        side: "bottom",
        desc: "Our platform celebrates the ingenuity of independent designers, offering a diverse range of fashion-forward garments that reflect the creativity and innovation of the artists behind them. Explore curated collections showcasing unique creations by independent designers."
    },
    {
        id: 5,
        type: "text",
        title: "EXCLUSIVE & UNIQUITY",
        side: "bottom",
        desc: "Indulge in curated collections showcasing exclusive, one-of-a-kind pieces, each with its own story and charm. Experience the allure of unique fashion pieces that radiate sophistication and individuality, curated for those who seek exclusivity."
    },
    {
        id: 6,
        type: "image",
        src: "advantages-image-1.jpg",
        side: "bottom"
    }
];

function Advantages() {
    return (
        <div className='section-view4'>
           
            <div className="top">
                <div className="image-section">
                    {
                        bentoData.filter(item => item.side === "top" && item.type === 'image')
                        .map(item =>  <img src={item.src} alt="top-image" />)
                    }
                </div>
                <div className="text-area">
                        {
                            bentoData.filter(item => item.side === 'top' && item.type === 'text')
                            .map((item) => (
                                <div className="top-text" key={item.id}>
                                    <h4>{item.title}</h4>
                                    <div className="desc-area">
                                        <p>{item.desc}</p>
                                        <h4> <i class="ri-arrow-right-up-long-fill"></i> Explore</h4>
                                    </div>
                                </div>
                            ))
                        }
                </div>

            </div>
            <div className="bottom">
                <div className="image-section">
                    {
                        bentoData.filter(item => item.type === 'image' && item.side === 'bottom')
                        .map(item => <img src={item.src} alt="top-image" /> )
                    }
                </div>
                <div className="text-area">
                        {
                            bentoData.filter(item => item.side === 'bottom' && item.type === 'text')
                            .map((item) => (
                                <div className="top-text" key={item.id}>
                                    <h4>{item.title}</h4>
                                    <div className="desc-area">
                                        <p>{item.desc}</p>
                                        <h4> <i class="ri-arrow-right-up-long-fill"></i>Explore</h4>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
            </div>
            
        </div>
    )
}

export default Advantages