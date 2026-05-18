import ResponsiveMaskText from "@/components/Client/ResponsiveMaskTextVariant";
import SectionTitle from "@/components/Server/SectionTitle";
import StyledLink from "@/components/Server/StyledLink";
import { Fragment } from "react";

export default function ElementisStoryServer() {
  const textLines = {
    mobile: [
      <Fragment key="m-1">Turnkey residential estates,</Fragment>,
      <Fragment key="m-2">commercial high-rises,</Fragment>,
      <Fragment key="m-3">and luxury architectural</Fragment>,
      <Fragment key="m-4">finishes engineered for</Fragment>,
      <Fragment key="m-5">supreme predictability.</Fragment>,
    ],
    desktop: [
      <Fragment key="d-1">Turnkey residential estates, commercial</Fragment>,
      <Fragment key="d-2">high-rises, and luxury architectural</Fragment>,
      <Fragment key="d-3">finishes engineered beautifully for</Fragment>,
      <Fragment key="d-4">maximum capital reach and</Fragment>,
      <Fragment key="d-5">predictable building delivery.</Fragment>,
    ],
  };
  return (
    <>
      <SectionTitle className="md:col-span-3 text-center md:text-left w-full">Maskan Services</SectionTitle>
      <div className="max-md:mt-12 md:col-span-8 md:col-start-4 text-center md:text-right flex flex-col items-center md:items-end px-4 md:px-0">
        <ResponsiveMaskText
          {...textLines}
          className="text-24 [line-height:1.2] md:text-40 text-center md:text-right w-full text-[#D1CCBF]"
        />
        <div className="mt-12 flex flex-col gap-1 max-md:mb-16 md:gap-4 w-full md:max-w-md mx-auto md:ml-auto items-center md:items-end">
          <StyledLink href="/services">
            Explore Services
          </StyledLink>
          <StyledLink href="/#contact">
            Request Services Brochure
          </StyledLink>
        </div>
      </div>
    </>
  );
}
