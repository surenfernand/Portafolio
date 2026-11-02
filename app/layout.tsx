import type { Metadata, Viewport } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SiteProvider } from "@/components/site-provider";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Web Loom Zone — Websites & Software Development",
    template: "%s — Web Loom Zone",
  },
  description:
    "Web Loom Zone designs and develops websites, online stores and custom software for growing businesses.",
};

export const viewport: Viewport = {
  themeColor: "#0a1018",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${spaceGrotesk.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        <SiteProvider>
          <Header />
          {children}
          <Footer />
        </SiteProvider>
      </body>
    </html>
  );
}
