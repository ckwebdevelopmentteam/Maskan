"use client";
import React from "react";

export default function ArchitecturalBackground() {
  return (
    <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.04] mix-blend-exclusion overflow-hidden">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="architectural-blueprint"
            x="0"
            y="0"
            width="1200"
            height="1200"
            patternUnits="userSpaceOnUse"
          >
            <g stroke="currentColor" strokeWidth="1" fill="none" className="text-[var(--text-white)]">
              {/* Primary Grid System */}
              <path d="M 0 100 L 1200 100 M 0 200 L 1200 200 M 0 300 L 1200 300 M 0 400 L 1200 400 M 0 500 L 1200 500 M 0 600 L 1200 600 M 0 700 L 1200 700 M 0 800 L 1200 800 M 0 900 L 1200 900 M 0 1000 L 1200 1000 M 0 1100 L 1200 1100" strokeOpacity="0.3" strokeDasharray="4 4" />
              <path d="M 100 0 L 100 1200 M 200 0 L 200 1200 M 300 0 L 300 1200 M 400 0 L 400 1200 M 500 0 L 500 1200 M 600 0 L 600 1200 M 700 0 L 700 1200 M 800 0 L 800 1200 M 900 0 L 900 1200 M 1000 0 L 1000 1200 M 1100 0 L 1100 1200" strokeOpacity="0.3" strokeDasharray="4 4" />

              {/* Major Grid Sub-lines */}
              <path d="M 0 600 L 1200 600 M 600 0 L 600 1200" strokeOpacity="0.6" strokeWidth="2" />

              {/* Crane 1 - Left Tower Crane */}
              <g transform="translate(150, 250)">
                {/* Mast */}
                <rect x="0" y="0" width="16" height="550" strokeWidth="1.5" />
                <path d="M 0 20 L 16 40 M 16 40 L 0 60 M 0 60 L 16 80 M 16 80 L 0 100 M 0 100 L 16 120 M 16 120 L 0 140 M 0 140 L 16 160 M 16 160 L 0 180 M 0 180 L 16 200 M 16 200 L 0 220 M 0 220 L 16 240 M 16 240 L 0 260 M 0 260 L 16 280 M 16 280 L 0 300 M 0 300 L 16 320 M 16 320 L 0 340 M 0 340 L 16 360 M 16 360 L 0 380 M 0 380 L 16 400 M 16 400 L 0 420 M 0 420 L 16 440 M 16 440 L 0 460 M 0 460 L 16 480 M 16 480 L 0 500 M 0 500 L 16 520 M 16 520 L 0 540" strokeOpacity="0.8" />
                {/* Tower Peak */}
                <polygon points="0,0 16,0 8,-40" strokeWidth="1.5" />
                {/* Jib (Long arm) */}
                <rect x="-100" y="-10" width="450" height="10" strokeWidth="1.5" />
                <path d="M -100 -10 L -90 0 M -80 -10 L -70 0 M -60 -10 L -50 0 M -40 -10 L -30 0 M -20 -10 L -10 0 M 20 -10 L 30 0 M 40 -10 L 50 0 M 60 -10 L 70 0 M 80 -10 L 90 0 M 100 -10 L 110 0 M 120 -10 L 130 0 M 140 -10 L 150 0 M 160 -10 L 170 0 M 180 -10 L 190 0 M 200 -10 L 210 0 M 220 -10 L 230 0 M 240 -10 L 250 0 M 260 -10 L 270 0 M 280 -10 L 290 0 M 300 -10 L 310 0 M 320 -10 L 330 0 M 340 -10 L 350 0" strokeOpacity="0.8" />
                {/* Tension Lines */}
                <line x1="8" y1="-40" x2="-80" y2="-10" strokeOpacity="0.8" />
                <line x1="8" y1="-40" x2="-50" y2="-10" strokeOpacity="0.8" />
                <line x1="8" y1="-40" x2="100" y2="-10" strokeOpacity="0.8" />
                <line x1="8" y1="-40" x2="200" y2="-10" strokeOpacity="0.8" />
                <line x1="8" y1="-40" x2="300" y2="-10" strokeOpacity="0.8" />
                {/* Hook and Cable */}
                <line x1="280" y1="0" x2="280" y2="120" strokeWidth="1" />
                <path d="M 275 120 L 285 120 M 280 120 L 280 130 Q 280 140 275 140" strokeWidth="1.5" />
              </g>

              {/* Crane 2 - Right Background Crane (Scaled down and flipped) */}
              <g transform="translate(850, 450) scale(-0.7, 0.7)" strokeOpacity="0.7">
                {/* Mast */}
                <rect x="0" y="0" width="16" height="500" strokeWidth="1.5" />
                <path d="M 0 20 L 16 40 M 16 40 L 0 60 M 0 60 L 16 80 M 16 80 L 0 100 M 0 100 L 16 120 M 16 120 L 0 140 M 0 140 L 16 160 M 16 160 L 0 180 M 0 180 L 16 200 M 16 200 L 0 220 M 0 220 L 16 240 M 16 240 L 0 260 M 0 260 L 16 280 M 16 280 L 0 300 M 0 300 L 16 320 M 16 320 L 0 340 M 0 340 L 16 360 M 16 360 L 0 380 M 0 380 L 16 400 M 16 400 L 0 420 M 0 420 L 16 440 M 16 440 L 0 460 M 0 460 L 16 480 M 16 480 L 0 500" strokeOpacity="0.8" />
                {/* Tower Peak */}
                <polygon points="0,0 16,0 8,-40" strokeWidth="1.5" />
                {/* Jib */}
                <rect x="-80" y="-10" width="380" height="10" strokeWidth="1.5" />
                <path d="M -80 -10 L -70 0 M -60 -10 L -50 0 M -40 -10 L -30 0 M -20 -10 L -10 0 M 20 -10 L 30 0 M 40 -10 L 50 0 M 60 -10 L 70 0 M 80 -10 L 90 0 M 100 -10 L 110 0 M 120 -10 L 130 0 M 140 -10 L 150 0 M 160 -10 L 170 0 M 180 -10 L 190 0 M 200 -10 L 210 0 M 220 -10 L 230 0 M 240 -10 L 250 0 M 260 -10 L 270 0" strokeOpacity="0.8" />
                {/* Tension Lines */}
                <line x1="8" y1="-40" x2="-60" y2="-10" strokeOpacity="0.8" />
                <line x1="8" y1="-40" x2="80" y2="-10" strokeOpacity="0.8" />
                <line x1="8" y1="-40" x2="180" y2="-10" strokeOpacity="0.8" />
                <line x1="8" y1="-40" x2="260" y2="-10" strokeOpacity="0.8" />
                {/* Hook and Cable */}
                <line x1="240" y1="0" x2="240" y2="250" strokeWidth="1" />
                <rect x="230" y="250" width="20" height="10" strokeWidth="1.5" />
              </g>

              {/* Building Framework Outlines */}
              <g strokeWidth="2" strokeOpacity="0.7">
                {/* Center Building */}
                <path d="M 400 800 L 400 450 L 700 450 L 700 800" />
                <path d="M 400 500 L 700 500 M 400 550 L 700 550 M 400 600 L 700 600 M 400 650 L 700 650 M 400 700 L 700 700 M 400 750 L 700 750" strokeWidth="1" strokeOpacity="0.5" />
                <path d="M 450 450 L 450 800 M 500 450 L 500 800 M 550 450 L 550 800 M 600 450 L 600 800 M 650 450 L 650 800" strokeWidth="1" strokeOpacity="0.5" />
                
                {/* Diagonal Bracing */}
                <path d="M 400 450 L 450 500 M 450 500 L 500 450 M 500 450 L 550 500 M 550 500 L 600 450 M 600 450 L 650 500 M 650 500 L 700 450" strokeWidth="1" strokeOpacity="0.6" />
                <path d="M 400 550 L 450 600 M 450 600 L 500 550 M 500 550 L 550 600 M 550 600 L 600 550 M 600 550 L 650 600 M 650 600 L 700 550" strokeWidth="1" strokeOpacity="0.6" />
                
                {/* Side Building */}
                <path d="M 700 800 L 700 600 L 950 600 L 950 800" />
                <path d="M 700 650 L 950 650 M 700 700 L 950 700 M 700 750 L 950 750" strokeWidth="1" strokeOpacity="0.5" />
                <path d="M 750 600 L 750 800 M 800 600 L 800 800 M 850 600 L 850 800 M 900 600 L 900 800" strokeWidth="1" strokeOpacity="0.5" />
              </g>

              {/* Architectural Dimension Lines & Markers */}
              <g strokeOpacity="0.6" strokeWidth="1">
                <line x1="380" y1="450" x2="380" y2="800" />
                <line x1="375" y1="450" x2="385" y2="450" />
                <line x1="375" y1="800" x2="385" y2="800" />
                <text x="365" y="625" transform="rotate(-90, 365, 625)" fill="currentColor" fontSize="12" letterSpacing="2" opacity="0.6">ELEVATION A</text>

                <line x1="400" y1="430" x2="700" y2="430" />
                <line x1="400" y1="425" x2="400" y2="435" />
                <line x1="700" y1="425" x2="700" y2="435" />
                <text x="550" y="420" fill="currentColor" fontSize="12" textAnchor="middle" letterSpacing="2" opacity="0.6">PHASE 1 STRUCTURE</text>
              </g>
              
              {/* Construction Nodes/Points */}
              <circle cx="400" cy="450" r="3" fill="currentColor" />
              <circle cx="700" cy="450" r="3" fill="currentColor" />
              <circle cx="700" cy="600" r="3" fill="currentColor" />
              <circle cx="950" cy="600" r="3" fill="currentColor" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#architectural-blueprint)" />
      </svg>
    </div>
  );
}
