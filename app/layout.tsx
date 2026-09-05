import type { Metadata } from "next";
import { Outfit, Cormorant_Garamond } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ReactLenis } from "@/utils/lenis";
import { WindowSizeProvider } from "./providers";
import { StickyContactButtons } from "@/components/Client/StickyContactButtons";
import { PopupProvider } from "@/components/Client/PopupProvider";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const CormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Maskan Builders | Best Construction Company in Kerala | 17+ Years Experience",
  description: "Maskan Builders is the best construction company in Kerala, with 17+ years and 750+ residential & commercial projects completed.",
  verification: {
    google: "NP97e5qgtp9oad8ojipxMHa6SOCNSYTODp0ekaPEvRg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-55BZPFMC');`}
        </Script>
      </head>
      <ReactLenis root options={{ duration: 1.0, lerp: 0.1, smoothWheel: true }}>
        <body
          className={`${outfit.variable} ${CormorantGaramond.variable} overflow-x-clip antialiased selection:bg-[var(--accent)] selection:text-[var(--bg-primary)]`}
        >
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-55BZPFMC"
              height="0"
              width="0"
              title="Google Tag Manager"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-HLDCV33ZJ7"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-HLDCV33ZJ7');`}
          </Script>
          <WindowSizeProvider>
            <PopupProvider>
              {children}
              <StickyContactButtons />
            </PopupProvider>
          </WindowSizeProvider>
        </body>
      </ReactLenis>
    </html>
  );
}
// Trigger rebuild
