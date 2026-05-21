"use client";
import React, { useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Image1 from "@/public/F1.avif";
import Image2 from "@/public/F2.avif";
import Image3 from "@/public/F3.webp";
import Image4 from "@/public/F4.avif";
import {
  motion,
  MotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useDispatch } from "react-redux";
import { setNavOpacity } from "@/store";
import ClipImageCard from "./ClipImageCard";
import useMaskImage from "@/hooks/useMaskImage";
import CustomCursor from "./Cursor";
import { useCursor } from "@/hooks/useCursor";
import NavigateSVG from "@/components/SVGComponents/NavigateSVG";
import { useRouter } from "next/navigation";
import { cubicBezier } from "motion";
import { useIsMobile } from "@/app/providers";

function Innovation() {
  const isMobile = useIsMobile();
  const router = useRouter();
  const [state, setState] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { handlers, cursorProps } = useCursor();

  const dispatch = useDispatch();
  const { scrollYProgress: parentProgress } = useScroll({
    target: ref,
    offset: ["15vh 0", "385vh end"],
  });
  const imgs = [Image1, Image2, Image3, Image4];
  useMotionValueEvent(parentProgress, "change", (latest) => {
    if (latest > 0 && latest < 1) {
      dispatch(setNavOpacity(0));
    } else {
      dispatch(setNavOpacity(1));
    }
    
    setState(Math.min(Math.floor(latest * imgs.length), imgs.length - 1));
  });
  return (
    <div
      id="gallery"
      className="relative h-[400vh] cursor-pointer overflow-clip bg-[var(--bg-primary)] border-t border-[var(--border-white-5)]"
      ref={ref}
    >
      <motion.div
        {...handlers}
        onClick={() => router.replace("https://maskan.pk/projects")}
        className="sticky -top-[5vh] h-[110vh] md:-top-[15vh] md:h-[130vh]"
      >
        <ClipImageCard
          scrollYProgress={parentProgress}
          images={imgs}
          className="relative z-10"
        />
        {Array.from({ length: 2 }, (_, i) => state + i)
          .filter((elementIndex) => elementIndex < imgs.length)
          .map((validElementIndex, i) => {
            return (
              <Innovation.Container
                key={"Innovation.Container-" + (i + 1)}
                isMobile={isMobile}
                scrollYProgress={parentProgress}
                index={validElementIndex}
                total={imgs.length}
              >
                {imgs[validElementIndex]}
              </Innovation.Container>
            );
          })}
      </motion.div>
      {isMobile === false && (
        <CustomCursor
          {...cursorProps}
          className="hidden md:flex -translate-x-1/2 translate-y-1/4 items-center justify-center gap-2 rounded-full px-5 py-2 text-[var(--text-white)]"
        >
          View Projects
          <NavigateSVG style={{ fill: "white" }} className="size-2.5" />
        </CustomCursor>
      )}
    </div>
  );
}

Innovation.Container = function Container({
  scrollYProgress,
  index,
  children,
  isMobile,
  total,
}: {
  scrollYProgress: MotionValue<number>;
  index: number;
  children: StaticImageData;
  isMobile: boolean | null;
  total: number;
}) {
  const segment = 1 / total;
  const localScrollYProgress = useTransform(
    scrollYProgress,
    (latest) => {
      if (index === total - 1) return 0;

      const start = index * segment;
      const end = (index + 1) * segment;
      const progress = Math.min(Math.max((latest - start) / (end - start), 0), 1);
      return cubicBezier(0, 0, 1, 1)(progress);
    },
  );
  const maskImage = useMaskImage(localScrollYProgress, isMobile);
  const scaleProgress = useTransform(
    scrollYProgress,
    [(index - 1) * segment, (index + 1) * segment],
    [1.075, 1],
  );
  return (
    <motion.div
      className="absolute inset-0 grid place-items-center text-[var(--text-white)]"
      style={{ zIndex: -index, maskImage, scale: scaleProgress }}
    >
      <Image
        src={children}
        alt={`image-${index + 1}`}
        className="h-full w-full origin-bottom object-cover"
      />
    </motion.div>
  );
};
export default Innovation;
