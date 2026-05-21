"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import WhyChooseUsImage from "@/public/why_choose_us_sofa.png";
import Team1 from "@/public/F1.avif";
import Team2 from "@/public/property-2.jpg";
import Team3 from "@/public/property-4.jpg";

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 md:py-28 px-6 md:px-16 border-b border-[var(--border-white-5)]">
      <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-[var(--accent)] font-mono text-xs uppercase tracking-[0.3em] font-semibold block">
            // Why choose us
          </span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-[var(--text-white)] leading-[1.1] uppercase">
            Design you can trust, <br className="hidden md:block" /> every step
          </h2>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Corner-Clipped Image */}
          <motion.div 
            className="lg:col-span-5 relative w-full min-h-[400px] lg:min-h-full overflow-hidden shadow-2xl bg-[var(--bg-primary)] border border-[var(--border-white-10)]"
            style={{ 
              clipPath: "polygon(0 0, 88% 0, 100% 12%, 100% 100%, 0 100%)"
            }}
            initial={{ opacity: 0, scale: 0.98, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image 
              src={WhyChooseUsImage} 
              alt="Maskan construction project exterior" 
              fill
              priority
              className="object-cover transition-transform duration-700 ease-out hover:scale-103 brightness-[0.95]"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </motion.div>

          {/* Right Column: Dynamic Sub-Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 border-t lg:border-t-0 lg:border-l border-[var(--border-white-10)]">
            
            {/* Row 1, Left Cell: Selected Designers */}
            <div className="p-8 md:p-10 border-b border-[var(--border-white-10)] md:border-r flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <h3 className="text-xl font-normal tracking-wide text-[var(--text-white)]">
                  Selected designers
                </h3>
                <p className="text-xs md:text-sm text-[var(--text-white)]/60 font-light leading-relaxed">
                  Every project is led by experienced interior designers.
                </p>
              </div>
              <div className="flex items-baseline space-x-2">
                <span className="text-4xl md:text-5xl font-light text-[var(--text-white)] font-mono leading-none">25+</span>
                <span className="text-xs uppercase tracking-wider text-[var(--text-white)]/50 font-mono">Designers</span>
              </div>
            </div>

            {/* Row 1, Right Cell: Happy Clients (Avatars) */}
            <div className="p-8 md:p-10 border-b border-[var(--border-white-10)] flex flex-col justify-between space-y-6">
              {/* Avatars */}
              <div className="flex items-center space-x-[-12px]">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[var(--bg-primary)] shadow-md z-[3]">
                  <Image src={Team1} alt="Happy client 1" fill className="object-cover" />
                </div>
                <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[var(--bg-primary)] shadow-md z-[2]">
                  <Image src={Team2} alt="Happy client 2" fill className="object-cover" />
                </div>
                <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[var(--bg-primary)] shadow-md z-[1]">
                  <Image src={Team3} alt="Happy client 3" fill className="object-cover" />
                </div>
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-[var(--text-white)]/50 font-mono block">More than 2K</span>
                <span className="text-lg font-light text-[var(--text-white)] tracking-wide">happy clients</span>
              </div>
            </div>

            {/* Row 2, Left Cell: Thoughtful Process */}
            <div className="p-8 md:p-10 border-b md:border-b-0 border-[var(--border-white-10)] md:border-r flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <h3 className="text-xl font-normal tracking-wide text-[var(--text-white)]">
                  Thoughtful process
                </h3>
                <p className="text-xs md:text-sm text-[var(--text-white)]/60 font-light leading-relaxed">
                  Clear workflows & structured milestones ensure best designs.
                </p>
              </div>
              <div className="flex items-baseline space-x-2">
                <span className="text-4xl md:text-5xl font-light text-[var(--text-white)] font-mono leading-none">95%</span>
                <span className="text-xs uppercase tracking-wider text-[var(--text-white)]/50 font-mono">Satisfaction</span>
              </div>
            </div>

            {/* Row 2, Right Cell: Stacked Reliable Delivery & Spaces That Last Dark Box */}
            <div className="flex flex-col h-full">
              {/* Upper Half: Reliable Delivery */}
              <div className="p-8 md:p-10 border-b border-[var(--border-white-10)] flex-1">
                <div className="space-y-3">
                  <h3 className="text-xl font-normal tracking-wide text-[var(--text-white)]">
                    Reliable delivery
                  </h3>
                  <p className="text-xs md:text-sm text-[var(--text-white)]/60 font-light leading-relaxed">
                    Timelines, budgets, and expectations are clearly defined.
                  </p>
                </div>
              </div>
              
              {/* Lower Half: Dark contrast box */}
              <motion.div 
                className="bg-[#161B18] p-8 md:p-10 flex flex-col justify-between space-y-6 relative overflow-hidden group cursor-pointer"
                whileHover="hover"
              >
                <div className="space-y-3 relative z-10">
                  <h3 className="text-xl font-normal tracking-wide text-white">
                    Spaces that last
                  </h3>
                  <p className="text-xs md:text-sm text-white/60 font-light leading-relaxed">
                    We design interiors that age well & adapt to real life.
                  </p>
                </div>
                {/* Floating bottom-right arrow */}
                <div className="flex justify-end pr-2 pb-2 relative z-10">
                  <motion.div
                    variants={{
                      hover: { x: 5, y: -5 }
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="text-white text-3xl font-light leading-none"
                  >
                    ↗
                  </motion.div>
                </div>
                {/* Premium subtle hover light reflection background */}
                <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
