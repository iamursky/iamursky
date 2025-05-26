import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      allow: "/",
      disallow: ["/cv"],
      userAgent: "*",
    },
    sitemap: "https://iamursky.pro/sitemap.xml",
  };
}
