"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import SocialLogos from "@/components/SVGComponents/socials";
import Image from "next/image";
import MaskanLogo from "@/public/Maskan Open File/PNG/Maskan-01.png";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--bg-primary)] px-4 py-20">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl w-full text-center space-y-10"
      >
        <div className="flex justify-center mb-8 h-20 md:h-28 relative overflow-hidden">
          <Image 
            src={MaskanLogo} 
            alt="Maskan Logo" 
            className="absolute inset-0 w-full h-full object-contain brightness-0 scale-[2.5] md:scale-[3] origin-center" 
          />
        </div>
        
        <h1 className="text-[2.5rem] md:text-5xl font-light text-[var(--fg-primary)] leading-tight tracking-tight mb-6">
          Thank you for reaching out!
        </h1>
        
        <p className="text-[var(--fg-primary)]/70 text-base md:text-lg leading-relaxed max-w-lg mx-auto">
          We have successfully received your enquiry. Our expert team will get back to you shortly to discuss how we can bring your vision to life.
        </p>
        
        <div className="flex justify-center items-center gap-8 mt-16 pb-8">
          {SocialLogos.map((social) => (
            <a
              key={social.key}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--fg-primary)]/70 hover:text-[var(--accent)] hover:scale-110 transition-all duration-300 flex items-center justify-center"
              aria-label={social.key}
            >
              {React.cloneElement(social.logo as React.ReactElement<{width: number, height: number}>, { width: 32, height: 32 })}
            </a>
          ))}
        </div>

        <div className="pt-8 border-t border-[var(--fg-primary)]/10">
          <Link 
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 bg-[var(--accent)] text-[var(--bg-primary)] text-sm uppercase tracking-widest font-semibold rounded-full hover:opacity-90 transition-all duration-300 shadow-lg"
          >
            Back to Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
