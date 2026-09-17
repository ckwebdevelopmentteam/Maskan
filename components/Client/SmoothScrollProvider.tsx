"use client";

import React from "react";
import { ReactLenis } from "@/utils/lenis";
import { usePathname } from "next/navigation";

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith("/studio");

  if (isStudio) {
    return <>{children}</>;
  }

  return (
    <ReactLenis root options={{ duration: 1.0, lerp: 0.1, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
