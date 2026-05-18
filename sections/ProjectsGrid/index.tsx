"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import SectionTitle from "@/components/Server/SectionTitle";

// Static imports for absolute bundle stability
import CelesteRivieraImg from "@/public/celeste-riviera.png";
import AtmosphereImg from "@/public/atmosphere.png";
import EleveMaisonImg from "@/public/eleve-maison.png";
import LumiereResidencesImg from "@/public/lumiere-residences.png";
import AetherTowerImg from "@/public/aether-tower.png";
import SolariaHeightsImg from "@/public/property-4.jpg";
import VerdeVillaImg from "@/public/property-1.jpg";
import WellnessSanctuaryImg from "@/public/property-2.jpg";

const projects = [
  { name: "CELESTE RIVIERA", image: CelesteRivieraImg },
  { name: "ATMOSPHERE", image: AtmosphereImg },
  { name: "ÉLEVÉ MAISON", image: EleveMaisonImg },
  { name: "LUMIÈRE RESIDENCES", image: LumiereResidencesImg },
  { name: "AETHER TOWER", image: AetherTowerImg },
  { name: "SOLARIA HEIGHTS", image: SolariaHeightsImg },
  { name: "VERDE VILLA & RETREAT", image: VerdeVillaImg },
  { name: "WELLNESS SANCTUARY", image: WellnessSanctuaryImg },
];

export default function ProjectsGrid() {
  return (
    <div id="portfolio" className="overflow-x-hidden bg-[#2B3530] px-3-75 py-24 text-[#D1CCBF] md:px-16 md:py-36 flex flex-col gap-16 md:gap-20 border-t border-white/5">
      {/* Minimalist Intro Header Section */}
      <div className="border-b border-white/10 pb-6">
        <SectionTitle>Maskan Projects</SectionTitle>
      </div>

      {/* Grid of 8 Majestic Properties */}
      <div className="w-full flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-7xl">
          {projects.map((project, idx) => (
            <Link href="/projects" key={project.name} className="w-full">
              <motion.div
                className="relative aspect-[2/3] w-full overflow-hidden rounded-none border border-white/10 group cursor-pointer shadow-2xl bg-[#232b27]"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
              >
                {/* Image block */}
                <motion.div 
                  className="w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                >
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    priority
                  />
                </motion.div>

                {/* Overlay block */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent flex flex-col justify-end items-center pb-12 px-6">
                  {/* Title */}
                  <h3 className="text-sm md:text-base font-light tracking-[0.25em] text-white text-center leading-tight">
                    {project.name}
                  </h3>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* View All Projects Action Link */}
        <div className="flex justify-center mt-12 md:mt-16 w-full">
          <Link href="/projects">
            <button className="bg-transparent border-none text-white hover:text-white/80 text-sm uppercase tracking-[0.25em] font-medium py-3 px-6 flex items-center gap-4 transition-all duration-300 group cursor-pointer">
              <svg 
                className="w-8 h-3 text-white transition-transform duration-300 group-hover:translate-x-1" 
                viewBox="0 0 40 10" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5"
              >
                <line x1="0" y1="5" x2="35" y2="5" />
                <path d="M30,1 L35,5 L30,9" />
              </svg>
              View Full Portfolio
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
