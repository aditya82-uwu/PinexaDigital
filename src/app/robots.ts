import { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-config";

/**
 * Explicit per-bot allow rules for major AI crawlers, in addition to the blanket
 * `userAgent: "*"` allow below. Functionally redundant with the wildcard rule, but
 * makes the site's AI-crawling stance auditable at a glance rather than implicit.
 */
const aiCrawlers = ["GPTBot", "OAI-SearchBot", "ClaudeBot", "Google-Extended", "PerplexityBot", "CCBot"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...aiCrawlers.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: siteUrl("/sitemap.xml"),
  };
}
