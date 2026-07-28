"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import ScrollReveal from "@/components/Client/ScrollReveal";
import { Award, ShieldCheck, Clock, Building } from "lucide-react";

const stats = [
  { icon: Building, title: "100+ Projects", desc: "Villas & Commercial Complexes" },
  { icon: ShieldCheck, title: "10-Yr Warranty", desc: "Structural Quality Guarantee" },
  { icon: Clock, title: "On-Time Handover", desc: "Strict Schedule Adherence" },
  { icon: Award, title: "Turnkey Service", desc: "Concept to Final Handover" },
];

export default function ServicesIntro() {
  return (
    <section className="w-full bg-[var(--bg-primary)] overflow-hidden">
      {/* Top Content Container */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-16 pt-12 md:pt-20 pb-8">
        <ScrollReveal className="flex flex-col gap-6 max-w-4xl">
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
            <span className="text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase text-[var(--fg-primary)]/60 font-mono">
              What Service We Offer
            </span>
          </div>

          {/* Large heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-medium leading-[1.1] tracking-tight text-[var(--fg-primary)]">
            End-to-End Construction & Development Solutions
          </h2>

          {/* Body */}
          <p className="text-base sm:text-lg text-[var(--fg-primary)]/70 leading-relaxed font-light max-w-3xl">
            At Maskan Builders, our expertise spans across multiple divisions to bring your project to life from the ground up. Whether it is a single premium villa or a large-scale commercial high-rise, we deliver quality, transparency, and timely execution.
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap pt-2">
            <Link href="/#contact">
              <motion.button
                className="flex items-center gap-2 rounded-full font-semibold uppercase tracking-[0.12em] text-xs sm:text-sm md:text-base px-6 py-3.5 transition-all duration-300 shadow-md hover:opacity-90"
                style={{ backgroundColor: "var(--fg-primary)", color: "var(--bg-primary)" }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
                <span className="text-base leading-none">↗</span>
              </motion.button>
            </Link>

            <a
              href="tel:+917594033300"
              className="flex items-center gap-1.5 text-xs sm:text-sm md:text-base font-semibold uppercase tracking-[0.12em] text-[var(--fg-primary)]/70 hover:text-[var(--fg-primary)] transition-colors duration-300"
            >
              Call Us: +91 75940 33300
              <span className="text-base leading-none">↗</span>
            </a>
          </div>
        </ScrollReveal>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 md:mt-16 pt-8 border-t border-[var(--border-white-5)]">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="flex flex-col gap-2 p-4 sm:p-5 rounded-2xl bg-white border border-gray-200/90 shadow-sm"
              >
                <div className="w-9 h-9 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-[var(--fg-primary)] mb-1">
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-[var(--fg-primary)] tracking-tight">
                  {stat.title}
                </h4>
                <p className="text-xs sm:text-sm text-[var(--fg-primary)]/60 font-light">
                  {stat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
