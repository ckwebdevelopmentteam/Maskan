"use client";

import React from "react";
import NavBar from "@/components/Client/NavBar";
import Footer from "@/sections/Footer/Server";
import { motion } from "motion/react";
import { Hammer, Landmark, Paintbrush, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import ServiceBanner from "@/public/property-4.jpg";
import ImageRes from "@/public/property-1.jpg";
import ImageCom from "@/public/property-5.jpg";
import ImageInt from "@/public/property-3.jpg";

export default function ServicesPage() {
  const services = [
    {
      id: "01",
      title: "Residential Construction",
      tagline: "Turnkey Estates & Custom Villas",
      icon: Hammer,
      desc: "We construct elite private homes and residential communities utilizing premium, thermal-insulated concrete structures. From deep earth excavations to pristine custom structural columns, we manage every phase.",
      bullets: [
        "Turnkey Luxury Villa Construction",
        "Seismic-Compliant Foundation Casts",
        "Insulated Cellular Concrete Wall Panels",
        "Premium Master Carpenter Woodworking",
        "Smart-Grid Electrical Pre-Wiring",
      ],
      img: ImageRes,
    },
    {
      id: "02",
      title: "Commercial Construction",
      tagline: "High-Rise Office Plazas & Institutional Hubs",
      icon: Landmark,
      desc: "Our commercial division builds modern workspace ecosystems and retail centers engineered for maximum spatial efficiency and long-term durability. We enforce rapid structural casting methods.",
      bullets: [
        "Multi-Story Office Plaza Projects",
        "Industrial Scaffolding & Steel Framing",
        "Weatherproof Concrete & Facade Curing",
        "Central HVAC & Fire-Suppression Prep",
        "Wide-Span Post-Tensioned Slabs",
      ],
      img: ImageCom,
    },
    {
      id: "03",
      title: "Interior Design & Space Planning",
      tagline: "High-End Architectural Finishes",
      icon: Paintbrush,
      desc: "We deliver world-class interior architecture, executing micro-detailed millwork, premium marble tiling, and seamless structural ceiling integrations that elevate user wellness.",
      bullets: [
        "Polished Italian & Local Marble Installations",
        "Custom Built-in Wardrobes & Kitchen Carpentry",
        "Acoustic Suspended Ceiling Formworks",
        "High-End Spatial Lighting Matrices",
        "Automated Smart-Home Energy Systems",
      ],
      img: ImageInt,
    },
  ];

  return (
    <main className="bg-[#2B3530] text-[#D1CCBF] min-h-screen overflow-x-hidden">
      <NavBar />
      
      {/* 1. Header Banner */}
      <div className="relative h-[45vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <Image 
          src={ServiceBanner} 
          alt="maskan-services-banner" 
          fill 
          className="object-cover opacity-35 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2B3530] via-[#2B3530]/40 to-transparent" />
        <div className="relative z-10 text-center space-y-4 px-4 max-w-3xl mt-16">
          <span className="text-white/60 text-xs uppercase tracking-[0.3em] font-bold block">Capabilities</span>
          <h1 className="text-4xl md:text-6xl font-light text-white leading-tight">
            Our <span className="font-normal border-b border-white/20 pb-1">Design &amp; Build Services</span>
          </h1>
          <p className="text-sm md:text-base text-white/70 max-w-2xl mx-auto leading-relaxed pt-2">
            Fully vertically integrated construction divisions handling heavy engineering structural builds and luxury interior finishings.
          </p>
        </div>
      </div>

      {/* 2. Services Interactive Visual Grid */}
      <section className="py-20 md:py-28 px-4 md:px-16 max-w-7xl mx-auto space-y-24">
        {services.map((ser, idx) => {
          const IconComponent = ser.icon;
          const isEven = idx % 2 === 0;

          return (
            <div 
              key={ser.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-white/5 pb-20 last:border-0"
            >
              {/* Text Area */}
              <motion.div 
                className={`lg:col-span-6 space-y-6 ${isEven ? "" : "lg:order-2"}`}
                initial={{ opacity: 0, x: isEven ? -25 : 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-mono font-bold text-white/30">{ser.id}</span>
                  <span className="w-1.5 h-1.5 bg-white/20 rounded-full" />
                  <span className="text-xs uppercase tracking-widest font-mono text-white/50">{ser.tagline}</span>
                </div>

                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-light text-white uppercase tracking-wide">
                    {ser.title}
                  </h2>
                  <p className="text-sm md:text-base text-white/75 leading-relaxed font-light">
                    {ser.desc}
                  </p>
                </div>

                {/* Bullets stack */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  {ser.bullets.map((bullet) => (
                    <div key={bullet} className="flex gap-3 items-center group">
                      <CheckCircle2 className="w-4 h-4 text-white/50 group-hover:text-white transition-colors duration-300 flex-shrink-0" />
                      <span className="text-xs text-white/70 group-hover:text-white transition-colors duration-300 font-light">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Graphic Display */}
              <motion.div 
                className={`lg:col-span-6 relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-xl ${isEven ? "" : "lg:order-1"}`}
                initial={{ opacity: 0, x: isEven ? 25 : -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <Image 
                  src={ser.img} 
                  alt={ser.title} 
                  fill 
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-6 right-6 bg-black/40 p-4 rounded-xl border border-white/5 text-white backdrop-blur-md">
                  <IconComponent className="w-6 h-6 stroke-[1.5]" />
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
