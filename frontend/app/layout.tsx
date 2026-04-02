import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import PageTransition from "@/components/ui/page-transition";
import { CommandPalette, MouseFollower, ScrollProgress, SmoothScroll } from "@/components/ui/interacts";
import { NoiseOverlay } from "@/components/ui/effects";

// Fonts loaded via head link tags in the HTML
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const viewport: Viewport = {
  width: 1280,
  initialScale: 0.3,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://gfg-official.github.io/GFG_OFFICIAL-Website/"),
  title: {
    default: "GFG Student Chapter | ITER",
    template: "%s | GFG SC ITER"
  },
  description: "The official GeeksforGeeks Student Chapter at ITER. Join a community of developers, master DSA, and build the future.",
  keywords: ["GFG", "ITER", "Student Chapter", "Coding", "DSA", "Web Development", "Community"],
  openGraph: {
    title: "GFG Student Chapter | ITER",
    description: "Join the premier student developer community at ITER. Master DSA, crack interviews, and ship open-source projects.",
    url: "https://gfg-iter.vercel.app",
    siteName: "GFG Student Chapter ITER",
    images: [
      {
        url: `${basePath}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "GFG Student Chapter ITER"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: `${basePath}/gfg-official-logo.png`,
    shortcut: `${basePath}/gfg-official-logo.png`,
    apple: `${basePath}/gfg-official-logo.png`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body
        className="font-space-grotesk antialiased bg-background text-foreground selection:bg-green-500/30 selection:text-green-200"
      >
        <SmoothScroll />
        <MouseFollower />
        <ScrollProgress />
        <NoiseOverlay />
        <CommandPalette />
        <PageTransition>{children}</PageTransition>
        <Toaster />
      </body>
    </html>
  );
}
