"use client";
import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";
import StyledLinkClient from "@/components/Client/StyledLinkClient";
import Image1 from "@/public/Maskan 01_page-0002.jpg";
import Image2 from "@/public/Maskan 01_page-0003.jpg";
import Image3 from "@/public/Maskan 01_page-0004.jpg";
import Image4 from "@/public/Maskan 01_page-0005.jpg";
import Image5 from "@/public/Maskan 01_page-0006.jpg";
import { useImageReveal } from "@/hooks/useImageReveal";
interface LinkType {
  title: string;
  href: string;
  img: StaticImageData;
}
export default function SustainableRetreatClient() {
  const { imgContainerRef, handleFocus } = useImageReveal();
  const links: LinkType[] = [
    {
      title: "Corporate Profile",
      href: "https://maskan.pk/profile",
      img: Image1,
    },
    {
      title: "Construction SOP",
      href: "https://maskan.pk/sop",
      img: Image2,
    },
    {
      title: "Budgeting Model",
      href: "https://maskan.pk/budgeting",
      img: Image3,
    },
    {
      title: "Our Team",
      href: "https://maskan.pk/team",
      img: Image4,
    },
    {
      title: "Quality Control",
      href: "https://maskan.pk/quality",
      img: Image5,
    },
  ];

  return (
    <>
      <div ref={imgContainerRef} className="relative overflow-hidden md:w-fit">
        <Image
          src={links[links.length - 1].img}
          alt="placeholder"
          aria-hidden={true}
          className="invisible w-full max-md:aspect-[0.82] md:h-full md:w-auto"
        />
        {links.map((eachLink, i) => (
          <motion.div
            key={`image-${i + 1}`}
            data-index={i}
            className="absolute inset-0"
            style={{ zIndex: -i }}
          >
            <Image
              src={eachLink.img}
              alt={eachLink.title}
              className="size-full object-cover md:w-auto"
            />
          </motion.div>
        ))}
      </div>
      <div className="-mx-8-25 grid grid-rows-5 divide-y divide-[#DCD4C4] border-y border-[#DCD4C4] md:col-span-2 md:col-start-2 md:row-start-2 md:mx-0">
        {links.map((eachLink, index) => (
          <StyledLinkClient
            handleFocus={handleFocus}
            sNo={index + 1}
            href={eachLink.href}
            key={`link-${index + 1}`}
          >
            {eachLink.title}
          </StyledLinkClient>
        ))}
      </div>
    </>
  );
}
