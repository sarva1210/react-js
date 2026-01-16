import React from "react";

const About = () => {
  return (
    <section className="w-full py-16">
      <div className="containerx grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Left Image */}
        <div className="rounded-2xl overflow-hidden shadowPro bg-slate-200 h-[280px]">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1580894741305-1e4e18f4cd1f?auto=format&fit=crop&w=1200&q=60"
            alt="about"
          />
        </div>

        {/* Center Card */}
        <div className="bg-[#607188] text-white rounded-2xl p-8 shadowPro">
          <h2 className="text-2xl font-extrabold">About Us</h2>
          <p className="mt-4 text-sm text-white/80 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            suscipit. Accusamus, voluptatem.
          </p>
          <button className="mt-6 btnPrimary">Learn More</button>
        </div>

        {/* Right Card */}
        <div className="bg-white rounded-2xl p-6 shadowPro border border-slate-200">
          <h3 className="text-lg font-bold text-[#0b2f44]">Why Choose Us</h3>

          <div className="mt-4 space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <span className="text-[#0b2f44] font-bold">✔</span>
              <div>
                <p className="font-semibold text-slate-800">
                  23 Years Experience
                </p>
                <p className="text-slate-500 text-xs mt-1">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-[#0b2f44] font-bold">✔</span>
              <div>
                <p className="font-semibold text-slate-800">24/7 Support</p>
                <p className="text-slate-500 text-xs mt-1">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-[#0b2f44] font-bold">✔</span>
              <div>
                <p className="font-semibold text-slate-800">Industry Certified</p>
                <p className="text-slate-500 text-xs mt-1">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
