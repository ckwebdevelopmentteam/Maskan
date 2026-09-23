import type { Metadata } from "next";
import { Outfit, Cormorant_Garamond } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/Client/SmoothScrollProvider";
import { WindowSizeProvider } from "./providers";
import { StickyContactButtons } from "@/components/Client/StickyContactButtons";
import { PopupProvider } from "@/components/Client/PopupProvider";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const CormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.maskanbuilder.com"),
  alternates: {
    canonical: "https://www.maskanbuilder.com/",
  },
  title: "Maskan Builders | Best Construction Company in Kerala",
  description: "Maskan Builders is the best construction company in Kerala, delivering premium residential & commercial projects.",
  openGraph: {
    title: "Maskan Builders | Best Construction Company in Kerala",
    description: "Maskan Builders is the best construction company in Kerala, delivering premium residential & commercial projects.",
    url: "https://www.maskanbuilder.com/",
    siteName: "Maskan Builders",
    images: [
      {
        url: "/home.png",
        width: 1200,
        height: 630,
        alt: "Maskan Builders - Best Construction Company in Kerala",
      }
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maskan Builders | Best Construction Company in Kerala",
    description: "Maskan Builders is the best construction company in Kerala.",
    images: ["/home.png"],
  },
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-55BZPFMC');`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Maskan Builders LLP",
              "image": "https://www.maskanbuilder.com/home.png",
              "@id": "https://www.maskanbuilder.com",
              "url": "https://www.maskanbuilder.com",
              "telephone": "+917594033300",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Maskan Builders, Manjeri Road, Half, Valluvambram",
                "addressLocality": "Malappuram",
                "addressRegion": "Kerala",
                "postalCode": "673642",
                "addressCountry": "IN"
              }
            })
          }}
        />
      </head>
      <body
        suppressHydrationWarning
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
            <SmoothScrollProvider>
              {children}
            </SmoothScrollProvider>
            <StickyContactButtons />
          </PopupProvider>
        </WindowSizeProvider>
      </body>
    </html>
  );
}
// Trigger rebuild
