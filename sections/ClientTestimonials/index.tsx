"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

/* ── Avatar row shared component ── */
function AvatarRow({ name, role, avatar }: { name: string; role: string; avatar: string }) {
  return (
    <div className="flex items-center justify-between pt-3 border-t border-black/10 mt-auto">
      <div className="flex flex-col gap-0.5">
        <p className="text-sm font-medium" style={{ color: "#2B2A26" }}>{name}</p>
        <p className="text-xs font-light" style={{ color: "#2B2A2699" }}>{role}</p>
      </div>
      <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-black/10">
        <Image src={avatar} alt={name} fill className="object-cover" />
      </div>
    </div>
  );
}

export default function ClientTestimonials() {
  return (
    <section
      className="w-full py-20 md:py-28 px-6 md:px-16 bg-[var(--bg-primary)]"
      style={{ fontFamily: "var(--font-grotesque), sans-serif" }}
    >
      <div className="max-w-[1400px] mx-auto flex flex-col gap-10">

        {/* ── Header ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20 items-end mb-4">
          <motion.div
            className="flex flex-col gap-3"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--accent)]">
              Testimonial
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-[4.5rem] font-medium leading-[1.0] tracking-tight text-[var(--fg-primary)]">
              What our clients say.
            </h2>
          </motion.div>

          <motion.p
            className="text-sm md:text-base text-[var(--fg-primary)]/60 leading-relaxed font-light max-w-md md:text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            150+ homeowners and businesses have trusted us with their most valuable asset.
            Here&apos;s what a handful of them had to say when the project was done and the dust had settled.
          </motion.p>
        </div>

        {/* ── ROW 1: 3 equal-height columns ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3" style={{ gridAutoRows: "320px" }}>

          {/* Card 1 — Image LEFT, Text RIGHT (side-by-side) */}
          <motion.div
            className="rounded-2xl overflow-hidden flex flex-row border border-black/5"
            style={{ backgroundColor: "#FFFFFF" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Left: Image */}
            <div className="relative w-[44%] shrink-0">
              <Image src="/property-1.jpg" alt="Project" fill className="object-cover" />
            </div>
            {/* Right: Text */}
            <div className="flex flex-col justify-between p-5 flex-1">
              <p className="text-sm leading-relaxed font-light" style={{ color: "#2B2A26CC" }}>
                &ldquo;We genuinely didn&apos;t think our space could look like this. Maskan took our vague ideas and turned them into something better than we imagined.&rdquo;
              </p>
              <AvatarRow name="Aisha Nair" role="Interior Architect, Kozhikode" avatar="/property-1.jpg" />
            </div>
          </motion.div>

          {/* Card 2 — Warm yellow, text top, avatar bottom */}
          <motion.div
            className="rounded-2xl p-6 border border-black/5 flex flex-col"
            style={{ backgroundColor: "#E4E182" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-sm md:text-base leading-relaxed font-light flex-1" style={{ color: "#2B2A26" }}>
              &ldquo;On time, on budget, and the finish is absolutely impeccable. We&apos;ve had friends over just to show it off.&rdquo;
            </p>
            <AvatarRow name="Rahul Menon" role="CEO / Tech Startup" avatar="/property-2.jpg" />
          </motion.div>

          {/* Card 3 — Silver gray, text top, avatar bottom */}
          <motion.div
            className="rounded-2xl p-6 border border-black/5 flex flex-col"
            style={{ backgroundColor: "#CECBC4" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-sm leading-relaxed font-light flex-1" style={{ color: "#2B2A26CC" }}>
              &ldquo;I couldn&apos;t be happier with my villa renovation. The attention to detail and quality of work were outstanding. They made the whole process smooth and stress-free!&rdquo;
            </p>
            <AvatarRow name="Priya Sharma" role="Villa Owner, Calicut" avatar="/property-3.jpg" />
          </motion.div>

        </div>

        {/* ── ROW 2: 4 equal-height columns ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3" style={{ gridAutoRows: "220px" }}>

          {/* Card 4 — Pale blue */}
          <motion.div
            className="rounded-2xl p-5 border border-black/5 flex flex-col"
            style={{ backgroundColor: "#BFCDD9" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm leading-relaxed font-light flex-1" style={{ color: "#2B2A26CC" }}>
              &ldquo;Maskan turned our dated space into a stunning modern sanctuary. We love it and would use them again without hesitation.&rdquo;
            </p>
            <AvatarRow name="Sanjay Kumar" role="Homeowner" avatar="/property-4.jpg" />
          </motion.div>

          {/* Card 5 — Warm olive */}
          <motion.div
            className="rounded-2xl p-5 border border-black/5 flex flex-col"
            style={{ backgroundColor: "#CACBA4" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-sm leading-relaxed font-light flex-1" style={{ color: "#2B2A26CC" }}>
              &ldquo;The team restored our property with such care and attention. Every feature they touched was better coming out than going in.&rdquo;
            </p>
            <AvatarRow name="Fatima Rashid" role="Property Developer" avatar="/property-5.jpg" />
          </motion.div>

          {/* Card 6 — Full image (forest/interior scene) */}
          <motion.div
            className="relative rounded-2xl overflow-hidden border border-black/5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image src="/ImageContainer/image-2.png" alt="Project interior" fill className="object-cover" />
          </motion.div>

          {/* Card 7 — Off-white */}
          <motion.div
            className="rounded-2xl p-5 border border-black/5 flex flex-col"
            style={{ backgroundColor: "#F2EEE6" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-sm leading-relaxed font-light flex-1" style={{ color: "#2B2A26CC" }}>
              &ldquo;From the first consultation to the final touches, Maskan delivered on every promise. Exactly what we wanted — spacious, modern, beautifully finished.&rdquo;
            </p>
            <AvatarRow name="Charlotte D'Souza" role="Home Extension, Kerala" avatar="/property-6.jpg" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
