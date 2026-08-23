# SEO Audit Report — pinexadigital.com

**Audit date:** 2026-08-23
**Overall SEO Health Score: 81 / 100**
**Business type:** Web design & development agency — remote/virtual, US-market-focused, no physical location
**Site:** Next.js 16 on Vercel, 32 pages (homepage, 4 service pages + hub, pricing, portfolio, about, contact, blog + 21 posts)

> **Context:** This audit found the current site is a substantially rebuilt version (git commit `f5cee20 "new website"`) of what a prior 2026-07-04 audit assessed. That prior audit found a sitewide `noindex`, a fully blocked `robots.txt`, and a self-authored fake review schema block — all **resolved** in the current build. This report reflects the live site as of today only.

---

## Executive Summary

PinexaDigital's rebuilt site is in strong technical and structural health: fully crawlable, well-secured, cleanly structured data, and genuinely good copywriting that avoids typical agency-site fluff. The 81/100 score reflects a site with no blocking technical issues and no Critical-severity findings anywhere — a meaningful jump from the pre-rebuild baseline. What's holding the score back from higher is not mechanics but **trust infrastructure**: the site has zero real client proof (testimonials, case studies, reviews), no named human authors behind its advice content, and — expected for a ~2-month-old domain — no backlink profile or directory presence yet. These are the right problems to have at this stage: they're solvable with real business activity (client work, reviews, directory listings) rather than code fixes, though several code-level quick wins (a 146KB favicon, a mobile UI bug, an inaccurate llms.txt claim) are worth fixing immediately regardless.

### Top 5 Priority Issues

1. **Portfolio page shows demo templates, not real client work — zero case studies or testimonials exist anywhere on the site.** (High — Content & Search Experience) The single biggest trust gap; affects both conversion and E-E-A-T.
2. **No named human authors on any page.** (High — Content) All content is attributed to the Organization only; Google's E-E-A-T guidance rewards identifiable, credentialed authors for advice content.
3. **No detectable backlink profile.** (High — Off-Page Authority) Domain is genuinely new (~2 months old, registered 2026-06-21) with zero directory or citation presence — expected, but the highest-leverage next step.
4. **Floating contact button overlaps the social-share icon on mobile blog posts.** (High — Visual/UX) A confirmed real layout bug, not cosmetic — makes the share button unusable at that scroll position.
5. **Favicon is 146KB — the largest single resource loaded on every page.** (High — Performance) Trivial to fix, meaningful first-load-weight impact given it loads sitewide.

### Top 5 Quick Wins

1. Replace the 146KB favicon with a properly optimized icon (a few KB) — five-minute fix.
2. Fix the CSS collision between the floating contact button and share icons on mobile blog posts.
3. Correct `llms.txt`, which inaccurately claims the homepage features testimonials that don't exist.
4. Switch the site-wide schema from `ProfessionalService` to `Organization` + `ContactPoint` — a ready-made JSON-LD snippet is provided in `findings/schema.md`.
5. Add `/privacy` and `/terms` to `sitemap.xml`, and fix the shared build-time `lastmod` on 11 static pages.

---

## Category Scores

| Category | Score | Weight | Weighted |
|---|---|---|---|
| Technical SEO | 91 | 22% | 20.0 |
| Content Quality | 74 | 23% | 17.0 |
| On-Page SEO (Search Experience) | 76 | 20% | 15.2 |
| Schema / Structured Data | 88 | 10% | 8.8 |
| Performance (Core Web Vitals) | 78 | 10% | 7.8 |
| AI Search Readiness (GEO) | 83 | 10% | 8.3 |
| Images / Visual UX | 79 | 5% | 4.0 |
| **Overall Health Score** | | | **81** |

*Off-Page Authority (backlinks) is tracked separately at a directional-floor score of 5/100 with low confidence (Tier 0 data only) and is not part of the weighted score above — see the dedicated section below.*

---

## Technical SEO — 91/100

All 32 sitemap URLs return clean HTTP 200s with self-referencing canonicals and no duplicate titles. Domain canonicalization is correct (non-www → www, http → https, both single-hop 308 redirects). robots.txt is fully open, meta robots is `index, follow` sitewide, and a genuine 404 (not a soft-404) is returned for nonexistent pages. Security headers (CSP, HSTS with preload, X-Content-Type-Options, X-Frame-Options, Permissions-Policy) are consistently applied across homepage and interior pages alike. Content is fully server-rendered — no JS-execution dependency for crawlability.

