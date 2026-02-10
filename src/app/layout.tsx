import "./globals.css";

import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

import { Noto_Serif } from "next/font/google";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ilya Evseev • Senior Full-Stack Engineer",
  description:
    "Senior full-stack engineer with 10+ years of experience in building complex web applications, team leading, project management, and collaboration with stakeholders, resulting in business growth and delivering solutions that meet global standards.",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={`${notoSerif.variable}`}>
      <body className="font-noto-serif antialiased">{children}</body>
    </html>
  );
}
