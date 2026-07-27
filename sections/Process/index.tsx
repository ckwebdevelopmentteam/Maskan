"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import ScrollReveal from "@/components/Client/ScrollReveal";

const AnimatedCalendar = () => {
  const [activeDate, setActiveDate] = useState(1);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDate(prev => (prev >= 18 ? 1 : prev + 1));
    }, 800);
    return () => clearInterval(interval);
  }, []);

  const dates = [
    null, null, null,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18
  ];

  return (
    <div className="w-full bg-[var(--bg-primary)] border-[var(--fg-primary)]/10 shadow-sm border p-4 font-mono text-[9px] text-[var(--fg-primary)]/50 transition-all duration-500 rounded-none">
      <div className="flex justify-between items-center mb-2.5 text-[var(--fg-primary)]/70">
        <span className="text-[10px]">←</span>
        <span className="font-semibold text-[10px] text-[var(--fg-primary)] tracking-wider">April 2026</span>
        <span className="text-[10px]">→</span>
      </div>
      <div className="grid grid-cols-7 gap-y-1.5 text-center font-bold text-[8px] uppercase tracking-widest mb-1.5 text-[var(--fg-primary)]/30">
        <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
      </div>
      <div className="grid grid-cols-7 gap-y-1.5 gap-x-1 text-center items-center">
        {dates.map((d, i) => (
          <span 
            key={i} 
            className={`${d === null ? 'text-[var(--fg-primary)]/10' : ''} ${d === activeDate ? 'bg-[var(--accent)] text-white font-bold rounded-none py-0.5 shadow-sm border border-[var(--accent)]/20' : d ? 'text-[var(--fg-primary)]/60 py-0.5' : ''}`}
          >
            {d || "-"}
          </span>
        ))}
      </div>
    </div>
  );
};

