"use client";

import { motion, useMotionValueEvent, useScroll, AnimatePresence } from "motion/react";
import Image from "next/image";
import MaskanLogo from "@/public/Maskan Open File/PNG/Maskan-01.png";
import AnimatedBurger from "../SVGComponents/AnimatedBurger";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

import { useSelector, useDispatch } from "react-redux";
import { RootState, setTheme } from "@/store";
import { THEMES } from "@/components/Client/ThemeProvider";
import { usePathname } from "next/navigation";
import MenuOverlay from "./MenuOverlay";

// Only these 4 themes are exposed to visitors
const ALLOWED_THEMES = ["pureBlack", "pureWhite", "wabi", "forest"] as const;

export default function NavBar() {
  const dispatch = useDispatch();
  const navOpacity = useSelector((state: RootState) => state.nav?.opacity ?? 1);
  const currentThemeKey = useSelector(
    (state: RootState) => state.theme?.currentTheme || "pureBlack"
  );
  const [openSideBar, setOpenSideBar] = useState(false);
  const [showThemePicker, setShowThemePicker] = useState(false);
  const [state, setState] = useState(false);
  const [y, setY] = useState("0%");
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const pickerRef = useRef<HTMLDivElement>(null);

  // Close picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(e.target as Node)) {
        setShowThemePicker(false);
      }
    };
    if (showThemePicker) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showThemePicker]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const scrollValue = latest / window.innerHeight;
    setState(scrollValue > 0.5);
    if (scrollValue > 0.65) {
      if ((scrollY.getPrevious() as number) < latest) {
        setY("150%");
      } else {
        setY("0%");
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
      <div ref={pickerRef} className="fixed bottom-6 inset-x-4 mx-auto z-[150] flex flex-col items-center w-[90%] max-w-[340px] md:max-w-[400px]">

        {/* ── Theme Picker Popover ── */}
        <AnimatePresence>
          {showThemePicker && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.96 }}
              transition={{ duration: 0.22, ease: [0.24, 0.43, 0.15, 0.97] }}
              className="w-full mb-2 bg-[#0e0e0e]/95 border border-white/10 backdrop-blur-[12px] shadow-[0_-8px_40px_rgba(0,0,0,0.6)] p-4"
            >
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/40 font-mono mb-3">
                Theme
              </p>
              <div className="grid grid-cols-2 gap-2">
                {ALLOWED_THEMES.map((key) => {
                  const theme = THEMES[key];
                  const isActive = currentThemeKey === key;
                  return (
                    <motion.button
                      key={key}
                      onClick={() => {
                        dispatch(setTheme(key));
                        setShowThemePicker(false);
                      }}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className={`relative flex items-center gap-2.5 px-3 py-2.5 text-left transition-all duration-200 cursor-pointer border ${
                        isActive
                          ? "border-white/30 bg-white/8"
                          : "border-white/8 hover:border-white/20 bg-white/3 hover:bg-white/6"
                      }`}
                    >
                      {/* Colour swatches */}
                      <div className="flex gap-1 shrink-0">
                        <span
                          className="w-3 h-3 rounded-full border border-white/15"
                          style={{ backgroundColor: theme.bgPrimary }}
                        />
                        <span
                          className="w-3 h-3 rounded-full border border-white/15"
                          style={{ backgroundColor: theme.fgPrimary }}
                        />
                      </div>
                      <span className="text-[10px] font-medium tracking-wide text-white/80 leading-tight">
                        {theme.name}
                      </span>
                      {/* Active dot */}
                      {isActive && (
                        <motion.span
                          layoutId="activeThemeDot"
                          className="absolute right-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/70"
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Main Navbar Pill ── */}
        <motion.div
          className="w-full flex items-center justify-between border border-white/10 bg-[#121212]/92 px-5 py-3.5 backdrop-blur-[8px] shadow-[0_12px_40px_rgba(0,0,0,0.5)] text-white"
          initial="initial"
          animate={state ? "animate" : "initial"}
          transition={{
            default: { ease: [0.24, 0.43, 0.15, 0.97], duration: 0.6 },
            opacity: { duration: 0.4 },
            y: { ease: [0.24, 0.43, 0.15, 0.97], duration: 0.8 },
          }}
          variants={{
            initial: { y: "0%", opacity: navOpacity },
            animate: { y, opacity: navOpacity },
          }}
        >
          {/* Logo */}
          <Link href="/" className="cursor-pointer flex items-center">
            <Image
              src={MaskanLogo}
              alt="Maskan Builders"
              height={140}
              className="h-11 md:h-13 w-auto object-contain transition-all duration-300 brightness-0 invert"
            />
          </Link>

          {/* Center: Theme toggle button */}
          <button
            onClick={() => setShowThemePicker((v) => !v)}
            aria-label="Toggle theme picker"
            className="flex items-center gap-1.5 cursor-pointer group"
          >
            {/* Two-tone swatch preview of current theme */}
            <div className="flex gap-1 items-center">
              <span
                className="w-2.5 h-2.5 rounded-full border border-white/20 transition-transform duration-200 group-hover:scale-110"
                style={{ backgroundColor: THEMES[currentThemeKey]?.bgPrimary ?? "#151515" }}
              />
              <span
                className="w-2.5 h-2.5 rounded-full border border-white/20 transition-transform duration-200 group-hover:scale-110"
                style={{ backgroundColor: THEMES[currentThemeKey]?.fgPrimary ?? "#ffffff" }}
              />
            </div>
            <span className="text-[9px] uppercase tracking-[0.2em] text-white/50 font-mono group-hover:text-white/80 transition-colors">
              {activeLabel}
            </span>
          </button>

          {/* Hamburger */}
          <motion.button
            initial="initial"
            whileHover="whileHover"
            onClick={() => setOpenSideBar(true)}
            className="cursor-pointer p-2 flex items-center justify-center text-white"
            aria-label="Open menu"
          >
            <AnimatedBurger className="[stroke:white] size-5" />
          </motion.button>
        </motion.div>
      </div>

      <AnimatePresence>
        {openSideBar && (
          <MenuOverlay openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
        )}
      </AnimatePresence>
    </>
  );
}
