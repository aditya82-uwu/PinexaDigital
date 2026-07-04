# PinexaDigital.com — Full SEO Audit Report
**Domain:** pinexadigital.com (live at https://www.pinexadigital.com)
**Audit date:** 2026-07-04
**Previous audit:** 2026-06-29 (Health Score 36/100)
**Business type:** Web Design & Development Agency, targeting US small-business clients (remote team, no physical storefront)
**Pages crawled:** 11 (via sitemap.xml) + 1 sample blog post detail page

---

## Executive Summary

### Overall SEO Health Score: 38/100 (was 36/100 on 2026-06-29)

This score is nearly unchanged from five days ago, and that flatness is the headline finding. Underneath it, the site has genuinely improved a great deal: Schema/Structured Data jumped from 18→78, Content Quality from 28→48, and AI Search Readiness from 21→32. Six blog posts that returned 404 now work, `/api/contact` now exists, and four of five standard security headers now ship. **None of that improvement has had any real-world effect**, because `robots.txt` still contains `Disallow: /` — the exact same rule flagged Critical on 2026-06-29, confirmed unchanged via live `curl` today. Every specialist audit run this cycle (Technical, Sitemap, SXO, GEO) independently arrived at the same conclusion: *nothing else in this report matters until that one line is fixed.*

A quality-only score — what this site would earn if it were fully crawlable today — is roughly **65-70/100**. The 38 reported here reflects the gap between "code quality" and "what Google and AI crawlers can currently see," which is zero.

### Top 5 Critical Issues

1. **`robots.txt` still blocks every crawler** (`src/app/robots.ts`, `Disallow: /`) — unresolved for 5 days, verified live. Blocks Googlebot, Bingbot, GPTBot, ClaudeBot, PerplexityBot, and Google-Extended alike.
2. **Canonical tags, sitemap, and Open Graph URLs all point at the wrong host** (`pinexadigital.com`, no www) while the site actually serves at `www.pinexadigital.com` — every canonical tag points at a URL that itself redirects.
3. **Site-wide `AggregateRating`/`Review` schema is self-authored and unverifiable** — a real Google rich-result policy risk, not just a quality nitpick.
4. **`sameAs` links to LinkedIn and Twitter/X both return HTTP 404** — a false structured-data claim that actively hurts AI entity-resolution trust rather than merely omitting a signal.
5. **The Portfolio page — the site's dedicated proof-of-work page — contains no actual project images**, only the logo.

### Top 5 Quick Wins

1. Change `src/app/robots.ts` from `disallow:"/"` to `allow:"/"` and redeploy — 15 minutes, estimated +35-40pt impact once crawlers return.
2. Change `SITE.rootDomain` in `src/lib/site-config.ts` to `"www.pinexadigital.com"` — one edit fixes canonical, sitemap, and OG URLs everywhere.
3. Remove the duplicate `"| PinexaDigital"` suffix hardcoded in `services/seo/page.tsx` and `services/maintenance/page.tsx`.
4. Add the 6 live blog posts to `src/app/sitemap.ts` by importing from `blog-data.ts` instead of using a hardcoded route array.
5. Fix or remove the broken `sameAs` LinkedIn/Twitter links in `layout.tsx`'s JSON-LD.

---

## Technical SEO — Score: 24/100

Since the last audit, real fixes landed: the sitewide `noindex` bug is gone, blog posts work, `/api/contact` exists, and 4/5 security headers now ship. But the score stayed low because `robots.txt` still disallows the entire site — a hard gate that makes every other fix invisible to search engines. A new High-severity issue also surfaced: canonical/sitemap/OG URLs all use the non-www apex host, which itself redirects to the actually-served `www` host.

**What works:** meta robots correctly `index,follow` sitewide; canonical tags present everywhere (wrong host, but consistently implemented); HSTS preload-eligible plus 4 other security headers; all pages confirmed server-rendered with zero console errors; 6 blog posts and the contact API now functional.

**Key issues:** robots.txt total block (Critical, unresolved 5 days) · canonical/sitemap/OG host mismatch (High) · duplicate title suffix on 2 pages (Medium) · no CSP header (Medium) · sitemap missing 6 blog URLs (Medium) · fabricated sitemap lastmod timestamps (Medium) · og-image.jpg 404 (Low) · no IndexNow (Low).

Full detail: `findings/technical.md` and `findings/sitemap.md`.

---

## Content Quality — Score: 48/100

Word counts across most pages are now solid (700-1,000 words on service pages, 787 on About), and the blog is live with real, substantive posts — a full reversal from the prior audit's "blog is all 404s" finding. The remaining gaps are almost entirely E-E-A-T (trust/authority), not thinness: unverifiable testimonials asserted as schema fact, zero named human authorship anywhere on the site, a portfolio page with no real project imagery, and a US-targeting site whose footer phone number is Indian.

**What works:** real 900+ word blog posts with correct schema · transparent, specific pricing · well-differentiated service pages · consistent metadata across all 11 pages.

**Key issues:** unverifiable testimonials/reviews embedded as schema fact (Critical) · portfolio page has ~1 real image (Critical) · zero named human authorship (High) · +91 phone number on a US-targeted site (High) · thin `/pricing` copy (Medium) · no team/author bio page (Medium) · non-chronological blog dates (Low).

Full detail: `findings/content.md`.

---

## On-Page SEO — Score: 55/100

A SERP-backwards analysis (SXO methodology) of 4 high-intent target keywords found the site's page types are *structurally* close to what Google currently rewards — process breakdowns, FAQs, tiered pricing, and testimonials that many competitors lack. The gap is thin proof and missing price anchors at the exact moments searchers compare options, compounded by the same sitemap architecture issues noted under Technical SEO.

**Key issues:** no comparison/"why us" content anywhere, while 3 of 4 analyzed keywords show a directory/listicle competitor in the SERP (High) · no SEO retainer pricing shown anywhere despite competitors anchoring at explicit monthly prices (High) · sitemap host/coverage issues (High, cross-ref Technical) · FAQ content on 3 pages has no `FAQPage` schema (Medium) · `/pricing` has zero trust signals beside the price table (Medium).

Full detail: `findings/sxo.md` and `findings/sitemap.md`.

---

## Schema & Structured Data — Score: 78/100

The single largest improvement this cycle (up from 18/100). Nearly every gap from the prior audit — `BreadcrumbList`, per-service `Service` schema, `WebSite`/`Organization` graph, `Blog`/`BlogPosting`, `ItemList`/`Offer` pricing — is now implemented correctly and confirmed server-rendered on all 11 pages. The remaining issues are policy risk and type-appropriateness, not missing implementation.

**What works:** `BreadcrumbList` site-wide via a shared component · `Service` schema on all 4 service pages with correct `provider`/`Offer` nesting · valid JSON-LD throughout (correct `@context`, ISO 8601 dates, absolute URLs, no placeholders).

**Key issues:** self-serving, unverifiable `AggregateRating`/`Review` block is a genuine Google rich-result policy risk (Critical) · `ProfessionalService` (a `LocalBusiness` subtype) used with no address for a remote-only agency — `Organization` is more accurate (Medium) · `BlogPosting` missing `image` field (Medium) · optional: portfolio `ItemList`, `FAQPage` for AI/GEO only.

Full detail: `findings/schema.md`.

---

## Performance (Core Web Vitals) — Score: 85/100 *(lab-only estimate — no CrUX API key configured)*

Lighthouse-based lab testing shows a strong baseline: CLS is 0 across every page/viewport tested, INP proxy (TBT) is low with no third-party scripts competing for the main thread, and Vercel edge caching keeps TTFB in a healthy 180-310ms range. The one area to watch is mobile LCP, which lab-simulates right at the 2.5s "Good" boundary.

**Key issues:** mobile LCP borderline at 2.7s, real-world 75th-percentile traffic could push some visits into "Needs Improvement" (Medium) · ~48 KiB estimated unused JavaScript (Low) · no real CrUX field data available yet to confirm these lab numbers (Info).

Full detail: `findings/performance.md`.

---

## AI Search Readiness (GEO) — Score: 32/100 (was 21/100)

Real content-side progress happened this cycle: `/llms.txt` now exists, the blog is live and citable, and `/services`/`/pricing`/`/about` now carry genuine FAQ-style Q&A sections. None of it can be discovered by any AI crawler while `robots.txt` blocks GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, and Google-Extended identically to regular search engines. A new integrity problem also surfaced: the `sameAs` LinkedIn and Twitter/X links both 404 — a false entity claim that actively hurts trust rather than merely being absent.

**Key issues:** robots.txt blocks all AI crawlers (Critical, unresolved) · broken `sameAs` entity links (Critical) · unsourced/undated headline stats (High) · no `FAQPage` schema despite existing FAQ content (High) · +91 phone number contradicts `areaServed: United States` (High).

Full detail: `findings/geo.md`.

---

## Images — Score: 70/100

Technical image delivery is strong: `next/image` automatically serves WebP/AVIF with responsive `srcSet` and explicit dimensions, producing zero measured CLS across every page and viewport tested. The gap is content, not technical implementation — the portfolio page (the site's dedicated visual-proof page) has essentially no real project photography, and the homepage relies on generic stock imagery rather than authentic team/work photos.

Full detail: cross-referenced in `findings/content.md` and `findings/sxo.md`.

---

## Additional Specialist Findings

- **Sitemap Structure (52/100):** Well-formed XML, but functionally inert while robots.txt blocks crawling, lists non-canonical (redirecting) URLs, and is missing all 6 blog posts. Full detail: `findings/sitemap.md`.
- **Visual / Mobile UX (90/100):** Excellent above-the-fold execution on homepage (desktop and mobile), zero horizontal scroll, zero CLS risk. Deductions for undersized mobile nav tap-targets (32px, sitewide) and no above-the-fold CTA on Services/Pricing mobile views. Full detail: `findings/visual.md`.
- **Backlinks / Authority (5/100, informational floor score):** No measurable backlink profile via Common Crawl — expected for a newly-launched site, not itself a defect. Excluded from the weighted health score. Full detail: `findings/backlinks.md`.

---

## Methodology Notes

- No Google API credentials (PageSpeed/CrUX/Search Console/GA4) or DataForSEO connector were configured in this environment — Performance figures are Lighthouse lab estimates, and SXO competitor analysis used WebSearch snippets rather than a live SERP-scraping API. Both are clearly flagged as directional in their respective findings files.
- Backlink analysis ran at Common Crawl Tier 0 only (no Moz/Bing Webmaster keys) — sufficient to confirm "no measurable profile yet," not to rule out link discovery entirely.
- All findings for pages behind the robots.txt block were gathered via direct HTTP fetch (bypassing the crawl-blocking directive for audit purposes only), not by pretending the site is currently indexed.

---

*Full per-category findings, evidence, and ready-to-use code snippets are in `findings/*.md`. See `ACTION-PLAN.md` for a prioritized, phased implementation roadmap.*
