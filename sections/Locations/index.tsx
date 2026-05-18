"use client";
import React from "react";
import { motion } from "motion/react";
import { MapPin, Navigation } from "lucide-react";

const locations = [
  {
    region: "ISLAMABAD & RAWALPINDI",
    coordinates: "33.6844° N, 73.0479° E",
    sectors: ["DHA Phases I - VIII", "Bahria Town Elite", "Sectors E-7, F-6, F-7, G-11", "Park View City VIP Enclaves"],
    description: "Capital territory developments focusing on monumental structural frameworks, scenic hill-side villas, and highly engineered civic residences.",
  },
  {
    region: "LAHORE & ENVIRONS",
    coordinates: "31.5204° N, 74.3587° E",
    sectors: ["DHA Raya & Phase VI-IX", "Gulberg Estates", "Lake City Executive Villas", "State Life Phase I"],
    description: "Modern structural wonders merging traditional cultural elements with luxury contemporary finishes and sustainable thermal insulation systems.",
  },
  {
    region: "KARACHI COASTLINE",
    coordinates: "24.8607° N, 67.0011° E",
    sectors: ["DHA Golf City Phase VIII", "Clifton Premium Mansions", "Emaar Crescent Bay Towers", "KDA Scheme I Estates"],
    description: "Coastal high-rise residences and premium villas constructed with highly-specialized wind-resilient structures and premium weatherproofing materials.",
  },
  {
    region: "ELITE NORTH ENCLAVES",
    coordinates: "34.0151° N, 71.5249° E",
    sectors: ["Peshawar DHA Executive", "Abbottabad Hilltop Villas", "Swat Valley Luxury Resorts", "Kalam Organic Retreats"],
    description: "Architectural retreats and resorts crafted harmoniously into natural landscapes, engineered to withstand extreme mountain climates.",
  },
];

export default function Locations() {
  return (
    <div id="locations" className="bg-[#2B3530] py-24 md:py-36 px-4 md:px-16 text-[#D1CCBF] border-t border-white/5 relative overflow-hidden">
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
            Maskan's luxury construction engineering spans across Pakistan's most premium metropolitan and scenic coastal/mountainous enclaves.
          </p>
        </div>

        {/* Grid of Locations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {locations.map((loc, idx) => (
            <motion.div
              key={loc.region}
              className="bg-[#232b27] border border-white/10 p-8 flex flex-col justify-between min-h-[420px] transition-all duration-500 hover:border-white/30 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="flex justify-between items-start">
                  <div className="bg-white/5 p-3 rounded-lg border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-white/40 group-hover:text-white/60 transition-colors flex items-center gap-1.5 mt-1">
                    <Navigation className="w-2.5 h-2.5" />
                    {loc.coordinates}
                  </span>
                </div>

                {/* Info */}
                <div className="space-y-3">
                  <h3 className="text-base font-medium tracking-wider text-white group-hover:translate-x-1 transition-transform duration-300">
                    {loc.region}
                  </h3>
                  <p className="text-xs text-white/50 leading-relaxed font-light">
                    {loc.description}
                  </p>
                </div>
              </div>

              {/* Sectors list */}
              <div className="pt-6 border-t border-white/5 mt-6 space-y-2">
                <span className="text-[10px] uppercase tracking-widest text-white/30 block font-bold">Featured Sectors</span>
                <ul className="space-y-1">
                  {loc.sectors.map((sec) => (
                    <li key={sec} className="text-xs text-white/70 hover:text-white transition-colors flex items-center gap-2">
                      <span className="w-1 h-1 bg-white/40 rounded-full" />
                      {sec}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
