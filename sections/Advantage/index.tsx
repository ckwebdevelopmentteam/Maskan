"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ClipboardCheck, CreditCard, HardHat, Clock, CircleDollarSign, ArrowRight } from "lucide-react";
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
    tagline: "Optimized Material Allocation",
    description: "Our advanced resource planning model minimizes material overheads and eliminates logistic redundancies, translating directly into absolute financial predictability and reduced wastage.",
    image: Image1,
    metrics: [
      { label: "Material Waste", value: "< 1.5%" },
      { label: "Procurement Speed", value: "2x Faster" },
      { label: "Resource Match", value: "Optimal" }
    ]
  },
  {
    id: "02",
    icon: CreditCard,
    title: "Flexible Budgeting",
    tagline: "Milestone-Driven Installs",
    description: "Distribute your structural costs directly over construction milestones with our unique installment schedules. Enjoy absolute capital efficiency with zero hidden charges.",
    image: Image2,
    metrics: [
      { label: "Initial Deposit", value: "30%" },
      { label: "Instalment Count", value: "Milestone Sync" },
      { label: "Interest Rate", value: "0% Flat" }
    ]
  },
  {
    id: "03",
    icon: HardHat,
    title: "End-to-End Build",
    tagline: "Fully Vertically Integrated",
    description: "From architectural engineering and heavy site excavations to final custom handovers—our fully licensed in-house team controls and executes every single phase of execution.",
    image: Image3,
    metrics: [
      { label: "Subcontractors", value: "0% Used" },
      { label: "Team Scale", value: "1,700+ Experts" },
      { label: "Execution Quality", value: "Guaranteed" }
    ]
  },
  {
    id: "04",
    icon: Clock,
    title: "Accelerated Timelines",
    tagline: "Precision Precast Curing",
    description: "Deploying high-efficiency structural elements and precast frameworks enables us to complete massive structures up to 35% faster than average market schedules.",
    image: Image4,
    metrics: [
      { label: "Time Savings", value: "Up to 35%" },
      { label: "Structural Curing", value: "High-Speed" },
      { label: "Delivery Accuracy", value: "99.2%" }
    ]
  },
  {
    id: "05",
    icon: CircleDollarSign,
    title: "Cost Transparency",
    tagline: "Guaranteed Maximum Pricing",
    description: "Enjoy absolute trust with real-time open ledgers, material purchase receipts, and zero hidden margins or unexpected escalation charges from project start to finish.",
    image: Image5,
    metrics: [
      { label: "Price Escalation", value: "0% Guaranteed" },
      { label: "Ledger Visibility", value: "Real-time" },
      { label: "Hidden Fees", value: "None" }
    ]
  },
];

