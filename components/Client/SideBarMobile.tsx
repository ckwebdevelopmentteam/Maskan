"use client";

import StyledLink from "@/components/Server/StyledLink";
import * as motion from "motion/react-client";
import NavigateSVG from "@/components/SVGComponents/NavigateSVG";
import ContactUs from "../Server/ContactUs";
import StayConnected from "../Server/StayConnected";
import { AnimatePresence } from "motion/react";
import { Dispatch, SetStateAction } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

interface LinkItem {
  href: string;
  link: string;
}

interface SideBarMobileProps {
  setOpenSideBar: Dispatch<SetStateAction<boolean>>;
}

export default function SideBarMobile({ setOpenSideBar }: SideBarMobileProps) {
  const links: LinkItem[] = [
    { href: "/", link: "Home" },
    { href: "/about", link: "About Us" },
    { href: "/services", link: "Services" },
    { href: "/projects", link: "Projects / Portfolio" },
    { href: "/#contact", link: "Contact Us" },
  ];
  return (
    <div className="fixed top-0 z-[30] h-screen w-full overflow-x-hidden">
      <AnimatePresence>
        <motion.div
          variants={{
            initial: { x: "100%" },
            exit: { x: "100%" },
            animate: { x: "0%" },
          }}
          initial="initial"
          animate="animate"
          transition={{
            ease: [0.24, 0.43, 0.15, 0.97],
            duration: 0.8,
          }}
          className="h-screen overflow-y-scroll scrollbar-custom bg-[var(--accent)] px-3-75 pt-12000svh"
        >
          <span className="text-sm text-[var(--bg-primary)80]">Discover Pages</span>
          <div className="my-3200svh text-[var(--bg-primary)]">
            {links.map(({ link, href }, i) => (
              <StyledLink
                className="mb-750svh text-lg font-light"
                key={link}
                href={href}
                underlineColor="var(--bg-primary)"
                arrowFill="var(--bg-primary)"
                active={i == 0}
                onClick={() => setOpenSideBar(false)}
              >
                {link}
              </StyledLink>
            ))}
            <motion.button
              onClick={() => setOpenSideBar(false)}
              className="mt-14 flex w-full cursor-pointer items-center justify-between px-6 py-5 text-lg font-light text-[var(--fg-primary)]"
              initial={{ backgroundColor: "var(--bg-primary)" }}
              whileHover={{ backgroundColor: "#304d3d" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <span>Join us</span>
              <NavigateSVG fill="var(--fg-primary)" />
            </motion.button>
          </div>
          <ContactUs className="gap-y-8 text-base text-[var(--bg-primary)] max-md:mt-16 md:hidden [&>:first-child]:text-sm [&>:first-child]:text-[var(--bg-primary)]/80 [&>div]:gap-x-5" />
          <StayConnected className="mt-4800svh gap-y-6 text-sm [line-height:1] text-[var(--bg-primary)]/80 [&_div]:gap-x-8 [&_svg]:h-2400svh [&_svg]:w-auto" />
          <div className="mt-8 pb-12">
            <ThemeSwitcher />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
