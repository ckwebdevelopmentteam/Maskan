"use client";

import React from "react";
import { motion } from "motion/react";

export default function CareersHero() {
  return (
    <section className="w-full bg-[var(--bg-primary)] pt-32 pb-16">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1"
          >
            <h1 className="text-5xl md:text-[50px] lg:text-[70px] xl:text-[100px] font-normal text-[var(--fg-primary)] leading-[1.1] tracking-tight uppercase">
              Open <br /> Positions
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex-1 max-w-lg"
          >
            <p className="text-base md:text-lg text-[var(--fg-primary)]/70 leading-relaxed font-light mb-8">
              We are a dedicated team of architects, interior designers, engineers, and project managers working together to build premium environments. Come join Us!
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('job-listings');
                if (element) {
                  const y = element.getBoundingClientRect().top + window.scrollY - 100;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                } else {
                  window.scrollBy({ top: window.innerHeight * 0.6, behavior: 'smooth' });
                }
              }}
              className="bg-[var(--accent)] text-[var(--bg-primary)] px-8 py-4 rounded-full font-medium text-sm tracking-wide uppercase hover:opacity-80 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore Roles
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
