"use client";

import React from "react";
import { motion } from "motion/react";

const services = [
  {
    title: "Residential Construction",
    description: "We construct private homes, villas, and apartments — from individual custom homes to large multi-unit residential communities like our 42-villa Meridian Heights project in Perinthalmanna and 112-unit Avoria development in Kochi. Every phase is managed from foundation to custom facades, with turnkey delivery and premium materials throughout.",
    bullets: [
      "Custom Villas",
      "Apartments",
      "Multi-Unit Residential Communities",
      "Structural Foundations"
    ]
  },
  {
    title: "Commercial & High-Rise Construction",
    description: "Our commercial division builds business complexes, retail plazas, high-rise buildings, and multi-storey commercial spaces engineered for spatial efficiency and long-term performance.",
    bullets: [
      "High-Rise Buildings",
      "Retail Plazas",
      "Multi-Storey Commercial Buildings",
      "MEP-Ready Spaces"
    ]
  },
  {
    title: "Architectural & Interior Design",
    description: "From initial concept to finished interiors, our design team creates spaces that are as functional as they are beautiful — covering both new builds and interior fit-outs for completed spaces.",
    bullets: [
      "Architectural Design",
      "Interior Design",
      "Interior Works",
      "Premium Interiors"
    ]
  },
  {
    title: "Landscape, Renovation & Turnkey Services",
    description: "Beyond new construction, we help clients enhance and complete their spaces — from outdoor landscaping to full renovations and end-to-end turnkey delivery.",
    bullets: [
      "Landscape Design",
      "Renovation",
      "Turnkey Construction",
      "Material Supply"
    ]
  }
];

export default function ServicesList() {
  return (
    <section className="w-full bg-[var(--bg-primary)] py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col gap-6 p-8 rounded-3xl bg-[var(--fg-primary)]/5 border border-[var(--fg-primary)]/10"
            >
              <h3 className="text-2xl md:text-3xl font-medium text-[var(--fg-primary)]">
                {service.title}
              </h3>
              <p className="text-base md:text-lg font-light text-[var(--fg-primary)]/70 leading-relaxed">
                {service.description}
              </p>
              <ul className="flex flex-col gap-3 mt-2">
                {service.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-[var(--fg-primary)]/80">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--fg-primary)]/50 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
