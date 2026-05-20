import Image from "next/image";
import { Fragment } from "react";
import ConstructionExpertiseImage from "@/public/property-1.jpg";
import ResponsiveMaskText from "@/components/Client/ResponsiveMaskTextVariant";
import SectionTitle from "@/components/Server/SectionTitle";
import MaskText from "@/components/Server/MaskText";
import StyledLink from "@/components/Server/StyledLink";
import ResponsiveImage from "@/components/Client/ResponsiveImage";

export default function WellnessSanctuary() {
  const textLines = {
    desktop: [
      <Fragment key="desktop-1">Strategic planning,</Fragment>,
      <Fragment key="desktop-2">efficient design, and</Fragment>,
      <Fragment key="desktop-3">precise execution</Fragment>,
    ],
    mobile: [
      <Fragment key="mobile-1">Strategic planning,</Fragment>,
      <Fragment key="mobile-2">efficient design, and precise</Fragment>,
      <Fragment key="mobile-3">execution</Fragment>,
    ],
  };

  return (
    <div id="services" className="flex flex-col bg-[#121C29] text-[var(--fg-primary)] md:grid md:grid-cols-2 border-t border-[var(--border-white-5)]">
      <ResponsiveImage parallaxAmount={20}>
        <Image
          src={ConstructionExpertiseImage}
          alt="maskan-construction-image"
          className="h-[350px] md:h-full w-full object-cover"
        />
      </ResponsiveImage>
      <div className="flex flex-col justify-center px-3-75 py-40 md:py-0">
        <div className="flex flex-col gap-12 md:ml-36 md:w-fit md:gap-16">
          <SectionTitle>Maskan Services</SectionTitle>
          <ResponsiveMaskText
            {...textLines}
            className="text-24 [line-height:1] md:text-40"
          />
          <MaskText
            lines={[
              <>Maskan offers a unique service model</>,
              <>that shares the value of resources saved</>,
              <>to the customers in terms of flexible</>,
              <>payment options, ensuring your dreams</>,
              <>are built with financial efficiency.</>,
            ]}
            className="text-lg [line-height:1.3] font-normal"
          />
          <StyledLink href="https://maskan.pk/services">
            Explore Services
          </StyledLink>
        </div>
      </div>
    </div>
  );
}
