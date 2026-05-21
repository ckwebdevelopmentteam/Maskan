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
    initial: { y: "100%", clipPath: "inset(0% 0% 100% 0%)" },
    inView: {
      y: "0%",
      clipPath: "inset(0% 0% 0% 0%)",
      transition: {
        ease: [0.76, 0, 0.24, 1] as const,
        duration: 0.8,
      },
    },
  };
  return (
    <motion.div
      initial="initial"
      whileInView="inView"
      variants={containerVariants}
      viewport={{ once: true }}
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
