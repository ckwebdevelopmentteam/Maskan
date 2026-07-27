"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight, Building2, Home, PenTool, Trees } from "lucide-react";

import ImageRes from "@/public/residential_villa.webp";
import ImageCom from "@/public/commercial_plaza.webp";
import ImageDesign from "@/public/white_minimal_interior.webp";
import ImageLandscape from "@/public/aesthetic_cabin_forest.webp";

const services = [
  {
    id: "01",
    name: "Residential Construction",
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
    <section className="w-full bg-[var(--bg-primary)] py-20 md:py-32 px-4 md:px-16 border-t border-[var(--border-white-5)]">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-4 max-w-2xl">
            <span className="text-sm font-medium tracking-[0.2em] uppercase text-[var(--fg-primary)]/50">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[var(--fg-primary)] tracking-tight leading-[1.1]">
              Comprehensive <br className="hidden md:block"/> Construction Services
            </h2>
          </div>
          <p className="text-base md:text-lg font-light text-[var(--fg-primary)]/70 max-w-md pb-2">
            Every project is a testament to our passion for design excellence and meticulous attention to detail.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[300px] md:auto-rows-[350px] gap-4 md:gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative group overflow-hidden rounded-[2rem] bg-gray-900 flex flex-col justify-end p-8 md:p-10 ${service.colSpan} ${service.rowSpan}`}
              >
                {/* Background Image */}
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 opacity-80 group-hover:opacity-60"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px]" />

                {/* Content */}
                <div className="relative z-10 flex flex-col gap-4">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white shrink-0 group-hover:bg-[var(--bg-primary)] group-hover:text-[var(--fg-primary)] transition-colors duration-500">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-medium text-white tracking-tight">
                      {service.name}
                    </h3>
                  </div>
                  
                  {/* Expanding Description & Tags */}
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    <div className="overflow-hidden">
                      <p className="text-white/80 font-light text-sm md:text-base leading-relaxed mt-4 mb-6 max-w-xl">
                        {service.description}
                      </p>
                      <ul className="flex flex-wrap gap-2">
                        {service.tags.map(tag => (
                          <li key={tag} className="px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-white/90 text-xs font-medium tracking-wide">
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Top-Right Arrow Indicator */}
                  <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 text-white">
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                      <ArrowUpRight className="w-5 h-5" />
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
