"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function SeoContent() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="w-full py-12 md:py-20 bg-[var(--bg-primary)] text-[var(--fg-primary)] flex justify-center border-t border-[var(--fg-primary)]/10">
      <div className="w-[95%] max-w-[1200px] flex flex-col gap-6">
        
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Best Architecture & Interior Design Firm in Kozhikode, Kerala
        </h2>
        
        <div className="text-sm md:text-base font-light text-[var(--fg-primary)]/80 leading-relaxed flex flex-col gap-4">
          <p>
            Maskan is a premium architecture and interior design firm based in Kozhikode (Calicut), Kerala. We combine creative vision with practical execution to help homeowners and ambitious businesses achieve real, measurable transformations — not just aesthetic upgrades.
          </p>
          <p>
            As the best architecture company in Kerala, we offer comprehensive services including residential design, commercial architecture, interior detailing, landscape design, and project management — all with a laser focus on maximizing the utility and beauty of your space.
          </p>
          <p>
            To date, we have completed over 600+ premium projects for our clients including top brands and residential properties across Kerala and beyond.
          </p>
        </div>

        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="self-start text-sm font-bold text-[var(--fg-primary)] underline underline-offset-4 decoration-[var(--fg-primary)]/50 hover:decoration-[var(--fg-primary)] transition-all mt-2 cursor-pointer"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden flex flex-col gap-12 mt-4"
            >
              
              <div className="flex flex-col gap-4 pt-6 border-t border-[var(--fg-primary)]/10">
                <h3 className="text-xl md:text-2xl font-semibold">Why Choose Maskan as Your Design Partner in Kerala</h3>
                <ul className="flex flex-col gap-4 text-sm md:text-base font-light text-[var(--fg-primary)]/80 leading-relaxed pl-5 list-disc marker:text-[var(--fg-primary)]/50">
                  <li><strong>A Compelling Portfolio:</strong> Our proven track record speaks for itself. We've helped businesses and homeowners of all sizes across Kozhikode, Malappuram, and all of Kerala achieve significant transformations.</li>
                  <li><strong>Experienced Team:</strong> Our team is comprised of passionate and experienced architects and designers. We stay ahead of the curve with the latest trends and technologies.</li>
                  <li><strong>Client-Centric:</strong> We take the time to understand your unique business needs and lifestyle, whether you're based in Kozhikode, Malappuram, or anywhere across Kerala.</li>
                  <li><strong>Data-Driven Decisions:</strong> Every decision we make is backed by deep research and analytics, allowing us to constantly optimize your space for maximum impact.</li>
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-xl md:text-2xl font-semibold">Our Interior Design Services in Kerala</h3>
                <p className="text-sm md:text-base font-light text-[var(--fg-primary)]/80 leading-relaxed">
                  Looking for interior design services in Kerala that actually deliver results? Maskan's design team uses advanced space planning, strategic material selection, and premium furnishings to boost your property's value and appeal. From local residences in Kozhikode to state-wide commercial campaigns across all of Kerala, we build where it matters most.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-xl md:text-2xl font-semibold">Architecture Company in Kerala</h3>
                <p className="text-sm md:text-base font-light text-[var(--fg-primary)]/80 leading-relaxed">
                  As a leading architecture company in Kerala, Maskan builds custom, high-performance structures using modern technologies and sustainable practices. Whether you need a commercial plaza, a corporate office, or a complex residential villa, our development team in Kozhikode delivers pixel-perfect, highly-functional solutions that turn visitors into long-term occupants. We also offer project management services in Malappuram and across Kerala.
                </p>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
