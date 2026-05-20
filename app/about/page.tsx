"use client";

import React from "react";
import NavBar from "@/components/Client/NavBar";
import Footer from "@/sections/Footer/Server";
import Introduction from "@/sections/Introduction";
import { motion } from "motion/react";
import Image from "next/image";
import BannerImage from "@/public/about.avif";
import HowWeWork from "@/sections/HowWeWork";
import WhyChooseUs from "@/sections/WhyChooseUs";
import FAQ from "@/sections/FAQ";
import SeoContent from "@/sections/SeoContent";
import Form from "@/sections/Form";

export default function AboutPage() {
  return (
    <main className="bg-[var(--bg-primary)] text-[var(--fg-primary)] min-h-screen overflow-x-hidden">
      <NavBar />
      
      {/* 1. Header Banner Redesigned to Immersive Titen Lookbook Style */}
      <div className="relative h-[80vh] md:h-[90vh] w-full flex items-end overflow-hidden">
        {/* Background Image with Dark Vignette Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <Image 
            src={BannerImage} 
            alt="maskan-about-banner" 
            fill 
            priority
            className="object-cover brightness-[0.7] contrast-[1.05]"
          />
          {/* Lite black overlay to keep high contrast and neutralize the bright image ceiling */}
          <div className="absolute inset-0 bg-black/40 z-[1]" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 w-full px-6 md:px-16 pb-10 md:pb-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            {/* Left Column: Big Bold Title */}
            <div className="md:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.24, 0.43, 0.15, 0.97] }}
                className="space-y-4"
              >
                <span className="text-[var(--accent)] text-xs uppercase tracking-[0.3em] font-semibold block font-mono">
                  Who We Are
                </span>
                <h1 className="text-5xl md:text-[85px] font-extralight tracking-tight text-white leading-[0.95]">
                  About <br />
                  <span className="font-normal text-white">Studios.</span>
                </h1>
              </motion.div>
            </div>
            
            {/* Right Column: Paragraph Context */}
            <div className="md:col-span-5 flex md:justify-end">
              <motion.p 
                className="text-sm md:text-base text-white/80 max-w-sm font-light leading-relaxed tracking-wide text-left"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.24, 0.43, 0.15, 0.97] }}
              >
                Whether designing homes, commercial spaces, or urban landscapes, we focus on crafting environments that enrich lives and stand the test of time.
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Introduction Section from page.tsx */}
      <Introduction />

      {/* 3. How We Work Section */}
      <HowWeWork />

      {/* 4. Why Choose Us Section */}
      <WhyChooseUs />

      {/* 5. FAQ Section */}
      <FAQ />
      
      <SeoContent />

      {/* 6. Form Section */}
      <Form />

      <Footer />
    </main>
  );
}
