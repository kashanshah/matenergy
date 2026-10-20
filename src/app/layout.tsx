import type { Metadata, Viewport } from "next";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/ui";
import { WhatsAppFab } from "@/components/whatsapp-fab";
import { site } from "@/lib/site";
import { localBusinessJsonLd, websiteJsonLd } from "@/lib/jsonld";
import { ogImage } from "@/lib/metadata";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Solar Panel Installation in Karachi | Residential & Industrial Solar | Mat Energy",
    template: "%s | Mat Energy",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "solar panel installation Karachi",
    "solar company in Karachi",
    "solar system for home Karachi",
    "industrial solar Karachi",
    "commercial solar Karachi",
    "net metering Karachi",
    "hybrid solar system Karachi",
  ],
  openGraph: {
    type: "website",
    locale: "en_PK",
    siteName: site.name,
    images: [ogImage],
  },
  twitter: { card: "summary_large_image", images: [ogImage.url] },
  formatDetection: { telephone: false },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
};

// Google tags from the existing site (Site Kit). Set the env var to an empty string to disable one.
// Only loaded in production so local development doesn't pollute the reports.
const isProd = process.env.NODE_ENV === "production";
const gaId = isProd ? (process.env.NEXT_PUBLIC_GA_ID ?? "GT-NB3V57Q2") : "";
const gtmId = isProd ? (process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-5XTD7HD6") : "";

export const viewport: Viewport = {
  themeColor: "#40b93c",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-PK" className={`${inter.variable} ${jakarta.variable}`}>
      {gtmId && <GoogleTagManager gtmId={gtmId} />}
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:shadow-lg"
        >
          Skip to content
        </a>
        <JsonLd data={[localBusinessJsonLd(), websiteJsonLd()]} />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFab />
      </body>
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  );
}
