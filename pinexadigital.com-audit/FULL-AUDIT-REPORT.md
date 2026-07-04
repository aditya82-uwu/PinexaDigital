# PinexaDigital.com — Full SEO Audit Report
**Domain:** pinexadigital.com  
**Audit date:** 2026-06-29  
**Business type:** Web Design & Development Agency (US market)  
**Pages crawled:** 11  

---

## SEO Health Score: 36 / 100

| Category | Score | Weight | Contribution |
|----------|-------|--------|-------------|
| Technical SEO | 28/100 | 22% | 6.2 |
| Content Quality | 28/100 | 23% | 6.4 |
| On-Page SEO | 55/100 | 20% | 11.0 |
| Schema / Structured Data | 18/100 | 10% | 1.8 |
| Performance (CWV) | 60/100 | 10% | 6.0 |
| AI Search Readiness | 21/100 | 10% | 2.1 |
| Images | 50/100 | 5% | 2.5 |
| **TOTAL** | | | **36 / 100** |

> The low score is almost entirely driven by two self-imposed blockers: `robots.txt: Disallow: /` and `robots: { index: false }` in `layout.tsx`. Without these, the base score rises to approximately **58/100** — above average for a new agency site. Fixing them is therefore the highest-leverage action possible.

---

## Executive Summary

PinexaDigital.com is a well-designed, technically sound Next.js 16 agency site with a clear value proposition, good on-page structure, and transparent pricing. However, it has two critical self-imposed blockers that make it completely invisible to every search engine and AI crawler:

1. **robots.txt disallows all crawlers** — Googlebot, Bingbot, GPTBot, ClaudeBot, and every other bot are explicitly blocked from accessing the site.
2. **Global noindex in layout.tsx** — Even if robots.txt is fixed, the meta noindex tag would prevent any page from being indexed.

These two issues alone explain most of the low health score. They appear to be development/staging holdovers that were never removed before production deployment.

Beyond the indexing blockers, the site has several significant trust and content gaps that need to be addressed before indexing is enabled: an Indian phone number on a US-targeted site, no named humans on the About page, broken blog post routes (6 × 404), a missing OG image, and no Privacy Policy.

The good news: most of these are fixable within one to two weeks of focused effort, and the site's technical foundation (Next.js App Router, next/image, next/font, canonical tags, good URL structure) is solid.

---

## Top 5 Critical Issues

| # | Issue | File | Fix Time |
|---|-------|------|---------|
| 1 | `robots.txt: Disallow: /` blocks all crawlers | `public/robots.txt` | 5 min |
| 2 | `robots: { index: false }` in layout.tsx — global noindex | `src/app/layout.tsx:57` | 2 min |
| 3 | Blog post pages don't exist — 6 internal links → 404 | `src/app/blog/[slug]/` | 1-2 weeks |
| 4 | OG image `/og-image.jpg` missing from `/public` | `public/` | 1-2 hours |
| 5 | Indian phone number (+91) on US-targeted site | `src/lib/site-config.ts:5` | 1 hour |

---

## Top 5 Quick Wins

| # | Action | Impact | Effort |
|---|--------|--------|--------|
| 1 | Fix robots.txt (`Allow: /`) | Unlocks all crawling | 5 min |
| 2 | Remove global noindex from layout.tsx | Enables indexing | 2 min |
| 3 | Create `/public/og-image.jpg` | Fixes all social previews | 1-2 hr |
| 4 | Add BreadcrumbList JSON-LD to Breadcrumb component | Rich results on all inner pages | 1-2 hr |
| 5 | Create `/public/llms.txt` | AI crawler guidance | 2 hr |

---

## Technical SEO — Score: 28/100

### Critical
- **robots.txt `Disallow: /`** — 100% of the site is blocked. Replace with `Allow: /`.
- **Global `robots: { index: false, follow: false }` in `layout.tsx:57`** — second independent blocking layer.
- **Homepage is `"use client"` with no metadata export** — inherits global noindex, cannot set page-specific title/OG tags. Split into Server Component wrapper + Client Component.

### High
- **OG image missing** — `/og-image.jpg` referenced in metadata but not in `/public`. Creates 404 on every page crawl.
- **6 blog post routes return 404** — crawl errors, wasted PageRank, sitemap integrity failure.
- **Contact form → 404** — `/api/contact` route handler doesn't exist. Every form submission silently fails.
- **No security headers** — missing CSP, HSTS, X-Frame-Options in `next.config.ts`.

### Medium
- **Sitemap lists non-existent URLs** — switch to dynamic `app/sitemap.ts` after fixing blog routes.
- **No `llms.txt`** — AI crawlers have no structured guidance.

### Low
- Non-standard `Host:` directive in robots.txt (remove it)
- LCP risk: hero image may lack `priority` prop

**Full details:** [findings/technical.md](findings/technical.md)

---

## Content Quality — Score: 28/100

### E-E-A-T Assessment

| Dimension | Score | Key Gap |
|-----------|-------|---------|
| Experience | 4/20 | Fictional dashboard, unverifiable testimonials, no real project screenshots |
| Expertise | 7/25 | Competent service copy, but zero author attribution anywhere |
| Authoritativeness | 3/25 | No press, no 3rd-party reviews, no social footprint |
| Trustworthiness | 14/30 | Transparent pricing ✓ but Indian phone, no Privacy Policy |

### Critical
- **+91 phone number** on US-targeted site — most damaging trust signal. Get a US virtual number ($10-25/mo).
- **All 6 blog posts 404** — blog is completely broken, 13 months stale.

