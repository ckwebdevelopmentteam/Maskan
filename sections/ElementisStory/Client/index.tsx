"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, Building2, Home, PanelsTopLeft } from "lucide-react";

import ImageRes from "@/public/property-1.jpg";
import ImageCom from "@/public/property-5.jpg";
import ImageInt from "@/public/property-3.jpg";

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
  {
    id: "03",
    name: "Interior Design & Planning",
    tagline: "Space planning, interior moods, lighting, ceilings, joinery, and material detailing.",
    image: ImageInt,
    icon: PanelsTopLeft,
    tags: ["Interiors", "Lighting", "3D Plans"],
  },
];

export default function ElementisStoryClient() {
  return (
    <div className="w-full">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <Link href="/services" key={service.name} className="group block">
              <motion.article
                className="grid min-h-[220px] grid-cols-1 overflow-hidden border border-[var(--border-white-10)] bg-[var(--bg-card)]/70 shadow-[0_18px_45px_rgba(0,0,0,0.14)] transition-colors duration-500 hover:bg-[var(--bg-card)] md:grid-cols-[240px_1fr_160px]"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: [0.24, 0.43, 0.15, 0.97],
                }}
              >
                <div className="relative h-56 overflow-hidden md:h-full">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 240px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/5" />
                </div>

                <div className="flex flex-col justify-between gap-8 p-6 md:p-8">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <span className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--accent)]">
                        Service {service.id}
                      </span>
                      <h3 className="mt-4 max-w-2xl text-2xl font-light uppercase leading-tight tracking-[0.08em] text-[var(--fg-primary)] md:text-4xl">
                        {service.name}
                      </h3>
                    </div>
                    <div className="hidden h-12 w-12 shrink-0 items-center justify-center border border-[var(--fg-primary)]/15 text-[var(--fg-primary)]/70 md:flex">
                      <Icon className="h-5 w-5" strokeWidth={1.4} />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
                    <p className="max-w-xl text-sm font-light leading-relaxed text-[var(--fg-primary)]/65 md:text-base">
                      {service.tagline}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-[var(--fg-primary)]/12 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--fg-primary)]/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-[var(--border-white-10)] p-6 md:flex-col md:border-l md:border-t-0 md:p-7">
                  <span className="font-mono text-xs text-[var(--fg-primary)]/45">
                    {String(index + 1).padStart(2, "0")} /{" "}
                    {String(services.length).padStart(2, "0")}
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center bg-[var(--fg-primary)] text-[var(--bg-primary)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                    <ArrowUpRight className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                </div>
              </motion.article>
            </Link>
          );
        })}
      </div>

      <div className="mt-12 flex justify-center md:mt-16">
        <Link
          href="/services"
          className="flex items-center gap-4 py-3 text-sm font-medium uppercase tracking-[0.25em] text-[var(--fg-primary)] transition-colors duration-300 hover:text-[var(--accent)]"
        >
          <span className="h-px w-10 bg-current" />
          Explore All Services
          <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
        </Link>
      </div>
    </div>
  );
}
