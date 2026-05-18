"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ClipboardCheck, CreditCard, HardHat, Clock, CircleDollarSign, ArrowUpRight } from "lucide-react";
import Image1 from "@/public/property-1.jpg";
import Image2 from "@/public/property-2.jpg";
import Image3 from "@/public/property-3.jpg";
import Image4 from "@/public/property-4.jpg";
import Image5 from "@/public/property-5.jpg";

const advantages = [
  {
    id: "01",
    icon: ClipboardCheck,
    title: "Resource Planning",
    tagline: "Optimized Construction Systems",
    description: "Our advanced resource planning model minimizes material overheads and eliminates logistic redundancies, translating directly into financial savings for our clients.",
    image: Image1,
  },
  {
    id: "02",
    icon: CreditCard,
    title: "Flexible Budgeting",
    tagline: "Tailor-Made Cash Flow Schedules",
    description: "Distribute your structural costs directly over construction milestones with our unique installment schedules. Absolute zero financial strain.",
    image: Image2,
  },
  {
    id: "03",
    icon: HardHat,
    title: "End-to-End Build",
    tagline: "Vertically Integrated Construction",
    description: "From architectural engineering and heavy site excavations to final custom handovers—our in-house team controls and executes every single phase.",
    image: Image3,
  },
  {
    id: "04",
    icon: FastDelivery,
    title: "Accelerated Timelines",
    tagline: "High-Speed Prefab Technologies",
    description: "Deploying high-efficiency structural elements and precast frameworks enables us to complete massive structures up to 35% faster than average market schedules.",
    image: Image4,
  },
  {
    id: "05",
    icon: CircleDollarSign,
    title: "Cost Transparency",
    tagline: "Guaranteed Maximum Pricing",
    description: "Enjoy absolute trust with real-time open ledgers, material purchase receipts, and zero hidden margins or unexpected escalation charges.",
    image: Image5,
  },
];

// Helper to resolve icon reference to avoid compilation errors
function FastDelivery(props: any) {
  return <Clock {...props} />;
}

export default function Advantage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(2); // Default to middle card

  return (
    <div id="advantage" className="bg-[#2B3530] text-[#D1CCBF] py-24 md:py-36 px-4 md:px-16 border-b border-white/5 relative overflow-hidden">
      {/* Structural Watermark */}
      <div className="absolute right-10 top-10 pointer-events-none opacity-[0.02] text-white font-mono text-[14vw] font-black select-none leading-none">
        ADVANTAGE
      </div>

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-4">
            <span className="text-white/60 text-xs uppercase tracking-[0.25em] font-bold block">Elite Architectural Pillars</span>
            <h2 className="text-3xl md:text-5xl font-light text-white leading-tight">
              The Maskan <br />
              <span className="font-normal border-b border-white/20 pb-1">Advantage</span>
            </h2>
          </div>
          <p className="max-w-md text-white/50 text-sm leading-relaxed">
            Interact with our spatial accordion columns below to expand our structural execution nodes and see their corresponding project renders.
          </p>
        </div>

        {/* Desktop Spatial Visual Accordion (Hidden on Mobile) */}
        <div className="hidden lg:flex w-full h-[600px] gap-4 overflow-hidden rounded-3xl">
          {advantages.map((adv, idx) => {
            const IconComponent = adv.icon;
            const isExpanded = hoveredIndex === idx;

            return (
              <div
                key={adv.id}
                onMouseEnter={() => setHoveredIndex(idx)}
                className={`relative h-full overflow-hidden rounded-2xl border border-white/10 transition-all duration-700 ease-out cursor-pointer group ${
                  isExpanded ? "flex-[3.5] border-white/30" : "flex-[0.8] hover:flex-[1.1]"
                }`}
              >
                {/* Background Image with Dark Contrast Overlay */}
                <Image
                  src={adv.image}
                  alt={adv.title}
                  fill
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  placeholder="blur"
                />
                
                {/* Graduated background masking overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-700 ${
                  isExpanded ? "opacity-95" : "opacity-75"
                }`} />

                {/* Collapsed Strip Elements */}
                <AnimatePresence>
                  {!isExpanded && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 flex flex-col justify-between items-center py-10 px-4 text-center pointer-events-none"
                    >
                      <span className="text-2xl font-mono font-bold text-white/40 tracking-wider">
                        {adv.id}
                      </span>
                      {/* Vertical Title */}
                      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70 [writing-mode:vertical-rl] select-none">
                        {adv.title}
                      </h3>
                      <div className="bg-white/5 p-3 rounded-full border border-white/10 text-white/50">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Expanded Card Elements */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="absolute inset-0 flex flex-col justify-between p-12 text-left"
                    >
                      {/* Top bar info */}
                      <div className="flex justify-between items-start">
                        <div className="space-y-1">
                          <span className="text-3xl font-mono font-bold text-white block">
                            {adv.id}
                          </span>
                          <span className="text-[10px] uppercase tracking-widest text-white/40 font-semibold block">
                            {adv.tagline}
                          </span>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-white text-black shadow-lg">
                          <IconComponent className="w-6 h-6 stroke-[1.5]" />
                        </div>
                      </div>

                      {/* Bottom Copy block */}
                      <div className="space-y-4 max-w-xl">
                        <h3 className="text-2xl md:text-3xl font-light text-white tracking-wide uppercase leading-tight">
                          {adv.title}
                        </h3>
                        <p className="text-sm text-white/70 leading-relaxed font-light">
                          {adv.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Mobile Viewport Stack Accordion (Gracefully stacked vertically) */}
        <div className="lg:hidden space-y-6">
          {advantages.map((adv, idx) => {
            const IconComponent = adv.icon;
            return (
              <motion.div
                key={adv.id}
                className="bg-[#232b27] border border-white/10 rounded-2xl overflow-hidden shadow-xl"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {/* Visual Header */}
                <div className="relative h-[200px] w-full">
                  <Image
                    src={adv.image}
                    alt={adv.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#232b27] to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-6 flex items-end gap-4">
                    <span className="text-3xl font-mono font-black text-white/20">
                      {adv.id}
                    </span>
                    <h3 className="text-lg font-semibold text-white tracking-wide uppercase">
                      {adv.title}
                    </h3>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/10 p-3 rounded-lg border border-white/10 text-white backdrop-blur-md">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                {/* Inner Content */}
                <div className="p-6 space-y-3">
                  <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase block">
                    {adv.tagline}
                  </span>
                  <p className="text-xs text-white/60 leading-relaxed font-light">
                    {adv.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
