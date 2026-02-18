import "./globals.css";

import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

import { Noto_Serif } from "next/font/google";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ilya Evseev • Senior Frontend Developer",
  description:
    "Senior Frontend Developer with 12 years of experience building complex, state-heavy web applications with React. Experience in project management, negotiations, and close colaboration with stakeholders to transform business requirements into solutions aligned with industry best practices and standards.",
  keywords: ["frontend developer", "full stack developer", "react developer"],
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={`${notoSerif.variable}`}>
      <body className="font-noto-serif antialiased">{children}</body>
    </html>
  );
}
