import type { Metadata } from "next";
import { Geist, Newsreader } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ventura Fund Services | U.S. Fund Administration",
  description:
    "Ventura Fund Services is a U.S. based, management-owned fund administrator for private equity, venture capital, real estate, private credit, and infrastructure funds. Efficiency. Precision. Results.",
  metadataBase: new URL("https://ventura-website.vercel.app"),
  openGraph: {
    title: "Ventura Fund Services",
    description: "U.S. fund administration for illiquid asset managers. Efficiency. Precision. Results.",
    url: "/",
    siteName: "Ventura Fund Services",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${newsreader.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#FAFBFD] text-brand-900">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-brand-700 focus:px-3 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
