"use client";

import React, { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import NavBar from "@/components/Client/NavBar";
import Footer from "@/sections/Footer/Server";

// Legacy Images
import Image1 from "@/public/property-3.jpg";
import Image2 from "@/public/property-4.jpg";
import Image3 from "@/public/property-1.jpg";
import CelesteRivieraImg from "@/public/celeste-riviera.png";
import AtmosphereImg from "@/public/atmosphere.png";
import EleveMaisonImg from "@/public/eleve-maison.png";

// Minimal White Images
import MinimalHouse from "@/public/white_minimal_house.png";
import MinimalInterior from "@/public/white_minimal_interior.png";
import MinimalFacade from "@/public/white_minimal_facade.png";
import MinimalVilla from "@/public/white_minimal_villa.png";

// Moody Aesthetic Images
import AestheticNightSky from "@/public/aesthetic_night_sky.png";
import AestheticCabin from "@/public/aesthetic_cabin_forest.png";
import AestheticInterior from "@/public/aesthetic_moody_interior.png";
import AestheticBuilding from "@/public/aesthetic_modern_building.png";

const projectsData = {
  "mac-builders": {
    title: "MAC Builders",
    location: "Perinthalmanna",
    category: "Commercial",
    description: "A monumental architectural achievement representing the pinnacle of modern commercial design. Designed to inspire and facilitate, it features vast open collaborative spaces that redefine the urban workplace.",
    story: {
      theWhere: "Situated in the rapidly evolving commercial hub of Perinthalmanna, the site posed unique spatial constraints that required an innovative vertical approach.",
      theHow: "By employing a brutalist concrete exoskeleton paired with vast expanses of low-emissivity glass, the structure maximizes natural light while maintaining strict thermal efficiency.",
      theDetails: "Every floor was designed as a fluid workspace. We integrated floating staircases, exposed structural elements, and minimalist white interior finishes to foster an environment of pure, undistracted creativity."
    },
    heroImg: AestheticBuilding,
    videoSrc: "https://room-studio.b-cdn.net/MAIN%20PAGE_final_2%20(1).mp4",
    images: [
      Image1, AestheticNightSky, MinimalHouse, AtmosphereImg, AestheticCabin, 
      MinimalInterior, Image2, AestheticInterior, MinimalFacade, Image3, 
      AestheticBuilding, MinimalVilla
    ],
    stats: {
      "Scale": "45,000 Sq.Ft",
      "Status": "On Going",
      "Materials": "Grade 60 Steel, Travertine",
      "Scope": "Architecture & Interiors"
    }
  },
  "maskaan": {
    title: "Maskaan",
    location: "Ernakulam",
    category: "Residential",
    description: "Located in the bustling heart of Ernakulam, Maskaan is a luxury residential masterpiece that elegantly balances urban sophistication with serene, nature-integrated living spaces.",
    story: {
      theWhere: "Nestled away from the chaotic urban sprawl of Ernakulam, the property sits on a densely wooded plot that provided a natural privacy screen and a stunning green canopy.",
      theHow: "We adopted a highly minimalist, pavilion-style architecture. The home is broken down into interconnected volumes that weave around the existing ancient trees rather than displacing them.",
      theDetails: "The interior features bespoke teak joinery, textured plaster walls, and a monochromatic palette. A central courtyard acts as the lungs of the house, drawing cool air and diffused light into every room."
    },
    heroImg: AestheticCabin,
    videoSrc: "https://room-studio.b-cdn.net/MAIN%20PAGE_final_2%20(1).mp4",
    images: [
      CelesteRivieraImg, AestheticBuilding, MinimalVilla, EleveMaisonImg, 
      AestheticInterior, MinimalHouse, Image2, AestheticNightSky, 
      MinimalInterior, Image3, AestheticCabin, MinimalFacade
    ],
    stats: {
      "Scale": "12,500 Sq.Ft",
      "Status": "Completed",
      "Features": "Bespoke Teak, Smart HVAC",
      "Scope": "Full Turnkey"
    }
  }
};

export default function ProjectDetailPremium({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug as keyof typeof projectsData;
  const project = projectsData[slug];

  if (!project) {
    return (
      <main className="bg-[var(--bg-primary)] text-[var(--fg-primary)] min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-light tracking-widest uppercase">Project not found</h1>
      </main>
    );
  }

  return (
    <main className="bg-[var(--bg-primary)] text-[var(--fg-primary)] min-h-screen relative font-sans selection:bg-[var(--fg-primary)] selection:text-[var(--bg-primary)]">
      
      {/* NavBar Container to ensure it stays on top and visible */}
      <div className="absolute top-0 w-full z-50">
        <NavBar />
      </div>

      {/* --- CINEMATIC VIDEO HERO --- */}
      <section className="relative w-full h-[100svh] flex flex-col justify-end px-6 md:px-16 pb-12 md:pb-24">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            autoPlay
            muted
            playsInline
            loop
            className="w-full h-full object-cover scale-105"
          >
            <source src={project.videoSrc} type="video/mp4" />
          </video>
          {/* Gradients to ensure text readability */}
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-white w-full max-w-[1920px] mx-auto flex flex-col items-start gap-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex items-center gap-4 text-sm md:text-base font-mono tracking-widest uppercase opacity-80"
          >
            <span>{project.category}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
            <span>{project.location}</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl sm:text-7xl md:text-[8vw] font-light leading-[0.9] tracking-tighter"
          >
            {project.title}
          </motion.h1>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 right-6 md:right-16 text-white/50 flex flex-col items-center gap-2"
        >
          <span className="text-xs font-mono tracking-widest uppercase -rotate-90 origin-bottom translate-y-[-2rem]">Scroll</span>
          <div className="w-[1px] h-12 bg-white/30 overflow-hidden relative">
             <motion.div 
               animate={{ y: ["-100%", "100%"] }}
               transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
               className="w-full h-full bg-white"
             />
          </div>
        </motion.div>
      </section>

      {/* --- RICH PROJECT STORY (White Grid Layout 100vh) --- */}
      <section className="w-full h-[100svh] bg-white text-black">
        <div className="w-full h-full max-w-[1920px] mx-auto border-y border-black/10 flex flex-col">
          
          {/* Top Row: Large Text & Button */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 border-b border-black/10">
            
            {/* Large Text */}
            <div className="lg:col-span-2 p-6 md:p-10 lg:p-16 border-b lg:border-b-0 lg:border-r border-black/10 flex flex-col justify-center">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="text-xl md:text-3xl lg:text-[2.5vw] font-normal leading-[1.3] tracking-tight max-w-4xl"
              >
                {project.description}
              </motion.h2>
            </div>

            {/* Button Area */}
            <div className="lg:col-span-1 p-6 md:p-10 flex items-center justify-start lg:justify-center">
              <Link 
                href="/careers" 
                className="px-6 py-3 rounded-full border border-black/20 flex items-center gap-3 hover:bg-black hover:text-white transition-all duration-300"
              >
                <span className="text-sm font-medium">Get in touch</span>
                <span className="w-6 h-6 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-white/20">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </span>
              </Link>
            </div>
          </div>

          {/* Bottom Row: 3 Columns (Where, How, Details) */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3">
            
            {/* Column 01 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="p-6 md:p-10 lg:p-16 flex flex-col justify-center border-b md:border-b-0 md:border-r border-black/10"
            >
              <div className="text-[#FFB800] font-medium text-sm md:text-base mb-6 md:mb-10">01</div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-medium mb-4 leading-tight">The Location</h3>
              <p className="text-black/60 font-normal text-sm md:text-base leading-[1.6]">
                {project.story.theWhere}
              </p>
            </motion.div>

            {/* Column 02 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-6 md:p-10 lg:p-16 flex flex-col justify-center border-b md:border-b-0 md:border-r border-black/10"
            >
              <div className="text-[#FFB800] font-medium text-sm md:text-base mb-6 md:mb-10">02</div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-medium mb-4 leading-tight">The Methodology</h3>
              <p className="text-black/60 font-normal text-sm md:text-base leading-[1.6]">
                {project.story.theHow}
              </p>
            </motion.div>

            {/* Column 03 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="p-6 md:p-10 lg:p-16 flex flex-col justify-center"
            >
              <div className="text-[#FFB800] font-medium text-sm md:text-base mb-6 md:mb-10">03</div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-medium mb-4 leading-tight">The Details</h3>
              <p className="text-black/60 font-normal text-sm md:text-base leading-[1.6]">
                {project.story.theDetails}
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- SEAMLESS MASONRY GALLERY --- */}
      <section className="w-full max-w-[1920px] mx-auto mb-32 md:mb-48 px-1 md:px-2">
        <div className="flex items-end justify-between mb-16 md:mb-24 px-4 md:px-14">
          <div className="flex items-center gap-4">
            <h2 className="text-sm font-mono tracking-[0.2em] uppercase opacity-50">Gallery</h2>
          </div>
          <h3 className="text-2xl md:text-4xl font-light max-w-xl text-right">
            Explore the intricate details and design methodology.
          </h3>
        </div>

        {/* Seamless Masonry Grid */}
        <div className="w-full columns-1 md:columns-3 gap-1 md:gap-2 space-y-1 md:space-y-2">
          {/* We duplicate the mixed images slightly to create a massive dense masonry feel */}
          {[...project.images, ...project.images].map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: (idx % 3) * 0.1 }}
              className="w-full break-inside-avoid relative overflow-hidden group mb-0"
            >
              <Image 
                src={img} 
                alt={`Gallery image ${idx + 1}`} 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-[2000ms] ease-out" 
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- READY TO START CTA --- */}
      <section className="relative w-full h-[60vh] md:h-[80vh] flex flex-col items-center justify-center overflow-hidden">
        {/* Crystal Clear Background Image (No Overlays) */}
        <div className="absolute inset-0 w-full h-full scale-100 hover:scale-105 transition-transform duration-[3000ms] ease-out">
          <Image src="/cta.webp" alt="Ready to start your project" fill className="object-cover" />
        </div>
        
        {/* Content & Button overlay */}
        <div className="relative z-10 w-full h-full max-w-[1920px] mx-auto px-6 md:px-16 flex flex-col justify-end pb-16 md:pb-24 pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col gap-6 md:gap-8 max-w-4xl pointer-events-auto"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl text-white font-normal leading-tight tracking-tight drop-shadow-lg">
              Ready to bring your vision to life?
            </h2>
            <p className="text-white/90 text-lg md:text-xl font-normal max-w-2xl leading-relaxed drop-shadow-md">
              Let&apos;s collaborate to design and build extraordinary spaces that redefine the way you live, work, and experience the world.
            </p>
            
            <Link 
              href="/careers" 
              className="mt-4 px-8 py-4 bg-white text-black rounded-full font-medium flex items-center w-fit gap-4 hover:scale-105 transition-all duration-300 shadow-xl group"
            >
              Start a Conversation
              <span className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
