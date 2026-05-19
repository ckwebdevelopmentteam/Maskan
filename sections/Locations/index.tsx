"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Navigation } from "lucide-react";

// Import project images for the hover card
import CelesteRivieraImg from "@/public/celeste-riviera.png";
import AtmosphereImg from "@/public/atmosphere.png";
import EleveMaisonImg from "@/public/eleve-maison.png";
import VerdeVillaImg from "@/public/property-1.jpg";

const locations = [
  {
    id: "wayanad",
    region: "WAYANAD HILLS",
    coordinates: "11.6854° N, 76.1320° E",
    x: 42,
    y: 15,
    projectName: "Verde Villa & Retreat",
    image: VerdeVillaImg,
    sectors: ["Vythiri Forest Resorts", "Kalpetta Premium Retreats", "Meppadi Eco-Mansions", "Sulthan Bathery Mountain Villas"],
    description: "Luxury organic villas and retreats built harmoniously into Wayanad's lush mountainous terrain, designed for sustainable energy and ultimate peaceful living.",
  },
  {
    id: "calicut",
    region: "CALICUT ENVIRONS",
    coordinates: "11.2588° N, 75.7804° E",
    x: 34,
    y: 32,
    projectName: "Élevé Maison",
    image: EleveMaisonImg,
    sectors: ["Bypass Luxury Penthouses", "Palazhi Elite Enclaves", "Chevarambalam Eco-Villas", "Calicut Beach Residences"],
    description: "Combining Malabar heritage with cutting-edge design, these commercial and premium residential properties offer optimized spaces and highly durable structural finishes.",
  },
  {
    id: "kochi",
    region: "KOCHI COASTLINE",
    coordinates: "9.9312° N, 76.2673° E",
    x: 52,
    y: 58,
    projectName: "Celeste Riviera",
    image: CelesteRivieraImg,
    sectors: ["Marine Drive Penthouses", "Kadavanthra Premium Suites", "Kakkanad Smart-City Enclaves", "Vyttila Executive Mansions"],
    description: "Waterfront luxury developments focusing on smart architecture, stunning panoramic sea views, and robust engineering designed to withstand coastal weather conditions.",
  },
  {
    id: "trivandrum",
    region: "TRIVANDRUM METROPOLIS",
    coordinates: "8.5241° N, 76.9366° E",
    x: 74,
    y: 88,
    projectName: "Atmosphere",
    image: AtmosphereImg,
    sectors: ["Kowdiar Royal Enclaves", "Akkulam Lakeview Villas", "Technopark Premium Residences", "Vizhinjam Coastal Mansions"],
    description: "Bespoke Royal-standard developments in Kerala's capital. Built with heavy casting frameworks, premium insulation, and custom interior finishes.",
  },
];

