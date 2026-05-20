"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

export default function Process() {
  return (
    <section className="w-full bg-[var(--bg-dark)] py-24 md:py-32 text-[var(--fg-primary)] border-t border-b border-[var(--border-white-5)] transition-colors duration-500 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        
        {/* Typographic Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-tight max-w-5xl mx-auto uppercase">
            Simple <span className="font-serif italic text-[var(--accent)] font-normal lowercase">Process</span> Stunning <br className="hidden md:block" /> Transformations.
          </h2>
        </div>

        {/* Blueprint Grid Container */}
        <div className="max-w-[1200px] mx-auto border border-dashed border-[var(--border-white-10)] bg-[var(--bg-card)]/50 transition-colors duration-500 overflow-hidden">
          
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-b border-dashed border-[var(--border-white-10)]">
            
            {/* Card 1: Consultation */}
            <div className="p-8 md:p-10 flex flex-col justify-between gap-8 md:border-r md:border-dashed md:border-[var(--border-white-10)]">
              {/* Calendar Visual */}
              <div className="w-full bg-[var(--bg-card)]/80 border border-[var(--border-white-5)] p-4 font-mono text-[9px] text-[var(--text-white-50)] transition-colors duration-500 rounded-none">
                <div className="flex justify-between items-center mb-2.5 text-[var(--text-white-70)]">
                  <span className="text-[10px]">←</span>
                  <span className="font-semibold text-[10px] text-[var(--text-white)] tracking-wider">April 2026</span>
                  <span className="text-[10px]">→</span>
                </div>
                <div className="grid grid-cols-7 gap-y-1.5 text-center font-bold text-[8px] uppercase tracking-widest mb-1.5 text-[var(--text-white-30)]">
                  <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
                </div>
                <div className="grid grid-cols-7 gap-y-1.5 gap-x-1 text-center items-center">
                  <span className="text-[var(--text-white-10)]/30">-</span>
                  <span className="text-[var(--text-white-10)]/30">-</span>
                  <span className="text-[var(--text-white-10)]/30">-</span>
                  <span className="bg-[var(--accent)] text-[var(--bg-primary)] font-bold rounded-none py-0.5 shadow-sm border border-[var(--accent)]/20">1</span>
                  <span className="text-[var(--text-white-60)] py-0.5">2</span>
                  <span className="text-[var(--text-white-60)] py-0.5">3</span>
                  <span className="text-[var(--text-white-60)] py-0.5">4</span>
                  
                  <span className="text-[var(--text-white-60)] py-0.5">5</span>
                  <span className="text-[var(--text-white-60)] py-0.5">6</span>
                  <span className="text-[var(--text-white-60)] py-0.5">7</span>
                  <span className="text-[var(--text-white-60)] py-0.5">8</span>
                  <span className="text-[var(--text-white-60)] py-0.5">9</span>
                  <span className="text-[var(--text-white-60)] py-0.5">10</span>
                  <span className="text-[var(--text-white-60)] py-0.5">11</span>
                  
                  <span className="text-[var(--text-white-60)] py-0.5">12</span>
                  <span className="text-[var(--text-white-60)] py-0.5">15</span>
                  <span className="text-[var(--text-white-60)] py-0.5">13</span>
                  <span className="text-[var(--text-white-60)] py-0.5">16</span>
                  <span className="text-[var(--text-white-60)] py-0.5">14</span>
                  <span className="text-[var(--text-white-60)] py-0.5">17</span>
                  <span className="text-[var(--text-white-60)] py-0.5">18</span>
                </div>
              </div>
              
              {/* Title & Copy */}
              <div className="space-y-3">
                <h3 className="text-xl font-medium tracking-tight text-[var(--fg-primary)]">1. Consultation</h3>
                <p className="text-sm text-[var(--text-white-50)] font-light leading-relaxed">
                  We listen to your ideas, review your space, and discuss goals for your remodel.
                </p>
              </div>
            </div>

            {/* Card 2: Design & Plan */}
            <div className="p-8 md:p-10 flex flex-col justify-between gap-8 md:border-r md:border-dashed md:border-[var(--border-white-10)]">
              {/* Ruler Visual */}
              <div className="w-full bg-[var(--bg-card)]/80 border border-[var(--border-white-5)] p-4 flex flex-col justify-center items-center gap-2.5 min-h-[110px] overflow-hidden rounded-none transition-colors duration-500">
                {/* Upper Scale */}
                <div className="relative w-full h-7 border-b border-[var(--border-white-10)] flex items-end justify-between px-1">
                  {Array.from({ length: 26 }).map((_, idx) => {
                    const isMajor = idx % 5 === 0;
                    const val = idx / 5;
                    return (
                      <div key={idx} className="relative flex flex-col items-center">
                        <div className={`w-[1px] bg-[var(--text-white)]/${isMajor ? "50" : "15"} ${isMajor ? "h-3" : "h-1.5"}`} />
                        {isMajor && (
                          <span className="absolute bottom-4.5 font-mono text-[8px] text-[var(--accent)] font-semibold">{val}</span>
                        )}
                      </div>
                    );
                  })}
                </div>
                {/* Lower Offset Scale */}
                <div className="relative w-full h-7 border-t border-[var(--border-white-10)] flex items-start justify-between px-1 pt-1 opacity-50">
                  {Array.from({ length: 26 }).map((_, idx) => {
                    const isMajor = idx % 3 === 0;
                    const numbers = [1, 2, 3, 4, 5, 6, 0, 7, 8];
                    const val = numbers[Math.floor(idx / 3) % numbers.length];
                    return (
                      <div key={idx} className="relative flex flex-col items-center">
                        <div className={`w-[1px] bg-[var(--text-white)]/${isMajor ? "40" : "15"} ${isMajor ? "h-2.5" : "h-1"}`} />
                        {isMajor && (
                          <span className="absolute top-3.5 font-mono text-[7px] text-[var(--text-white-50)]">{val}</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
              
              {/* Title & Copy */}
              <div className="space-y-3">
                <h3 className="text-xl font-medium tracking-tight text-[var(--fg-primary)]">2. Design & Plan</h3>
                <p className="text-sm text-[var(--text-white-50)] font-light leading-relaxed">
                  We create a clear plan so your new kitchen or bathroom fits your needs.
                </p>
              </div>
            </div>

            {/* Card 3: Build & Install */}
            <div className="p-8 md:p-10 flex flex-col justify-between gap-8">
              {/* Radial Progress Visual */}
              <div className="w-full bg-[var(--bg-card)]/80 border border-[var(--border-white-5)] p-4 flex justify-center items-center min-h-[110px] rounded-none transition-colors duration-500">
                <div className="relative w-20 h-20 flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    {Array.from({ length: 24 }).map((_, idx) => {
                      const angle = (idx * 360) / 24;
                      const r1 = 33;
                      const r2 = 41;
                      const rad = (angle * Math.PI) / 180;
                      const x1 = 50 + r1 * Math.cos(rad);
                      const y1 = 50 + r1 * Math.sin(rad);
                      const x2 = 50 + r2 * Math.cos(rad);
                      const y2 = 50 + r2 * Math.sin(rad);
                      const isHighlighted = idx >= 18 || idx <= 2;
                      return (
                        <line
                          key={idx}
                          x1={x1}
                          y1={y1}
                          x2={x2}
                          y2={y2}
                          stroke={isHighlighted ? "var(--accent)" : "var(--border-white-10)"}
                          strokeWidth={isHighlighted ? "2.5" : "1.2"}
                        />
                      );
                    })}
                  </svg>
                  <div className="absolute flex flex-col items-center justify-center">
                    <span className="font-mono text-xl font-bold tracking-tight text-[var(--fg-primary)]">36%</span>
                  </div>
                </div>
              </div>
              
              {/* Title & Copy */}
              <div className="space-y-3">
                <h3 className="text-xl font-medium tracking-tight text-[var(--fg-primary)]">3. Build & Install</h3>
                <p className="text-sm text-[var(--text-white-50)] font-light leading-relaxed">
                  Our team completes the remodel with careful work and respect for your home.
                </p>
              </div>
            </div>

          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3">
            
            {/* Card 4: Final Walkthrough (1 col) */}
            <div className="p-8 md:p-10 flex flex-col justify-between gap-8 md:border-r md:border-dashed md:border-[var(--border-white-10)]">
              {/* Status Capsules Visual */}
              <div className="w-full bg-[var(--bg-card)]/80 border border-[var(--border-white-5)] p-4 flex flex-col gap-2.5 min-h-[110px] justify-center rounded-none transition-colors duration-500">
                <div className="flex items-center justify-between px-3.5 py-2 bg-[var(--bg-dark)] border border-[var(--border-white-5)] rounded-none text-[9px] font-semibold uppercase tracking-wider text-[var(--text-white-70)] transition-colors duration-500">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-none bg-[var(--accent)] animate-pulse" />
                    <span>Kitchen Pending</span>
                  </div>
                  <span className="text-[var(--text-white-20)] text-[8px] font-mono">4.1</span>
                </div>
                <div className="flex items-center justify-between px-3.5 py-2 bg-[var(--bg-dark)] border border-[var(--border-white-5)] rounded-none text-[9px] font-semibold uppercase tracking-wider text-[var(--text-white-70)] transition-colors duration-500">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-none bg-[var(--accent)] opacity-60" />
                    <span>Garage Pending</span>
                  </div>
                  <span className="text-[var(--text-white-20)] text-[8px] font-mono">4.2</span>
                </div>
                <div className="flex items-center justify-between px-3.5 py-2 bg-[var(--bg-dark)] border border-[var(--border-white-5)] rounded-none text-[9px] font-semibold uppercase tracking-wider text-[var(--text-white-70)] transition-colors duration-500">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-none bg-[var(--accent)] opacity-60" />
                    <span>Bedroom Pending</span>
                  </div>
                  <span className="text-[var(--text-white-20)] text-[8px] font-mono">4.3</span>
                </div>
              </div>
              
              {/* Title & Copy */}
              <div className="space-y-3">
                <h3 className="text-xl font-medium tracking-tight text-[var(--fg-primary)]">4. Final Walkthrough</h3>
                <p className="text-sm text-[var(--text-white-50)] font-light leading-relaxed">
                  We review every detail with you to ensure everything looks right and works perfectly.
                </p>
              </div>
            </div>

            {/* Wide Landscape Image Block (2 cols) */}
            <div className="relative md:col-span-2 min-h-[260px] md:min-h-full overflow-hidden group">
              <Image
                src="/why_choose_us_sofa.png"
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

        </div>
        
      </div>
    </section>
  );
}
