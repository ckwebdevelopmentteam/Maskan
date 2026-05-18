"use client";

import React from "react";
import NavBar from "@/components/Client/NavBar";
import Footer from "@/sections/Footer/Server";
import { motion } from "motion/react";
import { MapPin, Calendar, Info, ShieldAlert } from "lucide-react";
import Image from "next/image";
import ProjectBanner from "@/public/property-5.jpg";

// Static imports for absolute stability
import Image1 from "@/public/property-3.jpg";
import Image2 from "@/public/property-4.jpg";
import Image3 from "@/public/property-1.jpg";
import CelesteRivieraImg from "@/public/celeste-riviera.png";
import AtmosphereImg from "@/public/atmosphere.png";
import EleveMaisonImg from "@/public/eleve-maison.png";
import LumiereResidencesImg from "@/public/lumiere-residences.png";
import AetherTowerImg from "@/public/aether-tower.png";
import SolariaHeightsImg from "@/public/property-4.jpg";
import VerdeVillaImg from "@/public/property-1.jpg";
import WellnessSanctuaryImg from "@/public/property-2.jpg";

export default function ProjectsPage() {
  const projects = [
    {
      name: "MERIDIAN HEIGHTS",
      location: "PERINTHALMANNA",
      type: "VILLA PROJECT",
      status: "ON GOING",
      desc: "An ultra-exclusive residential neighborhood featuring luxury smart-villas, custom structural elevations, suspended thermal roofing, and custom landscape formatting tailored for multi-generational comfort.",
      img: Image1,
      stats: [
        { label: "Plot Scale", val: "18 Kanals" },
        { label: "Structural Cast", val: "Grade 60 Steel" },
        { label: "Automation", val: "Lutron Integrated" },
      ],
    },
    {
      name: "AVORIA HEIGHTS",
      location: "MARAD",
      type: "APARTMENT",
      status: "ON GOING",
      desc: "A towering, luxury residential complex engineered with seismic-damping structures and floor-to-ceiling glass envelopes. Emphasizes modern spatial living, smart ventilation, and state-of-the-art parking infrastructures.",
      img: Image2,
      stats: [
        { label: "Floors", val: "14 Stories" },
        { label: "Concrete Grade", val: "C40 High-Strength" },
        { label: "Insulation", val: "Double-Glazed Low-E" },
      ],
    },
    {
      name: "WHITE FEELD",
      location: "MANJERI",
      type: "VILLA PROJECT",
      status: "ON GOING",
      desc: "A boutique community of minimalist white-sandstone villas structured with large perimeter overhangs, interior open-courtyards, suspensional structural stairs, and smart energy conservation systems.",
      img: Image3,
      stats: [
        { label: "Villas", val: "22 Exclusive Units" },
        { label: "Stone Cut", val: "Local White Travertine" },
        { label: "Sustainability", val: "Solar Net Metering" },
      ],
    },
    {
      name: "CELESTE RIVIERA",
      location: "ISLAMABAD DHA",
      type: "LUXURY ESTATE",
      status: "COMPLETED",
      desc: "An award-winning luxury estate designed with premium off-white sandstone, wide structural cantilevers, double-height ceiling voids, and fully custom interior carpentry details.",
      img: CelesteRivieraImg,
      stats: [
        { label: "Scope", val: "10,000 Sq. Ft." },
        { label: "Millwork", val: "Bespoke Solid Teak" },
        { label: "HVAC", val: "Daikin VRF System" },
      ],
    },
    {
      name: "ATMOSPHERE",
      location: "KARACHI COASTLINE",
      type: "PREMIUM APARTMENT",
      status: "COMPLETED",
      desc: "A coastal high-rise development featuring custom weatherproofing, marine-grade concrete casting, expansive wind-load engineered balconies, and infinite views of the Clifton horizon.",
      img: AtmosphereImg,
      stats: [
        { label: "Units", val: "80 Premium Flats" },
        { label: "Wind Load", val: "220 KM/H Certified" },
        { label: "Finishing", val: "Italian Travertine" },
      ],
    },
    {
      name: "ÉLEVÉ MAISON",
      location: "LAHORE DHA",
      type: "LUXURY VILLA",
      status: "COMPLETED",
      desc: "An architectural masterpiece built around central lightwells and indoor gardens. Features smart climate automation, fully custom-integrated kitchen modules, and premium floating steel staircases.",
      img: EleveMaisonImg,
      stats: [
        { label: "Villas", val: "4 Kanal Estate" },
        { label: "Kitchens", val: "Miele Integrated" },
        { label: "Flooring", val: "Solid Oak Parquet" },
      ],
    },
    {
      name: "LUMIÈRE RESIDENCES",
      location: "ISLAMABAD E-7",
      type: "PENTHOUSE COMPLEX",
      status: "COMPLETED",
      desc: "An elite low-rise apartment block designed with a premium glass facade, rooftop swimming pools, and dedicated private elevator cores leading straight to the penthouses.",
      img: LumiereResidencesImg,
      stats: [
        { label: "Floors", val: "5 Stories" },
        { label: "Automation", val: "Crestron Controlled" },
        { label: "Pools", val: "Rooftop Heated Glass" },
      ],
    },
    {
      name: "AETHER TOWER",
      location: "KARACHI CLIFTON",
      type: "COMMERCIAL PLAZA",
      status: "COMPLETED",
      desc: "A boutique commercial headquarters optimized for corporate performance. Designed with high-performance double-glazed solar-control glass facades and premium public lobbies.",
      img: AetherTowerImg,
      stats: [
        { label: "Corporate", val: "12 Exec Suites" },
        { label: "Facade", val: "Guardian Double-Glazed" },
        { label: "Elevators", val: "Kone High-Speed" },
      ],
    },
    {
      name: "SOLARIA HEIGHTS",
      location: "LAHORE GULBERG",
      type: "APARTMENT COMPLEX",
      status: "COMPLETED",
      desc: "High-density premium apartment building engineered with high-efficiency insulation, soundproofing concrete layers between floors, and automated backup electricity solutions.",
      img: SolariaHeightsImg,
      stats: [
        { label: "Apartments", val: "48 Premium Units" },
        { label: "Insulation", val: "Fiberglass Soundproof" },
        { label: "Power", val: "300 KVA Auto Gen" },
      ],
    },
    {
      name: "VERDE VILLA & RETREAT",
      location: "ABBOTTABAD FOOTHILLS",
      type: "RESORT ESTATE",
      status: "COMPLETED",
      desc: "An eco-friendly mountainside villa built using local raw building materials, featuring heavy thermal envelope insulation, custom stone fireplace chimneys, and natural mountain water streams.",
      img: VerdeVillaImg,
      stats: [
        { label: "Plot", val: "8 Kanals Hillside" },
        { label: "Chimney", val: "Bespoke River Stone" },
        { label: "Water", val: "Natural Spring Gravity" },
      ],
    },
    {
      name: "WELLNESS SANCTUARY",
      location: "MURREE HILLS",
      type: "HEALTH RETREAT",
      status: "COMPLETED",
      desc: "A boutique rehabilitation and wellness retreat optimized for absolute thermal efficiency. Designed with large cedarwood timber frames, smart heating floors, and grand yoga pavilions.",
      img: WellnessSanctuaryImg,
      stats: [
        { label: "Scope", val: "14,000 Sq. Ft." },
        { label: "Timber", val: "Solid Aged Cedar" },
        { label: "Heating", val: "Rehau Radiant Floor" },
      ],
    },
  ];

  return (
    <main className="bg-[#2B3530] text-[#D1CCBF] min-h-screen overflow-x-hidden">
      <NavBar />
      
      {/* 1. Header Banner */}
      <div className="relative h-[45vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <Image 
          src={ProjectBanner} 
          alt="maskan-projects-banner" 
          fill 
          className="object-cover opacity-35 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2B3530] via-[#2B3530]/40 to-transparent" />
        <div className="relative z-10 text-center space-y-4 px-4 max-w-3xl mt-16">
          <span className="text-white/60 text-xs uppercase tracking-[0.3em] font-bold block">Development Portfolio</span>
          <h1 className="text-4xl md:text-6xl font-light text-white leading-tight">
            Our Landmark <span className="font-normal border-b border-white/20 pb-1">Projects</span>
          </h1>
          <p className="text-sm md:text-base text-white/70 max-w-2xl mx-auto leading-relaxed pt-2">
            An outstanding catalog of ongoing luxury villa estates and architectural high-rises built with absolute structural predictability.
          </p>
        </div>
      </div>

      {/* 2. Projects Visual Cards Row (Asymmetric layout) */}
      <section className="py-20 md:py-28 px-4 md:px-16 max-w-7xl mx-auto space-y-32">
        {projects.map((proj, idx) => {
          const isEven = idx % 2 === 0;
          const isCompleted = proj.status === "COMPLETED";

          return (
            <div 
              key={proj.name}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-white/5 pb-24 last:border-0"
            >
              {/* Graphic Display (Spans 7 columns for premium width) */}
              <motion.div 
                className={`lg:col-span-7 relative w-full aspect-[16/10] rounded-none overflow-hidden border border-white/10 shadow-xl ${isEven ? "" : "lg:order-2"}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
              >
                <Image 
                  src={proj.img} 
                  alt={proj.name} 
                  fill 
                  className="object-cover transition-transform duration-700 hover:scale-103"
                  placeholder="blur"
                />
                
                {/* On-going Status Badge overlay */}
                <div className={`absolute top-6 left-6 text-[10px] font-mono tracking-widest font-semibold px-4 py-2 uppercase shadow-lg flex items-center gap-2 ${
                  isCompleted ? "bg-[#CED1BF] text-black" : "bg-white text-black"
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${isCompleted ? "bg-black" : "bg-green-500 animate-ping"}`} />
                  {proj.status}
                </div>
              </motion.div>

              {/* Text Area (Spans 5 columns) */}
              <motion.div 
                className={`lg:col-span-5 space-y-6 ${isEven ? "" : "lg:order-1"}`}
                initial={{ opacity: 0, x: isEven ? 25 : -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                {/* Sub Metadata anchors */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-white/50 tracking-wider">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{proj.location}</span>
                  </div>
                  <span className="w-1 h-1 bg-white/20 rounded-full" />
                  <div className="flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5" />
                    <span>{proj.type}</span>
                  </div>
                </div>

                {/* Title and Short Description */}
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-light text-white uppercase tracking-wider leading-none">
                    {proj.name}
                  </h2>
                  <p className="text-sm text-white/70 leading-relaxed font-light">
                    {proj.desc}
                  </p>
                </div>

                {/* Sub Tech-metrics grid */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                  {proj.stats.map((stat) => (
                    <div key={stat.label} className="space-y-1">
                      <span className="text-[10px] font-mono tracking-wider uppercase text-white/40 block leading-tight">
                        {stat.label}
                      </span>
                      <span className="text-sm font-semibold text-white block">
                        {stat.val}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          );
        })}
      </section>

      <Footer />
    </main>
  );
}
