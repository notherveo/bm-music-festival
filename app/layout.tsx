import * as React from "react";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NEXUS — Electronic Music Festival",
  description: "An immersive electronic music festival experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${geist.className} bg-black text-white min-h-screen flex flex-col`}>
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
