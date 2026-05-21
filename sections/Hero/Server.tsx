"use client";

import React from "react";
import MaskText from "@/components/Server/MaskText";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import MaskanLogo from "@/public/Maskan Open File/PNG/Maskan-01.png";

export default function HeroServer() {
  return (
    <section className="relative flex h-[82vh] min-h-[640px] flex-col justify-end overflow-hidden pt-0 px-5 pb-12 text-white md:pt-0 md:px-20 md:pb-20">
      <div className="absolute inset-0 bg-black/42" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.58)_0%,rgba(0,0,0,0.34)_48%,rgba(0,0,0,0.62)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/55 to-transparent" />

      {/* Big Maskan Logo branding at the top-left of the screen */}
      <motion.div
        initial={{ opacity: 0, x: -25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: [0.24, 0.43, 0.15, 0.97], delay: 0.15 }}
        className="absolute top-0 left-0 p-0 z-20"
      >
        <Link href="/" className="cursor-pointer block">
          <Image
            src={MaskanLogo}
            alt="Maskan Logo"
            className="h-48 md:h-80 w-auto object-contain brightness-0 invert transition-all duration-300 hover:opacity-85"
            priority
          />
        </Link>
      </motion.div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1360px] gap-8 md:grid-cols-[1.45fr_0.95fr] md:items-end">
        <div>
          <MaskText

            className="mb-5"
            lines={[
              <div
                key="label"
                className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.14em] text-white/90 md:text-xs"
              >
                <span className="h-2 w-2 bg-white" />
                Best construction company in Kerala
              </div>,
            ]}
          />
          <MaskText

            className="max-w-4xl text-5xl font-light leading-[0.98] tracking-[-0.02em] md:text-7xl lg:text-[5.6rem]"
            lines={[
              <>Building Dreams, One</>,
              <>Brick at a Time</>,
            ]}
          />
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
