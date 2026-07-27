import * as motion from "motion/react-client";
import { MotionProps, MotionStyle, Transition } from "motion/react";
import React from "react";
import cn from "@/utils/cn";

interface MaskTextProps extends MotionProps {
  lines: React.ReactNode[];
  className?: string;
  style?: MotionStyle;
  transition?: Transition;
}

export default function MaskText({
  lines,
  className,
  style,
  ...AnimationProps
}: MaskTextProps) {
  const containerVariants = {
    inView: {
      transition: {
        staggerChildren: 0.1,
        ...AnimationProps.transition,
      },
    },
  };
  const variants = {
    initial: { opacity: 0, y: 15 },
    inView: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.24, 0.43, 0.15, 0.97] as const,
        duration: 0.6,
      },
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="inView"
      whileInView="inView"
      variants={containerVariants}
      viewport={{ once: true, amount: 0.05 }}
      style={{ ...style }}
      className={cn("", className)}
    >
      {lines.map((eachLine, index) => (
        <motion.div key={index + 1} variants={variants}>
          {eachLine}
        </motion.div>
      ))}
    </motion.div>
  );
}
