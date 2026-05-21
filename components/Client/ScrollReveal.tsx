"use client";
import React from "react";
import { motion, MotionProps } from "framer-motion";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
} & MotionProps;

export default function ScrollReveal({ children, className = "", ...motionProps }: ScrollRevealProps) {
  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.24, 0.43, 0.15, 0.97] }}
      variants={variants}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
