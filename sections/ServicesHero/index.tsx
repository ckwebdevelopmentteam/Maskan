"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

export default function ServicesHero() {
  return (
    <div className="px-4 md:px-6 pt-4 pb-12">
      <section className="relative h-[50vh] md:h-[60vh] w-full flex items-center overflow-hidden rounded-[2.5rem] bg-gray-900">
        {/* Background Image with Dark Vignette Overlay */}
        <motion.div 
          className="absolute inset-0 w-full h-full"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        >
          <Image
            src="/projects-hero.webp"
            alt="maskan-services-banner"
            fill
            priority
            className="object-cover brightness-[0.7] contrast-[1.1]"
          />
          {/* Black overlay to keep high contrast and neutralize bright parts */}
          <div className="absolute inset-0 bg-black/40 z-[1]" />
        </motion.div>

        {/* Content Overlay */}
        <div className="relative z-10 w-full px-6 md:px-16 max-w-7xl mx-auto mt-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Column: Big Bold Title */}
            <div className="md:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.24, 0.43, 0.15, 0.97] }}
                className="space-y-4"
              >
                <span className="text-sm uppercase tracking-[0.3em] font-semibold block font-mono drop-shadow-md text-white">
                  What We Do
                </span>
                <h1 className="text-5xl md:text-[85px] font-extralight tracking-tight text-white leading-[0.95] drop-shadow-lg">
                  Our <br />
                  <span className="font-normal text-white">Services.</span>
                </h1>
              </motion.div>
            </div>

            {/* Right Column: Paragraph Context */}
            <div className="md:col-span-5 flex md:justify-end">
              <motion.p
                className="text-base md:text-lg text-white/90 max-w-sm font-light leading-relaxed tracking-wide text-left drop-shadow-md"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.24, 0.43, 0.15, 0.97] }}
              >
                From custom residential villas to massive commercial spaces, we build with precision, sustainable practices, and universal design principles that endure.
              </motion.p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
