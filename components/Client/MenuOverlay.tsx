"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

interface MenuOverlayProps {
  openSideBar: boolean;
  setOpenSideBar: Dispatch<SetStateAction<boolean>>;
}

export default function MenuOverlay({ openSideBar, setOpenSideBar }: MenuOverlayProps) {
  if (!openSideBar) return null;

  const mainLinks = [
  { href: "/", label: "Home" },
  // { href: "/about", label: "About" },
  // { href: "/services", label: "Collection" },
  // { href: "/projects", label: "Projects" },
  // { href: "/#how-we-work", label: "Approach" },
  { href: "/#contact", label: "Contact" },
];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black/75 backdrop-blur-sm p-4"
    >
      {/* Centered Menu Card */}
      <motion.div
        initial={{ scale: 0.95, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.95, y: 20, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.24, 0.43, 0.15, 0.97] }}
        className="w-full max-w-[420px] bg-[#121212] border border-white/10 p-8 md:p-10 shadow-2xl flex flex-col text-white"
      >
        {/* Label */}
        <span className="text-[10px] tracking-[0.3em] font-mono text-neutral-500 uppercase mb-5 block">
          Menu
        </span>

        {/* Main Links */}
        <nav className="flex flex-col gap-2.5 mb-7">
          {mainLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpenSideBar(false)}
              className="text-3xl font-medium tracking-tight text-white hover:text-neutral-400 transition-colors leading-snug cursor-pointer"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Divider & Columns */}
        <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-6 mt-1 text-xs">
          {/* Left Column: News / Showroom */}
          <div className="flex flex-col gap-2">
            <Link
              href="/about"
              onClick={() => setOpenSideBar(false)}
              className="text-neutral-400 hover:text-white transition-colors cursor-pointer font-medium"
            >
              News
            </Link>
            <Link
              href="/services"
              onClick={() => setOpenSideBar(false)}
              className="text-neutral-400 hover:text-white transition-colors cursor-pointer font-medium"
            >
              Showroom
            </Link>
          </div>

          {/* Right Column: Contact Details */}
          <div className="flex flex-col gap-2 text-right">
            <a
              href="tel:+9251111627526"
              className="text-neutral-400 hover:text-white transition-colors cursor-pointer font-medium tracking-wide"
            >
              +92 51 111 MASKAN
            </a>
            <a
              href="mailto:info@maskan.pk"
              className="text-neutral-400 hover:text-white transition-colors cursor-pointer font-medium"
            >
              info@maskan.pk
            </a>
          </div>
        </div>

        {/* Get a Quote Button */}
        <Link
          href="/#contact"
          onClick={() => setOpenSideBar(false)}
          className="mt-8 w-full border border-white/10 hover:border-white/30 text-white bg-transparent py-3.5 px-6 font-mono text-[10px] tracking-[0.25em] uppercase flex items-center justify-center gap-2 hover:bg-white/5 transition-all duration-300 rounded-none cursor-pointer"
        >
          <span className="text-[12px] leading-none mb-0.5">↳</span> Get a Quote
        </Link>
      </motion.div>

      {/* Separate Close Button below the card */}
      <motion.button
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 10, opacity: 0 }}
        transition={{ delay: 0.1, duration: 0.3 }}
        onClick={() => setOpenSideBar(false)}
        className="mt-6 bg-[#121212] border border-white/10 hover:border-white/30 text-white p-3.5 flex items-center justify-center cursor-pointer transition-colors duration-300 rounded-none size-11"
        aria-label="Close menu"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="size-3.5 stroke-white"
        >
          <path
            d="M1 1L13 13M13 1L1 13"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.button>
    </motion.div>
  );
}