export default function Advantage() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div id="advantage" className="bg-[#2B3530] text-[#DCD4C4] py-24 md:py-36 px-4 md:px-16 border-b border-white/5 relative overflow-hidden">
      {/* Structural Tech Grid Background Watermark */}
      <div className="absolute right-10 top-10 pointer-events-none opacity-[0.02] text-white font-mono text-[14vw] font-black select-none leading-none">
        PILLARS
      </div>

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-4 text-center md:text-left w-full md:w-auto">
            <span className="text-white/60 text-xs uppercase tracking-[0.25em] font-bold block">Elite Architectural Pillars</span>
            <h2 className="text-3xl md:text-5xl font-light text-white leading-tight">
              The Maskan <br />
              <span className="font-normal border-b border-white/20 pb-1">Advantage</span>
            </h2>
          </div>
          <p className="max-w-md text-white/50 text-sm leading-relaxed text-center md:text-left mx-auto md:mx-0">
            Explore our architectural and execution pillars. Hover over any vertical item to dynamically display detailed blueprints and parameters.
          </p>
        </div>

        {/* Cinematic Hover-Reveal Magazine Layout (Desktop View) */}
        <div className="hidden lg:grid grid-cols-12 gap-16 items-stretch">
          {/* Left Column: Immersive Cinematic Viewport Window */}
          <div className="col-span-8 relative bg-[#232b27] border border-white/10 rounded-none overflow-hidden shadow-2xl h-full min-h-[480px] flex flex-col justify-end">
            {/* Background Image Panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={advantages[activeIndex].image}
                  alt={advantages[activeIndex].title}
                  fill
                  className="object-cover"
                  placeholder="blur"
                  priority
                />
                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent opacity-95" />
              </motion.div>
            </AnimatePresence>

            {/* Overlaid HUD Stats details */}
            <div className="relative z-10 p-12 space-y-8 w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, delay: 0.05 }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#CED1BF] font-semibold block">
                      // {advantages[activeIndex].tagline}
                    </span>
                    <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light">
                      {advantages[activeIndex].description}
                    </p>
                  </div>

                  {/* Technical metrics layout */}
                  <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
                    {advantages[activeIndex].metrics.map((metric, mIdx) => (
                      <motion.div 
                        key={metric.label} 
                        className="space-y-1.5 bg-[#2B3530]/40 backdrop-blur-sm p-4 rounded-none border border-white/5"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: mIdx * 0.08 }}
                      >
                        <span className="text-[9px] font-mono tracking-wider uppercase text-white/40 block leading-tight">
                          {metric.label}
                        </span>
                        <span className="text-lg md:text-xl font-bold text-white block">
                          {metric.value}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Interactive Divider List */}
          <div className="col-span-4 flex flex-col justify-center divide-y divide-white/10 border-t border-b border-white/10 h-full">
            {advantages.map((adv, idx) => {
              const isActive = activeIndex === idx;
              const IconComponent = adv.icon;

              return (
                <div
                  key={adv.id}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className="py-8 cursor-pointer group flex items-center justify-between transition-all duration-300 outline-none"
                >
                  <div className="flex items-center gap-6">
                    {/* Index Number */}
                    <span className={`font-mono text-sm transition-colors duration-300 ${
                      isActive ? "text-white font-bold" : "text-[#DCD4C4]/25"
                    }`}>
                      {adv.id}
                    </span>

                    {/* Left Active Line */}
                    <div className="relative w-[1.5px] h-6 bg-white/10 overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-[#CED1BF]"
                        initial={false}
                        animate={{ y: isActive ? "0%" : "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>

                    {/* Pillar Title */}
                    <h3 className={`text-xl uppercase tracking-[0.15em] transition-all duration-500 font-light ${
                      isActive ? "text-white font-normal translate-x-3" : "text-[#DCD4C4]/50 group-hover:text-white group-hover:translate-x-1.5"
                    }`}>
                      {adv.title}
                    </h3>
                  </div>

                  {/* Icon Indicator */}
                  <div className={`p-2.5 rounded-full border transition-all duration-500 ${
                    isActive
                      ? "bg-white text-[#2B3530] border-white shadow-md rotate-0 scale-105"
                      : "bg-transparent border-white/10 text-white/30 group-hover:text-white/70 group-hover:border-white/20 -rotate-45"
                  }`}>
                    <IconComponent className="w-4 h-4 stroke-[1.5]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Interactive Tab Stack (Hidden on Desktop) */}
        <div className="lg:hidden space-y-6">
          {/* Scrollable tab bar */}
          <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-none snap-x px-2">
            {advantages.map((adv, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={adv.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`snap-center flex-shrink-0 px-5 py-3 rounded-full text-xs font-mono uppercase tracking-widest border transition-all duration-300 ${
                    isActive
                      ? "bg-white text-[#2B3530] border-white"
                      : "bg-[#232b27] text-white/60 border-white/10"
                  }`}
                >
                  {adv.title}
                </button>
              );
            })}
          </div>

          {/* Active Card Body */}
          <motion.div
            key={activeIndex}
            className="bg-[#232b27] border border-white/10 rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Image Box */}
            <div className="relative h-[240px] w-full">
              <Image
                src={advantages[activeIndex].image}
                alt={advantages[activeIndex].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#232b27] to-transparent opacity-90" />
              <div className="absolute bottom-4 left-6 flex items-end gap-3">
                <span className="text-3xl font-mono font-bold text-white/30">
                  {advantages[activeIndex].id}
                </span>
                <h3 className="text-lg font-semibold text-white tracking-wide uppercase">
                  {advantages[activeIndex].title}
                </h3>
              </div>
            </div>

            {/* Details Box */}
            <div className="p-6 space-y-6">
              <p className="text-sm text-white/70 leading-relaxed font-light text-center">
                {advantages[activeIndex].description}
              </p>

              {/* Mobile Metrics grid */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10 text-center">
                {advantages[activeIndex].metrics.map((metric) => (
                  <div key={metric.label} className="space-y-1">
                    <span className="text-[8px] font-mono tracking-wider uppercase text-white/40 block leading-tight">
                      {metric.label}
                    </span>
                    <span className="text-xs font-semibold text-white block">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
