"use client";
import React, { useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Image1 from "@/public/property-1.jpg";
import Image2 from "@/public/property-2.jpg";
import Image3 from "@/public/property-3.jpg";
import Image4 from "@/public/property-4.jpg";
import Image5 from "@/public/property-5.jpg";
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
    offset: ["15vh 0", "285vh end"],
  });
  useMotionValueEvent(parentProgress, "change", (latest) => {
    if (latest > 0 && latest < 1) {
      dispatch(setNavOpacity(0));
    } else {
      dispatch(setNavOpacity(1));
    }
    
    if (latest <= 0.33) {
      setState(0);
    } else if (latest <= 0.66) {
      setState(1);
    } else {
      setState(2);
    }
  });
  const imgs = [Image1, Image2, Image3];
  return (
    <div
      id="gallery"
      className="relative h-[300vh] cursor-pointer overflow-clip bg-[#2B3530] border-t border-white/5"
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
              >
                {imgs[validElementIndex]}
              </Innovation.Container>
            );
          })}
      </motion.div>
      {isMobile === false && (
        <CustomCursor
          {...cursorProps}
          className="flex -translate-x-1/2 translate-y-1/4 items-center justify-center gap-2 rounded-full px-5 py-2 text-white"
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
}: {
  scrollYProgress: MotionValue<number>;
  index: number;
  children: StaticImageData;
  isMobile: boolean | null;
}) {
  const localScrollYProgress = useTransform(
    scrollYProgress,
    [index * 0.5, (index + 1) * 0.5],
    [0, 1],
    {
      ease: cubicBezier(0, 0, 1, 1),
    },
  );
  const maskImage = useMaskImage(localScrollYProgress, isMobile);
  const scaleProgress = useTransform(
    scrollYProgress,
    [(index - 1) * 0.5, (index + 1) * 0.5],
    [1.075, 1],
  );
  return (
    <motion.div
      className="absolute inset-0 grid place-items-center text-white"
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
