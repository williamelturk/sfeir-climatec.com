import type { Metadata } from "next";
import { Open_Sans, Rubik } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/lib/data";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: {
    default: "Sfeir Climatec | More than an air conditioning company",
    template: "Sfeir Climatec | %s",
  },
  description: siteConfig.description,
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${openSans.variable} ${rubik.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
