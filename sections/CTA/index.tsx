"use client";
import React from "react";

export default function CTA() {
  return (
    <section id="cta" className="relative py-24 bg-[#DCD4C4] text-[#2B3530] text-center overflow-hidden">
      
      {/* Blueprint Grid & Construction Framework Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center opacity-20 mix-blend-multiply">
        <svg width="100%" height="100%" viewBox="0 0 1200 600" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <g stroke="#2B3530" strokeWidth="1" fill="none">
            {/* Fine Blueprint Grid */}
            <pattern id="cta-grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#2B3530" strokeWidth="0.5" strokeOpacity="0.4" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#cta-grid)" />
            
            {/* Blueprint Outlines / Dimensions */}
            <path d="M 100 500 L 1100 500 M 100 480 L 100 520 M 1100 480 L 1100 520" strokeWidth="2" opacity="0.6" />
            <text x="600" y="490" fill="#2B3530" fontSize="14" letterSpacing="4" textAnchor="middle" opacity="0.8">SECTION ELEVATION A-A</text>
            
            <path d="M 200 100 L 200 400 L 500 400 L 500 100 Z" strokeWidth="2" strokeDasharray="10 5" opacity="0.5" />
            <path d="M 700 150 L 700 400 L 1000 400 L 1000 150 Z" strokeWidth="2" strokeDasharray="10 5" opacity="0.5" />
            
            <line x1="200" y1="100" x2="500" y2="400" strokeWidth="0.5" opacity="0.3" />
            <line x1="500" y1="100" x2="200" y2="400" strokeWidth="0.5" opacity="0.3" />
            <line x1="700" y1="150" x2="1000" y2="400" strokeWidth="0.5" opacity="0.3" />
            <line x1="1000" y1="150" x2="700" y2="400" strokeWidth="0.5" opacity="0.3" />
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-light mb-6">Ready to Build Smarter?</h2>
        <p className="text-lg md:text-xl font-light mb-10 opacity-80">
          Partner with Maskan to experience unparalleled efficiency and quality in your next construction project.
        </p>
        <button className="px-8 py-4 bg-[#2B3530] text-[#DCD4C4] uppercase tracking-widest text-sm hover:bg-[#2B3530] transition-colors duration-300">
          Start Your Project
        </button>
      </div>
    </section>
  );
}
