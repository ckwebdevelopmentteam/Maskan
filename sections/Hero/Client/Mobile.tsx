"use client";
export default function HeroMobileClient() {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none md:hidden" />
      <video
        className="size-full object-cover md:hidden"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/WBpOY8hrNdXiZ4GGR4RQTxf4R4.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
