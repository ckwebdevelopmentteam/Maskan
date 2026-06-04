import SectionTitle from "@/components/Server/SectionTitle";
import StyledLink from "@/components/Server/StyledLink";
import Image from "next/image";

export default function ElementisStoryServer() {
  return (
    <>
      {/* Description Column: Starts on Left */}
      <div className="max-md:mt-12 md:mt-8 md:col-span-6 md:col-start-1 text-left flex flex-col items-start px-4 md:px-0 order-2 md:order-1">
        <h2 className="text-[32px] md:text-[48px] font-light whitespace-normal leading-[1.1] text-left w-full text-[var(--fg-primary)]">
          Turnkey residential estates, commercial high-rises, and luxury architectural
          finishes engineered seamlessly under our landmark 30/70 payment scheme for
          unprecedented capital reach.
        </h2>
        <div className="mt-12 flex flex-col gap-1 max-md:mb-16 md:gap-4 w-fit items-start">
          <StyledLink href="/services" showArrow={false} className="text-xl md:text-2xl font-light">
            Explore Services
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
