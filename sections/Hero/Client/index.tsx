"use client";

import { useIsMobile } from "@/app/providers";
import HeroDesktopClient from "./Desktop";
import HeroMobileClient from "@/sections/Hero/Client/Mobile";

export default function HeroClient() {
  const isMobile = useIsMobile();
  return (
    <>
      {isMobile ? (
        <HeroMobileClient />
      ) : (
        <HeroDesktopClient />
      )}
    </>
  );
}
