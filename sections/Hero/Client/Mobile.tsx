"use client";

import { useRef } from "react";

export default function HeroMobileClient() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleCanPlay = () => {
    if (videoRef.current) {
      videoRef.current.style.opacity = "1";
    }
  };

  return (
    <div className="absolute inset-0 grid place-items-center">
      <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none md:hidden" />
      <video
        ref={videoRef}
        className="size-full object-cover md:hidden"
        style={{ opacity: 0, transition: "opacity 0.6s ease" }}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onCanPlay={handleCanPlay}
      >
        <source src="/WBpOY8hrNdXiZ4GGR4RQTxf4R4.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
