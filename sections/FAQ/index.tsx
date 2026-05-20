"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MaskanLogo from "@/public/Maskan Open File/PNG/Maskan-01.png";
import FaqImage from "@/public/faq-image.jpg";

const faqs = [
  {
    question: "What types of projects does your studio work on?",
    answer: "We specialize in high-end residential, commercial, and hospitality projects. Our focus is on crafting spaces that blend timeless design with modern functionality.",
  },
  {
    question: "What is the first step to starting a project with your studio?",
    answer: "It begins with an initial consultation where we discuss your vision, requirements, timeline, and budget. From there, we outline a clear design roadmap.",
  },
  {
    question: "How long does an architectural project typically take?",
    answer: "Timelines vary depending on the scope. A standard residential project might take 6 to 12 months from concept to completion, while larger commercial projects take longer.",
  },
  {
    question: "Can you help with renovations or existing buildings?",
    answer: "Yes, we have extensive experience in renovations and adaptive reuse, transforming existing structures into modern, functional spaces while respecting their original character.",
  },
  {
    question: "Do you also assist during the construction phase?",
    answer: "Absolutely. We offer full construction administration services, working closely with contractors to ensure the design is executed accurately and to the highest standards.",
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  return (
    <section id="faq" className="py-16 md:py-24 px-6 md:px-16 bg-[var(--bg-primary)] text-[var(--fg-primary)]">
      <div className="max-w-[1200px] mx-auto w-full">
        
        {/* Top Label */}
        <div className="flex items-center gap-3 mb-16 border-b border-[var(--fg-primary)] border-opacity-10 pb-10">
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--fg-primary)]"></div>
          <span className="font-mono text-xs text-[var(--fg-primary)]/70">Frequently Asked Questions</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Title & Image */}
          <div className="space-y-8 lg:sticky lg:top-32">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-light tracking-tight text-[var(--fg-primary)] leading-[1.3] max-w-md">
              If you have more questions, feel free to email our team at <a href="mailto:hi@helloarchi.com" className="underline decoration-[var(--fg-primary)]/30 hover:decoration-[var(--fg-primary)] transition-colors underline-offset-4">hi@helloarchi.com</a> and we will be happy to help.
            </h2>
            
            <div className="relative w-full aspect-[4/3] lg:aspect-square rounded-xl overflow-hidden bg-[var(--bg-card)] shadow-xl group">
              <video 
                src="/746c86c4-1c39-4fa9-8a6c-d82f468ff5fc" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Black Overlay */}
              <div className="absolute inset-0 bg-black/40 pointer-events-none z-10 transition-opacity duration-500 group-hover:bg-black/20" />
              
              {/* Logo (No delay, very large) */}
              <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none p-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full h-full flex items-center justify-center"
                >
                  <Image 
                    src={MaskanLogo} 
                    alt="Maskan Builders" 
                    className="w-[85%] max-w-[500px] h-auto object-contain drop-shadow-2xl"
                  />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="flex flex-col">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-[var(--fg-primary)] border-opacity-10">
                <button
                  className="w-full flex items-center justify-between py-5 text-left focus:outline-none group"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                >
                  <span className={`text-sm md:text-base font-light pr-8 transition-colors duration-300 ${openIndex === idx ? 'text-[var(--fg-primary)]' : 'text-[var(--fg-primary)]/80 group-hover:text-[var(--fg-primary)]'}`}>
                    {faq.question}
                  </span>
                  
                  {/* Circular Plus/Minus Icon */}
                  <span className="shrink-0 w-5 h-5 rounded-full bg-[var(--fg-primary)] text-[var(--bg-primary)] flex items-center justify-center transition-transform duration-300">
                    {openIndex === idx ? <Minus size={12} strokeWidth={3} /> : <Plus size={12} strokeWidth={3} />}
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
                      <p className="text-sm text-[var(--fg-primary)]/50 font-light pb-5 pr-12 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
