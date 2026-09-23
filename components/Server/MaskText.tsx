import * as motion from "motion/react-client";
import { MotionProps, MotionStyle, Transition } from "motion/react";
import React from "react";
import cn from "@/utils/cn";

interface MaskTextProps extends MotionProps {
  lines: React.ReactNode[];
  className?: string;
  style?: MotionStyle;
  transition?: Transition;
  as?: "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

export default function MaskText({
  lines,
  className,
  style,
  as: Tag = "div",
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MotionTag = motion[Tag] as React.ComponentType<any>;
  const MotionChild = (Tag.startsWith("h") || Tag === "p" || Tag === "span") ? motion.span : motion.div;

  return (
    <MotionTag
      initial="initial"
      animate="inView"
      whileInView="inView"
      variants={containerVariants}
      viewport={{ once: true, amount: 0.05 }}
      style={{ ...style }}
      className={cn("", className)}
    >
      {lines.map((eachLine, index) => (
        <MotionChild key={index + 1} variants={variants} className={MotionChild === motion.span ? "inline-block" : ""}>
          {eachLine}
        </MotionChild>
      ))}
    </MotionTag>
  );
}
