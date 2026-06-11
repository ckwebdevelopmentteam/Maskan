"use client";

import React from "react";
import MaskText from "@/components/Server/MaskText";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import MaskanLogo from "@/public/Maskan Open File/PNG/Maskan-01.png";

export default function HeroServer() {
  return (
    <section className="relative flex h-screen min-h-[640px] flex-col justify-end overflow-hidden pt-0 px-5 pb-12 text-white md:pt-0 md:px-20 md:pb-20">


      {/* Big Maskan Logo branding at the top-left of the screen */}

      <div className="relative z-10 mx-auto grid w-full max-w-[1360px] gap-8 md:grid-cols-[1.45fr_0.95fr] md:items-end">
        <div>
          <MaskText
            transition={{ delayChildren: 0.15 }}
            className="mb-5"
            lines={[
              <div
                key="label"
                className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-white/90 md:text-sm"
              >
                <span className="h-2 w-2 bg-white" />
                Best construction company in Kerala
              </div>,
            ]}
          />
          <MaskText
            transition={{ delayChildren: 0.3 }}
            className="max-w-4xl text-[3.5rem] font-light leading-[0.98] tracking-[-0.02em] md:text-6xl lg:text-[4.5rem] xl:text-[5.6rem]"
            lines={[
              <>Building Dreams, One</>,
              <>Brick at a Time</>,
            ]}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 md:mt-12"
          >
            <Link
              href="#contact"
              className="inline-flex items-center gap-3 bg-transparent border-3 border-white/77 text-white px-8 py-4 rounded-full text-sm md:text-base font-bold hover:bg-[#153a54] transition-all hover:scale-105 shadow-lg"
            >
              Contact Us
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </Link>
          </motion.div>
        </div>

        <div className="grid max-w-xl grid-cols-2 border border-white/25 bg-black/20 backdrop-blur-md md:justify-self-end">
          <div className="flex min-h-[120px] flex-col items-center justify-center border-r border-white/20 px-6 text-center">
            <span className="text-4xl font-light leading-none md:text-5xl">
              08+
            </span>
            <span className="mt-3 text-xs font-semibold text-white/85 md:text-sm">
              Years of experience
            </span>
          </div>
          <div className="flex min-h-[120px] flex-col items-center justify-center px-6 text-center">
            <span className="text-4xl font-light leading-none md:text-5xl">
              25+
            </span>
            <span className="mt-3 text-xs font-semibold text-white/85 md:text-sm">
              Completed projects
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
