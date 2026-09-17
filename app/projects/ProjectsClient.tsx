"use client";

import React from "react";
import NavBar from "@/components/Client/NavBar";
import Footer from "@/sections/Footer/Server";
import FAQ from "@/sections/FAQ";
import Form from "@/sections/Form";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import CTA from "@/sections/CTA";

export interface ProjectListItem {
  id: string;
  title: string;
  category: string;
  location: string;
  image: string;
  scale: string;
  status: string;
  description: string;
}

interface ProjectsClientProps {
  projects: ProjectListItem[];
}

export default function ProjectsClient({ projects }: ProjectsClientProps) {
  return (
    <main className="bg-[var(--bg-primary)] text-[var(--fg-primary)] min-h-screen relative selection:bg-[var(--accent)] selection:text-[var(--bg-primary)] flex flex-col">
      <NavBar />

      <div className="px-4 md:px-6 pt-4 pb-20">
        {/* 1. Epic Image Header */}
        <section className="relative w-full h-[55vh] min-h-[450px] md:h-[70vh] md:min-h-[600px] flex items-center overflow-hidden rounded-[2.5rem] bg-gray-900">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/home.png"
              alt="Our Work Hero"
              fill
              className="object-contain object-right"
              priority
            />
          </div>

          {/* Overlay gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
          <div className="absolute inset-0 bg-black/20 z-10" />

          {/* Content overlay */}
          <div className="relative z-20 w-full max-w-[1400px] mx-auto px-8 md:px-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 mt-12">
            {/* Left Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-7xl lg:text-[6rem] font-medium tracking-tight text-white leading-[1.1] max-w-2xl drop-shadow-lg"
            >
              Our Work
            </motion.h1>

            {/* Right Content */}
            <div className="flex flex-col gap-8 max-w-md">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base md:text-lg text-white/90 leading-relaxed drop-shadow"
              >
                Browse some of the best construction projects in Kerala, a curated selection of premium residential, commercial, and institutional builds by{" "}
                <a
                  href="https://www.instagram.com/maskanbuildersanddevelopers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 decoration-white/40 hover:decoration-white font-medium text-white transition-colors"
                >
                  Maskan Builders
                </a>{" "}
                across the state.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex items-center gap-6"
              >
                <Link
                  href="/#contact"
                  className="bg-[#111111] text-white pl-6 pr-2 py-2 rounded-full text-sm font-medium flex items-center gap-4 hover:bg-black transition-colors shadow-lg"
                >
                  Start exploring
                  <span className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center text-sm font-bold">→</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      {/* 2. Alternating Layout matching ElementisStory */}
      <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 pb-32 z-20 flex flex-col gap-16 md:gap-24">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <Link
              href={`/projects/${project.id}`}
              key={project.id}
              className="group flex flex-col w-full bg-[var(--bg-primary)] transition-all duration-500"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Text Content */}
                <div className={`flex flex-col items-start text-left gap-6 lg:px-6 ${isEven ? 'md:order-last' : ''}`}>
                  <h3 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] font-bold tracking-tight text-[var(--fg-primary)] group-hover:text-[var(--accent)] transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-lg lg:text-xl text-[var(--fg-primary)]/80 font-light leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="flex flex-col items-start gap-4 mt-4">
                    <li className="flex items-center gap-4 text-base text-[var(--fg-primary)]/90 font-light">
                      <div className="w-2 h-2 rounded-full bg-[var(--accent)] flex-shrink-0" />
                      <span>{project.category}</span>
                    </li>
                    <li className="flex items-center gap-4 text-base text-[var(--fg-primary)]/90 font-light">
                      <div className="w-2 h-2 rounded-full bg-[var(--accent)] flex-shrink-0" />
                      <span>{project.location}</span>
                    </li>
                    <li className="flex items-center gap-4 text-base text-[var(--fg-primary)]/90 font-light">
                      <div className="w-2 h-2 rounded-full bg-[var(--accent)] flex-shrink-0" />
                      <span>{project.scale} - {project.status}</span>
                    </li>
                  </ul>

                  <div className="mt-6 flex h-12 w-12 items-center justify-center border border-[var(--fg-primary)]/30 text-[var(--fg-primary)]/80 transition-all duration-300 group-hover:bg-[var(--accent)] group-hover:text-[var(--bg-primary)] group-hover:border-[var(--accent)] rounded-full shrink-0">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>

                {/* Image Content */}
                <div className="relative w-full aspect-[16/10] min-h-[320px] sm:min-h-[420px] md:min-h-[480px] lg:min-h-[540px] overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </Link>
          );
        })}
      </section>

      {/* Spacer */}
      <div className="h-12 border-t border-[var(--fg-primary)]/10 max-w-[1200px] mx-auto w-full" />

      <CTA />

      {/* --- FAQ SECTION --- */}
      <FAQ />

      {/* --- FORM SECTION --- */}
      <Form />

      <Footer />
    </main>
  );
}
