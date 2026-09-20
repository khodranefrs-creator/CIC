import type { Metadata, Viewport } from "next";
import { Manrope, Newsreader, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const plex = IBM_Plex_Mono({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Quantum Clinical Research CIC — The Living Field",
  description:
    "Quantum Clinical Research CIC is a not-for-profit community interest company making whole-organism, biophysical clinical research open, legible and accessible to everyone.",
  keywords: [
    "clinical research",
    "community interest company",
    "biophysics",
    "bioelectricity",
    "science communication",
    "open research",
  ],
  openGraph: {
    title: "Quantum Clinical Research CIC — The Living Field",
    description:
      "Making whole-organism, biophysical clinical research open, legible and accessible to everyone.",
    type: "website",
    locale: "en_GB",
    siteName: "Quantum Clinical Research CIC",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quantum Clinical Research CIC — The Living Field",
    description:
      "Making whole-organism, biophysical clinical research open, legible and accessible to everyone.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#05090c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${newsreader.variable} ${plex.variable} scroll-smooth`}
    >
      <body className="min-h-dvh bg-ink font-sans text-paper antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-core focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
