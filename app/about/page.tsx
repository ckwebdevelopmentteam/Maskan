"use client";

import React from "react";
import NavBar from "@/components/Client/NavBar";
import Footer from "@/sections/Footer/Server";
import { motion } from "motion/react";
import { Shield, Clock, Award, Zap, Users, CheckCircle, Briefcase } from "lucide-react";
import Image from "next/image";
import BannerImage from "@/public/property-3.jpg";
import Team1 from "@/public/property-1.jpg";
import Team2 from "@/public/property-2.jpg";
import Team3 from "@/public/property-4.jpg";

export default function AboutPage() {
  const coreValues = [
    { name: "Integrity", desc: "Absolute transparency in budgeting, material specification, and billing. Zero hidden margins.", icon: Shield },
    { name: "Time-boundedness", desc: "Strict commitment to milestone dates. We deploy rapid framing structures to ensure early delivery.", icon: Clock },
    { name: "Quality", desc: "Uncompromising engineering standards, testing every concrete batch and using premium structural materials.", icon: Award },
    { name: "Efficiency", desc: "Optimizing supply-chains and construction methodologies to minimize resource waste and pass savings to clients.", icon: Zap },
  ];

  const team = [
    { name: "Yashwant Ostwal", role: "Principal Executive Officer", desc: "Over 20 years of real estate development and luxury structural construction advisory across Pakistan.", img: Team1 },
    { name: "Engr. Tariq Mahmood", role: "Director of Civil Engineering", desc: "Specializes in high-rise coastal weatherproofing, seismic calculations, and large-scale structural cast inspections.", img: Team2 },
    { name: "Amara Khan", role: "Chief Architectural Planner", desc: "Award-winning designer focusing on sustainable thermal layouts, smart false ceilings, and premium spatial plans.", img: Team3 },
  ];

  return (
    <main className="bg-[#2B3530] text-[#D1CCBF] min-h-screen overflow-x-hidden">
      <NavBar />
      
      {/* 1. Header Banner */}
      <div className="relative h-[45vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <Image 
          src={BannerImage} 
          alt="maskan-about-banner" 
          fill 
          className="object-cover opacity-30 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2B3530] via-[#2B3530]/40 to-transparent" />
        <div className="relative z-10 text-center space-y-4 px-4 max-w-3xl mt-16">
          <span className="text-white/60 text-xs uppercase tracking-[0.3em] font-bold block">Who We Are</span>
          <h1 className="text-4xl md:text-6xl font-light text-white leading-tight">
            About <span className="font-normal border-b border-white/20 pb-1">Maskan Builders</span>
          </h1>
          <p className="text-sm md:text-base text-white/70 max-w-2xl mx-auto leading-relaxed pt-2">
            A premier Design and Build firm delivering state-of-the-art structural masterworks and turnkey luxury estates with absolute financial predictability.
          </p>
        </div>
      </div>

      {/* 2. Foundations (Vision, Mission, Core Values) */}
      <section className="py-20 md:py-28 px-4 md:px-16 max-w-7xl mx-auto space-y-20 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Vision card */}
          <motion.div 
            className="bg-[#232b27] border border-white/10 p-8 md:p-12 rounded-3xl space-y-6 hover:border-white/25 transition-all duration-300 shadow-xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-[#D1CCBF]/50 text-xs uppercase tracking-widest font-mono">Company Vision</div>
            <h2 className="text-2xl md:text-3xl font-light text-white leading-tight">
              To be the <span className="font-normal">"First-choice"</span> for clients seeking capital reach and efficiency in the "Design and Build" sector.
            </h2>
          </motion.div>

          {/* Mission card */}
          <motion.div 
            className="bg-[#232b27] border border-white/10 p-8 md:p-12 rounded-3xl space-y-6 hover:border-white/25 transition-all duration-300 shadow-xl"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-[#D1CCBF]/50 text-xs uppercase tracking-widest font-mono">Company Mission</div>
            <h2 className="text-2xl md:text-3xl font-light text-white leading-tight">
              Delivering <span className="font-normal">inclusive capital reach</span> to commercial and institutional clients through unique payment timelines.
            </h2>
          </motion.div>
        </div>

        {/* Core Values grid */}
        <div className="space-y-12 pt-8">
          <div className="text-center space-y-3">
            <span className="text-xs uppercase tracking-widest text-white/50 font-bold block">Our Pillars</span>
            <h3 className="text-2xl md:text-4xl font-light text-white">Core Architectural Values</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, idx) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.name}
                  className="bg-[#232b27]/40 border border-white/5 hover:border-white/20 p-8 rounded-2xl space-y-4 transition-all duration-300 group shadow-md"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="bg-white/5 p-3 rounded-lg border border-white/10 text-white/80 group-hover:bg-white group-hover:text-black w-fit transition-all duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-semibold tracking-wider uppercase text-white">{value.name}</h4>
                  <p className="text-xs text-white/60 leading-relaxed font-light">{value.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Experience Metrics */}
      <section className="bg-[#232b27] py-20 md:py-28 px-4 md:px-16 border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-3">
            <span className="text-xs uppercase tracking-widest text-white/50 font-bold block">Documented Milestone Metrics</span>
            <h3 className="text-2xl md:text-4xl font-light text-white">Proven Construction Experience</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-[#2B3530] border border-white/10 p-10 rounded-2xl text-center space-y-3 hover:border-white/30 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/5 p-4 rounded-full w-fit mx-auto border border-white/10 text-white">
                <Briefcase className="w-6 h-6" />
              </div>
              <span className="text-4xl md:text-5xl font-mono font-bold text-white block">750,000+</span>
              <span className="text-xs uppercase tracking-wider text-white/50 leading-tight block">Square Feet Constructed</span>
              <p className="text-xs text-white/40 leading-relaxed font-light pt-2">
                Delivering monolithic commercial structures, office plazas, structural foundations, and VIP residential resort estates.
              </p>
            </motion.div>

            <motion.div 
              className="bg-[#2B3530] border border-white/10 p-10 rounded-2xl text-center space-y-3 hover:border-white/30 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <div className="bg-white/5 p-4 rounded-full w-fit mx-auto border border-white/10 text-white">
                <CheckCircle className="w-6 h-6" />
              </div>
              <span className="text-4xl md:text-5xl font-mono font-bold text-white block">7,000+</span>
              <span className="text-xs uppercase tracking-wider text-white/50 leading-tight block">Finished Custom Designs</span>
              <p className="text-xs text-white/40 leading-relaxed font-light pt-2">
                Turnkey architectural master-plans, highly custom floor layouts, false ceilings, electrical plans, and detailed interior elevations.
              </p>
            </motion.div>

            <motion.div 
              className="bg-[#2B3530] border border-white/10 p-10 rounded-2xl text-center space-y-3 hover:border-white/30 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-white/5 p-4 rounded-full w-fit mx-auto border border-white/10 text-white">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-4xl md:text-5xl font-mono font-bold text-white block">1,700+</span>
              <span className="text-xs uppercase tracking-wider text-white/50 leading-tight block">Expert Staff Members</span>
              <p className="text-xs text-white/40 leading-relaxed font-light pt-2">
                A highly-organized division of civil engineers, planning consultants, site supervisors, master carpenters, and steel-fixers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Team Details */}
      <section className="py-20 md:py-28 px-4 md:px-16 max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-3">
          <span className="text-xs uppercase tracking-widest text-white/50 font-bold block">Advisory Board &amp; Leadership</span>
          <h3 className="text-2xl md:text-4xl font-light text-white">Executive Engineering Team</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <motion.div 
              key={member.name}
              className="bg-[#232b27] border border-white/10 rounded-2xl overflow-hidden shadow-lg group hover:border-white/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <div className="relative h-[300px] w-full overflow-hidden">
                <Image 
                  src={member.img} 
                  alt={member.name} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#232b27] via-transparent to-transparent opacity-90" />
              </div>
              <div className="p-8 space-y-3">
                <div className="space-y-1">
                  <h4 className="text-lg font-semibold tracking-wider text-white uppercase">{member.name}</h4>
                  <span className="text-xs text-white/50 block font-medium tracking-wide">{member.role}</span>
                </div>
                <p className="text-xs text-white/60 leading-relaxed font-light">{member.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