**What works:** clean 200s across the board; correct canonicalization; strong, consistent security headers; server-rendered content; `llms.txt` present at root.

**Key findings:**
- **Medium** — CSP allows `'unsafe-inline'` for scripts/styles, weakening its XSS-mitigation value. Fix: nonce- or hash-based CSP via Next.js middleware.
- **Medium** — `/privacy` and `/terms` exist and are crawlable (verified HTTP 200) but are missing from `sitemap.xml`.
- **Low** — No IndexNow integration despite regular blog publishing.
- **Low** — `llms.txt` links use the apex domain, adding an avoidable redirect hop.
- **Low** — Sitemap `lastmod` for 11 static pages is a shared build-time timestamp, not a genuine per-page change signal.

Full detail: `findings/technical.md`, `findings/sitemap.md`

---

## Content Quality — 74/100

Content quality is genuinely above average for an agency site — specific, numeric, low on marketing fluff, and structured for skimmability and citation. Service pages are differentiated rather than boilerplate-duplicated. The gap is entirely trust infrastructure: no named authors, no real client proof.

**What works:** differentiated service-page copy; specific checkable claims (pricing, PageSpeed numbers, timelines); citation-ready blog structure (numbered frameworks, decision tables); consistent, opinionated brand voice; honest FAQ content.

**Key findings:**
- **High** — No named human authors anywhere; all content attributed to the Organization only.
- **High** — Portfolio presents demo templates, not real client work; zero testimonials/case studies exist sitewide.
- **Medium** — `/about` makes unverified experience claims (no years-in-business, project count, or team size).
- **Low** — Process description duplicated near-verbatim between `/about` and `/services/web-design`.

Full detail: `findings/content.md`

---

## On-Page SEO (Search Experience) — 76/100

Reading key pages' SERPs backwards against likely target keywords, most commercial pages closely match the format Google rewards for their query type — `/pricing` and `/services/ecommerce` in particular. The portfolio page is the clear exception.

**What works:** pricing and e-commerce pages match comparison/trust-building intent well; service pages name specific tools as expertise signals; blog posts open with direct, quotable answers.

**Key findings:**
- **High** — Portfolio page structurally mismatches its search/click intent (demos instead of real proof — same root cause as the Content finding above).
- **Medium** — Homepage lacks above-fold social proof.
- **Low** — E-commerce service page and two blog posts overlap in message/audience with no cross-linking.

Full detail: `findings/sxo.md`

---

## Schema / Structured Data — 88/100

Format hygiene is excellent across every page sampled — pure JSON-LD, no deprecated types, ISO 8601 dates, server-rendered. Previously flagged Critical issues (a self-authored fake review block, missing blog images) are fully resolved.

**What works:** consistent site-wide `@graph`; `BreadcrumbList` correct on every interior page; `Service` schema with correct `Offer` presence; `Blog`/`BlogPosting` complete; `FAQPage` verified to match visible content.

