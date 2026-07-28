"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Building2, Home, PenTool, Trees, CheckCircle2 } from "lucide-react";
import Link from "next/link";
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
    description:
      "Turnkey private luxury homes and residential villas constructed to universal structural standards. We manage everything from deep soil foundations to bespoke facade engineering.",
    image: ImageRes,
    icon: Home,
    highlights: ["Custom Villas", "Luxury Estates", "Turnkey Handover", "Structural Foundations"],
    tags: ["Custom Villas", "Luxury Apartments", "Structural Foundations"],
  },
  {
    id: "02",
    name: "Commercial Construction",
    category: "Commercial Division",
    description:
      "Modern business complexes, retail plazas, high-rise trade towers, and multiplexes built for high foot-fall traffic, structural durability, and spatial efficiency.",
    image: ImageCom,
    icon: Building2,
    highlights: ["Retail Plazas", "High-Rise Trade Towers", "MEP Engineering", "Post-Tension Slabs"],
    tags: ["Retail Plazas", "High-Rise Offices", "MEP-Ready Spaces"],
  },
  {
    id: "03",
    name: "Architectural & Interior Design",
    category: "Design Studio",
    description:
      "End-to-end architectural spatial planning and interior execution. We synthesize daylighting, acoustic management, and luxury finishes into timeless spaces.",
    image: ImageDesign,
    icon: PenTool,
    highlights: ["Spatial Blueprinting", "Interior Fit-Outs", "Material Selection", "3D Visualization"],
    tags: ["Architectural Design", "Interior Fit-Outs", "Premium Interiors"],
  },
  {
    id: "04",
    name: "Landscape, Renovation & Turnkey",
    category: "Specialized Services",
    description:
      "Holistic outdoor landscaping, exterior facade remodeling, structural upgrades, and full turnkey project management delivered with guaranteed timelines.",
    image: ImageLandscape,
    icon: Trees,
    highlights: ["Outdoor Landscaping", "Exterior Remodeling", "Turnkey Delivery", "Material Procurement"],
    tags: ["Landscape Design", "Structural Renovation", "Turnkey Construction"],
  },
];

export default function ServicesStickyScroll() {
  return (
    <section className="w-full bg-[var(--bg-primary)] py-16 md:py-28 px-4 sm:px-6 md:px-16 border-t border-[var(--border-white-5)]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 lg:gap-20 items-start">

        {/* Left Column: Header (Sticky on desktop, clean block on mobile) */}
        <div className="md:col-span-5 md:sticky md:top-32 flex flex-col gap-6 pt-2">
          <div className="flex items-center gap-3">
            <div className="w-8 h-[2px] bg-[var(--accent)]" />
            <span className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[var(--fg-primary)]/60 font-mono">
              Maskan Expertise
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[var(--fg-primary)] tracking-tight leading-[1.1]">
            Unrivaled <br className="hidden sm:inline" />
            <span className="font-normal">Construction & Design</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg font-light text-[var(--fg-primary)]/75 leading-relaxed max-w-md">
            Every project is a testament to our passion for engineering precision, transparent execution, and timeless architecture tailored to last generations.
          </p>

          <div className="pt-2">
            <Link
              href="/services"
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-[var(--fg-primary)] text-[var(--bg-primary)] text-xs sm:text-sm uppercase tracking-widest font-semibold hover:opacity-90 transition-all duration-300 rounded-full shadow-lg"
            >
              Explore All Services <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Right Column: Service Cards */}
        <div className="md:col-span-7 flex flex-col gap-10 sm:gap-12 md:gap-16">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="group flex flex-col gap-5 p-5 sm:p-6 md:p-8 rounded-3xl bg-white border border-gray-200/90 hover:border-[var(--fg-primary)]/30 transition-all duration-500 shadow-sm"
              >
                {/* Visual Image Card with Resilient Fallback */}
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-[16/9] rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.name}
                    fill
                    icon={Icon}
                    category={service.category}
                    fallbackTitle={service.name}
                    fallbackSubtitle={service.description}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Text & Content Block */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between gap-4 border-b border-gray-200/80 pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200/80 flex items-center justify-center text-[var(--fg-primary)] shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-[var(--fg-primary)]/50 tracking-widest block">
                          SERVICE {service.id}
                        </span>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-[var(--fg-primary)] tracking-tight">
                          {service.name}
                        </h3>
                      </div>
                    </div>
                    
                    <Link
                      href="/services"
                      className="w-10 h-10 rounded-full border border-[var(--fg-primary)]/20 flex items-center justify-center text-[var(--fg-primary)]/70 group-hover:bg-[var(--fg-primary)] group-hover:text-white transition-all duration-300 shrink-0"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <p className="text-sm sm:text-base font-light text-[var(--fg-primary)]/80 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-2.5 pt-1">
                    {service.highlights.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs sm:text-sm text-[var(--fg-primary)]/85">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full border border-gray-200 bg-gray-50 text-[var(--fg-primary)]/85 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
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
