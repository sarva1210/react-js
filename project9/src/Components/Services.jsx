import React from "react";

export default function Services (){
    return(
        <section className="px-6 md:px-20 py-20">
            <h2 className="text-3xl font-bold mb-10">Our Services</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                <div className="p-8 bg-white rounded-3xl shadow hover:-translate-y-2 transition">
                    <h3 className="text-xl font-semibold mb-3">Motion Graphics</h3>
                    <p className="text-gray-600">Bring ideas to life through dynamic visuals.</p>
                </div>
                
                <div className="p-8 rounded-3xl bg-gradient-to-br from-primary to-pink-400 text-gray-500 hover:-translate-y-2 transition shadow-lg scale-105">
                    <h3 className="text-xl font-semibold mb-3">2D / 3D Animation</h3>
                    <p className="text-gray-600">Turn imagination into stunning animations.</p>
                </div>

                <div className="p-8 bg-white rounded-3xl shadow hover:-translate-y-2 transition">
                    <h3 className="text-xl font-semibold mb-3">Virtual Identity</h3>
                    <p className="text-gray-600">Shape a unique brand personality.</p>
                </div>

            </div>

        </section>
    )
}