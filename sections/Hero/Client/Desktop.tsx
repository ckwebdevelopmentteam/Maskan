"use client";

export default function HeroDesktopClient() {
  return (
    <div className="absolute inset-0 overflow-clip">
      <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />
      <div className="h-full">
        <video className="size-full object-cover" autoPlay muted loop playsInline preload="metadata">
          <source src="/WBpOY8hrNdXiZ4GGR4RQTxf4R4.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
