import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/dashboard/", "/r/", "/_next/"],
    },
    sitemap: "https://sproutcraft.app/sitemap.xml",
  };
}
