import ResponsiveMaskText from "@/components/Client/ResponsiveMaskTextVariant";
import SectionTitle from "@/components/Server/SectionTitle";
import StyledLink from "@/components/Server/StyledLink";
import { Fragment } from "react";
import Image from "next/image";

export default function ElementisStoryServer() {
  const textLines = {
    mobile: [
      <Fragment key="m-1">Turnkey residential estates, luxury architectural finishes delivered seamlessly under the landmark 30/70 scheme for supreme capital reach.</Fragment>,
    ],
    desktop: [
      <Fragment key="d-1">Turnkey residential estates, commercial</Fragment>,
      <Fragment key="d-2">high-rises, and luxury architectural</Fragment>,
      <Fragment key="d-3">finishes engineered seamlessly under our</Fragment>,
      <Fragment key="d-4">landmark 30/70 payment scheme for</Fragment>,
      <Fragment key="d-5">unprecedented capital reach.</Fragment>,
    ],
  };
  return (
    <>
      {/* Description Column: Starts on Left */}
      <div className="max-md:mt-12 md:col-span-6 md:col-start-1 text-left flex flex-col items-start px-4 md:px-0 order-2 md:order-1">
        <ResponsiveMaskText
          {...textLines}
          className="text-5xl md:text-6xl lg:text-[4.5rem] whitespace-normal leading-[1.1] text-left w-full text-[var(--fg-primary)]"
        />
        <div className="mt-12 flex flex-col gap-1 max-md:mb-16 md:gap-4 w-full md:max-w-md mx-auto md:ml-0 items-start">
          <StyledLink href="/services">
            Explore Services
          </StyledLink>
          <StyledLink href="/#contact">
            Request Services Brochure
          </StyledLink>
        </div>
      </div>

      {/* Section Title Column: Starts on Right */}
      <div className="md:col-span-5 md:col-start-7 flex flex-col items-start md:items-end w-full order-1 md:order-2 gap-8 md:gap-10 px-4 md:px-0">
        <SectionTitle 
          className="text-left md:text-right w-full md:justify-end"
          titleClassName="text-xl md:text-3xl font-normal tracking-[0.2em]"
        >
          Maskan Services
        </SectionTitle>

        {/* Architectural Blueprint Drawing Image */}
        <div
          className="relative w-full aspect-[16/10] overflow-hidden"
        >
          <Image
            src="/drawing.avif"
            alt="Architectural drawing plan"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </>
  );
}
