"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import ImageRes from "@/public/property-1.jpg";
import ImageCom from "@/public/property-5.jpg";
import ImageInt from "@/public/property-3.jpg";
import NavigateSVG from "@/components/SVGComponents/NavigateSVG";

const services = [
  {
    id: "01",
    name: "Residential Construction",
    tagline: "Turnkey Luxury Estates & Custom Villas",
    image: ImageRes,
    description: "Delivering architectural prestige with extreme predictability. We manage everything from high-strength foundations to custom hand-picked finishes, ensuring your private residence is an engineered masterpiece.",
    specs: [
      "Bespoke High-End Master Planning",
      "Advanced Seismic & Thermal Insulation",
      "Luxury Masonry & Predictability",
      "Integrated Smart Home Infrastructure"
    ]
  },
  {
    id: "02",
    name: "Commercial Construction",
    tagline: "High-Rise Structures & Corporate Developments",
    image: ImageCom,
    description: "Optimized for corporate investment, supreme capital reach, and timeless aesthetics. We construct high-rise office towers, modern retail plazas, and luxury commercial complexes with zero margin delays.",
    specs: [
      "Reinforced Steel Scaffolding & Shells",
      "Efficient MEP Systems & Compliance",
      "Sustainable LEED Certifiable Frameworks",
      "Corporate Office Fit-Out Customization"
    ]
  },
  {
    id: "03",
    name: "Interior Design & Spa Planning",
    tagline: "Bespoke Millwork & Luxury Ambient Planning",
    image: ImageInt,
    description: "Creating highly curated sensory environments. Our specialized designers handle bespoke wood joinery, Italian marble cladding, and luxury wet spa planning to add ultimate value to private properties.",
    specs: [
      "Exotic Stone & Marble Selection",
      "Custom Architectural Wood Millwork",
      "Hydrotherapy & Thermal Spa Layouts",
      "Integrated Indirect Ambient Illumination"
    ]
  }
];

export default function ElementisStoryClient() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-0">
      {/* ================= DESKTOP INTERACTIVE SPLIT SWITCHER ================= */}
      <div className="hidden md:grid md:grid-cols-12 gap-12 items-center min-h-[550px]">
        {/* Left Side: Interactive Buttons Stack */}
        <div className="md:col-span-5 flex flex-col justify-center h-full">
          <div className="space-y-2">
            {services.map((ser, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={ser.id}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => setActiveIndex(idx)}
                  className="w-full text-left py-6 border-b border-white/10 flex items-start gap-6 transition-all duration-500 outline-none group cursor-pointer"
                >
                  <span className={`text-sm font-mono tracking-wider transition-colors duration-500 ${
                    isActive ? "text-white" : "text-white/30 group-hover:text-white/60"
                  }`}>
                    {ser.id}
                  </span>
                  <div className="flex-grow space-y-1">
                    <h3 className={`text-xl font-light uppercase tracking-wider transition-all duration-500 ${
                      isActive ? "text-white translate-x-2 font-normal" : "text-white/40 group-hover:text-white/80"
                    }`}>
                      {ser.name}
                    </h3>
                    <p className={`text-xs transition-opacity duration-500 ${
                      isActive ? "opacity-75" : "opacity-0"
                    } text-white/60 font-medium`}>
                      {ser.tagline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Visual Showcase Deck */}
        <div className="md:col-span-7 h-full flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.98, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.98, x: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group"
            >
              {/* Image Frame */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={services[activeIndex].image}
                  alt={services[activeIndex].name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#232b27]/95 via-black/30 to-[#232b27]/40" />
              </div>

              {/* Glassmorphic Panel content overlay */}
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 md:p-10 space-y-6">
                <p className="text-white/90 text-sm md:text-base leading-relaxed font-light">
                  {services[activeIndex].description}
                </p>

                {/* Specs bullets */}
                <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                  {services[activeIndex].specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                      <span className="text-xs text-white/80 font-normal tracking-wide">
                        {spec}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ================= MOBILE ACCORDION STACK ================= */}
      <div className="md:hidden flex flex-col gap-6">
        {services.map((ser, idx) => {
          const isActive = idx === activeIndex;
          return (
            <div 
              key={ser.id}
              className="border border-white/10 rounded-2xl overflow-hidden bg-[#2B3530]/40 transition-all duration-300"
            >
              {/* Tap trigger Header */}
              <button
                onClick={() => setActiveIndex(isActive ? -1 : idx)}
                className="w-full flex justify-between items-center px-6 py-5 outline-none"
              >
                <div className="flex items-center gap-4 text-left">
                  <span className="text-xs font-mono text-white/40">{ser.id}</span>
                  <span className="text-base font-light text-white uppercase tracking-wider">{ser.name}</span>
                </div>
                <span className={`text-xl font-light text-white/60 transition-transform duration-300 ${
                  isActive ? "rotate-45" : ""
                }`}>
                  +
                </span>
              </button>

              {/* Expanded Panel */}
              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 space-y-6">
                      <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-white/5">
                        <Image
                          src={ser.image}
                          alt={ser.name}
                          fill
                          className="object-cover"
                          sizes="100vw"
                        />
                      </div>
                      <p className="text-white/80 text-sm leading-relaxed font-light">
                        {ser.description}
                      </p>
                      <div className="space-y-2 border-t border-white/5 pt-4">
                        {ser.specs.map((spec, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                            <span className="text-xs text-white/70">{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* VIEW ALL SERVICES Action Link */}
      <div className="flex justify-center mt-12 md:mt-20 w-full">
        <Link href="/services">
          <motion.button 
            className="bg-transparent border-none text-white hover:text-white/80 text-sm uppercase tracking-[0.25em] font-medium py-3 px-6 flex items-center gap-4 transition-all duration-300 group cursor-pointer"
            whileHover={{ scale: 1.02 }}
          >
            <svg 
              className="w-8 h-3 text-white transition-transform duration-300 group-hover:translate-x-1" 
              viewBox="0 0 40 10" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5"
            >
              <line x1="0" y1="5" x2="35" y2="5" />
              <path d="M30,1 L35,5 L30,9" />
            </svg>
            Explore All Services
          </motion.button>
        </Link>
      </div>
    </div>
  );
}
