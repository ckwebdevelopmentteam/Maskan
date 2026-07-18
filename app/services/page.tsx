"use client";

import React from "react";
import NavBar from "@/components/Client/NavBar";
import Footer from "@/sections/Footer/Server";
import ServicesIntro from "@/sections/ServicesIntro";
import ServicesHero from "@/sections/ServicesHero";
import Process from "@/sections/Process";
import ElementisStory from "@/sections/ElementisStory";
import CTA from "@/sections/CTA";


/* ─────────────────────────── PAGE ─────────────────────────── */

export default function ServicesPage() {
  return (
    <main className="bg-[var(--bg-primary)] text-[var(--fg-primary)] min-h-screen overflow-x-hidden">
      <NavBar />

      {/* ── 1. HERO BANNER ── */}
      <ServicesHero />

      {/* ── 2. INTRO ── */}
      <ServicesIntro />

      {/* ── 3. ROW-BASED EDITORIAL SERVICES REVEAL ── */}
      <ElementisStory />

      {/* ── 4. SIMPLE PROCESS STUNNING TRANSFORMATIONS ── */}
      <Process />

      {/* ── 6. CTA ── */}
      <CTA />

      {/* ── 7. FOOTER ── */}
      <Footer />
    </main >
  );
}
