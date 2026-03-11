import type { Metadata } from "next";

import { Analytics } from "./analytics";

export const metadata: Metadata = {
  title: "Ilya Amursky • Portfolio",
  description: "Ilya Amursky's portfolio showcasing his projects.",
};

export default function PortfolioPage() {
  return <Analytics />;
}
