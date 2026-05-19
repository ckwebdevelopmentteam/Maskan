import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ReactLenis } from "@/utils/lenis";
import { WindowSizeProvider } from "./providers";

const BasisGrotesquePro = localFont({
  src: [
    {
      path: "./fonts/BasisGrotesquePro-Light.woff2",
      weight: "300",
    },
    { path: "./fonts/BasisGrotesquePro-Regular.woff2", weight: "400" },
    { path: "./fonts/BasisGrotesquePro-Medium.woff2", weight: "500" },
  ],
  variable: "--font-grotesque",
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
          className={`${BasisGrotesquePro.variable} overflow-x-clip antialiased selection:bg-[#CED1BF] selection:text-[#2B3530]`}
        >
          <WindowSizeProvider>{children}</WindowSizeProvider>
        </body>
      </ReactLenis>
    </html>
  );
}
