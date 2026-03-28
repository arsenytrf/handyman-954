import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyPhone } from "@/components/layout/StickyPhone";
import { BackToTop } from "@/components/layout/BackToTop";
import { LenisProvider } from "@/components/layout/LenisProvider";
import { LocalBusinessJsonLd } from "@/components/shared/JsonLd";
import LeadCollector from "@/components/ui/LeadCollector";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "954 Handyman Services | Professional Handyman — Broward County, FL",
    template: "%s | 954 Handyman Services",
  },
  description:
    "Professional handyman services from Miami to Boca Raton. Painting, plumbing, electrical, mounting, flooring, furniture assembly & more. Starting at $45/hr. Call (954) 445-7471.",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  other: {
    "theme-color": "#84CC16",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${dmSans.variable}`}
    >
      <head>
        <LocalBusinessJsonLd />
      </head>
      <body className="font-body antialiased bg-white text-charcoal-900 overflow-x-hidden">
        <LenisProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-lime-500 focus:text-white focus:px-4 focus:py-2 focus:text-sm"
          >
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <StickyPhone />
          <BackToTop />
          <LeadCollector />
        </LenisProvider>
      </body>
    </html>
  );
}
