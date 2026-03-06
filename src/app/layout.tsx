import "./globals.css";

import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

import { Noto_Serif } from "next/font/google";

import { Providers } from "./providers";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ilya Amursky • Entrepreneur & Software Engineer",
  description:
    "Ilya Amursky's blog and portfolio website. Showcasing projects, articles, and insights on entrepreneurship and software development.",
  keywords: ["entrepreneurship", "frontend", "full stack"],
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={`${notoSerif.variable}`}>
      <body className="font-noto-serif antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
