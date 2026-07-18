"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function SeoContent() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="w-full py-12 md:py-20 bg-[var(--bg-primary)] text-[var(--fg-primary)] flex justify-center border-t border-[var(--fg-primary)]/10">
      <div className="w-[95%] max-w-[1200px] flex flex-col gap-6">

        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          One of the Best Builders in Kerala
        </h2>

        <div className="text-base md:text-lg font-light text-[var(--fg-primary)]/80 leading-relaxed flex flex-col gap-4">
          <p>
            Maskan Builders is one of the best builders in Kerala, with 17+ years of experience delivering residential and commercial projects across the state. We handle projects of every scale, from individual custom villas to large multi-unit developments and commercial complexes, with the same commitment to quality and on-time delivery, and the capacity to take on 100+ projects at a time.
          </p>
          <p>
            As one of the best builders in Kerala, we offer end-to-end services including residential construction, commercial construction, structural work, and project management — all focused on delivering real, lasting value for our clients.
          </p>
          <p>
            To date, we've completed 750+ projects for clients across Kerala, including our ongoing developments at Meridian Heights (Perinthalmanna) and Kakanad Commercial Hub — with 25+ projects currently in progress statewide.
          </p>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="self-start text-base font-bold text-[var(--fg-primary)] underline underline-offset-4 decoration-[var(--fg-primary)]/50 hover:decoration-[var(--fg-primary)] transition-all mt-2 cursor-pointer"
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
                <h3 className="text-xl md:text-2xl font-semibold">Why Choose Maskan as Your Construction Partner in Kerala</h3>
                <ul className="flex flex-col gap-4 text-base md:text-lg font-light text-[var(--fg-primary)]/80 leading-relaxed pl-5 list-disc marker:text-[var(--fg-primary)]/50">
                  <li><strong>A Compelling Portfolio:</strong> Our proven track record speaks for itself. We've helped businesses and homeowners of all sizes across Malappuram, Kochi, and all of Kerala achieve significant transformations.</li>
                  <li><strong>Experienced Team:</strong> Our team is comprised of passionate and experienced builders and engineers. We stay ahead of the curve with the latest construction technologies and methods.</li>
                  <li><strong>Client-Centric:</strong> We take the time to understand your unique needs and lifestyle, ensuring full transparency from initial concept to final handover.</li>
                  <li><strong>Uncompromising Quality:</strong> We source premium materials and employ skilled craftsmen to ensure lasting value and durability, project after project.</li>
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-xl md:text-2xl font-semibold">Our Construction Services in Kerala</h3>
                <p className="text-base md:text-lg font-light text-[var(--fg-primary)]/80 leading-relaxed">
                  Looking for construction services in Kerala that actually deliver results? Maskan's team uses advanced planning, strategic material selection, and rigorous site management to boost your property's value and durability. From local residences in Malappuram to state-wide commercial developments across all of Kerala, we build where it matters most.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-xl md:text-2xl font-semibold">Construction Company in Kerala</h3>
                <p className="text-base md:text-lg font-light text-[var(--fg-primary)]/80 leading-relaxed">
                  As a leading construction company in Kerala, Maskan builds custom, high-performance structures using modern technologies and sustainable practices. Whether you need a commercial plaza, a corporate office, or a complex residential villa, our team in Malappuram delivers highly-functional solutions that stand the test of time. We also offer project management services across Kerala.
                </p>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
