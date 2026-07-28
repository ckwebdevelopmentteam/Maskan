"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Building2, Home, PenTool, Trees } from "lucide-react";
import ImageWithFallback from "@/components/Client/ImageWithFallback";

import ImageRes from "@/public/residential_villa.webp";
import ImageCom from "@/public/commercial_plaza.webp";
import ImageDesign from "@/public/white_minimal_interior.webp";
import ImageLandscape from "@/public/aesthetic_cabin_forest.webp";

const services = [
  {
    id: "01",
    name: "Residential Construction",
    category: "Residential Division",
    description: "Elite private homes and villas designed in harmony with universal architecture principles. Managed from deep foundations to custom facades.",
    image: ImageRes,
    icon: Home,
    tags: ["Custom Villas", "Luxury Apartments", "Structural Foundations"],
    colSpan: "md:col-span-8",
    rowSpan: "md:row-span-2",
  },
  {
    id: "02",
    name: "Commercial Construction",
    category: "Commercial Division",
    description: "Modern business complexes, multiplexes, and retail plazas engineered for spatial efficiency.",
    image: ImageCom,
    icon: Building2,
    tags: ["Retail Plazas", "High-Rise Offices"],
    colSpan: "md:col-span-4",
    rowSpan: "md:row-span-1",
  },
  {
    id: "03",
    name: "Architectural & Interior Design",
    category: "Design Studio",
    description: "From concept to finished interiors, spaces as functional as they are beautiful.",
    image: ImageDesign,
    icon: PenTool,
    tags: ["Architectural Design", "Interior Works"],
    colSpan: "md:col-span-4",
    rowSpan: "md:row-span-1",
  },
  {
    id: "04",
    name: "Landscape, Renovation & Turnkey",
    category: "Specialized Services",
    description: "Enhance and complete spaces with outdoor landscaping, renovations, and turnkey delivery.",
    image: ImageLandscape,
    icon: Trees,
    tags: ["Landscape Design", "Turnkey Construction"],
    colSpan: "md:col-span-12",
    rowSpan: "md:row-span-1",
  },
];

export default function ServicesBentoGrid() {
  return (
    <section className="w-full bg-[var(--bg-primary)] py-16 md:py-28 px-4 sm:px-6 md:px-16 border-t border-[var(--border-white-5)]">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-10 md:gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="text-xs font-mono font-semibold tracking-[0.2em] uppercase text-[var(--accent)]">
              Our Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[var(--fg-primary)] tracking-tight leading-[1.1]">
              Comprehensive <br className="hidden md:block"/> Construction Services
            </h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg font-light text-[var(--fg-primary)]/70 max-w-md pb-1">
            Every project is a testament to our passion for design excellence and meticulous attention to structural detail.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-auto md:auto-rows-[350px] gap-4 md:gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className={`relative group overflow-hidden rounded-[2rem] bg-gray-950 flex flex-col justify-end p-6 sm:p-8 md:p-10 border border-white/10 ${service.colSpan} ${service.rowSpan} min-h-[280px]`}
              >
                {/* Background Image with Resilient Fallback */}
                <ImageWithFallback
                  src={service.image}
                  alt={service.name}
                  fill
                  icon={Icon}
                  category={service.category}
                  fallbackTitle={service.name}
                  fallbackSubtitle={service.description}
                  className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 opacity-80 group-hover:opacity-60"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

                {/* Content */}
                <div className="relative z-10 flex flex-col gap-3 sm:gap-4 mt-auto">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shrink-0 group-hover:bg-[var(--accent)] group-hover:text-black transition-colors duration-500">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-white tracking-tight">
                      {service.name}
                    </h3>
                  </div>
                  
                  {/* Always visible on mobile, expanding hover on desktop */}
                  <div className="grid grid-rows-[1fr] md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    <div className="overflow-hidden">
                      <p className="text-white/85 font-light text-xs sm:text-sm md:text-base leading-relaxed mt-2 mb-4 max-w-xl">
                        {service.description}
                      </p>
                      <ul className="flex flex-wrap gap-2">
                        {service.tags.map(tag => (
                          <li key={tag} className="px-3 py-1 rounded-full border border-white/20 bg-white/10 text-white/90 text-xs font-medium tracking-wide backdrop-blur-sm">
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Top-Right Arrow Indicator */}
                  <div className="absolute top-0 right-0 p-6 md:p-8 opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500 text-white">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                      <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