const AnimatedScale = () => {
  return (
    <div className="w-full bg-[var(--bg-primary)] border-[var(--fg-primary)]/10 shadow-sm border p-4 flex flex-col justify-center items-center gap-2.5 min-h-[110px] overflow-hidden rounded-none transition-all duration-500">
      <div className="relative w-full h-14 flex items-center overflow-hidden">
        {/* Red measuring line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-red-500 z-10 transition-colors duration-500" />
        
        {/* Sliding Scale */}
        <motion.div 
          animate={{ x: ["0%", "-50%", "0%"] }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          className="flex flex-col w-[200%]"
        >
          {/* Upper Scale */}
          <div className="relative w-full h-7 border-b border-[var(--fg-primary)]/10 flex items-end justify-between px-1">
            {Array.from({ length: 51 }).map((_, idx) => {
              const isMajor = idx % 5 === 0;
              const val = idx / 5;
              return (
                <div key={idx} className="relative flex flex-col items-center">
                  <div className={`w-[1px] bg-[var(--fg-primary)]/${isMajor ? "50" : "15"} ${isMajor ? "h-3" : "h-1.5"}`} />
                  {isMajor && (
                    <span className="absolute bottom-4.5 font-mono text-[8px] text-[var(--accent)] font-semibold">{val}</span>
                  )}
                </div>
              );
            })}
          </div>
          {/* Lower Offset Scale */}
          <div className="relative w-full h-7 border-t border-[var(--fg-primary)]/10 flex items-start justify-between px-1 pt-1 opacity-50">
            {Array.from({ length: 51 }).map((_, idx) => {
              const isMajor = idx % 3 === 0;
              const numbers = [1, 2, 3, 4, 5, 6, 0, 7, 8];
              const val = numbers[Math.floor(idx / 3) % numbers.length];
              return (
                <div key={idx} className="relative flex flex-col items-center">
                  <div className={`w-[1px] bg-[var(--fg-primary)]/${isMajor ? "40" : "15"} ${isMajor ? "h-2.5" : "h-1"}`} />
                  {isMajor && (
                    <span className="absolute top-3.5 font-mono text-[7px] text-[var(--fg-primary)]/50">{val}</span>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const AnimatedProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) return 0;
        return p + 1;
      });
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[var(--bg-primary)] border-[var(--fg-primary)]/10 shadow-sm border p-4 flex justify-center items-center min-h-[110px] rounded-none transition-all duration-500">
      <div className="relative w-20 h-20 flex items-center justify-center">
        {/* Background circle */}
        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="transparent" stroke="var(--fg-primary)" strokeWidth="4" className="opacity-10" />
        </svg>
        
        {/* Animated Progress circle */}
        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
          <motion.circle 
            cx="50" 
            cy="50" 
            r="40" 
            fill="transparent" 
            stroke="var(--accent)" 
            strokeWidth="4"
            strokeDasharray="251.2"
            strokeDashoffset={251.2 - (251.2 * progress) / 100}
            className="transition-all duration-75"
          />
        </svg>
        
        <div className="absolute flex flex-col items-center justify-center">
          <span className="font-mono text-xl font-bold tracking-tight text-[var(--fg-primary)]">{progress}%</span>
        </div>
      </div>
    </div>
  );
};

const AnimatedStatus = () => {
  const [step, setStep] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setStep(s => (s >= 3 ? 0 : s + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const statuses = [
    { name: "Kitchen", id: "4.1" },
    { name: "Garage", id: "4.2" },
    { name: "Bedroom", id: "4.3" }
  ];

  return (
    <div className="w-full bg-[var(--bg-primary)] border-[var(--fg-primary)]/10 shadow-sm border p-4 flex flex-col gap-2.5 min-h-[110px] justify-center rounded-none transition-all duration-500">
      {statuses.map((status, idx) => {
        const isComplete = step > idx;
        const isCurrent = step === idx;
        
        return (
          <div key={status.id} className={`flex items-center justify-between px-3.5 py-2 ${isComplete ? 'bg-[var(--accent)]/10 border-[var(--accent)]/30' : isCurrent ? 'bg-[var(--fg-primary)]/5 border-[var(--fg-primary)]/20' : 'bg-transparent border-[var(--fg-primary)]/10'} border rounded-none text-[9px] font-semibold uppercase tracking-wider ${isComplete ? 'text-[var(--accent)]' : 'text-[var(--fg-primary)]/70'} transition-all duration-500`}>
            <div className="flex items-center gap-2">
              <span className={`w-1.5 h-1.5 rounded-none ${isComplete ? 'bg-[var(--accent)]' : isCurrent ? 'bg-[var(--accent)] animate-pulse' : 'bg-[var(--fg-primary)]/30'}`} />
              <span>{status.name} {isComplete ? 'Complete' : 'Pending'}</span>
            </div>
            <span className={`${isComplete ? 'text-[var(--accent)]/70' : 'text-[var(--fg-primary)]/30'} text-[8px] font-mono`}>{status.id}</span>
          </div>
        );
      })}
    </div>
  );
};

export default function Process() {
  return (
    <section className="w-full bg-blue-50/50 py-24 md:py-32 text-[var(--fg-primary)] border-t border-b border-[var(--fg-primary)]/10 transition-colors duration-500 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        
        {/* Typographic Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight leading-tight max-w-5xl mx-auto uppercase">
            Simple <span className="font-serif italic text-[var(--accent)] font-normal lowercase">Process</span> Stunning <br className="hidden md:block" /> Transformations.
          </h2>
        </div>

        {/* Blueprint Grid Container */}
        <ScrollReveal 
          className="max-w-[1200px] mx-auto border border-dashed border-[var(--fg-primary)]/20 bg-[var(--bg-primary)] transition-colors duration-500 overflow-hidden"
        >
          
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-b border-dashed border-[var(--fg-primary)]/20">
            
            {/* Card 1: Consultation */}
            <div className="p-8 md:p-10 flex flex-col justify-between gap-8 md:border-r md:border-dashed md:border-[var(--fg-primary)]/20 transition-all duration-700 hover:bg-[var(--fg-primary)]/5">
              <AnimatedCalendar />
              <div className="space-y-3">
                <h3 className="text-xl font-medium tracking-tight text-[var(--fg-primary)]">1. Consultation</h3>
                <p className="text-sm text-[var(--fg-primary)]/60 font-light leading-relaxed">
                  We listen to your ideas, review your space, and discuss goals for your remodel.
                </p>
              </div>
            </div>

            {/* Card 2: Design & Plan */}
            <div className="p-8 md:p-10 flex flex-col justify-between gap-8 md:border-r md:border-dashed md:border-[var(--fg-primary)]/20 transition-all duration-700 hover:bg-[var(--fg-primary)]/5">
              <AnimatedScale />
              <div className="space-y-3">
                <h3 className="text-xl font-medium tracking-tight text-[var(--fg-primary)]">2. Design & Plan</h3>
                <p className="text-sm text-[var(--fg-primary)]/60 font-light leading-relaxed">
                  We create a clear plan so your new kitchen or bathroom fits your needs.
                </p>
              </div>
            </div>

            {/* Card 3: Build & Install */}
            <div className="p-8 md:p-10 flex flex-col justify-between gap-8 transition-all duration-700 hover:bg-[var(--fg-primary)]/5">
              <AnimatedProgress />
              <div className="space-y-3">
                <h3 className="text-xl font-medium tracking-tight text-[var(--fg-primary)]">3. Build & Install</h3>
                <p className="text-sm text-[var(--fg-primary)]/60 font-light leading-relaxed">
                  Our team completes the remodel with careful work and respect for your home.
                </p>
              </div>
            </div>

          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3">
            
            {/* Card 4: Final Walkthrough (1 col) */}
            <div className="p-8 md:p-10 flex flex-col justify-between gap-8 md:border-r md:border-dashed md:border-[var(--fg-primary)]/20 transition-all duration-700 hover:bg-[var(--fg-primary)]/5">
              <AnimatedStatus />
              <div className="space-y-3">
                <h3 className="text-xl font-medium tracking-tight text-[var(--fg-primary)]">4. Final Walkthrough</h3>
                <p className="text-sm text-[var(--fg-primary)]/60 font-light leading-relaxed">
                  We review every detail with you to ensure everything looks right and works perfectly.
                </p>
              </div>
            </div>

            {/* Wide Landscape Image Block (2 cols) */}
            <div className="relative md:col-span-2 min-h-[260px] md:min-h-full overflow-hidden group border-t border-dashed md:border-t-0 border-[var(--fg-primary)]/20">
              <Image
                src="/why_choose_us_sofa.webp"
                alt="Beautiful Minimalist Living Room Architecture"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02] rounded-none"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
              {/* Estimate floating pill button */}
              <div className="absolute bottom-6 left-6 px-5 py-2.5 bg-[var(--fg-primary)] text-[var(--bg-primary)] font-semibold text-[9px] tracking-wider uppercase rounded-none shadow-lg flex items-center gap-2 hover:bg-[var(--accent)] hover:text-[var(--bg-primary)] transition-all duration-300 cursor-pointer">
                <span>Request an Estimate</span>
                <span className="w-1.5 h-1.5 rounded-none bg-[var(--bg-primary)] animate-pulse" />
              </div>
            </div>

          </div>

        </ScrollReveal>
        
      </div>
    </section>
  );
}


