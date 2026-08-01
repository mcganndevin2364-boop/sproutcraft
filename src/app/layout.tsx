import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SproutCraft - Build Full-Stack Apps with AI in Minutes",
    template: "%s | SproutCraft",
  },
  description: "Transform your ideas into production-ready applications. No code required. SproutCraft uses AI to build full-stack apps with authentication, databases, and deployments.",
  keywords: ["AI app builder", "no-code", "low-code", "SaaS builder", "web app generator", "vibe coding"],
  authors: [{ name: "SproutCraft" }],
  creator: "SproutCraft",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sproutcraft.app",
    siteName: "SproutCraft",
    title: "SproutCraft - Build Full-Stack Apps with AI in Minutes",
    description: "Transform your ideas into production-ready applications. No code required.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SproutCraft - Build Full-Stack Apps with AI",
    description: "Transform your ideas into production-ready applications. No code required.",
    creator: "@sproutcraft",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${inter.variable} ${plusJakarta.variable} ${spaceGrotesk.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
