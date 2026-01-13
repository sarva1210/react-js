import React from "react";

export default function GalleryPage(){
    const gallery =[
        "https://i.pinimg.com/736x/e8/12/c5/e812c5346c69f143d25ef93ee4411d6b.jpg",
        "https://i.pinimg.com/736x/93/db/6f/93db6f1688248ebd6172dad0d0a545ed.jpg",
        "https://i.pinimg.com/1200x/da/fd/12/dafd12ef3c9c90114f923d0d72b4b6b7.jpg",
        "https://i.pinimg.com/736x/04/79/d8/0479d8228a4cf48fe262221fee3d1302.jpg",
        "https://i.pinimg.com/736x/c6/b9/79/c6b9791e8ef37d17eaef62a4faf00e20.jpg",
        "https://i.pinimg.com/736x/16/b1/7d/16b17df52b2bf92dc45985a97e2df264.jpg",
        "https://i.pinimg.com/1200x/89/04/06/89040662341753f4b4800d58232014cb.jpg",
        "https://i.pinimg.com/736x/d0/24/00/d024000451ec31fae7ca56657b10d36f.jpg",
        "https://i.pinimg.com/736x/12/d5/57/12d5577e25f192843a328a50bbea3644.jpg",
        "https://i.pinimg.com/736x/d3/6a/16/d36a166ef4900359a647d4ef3214d229.jpg",
        "https://i.pinimg.com/474x/33/03/19/3303198203a1632149b49075c7ca07ba.jpg",
        "https://i.pinimg.com/736x/7d/ba/42/7dba42be7e869e431141eb500078e179.jpg",
        "https://i.pinimg.com/736x/c8/95/15/c895153018728d4c3ebfc88a085772e5.jpg",
        "https://i.pinimg.com/736x/cf/04/38/cf0438690f8c6dd4f5a4997ec1ace741.jpg",
        "https://i.pinimg.com/736x/c7/bb/60/c7bb6077114f9579bf9d0c99128dbfa4.jpg"
    ]

    return(
        <section className="max-w-[1280px] mx-auto px-6 md:px-16 py-20" >
            <h1 className="text-4xl font-medium mb-2">Magic Gallery ✨</h1>
            <p className="text-gray-600 mb-10">A creative gallery of Pinterest inspirations.</p>
            
            <div className="pin">
                {gallery.map((img, i) => (
                    <div key={i} className="pin-item bg-white rounded-2xl overflow-hidden shadow-sm hover:scale-[1.02] transition">
                        <img src={img} alt={`gallery-${i}`} className="w-full h-auto object-cover" loading="lazy"/>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition"></div>
                    </div>
                ))}
            </div>
        </section>
    )
}