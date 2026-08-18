import type { Metadata } from "next";
import { Caveat, Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CookieBanner } from "@/components/shared/CookieBanner";
import { SkipToContent } from "@/components/shared/SkipToContent";
import { StickyMobileCta } from "@/components/shared/StickyMobileCta";
import { site } from "@/lib/site";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.regnerwerk.de",
  ),
  title: {
    default: `${site.name} – Automatische Gartenbewässerung`,
    template: `%s | ${site.name}`,
  },
  description: site.tagline,
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: `${site.name} – Automatische Gartenbewässerung`,
    description: site.tagline,
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "RegnerWerk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} – Automatische Gartenbewässerung`,
    description: site.tagline,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${plusJakarta.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-full flex-col font-sans text-forest">
        <SkipToContent />
        <Header />
        <main id="main-content" className="flex-1 pb-20 lg:pb-0">
          {children}
        </main>
        <Footer />
        <StickyMobileCta />
        <CookieBanner />
      </body>
    </html>
  );
}
