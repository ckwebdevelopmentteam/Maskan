"use client";
import {
  motion,
  MotionValue,
  useMotionTemplate,
  useTransform,
} from "motion/react";
import { ReactNode } from "react";

interface CardImageProps {
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
  children: ReactNode;
}
export default function ClipImageContainer({
  index,
  total,
  scrollYProgress,
  children,
}: CardImageProps) {
  const segment = 1 / total;
  const bottom = useTransform(
    scrollYProgress,
    (latest) => {
      if (index === total - 1) return "0%";

      const start = index * segment;
      const end = start + segment;
      const progress = Math.min(Math.max((latest - start) / (end - start), 0), 1);
      return `${progress * 100}%`;
    },
  );
  const scale = useTransform(
    scrollYProgress,
    [(index - 1) * segment, index * segment + segment],
    [1, 1.05],
  );
  const clipPath = useMotionTemplate`inset(0px 0px ${bottom} 0px)`;
  return (
    <motion.div
      className="absolute inset-0"
      style={{ clipPath, zIndex: -index, scale }}
    >
      {children}
    </motion.div>
  );
}
