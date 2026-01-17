import React from "react";
import { FaGoogle, FaSlack, FaApple, FaAmazon } from "react-icons/fa";

const Partners = () => {
  return (
    <section className="w-full py-10">
      <div className="containerx flex flex-wrap items-center justify-center gap-12 text-slate-400">
        <FaGoogle size={28} />
        <FaSlack size={28} />
        <FaApple size={28} />
        <FaAmazon size={28} />
      </div>
    </section>
  )
}

export default Partners;
