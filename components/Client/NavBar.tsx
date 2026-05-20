"use client";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import Image from "next/image";
import MaskanLogo from "@/public/Maskan Open File/PNG/Maskan-01.png";
import DashedLink from "@/components/Server/DashedLink";
import BorderedButton from "../Server/BorderedButton";
import NavigateSVG from "../SVGComponents/NavigateSVG";
import AnimatedBurger from "../SVGComponents/AnimatedBurger";
import { useState } from "react";
import Link from "next/link";
import { useIsMobile } from "@/app/providers";
import ResponsiveSideBar from "./ResponsiveSideBar";
import CloseIcon from "../SVGComponents/CloseIcon";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export default function NavBar() {
  const isMobile = useIsMobile();
  const navOpacity = useSelector((state: RootState) => state.nav.opacity);
  const [openSideBar, setOpenSideBar] = useState(false);
  const [state, setState] = useState(false);
  const [y, setY] = useState("0%");
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const scrollValue = latest / window.innerHeight;
    setState(scrollValue > 0.5);
    if (scrollValue > 0.65) {
      if ((scrollY.getPrevious() as number) < latest) {
        setY("-100%");
      } else {
        setY("0%");
      }
    }
  });
  const navItems = [
    {
      href: "/",
      children: "Home",
    },
    {
      href: "/about",
      children: "About Us",
    },
    {
      href: "/services",
      children: "Services",
    },
    {
      href: "/projects",
      children: "Projects",
    },
    {
      href: "/#contact",
      children: "Contact Us",
    },
  ];
  return (
    <>
      <motion.div
        className="fixed top-0 z-[50] flex w-full items-center justify-between px-5 py-10 md:px-16"
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
            paddingBlock: isMobile
              ? "calc(40 * var(--multiplier))"
              : "calc(33 * var(--multiplier))",
            backgroundColor: "transparent",
            y,
            opacity: navOpacity,
          },
          animate: {
            paddingBlock: isMobile
              ? "calc(18 * var(--multiplier))"
              : "calc(8 * var(--multiplier))",
            backgroundColor: "transparent",
            y,
            opacity: navOpacity,
          },
        }}
      >
        <Link href="#home" className="cursor-pointer">
          <Image 
            src={MaskanLogo} 
            alt="Maskan Builders" 
            height={110}
            className="h-20 md:h-28 w-auto object-contain transition-all duration-500"
            style={{ filter: "var(--logo-filter, none)" }}
          />
        </Link>
        <nav aria-label="navigation" className="hidden gap-6 md:flex">
          {navItems.map((eachItem) => (
            <Link href={eachItem.href} key={eachItem.children}>
              <DashedLink
                className="text-base font-normal [&>.animated-underline]:bg-[var(--text-white)]"
                variants={{
                  animate: { color: "var(--text-white)" },
                  initial: { color: "var(--text-white)" },
                }}
              >
                {eachItem.children}
              </DashedLink>
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-8">
          <BorderedButton
            className="relative hidden w-fit cursor-pointer items-center gap-4 px-5 py-4.5 text-base [line-height:0.8] font-normal md:flex text-[var(--text-white)] [&_svg]:[stroke:var(--text-white)]"
          >
            Get a Quote
            <NavigateSVG
              style={{ fill: "var(--bg-primary)" }}
              className="mr-2.5 size-2.5"
            />
          </BorderedButton>
          <motion.button
            initial="initial"
            whileHover="whileHover"
            onClick={() => {
              const isOpen = openSideBar;
              if (isMobile) {
                if (!isOpen) {
                  //about to open
                  setState(true);
                } else {
                  //about to close -> the variant of the nav should be based on the scrollY
                  const scrollValue = scrollY.get() / window.innerHeight;
                  setState(scrollValue > 0.5);
                }
              }
              setOpenSideBar(!isOpen);
            }}
            className="cursor-pointer p-2 animate-colors duration-500"
            disabled={isMobile == null}
          >
            {isMobile && openSideBar ? (
              <CloseIcon className="size-7 [&_path]:[stroke-width:1px] [&_path]:[stroke:var(--text-white)]" />
            ) : (
              <AnimatedBurger
                className="[stroke:var(--text-white)]"
              />
            )}
          </motion.button>
        </div>
      </motion.div>
      <ResponsiveSideBar
        isMobile={isMobile}
        openSideBar={openSideBar}
        setOpenSideBar={setOpenSideBar}
      />
    </>
  );
}
