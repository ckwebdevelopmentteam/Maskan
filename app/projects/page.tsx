"use client";

import React from "react";
import NavBar from "@/components/Client/NavBar";
import Footer from "@/sections/Footer/Server";
import FAQ from "@/sections/FAQ";
import Form from "@/sections/Form";
import { motion } from "motion/react";
import Image from "next/image";

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

export default function ProjectsPage() {
  const projects = [
    {
      name: "Meridian Villa Project",
      location: "Perinthalmanna, Kerala",
      type: "Villa Project",
      status: "ON GOING",
      desc: "An ultra-exclusive residential neighborhood featuring luxury smart-villas, custom architectural elevations, suspended thermal roofing, and custom landscape formatting tailored for multi-generational comfort.",
      img: Image1,
      stats: [
        { label: "Plot Scale", val: "18 Acres" },
        { label: "Structural Cast", val: "Grade 60 Steel" },
        { label: "Automation", val: "Lutron Integrated" },
      ],
    },
    {
      name: "The Avenue Commercial Hub",
      location: "Kozhikode Road, Manjeri",
      type: "Commercial Plaza",
      status: "ON GOING",
      desc: "A towering, luxury commercial complex engineered for corporate offices, retail spaces, and heavy business footfall. Focuses on premium wide-span post-tensioned slab architectures.",
      img: Image2,
      stats: [
        { label: "Floors", val: "8 Stories" },
        { label: "Concrete Grade", val: "C40 High-Strength" },
        { label: "Insulation", val: "Double-Glazed Low-E" },
      ],
    },
    {
      name: "Calicut Bay Residences",
      location: "Calicut Coastline, Kerala",
      type: "Apartment",
      status: "ON GOING",
      desc: "A boutique community of seaside residences structured with large perimeter overhangs, interior open-courtyards, suspensional structural stairs, and smart energy conservation systems.",
      img: Image3,
      stats: [
        { label: "Apartments", val: "32 Premium Units" },
        { label: "Stone Cut", val: "Local Travertine" },
        { label: "Sustainability", val: "Solar Net Metering" },
      ],
    },
    {
      name: "Travertine Villa",
      location: "Patterkulam, Manjeri",
      type: "Luxury Estate",
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
      name: "Malabar Medical Hub",
      location: "Malappuram District, Kerala",
      type: "Hospital Building",
      status: "COMPLETED",
      desc: "A state-of-the-art clinical facility designed with specialized medical zoning, high-traffic infection control surfaces, and custom-integrated ambulance bays.",
      img: AtmosphereImg,
      stats: [
        { label: "Scope", val: "38,000 Sq. Ft." },
        { label: "Zoning", val: "Class-100 Cleanrooms" },
        { label: "Surfaces", val: "Antimicrobial Cast" },
      ],
    },
    {
      name: "Silk Road Retreat",
      location: "Wayanad Hills, Kerala",
      type: "Resort Estate",
      status: "COMPLETED",
      desc: "An eco-friendly mountainside villa built using local raw building materials, featuring heavy thermal envelope insulation, custom stone fireplace chimneys, and natural mountain water streams.",
      img: EleveMaisonImg,
      stats: [
        { label: "Plot", val: "8 Acres Hillside" },
        { label: "Chimney", val: "Bespoke River Stone" },
        { label: "Water", val: "Natural Spring Gravity" },
      ],
    },
    {
      name: "The Prefab Headquarters",
      location: "Kochi Industrial Zone, Kerala",
      type: "Prefab Warehouse",
      status: "COMPLETED",
      desc: "A high-speed factory assembled prefab warehouse complex optimized for shipping, logistics, and heavy manufacturing.",
      img: LumiereResidencesImg,
      stats: [
        { label: "Scope", val: "24,000 Sq. Ft." },
        { label: "Assembling", val: "Factory-To-Site Prefab" },
        { label: "Erect Time", val: "45 Days Completed" },
      ],
    },
    {
      name: "Eucalyptus Villa",
      location: "Perinthalmanna, Kerala",
      type: "Luxury Villa",
      status: "COMPLETED",
      desc: "An architectural masterpiece built around central lightwells and indoor gardens. Features smart climate automation, fully custom-integrated kitchen modules, and premium floating steel staircases.",
      img: AetherTowerImg,
      stats: [
        { label: "Scope", val: "6,500 Sq. Ft." },
        { label: "Kitchens", val: "Miele Integrated" },
        { label: "Flooring", val: "Solid Oak Parquet" },
      ],
    },
    {
      name: "Misty Dock Hotels",
      location: "Munnar Foothills, Kerala",
      type: "Hospitality Retreat",
      status: "COMPLETED",
      desc: "A boutique rehabilitation and wellness retreat designed with large cedarwood timber frames, smart heating floors, and grand yoga pavilions.",
      img: SolariaHeightsImg,
      stats: [
        { label: "Scope", val: "14,000 Sq. Ft." },
        { label: "Timber", val: "Solid Aged Cedar" },
        { label: "Heating", val: "Rehau Radiant Floor" },
      ],
    },
  ];

  return (
    <main className="bg-[var(--bg-primary)] text-[var(--fg-primary)] min-h-screen relative overflow-x-hidden">
      <NavBar />
      
      {/* 1. Integrated Lookbook Grid Hero */}
      <div className="relative w-full z-10 pt-36 md:pt-48 border-b border-[var(--fg-primary)]/10">

        {/* Row 1 Content: Wide Text & Two Custom Renders */}
        <div className="grid grid-cols-1 md:grid-cols-4 h-auto md:h-[60vh] min-h-[500px]">
          
          {/* Columns 1 & 2 Combined (50%): Text Overlay on Stairs Background */}
          <div className="relative md:col-span-2 border-b md:border-b-0 md:border-r border-[var(--fg-primary)]/10 p-8 md:p-12 lg:p-16 flex flex-col justify-between min-h-[400px] md:min-h-0 group overflow-hidden">
            
            {/* Background Stairs Image with adaptive tint */}
            <div className="absolute inset-0 w-full h-full -z-10">
              <Image 
                src="/about.avif" 
                alt="concrete stairs background" 
                fill 
                priority
                className="object-cover brightness-[0.95] dark:brightness-[0.3] contrast-[1.05] transition-transform duration-[10s] ease-out group-hover:scale-105"
              />
              {/* Theme adaptive overlay tint */}
              <div className="absolute inset-0 bg-[var(--bg-primary)]/20 dark:bg-[var(--bg-primary)]/50 mix-blend-multiply" />
            </div>

            {/* Top Row decoration or sub-label */}
            <span className="text-[var(--accent)] text-[10px] font-mono tracking-widest uppercase">
              {"// DESIGN MANIFESTO"}
            </span>

            {/* Serif Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-serif font-light leading-[1.15] text-[var(--fg-primary)] tracking-tight max-w-xl my-auto py-8">
              Transforming spaces.<br />
              Evoking emotion.<br />
              <span className="italic font-normal">Creating meaning.</span>
            </h1>

            {/* Book A Call Elegant Split Button */}
            <a 
              href="#contact" 
              className="inline-flex items-center group/btn border border-[var(--fg-primary)]/30 hover:border-[var(--accent)] transition-colors duration-300 w-fit rounded-sm overflow-hidden"
            >
              <div className="px-5 py-4 bg-[var(--fg-primary)] text-[var(--bg-primary)] group-hover/btn:bg-[var(--accent)] transition-colors duration-300 flex items-center justify-center border-r border-[var(--fg-primary)]/20">
                <span className="text-xs group-hover/btn:translate-x-0.5 transition-transform duration-300">→</span>
              </div>
              <div className="px-8 py-4 bg-[var(--bg-primary)] text-[var(--fg-primary)] group-hover/btn:text-[var(--accent)] transition-colors duration-300">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] font-semibold">
                  BOOK A CALL
                </span>
              </div>
            </a>

          </div>

          {/* Column 3: Modern Minimalist Wood Pavilion Image */}
          <div className="relative border-b md:border-b-0 md:border-r border-[var(--fg-primary)]/10 h-[300px] md:h-full group overflow-hidden">
            <Image 
              src="/hero_wood_pavilion.png" 
              alt="modern-wood-pavilion" 
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            {/* Soft dark gradient at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
              <span className="text-[9px] font-mono tracking-widest text-white uppercase bg-black/60 px-3 py-1.5 rounded-sm">
                01 / PAVILION
              </span>
            </div>
          </div>

          {/* Column 4: Futuristic Organic Curved Villa Image */}
          <div className="relative h-[300px] md:h-full group overflow-hidden">
            <Image 
              src="/hero_organic_villa.png" 
              alt="futuristic-organic-villa" 
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            {/* Soft dark gradient at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
              <span className="text-[9px] font-mono tracking-widest text-white uppercase bg-black/60 px-3 py-1.5 rounded-sm">
                02 / ORGANIC VILLA
              </span>
            </div>
          </div>

        </div>

        {/* Row 2 Content: Staggered Lookbook Images */}
        <div className="grid grid-cols-1 md:grid-cols-4 h-auto md:h-[40vh] min-h-[300px] border-t border-[var(--fg-primary)]/10">
          
          {/* Column 1: Drone top-down view of Circular Forest Villa */}
          <div className="relative border-b md:border-b-0 md:border-r border-[var(--fg-primary)]/10 h-[250px] md:h-full group overflow-hidden">
            <Image 
              src="/hero_circular_forest.png" 
              alt="circular-forest-villa" 
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
              <span className="text-[9px] font-mono tracking-widest text-white uppercase bg-black/60 px-3 py-1.5 rounded-sm">
                03 / FOREST CIRCLE
              </span>
            </div>
          </div>

          {/* Column 2: White Vaulted Jungle Pavilion */}
          <div className="relative border-b md:border-b-0 md:border-r border-[var(--fg-primary)]/10 h-[250px] md:h-full group overflow-hidden">
            <Image 
              src="/hero_vaulted_jungle.png" 
              alt="vaulted-jungle-pavilion" 
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
              <span className="text-[9px] font-mono tracking-widest text-white uppercase bg-black/60 px-3 py-1.5 rounded-sm">
                04 / JUNGLE VAULT
              </span>
            </div>
          </div>

          {/* Columns 3 & 4 (50%): Misty City Skyline Skyline */}
          <div className="relative md:col-span-2 h-[250px] md:h-full group overflow-hidden">
            <Image 
              src="/hero_misty_skyline.png" 
              alt="misty-city-skyline" 
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
              <span className="text-[9px] font-mono tracking-widest text-white uppercase bg-black/60 px-3 py-1.5 rounded-sm">
                05 / URBAN HEIGHTS
              </span>
            </div>
          </div>

        </div>

      </div>

      {/* Wrapper for content below Hero to anchor vertical grid lines perfectly */}
      <div className="relative w-full z-10">
        
        {/* Delicate Vertical Grid Lines starting exactly below the Hero section */}
        <div className="absolute inset-0 pointer-events-none z-0 flex justify-between px-6 md:px-16 max-w-7xl mx-auto">
          <div className="w-[1px] h-full bg-[var(--fg-primary)]/5" />
          <div className="w-[1px] h-full bg-[var(--fg-primary)]/5 hidden md:block" />
          <div className="w-[1px] h-full bg-[var(--fg-primary)]/5 hidden md:block" />
          <div className="w-[1px] h-full bg-[var(--fg-primary)]/5" />
        </div>

        {/* 2. Selected Works Intro Section */}
        <div className="relative z-10 pt-24 pb-16 md:pb-24 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Left Column: Brand & Category Track */}
          <div className="md:col-span-3">
            <span className="text-xs md:text-sm font-semibold tracking-[0.3em] uppercase block">
              MASKAN®
            </span>
            <span className="text-[10px] md:text-xs font-mono tracking-widest text-[var(--fg-primary)]/40 uppercase block mt-1">
              {"// Selected work '26"}
            </span>
          </div>

          {/* Right Column: Large Typographic Narrative */}
          <div className="md:col-span-9 space-y-6">
            <motion.h2 
              className="text-4xl md:text-6xl font-light tracking-tight text-[var(--fg-primary)] leading-none"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.24, 0.43, 0.15, 0.97] }}
            >
              Selected Works
            </motion.h2>
            <motion.p 
              className="text-sm md:text-base text-[var(--fg-primary)]/70 max-w-xl font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.24, 0.43, 0.15, 0.97] }}
            >
              A curated selection of residential and commercial interior projects that demonstrate our approach to spatial clarity &amp; long-term usability across different scales and contexts.
            </motion.p>
          </div>
        </div>
      </div>

      {/* 3. Projects Visual Cards Grid (Staggered layout) */}
      <section className="relative z-10 px-6 md:px-16 pb-48 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 md:gap-y-36">
          {projects.map((proj, idx) => {
            const isCompleted = proj.status === "COMPLETED";
            const isStaggered = idx % 2 === 1;

            return (
              <motion.div 
                key={proj.name}
                className={`group flex flex-col w-full ${isStaggered ? "md:mt-24" : ""}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
              >
                {/* Graphic Display with diagonal Top-Right chamfer corner */}
                <div 
                  className="relative w-full aspect-[4/3] md:aspect-[16/11] overflow-hidden border border-[var(--border-white-10)] shadow-xl cursor-pointer"
                  style={{ clipPath: "polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0 100%)" }}
                >
                  <Image 
                    src={proj.img} 
                    alt={proj.name} 
                    fill 
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    placeholder="blur"
                  />
                  
                  {/* Status Badge overlay */}
                  <div className={`absolute top-6 left-6 text-[9px] font-mono tracking-widest font-semibold px-3 py-1.5 uppercase shadow-md flex items-center gap-1.5 ${
                    isCompleted ? "bg-[var(--accent)] text-[var(--bg-primary)]" : "bg-white text-[var(--bg-primary)]"
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${isCompleted ? "bg-[var(--bg-primary)]" : "bg-green-500 animate-ping"}`} />
                    {proj.status}
                  </div>
                </div>

                {/* Metadata & Description Overlay Below */}
                <div className="space-y-3 mt-6">
                  {/* Category & Location Info */}
                  <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-[var(--accent)] uppercase">
                    <span>{proj.location}</span>
                    <span className="opacity-30">•</span>
                    <span>{proj.type}</span>
                  </div>

                  {/* Title Row with Animated Hover Arrow */}
                  <div className="flex items-start justify-between group/title">
                    <h3 className="text-xl md:text-2xl font-light tracking-wide text-[var(--fg-primary)] group-hover:text-[var(--accent)] transition-colors duration-300">
                      {proj.name}
                    </h3>
                    <span className="text-lg text-[var(--fg-primary)]/40 group-hover:text-[var(--accent)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 transform select-none">
                      ↗
                    </span>
                  </div>

                  {/* Brief Narrative */}
                  <p className="text-xs md:text-sm text-[var(--fg-primary)]/60 font-light leading-relaxed max-w-lg">
                    {proj.desc}
                  </p>

                  {/* High-fidelity Technical specifications row */}
                  <div className="flex flex-wrap gap-x-6 gap-y-2 pt-4 border-t border-[var(--border-white-5)] mt-4">
                    {proj.stats.map((stat) => (
                      <div key={stat.label} className="flex items-center gap-2">
                        <span className="text-[9px] font-mono uppercase text-[var(--fg-primary)]/40 tracking-wider">
                          {stat.label}:
                        </span>
                        <span className="text-xs font-light text-[var(--fg-primary)]/80">
                          {stat.val}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      </div>

      {/* 4. FAQ Section */}
      <FAQ />

      {/* 5. Form Section */}
      <Form />

      <Footer />
    </main>
  );
}
