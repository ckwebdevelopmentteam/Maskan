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
  {
    id: "03",
    title: "Hospitality & Healthcare Builds",
    desc: "Experienced in constructing specialized clinic layouts and luxury hospitality spaces that conform to state-of-the-art medical zoning and high-traffic customer flows.",
    bullets: [
      "Infection-Control Surface Curing",
      "Specialized Clinical Grid Systems",
      "Professional Commercial Kitchen Spaces",
      "Soundproof Multi-Zone Guest Rooms",
    ],
    budget: "₹80L – ₹20Cr",
    duration: "8–24 months",
    image: "/hospitality_sanctuary_render.png",
  },
  {
    id: "04",
    title: "3D Design & Space Planning",
    desc: "Our in-house design consultants deliver detailed spatial planning, 3D structural modeling, and interior moodboards designed to enhance residential wellness and commercial functionality.",
    bullets: [
      "Immersive 3D Spatial Walkthroughs",
      "Exterior Elevation Blueprint Maps",
      "Integrated Interior Design Moods",
      "Detailed CAD Material Specifications",
    ],
    budget: "₹50K – ₹5L",
    duration: "2–6 weeks",
    image: "/ImageContainer/image-1.png",
  },
  {
    id: "05",
    title: "Custom Lighting & Ceilings",
    desc: "Specialization in designing, developing, and installing customized lighting solutions and acoustic suspended ceiling formworks that completely redefine the mood and interior ambience.",
    bullets: [
      "Custom LED Lighting Matrices",
      "Acoustic Suspended Ceiling Panels",
      "Smart Dimming & Scene Automation",
      "Energy-Saving Low-Voltage Pre-Wiring",
    ],
    budget: "₹2L – ₹15L",
    duration: "2–8 weeks",
    image: "/ImageContainer/image-5.png",
  },
  {
    id: "06",
    title: "Bespoke Outdoor Spaces",
    desc: "Bespoke vehicle shelter porches engineered to perform double duty — protecting your premium vehicles while serving as stunning outdoor dining, family gathering, or recreational zones.",
    bullets: [
      "Wind-Resistant Canopy Systems",
      "Outdoor Recessed Lighting & Audio",
      "Bespoke Natural Stone Paving Tiles",
      "Architectural Steel & Wood Cladding",
    ],
    budget: "₹5L – ₹50L",
    duration: "4–12 weeks",
    image: "/Introduction.png",
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
          {services.map((s) => (
            <div
              key={s.id}
              className="border-b border-[var(--fg-primary)]/10 py-16 md:py-20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                
                {/* 1. Left Column: Service info & Actions */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                  <span className="font-mono text-lg font-medium text-[var(--accent)]">
                    {s.id}
                  </span>
                  
                  <h3 className="text-3xl md:text-[2.2rem] font-light leading-tight tracking-tight text-[var(--fg-primary)]">
                    {s.title}
                  </h3>
                  
                  <p className="text-sm md:text-base text-[var(--fg-primary)]/70 font-light leading-relaxed max-w-md">
                    {s.desc}
                  </p>

                  {/* Metadata Specs Footer */}
                  <div className="flex gap-8 pt-4 border-t border-[var(--fg-primary)]/10 w-full text-[11px] md:text-xs">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[9px] text-[var(--accent)] font-semibold tracking-widest uppercase">Budget Frame</span>
                      <span className="font-mono text-[var(--fg-primary)]/80 font-medium">{s.budget}</span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[9px] text-[var(--accent)] font-semibold tracking-widest uppercase">Timeline</span>
                      <span className="font-mono text-[var(--fg-primary)]/80 font-medium">{s.duration}</span>
                    </div>
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-[var(--fg-primary)] text-[var(--bg-primary)] hover:bg-[var(--accent)] hover:text-[var(--bg-primary)] transition-all duration-300 w-fit text-[11px] font-bold tracking-widest uppercase rounded-sm mt-4 shadow-sm"
                  >
                    <span>LEARN MORE</span>
                    <span className="text-sm">↗</span>
                  </a>
                </div>

                {/* 2. Middle Column: Square Image Container */}
                <div className="lg:col-span-4 w-full">
                  <div className="relative aspect-square w-full overflow-hidden border border-[var(--fg-primary)]/10 bg-[var(--fg-primary)]/[0.02] shadow-md group">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-500" />
                  </div>
                </div>

                {/* 3. Right Column: Bullet point checklist */}
                <div className="lg:col-span-3 flex flex-col gap-5 lg:pl-4">
                  <h4 className="text-sm font-semibold tracking-wider text-[var(--fg-primary)]/80 uppercase">
                    Key Point
                  </h4>
                  
                  <ul className="flex flex-col gap-4">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-3.5 text-sm text-[var(--fg-primary)]/80 font-light leading-snug"
                      >
                        {/* Custom Circular Checkmark Icon */}
                        <div className="w-5 h-5 rounded-full bg-[var(--fg-primary)] text-[var(--bg-primary)] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                          <span className="text-[10px] font-bold">✓</span>
                        </div>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}
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
