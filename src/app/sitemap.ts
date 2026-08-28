import { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-config";
import { getAllPosts } from "@/lib/blog-data";

/**
 * `lastModified` is set per-route below rather than derived automatically, since this
 * site has no CMS/git-backed content-change tracking for static pages. Bump a route's
 * date by hand when that page's content actually changes — a value that always equals
 * "now" (e.g. `new Date()`) is discounted by Google as an unreliable freshness signal.
 */
const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"]; lastModified: string }[] = [
  { path: "",                         priority: 1.0, changeFrequency: "weekly",  lastModified: "2026-08-19" },
  { path: "/services",                priority: 0.9, changeFrequency: "monthly", lastModified: "2026-08-19" },
  { path: "/services/web-design",     priority: 0.8, changeFrequency: "monthly", lastModified: "2026-08-19" },
  { path: "/services/crm-automation", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-08-19" },
  { path: "/services/ecommerce",      priority: 0.8, changeFrequency: "monthly", lastModified: "2026-08-19" },
  { path: "/services/seo",            priority: 0.8, changeFrequency: "monthly", lastModified: "2026-08-28" },
  { path: "/services/maintenance",    priority: 0.8, changeFrequency: "monthly", lastModified: "2026-08-19" },
  { path: "/pricing",                 priority: 0.9, changeFrequency: "monthly", lastModified: "2026-08-19" },
  { path: "/portfolio",               priority: 0.8, changeFrequency: "monthly", lastModified: "2026-08-19" },
  { path: "/about",                   priority: 0.7, changeFrequency: "monthly", lastModified: "2026-08-19" },
  { path: "/contact",                 priority: 0.7, changeFrequency: "yearly",  lastModified: "2026-08-19" },
  { path: "/blog",                    priority: 0.7, changeFrequency: "weekly",  lastModified: "2026-08-19" },
  { path: "/privacy",                 priority: 0.3, changeFrequency: "yearly", lastModified: "2026-08-19" },
  { path: "/terms",                   priority: 0.3, changeFrequency: "yearly", lastModified: "2026-08-19" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = routes.map(({ path, priority, changeFrequency, lastModified }) => ({
    url: siteUrl(path),
    lastModified,
    changeFrequency,
    priority,
  }));

  const postEntries = getAllPosts().map((post) => ({
    url: siteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...postEntries];
}
