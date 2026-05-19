"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How does the Maskan payment timeline work?",
    answer: "We offer milestone-based payment structures tailored to the specific phases of your project, reducing upfront capital demands and ensuring transparency throughout the build.",
  },
  {
    question: "What types of projects do you handle?",
    answer: "We specialize in high-end commercial spaces, luxury residential estates, and institutional facilities, delivering both architectural design and full-scale construction.",
  },
  {
    question: "Do you offer modular construction?",
    answer: "Yes, our modular systems allow for incredibly fast deployment without compromising structural integrity or aesthetic quality, ideal for remote or time-sensitive builds.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24 bg-[#2B3530] text-[#DCD4C4] border-b border-white/5 overflow-hidden">
      
      {/* Floor Plan / Blueprint Background */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center opacity-[0.04]">
        <svg width="100%" height="100%" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <g stroke="#FFF" strokeWidth="1" fill="none">
            {/* Blueprint Grid */}
            <pattern id="faq-grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#FFF" strokeWidth="0.5" strokeOpacity="0.2" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#faq-grid)" />

            {/* Floor Plan Layout */}
            <g transform="translate(400, 200)" strokeOpacity="0.5">
              <rect x="0" y="0" width="400" height="300" strokeWidth="2" />
              <line x1="200" y1="0" x2="200" y2="300" strokeWidth="2" />
              <line x1="0" y1="150" x2="200" y2="150" strokeWidth="2" />
              {/* Doors */}
              <path d="M 100 0 A 30 30 0 0 1 130 -30 L 130 0" />
              <path d="M 250 300 A 30 30 0 0 1 280 330 L 280 300" />
              {/* Dimension lines */}
              <line x1="0" y1="-20" x2="400" y2="-20" />
              <line x1="0" y1="-25" x2="0" y2="-15" />
              <line x1="400" y1="-25" x2="400" y2="-15" />
              <text x="200" y="-30" fill="#FFF" fontSize="12" letterSpacing="2" textAnchor="middle">FLOOR PLAN A</text>
            </g>
            
            {/* Scaffold / Column Lines */}
            <g transform="translate(50, 100)" strokeOpacity="0.3" strokeDasharray="5 5">
               <line x1="0" y1="0" x2="0" y2="600" strokeWidth="1.5" />
               <line x1="100" y1="0" x2="100" y2="600" strokeWidth="1.5" />
               <line x1="200" y1="0" x2="200" y2="600" strokeWidth="1.5" />
            </g>
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
        <div className="mb-16 text-center md:text-left">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#DCD4C4]/60 font-bold mb-4 block">Information</span>
          <h2 className="text-3xl md:text-5xl font-light text-[#DCD4C4]">Frequently Asked Questions</h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-white/10 pb-4">
              <button
                className="w-full flex items-center justify-between py-4 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="text-lg md:text-xl font-light pr-8 text-[#DCD4C4]">{faq.question}</span>
                <span className="text-[#DCD4C4] shrink-0">
                  {openIndex === idx ? <Minus size={20} strokeWidth={1.5} /> : <Plus size={20} strokeWidth={1.5} />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-white/70 font-light pt-2 pb-6 pr-8">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
