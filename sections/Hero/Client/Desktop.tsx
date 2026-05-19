"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import useMaskImage from "@/hooks/useMaskImage";

export default function HeroDesktopClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "50vh start"],
  });
  const maskImage = useMaskImage(scrollYProgress, false, {
    divisions: 24,
    inset: 0.15,
    gap: 0.3,
    vh: 100,
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  return (
    <div className="absolute inset-0 overflow-clip" ref={containerRef}>
      <motion.div style={{ y, maskImage }} className="h-full">
        <video className="size-full object-cover" autoPlay muted loop playsInline>
          <source src="/motion_2.0-fast_behide_the_maskan_logo_and_writing_all_the_content_should_happen_2_male_workers_-0.mp4" type="video/mp4" />
        </video>
      </motion.div>
    </div>
  );
}
