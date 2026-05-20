"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

// Static imports to guarantee Next.js bundles and renders paths correctly
import CelesteRivieraImg from "@/public/celeste-riviera.png";
import AtmosphereImg from "@/public/atmosphere.png";
import EleveMaisonImg from "@/public/eleve-maison.png";
import LumiereResidencesImg from "@/public/lumiere-residences.png";
import AetherTowerImg from "@/public/aether-tower.png";
import SolariaHeightsImg from "@/public/property-4.jpg";

const projects = [
  {
    name: "Celeste Riviera",
    location: "Perinthalmanna, Kerala",
    type: "Villa Project",
    status: "ON GOING",
    desc: "An ultra-exclusive residential neighborhood featuring luxury smart-villas, custom architectural elevations, suspended thermal roofing, and custom landscape formatting tailored for multi-generational comfort.",
    img: CelesteRivieraImg,
    stats: [
      { label: "Plot Scale", val: "18 Acres" },
      { label: "Structural Cast", val: "Grade 60 Steel" },
      { label: "Automation", val: "Lutron Integrated" },
    ],
  },
  {
    name: "Atmosphere Commercial Hub",
    location: "Kozhikode Road, Manjeri",
    type: "Commercial Plaza",
    status: "ON GOING",
    desc: "A towering, luxury commercial complex engineered for corporate offices, retail spaces, and heavy business footfall. Focuses on premium wide-span post-tensioned slab architectures.",
    img: AtmosphereImg,
    stats: [
      { label: "Floors", val: "8 Stories" },
      { label: "Concrete Grade", val: "C40 High-Strength" },
      { label: "Insulation", val: "Double-Glazed Low-E" },
    ],
  },
  {
    name: "Élevé Maison",
    location: "Calicut Coastline, Kerala",
    type: "Apartment",
    status: "ON GOING",
    desc: "A boutique community of seaside residences structured with large perimeter overhangs, interior open-courtyards, suspensional structural stairs, and smart energy conservation systems.",
    img: EleveMaisonImg,
    stats: [
      { label: "Apartments", val: "32 Premium Units" },
      { label: "Stone Cut", val: "Local Travertine" },
      { label: "Sustainability", val: "Solar Net Metering" },
    ],
  },
  {
    name: "Lumière Residences",
    location: "Patterkulam, Manjeri",
    type: "Luxury Estate",
    status: "COMPLETED",
    desc: "An award-winning luxury estate designed with premium off-white sandstone, wide structural cantilevers, double-height ceiling voids, and fully custom interior carpentry details.",
    img: LumiereResidencesImg,
    stats: [
      { label: "Scope", val: "10,000 Sq. Ft." },
      { label: "Millwork", val: "Bespoke Solid Teak" },
      { label: "HVAC", val: "Daikin VRF System" },
    ],
  },
  {
    name: "Aether Tower",
    location: "Malappuram District, Kerala",
    type: "Hospital Building",
    status: "COMPLETED",
    desc: "A state-of-the-art clinical facility designed with specialized medical zoning, high-traffic infection control surfaces, and custom-integrated ambulance bays.",
    img: AetherTowerImg,
    stats: [
      { label: "Scope", val: "38,000 Sq. Ft." },
      { label: "Zoning", val: "Class-100 Cleanrooms" },
      { label: "Surfaces", val: "Antimicrobial Cast" },
    ],
  },
  {
    name: "Solaria Heights",
    location: "Wayanad Hills, Kerala",
    type: "Resort Estate",
    status: "COMPLETED",
    desc: "An eco-friendly mountainside villa built using local raw building materials, featuring heavy thermal envelope insulation, custom stone fireplace chimneys, and natural mountain water streams.",
    img: SolariaHeightsImg,
    stats: [
      { label: "Plot", val: "8 Acres Hillside" },
      { label: "Chimney", val: "Bespoke River Stone" },
      { label: "Water", val: "Natural Spring Gravity" },
    ],
  },
];

