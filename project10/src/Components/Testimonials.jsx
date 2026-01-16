import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { testimonials } from "../data/siteData";
import { FaQuoteRight } from "react-icons/fa";

const Testimonials = () => {
  const { testimonialIndex, setTestimonialIndex } = useContext(AppContext);
  const t = testimonials[testimonialIndex];

  const next = () => setTestimonialIndex((p) => (p + 1) % testimonials.length);
  const prev = () =>
    setTestimonialIndex((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="w-full py-16">
      <div className="containerx grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="rounded-2xl overflow-hidden shadowPro bg-white">
          <img
            className="w-full h-72 sm:h-96 object-cover"
            src="https://images.unsplash.com/photo-1590490360184-1872b1147f61?auto=format&fit=crop&w=1200&q=60"
            alt="testimonial"
          />
        </div>

        <div className="bg-[#0b2f44] text-white rounded-2xl p-8 shadowPro relative">
          <div className="flex items-center justify-between">
            <p className="text-yellow-300 font-bold tracking-wide">★★★★★</p>

            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                ◀
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                ▶
              </button>
            </div>
          </div>

          <p className="mt-5 text-white/80 text-sm leading-relaxed">"{t.msg}"</p>

          <div className="mt-6">
            <h4 className="font-bold">{t.name}</h4>
            <p className="text-white/70 text-xs">{t.role}</p>
          </div>

          <FaQuoteRight
            className="absolute bottom-6 right-6 text-white/20"
            size={30}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
