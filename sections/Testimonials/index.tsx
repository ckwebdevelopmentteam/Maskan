"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Maskan translated our vision into an architectural masterpiece. The 30/70 model kept the finances effortless while the construction standard exceeded international benchmarks. Their detail-oriented craftsmanship is unmatched.",
    author: "Mr. Yashwant Ostwal",
    role: "CEO, Ostwal Enterprises",
    property: "Celeste Riviera Villa, Islamabad",
  },
  {
    quote: "The structural integrity and weather resistance of our coastal penthouse tower are a testament to Maskan's engineering supremacy. Absolute transparency, zero margins, and professional delivery.",
    author: "Engr. Tariq Mahmood",
    role: "Director of Infrastructure Development",
    property: "Lumière Coast Residences, Karachi",
  },
  {
    quote: "Building a luxury estate in Kalam seemed impossible due to weather constraints. Maskan solved all logistics, insulated the structure to perfection, and delivered a stunning organic retreat on time.",
    author: "Dr. Amara Khan",
    role: "Founder, Peak Eco-Hotels",
    property: "The Canopy Retreat, Kalam Valley",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div id="testimonials" className="bg-[#232b27] py-24 md:py-36 px-4 md:px-16 text-[#D1CCBF] border-t border-white/5 relative overflow-hidden">
      {/* Subtle quote visual watermark in backdrop */}
      <div className="absolute right-10 bottom-0 pointer-events-none opacity-[0.02] text-white select-none">
        <Quote className="w-[400px] h-[400px] rotate-180" />
      </div>

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        {/* Title */}
        <div className="space-y-4 text-center">
          <span className="text-white/60 text-xs uppercase tracking-[0.25em] font-bold block">Client Experiences</span>
          <h2 className="text-3xl md:text-5xl font-light text-white leading-tight">
            Client <span className="font-normal border-b border-white/20 pb-1">Testimonials</span>
          </h2>
        </div>

        {/* Quotes Display Card */}
        <div className="bg-[#2B3530]/40 border border-white/10 p-8 md:p-16 rounded-3xl relative min-h-[380px] flex flex-col justify-between shadow-2xl backdrop-blur-md">
          {/* Top quote icon */}
          <div className="text-white/10 mb-8 md:mb-12">
            <Quote className="w-12 h-12" />
          </div>

          <div className="flex-grow flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="space-y-8"
              >
                {/* Large quote paragraph */}
                <p className="text-lg md:text-2xl font-light text-white leading-relaxed tracking-wide italic">
                  "{testimonials[activeIndex].quote}"
                </p>

                {/* Author Metadata */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-8 border-t border-white/5">
                  <div className="space-y-1">
                    <span className="text-sm font-semibold text-white tracking-wider block">
                      {testimonials[activeIndex].author}
                    </span>
                    <span className="text-xs text-white/50">
                      {testimonials[activeIndex].role}
                    </span>
                  </div>
                  <div className="bg-white/5 px-4 py-2 rounded-lg border border-white/10 text-xs text-white/80 font-medium">
                    {testimonials[activeIndex].property}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows & Pagination */}
          <div className="flex justify-between items-center mt-12 md:mt-16">
            {/* Pagination Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    idx === activeIndex ? "w-8 bg-white" : "w-2 bg-white/20"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrow controllers */}
            <div className="flex gap-4">
              <button
                onClick={prevTestimonial}
                className="p-3 bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-all duration-300 rounded-full group cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-all duration-300 rounded-full group cursor-pointer"
                aria-label="Next testimonial"
              >
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
