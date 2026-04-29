import type { Metadata } from "next";
import Script from "next/script";
import { Golos_Text, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const golos = Golos_Text({
  variable: "--font-golos",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const SITE = "https://scandiweb.com";

// Same GTM container as scandiweb.com. All tracking (GA4, HubSpot, conversion
// pixels, future tags) is managed in the GTM dashboard, not in this code.
const GTM_ID = "GTM-TCLKQ96";

// Default site metadata. Each LP route overrides title/description/og via its
// own `export const metadata` in its layout.tsx.
export const metadata: Metadata = {
  title: "scandiweb",
  description:
    "Productized commerce accelerators for vertical retailers. Configure to your stack, live in weeks.",
  metadataBase: new URL(SITE),
  openGraph: { siteName: "scandiweb", type: "website" },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  authors: [{ name: "scandiweb" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${golos.variable} ${inter.variable} ${jetbrains.variable} antialiased`}
    >
      <head>
        <Script
          id="gtm"
          strategy="afterInteractive"
        >{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}</Script>
      </head>
      <body className="min-h-full flex flex-col">
        {/* GTM noscript fallback for browsers without JS */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
