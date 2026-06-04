"use client";

import React from "react";
import NavBar from "@/components/Client/NavBar";
import Footer from "@/sections/Footer/Server";
import FAQ from "@/sections/FAQ";
import Form from "@/sections/Form";
import ClientTestimonials from "@/sections/ClientTestimonials";
import ServicesIntro from "@/sections/ServicesIntro";
import ServicesHero from "@/sections/ServicesHero";
import Process from "@/sections/Process";
import { motion } from "motion/react";
import Image from "next/image";

/* ─────────────────────────── DATA ─────────────────────────── */

const services = [
  {
    id: "01",
    title: "Residential Construction & Villas",
    desc: "We construct elite private homes and residential villas designed in harmony with universal Vastu laws, thermal-insulated concrete structures, and natural stone finishes. Every phase is meticulously managed from deep foundations to custom architectural facades.",
    bullets: [
      "Universal & Vastu Architecture",
      "Seismic-Compliant Foundation Casts",
      "Insulated Concrete Wall Panels",
      "Bespoke Premium Teak Woodworking",
    ],
    budget: "₹50L – ₹5Cr",
    duration: "6–18 months",
    image: "/luxury_villa_render.png",
  },
  {
    id: "02",
    title: "Commercial Complexes & Malls",
    desc: "Our commercial division builds modern business complexes, multiplexes, trade towers, and retail plazas engineered for maximum spatial efficiency and commercial performance.",
    bullets: [
      "Wide-Span Post-Tensioned Slabs",
      "Industrial Steel Framing",
      "Central HVAC & Fire-Suppression Prep",
      "High-Performance Solar-Glass Facades",
    ],
    budget: "₹1Cr – ₹50Cr",
    duration: "12–36 months",
    image: "/commercial_complex_render.png",
  },
];



const whyPoints = [
  {
    title: "15+ Years of Expertise",
    desc: "Over a decade and a half of delivering high-quality architecture and construction projects across Kerala and beyond.",
  },
  {
    title: "Clear Communication",
    desc: "A dedicated project manager, weekly updates, and an open-door policy. You'll never be left wondering what's happening.",
  },
  {
    title: "Guaranteed Work",
    desc: "Every project comes with a written workmanship guarantee. If something isn't right, we make it right — no arguments, no excuses.",
  },
];

/* ─────────────────────────── PAGE ─────────────────────────── */

export default function ServicesPage() {
  return (
    <main className="bg-[var(--bg-primary)] text-[var(--fg-primary)] min-h-screen overflow-x-hidden">
      <NavBar />

      {/* ── 1. HERO BANNER ── */}
      <ServicesHero />

      {/* ── 2. INTRO ── */}
      <ServicesIntro />

      {/* ── 2. ROW-BASED EDITORIAL SERVICES REVEAL ── */}
      <section className="px-6 md:px-16 max-w-[1400px] mx-auto pb-32 pt-16">
        {/* Screenshot Style Header */}
        <div className="flex flex-col mb-16">
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-[var(--fg-primary)]/40 mb-3">
            WHAT WE DO
          </span>
          <h2 className="text-4xl md:text-[3.5rem] font-light tracking-tight text-[var(--fg-primary)] leading-[1.1]">
            Our Services
          </h2>
        </div>

        {/* Row Entries Container */}
        <div className="flex flex-col border-t border-[var(--fg-primary)]/10">
          {services.map((s, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={s.id}
                className="py-16 md:py-24"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
                  
                  {/* TEXT CONTENT */}
                  <div className={`flex flex-col gap-6 ${!isEven ? 'md:order-last' : ''}`}>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--fg-primary)] tracking-tight">
                      {s.title}
                    </h3>
                    
                    <p className="text-sm md:text-base text-[var(--fg-primary)]/80 font-light leading-relaxed">
                      {s.desc}
                    </p>

                    <ul className="flex flex-col gap-3 mt-4">
                      {s.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-3 text-sm text-[var(--fg-primary)]/80 font-light leading-snug"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[var(--fg-primary)]/60 flex-shrink-0 mt-1.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* IMAGE CONTENT */}
                  <div className="relative w-full aspect-[4/3] md:aspect-[3/2] overflow-hidden group">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── 3. WHY CHOOSE MASKAN ── */}
      <section className="px-6 md:px-16 py-24 md:py-32 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left */}
          <motion.div
            className="flex flex-col gap-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05] tracking-tight">
              Your space deserves more than a contractor. It deserves a team that cares.
            </h2>
            <div className="flex flex-col gap-6">
              {whyPoints.map((pt) => (
                <div key={pt.title} className="flex gap-4 border-l-2 border-[var(--fg-primary)]/20 pl-5">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-semibold">{pt.title}</span>
                    <span className="text-sm text-[var(--fg-primary)]/60 font-light leading-relaxed">{pt.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Stacked images */}
          <motion.div
            className="flex flex-col gap-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden ml-auto md:w-[85%]">
              <Image src="/why_choose_us_sofa.png" alt="Interior space" fill className="object-cover" />
            </div>
            <div className="relative w-full aspect-[4/3] overflow-hidden mr-auto md:w-[85%]">
              <Image src="/design_process_sofa.png" alt="Dining space" fill className="object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 4. SIMPLE PROCESS STUNNING TRANSFORMATIONS ── */}
      <Process />

      {/* ── 5. TESTIMONIALS ── */}
      <ClientTestimonials />

      {/* ── 6. FAQ ── */}
      <FAQ />

      {/* ── 6. FORM ── */}
      <Form />

      {/* ── 7. FOOTER ── */}
      <Footer />
    </main>
  );
}
