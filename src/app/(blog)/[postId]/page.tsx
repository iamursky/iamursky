import type { Metadata } from "next";

import { Analytics } from "./analytics";

export const metadata: Metadata = {
  title: "Ilya Amursky • Blog",
  description: "<TODO: Get from DB>",
};

export default function BlogPostPage() {
  return <Analytics postId="123" />;
}
