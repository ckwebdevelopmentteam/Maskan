"use client";

import { useRef } from "react";
import Image from "next/image";
import thumbnail from "@/public/hero-video-thumbnail.webp";

export default function HeroDesktopClient() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  const handleCanPlay = () => {
    if (videoRef.current) {
      videoRef.current.style.opacity = "1";
    }
    if (thumbRef.current) {
      thumbRef.current.style.opacity = "0";
    }
  };

  return (
    <div className="absolute inset-0 overflow-clip">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />

      {/* Thumbnail — shows instantly, fades out when video is ready */}
      <div
        ref={thumbRef}
        className="absolute inset-0 z-[1]"
        style={{ transition: "opacity 0.6s ease" }}
      >
        <Image
          src={thumbnail}
          alt="Hero thumbnail"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Video — hidden until canplay, then fades in over thumbnail */}
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
