"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";

export default function ServicesIntro() {
  return (
    <section className="w-full bg-[var(--bg-primary)] overflow-hidden">
      {/* ── Top Content Container ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 pt-16 md:pt-24 pb-4">
        <motion.div
          className="flex flex-col gap-6 max-w-3xl"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          {/* Tag label */}
          <div className="flex items-center gap-2">
            <div
              className="w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0"
              style={{ borderColor: "var(--fg-primary)", opacity: 0.5 }}
            >
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: "var(--fg-primary)" }}
              />
            </div>
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-[var(--fg-primary)]/50">
              What Service We Offer
            </span>
          </div>

          {/* Large heading */}
          <h2
            className="text-3xl md:text-5xl lg:text-[3.4rem] font-medium leading-[1.1] tracking-tight text-[var(--fg-primary)]"
          >
            Transformative Construction Services: Crafting Your Vision, Shaping Timeless Spaces
          </h2>

          {/* Body */}
          <p className="text-sm md:text-base text-[var(--fg-primary)]/55 leading-relaxed font-light max-w-2xl">
            Explore Maskan&apos;s transformative construction services, where architectural excellence meets curated interiors, sustainable solutions, and expert consultations. Our commitment to precision and innovation ensures every space we touch becomes a testament to timeless sophistication. Welcome to a world where your vision takes shape with Maskan&apos;s unparalleled expertise.
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-5 flex-wrap">
            {/* Primary dark button */}
            <Link href="/#contact">
              <motion.button
                className="flex items-center gap-2 rounded-full font-semibold uppercase tracking-[0.12em] text-xs px-6 py-3.5 transition-all duration-300 hover:opacity-80"
                style={{ backgroundColor: "var(--fg-primary)", color: "var(--bg-primary)" }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Get Started
                <span className="text-base leading-none">↗</span>
              </motion.button>
            </Link>

            {/* Secondary text link */}
            <a
              href="tel:+925111162725"
              className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--fg-primary)]/60 hover:text-[var(--fg-primary)] transition-colors duration-300"
            >
              Call Us: +92 51 111 MASKAN
              <span className="text-base leading-none">↗</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

