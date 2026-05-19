"use client";
import React from "react";
import * as motion from "motion/react-client";

export default function IntroductionServer() {
  return (
    <section id="about" className="relative bg-[#16221C] border-b border-white/5 overflow-hidden h-auto py-16 md:py-24 flex flex-col">

      {/* ── FULL-BLEED VIDEO BACKDROP ─────────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover scale-105"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/SliderCentral.mp4" type="video/mp4" />
        </video>
        {/* Layered tinting system */}
        <div className="absolute inset-0 bg-[#1a2420]/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#16221C]/90 via-transparent to-[#16221C]/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#16221C]/60 via-transparent to-[#16221C]/40" />
      </div>

      {/* ── TOP META BAR ─────────────────────────────────────────────── */}
      <motion.div
        className="relative z-10 flex justify-between items-center px-6 md:px-12 lg:px-16 py-5 border-b border-white/[0.06]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#DCD4C4]/40" />
          <span className="text-[9px] uppercase tracking-[0.35em] text-white/30 font-bold">About Maskan</span>
        </div>
        <span className="text-[9px] uppercase tracking-[0.35em] text-white/20 font-bold hidden md:block">
          Est. 2018 · Pakistan
        </span>
      </motion.div>

      {/* ── HERO AREA: Overflowing display type ──────────────────────── */}
      <div className="relative z-10 flex-1 flex flex-col justify-start gap-6 md:gap-8 px-6 md:px-12 lg:px-16 pt-12 md:pt-16 pb-8 overflow-hidden">
        
        {/* Gigantic bleed headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            className="font-extralight text-white leading-[0.9] tracking-[-0.04em] select-none"
            style={{ fontSize: "clamp(3.5rem, 12vw, 11rem)" }}
          >
            About
          </h2>
          <h2
            className="font-extralight text-[#DCD4C4]/20 leading-[0.9] tracking-[-0.04em] select-none -mt-1 md:-mt-2"
            style={{ fontSize: "clamp(3.5rem, 12vw, 11rem)" }}
          >
            Maskan.
          </h2>
        </motion.div>
        
        {/* ── NARRATIVE & STATS ROW (NO BOXES) ────────────────────────────── */}
        {/* ── NARRATIVE & STATS (SINGLE COLUMN) ────────────────────────────── */}
        <motion.div
          className="flex flex-col gap-10 mt-4 md:mt-6 max-w-5xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Combined Paragraph */}
          <div className="flex flex-col gap-6">
            <p className="text-[#DCD4C4]/80 text-base md:text-lg lg:text-xl font-light leading-[1.85]">
              At Maskan, we believe in delivering unprecedented capital reach and efficiency to the Design and Build sector. Our vision is to serve as the definitive first-choice partner for commercial and institutional clients seeking smart, sustainable, and highly optimized spaces through unique payment timelines that relieve the upfront capital demands of traditional construction. Guided by a strict commitment to absolute integrity, time-boundedness, uncompromising quality, and extreme efficiency, we convert complex architectural investments into exceptionally organized, stress-free journeys from the first blueprint to the final handover.
            </p>
          </div>

          {/* Stats Row Below Paragraph */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 pt-8 border-t border-white/[0.08]">
            {[
              { value: "750K+", label: "Sq. Ft. Built" },
              { value: "7,000+", label: "Designs" },
              { value: "1,700+", label: "Expert Staff" },
            ].map((stat, i) => (
              <div key={stat.label} className="flex flex-col gap-2">
                <span className="text-4xl md:text-5xl font-extralight text-white leading-none tracking-tight">
                  {stat.value}
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#DCD4C4]/40 font-bold">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── BOTTOM MARQUEE TICKER ─────────────────────────────────────── */}
      <div className="relative z-10 border-t border-white/[0.06] overflow-hidden py-3">
        <motion.div
          className="flex gap-16 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16 shrink-0">
              {["Building Excellence", "Design & Build", "750K+ Sq Ft", "Est. 2018", "Pakistan", "Smart Construction", "7,000+ Designs", "Expert Builders", "Maskan Builders"].map((item) => (
                <span key={item} className="text-[9px] uppercase tracking-[0.3em] text-white/15 font-bold">
                  {item} <span className="text-white/10 mx-2">·</span>
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