export default function ProjectsGrid() {
  return (
    <div id="portfolio" className="bg-[var(--bg-primary)] text-[var(--fg-primary)] py-24 md:py-36 border-t border-[var(--border-white-5)]">
      
      {/* 1. Header Section */}
      <div className="px-6 md:px-16 max-w-7xl mx-auto pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Left Column: Brand Tracker */}
          <div className="md:col-span-3">
            <span className="text-xs md:text-sm font-semibold tracking-[0.3em] uppercase block">
              MASKAN®
            </span>
            <span className="text-[10px] md:text-xs font-mono tracking-widest text-[var(--fg-primary)]/40 uppercase block mt-1">
              {"// FEATURED PORTFOLIO '26"}
            </span>
          </div>

          {/* Right Column: Narrative */}
          <div className="md:col-span-9 space-y-6">
            <motion.h2 
              className="text-4xl md:text-6xl font-light tracking-tight text-[var(--fg-primary)] leading-none uppercase"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.24, 0.43, 0.15, 0.97] }}
            >
              Featured Works
            </motion.h2>
            <motion.p 
              className="text-sm md:text-base text-[var(--fg-primary)]/70 max-w-xl font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.24, 0.43, 0.15, 0.97] }}
            >
              A carefully curated selection of residential and commercial spaces showing our signature approach to spatial efficiency, material honesty, and structural durability.
            </motion.p>
          </div>
        </div>
      </div>

      {/* 2. Visual Staggered Projects Grid */}
      <div className="px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 md:gap-y-36">
          {projects.map((proj, idx) => {
            const isCompleted = proj.status === "COMPLETED";
            const isStaggered = idx % 2 === 1;

            return (
              <motion.div 
                key={proj.name}
                className={`group flex flex-col w-full ${isStaggered ? "md:mt-24" : ""}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
              >
                {/* Chamfer clipped image container */}
                <div 
                  className="relative w-full aspect-[4/3] md:aspect-[16/11] overflow-hidden border border-[var(--border-white-10)] shadow-xl cursor-pointer"
                  style={{ clipPath: "polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0 100%)" }}
                >
                  <Image 
                    src={proj.img} 
                    alt={proj.name} 
                    fill 
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    priority
                  />
                  
                  {/* Status Badge overlay */}
                  <div className={`absolute top-6 left-6 text-[9px] font-mono tracking-widest font-semibold px-3 py-1.5 uppercase shadow-md flex items-center gap-1.5 ${
                    isCompleted ? "bg-[var(--accent)] text-[var(--bg-primary)]" : "bg-white text-[var(--bg-primary)]"
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${isCompleted ? "bg-[var(--bg-primary)]" : "bg-green-500 animate-ping"}`} />
                    {proj.status}
                  </div>
                </div>

                {/* Info and stats below */}
                <div className="space-y-3 mt-6">
                  <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-[var(--accent)] uppercase">
                    <span>{proj.location}</span>
                    <span className="opacity-30">•</span>
                    <span>{proj.type}</span>
                  </div>

                  <div className="flex items-start justify-between">
                    <h3 className="text-xl md:text-2xl font-light tracking-wide text-[var(--fg-primary)] group-hover:text-[var(--accent)] transition-colors duration-300">
                      {proj.name}
                    </h3>
                    <span className="text-lg text-[var(--fg-primary)]/40 group-hover:text-[var(--accent)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 transform select-none">
                      ↗
                    </span>
                  </div>

                  <p className="text-xs md:text-sm text-[var(--fg-primary)]/65 font-light leading-relaxed max-w-lg">
                    {proj.desc}
                  </p>

                  <div className="flex flex-wrap gap-x-6 gap-y-2 pt-4 border-t border-[var(--border-white-5)] mt-4">
                    {proj.stats.map((stat) => (
                      <div key={stat.label} className="flex items-center gap-2">
                        <span className="text-[9px] font-mono uppercase text-[var(--fg-primary)]/40 tracking-wider">
                          {stat.label}:
                        </span>
                        <span className="text-xs font-light text-[var(--fg-primary)]/80">
                          {stat.val}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* 3. Action Link to Projects Page */}
      <div className="flex justify-center mt-20 md:mt-32 w-full">
        <Link href="/projects">
          <button className="bg-transparent border-none text-[var(--fg-primary)] hover:text-[var(--accent)] text-sm uppercase tracking-[0.25em] font-medium py-3 px-6 flex items-center gap-4 transition-all duration-300 group cursor-pointer">
            <svg 
              className="w-8 h-3 text-[var(--fg-primary)] group-hover:text-[var(--accent)] transition-transform duration-300 group-hover:translate-x-1" 
              viewBox="0 0 40 10" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5"
            >
              <line x1="0" y1="5" x2="35" y2="5" />
              <path d="M30,1 L35,5 L30,9" />
            </svg>
            View Full Portfolio
          </button>
        </Link>
      </div>

    </div>
  );
}
