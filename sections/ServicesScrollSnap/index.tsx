"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, Building2, Home, PenTool, Trees } from "lucide-react";

import ImageRes from "@/public/residential_villa.png";
import ImageCom from "@/public/commercial_plaza.png";
import ImageDesign from "@/public/white_minimal_interior.png";
import ImageLandscape from "@/public/aesthetic_cabin_forest.png";

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
    description: "Modern business complexes, multiplexes, and retail plazas engineered for spatial efficiency and structural integrity.",
    image: ImageCom,
    icon: Building2,
    tags: ["Retail Plazas", "High-Rise Offices"],
  },
  {
    id: "03",
    name: "Architectural & Interior Design",
    description: "From initial concept to finished interiors, our design team creates spaces that are as functional as they are beautiful.",
    image: ImageDesign,
    icon: PenTool,
    tags: ["Architectural Design", "Interior Design", "Premium Interiors"],
  },
  {
    id: "04",
    name: "Landscape, Renovation & Turnkey",
    description: "Beyond new construction, we help clients enhance and complete their spaces — from outdoor landscaping to full renovations.",
    image: ImageLandscape,
    icon: Trees,
    tags: ["Landscape Design", "Renovation", "Turnkey Construction", "Material Supply"],
  },
];

export default function ServicesScrollSnap() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section 
      ref={containerRef}
      className="w-full bg-[var(--bg-primary)] h-[100dvh] overflow-y-scroll snap-y snap-mandatory relative"
      style={{ scrollBehavior: 'smooth' }}
    >
      {services.map((service, idx) => (
        <ServiceSection key={service.id} service={service} index={idx} total={services.length} />
      ))}
    </section>
  );
}

function ServiceSection({ service, index, total }: { service: typeof services[0], index: number, total: number }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const Icon = service.icon;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax effect on the background image
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  // Fade out content when scrolling away
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.5, 0.6, 1], [0, 1, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <div 
      ref={sectionRef} 
      className="w-full h-[100dvh] snap-center snap-always relative overflow-hidden flex items-center justify-center md:justify-start"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y }} 
        className="absolute inset-0 w-full h-[140%] -top-[20%] z-0"
      >
        <Image
          src={service.image}
          alt={service.name}
          fill
          className="object-cover"
          sizes="100vw"
          priority={index === 0}
        />
      </motion.div>

      {/* Gradients to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 z-10" />

      {/* Content Container */}
      <motion.div 
        style={{ opacity, scale }}
        className="relative z-20 px-6 md:px-24 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-end md:items-center justify-between gap-12"
      >
        {/* Left Side: Number & Title */}
        <div className="flex flex-col gap-6 md:gap-8 max-w-2xl text-white">
          <div className="flex items-center gap-4">
            <span className="text-xl md:text-2xl font-mono text-white/50 tracking-widest">{service.id}</span>
            <div className="w-16 h-[1px] bg-white/30" />
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-8xl font-light tracking-tight leading-[1.05]">
            {service.name}
          </h2>
          
          <p className="text-lg md:text-xl font-light text-white/80 leading-relaxed max-w-xl">
            {service.description}
          </p>

          <div className="flex flex-wrap gap-3 mt-4">
            {service.tags.map(tag => (
              <span key={tag} className="px-5 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white text-sm font-medium tracking-wide">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right Side: Icon & Action */}
        <div className="hidden md:flex flex-col items-center gap-8 self-end pb-12">
          <div className="w-24 h-24 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl flex items-center justify-center text-white">
            <Icon className="w-10 h-10 stroke-1" />
          </div>
          
          {index < total - 1 ? (
            <div className="flex flex-col items-center gap-2 animate-bounce mt-12 text-white/50">
              <span className="text-[10px] uppercase tracking-widest font-semibold">Scroll</span>
              <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
            </div>
          ) : (
            <div className="mt-12 w-[1px] h-12" />
          )}
        </div>
      </motion.div>
    </div>
  );
}
