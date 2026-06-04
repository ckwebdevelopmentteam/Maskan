import type { Metadata } from "next";
import { Jost, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "@/utils/lenis";
import { WindowSizeProvider } from "./providers";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600"],
});

const CormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Maskan Builders",
  description: "Premium architectural and construction services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body
          className={`${jost.variable} ${CormorantGaramond.variable} overflow-x-clip antialiased selection:bg-[var(--accent)] selection:text-[var(--bg-primary)]`}
        >
          <WindowSizeProvider>{children}</WindowSizeProvider>
        </body>
      </ReactLenis>
    </html>
  );
}
