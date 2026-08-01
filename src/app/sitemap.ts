import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sproutcraft.app";
  
  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1 },
    { url: `${baseUrl}/features`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/pricing`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.5 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.5 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "daily" as const, priority: 0.7 },
    { url: `${baseUrl}/login`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${baseUrl}/signup`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.6 },
    { url: `${baseUrl}/builder`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/vs/emergent`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/vs/lovable`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/vs/bolt`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/vs/cursor`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/vs/replit`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/vs/windsurf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
  ];

  const blogPosts = [
    { slug: "build-saas-without-code-2025" },
    { slug: "ai-app-builder-comparison" },
    { slug: "vibe-coding-complete-guide" },
    { slug: "mvp-development-speed" },
    { slug: "full-stack-code-ownership" },
    { slug: "stripe-payments-integration" },
    { slug: "startup-development-costs" },
    { slug: "landing-page-conversion" },
  ].map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPosts];
}
