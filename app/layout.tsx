import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import localFont from "@next/font/local";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Max design",
  description: "Design infographe shooter",
};
const b93 = localFont({
  src: [
    {
      path: "../public/fonts/Bauhaus93Regular.ttf",
      weight: "400",
    },
  ],
  variable: "--font-ba93",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${b93.variable} font-sans`}>
        {children}
      </body>
      <Analytics />
    </html>
  );
}
