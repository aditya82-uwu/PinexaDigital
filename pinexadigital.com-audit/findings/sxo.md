# Search Experience (SXO) Findings — pinexadigital.com

**SXO Gap Score: 56/100** (separate from the SEO Health Score in `technical.md`) | Audit date: 2026-07-04

---

## Summary

PinexaDigital's commercial pages (`/`, `/services/web-design`, `/services/seo`, `/pricing`) are **structurally close** to the page types Google rewards for their target keywords — they already have process breakdowns, FAQs, tiered pricing, and testimonials, which many competitors lack. The gap is not "wrong page type," it is **thin proof and missing price anchors at the exact moments searchers compare options**:

1. **Every one of the 4 keywords analyzed shows a directory/listicle ("Top 10 agencies", "Best SEO companies") competitor as a top-10 result** (40–70% of the SERP), yet the site has zero comparison or "why us vs. other agencies" content anywhere.
2. **"SEO agency for small business" searchers see explicit monthly price anchors** (e.g. "$499/mo") in competing snippets — PinexaDigital shows no SEO retainer price at all, only one-time web-design package prices.
3. **The Portfolio page — the site's proof-of-work page — contains no images of the work it describes.** Only the logo renders; the 8 "live demo" cards and 6 client-result stats are text-only.
4. The site is currently **fully de-indexed** (robots.txt `Disallow: /` + global `noindex`, per `technical.md` items #1–#2). Every finding below is prospective — it describes what will matter once crawlability is fixed, not what is currently costing rankings, since there are currently no rankings to lose.

---

## Page Inventory & Type Classification (all 11 pages)

| Page | Taxonomy Type | Word Count | Schema Present | Notes |
|---|---|---|---|---|
| `/` (Home) | Landing Page | 468 | WebSite, ProfessionalService, BreadcrumbList | Hero, trust strip, testimonials, process — good structural fit |
| `/services` | Hybrid (Service + Content) | 1,001 | WebSite, ProfessionalService, BreadcrumbList | Hub page, no FAQ |
| `/services/web-design` | Service Page | 804 | + Service | Process + FAQ + on-page price ($997) |
| `/services/seo` | Service Page | 868 | + Service | Process + FAQ, no price shown |
| `/services/ecommerce` | Service Page | 828 | + Service | Not deep-dived (out of scope for this pass) |
| `/services/maintenance` | Service Page | 722 | + Service | Not deep-dived |
| `/pricing` | Landing Page (pricing subtype) | 250 | + ItemList (Offer/price) | 3 tiers, FAQ, no testimonials |
| `/portfolio` | Service Page (portfolio/proof) | 335 | WebSite, ProfessionalService, BreadcrumbList | **Zero images** despite being the proof page |
| `/about` | Service Page (About/E-E-A-T) | 787 | WebSite, ProfessionalService, BreadcrumbList | No team photos/credentials found |
| `/contact` | Landing Page (contact) | 88 | WebSite, ProfessionalService, BreadcrumbList | Minimal, appropriate for type |
| `/blog` | Blog Post (index) | 263 | + Blog | 6 posts, dates non-chronological (see Finding #9) |

---

## SERP-Backwards Analysis: 4 High-Intent Keywords

Data source: WebSearch (organic snippets/titles only — no PAA, ads, or featured-snippet capture available in this environment; see Limitations).

### 1. Keyword: "web design agency" → mapped to Homepage

- **SERP dominant type:** Landing Page / Service Page hybrid, ~70% confidence. Results: Coalition Technologies, DD.NYC, Americaneagle, e9digital, Big Orange Planet, Dupont Creative — all agency landing pages leading with social proof ("hundreds of clients have raved about Coalition's services on Clutch, Google, Facebook"), portfolio, and awards. Minority: directory/inspiration sites (Awwwards, Built In NYC, Dribbble).
- **Target page type:** Landing Page — **ALIGNED** structurally (hero, "Trusted by 50+ US businesses," stats, 4-step process, 3 testimonials, CTA).
- **Verdict:** ALIGNED / MEDIUM gap on authority signals — competitors cite independent, third-party review platforms (Clutch, Google, Facebook); PinexaDigital shows only an on-page schema rating (5.0 from 3 reviews) with no external badge.
- **Intent-match score: 72/100**
- **User stories:**
  1. As a business owner comparing agencies, I want to see why this one beats "hundreds of similar businesses," because I've been burned by generic template sites before, but I'm blocked by the lack of verifiable third-party review badges — the homepage shows only 3 testimonials and a 5.0/3-review count. *(Source: competitor snippet "raved about... on Clutch, Google, Facebook")*
  2. As a founder researching agencies, I want a credible visual portfolio, because a real screenshot builds more trust than copy, but I'm blocked because the homepage uses generic stock Unsplash photography ("team at work," "design process") instead of real project imagery. *(Source: parsed image alt-text audit)*

### 2. Keyword: "small business website design" → `/services/web-design`

- **SERP dominant type:** Mixed/fragmented (~50%), split between agency Service Pages (Straight North, Clutch Creative) and directory/listicle Comparison pages ("Top 10 Affordable Small Business Web Design Agencies," Clutch.co rankings, DesignRush city lists). Snippets surface concrete numbers: projects "start around $5,000," timeline "6–10 weeks."
- **Target page type:** Service Page — matches half the SERP; **no comparison/differentiation content** to compete with the listicle half.
- **Verdict:** MEDIUM mismatch — good process/FAQ/pricing structure, but missing competitive positioning and market-rate context.
- **Intent-match score: 64/100**
- **User stories:**
  1. As a small business owner budgeting for a site, I want to see how PinexaDigital's price compares to typical market rates, because search results already told me "~$5,000, 6–10 weeks" before I clicked, but the page shows "$997 one-time" with no market-context framing, so I can't judge if it's a good deal. *(Source: competitor snippet "$5,000... 6–10 weeks")*
  2. As a business owner who has already seen 3 "Top 10 agencies" ranked lists, I want a "why choose us" or comparison section, because that's the format Google is showing me at position 1–3, but I'm blocked by the total absence of comparison content anywhere on the site. *(Source: DesignRush/Clutch.co/ParallelHQ listicle dominance)*

### 3. Keyword: "SEO agency for small business" → `/services/seo`

- **SERP dominant type:** Comparison/listicle-leaning mix (~55%): DesignRush, Semrush agency directories, Thrive "11 Best SEO Companies," First Page Sage — alongside pricing-forward service pages ("Starting at $499/mo," "10+ years of results").
- **Target page type:** Service Page — process, FAQ ("Do you guarantee first-page rankings? No —"), no pricing shown.
- **Verdict:** HIGH mismatch — the page's most commercially decisive gap: **no SEO retainer price exists anywhere on the site**, and the one ranking-proof data point ("Coastal Legal Partners — #1 keyword ranking") lives only on `/portfolio`, unlinked from this page.
- **Intent-match score: 52/100**
- **User stories:**
  1. As a budget-conscious business owner, I want to see a concrete monthly SEO price, because a competing result already anchored me at "$499/mo," but I'm blocked — neither `/services/seo` nor `/pricing` shows any recurring SEO price, only one-time web-design packages. *(Source: competitor snippet "Starting at $499/mo")*
  2. As a skeptical owner who's been burned by SEO promises, I want proof of real ranking results, because competing listicles lead with "10+ years of results" and named case studies, but I'm blocked because `/services/seo` has zero embedded case studies — the one relevant proof point sits on `/portfolio` with no link from this page. *(Source: parsed `/services/seo` vs. `/portfolio` "Client Results" cross-check)*

### 4. Keyword: "web design pricing packages" → `/pricing`

- **SERP dominant type:** Mixed between agency pricing/package pages (Sprout Media, Foxxr, Nora Kramer — structurally similar tiered cards) and blog-style cost-breakdown guides (Clutch pricing guide, Knapsack Creative, Atomic Revenue) citing tiers: "$500–$2,000 basic," "$5,000–$20,000 semi-custom," "$30,000–$100,000+ custom."
- **Target page type:** Landing Page (pricing subtype) — **ALIGNED** structurally (3 tiers, feature checklists, FAQ), a genuine strength since transparent pricing is rare in this vertical.
- **Verdict:** MEDIUM mismatch — right format, but thin depth (250 words vs. the longer cost-guide norm) and **zero trust signals on the page at the moment of highest purchase anxiety** (no testimonials, guarantees, or client logos next to the price).
- **Intent-match score: 61/100**
- **User stories:**
  1. As a first-time website buyer, I want to understand typical market rates ($500–$100k+ per search results) so I can judge if $997–$2,497 is fair, but I'm blocked because the pricing page presents its tiers in isolation with no market-context framing. *(Source: competitor snippet cost breakdown $500–$100,000+)*
  2. As a cautious buyer about to commit 50% upfront, I want trust signals next to the price table, because that's when purchase anxiety peaks, but I'm blocked — `/pricing` has zero testimonials or guarantees, only feature bullets and a payment-terms FAQ. *(Source: parsed `/pricing` content — no testimonial component)*

---

## Gap Analysis (SXO Gap Score: 56/100)

| Dimension | Score | Evidence |
|---|---|---|
| Page Type (0–15) | 10/15 | 3 of 4 keywords show ALIGNED-to-MEDIUM page type match; SEO retainer pricing model gap is the one HIGH-severity type mismatch |
| Content Depth (0–15) | 9/15 | Service pages 722–1,001 words (adequate); `/pricing` (250) and `/contact` (88) thin relative to SERP norm for pricing/cost-guide content |
| UX Signals (0–15) | 11/15 | Clear, distinct CTAs per page ("Get a free quote," "Start your project," "Request free audit"); process steps well laid out; no interactive quote/cost tool |
| Schema Markup (0–15) | 10/15 | Strong ProfessionalService/Service/ItemList/BreadcrumbList/aggregateRating coverage; **FAQPage schema missing** on 3 pages with visible FAQ accordions |
| Media Richness (0–15) | 4/15 | Only the logo image renders on `/services/web-design`, `/services/seo`, `/pricing`, `/portfolio`, `/about`; homepage relies on generic stock Unsplash photos; portfolio has 0 screenshots of its own demos |
| Authority Signals (0–15) | 7/15 | 3 named testimonials + 5.0/3-review schema rating is a start, but thin vs. competitor signals ("10+ years," "150,000 teams," third-party review badges); no case-study depth |
| Freshness (0–10) | 5/10 | Sitemap lastmod current (2026-06-28 per `technical.md`), but blog post dates are non-chronological (2025/2026 out of order), reading as placeholder content |
| **Total** | **56/100** | |

---

## Persona Scoring

| Persona | Journey Stage | Relevance | Clarity | Trust | Action | Total | Rating |
|---|---|---|---|---|---|---|---|
| Comparison Shopper ("Top 10 agencies" researcher) | Consideration | 8/25 | 10/25 | 8/25 | 10/25 | **36/100** | Critical Mismatch |
| Budget-Conscious SMB Owner | Consideration | 20/25 | 20/25 | 12/25 | 16/25 | 68/100 | Good |
| Skeptical/Risk-Averse Evaluator | Decision | 22/25 | 18/25 | 10/25 | 18/25 | 68/100 | Good |
| Local Service Business Owner | Awareness/Consideration | 20/25 | 20/25 | 10/25 | 18/25 | 68/100 | Good |
| Non-Technical Founder / New Venture | Awareness | 22/25 | 20/25 | 14/25 | 20/25 | 76/100 | Good |

**Weakest persona: Comparison Shopper (36/100).**
Top issue: no comparison, differentiation, or third-party trust-badge content exists anywhere on the site, yet this persona type (driven by "Top 10 agencies" / "Best SEO companies" listicles) appears in 3 of the 4 SERPs analyzed.
Recommended fix: add a concise "Why PinexaDigital vs. a typical agency" comparison block (ownership of code, fixed pricing vs. hourly, timeline, no template lock-in) to the homepage and `/services/web-design`.

**Systemic issue:** Trust dimension is the weakest score across every persona (8–14/25) — driven by low review volume (3 reviews), no third-party badges, and no case-study depth.

---

## Findings

### 1. Site-wide de-indexing blocks all SXO gains (cross-ref)
**Severity:** Critical
**Description:** `robots.txt` (`Disallow: /`) and global `noindex, nofollow` in `layout.tsx` prevent Googlebot from crawling any page (full detail in `technical.md` #1–#2). Every SXO finding in this report is prospective.
**Recommendation:** Treat the `technical.md` crawlability fixes as a hard prerequisite before investing in any SXO work below.

### 2. No comparison/differentiation content anywhere on the site
**Severity:** High
**Description:** All 4 analyzed keywords show a directory/listicle ("Top 10...", "Best SEO companies...") competitor in the top results (40–70% of SERP), but the site has zero "vs. other agencies" or comparison-table content.
**Recommendation:** Add a "Why PinexaDigital" comparison block to the homepage and `/services/web-design` covering ownership of code, fixed pricing, timeline, and no-template positioning — differentiators the site already has but doesn't foreground competitively.

### 3. No SEO retainer pricing shown anywhere
**Severity:** High
**Description:** `/services/seo` and `/pricing` cover only one-time web-design packages. Competing results for "SEO agency for small business" surface explicit monthly price anchors (e.g., "$499/mo").
**Recommendation:** Add an SEO/Growth monthly retainer tier to `/pricing` and link it from the `/services/seo` CTA ("Request free audit").

### 4. Portfolio page has zero visual proof
**Severity:** High
**Description:** `/portfolio`'s "Live Demo Showcase" (8 industry demos) and "Client Results" (6 metrics) sections are entirely text-based — parsed images show only the site logo. For a page whose sole purpose is visual proof of work, this is a critical gap.
**Recommendation:** Add real screenshot thumbnails or embedded live-preview iframes for each of the 8 demo cards and visual context for the 6 client-result stats.

### 5. Generic stock photography undermines authenticity
**Severity:** Medium
**Description:** Homepage images are Unsplash stock photos ("PinexaDigital team at work," "Design process") rather than real team or project photography — a credibility risk for a trust-dependent service purchase.
**Recommendation:** Replace with real team/work photos; at minimum use niche-specific custom photography rather than generic stock.

### 6. FAQ content lacks FAQPage schema
**Severity:** Medium
**Description:** `/services/web-design`, `/services/seo`, and `/pricing` all contain well-structured, visible Q&A accordions (5–6 questions each), but schema arrays for these pages contain no `FAQPage` type — only WebSite/ProfessionalService/Service/BreadcrumbList/ItemList.
**Recommendation:** Add `FAQPage` JSON-LD matching the visible accordion content on all three pages. Hand off to `/seo schema` for generation.

### 7. Pricing page has no trust signals at the point of highest purchase anxiety
**Severity:** Medium
**Description:** `/pricing` shows 3 tiered cards and an FAQ but zero testimonials, reviews, guarantees, or client logos, despite the homepage already having 3 strong testimonials it could reuse.
**Recommendation:** Insert a condensed "Trusted by 50+ businesses / 5.0 avg. rating" strip directly above or beside the pricing cards.

### 8. Review volume is thin relative to competitor authority signals
**Severity:** Medium
**Description:** `ProfessionalService` schema shows `aggregateRating` 5.0 from only 3 reviews sitewide, versus competitor claims like "10+ years of results" or "150,000 teams."
**Recommendation:** Actively solicit and publish more client reviews (on-site + Google Business Profile); cross-ref `/seo local` for GBP review strategy.

### 9. Blog publish dates are non-chronological
**Severity:** Low
**Description:** The 6 blog posts show dates spanning March 2025–June 2026 in non-chronological display order (a June 2026 post appears above two 2025 posts), reading as placeholder/dummy content and weakening freshness signals.
**Recommendation:** Correct publish dates to reflect real chronological order and ensure `dateModified` is set in `BlogPosting` schema.

### 10. Existing cost-guide blog post is disconnected from `/pricing`
**Severity:** Low
**Description:** The blog post "How much does a website cost in 2026?" already matches the blog/cost-guide format that dominates half the "web design pricing packages" SERP, but it isn't cross-linked from `/pricing`.
**Recommendation:** Add contextual links between `/pricing` and this post in both directions to capture transactional and informational intent together.

---

## Priority Actions

1. Fix crawlability (Finding #1 — prerequisite for everything else; owned by `technical.md`).
2. Add comparison/differentiation content — addresses the weakest persona (Comparison Shopper, 36/100) and Finding #2.
3. Add SEO retainer pricing (Finding #3) — highest-severity keyword-level gap ("SEO agency for small business," 52/100).
4. Add real visual proof to `/portfolio` (Finding #4) — the site's biggest single-dimension gap (Media Richness, 4/15).
5. Add FAQPage schema (Finding #6) and cross-link the pricing blog post (Finding #10) — low-effort, quick wins.

---

## Limitations

- WebSearch was used instead of a live SERP-scraping API (no DataForSEO connector available in this environment). It returns organic titles/snippets only — true People-Also-Ask boxes, ad copy, featured-snippet format, and AI Overview citations could not be directly observed and were inferred from snippet text and result-title patterns. This is a lower-precision proxy than a live SERP capture.
- Competitor word counts and content depth were estimated from search snippets and known page types, not from fetching every competitor page in full.
- The site is currently de-indexed (see `technical.md`), so there is no live ranking or Search Console data to validate any of these findings against real query performance — this analysis is prospective.
- No GA4/GSC behavioral data was available to confirm actual on-page user drop-off; persona and gap scores are qualitative judgments based on parsed HTML/text content only.
- Local-intent / Google Business Profile signals were not directly queried; flagged as a follow-up for `/seo local`.
- `/services/ecommerce` and `/services/maintenance` were classified but not put through full SERP-backwards analysis (out of scope per the requested keyword set); recommend a follow-up pass if ecommerce/maintenance keywords become a priority.

Recommend `/seo content` for deeper E-E-A-T remediation (Findings #5, #8) and `/seo schema` for FAQPage generation (Finding #6).
