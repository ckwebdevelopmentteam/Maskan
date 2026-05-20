"use client";

import React from "react";

export default function CTA() {
  return (
    <section className="w-full bg-[var(--bg-primary)] py-16 md:py-24 flex justify-center items-center border-t border-[var(--border-white-5)]">
      {/* Centered Rounded Card with increased width/height */}
      <div className="w-[95%] max-w-[1600px] min-h-[420px] md:min-h-[550px] rounded-[2rem] md:rounded-[3rem] overflow-hidden relative flex flex-col justify-center items-center text-center px-6 md:px-12 shadow-2xl border border-[var(--border-white-5)]">
        
        {/* Parallax Background Image (UOKG1WBP4iClBZMcV2ZS55S7Jyw.avif) */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed scale-105"
          style={{ backgroundImage: `url('/UOKG1WBP4iClBZMcV2ZS55S7Jyw.avif')` }}
        />
        
        {/* Dark Overlay for Text Contrast */}
        <div className="absolute inset-0 bg-black/45 z-0" />

        {/* Content Container */}
        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-[2.75rem] font-bold text-[var(--text-white)] mb-4 leading-[1.2] uppercase tracking-tight">
            Your Dream Space<br />Starts Here
          </h2>
          <p className="text-sm md:text-base text-[var(--text-white)]/90 font-light mb-8 max-w-lg leading-relaxed">
            Let&apos;s bring your vision to life with expert design, flawless execution, and a touch of creativity.
          </p>
          
          <button className="px-6 py-3 bg-white text-black font-semibold text-sm rounded-xl hover:bg-white/90 active:scale-95 transition-all duration-300 shadow-lg cursor-pointer">
            Talk to us now
          </button>
        </div>
      </div>
    </section>
  );
}
