"use client";

import React, { useRef, useEffect } from "react";

const testimonialsData = [
  {
    image: "/IrsyMMpxpY0yqVMutVpGtcoOSx4.webp",
    quote: "Professional, creative, and easy to work with. From the first meeting to the final setup, the process was seamless. The final result felt both thoughtful and beautifully executed.",
    author: "Riya Felix",
    location: "Thrissur",
  },
  {
    image: "/S0kKRTM44yfHbhgnxbX3PNQlwE.avif",
    quote: "Maskan Builders completely transformed our space. The attention to detail and personal touch made our home feel truly ours.",
    author: "Sudhkaran Nair",
    location: "Kochi",
  },
  {
    image: "/UOKG1WBP4iClBZMcV2ZS55S7Jyw.avif",
    quote: "We wanted something modern yet warm—and they delivered exactly that. Every room tells a story now. It's not just a space—it feels like home.",
    author: "Tom Mathew",
    location: "Kozhikode",
  },
  {
    image: "/Maskan 01_page-0026.jpg",
    quote: "The attention to detail and zero-defect execution is exactly what our luxury hospitality brand expected. Maskan Builders delivered a masterpiece that has left all our guests in awe.",
    author: "Dr. Amara Khan",
    location: "Vagamon",
  },
];

export default function Testimonials() {
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
            behavior: "smooth"
          });
        } else {
          const firstCard = container.querySelector(".flex-shrink-0") as HTMLElement;
          if (firstCard) {
            const cardWidth = firstCard.offsetWidth;
            const gap = 20; // gap-5 is 20px
            container.scrollBy({
              left: cardWidth + gap,
              behavior: "smooth"
            });
          }
        }
      }
    }, 4500); // Autoscroll every 4.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="testimonials" className="bg-[#2B3530] py-16 md:py-20 text-white border-t border-white/5 relative overflow-hidden w-full">
      {/* Header Area */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div className="flex-1">
          <h2 className="text-3xl md:text-[2.75rem] font-bold text-[#DCD4C4] leading-[1.1] tracking-tight uppercase">
            Client Stories That<br />Drive Us Forward
          </h2>
          <p className="mt-4 text-sm md:text-base text-white/70 font-light max-w-2xl leading-relaxed">
            Our clients are at the heart of everything we design. Here&apos;s what they have to say about their experience with Maskan Builders from the first sketch to the final reveal.
          </p>
        </div>
      </div>

      {/* Horizontal Carousel Track */}
      <div 
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-none py-2 px-6 md:px-12 lg:px-16 max-w-[1440px] mx-auto"
      >
        {testimonialsData.map((item, idx) => (
          <div
            key={idx}
            className="w-[80vw] sm:w-[320px] md:w-[350px] flex-shrink-0 snap-center bg-[#232b27] rounded-[1.75rem] p-4.5 border border-white/10 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-all duration-300"
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
              <p className="text-white/80 text-xs md:text-sm leading-relaxed font-light">
                {item.quote}
              </p>
            </div>
            
            <div className="pt-4 mt-4 border-t border-white/5 flex flex-col items-end text-right">
              <h4 className="text-xs md:text-sm font-semibold text-[#DCD4C4]">
                &mdash; {item.author}
              </h4>
              <p className="text-[10px] md:text-xs text-white/40 font-light mt-0.5">
                {item.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
