"use client";

import React from "react";
import { Phone } from "lucide-react";
import WhatsappLogo from "../SVGComponents/socials/WhatsappLogo";
import { usePathname } from "next/navigation";

export const StickyContactButtons = () => {
  const pathname = usePathname();

  // Hide on admin dashboard and Sanity Studio
  if (pathname?.startsWith("/admin") || pathname?.startsWith("/studio")) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-4">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917594033300" // Replace with actual WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
        aria-label="WhatsApp"
      >
        <WhatsappLogo />
      </a>

      {/* Call Button */}
      <a
        href="tel:+917594033300"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent)] text-white shadow-lg transition-transform hover:scale-110"
        aria-label="Call Maskan Builders"
      >
        <Phone size={24} color="var(--bg-primary)" />
      </a>
    </div>
  );
};
