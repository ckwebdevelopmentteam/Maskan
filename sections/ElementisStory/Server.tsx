import SectionTitle from "@/components/Server/SectionTitle";
import StyledLink from "@/components/Server/StyledLink";
import ImageWithFallback from "@/components/Client/ImageWithFallback";
import { Compass } from "lucide-react";
import Link from "next/link";

export default function ElementisStoryServer() {
  return (
    <>
      {/* Description Column: Starts on Left */}
      <div className="max-md:mt-4 md:col-span-6 md:col-start-1 text-center md:text-left flex flex-col items-center md:items-start px-2 md:px-0 order-2 md:order-1">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light whitespace-normal leading-[1.25] md:leading-[1.15] text-center md:text-left w-full text-[var(--fg-primary)]">
          Turnkey residential estates, commercial high-rises, and premium finishes —
          engineered seamlessly from foundation to handover.
        </h2>
        <p className="mt-4 md:mt-5 text-sm sm:text-base md:text-lg text-[var(--fg-primary)]/70 font-light leading-relaxed">
          Over the years, we have delivered a diverse range of residential, commercial, and infrastructure projects that stand as symbols of quality and trust. Our portfolio features{" "}
          <Link
            href="/projects/meridian-heights"
            className="underline underline-offset-4 decoration-[var(--fg-primary)]/40 hover:decoration-[var(--fg-primary)] font-normal text-[var(--fg-primary)] transition-colors"
          >
            luxury homes
          </Link>
          ,{" "}
          <Link
            href="/projects/maskan-avoria"
            className="underline underline-offset-4 decoration-[var(--fg-primary)]/40 hover:decoration-[var(--fg-primary)] font-normal text-[var(--fg-primary)] transition-colors"
          >
            contemporary apartment developments
          </Link>
          ,{" "}
          <Link
            href="/projects/kakanad-commercial-hub"
            className="underline underline-offset-4 decoration-[var(--fg-primary)]/40 hover:decoration-[var(--fg-primary)] font-normal text-[var(--fg-primary)] transition-colors"
          >
            commercial landmarks
          </Link>
          , office complexes, retail destinations, and bespoke construction projects, all executed with precision, innovation, and attention to detail.
        </p>
        <div className="mt-5 md:mt-6 flex flex-col gap-1 md:gap-3 w-fit items-center md:items-start">
          <StyledLink href="/projects" showArrow={false} className="text-lg md:text-2xl font-light">
            Explore More Projects
          </StyledLink>
        </div>
      </div>

      {/* Section Title Column: Starts on Right */}
      <div className="md:col-span-5 md:col-start-7 flex flex-col items-start md:items-end w-full order-1 md:order-2 gap-4 md:gap-6 px-2 md:px-0">
        <SectionTitle
          className="text-left md:text-right w-full md:justify-end"
          titleClassName="text-lg sm:text-xl md:text-3xl font-normal tracking-[0.2em]"
        >
          Maskan Services
        </SectionTitle>

        {/* Architectural Blueprint Drawing Image Container */}
        <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl bg-white border border-slate-200/80 shadow-sm">
          <ImageWithFallback
            src="/drawing.webp"
            alt="Architectural drawing plan"
            fill
            icon={Compass}
            category="Engineering Blueprint"
            fallbackTitle="Architectural Blueprint & Planning"
            fallbackSubtitle="Precision CAD drafting and structural engineering schematics"
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 45vw"
          />
        </div>
      </div>
    </>
  );
}
