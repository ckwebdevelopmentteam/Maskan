"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const steps = [
  {
    num: "01",
    title: "Site survey & estimate",
    desc: "We inspect the land, soil conditions, access, service lines, and project requirements before preparing a practical scope, schedule, and cost framework.",
  },
  {
    num: "02",
    title: "Plan, approvals & 30/70 schedule",
    desc: "Our team coordinates drawings, approvals, structural planning, vendor selection, and the 30/70 payment scheme so site work can begin with financial clarity.",
  },
  {
    num: "03",
    title: "Build, inspect & handover",
    desc: "From foundation to finishing, we manage execution, quality checks, safety, timelines, and final handover with clear updates at every stage.",
  },
];

export default function HowWeWork() {
  return (
    <section className="relative w-full overflow-hidden bg-[var(--bg-primary)] transition-colors duration-500">
      <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] opacity-[0.12] md:block">
        <Image
          src="/build.avif"
          alt=""
          fill
          className="object-cover"
          sizes="58vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-primary)] via-[var(--bg-primary)]/70 to-transparent" />
      </div>

      <div className="relative z-10 h-px w-full bg-[var(--fg-primary)]/10" />

      <div className="relative z-10 px-6 py-20 md:px-16 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="relative grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-0">
            <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-[var(--fg-primary)]/10 md:block" />

            <div className="flex flex-col md:col-span-5 md:pr-16">
              <motion.span
                className="mb-5 text-xs italic tracking-wide text-[var(--fg-primary)]/50"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                // How we build
              </motion.span>

              <motion.h2
                className="mb-12 text-[2.5rem] font-light leading-[1.1] tracking-tight text-[var(--fg-primary)] md:mb-16 md:text-[3rem] lg:text-[3.5rem]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.05 }}
              >
                A clear construction
                <br />
                process
              </motion.h2>

              <div className="relative pl-10">
                <motion.div
                  className="absolute bottom-[18px] left-[15px] top-[18px] w-[3px] bg-[var(--fg-primary)]"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.9,
                    delay: 0.3,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{ transformOrigin: "top" }}
                />

                <div className="flex flex-col gap-8">
                  {steps.map((step, index) => (
                    <motion.div
                      key={step.num}
                      className="relative flex items-start gap-5"
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.12 }}
                    >
                      <div className="absolute -left-10 top-0 z-10 flex h-[33px] w-[33px] shrink-0 items-center justify-center rounded-full bg-[var(--fg-primary)] text-[var(--bg-primary)] shadow-sm">
                        <span className="font-mono text-[10px] font-bold leading-none">
                          {step.num}
                        </span>
                      </div>

                      <div className="flex flex-col gap-1.5 pt-0.5">
                        <h3 className="text-base font-semibold leading-snug tracking-tight text-[var(--fg-primary)] md:text-lg">
                          {step.title}
                        </h3>
                        <p className="max-w-sm text-[13px] font-light leading-relaxed text-[var(--fg-primary)]/55">
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                className="mt-10 border border-[var(--fg-primary)]/15 bg-[var(--bg-card)]/70 p-5 text-[var(--fg-primary)]"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.45 }}
              >
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                  30/70 Payment Scheme
                </span>
                <p className="mt-3 text-sm font-light leading-relaxed text-[var(--fg-primary)]/65">
                  Start construction with 30% booking support, then complete the
                  remaining 70% through a planned tenure aligned with project
                  progress.
                </p>
              </motion.div>
            </div>

            <div className="flex flex-col md:col-span-7 md:pl-16">
              <div className="hidden h-[140px] md:block lg:h-[160px]" />

              <motion.div
                className="relative w-full overflow-hidden"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src="/about 4.avif"
                    alt="Construction site with excavation and concrete work in progress"
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

      <div className="relative z-10 h-px w-full bg-[var(--fg-primary)]/10" />
    </section>
  );
}
