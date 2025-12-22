import React from 'react'

const features = [
    {
        title: "INDEPENDENCY",
        description: "Explore the creativity of independent designers from around the globe.",
        linkText: "LEARN MORE"
    },
    {
        title: "UNIQUITY",
        description: "Discover the charm of unique pieces that stand out effortlessly.",
        linkText: "LEARN MORE"
    },
    {
        title: "QUALITY",
        description: "Experience unparalleled craftsmanship and attention to detail.",
        linkText: "LEARN MORE"
    },
    {
        title: "SUSTAINABILITY",
        description: "Embrace eco-conscious fashion choices without compromising on style.",
        linkText: "LEARN MORE"
    }
];
const stats = [
    {
        label: "DESIGNERS",
        count: "150+"
    },
    {
        label: "CLIENTS",
        count: "500+"
    },
    {
        label: "MASTERPIECES",
        count: "20K+"
    },
    {
        label: "EVENTS",
        count: "50+"
    }
];
function Features() {
    return (
        <div className='section-view2'>
            <div className="cards-container">
                {
                    features.map((data) => (
                        <div className="cards">
                            <h3>{data.title}</h3>
                            <p>{data.description}</p>
                            <h4> <i class="ri-arrow-right-up-long-fill"></i>
                                {data.linkText}</h4>
                        </div>
                    ))
                }
            </div>
            
            <div className="stats-container">
            {
                stats.map((data) => (
                    <div className="stats">
                        <h4>{data.label}</h4>
                        <h1>{data.count}</h1>
                    </div>
                ))
            }
            </div>
            
        </div>
    )
}

export default Features