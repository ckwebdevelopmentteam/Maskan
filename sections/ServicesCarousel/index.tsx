"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Building2, Home, PenTool, Trees, ArrowUpRight } from "lucide-react";

import ImageRes from "@/public/residential_villa.png";
import ImageCom from "@/public/commercial_plaza.png";
import ImageDesign from "@/public/white_minimal_interior.png";
import ImageLandscape from "@/public/aesthetic_cabin_forest.png";
import Link from "next/link";

const services = [
  {
    id: "01",
    name: "Residential Construction",
    description: "Elite private homes and villas designed in harmony with universal architecture principles. Managed from deep foundations to custom facades.",
    image: ImageRes,
    icon: Home,
    tags: ["Custom Villas", "Luxury Apartments", "Structural Foundations"],
  },
  {
    id: "02",
    name: "Commercial Construction",
    description: "Modern business complexes, multiplexes, and retail plazas engineered for spatial efficiency.",
    image: ImageCom,
    icon: Building2,
    tags: ["Retail Plazas", "High-Rise Offices"],
  },
  {
    id: "03",
    name: "Architectural & Interior Design",
    description: "From concept to finished interiors, spaces as functional as they are beautiful.",
    image: ImageDesign,
    icon: PenTool,
    tags: ["Architectural Design", "Interior Works"],
  },
  {
    id: "04",
    name: "Landscape, Renovation & Turnkey",
    description: "Enhance and complete spaces with outdoor landscaping, renovations, and turnkey delivery.",
    image: ImageLandscape,
    icon: Trees,
    tags: ["Landscape Design", "Turnkey Construction"],
  },
];

export default function ServicesCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth * 0.8 : clientWidth * 0.8;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-[var(--bg-primary)] py-20 md:py-32 overflow-hidden border-t border-[var(--border-white-5)]">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-12 px-6 md:px-16">
        
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="flex flex-col gap-4 max-w-2xl">
            <span className="text-sm font-medium tracking-[0.2em] uppercase text-[var(--fg-primary)]/50">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[var(--fg-primary)] tracking-tight leading-[1.1]">
              Maskan Services
            </h2>
            <p className="text-base md:text-lg font-light text-[var(--fg-primary)]/70 max-w-md pt-2">
              Explore our core construction and design solutions, built for elegance and durability.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-[var(--fg-primary)]/20 flex items-center justify-center text-[var(--fg-primary)] hover:bg-[var(--fg-primary)] hover:text-[var(--bg-primary)] transition-colors cursor-pointer"
              aria-label="Scroll Left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border border-[var(--fg-primary)]/20 flex items-center justify-center text-[var(--fg-primary)] hover:bg-[var(--fg-primary)] hover:text-[var(--bg-primary)] transition-colors cursor-pointer"
              aria-label="Scroll Right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>

      {/* Carousel Track */}
      <div className="mt-16 w-full pl-6 md:pl-16 pr-6 md:pr-0">
        <div 
          ref={scrollRef}
          className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory pb-12 pt-4 hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative shrink-0 w-[85vw] md:w-[45vw] lg:w-[35vw] h-[500px] md:h-[600px] snap-center md:snap-start rounded-[2rem] overflow-hidden group bg-gray-900"
              >
                {/* Background Image */}
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110 opacity-70 group-hover:opacity-50"
                  sizes="(max-width: 768px) 85vw, 45vw"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
                  {/* Top row: Icon & Arrow */}
                  <div className="flex justify-between items-start w-full">
                    <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 group-hover:bg-white group-hover:text-black transition-all duration-500 shadow-lg">
                      <Icon className="w-6 h-6 stroke-[1.5]" />
                    </div>
                    <Link href="/services" className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 hover:bg-white hover:text-black">
                      <ArrowUpRight className="w-5 h-5" />
                    </Link>
                  </div>

                  {/* Bottom row: Text */}
                  <div className="flex flex-col gap-4 transform transition-transform duration-500 group-hover:-translate-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-white/60 font-mono text-sm tracking-widest">{service.id}</span>
                      <div className="w-8 h-px bg-white/30" />
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-medium text-white tracking-tight leading-snug">
                      {service.name}
                    </h3>
                    
                    {/* Collapsed Description */}
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                      <div className="overflow-hidden">
                        <p className="text-white/80 font-light text-sm md:text-base leading-relaxed mt-2 mb-6">
                          {service.description}
                        </p>
                        <ul className="flex flex-wrap gap-2">
                          {service.tags.map(tag => (
                            <li key={tag} className="px-3 py-1.5 rounded-full border border-white/20 bg-white/5 text-white/90 text-xs font-medium tracking-wide">
                              {tag}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      {/* Inject styles for hide-scrollbar just in case */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
