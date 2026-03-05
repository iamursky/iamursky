import type { Metadata } from "next";

import { CV } from "@/components/cv";
import { HEADER } from "@/components/cv/data";

export const metadata: Metadata = {
  title: HEADER.title,
  description: HEADER.description,
  keywords: ["frontend developer", "full stack developer", "react developer"],
};

export default function CVPage() {
  return <CV />;
}
