"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight, Building2, Home, PenTool, Trees } from "lucide-react";
import Link from "next/link";

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
    description: "From concept to finished interiors, spaces as functional as they are beautiful. Covering both new builds and interior fit-outs.",
    image: ImageDesign,
    icon: PenTool,
    tags: ["Architectural Design", "Interior Works", "Premium Interiors"],
  },
  {
    id: "04",
    name: "Landscape, Renovation & Turnkey",
    description: "Enhance and complete spaces with outdoor landscaping, full renovations, and end-to-end turnkey delivery.",
    image: ImageLandscape,
    icon: Trees,
    tags: ["Landscape Design", "Renovation", "Turnkey Construction"],
  },
];

export default function ServicesStickyScroll() {
  return (
    <section className="w-full bg-[var(--bg-primary)] py-20 md:py-32 px-6 md:px-16 border-t border-[var(--border-white-5)]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 items-start">

        {/* Left Column: Sticky Title */}
        <div className="md:col-span-5 md:sticky md:top-32 flex flex-col gap-6 pt-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-[1px] bg-[var(--fg-primary)]/30" />
            <span className="text-xl font-medium tracking-[0.2em] uppercase text-[var(--fg-primary)]/50">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[var(--fg-primary)] tracking-tight leading-[1.1]">
            Unrivaled Construction & Design
          </h2>
          <p className="text-base md:text-lg font-light text-[var(--fg-primary)]/70 max-w-md">
            Every project is a testament to our passion for design excellence, meticulous attention to detail, and a client-centered approach that builds trust alongside stunning structures.
          </p>
          <div className="mt-8">
            <Link
              href="/services"
              className="px-8 py-4 bg-[var(--fg-primary)] text-[var(--bg-primary)] text-sm uppercase tracking-widest font-semibold hover:bg-[var(--fg-primary)]/90 transition-all duration-300 rounded-full inline-flex items-center gap-2"
            >
              Explore All Services <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Right Column: Scrolling Service Cards */}
        <div className="md:col-span-7 flex flex-col gap-16 md:gap-24">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="flex flex-col gap-6"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden bg-gray-900 group shadow-lg">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 55vw"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* Text Content */}
                <div className="flex flex-col gap-4 pl-2">
                  <div className="flex items-center gap-4">
                    <span className="text-[var(--fg-primary)]/40 font-mono tracking-widest text-lg">{service.id}</span>
                    <h3 className="text-3xl md:text-4xl font-medium text-[var(--fg-primary)] tracking-tight">
                      {service.name}
                    </h3>
                  </div>
                  <p className="text-[var(--fg-primary)]/70 font-light text-base md:text-lg leading-relaxed max-w-xl">
                    {service.description}
                  </p>
                  <ul className="flex flex-wrap gap-2 mt-2">
                    {service.tags.map(tag => (
                      <li key={tag} className="px-4 py-1.5 rounded-full border border-[var(--fg-primary)]/10 bg-[var(--fg-primary)]/5 text-[var(--fg-primary)]/80 text-xs font-medium tracking-wide">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
