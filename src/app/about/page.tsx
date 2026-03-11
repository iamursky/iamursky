import type { Metadata } from "next";

import { Analytics } from "./analytics";

export const metadata: Metadata = {
  title: "Ilya Amursky • About",
  description: "Learn more about Ilya Amursky, an entrepreneur and software engineer.",
};

export default function AboutPage() {
  return <Analytics />;
}
