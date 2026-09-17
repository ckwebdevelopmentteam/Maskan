"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import NavBar from "@/components/Client/NavBar";
import Footer from "@/sections/Footer/Server";
import FAQ from "@/sections/FAQ/index";
import CTA from "@/sections/CTA";
import SeoContent from "@/sections/SeoContent";

export type ProjectData = {
  title: string;
  location: string;
  category: string;
  scale: string;
  status: string;
  description: string;
  story: { theWhere: string; theHow: string; theDetails: string };
  highlights: { title: string; description: string }[];
  images: string[];
  galleryImages?: string[];
  galleryAspectRatio?: number;
  highlightImages?: string[];
};

export default function ProjectDetailClient({ project }: { project: ProjectData }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = useCallback(() => {
    if (project?.highlights && project.highlights.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % project.highlights.length);
    }
  }, [project]);

  const handlePrev = useCallback(() => {
    if (project?.highlights && project.highlights.length > 0) {
      setCurrentIndex((prev) => (prev - 1 + project.highlights.length) % project.highlights.length);
    }
  }, [project]);

  useEffect(() => {
    if (!project?.highlights || project.highlights.length <= 1) return;
    const interval = setInterval(handleNext, 4000);
    return () => clearInterval(interval);
  }, [handleNext, project]);

  if (!project) {
    return (
      <main className="bg-white text-black min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-light tracking-widest uppercase">Project not found</h1>
      </main>
    );
  }

  const [heroTitleLead, ...heroTitleRemainder] = project.title.trim().split(/\s+/);
  const heroTitleTail = heroTitleRemainder.join(" ");
  const projectHighlightImages = project.highlightImages ?? project.images;

  return (
    <main className="bg-[#FFFFFF] text-[#3B4D5C] min-h-screen relative font-sans selection:bg-[#244b6b] selection:text-white">
      {/* NavBar */}
      <div className="absolute top-0 w-full z-50">
        <NavBar />
      </div>

      {/* HERO */}
      <section className="relative w-full h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden">
        <Image
          src={project.images[0] || "/projects/project-1.webp"}
          alt={project.title}
          fill
          className="absolute inset-0 w-full h-full object-cover z-0"
          priority
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/75 via-black/30 to-transparent" />

        <div className="relative z-20 mt-24 flex w-full max-w-none flex-col items-start px-6 text-left md:px-10 lg:px-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white/60 text-sm uppercase tracking-widest mb-4 font-medium"
          >
            {project.category} · {project.location}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 text-5xl font-bold uppercase leading-[0.92] tracking-tight text-white drop-shadow-xl md:text-7xl lg:text-[5.75rem]"
          >
            <span className="block bg-gradient-to-r from-[#fff2c7] via-[#d6aa5d] to-[#f5dca7] bg-clip-text text-transparent">
              {heroTitleLead}
            </span>
            {heroTitleTail && <span className="block text-white">{heroTitleTail}</span>}
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
            className="flex items-center gap-6"
          >
            <span className="px-4 py-1.5 rounded-full border border-white/30 text-white/80 text-xs uppercase tracking-widest">
              {project.status}
            </span>
            <span className="px-4 py-1.5 rounded-full border border-white/30 text-white/80 text-xs uppercase tracking-widest">
              {project.scale}
            </span>
          </motion.div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-24 lg:py-32">
        <div className="flex flex-col justify-start mb-16 gap-6">
          <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-medium leading-[1.05] tracking-tight max-w-3xl">
            Building in a better way is at the heart of everything we do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">The Where</p>
              <p className="text-base text-gray-600 leading-relaxed">{project.story.theWhere}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">The How</p>
              <p className="text-base text-gray-600 leading-relaxed">{project.story.theHow}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">The Details</p>
              <p className="text-base text-gray-600 leading-relaxed">{project.story.theDetails}</p>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {(project.galleryImages ?? project.images.slice(1)).map((img, idx) => (
            <div key={idx} className="flex flex-col">
              <div
                className={`relative w-full overflow-hidden bg-white shadow-md ${project.galleryAspectRatio ? "" : "aspect-[16/10] min-h-[300px] md:min-h-[400px]"}`}
                style={project.galleryAspectRatio ? { aspectRatio: project.galleryAspectRatio } : undefined}
              >
                <Image
                  src={img}
                  alt={`${project.title} Gallery ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  loading="eager"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HIGHLIGHTS SHOWCASE */}
      <section className="w-full bg-[#f8f9fa] text-[#111] py-24 lg:py-32 relative overflow-hidden">
        <div className="w-full max-w-[1400px] mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left: Highlights list */}
          <div className="w-full lg:w-1/3 flex flex-col justify-center">
            <h2 className="mb-16 max-w-3xl text-4xl font-medium leading-[1.05] tracking-tight md:text-5xl lg:text-[4rem]">
              Project<br />Highlights.
            </h2>
            <div className="flex flex-col gap-6 relative pl-6">
              {project.highlights.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`cursor-pointer transition-all duration-300 relative ${currentIndex === idx ? "opacity-100 translate-x-2" : "opacity-40 hover:opacity-70"
                    }`}
                >
                  {currentIndex === idx && (
                    <motion.div
                      layoutId="activeHighlightIndicator"
                      className="absolute -left-[25px] top-0 bottom-0 w-[2px] bg-[#244b6b]"
                    />
                  )}
                  <h3 className={`text-xl md:text-2xl font-semibold mb-2 transition-colors duration-300 ${currentIndex === idx ? "text-[#244b6b]" : "text-gray-800"}`}>
                    {item.title}
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
                        <p className="text-gray-600 text-sm leading-relaxed pt-2">{item.description}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <div className="mt-16 flex gap-3">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous project highlight"
                className="group flex h-11 w-11 items-center justify-center text-[#244b6b] transition-colors hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#244b6b]"
              >
                <ChevronLeft aria-hidden="true" className="h-7 w-7 transition-transform group-hover:-translate-x-0.5" strokeWidth={1.5} />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next project highlight"
                className="group flex h-11 w-11 items-center justify-center text-[#244b6b] transition-colors hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#244b6b]"
              >
                <ChevronRight aria-hidden="true" className="h-7 w-7 transition-transform group-hover:translate-x-0.5" strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative aspect-[3/2] w-full self-start overflow-hidden rounded-[2rem] shadow-2xl lg:w-2/3">
            {projectHighlightImages.map((img, idx) => (
              <motion.div
                key={img}
                initial={false}
                animate={{
                  opacity: currentIndex === idx ? 1 : 0,
                }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
                aria-hidden={currentIndex !== idx}
              >
                <Image
                  src={img}
                  alt={currentIndex === idx ? project.highlights[idx]?.title ?? project.title : ""}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 67vw, 100vw"
                  priority={idx === 0}
                  loading={idx === 0 ? undefined : "eager"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <FAQ />
      <SeoContent />
      <Footer />
    </main>
  );
}
