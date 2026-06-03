"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import Img1 from "@/public/property-1.jpg";
import Img2 from "@/public/property-2.jpg";
import Img3 from "@/public/property-3.jpg";
import Img4 from "@/public/property-4.jpg";
import Img5 from "@/public/why_choose_us_sofa.png";
import Img6 from "@/public/F1.avif";

// We need 8 images for each octagon. Reusing imported ones to fill the 8 slots.
const gallery1 = [Img1, Img2, Img3, Img4, Img5, Img6, Img1, Img2];
const gallery2 = [Img4, Img5, Img6, Img1, Img2, Img3, Img4, Img5];

export default function WhyChooseUs() {
  return (
    <section 
      id="why-choose-us" 
      className="py-20 md:py-32 overflow-hidden bg-white border-b border-gray-200"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 space-y-32 md:space-y-48">
        
        {/* ==============================
            GRID 1: Top-Right Carousel 
            ============================== */}
        <div className="flex flex-col lg:flex-row items-center justify-between relative">
          
          {/* Left: Main Title */}
          <div className="lg:w-1/2 z-10 relative lg:pl-12 w-full">
            <h2 className="text-[3.5rem] sm:text-[4.5rem] lg:text-[5.5rem] font-light text-[#333333] leading-[1.1] tracking-tight">
              <span className="block mb-2">Designing</span>
              <span className="block mb-2">Workspaces that</span>
              <span className="font-semibold text-[#4A5568]">expand Possibilities</span>
            </h2>
          </div>

          {/* Right: 3D Octagon Carousel 1 */}
          <div 
            className="lg:w-1/2 relative h-[500px] md:h-[600px] w-full flex items-center justify-end mt-20 lg:mt-0" 
            style={{ perspective: '1500px' }}
          >
            {/* Bleeds off the right edge */}
            <div className="translate-x-[20%] lg:translate-x-[35%]">
              <div 
                className="relative w-[300px] md:w-[450px] h-[200px] md:h-[300px]" 
                style={{ 
                  transformStyle: 'preserve-3d', 
                  transform: 'rotateZ(-22deg) rotateX(-12deg) rotateY(15deg)',
                }}
              >
                <motion.div
                  className="w-full h-full absolute top-0 left-0"
                  style={{ transformStyle: 'preserve-3d' }}
                  animate={{ rotateY: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                >
                  {gallery1.map((img, index) => {
                    const angle = index * 45; // 8 sides = 360 / 8 = 45deg
                    return (
                      <div
                        key={index}
                        className="absolute top-0 left-0 w-full h-full overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.2)]"
                        style={{
                          transform: `rotateY(${angle}deg) translateZ(550px)`,
                          backfaceVisibility: 'visible', 
                        }}
                      >
                        <Image src={img} alt={`Gallery 1 Img ${index + 1}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                        <div className="absolute inset-0 bg-black/5 mix-blend-multiply pointer-events-none" />
                      </div>
                    )
                  })}
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* ==============================
            GRID 2: Bottom-Left Carousel 
            ============================== */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between relative mt-24">
          
          {/* Left: 3D Octagon Carousel 2 */}
          <div 
            className="lg:w-1/2 relative h-[500px] md:h-[600px] w-full flex items-center justify-start mt-20 lg:mt-0" 
            style={{ perspective: '1500px' }}
          >
            {/* Bleeds off the left edge */}
            <div className="-translate-x-[20%] lg:-translate-x-[35%]">
              <div 
                className="relative w-[300px] md:w-[450px] h-[200px] md:h-[300px]" 
                style={{ 
                  transformStyle: 'preserve-3d', 
                  // Matching the exact same tilt for visual consistency
                  transform: 'rotateZ(-22deg) rotateX(-12deg) rotateY(15deg)',
                }}
              >
                <motion.div
                  className="w-full h-full absolute top-0 left-0"
                  style={{ transformStyle: 'preserve-3d' }}
                  // Rotating in reverse for a dynamic complementary effect
                  animate={{ rotateY: -360 }}
                  transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                >
                  {gallery2.map((img, index) => {
                    const angle = index * 45; // 8 sides
                    return (
                      <div
                        key={index}
                        className="absolute top-0 left-0 w-full h-full overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.2)]"
                        style={{
                          transform: `rotateY(${angle}deg) translateZ(550px)`,
                          backfaceVisibility: 'visible', 
                        }}
                      >
                        <Image src={img} alt={`Gallery 2 Img ${index + 1}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                        <div className="absolute inset-0 bg-black/5 mix-blend-multiply pointer-events-none" />
                      </div>
                    )
                  })}
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right: Paragraph & Button */}
          <div className="lg:w-1/2 z-10 relative lg:pr-12 w-full flex flex-col justify-center items-start lg:pl-16">
            <p className="text-gray-600 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-xl">
              For over 41 years, Fortune 500 companies and global innovators have trusted <span className="font-medium text-gray-900">Maskan</span> to design and build environments that inspire collaboration, accelerate productivity, and <span className="font-semibold text-gray-900">shape the future of business.</span>
            </p>
            
            <Link 
              href="/services" 
              className="group inline-flex items-center space-x-3 text-cyan-600 font-medium tracking-wide pb-2 border-b-2 border-transparent hover:border-cyan-600 transition-colors"
            >
              <span className="text-xl leading-none transform group-hover:translate-x-1 group-hover:translate-y-1 transition-transform">↘</span>
              <span>Explore our Design Build approach</span>
            </Link>
          </div>
          
        </div>

      </div>
    </section>
  );
}
