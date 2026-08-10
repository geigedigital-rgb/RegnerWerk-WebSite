import type { Metadata } from "next";
import { Caveat, Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CookieBanner } from "@/components/shared/CookieBanner";
import { KonfiguratorMaintenanceProvider } from "@/components/shared/KonfiguratorMaintenanceModal";
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
  openGraph: {
    title: `${site.name} – Automatische Gartenbewässerung`,
    description: site.tagline,
    locale: "de_DE",
    type: "website",
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
        <KonfiguratorMaintenanceProvider>
          <SkipToContent />
          <Header />
          <main id="main-content" className="flex-1 pb-20 lg:pb-0">
            {children}
          </main>
          <Footer />
          <StickyMobileCta />
          <CookieBanner />
        </KonfiguratorMaintenanceProvider>
      </body>
    </html>
  );
}
