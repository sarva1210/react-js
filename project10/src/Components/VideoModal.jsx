import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const VideoModal = () => {
  const { isVideoOpen, setIsVideoOpen } = useContext(AppContext);

  if (!isVideoOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-[999] p-4"
      onClick={() => setIsVideoOpen(false)}
    >
      <div
        className="w-full max-w-3xl bg-white rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 flex items-center justify-between border-b">
          <h3 className="font-bold text-[#0b2f44]">Intro Video</h3>
          <button
            onClick={() => setIsVideoOpen(false)}
            className="px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-200"
          >
            ✖
          </button>
        </div>

        <div className="aspect-video bg-black">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/7Pq-S557XQU"
            title="Video"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
