import type { MetadataRoute } from "next";
import { getAllPosts } from "./blog/posts";

const SITE_URL = "https://clksoftware.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogRoutes,
  ];
}
