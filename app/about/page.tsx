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
      
      {/* 1. Header Banner Redesigned to Immersive Rounded Layout */}
      <div className="px-4 md:px-6 pt-4 pb-12">
        <section className="relative h-[50vh] md:h-[60vh] w-full flex items-center overflow-hidden rounded-[2.5rem] bg-gray-900">
          {/* Background Image with Dark Vignette Overlay */}
          <div className="absolute inset-0 w-full h-full">
            <Image 
              src={BannerImage} 
              alt="maskan-about-banner" 
              fill 
              priority
              className="object-cover brightness-[0.8] contrast-[1.05]"
            />
            {/* Lite black overlay to keep high contrast and neutralize the bright image ceiling */}
            <div className="absolute inset-0 bg-black/30 z-[1]" />
          </div>

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
                  <span className="text-white text-xs uppercase tracking-[0.3em] font-semibold block font-mono drop-shadow-md">
                    Who We Are
                  </span>
                  <h1 className="text-5xl md:text-[60px] lg:text-[70px] xl:text-[85px] font-extralight tracking-tight text-white leading-[0.95] drop-shadow-lg">
                    About <br />
                    <span className="font-normal text-white">Maskan.</span>
                  </h1>
                </motion.div>
              </div>
              
              {/* Right Column: Paragraph Context */}
              <div className="md:col-span-5 flex md:justify-end">
                <motion.p 
                  className="text-sm md:text-base text-white/90 max-w-sm font-light leading-relaxed tracking-wide text-left drop-shadow-md"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.15, ease: [0.24, 0.43, 0.15, 0.97] }}
                >
                  Whether it&apos;s a single villa, a large residential community, or a commercial complex, we focus on building spaces that stand the test of time, and the trust of the people who live and work in them.
                </motion.p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 2. Introduction Section from page.tsx */}
      <Introduction />

      {/* 2.5 Core Values Section */}
      <section className="py-16 md:py-24 px-6 md:px-16 bg-[var(--bg-primary)]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col mb-16 text-center md:text-left">
            <span className="text-sm tracking-[0.25em] uppercase text-[var(--fg-primary)]/50 mb-4 font-mono">What Drives Us</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[var(--fg-primary)] leading-tight tracking-tight mb-4">Our Core Values</h2>
            <p className="text-lg text-[var(--fg-primary)]/70 max-w-2xl font-light">The principles that have guided every site we&apos;ve built for 17+ years.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-semibold text-[var(--fg-primary)]">Integrity</h3>
              <p className="text-[var(--fg-primary)]/70 font-light leading-relaxed">We do what we say we&apos;ll do. Honest estimates, honest timelines, and honest communication, even when the news isn&apos;t what a client wants to hear.</p>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-semibold text-[var(--fg-primary)]">Quality Without Compromise</h3>
              <p className="text-[var(--fg-primary)]/70 font-light leading-relaxed">Every project, big or small, gets the same standard of materials, engineering, and craftsmanship, whether it&apos;s a single villa or a 100+ unit development.</p>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-semibold text-[var(--fg-primary)]">Client-First Execution</h3>
              <p className="text-[var(--fg-primary)]/70 font-light leading-relaxed">We treat every client&apos;s project like our own, staying accessible, transparent, and responsive from the first site visit to final handover.</p>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-semibold text-[var(--fg-primary)]">Timely Delivery</h3>
              <p className="text-[var(--fg-primary)]/70 font-light leading-relaxed">We respect deadlines. Rigorous planning and site management mean projects move on schedule, not on excuses.</p>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-semibold text-[var(--fg-primary)]">Scale With Care</h3>
              <p className="text-[var(--fg-primary)]/70 font-light leading-relaxed">With the capacity to handle 100+ projects at a time across Kerala, we&apos;ve grown without losing the personal attention every client deserves.</p>
            </div>

          </div>
        </div>
      </section>

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
