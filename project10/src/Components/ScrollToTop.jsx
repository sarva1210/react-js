import React, { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!show) return null;

  return (
    <button
      onClick={goTop}
      className="fixed bottom-5 right-5 w-12 h-12 rounded-full bg-[#0b2f44] text-white shadowPro hover:bg-[#092636] transition active:scale-95 z-50"
    >
      ↑
    </button>
  );
};

export default ScrollToTop;
