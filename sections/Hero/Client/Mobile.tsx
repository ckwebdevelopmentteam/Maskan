"use client";
export default function HeroMobileClient() {
  return (
    <div className="absolute inset-0 grid place-items-center">
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
