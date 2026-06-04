"use client";

import React from "react";
import NavBar from "@/components/Client/NavBar";
import Footer from "@/sections/Footer/Server";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

// Static imports
import MacMainImg from "@/public/property-1.jpg";
import MaskaanMainImg from "@/public/modern_house_1.png";
import MacDetailImg from "@/public/property-4.jpg";
import MaskaanDetailImg from "@/public/celeste-riviera.png";
import MacAbstractImg from "@/public/atmosphere.png";
import MaskaanAbstractImg from "@/public/eleve-maison.png";

export default function ProjectsPage() {
  return (
    <main className="bg-[#111111] text-white min-h-screen relative overflow-x-hidden selection:bg-white selection:text-black">
      <NavBar />

      {/* 1. Cinematic Full-Screen Hero */}
      <section className="relative w-full h-[90vh] min-h-[700px] flex flex-col justify-between p-6 md:p-12 lg:p-24 max-w-[1920px] mx-auto z-10 pt-32">
        <div className="flex flex-col gap-6 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[10vw] sm:text-[8vw] md:text-[6vw] font-bold leading-[0.9] tracking-tighter uppercase"
          >
            <span className="block text-white/50">Curated</span>
            <span className="block text-white">Portfolio</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg md:text-2xl font-light text-white/70 max-w-xl leading-relaxed"
          >
            Showcasing our two most monumental achievements. From premium commercial hubs to luxurious residential sanctuaries, we deliver unparalleled excellence.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute right-0 bottom-0 w-[60vw] md:w-[45vw] h-[60vh] hidden md:block"
        >
          <Image 
            src="/hero_misty_skyline.png" 
            alt="Misty Skyline" 
            fill 
            className="object-cover opacity-60 mix-blend-lighten pointer-events-none"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-transparent to-transparent" />
        </motion.div>
      </section>

      {/* 2. Staggered Luxury Portfolio (Room Studio Style) */}
      <section className="w-full px-4 md:px-12 lg:px-24 pb-32 max-w-[1920px] mx-auto z-20 relative">
        <div className="flex flex-col gap-32 md:gap-48">

          {/* PROJECT 01: MAC BUILDERS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            {/* Left: Huge Main Image */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 relative aspect-[4/5] md:aspect-square w-full overflow-hidden group"
            >
              <Link href="/projects/mac-builders">
                <Image src={MacMainImg} alt="MAC Builders" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </Link>
            </motion.div>

            {/* Right: Info & Sub-images */}
            <div className="lg:col-span-5 flex flex-col gap-16">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col gap-6"
              >
                <div className="flex items-center gap-4 text-xs font-mono tracking-[0.2em] text-white/50 uppercase">
                  <span>Commercial</span>
                  <span className="w-8 h-px bg-white/20" />
                  <span>Perinthalmanna</span>
                </div>
                <Link href="/projects/mac-builders" className="group/link inline-block">
                  <h2 className="text-5xl md:text-6xl font-light tracking-tight group-hover/link:text-white/70 transition-colors">MAC Builders</h2>
                </Link>
                <p className="text-lg font-light text-white/60 leading-relaxed max-w-md">
                  A monumental architectural achievement representing the pinnacle of modern commercial design. Designed to inspire, it features vast open collaborative spaces.
                </p>
                <Link href="/projects/mac-builders" className="inline-flex items-center gap-4 text-xs font-mono uppercase tracking-[0.2em] border-b border-white/20 pb-1 w-fit hover:border-white transition-colors">
                  View Case Study <span className="transform -rotate-45">→</span>
                </Link>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative aspect-[16/9] w-full max-w-sm overflow-hidden"
              >
                <Image src={MacDetailImg} alt="MAC Detail" fill className="object-cover" />
              </motion.div>
            </div>
          </div>


          {/* PROJECT 02: MASKAAN */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            {/* Left: Info & Sub-images (Staggered to inverse) */}
            <div className="lg:col-span-5 flex flex-col gap-16 order-2 lg:order-1 pt-12 lg:pt-32">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col gap-6"
              >
                <div className="flex items-center gap-4 text-xs font-mono tracking-[0.2em] text-white/50 uppercase">
                  <span>Residential</span>
                  <span className="w-8 h-px bg-white/20" />
                  <span>Ernakulam</span>
                </div>
                <Link href="/projects/maskaan" className="group/link inline-block">
                  <h2 className="text-5xl md:text-6xl font-light tracking-tight group-hover/link:text-white/70 transition-colors">Maskaan</h2>
                </Link>
                <p className="text-lg font-light text-white/60 leading-relaxed max-w-md">
                  Located in the bustling heart of Ernakulam, Maskaan is a luxury residential masterpiece that elegantly balances urban sophistication with serene living spaces.
                </p>
                <Link href="/projects/maskaan" className="inline-flex items-center gap-4 text-xs font-mono uppercase tracking-[0.2em] border-b border-white/20 pb-1 w-fit hover:border-white transition-colors">
                  View Case Study <span className="transform -rotate-45">→</span>
                </Link>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative aspect-[4/5] w-full max-w-sm overflow-hidden ml-auto"
              >
                <Image src={MaskaanDetailImg} alt="Maskaan Detail" fill className="object-cover" />
              </motion.div>
            </div>

            {/* Right: Huge Main Image */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 relative aspect-[3/4] md:aspect-[4/5] w-full overflow-hidden group order-1 lg:order-2"
            >
              <Link href="/projects/maskaan">
                <Image src={MaskaanMainImg} alt="Maskaan" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </Link>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 3. Immersive Footer CTA */}
      <section className="w-full py-32 md:py-48 border-t border-white/10 flex flex-col items-center justify-center bg-[#050505]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center flex flex-col items-center gap-8"
        >
          <span className="text-xs font-mono tracking-[0.3em] text-white/40 uppercase">Ready to build?</span>
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter uppercase text-white">
            Start a project
          </h2>
          <a href="#contact" className="mt-8 px-12 py-5 bg-white text-black text-sm font-bold uppercase tracking-widest hover:bg-white/80 transition-colors">
            Get in touch
          </a>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
