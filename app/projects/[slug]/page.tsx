"use client";

import React, { use, useState, useEffect, useCallback } from "react";
import Image from "next/image";
// Removed unused Link import
import { motion, AnimatePresence } from "motion/react";
import NavBar from "@/components/Client/NavBar";
import Footer from "@/sections/Footer/Server";
import FAQ from "@/sections/FAQ/index";
import CTA from "@/sections/CTA";
import SeoContent from "@/sections/SeoContent";


// Images
import MinimalHouse from "@/public/white_minimal_house.png";
import MinimalInterior from "@/public/white_minimal_interior.png";
import MinimalFacade from "@/public/white_minimal_facade.png";
import MinimalVilla from "@/public/white_minimal_villa.png";

const projectsData = {
  "median-heights": {
    title: "Median Heights",
    location: "Perinthalmanna",
    category: "Commercial",
    description: "A monumental architectural achievement representing the pinnacle of modern commercial design. Designed to inspire and facilitate, it features vast open collaborative spaces that redefine the urban workplace.",
    story: {
      theWhere: "Situated in the rapidly evolving commercial hub of Perinthalmanna, the site posed unique spatial constraints.",
      theHow: "By employing a brutalist concrete exoskeleton paired with vast expanses of low-emissivity glass.",
      theDetails: "Every floor was designed as a fluid workspace with minimalist white interior finishes."
    },
    amenities: [
      { title: "Smart Security", description: "24/7 advanced monitoring and access control.", image: MinimalHouse },
      { title: "Executive Lounge", description: "Premium waiting and networking areas for clients.", image: MinimalInterior },
      { title: "Conference Center", description: "State-of-the-art meeting rooms and auditoriums.", image: MinimalFacade },
      { title: "High-Speed Elevators", description: "Express lifts for minimal wait times.", image: MinimalVilla },
      { title: "Rooftop Cafeteria", description: "Panoramic views while you dine and relax.", image: MinimalHouse }
    ],
    images: [MinimalHouse, MinimalInterior, MinimalFacade, MinimalVilla, MinimalInterior, MinimalHouse, MinimalFacade]
  },
  "avoria-heights": {
    title: "Avoria Heights",
    location: "Marad",
    category: "Residential",
    description: "Located in the bustling heart of Ernakulam, Maskaan is a luxury residential masterpiece that elegantly balances urban sophistication with serene, nature-integrated living spaces.",
    story: {
      theWhere: "Nestled away from the chaotic urban sprawl of Ernakulam on a densely wooded plot.",
      theHow: "We adopted a highly minimalist, pavilion-style architecture to weave around existing trees.",
      theDetails: "The interior features bespoke teak joinery, textured plaster walls, and a central courtyard."
    },
    amenities: [
      { title: "Infinity Pool", description: "Temperature-controlled swimming pool with skyline views.", image: MinimalVilla },
      { title: "Zen Garden", description: "Landscaped lush green spaces for meditation and walking.", image: MinimalHouse },
      { title: "Club House", description: "Exclusive access to recreation and community events.", image: MinimalInterior },
      { title: "Gymnasium", description: "Fully-equipped modern fitness center.", image: MinimalFacade },
      { title: "Concierge Services", description: "24/7 assistance for all your lifestyle needs.", image: MinimalInterior }
    ],
    images: [MinimalVilla, MinimalHouse, MinimalInterior, MinimalFacade, MinimalHouse, MinimalVilla, MinimalInterior]
  }
};

export default function ProjectDetailWiselive({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug as keyof typeof projectsData;
  const project = projectsData[slug];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = useCallback(() => {
    if (project?.amenities) {
      setCurrentIndex((prev) => (prev + 1) % project.amenities.length);
    }
  }, [project]);

  const handlePrev = useCallback(() => {
    if (project?.amenities) {
      setCurrentIndex((prev) => (prev - 1 + project.amenities.length) % project.amenities.length);
    }
  }, [project]);

  useEffect(() => {
    if (!project?.amenities) return;
    const interval = setInterval(handleNext, 4000);
    return () => clearInterval(interval);
  }, [handleNext, project]);

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
        <div className="flex flex-col justify-start mb-16 gap-6">
          <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-medium leading-[1.05] tracking-tight max-w-3xl">
            Building in a better way is at the heart of everything we do
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-5xl p-5 leading-relaxed">
            {project.description} {project.story?.theWhere} {project.story?.theHow} {project.story?.theDetails}
          </p>
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

      {/* --- NEW PREMIUM AMENITIES SHOWCASE --- */}
      <section className="w-full bg-[#f8f9fa] text-[#111] py-24 lg:py-32 relative overflow-hidden">
        <div className="w-full max-w-[1400px] mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* Left Column: List of amenities */}
          <div className="w-full lg:w-1/3 flex flex-col justify-center">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-16">
              Elevated<br />Living.
            </h2>
            <div className="flex flex-col gap-6 relative border-l border-gray-300 pl-6">
              {project.amenities.map((amenity, idx) => (
                <div
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`cursor-pointer transition-all duration-300 relative ${currentIndex === idx ? "opacity-100 translate-x-2" : "opacity-40 hover:opacity-70"
                    }`}
                >
                  {/* Active Indicator Line */}
                  {currentIndex === idx && (
                    <motion.div
                      layoutId="activeAmenityIndicator"
                      className="absolute -left-[25px] top-0 bottom-0 w-[2px] bg-[#244b6b]"
                    />
                  )}
                  <h3 className={`text-xl md:text-2xl font-semibold mb-2 transition-colors duration-300 ${currentIndex === idx ? "text-[#244b6b]" : "text-gray-800"}`}>
                    {amenity.title}
                  </h3>
                  <AnimatePresence>
                    {currentIndex === idx && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-600 text-sm leading-relaxed pt-2">
                          {amenity.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Controls */}
            <div className="flex gap-4 mt-16">
              <button onClick={handlePrev} className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
                <span className="text-gray-600">←</span>
              </button>
              <button onClick={handleNext} className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
                <span className="text-gray-600">→</span>
              </button>
            </div>
          </div>

          {/* Right Column: Image Display */}
          <div className="w-full lg:w-2/3 relative aspect-[4/3] lg:aspect-auto lg:h-[700px] rounded-[2rem] overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={project.amenities[currentIndex].image}
                  alt={project.amenities[currentIndex].title}
                  fill
                  className="object-cover"
                />
                {/* Gradient overlay for premium feel */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />

                {/* Bottom glassmorphic info tag */}
                <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-auto md:w-96 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
                  <span className="text-xs uppercase tracking-widest text-white/70 font-semibold block mb-2">Featured Amenity</span>
                  <p className="text-lg font-medium leading-snug drop-shadow-md">
                    {project.amenities[currentIndex].title}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>



      {/* --- DARK FOOTER CTA --- */}
      <CTA />

      {/* --- FAQ SECTION --- */}
      <FAQ />

      <SeoContent />

      {/* --- FOOTER --- */}
      <Footer />


    </main>
  );
}
