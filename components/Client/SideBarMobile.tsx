"use client";

import StyledLink from "@/components/Server/StyledLink";
import * as motion from "motion/react-client";
import NavigateSVG from "@/components/SVGComponents/NavigateSVG";
import ContactUs from "../Server/ContactUs";
import StayConnected from "../Server/StayConnected";
import { AnimatePresence } from "motion/react";
import { Dispatch, SetStateAction } from "react";

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
          className="h-screen overflow-y-scroll bg-[#CED1BF] px-3-75 pt-12000svh"
        >
          <span className="text-sm text-[#2B353080]">Discover Pages</span>
          <div className="my-3200svh text-[#2B3530]">
            {links.map(({ link, href }, i) => (
              <StyledLink
                className="mb-750svh text-lg font-light"
                key={link}
                href={href}
                underlineColor="#2B3530"
                arrowFill="#2B3530"
                active={i == 0}
                onClick={() => setOpenSideBar(false)}
              >
                {link}
              </StyledLink>
            ))}
            <motion.button
              onClick={() => setOpenSideBar(false)}
              className="mt-14 flex w-full cursor-pointer items-center justify-between px-6 py-5 text-lg font-light text-[#DCD4C4]"
              initial={{ backgroundColor: "#2B3530" }}
              whileHover={{ backgroundColor: "#304d3d" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <span>Join us</span>
              <NavigateSVG fill="#DCD4C4" />
            </motion.button>
          </div>
          <ContactUs className="gap-y-8 text-base text-[#2B3530] max-md:mt-16 md:hidden [&>:first-child]:text-sm [&>:first-child]:text-[#2B3530]/80 [&>div]:gap-x-5" />
          <StayConnected className="mt-4800svh gap-y-6 text-sm [line-height:1] text-[#2B3530]/80 [&_div]:gap-x-8 [&_svg]:h-2400svh [&_svg]:w-auto" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
