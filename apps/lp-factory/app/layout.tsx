import type { Metadata } from "next";
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

// Default site metadata. Each LP route overrides title/description/og via its own
// `export const metadata` in its page.tsx.
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
