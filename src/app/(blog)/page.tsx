import type { Metadata } from "next";

import { Analytics } from "./analytics";

export const metadata: Metadata = {
  title: "Ilya Amursky • Blog",
  description:
    "Read the latest articles and insights from Ilya Amursky on entrepreneurship, software engineering, and more.",
};

export default function BlogPage() {
  return <Analytics />;
}
