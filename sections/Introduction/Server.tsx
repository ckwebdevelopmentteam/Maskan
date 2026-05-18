import { Fragment } from "react";
import ResponsiveMaskText from "@/components/Client/ResponsiveMaskTextVariant";
import MaskText from "@/components/Server/MaskText";
import SectionTitle from "@/components/Server/SectionTitle";
import IntroductionImage from "@/public/Maskan 01_page-0023.jpg";
import * as motion from "motion/react-client";
import Image from "next/image";
import ResponsiveImage from "@/components/Client/ResponsiveImage";
import PaymentCalculator from "@/components/Client/PaymentCalculator";

export default function IntroductionServer() {
  return (
    <div id="about" className="flex flex-col gap-y-12 bg-[#2B3530] px-3-75 pt-20 pb-24 text-[#D1CCBF] md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-0 md:px-15 md:pt-24 md:pb-36 border-b border-white/5">
      <motion.div className="mb-2 md:mb-0 w-full h-full">
        <ResponsiveImage parallaxAmount={8}>
          <Image
            src={IntroductionImage}
            alt="maskan-about-image"
            className="w-full h-full object-cover max-md:aspect-[1.18] md:aspect-[1.1] rounded-3xl border border-white/10"
          />
        </ResponsiveImage>
      </motion.div>

      <div className="flex flex-col gap-8 md:gap-12 justify-center text-center md:text-left items-center md:items-start px-4 md:px-0">
        <SectionTitle titleClassName="text-xl md:text-3xl font-normal tracking-[0.2em]">
          About Maskan
        </SectionTitle>

        <motion.div
          className="flex flex-col gap-6 items-center md:items-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-[#D1CCBF] leading-tight text-center md:text-left">
            Building Smarter, <br className="hidden md:block" /> More Efficient Spaces
          </h2>

          <p className="text-white/80 text-base md:text-lg leading-relaxed font-normal text-center md:text-left">
            At Maskan, we believe in delivering unprecedented capital reach and efficiency to the Design and Build sector. Our vision is to serve as the definitive first-choice partner for commercial and institutional clients seeking smart, sustainable, and highly optimized spaces through unique payment timelines that relieve the upfront capital demands of traditional construction.
          </p>

          <p className="text-white/80 text-base md:text-lg leading-relaxed font-normal text-center md:text-left">
            Guided by a strict commitment to absolute integrity, time-boundedness, uncompromising quality, and extreme efficiency, we convert complex architectural investments into exceptionally organized, stress-free journeys from the first blueprint to the final handover.
          </p>

          <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8 my-2 w-full justify-items-center md:justify-items-start">
            <div className="flex flex-col gap-1 items-center md:items-start">
              <span className="text-2xl md:text-3xl font-light text-white">750K+</span>
              <span className="text-2xs uppercase tracking-wider text-white/50 leading-tight">Sq. Ft. Built</span>
            </div>
            <div className="flex flex-col gap-1 items-center md:items-start">
              <span className="text-2xl md:text-3xl font-light text-white">7,000+</span>
              <span className="text-2xs uppercase tracking-wider text-white/50 leading-tight">Designs Delivered</span>
            </div>
            <div className="flex flex-col gap-1 items-center md:items-start">
              <span className="text-2xl md:text-3xl font-light text-white">1,700+</span>
              <span className="text-2xs uppercase tracking-wider text-white/50 leading-tight">Expert Staff</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
