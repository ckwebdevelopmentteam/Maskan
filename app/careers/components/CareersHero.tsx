"use client";

import React from "react";
import { motion } from "motion/react";

export default function CareersHero() {
  return (
    <section className="w-full bg-white pt-32 pb-16">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1"
          >
            <h1 className="text-5xl md:text-[50px] lg:text-[70px] xl:text-[100px] font-normal text-black leading-[1.1] tracking-tight uppercase">
              Open <br /> Positions
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex-1 max-w-lg"
          >
            <p className="text-base md:text-lg text-black/70 leading-relaxed font-light">
              We are a small team of artists, engineers, researchers, and dreamers working together to reimagine creativity. Come join Us!
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
