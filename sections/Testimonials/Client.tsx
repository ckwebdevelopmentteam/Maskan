"use client";

import React, { useRef, useEffect } from "react";

export interface TestimonialItem {
  image: string;
  quote: string;
  author: string;
  location: string;
}

interface TestimonialsClientProps {
  testimonials: TestimonialItem[];
}

export default function TestimonialsClient({ testimonials }: TestimonialsClientProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;

        // If we are close to the end, scroll smoothly back to the beginning
        if (container.scrollLeft >= maxScrollLeft - 15) {
          container.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        } else {
          const firstCard = container.querySelector(".flex-shrink-0") as HTMLElement;
          if (firstCard) {
            const cardWidth = firstCard.offsetWidth;
            const gap = 20; // gap-5 is 20px
            container.scrollBy({
              left: cardWidth + gap,
              behavior: "smooth",
            });
          }
        }
      }
    }, 4500); // Autoscroll every 4.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="testimonials"
      className="bg-[var(--bg-primary)] py-10 md:py-20 text-[var(--text-white)] border-t border-[var(--border-white-5)] relative overflow-hidden w-full"
    >
      {/* Header Area */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div className="flex-1">
          <h2 className="text-3xl md:text-[2.75rem] font-bold text-[var(--fg-primary)] leading-[1.1] tracking-tight uppercase">
            Client Stories That
            <br />
            Drive Us Forward
          </h2>
          <p className="mt-4 text-sm md:text-base text-[var(--text-white)]/70 font-light max-w-2xl leading-relaxed">
            Our clients are at the heart of everything we design. Here&apos;s what they have to say about their experience with Maskan Builders from the first sketch to the final reveal.
          </p>
        </div>
      </div>

      {/* Horizontal Carousel Track */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-none py-2 px-6 md:px-12 lg:px-16 max-w-[1440px] mx-auto"
      >
        {testimonials.map((item, idx) => (
          <div
            key={idx}
            className="w-[85vw] sm:w-[calc(50%-10px)] md:w-[calc(33.333%-13.33px)] lg:w-[calc(25%-15px)] flex-shrink-0 snap-center bg-[var(--bg-card)] rounded-[1.75rem] p-4.5 border border-[var(--border-white-10)] flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-all duration-300"
          >
            <div className="space-y-4">
              {/* Image with decreased height */}
              <div className="relative w-full h-[200px] md:h-[230px] rounded-[1.25rem] overflow-hidden bg-gray-50">
                <img
                  src={item.image}
                  alt={`Testimonial from ${item.author}`}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Testimonial Quote */}
              <p className="text-[var(--text-white)]/80 text-xs md:text-sm leading-relaxed font-light">
                {item.quote}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-[var(--border-white-5)] flex flex-col items-end text-right">
              <h4 className="text-xs md:text-sm font-semibold text-[var(--fg-primary)]">
                &mdash; {item.author}
              </h4>
              <p className="text-[10px] md:text-xs text-[var(--text-white)]/40 font-light mt-0.5">
                {item.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
