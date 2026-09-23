"use client";

import HeroDesktopClient from "./Desktop";
import HeroMobileClient from "@/sections/Hero/Client/Mobile";

export default function HeroClient() {
  return (
    <>
      {/* Always render both; CSS controls which is visible — avoids null-state flash */}
      <span className="md:hidden">
        <HeroMobileClient />
      </span>
      <span className="hidden md:contents">
        <HeroDesktopClient />
      </span>
    </>
  );
}
