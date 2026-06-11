"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import MaskanLogo from "@/public/Maskan Open File/PNG/Maskan-01.png";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "SERVICES", href: "/services" },
  { name: "PROJECTS", href: "/projects" },
  { name: "CAREERS", href: "/careers" }
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Hide if scrolling down and past 100px. Show if scrolling up.
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* 
        Fixed Top Left Logo 
        Using mix-blend-difference so the white logo turns black on white backgrounds 
        without needing any background boxes.
      */}
      <div className={`fixed -top-2 left-0 md:hidden z-[160] mix-blend-difference transition-transform duration-500 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-[150%]"}`}>
        <Link
          href="/"
          className="flex items-center hover:opacity-80 transition-opacity"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src={MaskanLogo}
            alt="Maskan Builders"
            // Keeping it white, mix-blend-difference will invert it on light backgrounds
            className="h-24 md:h-36 w-auto object-contain brightness-0 invert"
          />
        </Link>
      </div>

      {/* Fixed Top Right Menu Button (Mobile Only) */}
      <div className={`fixed top-6 right-5 md:hidden z-[160] mix-blend-difference transition-transform duration-500 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-[200%]"}`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-3 md:gap-4 text-white hover:opacity-80 transition-all"
        >
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] pt-0.5">
            {isOpen ? "CLOSE" : "MENU"}
          </span>
          <div className="w-5 h-5 relative flex flex-col justify-center gap-[5px]">
            <motion.span
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 7 : 0 }}
              className="w-full h-[2px] bg-white block rounded-full"
            />
            <motion.span
              animate={{ opacity: isOpen ? 0 : 1 }}
              className="w-full h-[2px] bg-white block rounded-full"
            />
            <motion.span
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -7 : 0 }}
              className="w-full h-[2px] bg-white block rounded-full"
            />
          </div>
        </button>
      </div>

      {/* Desktop Solidroad-style Navbar */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .solidroad-tab {
          border-bottom-left-radius: 1.5rem;
          border-bottom-right-radius: 1.5rem;
        }
      `}} />

      <div className={`fixed top-0 left-0 w-full z-[160] hidden md:flex justify-center pointer-events-none px-6 transition-transform duration-500 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-[150%]"}`}>
        <div className="solidroad-tab relative bg-white pointer-events-auto flex items-center justify-center gap-12 px-10 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.05)] w-fit">

          {/* Left Links */}
          <div className="flex items-center gap-8 relative z-10">
            <Link href="/services" className="text-sm font-semibold text-gray-700 hover:text-black transition-colors">Services</Link>
            <Link href="/projects" className="text-sm font-semibold text-gray-700 hover:text-black transition-colors">Projects</Link>
            <Link href="/about" className="text-sm font-semibold text-gray-700 hover:text-black transition-colors">About</Link>
          </div>

          {/* Center Logo */}
          <div className="flex-shrink-0 flex items-center justify-center w-32 relative h-8">
            <Link href="/" className="hover:opacity-80 transition-opacity absolute inset-0 flex items-center justify-center z-0">
              <Image src={MaskanLogo} alt="Maskan Logo" className="h-20 w-auto object-contain brightness-0 scale-[2.5] origin-center pointer-events-none" />
            </Link>
          </div>

          {/* Right Links & CTA */}
          <div className="flex items-center gap-8 relative z-10">
            <Link href="/careers" className="text-sm font-semibold text-gray-700 hover:text-black transition-colors">Careers</Link>
            <Link href="#contact" className="bg-[#244b6b] text-white px-6 py-2.5 rounded-full text-[15px] font-bold hover:bg-[#1a3852] transition-colors flex items-center gap-1.5 shadow-sm">
              Contact Us &rarr;
            </Link>
          </div>

        </div>
      </div>

      {/* Full Screen Mega Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            // We use a dark background for the menu so it's always readable when open
            className="fixed inset-0 z-[150] bg-[#111111] text-white flex flex-col justify-center overflow-hidden"
          >
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl w-full mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10 h-full overflow-y-auto pt-24 pb-12">

              {/* Navigation Links */}
              <div className="md:col-span-7 flex flex-col gap-4 md:gap-6">
                {navLinks.map((link, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + (idx * 0.1) }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-baseline gap-4 hover:opacity-100 transition-opacity w-fit"
                      >
                        <span className="text-sm md:text-lg font-light tracking-[0.2em] text-white/40 group-hover:text-white transition-colors">
                          0{idx + 1}
                        </span>
                        <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white/70 group-hover:text-white transition-colors uppercase leading-none">
                          {link.name}
                        </span>
                      </Link>
                    </motion.div>
                ))}
              </div>

              {/* Info / Contact Section */}
              <div className="md:col-span-5 hidden md:flex flex-col gap-12 mt-12 md:mt-0 border-l border-white/10 pl-12 h-full justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <h4 className="text-xs font-semibold tracking-[0.2em] text-white/50 mb-6">SAY HELLO</h4>
                  <a href="mailto:hello@maskan.com" className="text-xl lg:text-3xl font-light hover:text-white transition-colors block mb-2">
                    hello@maskan.com
                  </a>
                  <p className="text-white/50 text-sm tracking-wider">+91 98765 43210</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <h4 className="text-xs font-semibold tracking-[0.2em] text-white/50 mb-6">HEADQUARTERS</h4>
                  <p className="text-white/70 text-base font-light leading-relaxed max-w-[250px]">
                    123 Innovation Drive,<br />
                    Cyber City, Kochi 682030<br />
                    Kerala, India
                  </p>
                </motion.div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
