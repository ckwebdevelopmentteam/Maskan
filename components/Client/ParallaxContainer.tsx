"use client";
import React, { CSSProperties, ReactNode, useRef } from "react";
import { useScroll, useTransform, motion } from "motion/react";
import cn from "@/utils/cn";

export default function ParallaxContainer({
  style,
  children,
  className,
  parallaxAmount,
  containerClassName,
}: {
  style?: CSSProperties;
  children: ReactNode;
  className?: string;
  parallaxAmount: number;
  containerClassName?: string;
}) {
  const imageContainer = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageContainer,
    offset: ["start end", "end start"],
  });
  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [
      `translateY(-${parallaxAmount}%) scale(${1 + parallaxAmount / 50})`,
      `translateY(${parallaxAmount}%) scale(${1 + parallaxAmount / 50})`,
    ],
  );
  return (
    <motion.div className={cn("overflow-hidden w-full h-full", containerClassName)} ref={imageContainer}>
      <motion.div
        style={{
          transform,
          ...style,
        }}
        className={cn("w-full h-full origin-center", className)}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
