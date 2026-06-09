"use client";

import React, { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import NavBar from "@/components/Client/NavBar";
import Footer from "@/sections/Footer/Server";
import FAQ from "@/sections/FAQ/index";

// Images
import MinimalHouse from "@/public/white_minimal_house.png";
import MinimalInterior from "@/public/white_minimal_interior.png";
import MinimalFacade from "@/public/white_minimal_facade.png";
import MinimalVilla from "@/public/white_minimal_villa.png";

const projectsData = {
  "mac-builders": {
    title: "MAC Builders",
    location: "Perinthalmanna",
    category: "Commercial",
    description: "A monumental architectural achievement representing the pinnacle of modern commercial design. Designed to inspire and facilitate, it features vast open collaborative spaces that redefine the urban workplace.",
    story: {
      theWhere: "Situated in the rapidly evolving commercial hub of Perinthalmanna, the site posed unique spatial constraints.",
      theHow: "By employing a brutalist concrete exoskeleton paired with vast expanses of low-emissivity glass.",
      theDetails: "Every floor was designed as a fluid workspace with minimalist white interior finishes."
    },
    images: [MinimalHouse, MinimalInterior, MinimalFacade, MinimalVilla, MinimalInterior, MinimalHouse, MinimalFacade]
  },
  "maskaan": {
    title: "Maskaan",
    location: "Ernakulam",
    category: "Residential",
    description: "Located in the bustling heart of Ernakulam, Maskaan is a luxury residential masterpiece that elegantly balances urban sophistication with serene, nature-integrated living spaces.",
    story: {
      theWhere: "Nestled away from the chaotic urban sprawl of Ernakulam on a densely wooded plot.",
      theHow: "We adopted a highly minimalist, pavilion-style architecture to weave around existing trees.",
      theDetails: "The interior features bespoke teak joinery, textured plaster walls, and a central courtyard."
    },
    images: [MinimalVilla, MinimalHouse, MinimalInterior, MinimalFacade, MinimalHouse, MinimalVilla, MinimalInterior]
  }
};

export default function ProjectDetailWiselive({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug as keyof typeof projectsData;
  const project = projectsData[slug];

  if (!project) {
    return (
      <main className="bg-[#FFFFFF] text-black min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-light tracking-widest uppercase">Project not found</h1>
      </main>
    );
  }

  return (
    <main className="bg-[#FFFFFF] text-[#3B4D5C] min-h-screen relative font-sans selection:bg-[#244b6b] selection:text-white">

      {/* NavBar Container */}
      <div className="absolute top-0 w-full z-50">
        <NavBar />
      </div>

      {/* --- HERO SECTION WITH VIDEO BACKGROUND --- */}
      <section className="relative w-full h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="https://room-studio.b-cdn.net/MAIN%20PAGE_final_2%20(1).mp4" type="video/mp4" />
        </video>
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-[#244b6b]/40 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-black/30 z-10" />

        {/* Content overlay */}
        <div className="relative z-20 flex flex-col items-center text-center max-w-5xl px-6 w-full mt-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-[8rem] text-white font-bold tracking-tight uppercase mb-6 drop-shadow-xl"
          >
            {project.title}
          </motion.h1>


          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/90 text-base md:text-lg max-w-2xl leading-relaxed mb-10 drop-shadow"
          >
            {project.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center justify-center gap-4"
          >
            <button className="bg-white text-[#244b6b] px-8 py-3.5 rounded-full text-sm font-bold flex items-center gap-3 hover:bg-gray-100 transition-colors shadow-lg">
              Get in touch
              <span className="w-6 h-6 bg-[#244b6b] text-white rounded-full flex items-center justify-center text-sm font-bold">→</span>
            </button>
            <button className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/20 transition-colors backdrop-blur-sm">
              <span className="text-lg text-white">↓</span>
            </button>
          </motion.div>
        </div>
      </section>



      {/* --- 3-COLUMN STORY SECTION --- */}
      <section className="w-full max-w-[1800px] mx-auto px-4 md:px-8 py-24 lg:py-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-medium leading-[1.05] tracking-tight max-w-3xl">
            Building in a better way is at the heart of everything we do
          </h2>
          <div className="flex items-center gap-4 hidden md:flex">
            <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
              <span className="text-gray-400">←</span>
            </button>
            <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
              <span className="text-[#3B4D5C]">→</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
          {project.images.slice(1, 7).map((img, idx) => (
            <div key={idx} className="flex flex-col group cursor-pointer">
              <div className="relative w-full aspect-square overflow-hidden bg-gray-100 rounded-sm">
                <Image
                  src={img}
                  alt={`${project.title} Gallery Image ${idx + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- DARK SHOWCASE SECTION --- */}
      <section className="w-full bg-[#244b6b] text-white py-24 lg:py-32">
        <div className="w-full max-w-[1400px] mx-auto px-6">
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight">From vision to reality</h2>
            <button className="hidden md:flex items-center gap-3 px-6 py-2.5 rounded-full border border-white/20 text-sm font-semibold hover:bg-white/10 transition-colors">
              Discover all <span>→</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 items-center">
            <div className="flex flex-col">
              <h3 className="text-3xl md:text-4xl font-medium mb-6">{project.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-12 max-w-md">
                Experience unparalleled design and craftsmanship. Every corner of {project.title} is meticulously planned to offer the utmost luxury and comfort, blending seamlessly with its surroundings in {project.location}.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-16">
                <div>
                  <span className="block text-gray-500 text-xs mb-2">Date</span>
                  <span className="font-medium text-sm">Oct 2024</span>
                </div>
                <div>
                  <span className="block text-gray-500 text-xs mb-2">Location</span>
                  <span className="font-medium text-sm">{project.location}</span>
                </div>
                <div>
                  <span className="block text-gray-500 text-xs mb-2">Client</span>
                  <span className="font-medium text-sm">Private</span>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <span className="text-white">←</span>
                </button>
                <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <span className="text-white">→</span>
                </button>
              </div>
            </div>

            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src={project.images[1]} alt={project.title} fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* --- GALLERY SECTION (Adapted from Articles) --- */}
      <section className="w-full max-w-[1400px] mx-auto px-6 py-24 lg:py-32">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight max-w-md">Browse our gallery</h2>
          <button className="hidden md:flex items-center gap-3 px-6 py-2.5 rounded-full border border-gray-200 text-sm font-semibold hover:bg-gray-50 transition-colors">
            See all photos <span>→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {project.images.slice(0, 3).map((img, idx) => (
            <div key={idx} className="flex flex-col group cursor-pointer">
              <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden bg-gray-100">
                <Image src={img} alt={`Gallery ${idx}`} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <span className="text-gray-400 text-xs mb-3">View Image</span>
              <h3 className="text-xl font-medium mb-6 leading-snug">Detail view of {project.title}&apos;s immaculate design and spatial flow</h3>
              <span className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:underline decoration-1 underline-offset-4 mt-auto">View Photo <span>↗</span></span>
            </div>
          ))}
        </div>
      </section>

      {/* --- DARK FOOTER CTA --- */}
      <section className="w-full bg-[#244b6b] text-white pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="w-full max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
          <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-medium leading-[1.05] tracking-tight">Let&apos;s work<br />together</h2>

          <div className="flex flex-col max-w-sm mt-4 md:mt-0">
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              We&apos;re always looking for new challenges and opportunities. Whether you have a project in mind or just want to say hello, we&apos;d love to hear from you.
            </p>
            <button className="w-fit px-8 py-3.5 rounded-full border border-white/20 text-sm font-semibold flex items-center gap-3 hover:bg-white/10 transition-colors">
              Get in touch <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <FAQ />

      {/* --- FOOTER --- */}
      <Footer />


    </main>
  );
}
