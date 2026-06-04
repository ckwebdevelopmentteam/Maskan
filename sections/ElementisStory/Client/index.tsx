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
    tagline: "We construct elite private homes and residential villas designed in harmony with universal architecture principles. Every phase is meticulously managed from deep foundations to custom architectural facades. Our turnkey solutions guarantee zero hassle, prioritizing premium materials and precision engineering to deliver spaces that reflect unparalleled elegance.",
    image: ImageRes,
    icon: Home,
    tags: ["Custom Villas", "Luxury Apartments", "Structural Foundations", "Premium Interiors"],
  },
  {
    id: "02",
    name: "Commercial Construction",
    tagline: "Our commercial division builds modern business complexes, multiplexes, trade towers, and retail plazas engineered for maximum spatial efficiency and commercial performance. We specialize in wide-span post-tensioned slabs, industrial steel framing, central HVAC systems, and high-performance glass facades.",
    image: ImageCom,
    icon: Building2,
    tags: ["Retail Plazas", "High-Rise Offices", "MEP-Ready Spaces", "Industrial Framing"],
  },
];

export default function ElementisStoryClient() {
  return (
    <div className="w-full relative">
      {/* Alternating Layout Container */}
      <div className="flex flex-col gap-16 md:gap-24 w-full px-4 md:px-0 py-8">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;

          return (
            <Link
              href="/services"
              key={service.name}
              className="group flex flex-col w-full bg-white transition-all duration-500"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
                
                {/* Text Content */}
                <div className={`flex flex-col gap-6 lg:px-6 ${isEven ? 'md:order-last' : ''}`}>
                  <h3 className="text-3xl md:text-5xl lg:text-[3.5rem] leading-[1.1] font-bold tracking-tight text-[var(--fg-primary)] group-hover:text-[var(--accent)] transition-colors duration-300">
                    {service.name}
                  </h3>
                  
                  <p className="text-base md:text-lg lg:text-xl text-[var(--fg-primary)]/80 font-light leading-relaxed">
                    {service.tagline}
                  </p>

                  <ul className="flex flex-col gap-4 mt-4">
                    {service.tags.map((tag) => (
                      <li
                        key={tag}
                        className="flex items-center gap-4 text-sm md:text-base text-[var(--fg-primary)]/90 font-light"
                      >
                        <div className="w-2 h-2 rounded-full bg-[var(--accent)] flex-shrink-0" />
                        <span>{tag}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 flex h-12 w-12 items-center justify-center border border-[var(--fg-primary)]/30 text-[var(--fg-primary)]/80 transition-all duration-300 group-hover:bg-[var(--accent)] group-hover:text-[var(--bg-primary)] group-hover:border-[var(--accent)] rounded-full shrink-0">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>

                {/* Image Content */}
                <div className="relative w-full aspect-[4/3] md:aspect-[3/2] overflow-hidden rounded-none shadow-[0_12px_36px_rgba(0,0,0,0.1)] group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-shadow duration-500">
                  <Image
                    src={service.image}
                    alt={service.name}
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
