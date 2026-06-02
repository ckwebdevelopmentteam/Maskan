"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MaskanLogo from "@/public/Maskan Open File/PNG/Maskan-01.png";

export default function NavBar() {
  const [state, setState] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() as number;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setState(latest > 50);
  });

  return (
    <motion.div
      className="fixed top-6 left-1/2 z-[150] flex w-[95%] max-w-[1400px] -translate-x-1/2 items-center justify-between px-6 md:px-12 bg-[#1F4F71] text-white shadow-xl"
      initial={{ height: "80px", y: "0%" }}
      animate={{ 
        height: state ? "70px" : "80px",
        y: hidden ? "-200%" : "0%"
      }}
      transition={{ 
        duration: 0.5, 
        ease: [0.22, 1, 0.36, 1] 
      }}
    >
      {/* Left Links */}
      <div className="flex items-center gap-6 md:gap-8 hidden md:flex">
        <Link href="/" className="text-[11px] font-semibold tracking-[0.15em] flex items-center gap-1.5 hover:text-white/70 transition-colors">
          HOME
        </Link>
        <Link href="/about" className="text-[11px] font-semibold tracking-[0.15em] flex items-center gap-1.5 hover:text-white/70 transition-colors">
          ABOUT US
        </Link>
        <Link href="/services" className="text-[11px] font-semibold tracking-[0.15em] flex items-center gap-1.5 hover:text-white/70 transition-colors">
          SERVICES
        </Link>
      </div>

      {/* Center Logo */}
      <div className="absolute left-1/2 -translate-x-1/2">
        <Link href="/" className="flex items-center justify-center p-2 hover:opacity-80 transition-opacity">
          <Image
            src={MaskanLogo}
            alt="Maskan Builders"
            className="h-20 md:h-24 w-auto object-contain brightness-0 invert scale-125 md:scale-150"
          />
        </Link>
      </div>

      {/* Right Links & Search */}
      <div className="flex items-center gap-6 md:gap-8 hidden md:flex">
        <Link href="/projects" className="text-[11px] font-semibold tracking-[0.15em] hover:text-white/70 transition-colors">
          PROJECTS
        </Link>
        <Link href="/careers" className="text-[11px] font-semibold tracking-[0.15em] hover:text-white/70 transition-colors">
          CAREERS
        </Link>
        <Link href="/#contact" className="text-[11px] font-semibold tracking-[0.15em] hover:text-white/70 transition-colors">
          CONTACT US
        </Link>
        <button aria-label="Search" className="flex items-center justify-center border border-white/50 p-2 hover:bg-white/10 transition-colors">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </button>
      </div>
      
      {/* Mobile Right Actions */}
      <div className="flex items-center gap-4 md:hidden ml-auto">
        <button aria-label="Search" className="flex items-center justify-center border border-white/50 p-2 hover:bg-white/10 transition-colors">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </button>
      </div>
    </motion.div>
  );
}