export default function Locations() {
  const [activeLoc, setActiveLoc] = useState(locations[2]); // Default to Kochi

  return (
    <div id="locations" className="bg-[#2B3530] py-24 md:py-36 px-4 md:px-16 text-[#DCD4C4] border-t border-white/5 relative overflow-hidden">
      {/* Decorative architectural grid lines */}
      <div className="absolute inset-0 grid grid-cols-4 pointer-events-none opacity-5">
        <div className="border-r border-white h-full" />
        <div className="border-r border-white h-full" />
        <div className="border-r border-white h-full" />
      </div>

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-4">
            <span className="text-white/60 text-xs uppercase tracking-[0.25em] font-bold block">Regional Footprint</span>
            <h2 className="text-3xl md:text-5xl font-light text-white leading-tight">
              Locations &amp; <br />
              <span className="font-normal border-b border-white/20 pb-1">Areas Served</span>
            </h2>
          </div>
          <p className="max-w-md text-white/50 text-sm leading-relaxed">
            Maskan's luxury construction engineering spans across Kerala's most premium metropolitan and scenic coastal/mountainous enclaves. Hover or tap to explore.
          </p>
        </div>

        {/* Interactive Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Dynamic Detail Card (45% width on desktop) */}
          <div className="lg:col-span-5 flex flex-col justify-center min-h-[480px] w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLoc.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full bg-[#232b27] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
              >
                {/* Image Section with Gradient Overlay */}
                <div className="relative h-64 w-full overflow-hidden border-b border-white/10">
                  <Image
                    src={activeLoc.image}
                    alt={activeLoc.projectName}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#232b27] via-transparent to-transparent" />
                  
                  {/* Coordinates Badge */}
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-1.5">
                    <Navigation className="w-3 h-3 text-[#DCD4C4] rotate-45" />
                    <span className="text-[10px] font-mono tracking-widest text-[#DCD4C4]/80">
                      {activeLoc.coordinates}
                    </span>
                  </div>
                </div>

                {/* Info & Content Section */}
                <div className="p-8 space-y-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-semibold">
                        {activeLoc.region}
                      </span>
                      <h3 className="text-2xl font-light text-white tracking-wide">
                        {activeLoc.projectName}
                      </h3>
                    </div>
                    <p className="text-xs md:text-sm text-white/60 leading-relaxed font-light">
                      {activeLoc.description}
                    </p>
                  </div>

                  {/* Sectors list */}
                  <div className="pt-6 border-t border-white/5 space-y-3">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#DCD4C4]/40 block font-bold">
                      Featured Sectors & Projects
                    </span>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                      {activeLoc.sectors.map((sec) => (
                        <li key={sec} className="text-xs text-white/70 flex items-center gap-2">
                          <span className="w-1 h-1 bg-white/40 rounded-full shrink-0" />
                          <span className="truncate">{sec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT: Kerala Interactive Map (55% width on desktop) */}
          <div className="lg:col-span-7 flex justify-center items-center relative w-full h-[600px] bg-[#232b27]/40 rounded-3xl border border-white/5 p-6 overflow-hidden">
            {/* Grid blueprint background inside map panel */}
            <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(220, 212, 196, 0.15)" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#map-grid)" />
              </svg>
            </div>

            {/* Stylized Kerala SVG Outline */}
            <div className="relative z-10 w-full h-full max-w-[450px] max-h-[550px]">
              <svg
                viewBox="0 0 400 700"
                className="w-full h-full text-white/10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* stylized Kerala geometry */}
                <path
                  d="M 160 50 
                     C 150 70, 140 90, 120 110 
                     C 105 130, 95 155, 110 180 
                     C 120 195, 135 210, 138 230 
                     C 142 255, 130 290, 138 320 
                     C 145 350, 168 385, 172 420 
                     C 176 460, 166 495, 182 530 
                     C 192 555, 215 575, 222 610 
                     C 228 640, 215 675, 235 710 
                     C 240 720, 255 725, 260 735
                     L 262 730
                     C 250 705, 238 675, 235 640
                     C 232 605, 245 570, 232 535
                     C 220 500, 196 475, 190 440
                     C 183 400, 198 360, 188 325
                     C 178 285, 160 255, 158 220
                     C 155 185, 168 160, 162 125
                     C 158 90, 172 60, 165 40
                     Z"
                  stroke="rgba(220, 212, 196, 0.35)"
                  strokeWidth="2.5"
                  fill="rgba(35, 43, 39, 0.3)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Stylized Coastal Water Wavelets */}
                <path d="M 60 200 C 70 205, 80 205, 90 200" stroke="rgba(220, 212, 196, 0.15)" strokeWidth="1" />
                <path d="M 80 400 C 90 405, 100 405, 110 400" stroke="rgba(220, 212, 196, 0.15)" strokeWidth="1" />
                <path d="M 120 600 C 130 605, 140 605, 150 600" stroke="rgba(220, 212, 196, 0.15)" strokeWidth="1" />

                {/* Compass Rose */}
                <g transform="translate(320, 120) scale(0.7)">
                  <circle cx="0" cy="0" r="30" stroke="rgba(220, 212, 196, 0.15)" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="-40" y1="0" x2="40" y2="0" stroke="rgba(220, 212, 196, 0.2)" strokeWidth="1" />
                  <line x1="0" y1="-40" x2="0" y2="40" stroke="rgba(220, 212, 196, 0.2)" strokeWidth="1" />
                  <polygon points="0,-35 5,-10 0,0" fill="rgba(220, 212, 196, 0.4)" />
                  <polygon points="0,-35 -5,-10 0,0" fill="rgba(220, 212, 196, 0.2)" />
                  <polygon points="0,35 5,10 0,0" fill="rgba(220, 212, 196, 0.2)" />
                  <polygon points="0,35 -5,10 0,0" fill="rgba(220, 212, 196, 0.4)" />
                  <polygon points="35,0 10,5 0,0" fill="rgba(220, 212, 196, 0.4)" />
                  <polygon points="35,0 10,-5 0,0" fill="rgba(220, 212, 196, 0.2)" />
                  <polygon points="-35,0 -10,5 0,0" fill="rgba(220, 212, 196, 0.2)" />
                  <polygon points="-35,0 -10,-5 0,0" fill="rgba(220, 212, 196, 0.4)" />
                  <text x="-5" y="-45" fill="rgba(220, 212, 196, 0.5)" fontSize="10" fontFamily="monospace">N</text>
                </g>

                {/* Scale Indicator */}
                <g transform="translate(40, 640)">
                  <line x1="0" y1="0" x2="60" y2="0" stroke="rgba(220, 212, 196, 0.3)" strokeWidth="1.5" />
                  <line x1="0" y1="-4" x2="0" y2="4" stroke="rgba(220, 212, 196, 0.3)" strokeWidth="1.5" />
                  <line x1="30" y1="-2" x2="30" y2="2" stroke="rgba(220, 212, 196, 0.3)" strokeWidth="1" />
                  <line x1="60" y1="-4" x2="60" y2="4" stroke="rgba(220, 212, 196, 0.3)" strokeWidth="1.5" />
                  <text x="70" y="4" fill="rgba(220, 212, 196, 0.4)" fontSize="9" fontFamily="monospace">50 KM</text>
                </g>
              </svg>

              {/* Interactive HTML Hotspots absolute positioned over SVG */}
              {locations.map((loc) => {
                const isActive = activeLoc.id === loc.id;
                return (
                  <div
                    key={loc.id}
                    style={{
                      left: `${loc.x}%`,
                      top: `${loc.y}%`,
                    }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group/pin cursor-pointer z-20"
                    onMouseEnter={() => setActiveLoc(loc)}
                    onClick={() => setActiveLoc(loc)}
                  >
                    {/* Glowing outer ring */}
                    <div
                      className={`absolute -inset-4 rounded-full transition-all duration-500 scale-75 group-hover/pin:scale-100 ${
                        isActive 
                          ? "bg-white/10 border border-white/30 animate-pulse" 
                          : "bg-transparent border border-transparent group-hover/pin:bg-white/5 group-hover/pin:border-white/10"
                      }`}
                    />

                    {/* Dot pin */}
                    <div
                      className={`relative flex items-center justify-center w-8 h-8 rounded-full border-2 transition-all duration-300 ${
                        isActive
                          ? "bg-[#DCD4C4] border-white text-[#2B3530] scale-110 shadow-lg"
                          : "bg-[#232b27] border-white/30 text-white/70 group-hover/pin:border-white group-hover/pin:text-white"
                      }`}
                    >
                      <MapPin className="w-4 h-4" />
                      
                      {/* Pulse effect */}
                      {!isActive && (
                        <span className="absolute inset-0 rounded-full border border-white/40 animate-ping opacity-75" />
                      )}
                    </div>

                    {/* Text tooltip next to pin */}
                    <div
                      className={`absolute left-10 top-1/2 -translate-y-1/2 whitespace-nowrap px-3 py-1 rounded bg-[#232b27]/90 border text-[11px] tracking-wider transition-all duration-300 ${
                        isActive
                          ? "border-white/30 text-white translate-x-0 opacity-100"
                          : "border-white/10 text-white/50 -translate-x-2 opacity-0 pointer-events-none group-hover/pin:opacity-100 group-hover/pin:translate-x-0"
                      }`}
                    >
                      {loc.projectName.toUpperCase()}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
