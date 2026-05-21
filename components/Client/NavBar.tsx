"use client";

import { motion, useMotionValueEvent, useScroll, AnimatePresence } from "motion/react";
import Image from "next/image";
import MaskanLogo from "@/public/Maskan Open File/PNG/Maskan-01.png";
import AnimatedBurger from "../SVGComponents/AnimatedBurger";
import { useState } from "react";
import Link from "next/link";

import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { usePathname } from "next/navigation";
import MenuOverlay from "./MenuOverlay";

export default function NavBar() {

  const navOpacity = useSelector((state: RootState) => state.nav?.opacity ?? 1);
  const [openSideBar, setOpenSideBar] = useState(false);
  const [state, setState] = useState(false);
  const [y, setY] = useState("0%");
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const scrollValue = latest / window.innerHeight;
    setState(scrollValue > 0.5);
    if (scrollValue > 0.65) {
      if ((scrollY.getPrevious() as number) < latest) {
        setY("150%"); // hide by sliding down off the bottom of the screen
      } else {
        setY("0%"); // show
      }
    }
  });

  const getActiveLabel = () => {
    if (pathname === "/") return "HOME";
    if (pathname === "/about") return "ABOUT";
    if (pathname === "/services") return "SERVICES";
    if (pathname === "/projects") return "PROJECTS";
    if (pathname === "/contact") return "CONTACT";
    return "HOME";
  };

  const activeLabel = getActiveLabel();

  return (
    <>
      <motion.div
        className="fixed bottom-6 inset-x-4 mx-auto z-[150] flex w-[90%] max-w-[340px] md:max-w-[400px] items-center justify-between border border-white/10 bg-[#121212]/92 px-5 py-3.5 backdrop-blur-[8px] shadow-[0_12px_40px_rgba(0,0,0,0.5)] rounded-none text-white"
        initial="initial"
        animate={state ? "animate" : "initial"}
        transition={{
          default: {
            ease: [0.24, 0.43, 0.15, 0.97],
            duration: 0.6,
          },
          opacity: { duration: 0.4 },
          y: {
            ease: [0.24, 0.43, 0.15, 0.97],
            duration: 0.8,
          },
        }}
        variants={{
          initial: {
            y: "0%",
            opacity: navOpacity,
          },
          animate: {
            y,
            opacity: navOpacity,
          },
        }}
      >
        {/* Logo (Big & Clearly Visible in crisp white against the dark capsule) */}
        <Link href="/" className="cursor-pointer flex items-center">
          <Image
            src={MaskanLogo}
            alt="Maskan Builders"
            height={140}
            className="h-11 md:h-13 w-auto object-contain transition-all duration-300 brightness-0 invert"
          />
        </Link>

        {/* Center Label (Active Page Name) */}
        <Link
          href="/"
          className="cursor-pointer text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-white/90 hover:text-white transition-colors"
        >
          {activeLabel}
        </Link>

        {/* Hamburger Menu Toggle */}
        <motion.button
          initial="initial"
          whileHover="whileHover"
          onClick={() => {
            setOpenSideBar(true);
          }}
          className="cursor-pointer p-2 flex items-center justify-center text-white"
          aria-label="Open menu"
        >
          <AnimatedBurger
            className="[stroke:white] size-5"
          />
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {openSideBar && (
          <MenuOverlay openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
        )}
      </AnimatePresence>
    </>
  );
}
