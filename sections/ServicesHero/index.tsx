"use client";

import React from "react";
import { motion } from "motion/react";
import ImageWithFallback from "@/components/Client/ImageWithFallback";
import { HardHat } from "lucide-react";

export default function ServicesHero() {
  return (
    <div className="px-3 sm:px-4 md:px-6 pt-4 pb-8 md:pb-12">
      <section className="relative min-h-[360px] h-[45vh] md:h-[60vh] w-full flex items-center overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-gray-950 border border-white/10 shadow-2xl">
        {/* Background Image with Resilient Fallback */}
        <motion.div 
          className="absolute inset-0 w-full h-full"
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: "easeOut" }}
        >
          <ImageWithFallback
            src="/projects-hero.webp"
            alt="Maskan Services Banner"
            fill
            priority
            icon={HardHat}
            category="Maskan Portfolio"
            fallbackTitle="Services & Structural Engineering"
            fallbackSubtitle="Master engineering solutions from foundation to handover"
            className="object-cover brightness-[0.7] contrast-[1.05]"
            sizes="100vw"
          />
          {/* Vignette Overlay for Crisp Typography Contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30 z-[1] pointer-events-none" />
        </motion.div>

        {/* Content Overlay */}
        <div className="relative z-10 w-full px-6 sm:px-8 md:px-16 max-w-7xl mx-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
            {/* Left Column: Big Bold Title */}
            <div className="md:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.24, 0.43, 0.15, 0.97] }}
                className="space-y-3 md:space-y-4"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
                  <span className="text-xs uppercase tracking-[0.25em] font-semibold font-mono">
                    What We Do
                  </span>
                </div>
                
                <h1 className="text-4xl sm:text-6xl md:text-[80px] lg:text-[88px] font-extralight tracking-tight text-white leading-[0.95] drop-shadow-xl">
                  Our <br />
                  <span className="font-normal text-white">Services.</span>
                </h1>
              </motion.div>
            </div>

            {/* Right Column: Paragraph Context */}
            <div className="md:col-span-5 flex md:justify-end">
              <motion.p
                className="text-sm sm:text-base md:text-lg text-white/90 max-w-md font-light leading-relaxed tracking-wide text-left drop-shadow-md"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.24, 0.43, 0.15, 0.97] }}
              >
                From turnkey luxury residential villas to high-performance commercial towers, we engineer structures with precision, sustainability, and architectural integrity.
              </motion.p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
