"use client";

import { Dispatch, SetStateAction } from "react";
import { motion } from "motion/react";
import Image, { StaticImageData } from "next/image";
import CustomLink from "@/components/Server/CustomLink";
import DashedLink from "@/components/Server/DashedLink";
import CloseIcon from "@/components/SVGComponents/CloseIcon";
import Home from "@/public/SideBar/home.png";
import Destinations from "@/public/SideBar/destination.png";
import Wellness from "@/public/SideBar/wellness.png";
import TheStory from "@/public/SideBar/the-story.png";
import NewDevelopments from "@/public/SideBar/new-developments.png";
import { useImageReveal } from "@/hooks/useImageReveal";
import StayConnected from "@/components/Server/StayConnected";
import Link from "next/link";

interface LinkItem {
  href: string;
  link: string;
  src: StaticImageData;
}

interface SideBarProps {
  setOpenSideBar: Dispatch<SetStateAction<boolean>>;
}
export default function SideBar({ setOpenSideBar }: SideBarProps) {
  const { imgContainerRef, handleFocus } = useImageReveal();
  const data: LinkItem[] = [
    { href: "/", link: "Home", src: Home },
    { href: "/about", link: "About Us", src: TheStory },
    { href: "/services", link: "Services", src: Wellness },
    { href: "/projects", link: "Projects / Portfolio", src: Destinations },
    { href: "/#contact", link: "Contact Us", src: NewDevelopments },
  ];

  const temp = {
    initialDelay: 0.8 * 0.4,
    delay: 0.05,
    duration: 0.5,
  };

  const variants = {
    initial: {
      y: "60%",
      opacity: 0,
    },
    animate: {
      y: "0%",
      opacity: 1,
    },
  };
  return (
    <motion.div
      key="Side-bar"
      initial={{ backgroundColor: "rgba(0,0,0,0)" }}
      animate={{
        backgroundColor: "rgba(0,0,0,0.35)",
        transition: {
          duration: 0.8,
          ease: [0.24, 0.43, 0.15, 0.97],
        },
      }}
      exit={{
        clipPath: "inset(0% 0% 100% 0%)",
        transition: {
          delay: 0.1,
          duration: 0.8,
          ease: [0.24, 0.43, 0.15, 0.97],
        },
      }}
      className="fixed top-0 z-[200] w-full"
    >
      <motion.div
        className="flex h-screen bg-[#CED1BF]"
        initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
        animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
        transition={{
          duration: 0.8,
          ease: [0.24, 0.43, 0.15, 0.97],
        }}
      >
        <motion.div
          initial={{
            clipPath: "inset(100% 0% 0% 0%)",
          }}
          animate={{
            clipPath: "inset(0% 0% 0% 0%)",
            transition: {
              delay: 0.1,
              ease: [0.24, 0.43, 0.15, 0.97],
              duration: 0.8,
            },
          }}
          exit={{
            clipPath: "inset(0% 0% 100% 0%)",
            transition: {
              ease: [0.24, 0.43, 0.15, 0.97],
              duration: 0.8,
            },
          }}
          className="relative flex-[0.9]"
          ref={imgContainerRef}
        >
          {data.map(({ src, link }, i) => (
            <motion.div
              key={link}
              data-index={i}
              style={{ zIndex: -i }}
              className="absolute inset-0"
            >
              <Image src={src} alt={link} fill style={{ objectFit: "cover" }} />
            </motion.div>
          ))}
        </motion.div>
        <div className="flex-1 pt-7000svh pr-16 pb-3500svh pl-48">
          <span className="text-1800svh text-[#2B3530]/80">Discover pages</span>
          <nav
            aria-label="pages"
            className="mt-6400svh mb-8000svh grid grid-flow-col-dense grid-cols-2 grid-rows-3"
          >
            {data.map((eachColData, i) => (
              <CustomLink
                {...temp}
                key={"link-" + (i + 1)}
                href={eachColData.href}
                sNo={i + 1}
                handleFocus={handleFocus}
                onClick={() => setOpenSideBar(false)}
              >
                {eachColData.link}
              </CustomLink>
            ))}
          </nav>
          <motion.div
            className="space-y-5600svh"
            initial="initial"
            animate="animate"
            variants={{
              animate: {
                transition: {
                  delayChildren: temp.initialDelay + 5 * temp.delay,
                  staggerChildren: temp.delay,
                  duration: temp.duration,
                },
              },
            }}
          >
            <motion.div
              variants={variants}
              transition={{
                duration: temp.duration,
                ease: [0.24, 0.43, 0.15, 0.97],
              }}
              id="contact-us"
              className="space-y-2400svh text-1800svh text-[#2B3530]"
            >
              <div className="text-[#2B3530]/80">Contact Us</div>
              <div className="flex items-center [&_.animated-underline]:h-[2px] [&_.animated-underline]:bg-[#2B3530]">
                <DashedLink>info@maskan.pk</DashedLink>
                <div className="mx-5">|</div>
                <DashedLink>+92 51 111 MASKAN</DashedLink>
              </div>
            </motion.div>
            <motion.div
              variants={variants}
              transition={{
                duration: temp.duration,
                ease: [0.24, 0.43, 0.15, 0.97],
              }}
            >
              <StayConnected
                style={{
                  fontSize: "var(--text-1800svh)",
                }}
                className="gap-y-2400svh text-1800svh text-[#2B3530]/80 [&_div]:gap-x-10 [&_svg]:h-2400svh [&_svg]:w-auto [&>:first-child]:text-[#2B3530]/80"
              />
            </motion.div>
            <motion.div
              variants={variants}
              transition={{
                duration: temp.duration,
                ease: [0.24, 0.43, 0.15, 0.97],
              }}
              className="text-1600svh"
            >
              <Link href="/privacy-terms" onClick={() => setOpenSideBar(false)}>
                <DashedLink className="w-fit text-[#2B3530] [&_.animated-underline]:h-[2px] [&_.animated-underline]:bg-[#2B3530]">
                  Policy and Terms
                </DashedLink>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <motion.button
          initial="initial"
          whileHover="whileHover"
          className="absolute top-8 right-16 cursor-pointer"
          onClick={() => setOpenSideBar((prev) => !prev)}
        >
          <CloseIcon className="size-4 [&_path]:[stroke-width:1px]" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
