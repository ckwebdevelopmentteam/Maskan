"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useIsMobile } from "@/app/providers";
import Img1 from "@/public/property-1.jpg";
import Img2 from "@/public/property-2.jpg";
import Img3 from "@/public/property-3.jpg";
import Img4 from "@/public/property-4.jpg";
import Img5 from "@/public/why_choose_us_sofa.png";
import Img6 from "@/public/F1.avif";

// Re-import avatars from original design
import Team1 from "@/public/F1.avif";
import Team2 from "@/public/property-2.jpg";
import Team3 from "@/public/property-4.jpg";

// We need 8 images for each octagon. Reusing imported ones to fill the 8 slots.
const gallery1 = [Img1, Img2, Img3, Img4, Img5, Img6, Img1, Img2];
const gallery2 = [Img4, Img5, Img6, Img1, Img2, Img3, Img4, Img5];

export default function WhyChooseUs() {
  const isMobile = useIsMobile();
  return (
    <section 
      id="why-choose-us" 
      className="py-12 md:py-24 xl:py-32 overflow-hidden bg-white border-b border-gray-200 px-4 md:px-10"
    >
      <style>{`
        #why-choose-us {
          --radius: 380px;
        }
        @media (min-width: 768px) {
          #why-choose-us {
            --radius: 400px;
          }
        }
        @media (min-width: 1024px) {
          #why-choose-us {
            --radius: 420px;
          }
        }
        @media (min-width: 1440px) {
          #why-choose-us {
            --radius: 550px;
          }
        }
      `}</style>
      <div className="max-w-[1440px] mx-auto space-y-16 lg:space-y-24 xl:space-y-48">
        
        {/* ==============================
            GRID 1: Top-Right Carousel & Main Title
            ============================== */}
        <div className="flex flex-col lg:flex-row items-center justify-between relative">
          
          {/* Left: Original Main Title */}
          <div className="lg:w-1/2 z-10 relative w-full space-y-5 text-center md:text-left flex flex-col items-center md:items-start">
            <h2 className="text-[40px] md:text-[48px] lg:text-[56px] xl:text-[72px] font-light text-[#333333] leading-[1.1] tracking-tight">
              <span className="font-semibold text-[#1F5071]">Why Choose</span><br />
              <span className="text-[#4A5568]">Maskan?</span>
            </h2>
            
            <p className="text-gray-500 text-base lg:text-lg font-light leading-relaxed max-w-xl pb-2">
              For decades, we have set the standard in premium architectural and construction services by combining visionary design with flawless execution.
            </p>

            <ul className="space-y-6 max-w-xl mt-4 text-left">
              <li className="flex items-start space-x-4">
                <span className="text-[#1F5071] mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </span>
                <div>
                  <strong className="block text-gray-800 font-medium text-lg mb-1">Uncompromising Quality</strong>
                  <span className="text-gray-500 font-light text-base md:text-lg leading-relaxed block">We source premium materials and employ master craftsmen to ensure lasting value and durability.</span>
                </div>
              </li>
              
              <li className="flex items-start space-x-4">
                <span className="text-[#1F5071] mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </span>
                <div>
                  <strong className="block text-gray-800 font-medium text-lg mb-1">Client-Centric Collaboration</strong>
                  <span className="text-gray-500 font-light text-base md:text-lg leading-relaxed block">Your vision is our blueprint. We guarantee 100% transparency from initial concept to final handover.</span>
                </div>
              </li>

              <li className="flex items-start space-x-4">
                <span className="text-[#1F5071] mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </span>
                <div>
                  <strong className="block text-gray-800 font-medium text-lg mb-1">On-Time & On-Budget</strong>
                  <span className="text-gray-500 font-light text-base md:text-lg leading-relaxed block">Streamlined workflows and rigorous project management ensure we consistently meet critical deadlines.</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Right: 3D Octagon Carousel 1 (Hidden on mobile to prevent layout breaking) */}
          <div 
            className="lg:w-1/2 relative h-[400px] md:h-[600px] w-full hidden md:flex items-center justify-end mt-16 lg:mt-0" 
            style={{ perspective: '1500px' }}
          >
            {/* Bleeds off the right edge */}
            <div className="translate-x-[20%] xl:translate-x-[35%]">
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
                          transform: `rotateY(${angle}deg) translateZ(var(--radius))`,
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
            GRID 2: Bottom-Left Carousel & Original Content
            ============================== */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between relative mt-24">
          
          {/* Left: 3D Octagon Carousel 2 */}
          <div 
            className="lg:w-1/2 relative h-[250px] md:h-[600px] w-full flex items-center justify-center md:justify-start mt-8 md:mt-16 lg:mt-0 overflow-hidden md:overflow-visible" 
            style={{ perspective: '1500px' }}
          >
            {/* Bleeds off the left edge only on desktop */}
            <div className="md:-translate-x-[20%] xl:-translate-x-[35%] scale-75 md:scale-100">
              <div 
                className="relative w-[300px] md:w-[450px] h-[200px] md:h-[300px]" 
                style={{ 
                  transformStyle: 'preserve-3d', 
                  transform: isMobile ? 'rotateY(0deg)' : 'rotateZ(-22deg) rotateX(-12deg) rotateY(15deg)',
                }}
              >
                <motion.div
                  className="w-full h-full absolute top-0 left-0"
                  style={{ transformStyle: 'preserve-3d' }}
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
                          transform: `rotateY(${angle}deg) translateZ(var(--radius))`,
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

          {/* Right: Original Statistics & Content */}
          <div className="lg:w-1/2 z-10 relative lg:pr-12 w-full flex flex-col justify-center items-center md:items-start lg:pl-16 space-y-12 text-center md:text-left mt-16 md:mt-0">
            
            {/* Stats Grid from original WhyChooseUs */}
            <div className="grid grid-cols-2 gap-6 sm:gap-8 w-full place-items-center md:place-items-start">
              
              {/* Selected Designers */}
              <div className="space-y-3">
                <div className="flex items-baseline justify-center md:justify-start space-x-2">
                  <span className="text-4xl md:text-5xl font-light text-[#1F5071] font-mono leading-none">25+</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Selected designers</h3>
                  <p className="text-sm text-gray-500 font-light mt-1">Every project is led by experienced interior designers.</p>
                </div>
              </div>

              {/* Happy Clients */}
              <div className="space-y-3">
                <div className="flex items-center justify-center md:justify-start space-x-[-12px] h-[48px]">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-md z-[3]">
                    <Image src={Team1} alt="Client 1" fill className="object-cover" />
                  </div>
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-md z-[2]">
                    <Image src={Team2} alt="Client 2" fill className="object-cover" />
                  </div>
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-md z-[1]">
                    <Image src={Team3} alt="Client 3" fill className="object-cover" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">2K+ happy clients</h3>
                  <p className="text-sm text-gray-500 font-light mt-1">Delivering excellence and building trust worldwide.</p>
                </div>
              </div>

              {/* Satisfaction */}
              <div className="space-y-3">
                <div className="flex items-baseline justify-center md:justify-start space-x-2">
                  <span className="text-4xl md:text-5xl font-light text-[#1F5071] font-mono leading-none">95%</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Satisfaction rate</h3>
                  <p className="text-sm text-gray-500 font-light mt-1">Clear workflows ensure the best design outcomes.</p>
                </div>
              </div>

              {/* Reliable Delivery */}
              <div className="space-y-3">
                <div className="flex items-baseline justify-center md:justify-start space-x-2">
                  <span className="text-4xl md:text-5xl font-light text-[#1F5071] font-mono leading-none">100%</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Reliable delivery</h3>
                  <p className="text-sm text-gray-500 font-light mt-1">Timelines, budgets, and expectations clearly defined.</p>
                </div>
              </div>

            </div>

          </div>
          
        </div>

      </div>
    </section>
  );
}
