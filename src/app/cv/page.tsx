import type { Metadata } from "next";

import { Analytics } from "./analytics";
import { CV } from "./cv";
import { HEADER } from "./data";

export const metadata: Metadata = {
  title: HEADER.title,
  description: HEADER.description,
  keywords: ["full stack engineer", "frontend engineer"],
};

export default function CVPage() {
  return (
    <>
      <CV />
      <Analytics />
    </>
  );
}
