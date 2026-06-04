"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import Image1 from "@/public/about 1.avif";
import Image2 from "@/public/about 5.avif";
import Image3 from "@/public/about 4.avif";

export default function IntroductionServer({ noTopPadding = false }: { noTopPadding?: boolean }) {
  return (
    <section id="about" className={`relative bg-[var(--bg-primary)] ${noTopPadding ? "pt-5" : "pt-20 md:pt-28"} pb-20 md:pb-32 px-6 md:px-16 w-full`}>
      <div className="max-w-[1400px] mx-auto w-full flex flex-col items-center justify-center text-center px-4">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center justify-center max-w-5xl"
        >
          {/* Small Tagline */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-[1px] bg-[var(--fg-primary)]/30" />
            <span className="text-xs md:text-sm font-medium tracking-[0.25em] uppercase text-[var(--fg-primary)]/70">
              Who We Are
            </span>
            <div className="w-12 h-[1px] bg-[var(--fg-primary)]/30" />
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-[4.5rem] font-light text-[var(--fg-primary)] leading-[1.1] mb-10 tracking-tight">
            We Are Your Trusted Partner in Finding the Perfect <span className="font-semibold italic">Architectural Solutions.</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-[var(--fg-primary)]/70 leading-[1.6] font-light mb-12 max-w-3xl">
            At Maskan, we specialize in delivering premium architectural and interior design services tailored to building, renovating, and styling properties. With a commitment to transparency and excellence, we help you navigate the construction journey with confidence and peace of mind. Whether you're an investor, a business owner, or a homeowner, we're here to build the perfect space for you.
          </p>
          <Link
            href="/about"
            className="w-fit px-10 py-4 border border-[var(--fg-primary)]/20 rounded-full text-[var(--fg-primary)] text-sm md:text-base uppercase tracking-widest font-semibold hover:bg-[var(--fg-primary)] hover:text-[var(--bg-primary)] transition-all duration-300 shadow-sm"
          >
            Discover More
          </Link>
        </motion.div>
      </div>

      {/* 3 Image and Content Grid (Appended below) */}
      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-start mt-24">

        {/* Left Column (spans 3 grid columns on md+) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-3 flex flex-col"
        >
          <p className="text-sm md:text-15 text-[var(--fg-primary)]/80 font-light leading-relaxed mb-8">
            At Maskan, we believe architecture is more than just constructing spaces—it's about crafting experiences, fostering connections, and leaving a lasting impact.
          </p>
          <div className="relative aspect-[3/5] w-full overflow-hidden bg-[var(--fg-primary)]/5 group rounded-none shadow-lg border border-[var(--fg-primary)]/5">
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
          <div className="relative aspect-[3/5] w-full overflow-hidden bg-[var(--fg-primary)]/5 mb-6 group rounded-none shadow-lg border border-[var(--fg-primary)]/5">
            <Image
              src={Image2}
              alt="Maskan Architectural Structure"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </div>
          <p className="text-xs md:text-sm text-[var(--fg-primary)]/70 font-light leading-relaxed">
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
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--fg-primary)]/5 mb-6 group rounded-none shadow-lg border border-[var(--fg-primary)]/5">
            <Image
              src={Image3}
              alt="Maskan Premium Living Space"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <p className="text-xs md:text-sm text-[var(--fg-primary)]/70 font-light leading-relaxed mb-8">
            From visionary residential designs to groundbreaking commercial spaces, we seamlessly blend artistry with practicality. Every project we undertake is a testament to our passion for design excellence, meticulous attention to detail, and client-centered approach.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-[var(--fg-primary)] text-[var(--bg-primary)] text-xs uppercase tracking-widest font-semibold hover:bg-[var(--fg-primary)]/90 transition-all duration-300 rounded-full cursor-pointer shadow-sm">
              MORE ABOUT US
            </button>
            <button className="px-6 py-3 border-2 border-[var(--fg-primary)]/20 text-[var(--fg-primary)] text-xs uppercase tracking-widest font-semibold hover:bg-[var(--fg-primary)] hover:text-[var(--bg-primary)] transition-all duration-300 rounded-full flex items-center gap-2 group cursor-pointer shadow-sm">
              OUR WORKS
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
