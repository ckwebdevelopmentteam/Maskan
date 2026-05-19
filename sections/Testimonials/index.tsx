"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";

const testimonials = [
  {
    quote: "They didn't just build our villa, they fundamentally reshaped how we experience luxury living. Simply extraordinary.",
    author: "Mr. Yashwant Ostwal",
    role: "CEO, Ostwal Enterprises",
  },
  {
    quote: "Working with Maskan felt less like a general contractor and more like having brilliant architectural co-founders.",
    author: "Engr. Tariq Mahmood",
    role: "Director, Infrastructure Development",
  },
  {
    quote: "The attention to detail and zero-defect execution is exactly what our luxury hospitality brand expected. Beautiful work.",
    author: "Dr. Amara Khan",
    role: "Founder, Peak Eco-Hotels",
  },
  {
    quote: "Maskan translated our vision into an architectural masterpiece. Their detail-oriented craftsmanship is unmatched.",
    author: "Sarah Jenkins",
    role: "CEO, TechFlow",
  },
  {
    quote: "The attention to detail and zero-lag performance was exactly what our luxury audience expected. Beautiful execution.",
    author: "Elena Rostova",
    role: "CMO, Velour",
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;
    
    const children = Array.from(container.children) as HTMLElement[];
    if (children.length === 0) return;
    
    let closestIndex = 0;
    let minDistance = Infinity;
    
    children.forEach((child, index) => {
      const childOffset = child.offsetLeft - container.offsetLeft;
      const distance = Math.abs(childOffset - scrollLeft);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });
    
    setActiveIndex(closestIndex);
  };

  const scrollToCard = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const children = Array.from(container.children) as HTMLElement[];
    if (children[index]) {
      const childOffset = children[index].offsetLeft - container.offsetLeft;
      container.scrollTo({
        left: childOffset,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  // Add scroll listener
  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll, { passive: true });
      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div id="testimonials" className="bg-[#FFFFFF] py-12 md:py-16 text-[#2B3530] border-t border-[#2B3530]/5 relative overflow-hidden">
      {/* Title Header exactly like screenshot */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 mb-10">
        <h2 className="text-xl md:text-2xl font-normal text-[#111111] pb-4 tracking-tight">
          The Sentiment
        </h2>
        <div className="w-full h-[1px] bg-[#2B3530]/10" />
      </div>

      {/* Horizontal Carousel Track */}
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-none py-4 px-6 md:px-16 lg:px-24"
      >
        {testimonials.map((item, idx) => (
          <motion.div
            key={idx}
            className="w-[85vw] sm:w-[360px] md:w-[400px] flex-shrink-0 snap-center bg-[#F8F9FA] rounded-[1.8rem] p-8 md:p-10 flex flex-col justify-between min-h-[220px] md:min-h-[240px] shadow-[0_4px_24px_rgba(0,0,0,0.015)] border border-[#2B3530]/[0.02]"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <div className="space-y-4">
              {/* Double quotation mark in serif font */}
              <span className="text-[#D1D5DB] text-6xl font-serif leading-none block select-none h-4">
                “
              </span>
              {/* Testimonial Quote */}
              <p className="text-[#2B3530]/85 text-[15px] md:text-[16px] leading-relaxed font-normal tracking-tight">
                {item.quote}
              </p>
            </div>
            
            <div className="space-y-4 pt-6 mt-6 border-t border-[#2B3530]/5">
              <div className="space-y-0.5">
                <h4 className="text-[15px] font-semibold text-[#2B3530] tracking-wide">
                  {item.author}
                </h4>
                <p className="text-[12px] text-[#2B3530]/45 font-normal">
                  {item.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Dot Indicators exactly like screenshot */}
      <div className="flex justify-center items-center gap-2 mt-8">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollToCard(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              idx === activeIndex
                ? "w-8 bg-[#4F46E5]" // Violet pill shape for active
                : "w-2 bg-[#D1D5DB] hover:bg-[#9CA3AF]" // Small gray dot for inactive
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