**Key findings:**
- **Medium** — `ProfessionalService` (a `LocalBusiness` subtype) is used for a remote agency with no address, compounded by an Indian phone number against a US `areaServed` claim. Ready-made `Organization` + `ContactPoint` replacement provided in `findings/schema.md`.
- **Low** — `Service.provider` duplicates org data inline instead of using an `@id` reference.
- **Low** — Portfolio's 8 demo tiles have no item-level schema.
- **Low** — LinkedIn `sameAs` link status is inconclusive on automated check (LinkedIn's standard bot-block, not a confirmed dead link).

Full detail: `findings/schema.md`

---

## Performance (Core Web Vitals) — 78/100

*Lab data only (Lighthouse, simulated throttling) — no Google CrUX API key is configured in this environment, so this is not real-user field data.*

Desktop performance is excellent (Lighthouse 100/100, LCP 0.7s). Mobile is good but not great — LCP lands in the "Needs Improvement" band (2.5-4.0s) on every page tested, while CLS is perfect (0) and TBT is well within budget everywhere.

**What works:** perfect CLS everywhere; low TBT everywhere; reasonable total page weight with responsive/lazy-loaded images and font preloading already in place.

**Key findings:**
- **High** — Favicon is 146KB, the largest single resource on the homepage, loaded on every page.
- **Medium** — Mobile LCP in the Needs Improvement band (2.9-3.9s) across all 4 pages tested.
- **Low** — Several 40-70KB JS chunks load on the homepage, competing with the LCP element for mobile bandwidth.

Full detail: `findings/performance.md`

---

## AI Search Readiness (GEO) — 83/100

Genuinely ahead of most small business sites: robots.txt is fully open to AI crawlers, and a well-formed `llms.txt` exists with a clean page manifest and an explicit AI-citation policy. Blog content is structurally citation-ready.

**What works:** robots.txt blocks no AI crawler; `llms.txt` present with attribution policy; citation-ready blog structure; `FAQPage` schema verified accurate; all structured data server-rendered.

**Key findings:**
- **Medium** — `llms.txt` inaccurately claims the homepage features testimonials that don't exist anywhere on the site.
- **Low** — No explicit per-bot rules in robots.txt (blanket allow works, but isn't self-auditing).
- **Low** — Thin brand-entity disambiguation signals (`sameAs` covers only LinkedIn/Instagram, no Crunchbase/Clutch/Wikidata).

Full detail: `findings/geo.md`

---

## Images / Visual UX — 79/100

The rebuild is clean and professional: no horizontal scroll, no broken images, no console errors across 12 page/viewport combinations tested (6 pages × desktop/mobile). The homepage above-the-fold execution is a genuine strength.

**What works:** homepage hero fully visible above the fold on both viewports with strong contrast; zero broken/unsized images; consistent readable typography; descriptive alt text on all homepage images.

**Key findings:**
- **High** — Floating contact button overlaps the social-share icon on mobile blog posts (confirmed via DOM overlap detection, not a screenshot artifact).
- **Medium** — Large empty vertical gap between header and content on every interior page, worst on mobile.
- **Medium** — Contact form not visible above the fold on mobile (buried at ~1.8 screen-heights down).
- **Medium** — Mobile nav icon buttons (32×32px) remain below the recommended 44px tap-target size — unaddressed since the prior audit.

Full detail: `findings/visual.md`

---

## Off-Page Authority / Backlinks — 5/100 (directional floor, low confidence)

*Tracked separately from the weighted health score — Tier 0 data only (Common Crawl + verification crawler; no Moz/Bing Webmaster/DataForSEO configured).*

A forced, non-cached Common Crawl re-check confirms `pinexadigital.com` remains entirely absent from the web graph — no in-degree, no PageRank, zero referring domains. WHOIS confirms this is a genuinely young domain (registered 2026-06-21, ~2 months old) — this is expected, not a defect. The one material change since the last check: the technical blockers that previously made link-building premature (a sitewide `robots.txt` disallow) are now fixed, so directory/citation building is now a practical next step.

**Key findings:**
- **High** — Zero referring domains / no backlink authority signal exists — expected for domain age.
- **Medium** — No Google Business Profile, Clutch, DesignRush, or GoodFirms listing yet — the highest-leverage, lowest-effort starting point for this business type.
- **Low** — LinkedIn `sameAs` uses a personal-profile URL pattern rather than a Company Page.

Full detail: `findings/backlinks.md`

---

## Blog Content Architecture (Supplementary)

The 21-post blog clusters into 6 topic hubs, 4 of which map cleanly to a service page. Internal linking exists but is thin (typically one contextual link per post), and two posts genuinely cannibalize each other.

**Key findings:**
- **High** — `shopify-vs-woocommerce-which-is-right-for-you` and `shopify-vs-woocommerce-2026` target the same query/intent with one-directional linking between them — real cannibalization risk.
- **Medium** — The SEO/AI-search content cluster (4 posts, the second-largest on the blog) has no matching service page to convert into.
- **Medium** — Internal linking from posts to service/pricing pages is thin and inconsistent; "related articles" modules appear recency-based rather than topic-aware.

Full detail: `findings/cluster.md`

---

## Methodology Notes

- No Google API credentials (PageSpeed/CrUX/GSC/GA4) were configured in this environment — Performance findings are lab-only (Lighthouse), and no real-user field data or search-console indexation/traffic data is included in this audit.
- No Moz or Bing Webmaster API key was configured — the backlink section runs at Tier 0 (Common Crawl only) and should be treated as directional, not comprehensive.
- All 32 sitemap URLs were verified live; a representative subset was used for deep content, schema, and performance analysis rather than exhaustively fetching every page, given the site's flat, template-consistent structure.
