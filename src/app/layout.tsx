import "./globals.css";

import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

import { Noto_Serif } from "next/font/google";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ilya Amursky",
  description: "Software Engineer and Tech Entrepreneur",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={`${notoSerif.variable}`}>
      <body className="font-noto-serif antialiased">{children}</body>
    </html>
  );
}
