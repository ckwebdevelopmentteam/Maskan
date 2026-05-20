"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import Image1 from "@/public/IrsyMMpxpY0yqVMutVpGtcoOSx4.webp";
import Image2 from "@/public/S0kKRTM44yfHbhgnxbX3PNQlwE.avif";
import Image3 from "@/public/UOKG1WBP4iClBZMcV2ZS55S7Jyw.avif";

export default function IntroductionServer({ noTopPadding = false }: { noTopPadding?: boolean }) {
  const arrowIcon = (
    <svg
      className="size-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 11L11 1M11 1H3M11 1V9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <section id="about" className={`relative bg-[var(--bg-primary)] ${noTopPadding ? "pt-5" : "pt-20 md:pt-28"} pb-20 md:pb-32 px-6 md:px-16 w-full overflow-hidden`}>
      <div className="max-w-[1400px] mx-auto w-full">
        
        {/* Small Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm md:text-base uppercase tracking-[0.25em] text-[var(--fg-primary)]/80 font-bold mb-4"
        >
          ABOUT US
        </motion.div>

        {/* Large Bleed Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-5xl lg:text-55 font-light tracking-tight text-[var(--fg-primary)] max-w-5xl leading-[1.15] mb-16"
        >
          Shaping the Future of Architecture with Innovation, Precision, and Timeless Design
        </motion.h2>

        {/* Three Columns (Vision, Mission, Value) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 border-b border-[var(--border-white-10)] pb-16 mb-16"
        >
          {/* Vision */}
          <div className="flex flex-col">
            <h3 className="text-lg font-medium text-[var(--text-white)] mb-3">Our Vision</h3>
            <p className="text-sm md:text-15 text-[var(--text-white)]/70 font-light leading-relaxed">
              To redefine modern architecture by creating inspiring, sustainable, and functional spaces that shape the future.
            </p>
          </div>

          {/* Mission */}
          <div className="flex flex-col">
            <h3 className="text-lg font-medium text-[var(--text-white)] mb-3">Our Mission</h3>
            <p className="text-sm md:text-15 text-[var(--text-white)]/70 font-light leading-relaxed">
              To deliver innovative, client-focused architectural solutions that blend aesthetics, efficiency, and environmental responsibility.
            </p>
          </div>

          {/* Core Value */}
          <div className="flex flex-col">
            <h3 className="text-lg font-medium text-[var(--text-white)] mb-3">Core Value</h3>
            <p className="text-sm md:text-15 text-[var(--text-white)]/70 font-light leading-relaxed">
              To uphold innovation, sustainability, excellence, and collaboration in every project, ensuring timeless design and meaningful impact.
            </p>
          </div>
        </motion.div>

        {/* Bottom Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column (spans 3 grid columns on md+) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-3 flex flex-col"
          >
            <p className="text-sm md:text-15 text-[var(--text-white)]/80 font-light leading-relaxed mb-8">
              At Maskan, we believe architecture is more than just constructing spaces—it's about crafting experiences, fostering connections, and leaving a lasting impact.
            </p>
            <div className="relative aspect-[3/5] w-full overflow-hidden bg-[var(--bg-white-5)] group">
              <Image
                src={Image1}
                alt="Maskan Interior Corridor"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
          </motion.div>

          {/* Middle Column (spans 3 grid columns on md+) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-3 flex flex-col md:pt-16"
          >
            <div className="relative aspect-[3/5] w-full overflow-hidden bg-[var(--bg-white-5)] mb-6 group">
              <Image
                src={Image2}
                alt="Maskan Architectural Structure"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
            <p className="text-xs md:text-sm text-[var(--text-white)]/70 font-light leading-relaxed">
              With a deep commitment to creativity, sustainability, and functionality, our expert team transforms ideas into extraordinary built environments.
            </p>
          </motion.div>

          {/* Right Column (spans 6 grid columns on md+) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:col-span-6 flex flex-col"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--bg-white-5)] mb-6 group">
              <Image
                src={Image3}
                alt="Maskan Premium Living Space"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <p className="text-xs md:text-sm text-[var(--text-white)]/70 font-light leading-relaxed mb-8">
              From visionary residential designs to groundbreaking commercial spaces, we seamlessly blend artistry with practicality. Every project we undertake is a testament to our passion for design excellence, meticulous attention to detail, and client-centered approach.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-[var(--fg-primary)] text-[var(--bg-primary)] text-xs uppercase tracking-widest font-semibold hover:bg-[var(--fg-primary)]/90 transition-all duration-300 cursor-pointer">
                MORE ABOUT US
              </button>
              <button className="px-6 py-3 bg-[#C87A53] text-[var(--text-white)] text-xs uppercase tracking-widest font-semibold hover:bg-[#C87A53]/90 transition-all duration-300 flex items-center gap-2 group cursor-pointer">
                OUR WORKS {arrowIcon}
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
