import Navigation from "@/components/navigation";
import Shockwave from "@/components/shockwave";
import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import { ViewTransition } from "react";
import "./globals.css";

const inter = Inter_Tight({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Troy Mackenzie-Smee",
    template: "%s - Troy Mackenzie-Smee",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased bg-background min-h-screen font-sans`}
      >
        <Shockwave />
        <div className="sm:pt-20 py-6 lg:py-30 flex-col gap-y-6 sm:gap-y-0 sm:flex-row flex justify-center px-12 gap-x-10">
          <Navigation />
          <main className="max-w-3xl w-full">
            <ViewTransition default="crossfade">{children}</ViewTransition>
          </main>
        </div>
      </body>
    </html>
  );
}