### High
- **About page has no named humans** — no founder name, no team, no credentials.
- **Services overview is critically thin** — ~285 words vs. 800-word minimum.
- **Testimonials are unverifiable** — initials only, no photos, no links, one placeholder avatar ("TK").
- **Homepage stats are unverified** — fictional analytics dashboard, no source attribution.
- **No Privacy Policy or Terms of Service** — CCPA/CAN-SPAM compliance gap.

### Medium
- No author bylines on blog posts
- No Google Business Profile or Clutch profile linked

**Full details:** [findings/content.md](findings/content.md)

---

## On-Page SEO — Score: 55/100

### What Works
- Title template system correctly implemented: `%s | PinexaDigital`
- Meta descriptions distinct and present on all inner pages
- H1 tags are keyword-relevant and distinct across all pages (no duplication)
- Canonical tags set on all inner pages

### Issues
- **Homepage title is brand-first** — "PinexaDigital — Web Design & Development Agency" leads with an unknown brand name. Once the homepage has a Server Component wrapper, change to "Web Design Agency for US Businesses | PinexaDigital".
- **No keyword targeting beyond broad terms** — no city-level or vertical-specific targeting
- **Internal linking is shallow** — service pages don't reference blog posts or portfolio cases

---

## Schema / Structured Data — Score: 18/100

### What Exists
One site-wide `ProfessionalService` JSON-LD block in `layout.tsx`. No page-level schema anywhere.

### Missing Opportunities (by page)

| Page | Missing Schema | Priority |
|------|---------------|----------|
| All inner pages | BreadcrumbList | High |
| Homepage | WebSite, AggregateRating, Review | High |
| /services/web-design | Service, Offer, PriceSpecification | High |
| /services/seo | Service, Offer | High |
| /services/ecommerce | Service, Offer | High |
| /services/maintenance | Service, Offer | High |
| /pricing | ItemList, Offer, PriceSpecification | High |
| /blog | Blog, ItemList | Medium |
| /blog/[slug] | BlogPosting, Article, Person | Medium |
| /contact | ContactPage | Low |

### Issues with Existing Schema
- `areaServed: ["US", "IN"]` — remove "IN", use `{ "@type": "Country", "name": "United States" }`
- `telephone: "+91 78198 32001"` — update to US number
- Missing: `logo`, `sameAs`, `@id`, `address`, `foundingDate`
- No `AggregateRating` despite explicit 5-star claims on homepage

**Full details:** [findings/schema.md](findings/schema.md)

---

## Performance (CWV) — Score: 60/100 (estimated)

### What Works
- `next/image` — automatic WebP/AVIF, lazy loading, responsive sizing
- `next/font/google` — zero render-blocking requests
- Minimal third-party scripts (no tag managers or ad pixels)
- Next.js App Router SSR on all inner pages

### Risks
- **LCP:** Above-the-fold images may lack `priority` prop — verify and add where missing
- **INP:** Entire homepage is a Client Component with Framer Motion — heavy hydration on mobile
- **Unsplash external images** — dependency on external CDN for image delivery

---

## AI Search Readiness (GEO) — Score: 21/100

### AI Crawler Status: All Blocked
GPTBot, ClaudeBot, PerplexityBot, Google-Extended, OAI-SearchBot — all blocked by `Disallow: /` in robots.txt.

### Estimated Visibility
| Platform | Visibility |
|----------|-----------|
| Google AI Overviews | ~2/100 |
| ChatGPT | ~3/100 |
| Perplexity | ~2/100 |
| Bing Copilot | ~5/100 |

### Key Gaps
- No llms.txt
- Blog posts 404 — highest-citability content type is broken
- Content passages are 40-90 words (optimal: 134-167 words for AI citation)
- Zero named authorship — AI systems deprioritize anonymous content
- No off-site brand signals (YouTube, Reddit, Clutch, LinkedIn)

**Full details:** [findings/geo.md](findings/geo.md)

---

## Images — Score: 50/100

### What Works
- `next/image` used for all images with automatic optimization
- Alt text present on visible images

### Issues
- **OG image `/og-image.jpg` does not exist** — critical for social sharing
- Only 2 images on homepage — very sparse for a design agency
- Unsplash stock photos reduce authenticity (recognizable to repeat visitors)
- No real portfolio screenshots or team photos

---

## Site Architecture

```
pinexadigital.com/          ✓ (but noindex + client component)
├── services/               ✓
│   ├── web-design/         ✓
│   ├── seo/                ✓
│   ├── ecommerce/          ✓
│   └── maintenance/        ✓
├── pricing/                ✓
├── portfolio/              ✓ (content unknown)
├── about/                  ✓
├── contact/                ✓ (form broken — no API route)
├── blog/                   ✓ (listing only)
│   ├── [slug]/             ✗ — ALL 404 (6 broken links)
├── sitemap.xml             ✓ (but contains 404 URLs)
├── robots.txt              ✗ — Disallow: / (blocks everything)
├── og-image.jpg            ✗ — MISSING
└── llms.txt                ✗ — MISSING
```

---

## Competitive Benchmark

For a new US web design agency, a typical score after fixes would be **60-70/100**. The technical foundation here (Next.js, clean architecture, good metadata) would place this in the 65-70 range after Phase 1 fixes, putting it ahead of many competitors. The site can reach 75+ after Phase 3 improvements (schema, content expansion, blog launch).

---

## What Potential Score Looks Like After Each Phase

| Phase | Actions | Projected Score |
|-------|---------|----------------|
| Current | — | **36/100** |
| After Phase 1 | Fix robots, noindex, OG image, US phone, Privacy Policy | **58/100** |
| After Phase 2 | Blog posts live, About page named, homepage split | **67/100** |
| After Phase 3 | Schema complete, content expanded, security headers | **76/100** |
| After Phase 4 | GBP, Clutch, YouTube, case studies | **82+/100** |
