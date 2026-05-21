"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import CelesteRivieraImg from "@/public/celeste-riviera.png";
import AtmosphereImg from "@/public/atmosphere.png";
import EleveMaisonImg from "@/public/eleve-maison.png";
import LumiereResidencesImg from "@/public/lumiere-residences.png";
import AetherTowerImg from "@/public/aether-tower.png";
import SolariaHeightsImg from "@/public/property-4.jpg";

interface Project {
  name: string;
  location: string;
  type: string;
  status: "ON GOING" | "COMPLETED";
  img: StaticImageData;
  stats: { label: string; val: string }[];
}

const projects: Project[] = [
  {
    name: "Celeste Riviera",
    location: "Perinthalmanna, Kerala",
    type: "Villa Project",
    status: "ON GOING",
    img: CelesteRivieraImg,
    stats: [
      { label: "Plot Scale", val: "18 Acres" },
      { label: "Structure", val: "Grade 60" },
      { label: "Automation", val: "Lutron" },
    ],
  },
  {
    name: "Atmosphere",
    location: "Kozhikode Road, Manjeri",
    type: "Commercial Plaza",
    status: "ON GOING",
    img: AtmosphereImg,
    stats: [
      { label: "Floors", val: "8 Stories" },
      { label: "Concrete", val: "C40" },
      { label: "Glass", val: "Low-E" },
    ],
  },
  {
    name: "Eleve Maison",
    location: "Calicut Coastline, Kerala",
    type: "Apartment",
    status: "ON GOING",
    img: EleveMaisonImg,
    stats: [
      { label: "Units", val: "32" },
      { label: "Stone", val: "Travertine" },
      { label: "Energy", val: "Solar" },
    ],
  },
  {
    name: "Lumiere Residences",
    location: "Patterkulam, Manjeri",
    type: "Luxury Estate",
    status: "COMPLETED",
    img: LumiereResidencesImg,
    stats: [
      { label: "Scope", val: "10K Sq.Ft" },
      { label: "Millwork", val: "Teak" },
      { label: "HVAC", val: "VRF" },
    ],
  },
  {
    name: "Aether Tower",
    location: "Malappuram District",
    type: "Hospital Building",
    status: "COMPLETED",
    img: AetherTowerImg,
    stats: [
      { label: "Scope", val: "38K Sq.Ft" },
      { label: "Zoning", val: "Cleanrooms" },
      { label: "Surface", val: "Anti Micro" },
    ],
  },
  {
    name: "Solaria Heights",
    location: "Wayanad Hills, Kerala",
    type: "Resort Estate",
    status: "COMPLETED",
    img: SolariaHeightsImg,
    stats: [
      { label: "Plot", val: "8 Acres" },
      { label: "Chimney", val: "Stone" },
      { label: "Water", val: "Spring" },
    ],
  },
];

export default function ProjectsGrid() {
  return (
    <section
      id="portfolio"
      className="bg-[var(--bg-primary)] px-4 py-16 text-[var(--fg-primary)] transition-colors duration-500 md:px-10 md:py-22"
    >
      <div className="mx-auto flex max-w-[1440px] items-end justify-between gap-8 pb-7 md:pb-8">
        <div>
          <span className="block text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--fg-primary)]/55 md:text-xs">
            MASKAN
          </span>
          <h2 className="mt-3 text-3xl font-light uppercase leading-none tracking-wide md:text-4xl">
            Featured Projects
          </h2>
        </div>
        <Link
          href="/projects"
          className="hidden items-center gap-2 text-xs font-medium uppercase tracking-[0.24em] text-[var(--fg-primary)]/70 transition-colors duration-300 hover:text-[var(--accent)] md:flex"
        >
          View All
          <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
        </Link>
      </div>

      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {projects.map((project, index) => {
            const isCompleted = project.status === "COMPLETED";

            return (
              <motion.article
                key={project.name}
                className="group relative min-h-[480px] overflow-hidden bg-[var(--bg-card)] shadow-[0_18px_44px_rgba(0,0,0,0.14)] md:min-h-[560px] xl:min-h-[640px]"
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.75,
                  delay: index * 0.06,
                  ease: [0.24, 0.43, 0.15, 0.97],
                }}
              >
                <Image
                  src={project.img}
                  alt={project.name}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
                  priority={index < 3}
                />

                <div className="absolute inset-0 bg-black/15 transition-colors duration-500 group-hover:bg-black/5" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/5 to-black/78" />

                <div className="absolute left-5 top-5 flex items-start gap-2.5 text-white/75 md:left-6 md:top-6">
                  <div className="grid h-7 w-7 grid-cols-3 grid-rows-3 gap-px opacity-75">
                    {Array.from({ length: 9 }).map((_, dotIndex) => (
                      <span
                        key={`${project.name}-dot-${dotIndex}`}
                        className="bg-white/80"
                      />
                    ))}
                  </div>
                  <span className="pt-1 font-mono text-[8px] uppercase tracking-widest md:text-[9px]">
                    K RERA / PRJ / MKD / {String(index + 51).padStart(3, "0")} /
                    2026
                  </span>
                </div>

                <div className="absolute right-5 top-5 md:right-6 md:top-6">
                  <span
                    className={`inline-flex items-center gap-2 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.22em] ${
                      isCompleted
                        ? "bg-white/90 text-black"
                        : "bg-[var(--accent)] text-[var(--bg-primary)]"
                    }`}
                  >
                    <span className="h-1.5 w-1.5 bg-current" />
                    {project.status}
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 flex flex-col items-center px-6 pb-8 text-center text-white md:px-8 md:pb-9">
                  <div className="mb-5 h-px w-16 bg-white/75" />
                  <h3 className="max-w-[14ch] text-xl font-light uppercase leading-[0.95] tracking-[0.18em] md:text-2xl xl:text-3xl">
                    {project.name}
                  </h3>
                  <div className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-mono text-[8px] uppercase tracking-[0.22em] text-white/70 md:text-[9px]">
                    <span>{project.location}</span>
                    <span className="h-1 w-1 bg-white/45" />
                    <span>{project.type}</span>
                  </div>
                  <div className="mt-6 grid w-full max-w-[280px] grid-cols-3 border-t border-white/20 pt-4">
                    {project.stats.map((stat) => (
                      <div key={stat.label} className="px-2 text-center">
                        <span className="block truncate font-mono text-[8px] uppercase tracking-widest text-white/45">
                          {stat.label}
                        </span>
                        <span className="mt-1 block truncate text-[10px] font-light text-white/85">
                          {stat.val}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      <div className="mt-10 flex justify-center md:hidden">
        <Link href="/projects">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.24em] text-[var(--fg-primary)]">
            View All
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </span>
        </Link>
      </div>
    </section>
  );
}
