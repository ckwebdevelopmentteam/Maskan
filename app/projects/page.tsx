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



const projectsList = [
  {
    id: "maskan-avoria",
    title: "Maskan Avoria",
    category: "Residential",
    location: "Marad, Ernakulam (Kochi), Kerala",
    image: "/residential_villa.webp",
    scale: "112 units + new tower",
    status: "Completed",
    description: "A landmark residential development in the heart of Ernakulam, 112 units plus a new tower, balancing urban convenience with quality-built, well-integrated living spaces.",
  },
  {
    id: "meridian-heights",
    title: "Meridian Heights",
    category: "Residential Villa",
    location: "Perinthalmanna, Kerala",
    image: "/commercial_complex_render.webp",
    scale: "42 Villas",
    status: "Ongoing",
    description: "An exclusive residential villa project in Perinthalmanna, 42 villas designed for modern elegance and premium family living.",
  },
  {
    id: "kakanad-commercial-hub",
    title: "Kakanad Commercial Hub",
    category: "Commercial",
    location: "Kakanad, Kochi, Kerala",
    image: "/projects/project-1.webp",
    scale: "Commercial building",
    status: "Ongoing",
    description: "A cutting-edge commercial building in Kakanad, Kochi, redefining business landscapes in the region.",
  },
  {
    id: "plaza-commercial-complex",
    title: "Plaza Commercial Complex",
    category: "Commercial",
    location: "Muvatupuzha, Kerala",
    image: "/projects/project-3.webp",
    scale: "Multi-storey",
    status: "Ongoing",
    description: "A landmark commercial plaza in Muvatupuzha featuring a striking vertical louvre façade with warm timber tones, built for modern retail and office use.",
  },
  {
    id: "manjeri-white-field",
    title: "Manjeri White Field",
    category: "Residential Villa",
    location: "Manjeri, Kerala",
    image: "/projects/project-2.webp",
    scale: "Premium Villa Community",
    status: "Ongoing",
    description: "An exclusive boutique villa community set against lush green hillsides in Manjeri, dark contemporary architecture, floor-to-ceiling glazing, and natural stone accents for families who value privacy and elegance.",
  },
  {
    id: "residential-flat",
    title: "Residential Flat",
    category: "Residential",
    location: "Malappuram, Kerala",
    image: "/projects/project-3.webp",
    scale: "3 Storey",
    status: "Ongoing",
    description: "A thoughtfully designed three-storey residential apartment block in Malappuram, combining exposed brick textures with modern concrete elements, generous balconies, covered parking, and a rooftop terrace for comfortable urban family living.",
  },
  {
    id: "plaza-commercial-building",
    title: "Plaza Commercial Building",
    category: "Commercial",
    location: "Veliyamcode, Kerala",
    image: "/projects/project-4.webp",
    scale: "Multi-storey",
    status: "Ongoing",
    description: "A bold commercial development at Veliyamcode featuring a distinctive terracotta-toned façade with geometric fin details and large glazed frontage, a new benchmark for commercial construction in the region.",
  },
  {
    id: "ayush-villa",
    title: "Ayush Villa",
    category: "Residential Villa",
    location: "Valancheri, Kerala",
    image: "/projects/project-5.webp",
    scale: "Individual Villa",
    status: "Ongoing",
    description: "A heritage-inspired residential villa in Valancheri blending traditional Kerala sloped-roof architecture with contemporary detailing, natural brick, timber accents, and a lush tropical setting.",
  },
  {
    id: "school-project-pattambi",
    title: "School Project at Pattambi",
    category: "Educational",
    location: "Pattambi, Kerala",
    image: "/projects/project-14.jpg",
    scale: "Large Educational Complex",
    status: "Ongoing",
    description: "A large-scale school complex under construction in Pattambi, spanning multiple wings and built to modern academic-facility standards.",
  },
  {
    id: "commercial-building-edappal",
    title: "Commercial Building at Edappal",
    category: "Commercial",
    location: "Edappal, Kerala",
    image: "/projects/project-13.jpg",
    scale: "Multi-storey Showroom",
    status: "Ongoing",
    description: "A multi-storey commercial building in Edappal featuring a contemporary glazed curtain-wall façade that brings in natural light for premium retail use.",
  },
  {
    id: "commercial-building-areacode",
    title: "Commercial Building at Areacode",
    category: "Commercial",
    location: "Areacode, Kerala",
    image: "/projects/project-15.png",
    scale: "Retail & Business Complex",
    status: "Completed",
    description: "A completed multi-storey commercial building in Areacode, clad in premium composite metal panels with large glazed storefronts, home to leading brands like AGL.",
  },
  {
    id: "school-project-thirur",
    title: "School Project at Thirur",
    category: "Educational",
    location: "Thirur, Kerala",
    image: "/projects/project-16.png",
    scale: "Institutional Campus",
    status: "Ongoing",
    description: "An expansive institutional campus under development in Thirur, built around a classic U-shaped courtyard layout for excellent ventilation and easy movement between wings.",
  },
];

export default function ProjectsPage() {
  return (
    <main className="bg-[var(--bg-primary)] text-[var(--fg-primary)] min-h-screen relative selection:bg-[var(--accent)] selection:text-[var(--bg-primary)] flex flex-col">
      <NavBar />

      <div className="px-4 md:px-6 pt-4 pb-20">
        {/* 1. Epic Image Header matching screenshot layout */}
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
                Browse some of the best construction projects in Kerala, a curated selection of premium residential, commercial, and institutional builds by Maskan Builders across the state.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex items-center gap-6"
              >
                <button className="bg-[#111111] text-white pl-6 pr-2 py-2 rounded-full text-sm font-medium flex items-center gap-4 hover:bg-black transition-colors shadow-lg">
                  Start exploring
                  <span className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center text-sm font-bold">→</span>
                </button>
              </motion.div>
            </div>

          </div>
        </section>
      </div>

      {/* 2. Alternating Layout matching ElementisStory */}
      <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 pb-32 z-20 flex flex-col gap-16 md:gap-24">
        {projectsList.map((project, index) => {
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
                <div className="relative w-full aspect-[4/3] md:aspect-[3/2] overflow-hidden rounded-none shadow-[0_12px_36px_rgba(0,0,0,0.1)] group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-shadow duration-500">
                  <Image
                    src={typeof project.image === 'string' ? project.image : project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
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
