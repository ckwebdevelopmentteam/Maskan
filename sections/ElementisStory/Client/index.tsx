"use client";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";

// Static imports to guarantee Next.js bundles and renders paths correctly
import ImageRes from "@/public/property-1.jpg";
import ImageCom from "@/public/property-5.jpg";
import ImageInt from "@/public/property-3.jpg";

const services = [
  {
    name: "RESIDENTIAL CONSTRUCTION",
    tagline: "Turnkey Luxury Villas & Foundations",
    image: ImageRes,
  },
  {
    name: "COMMERCIAL CONSTRUCTION",
    tagline: "High-Rise Office Plazas & Scaffolding",
    image: ImageCom,
  },
  {
    name: "INTERIOR DESIGN & SPA PLANNING",
    tagline: "Bespoke Millwork & Marble Installations",
    image: ImageInt,
  },
];

export default function ElementisStoryClient() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
        {services.map((ser, idx) => (
          <Link href="/services" key={ser.name} className="w-full">
            <motion.div
              className="relative aspect-[2/3] w-full overflow-hidden rounded-2xl border border-[var(--border-white-10)] group cursor-pointer shadow-2xl bg-[var(--bg-card)]"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
            >
              {/* Image block */}
              <motion.div 
                className="w-full h-full overflow-hidden rounded-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
              >
                <Image
                  src={ser.image}
                  alt={ser.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority
                />
              </motion.div>

              {/* Overlay block */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent flex flex-col justify-end items-center pb-12 px-6 text-center space-y-2">
                {/* Title */}
                <h3 className="text-base md:text-lg font-light tracking-[0.25em] text-[var(--text-white)] leading-tight uppercase">
                  {ser.name}
                </h3>
                <span className="text-[10px] uppercase tracking-widest text-[var(--text-white)]/55 font-mono">
                  {ser.tagline}
                </span>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* VIEW ALL SERVICES Button */}
      <div className="flex justify-center mt-12 md:mt-16 w-full">
        <Link href="/services">
          <button className="bg-transparent border-none text-[var(--text-white)] hover:text-[var(--text-white)]/80 text-sm uppercase tracking-[0.25em] font-medium py-3 px-6 flex items-center gap-4 transition-all duration-300 group cursor-pointer">
            <svg 
              className="w-8 h-3 text-[var(--text-white)] transition-transform duration-300 group-hover:translate-x-1" 
              viewBox="0 0 40 10" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5"
            >
              <line x1="0" y1="5" x2="35" y2="5" />
              <path d="M30,1 L35,5 L30,9" />
            </svg>
            Explore All Services
          </button>
        </Link>
      </div>
    </div>
  );
}
