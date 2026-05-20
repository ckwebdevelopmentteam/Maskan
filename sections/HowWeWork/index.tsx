"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

const steps = [
  {
    num: "01",
    title: "Discover & define",
    desc: "We begin by understanding your space, goals, and lifestyle. Through consultations and site review, we define scope, priorities, and a clear design direction.",
  },
  {
    num: "02",
    title: "Design & refine",
    desc: "We develop concepts, layouts, and material selections tailored to your vision. Designs are refined collaboratively to ensure clarity & balance.",
  },
  {
    num: "03",
    title: "Deliver & transform",
    desc: "Our team oversees execution with trusted partners, ensuring quality, timelines, and details are handled seamlessly—bringing the design to life as intended.",
  },
];

export default function HowWeWork() {
  return (
    <section className="w-full bg-[var(--bg-primary)] overflow-hidden transition-colors duration-500">

      {/* Top border */}
      <div className="w-full h-px bg-[var(--fg-primary)]/10" />

      <div className="relative py-20 md:py-28 px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-0">

            {/* Vertical center divider line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[var(--fg-primary)]/10 -translate-x-1/2" />

            {/* ── Left Column: Title + Timeline Steps ── */}
            <div className="md:col-span-5 flex flex-col md:pr-16">

              {/* Tagline */}
              <motion.span
                className="text-xs text-[var(--fg-primary)]/50 tracking-wide mb-5 italic"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                // How we work
              </motion.span>

              {/* Big Heading */}
              <motion.h2
                className="text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-light tracking-tight text-[var(--fg-primary)] leading-[1.1] mb-12 md:mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.05 }}
              >
                A clear design<br />process
              </motion.h2>

              {/* Timeline Steps */}
              <div className="relative pl-10">

                {/* Vertical thick connecting line */}
                <motion.div
                  className="absolute left-[15px] top-[18px] bottom-[18px] w-[3px] bg-[var(--fg-primary)]"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: "top" }}
                />

                <div className="flex flex-col gap-8">
                  {steps.map((step, idx) => (
                    <motion.div
                      key={step.num}
                      className="relative flex items-start gap-5"
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + idx * 0.12 }}
                    >
                      {/* Circle */}
                      <div className="absolute -left-10 top-0 z-10 w-[33px] h-[33px] rounded-full bg-[var(--fg-primary)] text-[var(--bg-primary)] flex items-center justify-center flex-shrink-0 shadow-sm">
                        <span className="text-[10px] font-bold font-mono leading-none">{step.num}</span>
                      </div>

                      {/* Text Content */}
                      <div className="flex flex-col gap-1.5 pt-0.5">
                        <h3 className="text-base md:text-lg font-semibold tracking-tight text-[var(--fg-primary)] leading-snug">
                          {step.title}
                        </h3>
                        <p className="text-[13px] text-[var(--fg-primary)]/50 font-light leading-relaxed max-w-sm">
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Right Column: Landscape Image, aligned with steps ── */}
            <div className="md:col-span-7 flex flex-col md:pl-16">
              {/* Spacer to push image down to align with steps area */}
              <div className="hidden md:block h-[140px] lg:h-[160px]" />

              <motion.div
                className="relative w-full overflow-hidden"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src="/why_choose_us_sofa.png"
                    alt="Modern architectural interior with premium sofa and ambient lighting"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 58vw"
                  />
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="w-full h-px bg-[var(--fg-primary)]/10" />

    </section>
  );
}
