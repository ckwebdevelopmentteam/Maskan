"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowUpRight, Building2, Home } from "lucide-react";

import ImageRes from "@/public/residential_villa.png";
import ImageCom from "@/public/commercial_plaza.png";

const services: {
  id: string;
  name: string;
  tagline: string;
  image: StaticImageData;
  icon: typeof Home;
  tags: string[];
}[] = [
  {
    id: "01",
    name: "Residential Construction",
    tagline: "Turnkey villas, premium homes, structure, finishes, and site execution.",
    image: ImageRes,
    icon: Home,
    tags: ["Villas", "Apartments", "Foundations"],
  },
  {
    id: "02",
    name: "Commercial Construction",
    tagline: "High-rise offices, retail shells, structural systems, and MEP-ready spaces.",
    image: ImageCom,
    icon: Building2,
    tags: ["Plazas", "Offices", "Retail"],
  },
];

export default function ElementisStoryClient() {
  return (
    <div className="w-full relative">
      {/* 2-Column Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full px-4 md:px-0 py-4">
        {services.map((service, index) => {
          return (
            <Link
              href="/services"
              key={service.name}
              className="group flex flex-col w-full overflow-hidden border border-[var(--fg-primary)]/10 shadow-[0_12px_36px_rgba(0,0,0,0.18)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 rounded-none bg-white"
            >
              {/* Card Image */}
              <div className="relative w-full aspect-[4/5] md:aspect-[4/3] lg:aspect-[16/9] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-black/10 z-[1] transition-opacity duration-500 group-hover:opacity-0" />
              </div>

              {/* Card Content Below Image */}
              <div className="flex flex-col gap-4 p-8 md:p-10 text-[var(--fg-primary)] bg-white flex-grow">
                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-light uppercase tracking-wider mt-2 group-hover:text-[var(--accent)] transition-colors duration-300">
                  {service.name}
                </h3>

                {/* Tagline description */}
                <p className="text-sm md:text-base text-[var(--fg-primary)]/80 font-light leading-relaxed max-w-md mt-2 flex-grow">
                  {service.tagline}
                </p>

                {/* Bottom tags & hover link icon */}
                <div className="flex items-center justify-between pt-4 mt-4 border-t border-[var(--fg-primary)]/10">
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span key={tag} className="border border-[var(--fg-primary)]/20 bg-[var(--fg-primary)]/5 px-3 py-1 text-[10px] md:text-xs uppercase tracking-wider text-[var(--fg-primary)]/80">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center border border-[var(--fg-primary)]/30 text-[var(--fg-primary)]/80 transition-all duration-300 group-hover:bg-[var(--accent)] group-hover:text-[var(--bg-primary)] group-hover:border-[var(--accent)] rounded-full shrink-0">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>

              </div>
            </Link>
          );
        })}
      </div>

      {/* Navigation Indicators / Explore all */}
      <div className="mt-12 flex items-center justify-end px-4 md:px-0 border-t border-[var(--border-white-5)] pt-6">
        <Link
          href="/services"
          className="flex items-center gap-4 py-3 text-sm font-medium uppercase tracking-[0.25em] text-[var(--fg-primary)] transition-colors duration-300 hover:text-[var(--accent)]"
        >
          <span className="h-px w-12 bg-current" />
          Explore All Services
          <ArrowUpRight className="h-5 w-5" strokeWidth={1.5} />
        </Link>
      </div>
    </div>
  );
}
