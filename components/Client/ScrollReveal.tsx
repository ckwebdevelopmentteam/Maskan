"use client";
import React from "react";
import { motion, MotionProps } from "motion/react";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
} & MotionProps;

export default function ScrollReveal({ children, className = "", ...motionProps }: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.6, ease: [0.24, 0.43, 0.15, 0.97] }}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
