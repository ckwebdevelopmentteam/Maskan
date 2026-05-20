"use client";
import { motion, MotionValue, useMotionValueEvent } from "motion/react";
import Image, { StaticImageData } from "next/image";
import { CSSProperties, ReactNode, useState } from "react";
import AnimatedMaskText from "@/components/Client/MaskTextClient";
import ClipImageContainer from "@/components/Client/ClipImageContainer";
import SectionTitle from "../Server/SectionTitle";
import cn from "@/utils/cn";
interface ClipImageCardProps {
  scrollYProgress: MotionValue<number>;
  images: StaticImageData[];
  className?: string;
  style?: CSSProperties;
}

interface DataItem {
  title: ReactNode[];
  description: {
    mobile: ReactNode[];
    desktop: ReactNode[];
  };
}

export default function ClipImageCard({
  scrollYProgress,
  images,
  className,
  style,
}: ClipImageCardProps) {
  const [currentState, setCurrentState] = useState(1);
  const data: DataItem[] = [
    {
      title: [<>MERIDIAN HEIGHTS</>, <>Perinthalmanna</>],
      description: {
        mobile: [
          <>An exclusive boutique villa project offering</>,
          <>unparalleled elegance, premium architecture,</>,
          <>and custom-tailored living spaces.</>,
          <>Status: Ongoing</>,
        ],
        desktop: [
          <>An exclusive boutique villa project in Perinthalmanna</>,
          <>offering unparalleled elegance, premium architecture,</>,
          <>and custom-tailored living spaces designed for modern luxury.</>,
          <>Status: Ongoing</>,
        ],
      },
    },
    {
      title: [<>AVORIA HEIGHTS</>, <>Marad</>],
      description: {
        mobile: [
          <>A modern high-rise luxury apartment project</>,
          <>featuring premium structural design, efficient space</>,
          <>utilization, and state-of-the-art amenities.</>,
          <>Status: Ongoing</>,
        ],
        desktop: [
          <>A modern high-rise luxury apartment project in Marad</>,
          <>featuring premium structural design, efficient space</>,
          <>utilization, and state-of-the-art amenities for comfortable urban living.</>,
          <>Status: Ongoing</>,
        ],
      },
    },
    {
      title: [<>WHITE FEELD</>, <>Manjeri</>],
      description: {
        mobile: [
          <>An upscale villa community combining eco-friendly</>,
          <>construction standards, sophisticated design aesthetics,</>,
          <>and ultimate functional efficiency.</>,
          <>Status: Ongoing</>,
        ],
        desktop: [
          <>An upscale villa community in Manjeri combining eco-friendly</>,
          <>construction standards, sophisticated design aesthetics,</>,
          <>and ultimate functional efficiency for discerning families.</>,
          <>Status: Ongoing</>,
        ],
      },
    },
  ];

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.33) {
      setCurrentState(1);
    } else if (latest <= 0.66) {
      setCurrentState(2);
    } else {
      setCurrentState(3);
    }
  });
  const prependZero = (num: number) => (num < 10 ? `0${num}` : `${num}`);

  return (
    <motion.div
      initial="initial"
      whileInView="inView"
      viewport={{ amount: 0.5, once: true }}
      style={{ ...style }}
      className={cn(
        "relative z-10 flex h-full flex-col items-center justify-between py-[8vh] text-[var(--fg-primary)] backdrop-brightness-[60%] md:flex-row md:px-16 md:py-[15vh]",
        className,
      )}
    >
      <SectionTitle className="">Featured Projects</SectionTitle>
      <motion.div
        variants={{
          initial: { y: "50%" },
          inView: { y: "0%" },
        }}
        transition={{
          ease: [0.24, 0.43, 0.15, 0.97],
          duration: 0.8,
        }}
        className="relative z-20 my-[5vh] flex h-[70vh] min-h-fit w-[90%] flex-col items-center gap-8 bg-[var(--fg-primary)] p-5-75 text-[var(--bg-primary)] md:h-full md:max-h-172 md:w-full md:max-w-118 md:px-8 md:py-4"
      >
        <div className="flex items-center gap-1 text-2xs md:text-sm">
          <AnimatedMaskText
            state={currentState}
            lines={[<>{prependZero(currentState)}</>]}
            className="[line-height:1]"
          />
          <span className="opacity-60">-</span>
          <span className="opacity-60">{prependZero(images.length)}</span>
        </div>
        <AnimatedMaskText
          state={currentState}
          lines={data[currentState - 1].title}
          className="-space-y-1 text-center text-lg [line-height:1] font-light md:text-28"
        />

        <div className="relative aspect-[1.62] w-full overflow-hidden md:aspect-[1.85] border border-[var(--bg-primary)]/10 p-1 bg-[var(--bg-white-50)]">
          {images.map((eachImage: StaticImageData, index: number) => (
            <ClipImageContainer
              key={"card-image-container-" + (index + 1)}
              index={index}
              scrollYProgress={scrollYProgress}
            >
              <Image
                src={eachImage}
                alt={"card-image-" + (index + 1)}
                className="size-full object-cover"
              />
            </ClipImageContainer>
          ))}
        </div>
        <AnimatedMaskText
          state={currentState}
          lines={data[currentState - 1].description["desktop"]} //change this
          className="text-center text-sm [line-height:1.25] md:text-base"
        />
      </motion.div>
      <span className="text-base [line-height:1] md:text-xl">
        ( Keep Scrolling ){" "}
      </span>
    </motion.div>
  );
}
