import React, { useContext } from "react";
import { features } from "../data/siteData";
import { AppContext } from "../context/AppContext";

const FeaturesRow = () => {
  const { activeFeature, setActiveFeature } = useContext(AppContext);

  return (
    <section className="w-full -mt-10 relative z-20">
      <div className="containerx">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => {
            const active = activeFeature === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setActiveFeature(f.id)}
                className={`rounded-2xl px-6 py-7 text-left transition-all duration-300
                ${
                  active
                    ? "bg-[#0b2f44] text-white shadowPro"
                    : "bg-[#6f7f91] text-white/90 shadow-md hover:bg-[#607188]"
                }`}
              >
                <h3 className="font-bold text-base">{f.title}</h3>
                <p className="mt-2 text-xs text-white/80">{f.desc}</p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesRow;
