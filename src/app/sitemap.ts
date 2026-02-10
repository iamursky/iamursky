import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://amursky.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
    },
  ];
}
