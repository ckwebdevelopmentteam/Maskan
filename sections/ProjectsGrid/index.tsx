"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import CelesteRivieraImg from "@/public/celeste-riviera.png";
import ModernHouse1Img from "@/public/modern_house_1.png";
import EleveMaisonImg from "@/public/eleve-maison.png";
import LumiereResidencesImg from "@/public/lumiere-residences.png";
import ModernHouse2Img from "@/public/modern_house_2.png";
import SolariaHeightsImg from "@/public/property-4.jpg";
import ModernHouse3Img from "@/public/modern_house_3.png";
import ModernHouse4Img from "@/public/modern_house_4.png";
import ModernHouse5Img from "@/public/property-3.jpg";

interface Project {
  name: string;
  location: string;
  type: string;
  status: "ON GOING" | "COMPLETED";
  img: StaticImageData;
  desc: string;
  stats: { label: string; val: string }[];
}

const projects: Project[] = [
  {
    name: "Celeste Riviera",
    location: "Perinthalmanna, Kerala",
    type: "Villa Project",
    status: "ON GOING",
    img: CelesteRivieraImg,
    desc: "A stunning premium villa project focusing on wide open spaces and natural light integration.",
    stats: [
      { label: "Plot Scale", val: "18 Acres" },
    ],
  },
  {
    name: "Harmony Villa",
    location: "Kozhikode Road, Manjeri",
    type: "Modern House",
    status: "ON GOING",
    img: ModernHouse1Img,
    desc: "Modern luxury living with bespoke interior styling and smart home automation features.",
    stats: [
      { label: "Area", val: "4,500 Sq.ft." },
    ],
  },
  {
    name: "Eleve Maison",
    location: "Calicut Coastline, Kerala",
    type: "Apartment",
    status: "ON GOING",
    img: EleveMaisonImg,
    desc: "A boutique seaside apartment block featuring premium coastal views and airy layouts.",
    stats: [
      { label: "Area", val: "2,200 Sq.ft." },
    ],
  },
  {
    name: "Lumiere Residences",
    location: "Patterkulam, Manjeri",
    type: "Luxury Estate",
    status: "COMPLETED",
    img: LumiereResidencesImg,
    desc: "A sprawling luxury estate with custom woodwork and double-height ceiling voids.",
    stats: [
      { label: "Scope", val: "10,000 Sq.ft." },
    ],
  },
  {
    name: "Serenity Home",
    location: "Malappuram District",
    type: "Suburban House",
    status: "COMPLETED",
    img: ModernHouse2Img,
    desc: "A peaceful family residence with integrated natural cooling and locally sourced materials.",
    stats: [
      { label: "Area", val: "3,800 Sq.ft." },
    ],
  },
  {
    name: "Solaria Heights",
    location: "Wayanad Hills, Kerala",
    type: "Resort Estate",
    status: "COMPLETED",
    img: SolariaHeightsImg,
    desc: "Mountain retreat estate designed to merge seamlessly with the surrounding lush landscape.",
    stats: [
      { label: "Area", val: "6,000 Sq.ft." },
    ],
  },
  {
    name: "Minimalist Haven",
    location: "Kochi City, Kerala",
    type: "Luxury House",
    status: "ON GOING",
    img: ModernHouse3Img,
    desc: "Urban minimalist luxury showcasing clean lines, exposed concrete, and minimalist aesthetics.",
    stats: [
      { label: "Area", val: "5,200 Sq.ft." },
    ],
  },
  {
    name: "Heritage Modern",
    location: "Thrissur District",
    type: "Family Home",
    status: "ON GOING",
    img: ModernHouse4Img,
    desc: "A contemporary take on traditional local architecture, blending heritage motifs with modern functionality.",
    stats: [
      { label: "Area", val: "4,000 Sq.ft." },
    ],
  },
  {
    name: "Eco Pavilion",
    location: "Palakkad, Kerala",
    type: "Sustainable Retreat",
    status: "COMPLETED",
    img: ModernHouse5Img,
    desc: "An eco-friendly sustainable pavilion built entirely with locally sourced materials and passive cooling.",
    stats: [
      { label: "Area", val: "2,500 Sq.ft." },
    ],
  },
];

export default function ProjectsGrid() {
  return (
    <section
      id="portfolio"
      className="bg-[var(--bg-primary)] px-4 py-10 text-[var(--fg-primary)] transition-colors duration-500 md:px-10 md:py-22"
    >
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-center text-center pb-10 md:pb-14">
        <span className="block text-xs font-semibold uppercase tracking-[0.32em] text-[var(--fg-primary)]/55 md:text-sm">
          MASKAN
        </span>
        <h2 className="mt-4 text-4xl font-light uppercase leading-none tracking-wide md:text-6xl">
          Featured Projects
        </h2>
      </div>

      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => {
            const isCompleted = project.status === "COMPLETED";

            return (
              <motion.article
                key={project.name}
                className="group relative flex flex-col overflow-hidden rounded-xl bg-white shadow-sm border border-black/10 hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{
                  duration: 0.75,
                  delay: index * 0.06,
                  ease: [0.24, 0.43, 0.15, 0.97],
                }}
              >
                {/* Image Section */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                  <Image
                    src={project.img}
                    alt={project.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    priority={index < 4}
                  />
                </div>

                {/* Content Section */}
                <div className="flex flex-1 flex-col p-4 md:p-5 text-gray-900">
                  <h3 className="text-sm font-semibold md:text-base line-clamp-1">
                    {project.name}
                  </h3>
                  
                  {/* Location & Area */}
                  <div className="mt-2.5 flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      <span className="truncate max-w-[120px]">{project.location.split(',')[0]}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 3L15 3M21 3L21 9M21 3L14 10M3 21L9 21M3 21L3 15M3 21L10 14"></path></svg>
                      <span>{project.stats[0]?.val || "120 Sq.ft."}</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="my-4 h-px w-full bg-black/10" />

                  {/* Description instead of Price/Action */}
                  <p className="mt-4 text-xs md:text-sm text-gray-500 font-light leading-relaxed line-clamp-2">
                    {project.desc}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      <div className="mt-16 flex flex-col items-center justify-center gap-6 md:mt-24">
        <Link 
          href="#contact" 
          className="inline-flex items-center gap-3 bg-[#1F4F71] text-white px-10 py-5 rounded-full text-base md:text-lg font-bold hover:bg-[#153a54] transition-all hover:scale-105 shadow-xl"
        >
          Start Your Project
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
        </Link>
        <Link href="/projects" className="mt-4 hover:opacity-70 transition-opacity">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.24em] text-[var(--fg-primary)]">
            View All Projects
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </span>
        </Link>
      </div>
    </section>
  );
}
