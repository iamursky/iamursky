import type { Metadata } from "next";

import { PDFDocument } from "./pdf-document";

export const metadata: Metadata = {
  title: "Ilya Evseev - Senior Frontend Developer",
  description:
    "Senior frontend engineer with over 12 years of experience in building complex web applications, team leading, project management, and collaboration with stakeholders, resulting in business growth and delivering solutions that meet global standards.",
};

export default function Page() {
  return <PDFDocument />;
}
