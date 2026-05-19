import ResponsiveMaskText from "@/components/Client/ResponsiveMaskTextVariant";
import SectionTitle from "@/components/Server/SectionTitle";
import StyledLink from "@/components/Server/StyledLink";
import { Fragment } from "react";

export default function ElementisStoryServer() {
  const textLines = {
    mobile: [
      <Fragment key="m-1">Turnkey residential estates,</Fragment>,
      <Fragment key="m-2">luxury architectural finishes</Fragment>,
      <Fragment key="m-3">delivered seamlessly under</Fragment>,
      <Fragment key="m-4">the landmark 30/70 scheme</Fragment>,
      <Fragment key="m-5">for supreme capital reach.</Fragment>,
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
      <div className="max-md:mt-12 md:col-span-8 md:col-start-1 text-center md:text-left flex flex-col items-center md:items-start px-4 md:px-0 order-2 md:order-1">
        <ResponsiveMaskText
          {...textLines}
          className="text-24 [line-height:1.2] md:text-40 text-center md:text-left w-full text-[#DCD4C4]"
        />
        <div className="mt-12 flex flex-col gap-1 max-md:mb-16 md:gap-4 w-full md:max-w-md mx-auto md:ml-0 items-center md:items-start">
          <StyledLink href="/services">
            Explore Services
          </StyledLink>
          <StyledLink href="/#contact">
            Request Services Brochure
          </StyledLink>
        </div>
      </div>

      {/* Section Title Column: Starts on Right */}
      <SectionTitle 
        className="md:col-span-3 md:col-start-9 text-center md:text-right w-full md:justify-end order-1 md:order-2"
        titleClassName="text-xl md:text-3xl font-normal tracking-[0.2em]"
      >
        Maskan Services
      </SectionTitle>
    </>
  );
}
