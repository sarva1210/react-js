import React from "react";
import heroImg from "../Images/Creative writing-amico.png";

export default function Hero (){
    return(
        <section className="flex flex-col-reverse md:flex-row items-center px-6 md:px-20 gap-12">

            <div className="text-center md:text-left max-w-xl">
                <p className="text-gray-700"> Igniting the Spark of Inspiration</p>

                <h1 className="text-4xl md:text-6xl font-bold leading-tight"> Unleash Your Brand <br/> with Our{" "}
                    <span className="bg-accent px-3 rounded-md">Mágico</span>{" "}Design
                </h1>

                <button className="mt-8 bg-primary text-gray-900 px-8 py-3 rounded-full hover:scale-105 transition">Create Magic ✨</button>
            </div>
            <img className="w-[280px] md:w-[420px]" src={heroImg} alt="Creative Illustration" />
        </section>
    )
}