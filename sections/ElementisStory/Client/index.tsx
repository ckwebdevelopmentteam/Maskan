"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Building2, Home, PenTool, Trees, LucideIcon, CheckCircle2 } from "lucide-react";
import ImageWithFallback from "@/components/Client/ImageWithFallback";
import { StaticImageData } from "next/image";

import ImageRes from "@/public/residential_villa.webp";
import ImageCom from "@/public/commercial_plaza.webp";
import ImageDesign from "@/public/white_minimal_interior.webp";
import ImageLandscape from "@/public/aesthetic_cabin_forest.webp";

interface ServiceItem {
  id: string;
  name: string;
  category: string;
  tagline: string;
  image: StaticImageData;
  icon: LucideIcon;
  tags: string[];
  features: string[];
}

const services: ServiceItem[] = [
  {
    id: "01",
    name: "Residential Construction",
    category: "Residential Division",
    tagline:
      "We construct elite private homes and residential villas designed in harmony with universal architecture principles. Every phase is meticulously managed from deep foundations to custom architectural facades. Our turnkey solutions guarantee zero hassle, prioritizing premium materials and precision engineering to deliver spaces that reflect unparalleled elegance.",
    image: ImageRes,
    icon: Home,
    tags: ["Custom Villas", "Luxury Apartments", "Structural Foundations", "Premium Interiors"],
    features: [
      "Turnkey Execution & Delivery",
      "Structural Engineering Standards",
      "Bespoke Facade Craftsmanship",
      "10-Year Structural Integrity Assurance",
    ],
  },
  {
    id: "02",
    name: "Commercial Construction",
    category: "Commercial Division",
    tagline:
      "Our commercial division builds modern business complexes, multiplexes, trade towers, and retail plazas engineered for maximum spatial efficiency and commercial performance. We specialize in wide-span post-tensioned slabs, industrial steel framing, central HVAC systems, and high-performance glass facades.",
    image: ImageCom,
    icon: Building2,
    tags: ["Retail Plazas", "High-Rise Offices", "MEP-Ready Spaces", "Industrial Framing"],
    features: [
      "Wide-Span Post-Tension Slabs",
      "Central HVAC & MEP Systems",
      "Structural Steel Framing",
      "High-Performance Glass Curtains",
    ],
  },
  {
    id: "03",
    name: "Architectural & Interior Design",
    category: "Design Studio",
    tagline:
      "From initial concept to finished interiors, our design team creates spaces that are as functional as they are beautiful — covering both new builds and interior fit-outs for completed spaces.",
    image: ImageDesign,
    icon: PenTool,
    tags: ["Architectural Design", "Interior Design", "Interior Works", "Premium Interiors"],
    features: [
      "3D Visualizations & Blueprints",
      "Custom Spatial Planning",
      "Aesthetic Material Selection",
      "Turnkey Interior Fit-Outs",
    ],
  },
  {
    id: "04",
    name: "Landscape, Renovation & Turnkey Services",
    category: "Specialized Services",
    tagline:
      "Beyond new construction, we help clients enhance and complete their spaces — from outdoor landscaping to full renovations and end-to-end turnkey delivery.",
    image: ImageLandscape,
    icon: Trees,
    tags: ["Landscape Design", "Renovation", "Turnkey Construction", "Material Supply"],
    features: [
      "Outdoor Landscape Integration",
      "Exterior Facade Remodeling",
      "Complete Structural Overhauls",
      "End-to-End Material Sourcing",
    ],
  },
];

export default function ElementisStoryClient() {
  return (
    <div className="w-full relative">
      {/* Alternating Layout Container */}
      <div className="flex flex-col gap-12 md:gap-20 w-full px-2 sm:px-4 md:px-0 py-4">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          const Icon = service.icon;

          return (
            <div
              key={service.name}
              className="group flex flex-col w-full bg-white border border-gray-200/90 rounded-[2rem] p-6 sm:p-8 md:p-12 transition-all duration-500 hover:border-[var(--fg-primary)]/30 shadow-sm"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
                
                {/* Text Content */}
                <div className={`lg:col-span-6 flex flex-col items-start text-left gap-5 ${isEven ? 'lg:order-last' : ''}`}>
                  {/* Category & ID */}
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono tracking-widest text-[var(--accent)] uppercase px-3 py-1 rounded-full bg-gray-100 border border-gray-200">
                      {service.category}
                    </span>
                    <span className="text-xs font-mono text-[var(--fg-primary)]/50 tracking-widest">
                      // {service.id}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.1] font-medium tracking-tight text-[var(--fg-primary)] transition-colors duration-300">
                    {service.name}
                  </h3>
                  
                  <p className="text-sm sm:text-base md:text-lg text-[var(--fg-primary)]/80 font-light leading-relaxed">
                    {service.tagline}
                  </p>

                  {/* Key Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full my-2 pt-2 border-t border-gray-200/80">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2.5 text-xs sm:text-sm text-[var(--fg-primary)]/90">
                        <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full border border-gray-200 bg-gray-50 text-[var(--fg-primary)]/85 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Link */}
                  <div className="pt-4">
                    <Link
                      href="/#contact"
                      className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[var(--fg-primary)]/30 text-[var(--fg-primary)] text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-[var(--fg-primary)] hover:text-[var(--bg-primary)]"
                    >
                      Consult On {service.name}
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                {/* Image / Graphic Content */}
                <div className="lg:col-span-6 relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[4/3] overflow-hidden rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.name}
                    fill
                    icon={Icon}
                    category={service.category}
                    fallbackTitle={service.name}
                    fallbackSubtitle={service.tagline}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Indicators / Explore all */}
      <div className="mt-12 flex items-center justify-end px-4 md:px-0 border-t border-[var(--border-white-5)] pt-6">
        <Link
          href="/#contact"
          className="flex items-center gap-4 py-3 text-sm md:text-base font-medium uppercase tracking-[0.25em] text-[var(--fg-primary)] transition-colors duration-300 hover:text-[var(--accent)]"
        >
          <span className="h-px w-12 bg-current" />
          Request a Custom Proposal
          <ArrowUpRight className="h-5 w-5" strokeWidth={1.5} />
        </Link>
      </div>
    </div>
  );
}
