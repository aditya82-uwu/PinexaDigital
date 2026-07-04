import { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-config";

const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"] }[] = [
  { path: "",                         priority: 1.0, changeFrequency: "weekly" },
  { path: "/services",                priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/web-design",     priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/crm-automation", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/ecommerce",      priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/maintenance",    priority: 0.8, changeFrequency: "monthly" },
  { path: "/pricing",                 priority: 0.9, changeFrequency: "monthly" },
  { path: "/portfolio",               priority: 0.8, changeFrequency: "monthly" },
  { path: "/about",                   priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact",                 priority: 0.7, changeFrequency: "yearly" },
  { path: "/blog",                    priority: 0.7, changeFrequency: "weekly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: siteUrl(path),
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
