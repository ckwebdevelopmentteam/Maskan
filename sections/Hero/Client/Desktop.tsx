"use client";

import { useRef } from "react";

export default function HeroDesktopClient() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleCanPlay = () => {
    if (videoRef.current) {
      videoRef.current.style.opacity = "1";
    }
  };

  return (
    <div className="absolute inset-0 overflow-clip">
      <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />
      <div className="h-full">
        <video
          ref={videoRef}
          className="size-full object-cover"
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
    </div>
  );
}
