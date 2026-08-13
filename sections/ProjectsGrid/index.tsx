"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

interface Project {
  id: string;
  name: string;
  location: string;
  type: string;
  status: "ON GOING" | "COMPLETED";
  img: string;
  desc: string;
  stats: { label: string; val: string }[];
}

const projects: Project[] = [
  {
    id: "maskan-avoria",
    name: "Maskan Avoria",
    location: "Kochi, Kerala",
    type: "Residential",
    status: "COMPLETED",
    img: "/projects/Avoria Heights.jpeg",
    desc: "A landmark residential development in Kochi, 112 units plus a new tower, designed for modern urban living.",
    stats: [
      { label: "Scope", val: "112 units + new tower" },
    ],
  },
  {
    id: "meridian-heights",
    name: "Meridian Heights",
    location: "Perinthalmanna, Kerala",
    type: "Residential",
    status: "ON GOING",
    img: "/projects/Meridian Heights.jpeg",
    desc: "An exclusive residential villa project in Perinthalmanna, 42 villas designed for modern elegance and premium living.",
    stats: [
      { label: "Scope", val: "42 villas" },
    ],
  },
  {
    id: "kakanad-commercial-hub",
    name: "Kakanad Commercial Hub",
    location: "Kakanad, Kochi, Kerala",
    type: "Commercial",
    status: "ON GOING",
    img: "/projects/project-1.webp",
    desc: "Redefining business landscapes with a cutting-edge commercial building in Kakanad, Kochi.",
    stats: [
      { label: "Type", val: "Commercial building" },
    ],
  },
  {
    id: "manjeri-white-field",
    name: "Manjeri White Field",
    location: "Manjeri, Kerala",
    type: "Residential",
    status: "ON GOING",
    img: "/projects/project-2.webp",
    desc: "A premium residential development in Manjeri, built to the same quality standards across every unit.",
    stats: [
      { label: "Type", val: "Residential" },
    ],
  },
  {
    id: "plaza-commercial-complex",
    name: "Plaza Commercial Complex",
    location: "Muvatupuzha, Kerala",
    type: "Commercial",
    status: "ON GOING",
    img: "/projects/project-3.webp",
    desc: "A prime commercial complex in Muvatupuzha, built for retail and business spaces with strong footfall and long-term rental value.",
    stats: [
      { label: "Type", val: "Commercial building" },
    ],
  },
  {
    id: "commercial-areacode",
    name: "Commercial Building at Areacode",
    location: "Areacode, Kerala",
    type: "Commercial",
    status: "COMPLETED",
    img: "/projects/project-15.png",
    desc: "A functional, well-engineered commercial building in Areacode, designed to serve local business and retail needs.",
    stats: [
      { label: "Type", val: "Commercial building" },
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
        <span className="block text-sm font-semibold uppercase tracking-[0.32em] text-[var(--fg-primary)]/55 md:text-base">
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
              <Link
                href={`/projects/${project.id}`}
                key={project.id}
                className="group block"
              >
                <motion.article
                  className="relative flex flex-col h-full overflow-hidden rounded-xl bg-white shadow-sm border border-black/10 hover:shadow-md transition-all duration-300 cursor-pointer"
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
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-sm font-semibold md:text-base line-clamp-1 group-hover:text-[#1F4F71] transition-colors">
                        {project.name}
                      </h3>
                      <ArrowUpRight className="h-4 w-4 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity text-[#1F4F71]" />
                    </div>

                    {/* Location & Area */}
                    <div className="mt-2.5 flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1.5">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        <span className="truncate max-w-[120px]">{project.location.split(',')[0]}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 3L15 3M21 3L21 9M21 3L14 10M3 21L9 21M3 21L3 15M3 21L10 14"></path></svg>
                        <span>{project.stats[0]?.val || "N/A"}</span>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="my-4 h-px w-full bg-black/10" />

                    {/* Description */}
                    <p className="mt-2 text-sm text-gray-500 font-light leading-relaxed line-clamp-2">
                      {project.desc}
                    </p>
                  </div>
                </motion.article>
              </Link>
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
          <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.24em] text-[var(--fg-primary)]">
            View All Projects
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </span>
        </Link>
      </div>
    </section>
  );
}
