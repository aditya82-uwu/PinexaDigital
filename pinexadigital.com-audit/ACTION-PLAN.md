# PinexaDigital.com — SEO Action Plan
**Generated:** 2026-07-04 | **Current Score:** 38/100 | **Quality-only potential once unblocked:** ~65-70/100 | **Target:** 82+/100

---

## Phase 1: Critical Fixes (do today)

These five items are the entire reason the score hasn't moved since the last audit. Nothing in Phase 2-4 will have any real-world effect until #1 ships.

- [ ] **Fix `src/app/robots.ts`** — change `rules: { userAgent: "*", disallow: "/" }` to `rules: { userAgent: "*", allow: "/" }` (or remove the override entirely). Redeploy. Verify with `curl https://www.pinexadigital.com/robots.txt`. *Effort: 15 min. Impact: unblocks everything — est. +35-40pt across Technical/On-Page/GEO once crawlers return.*
- [ ] **Fix `SITE.rootDomain`** in `src/lib/site-config.ts` — change `"pinexadigital.com"` to `"www.pinexadigital.com"` so canonical tags, `sitemap.xml`, and OG/Twitter URLs all point at the actually-served host instead of one that 308-redirects. *Effort: 5 min, one line.*
- [ ] **Remove or fix the site-wide `AggregateRating`/`Review` schema** in `layout.tsx` — currently self-authored, unverifiable, and a real Google rich-result policy risk. Either drop it until real third-party reviews exist, or source from a verifiable platform (Google Business Profile, Clutch) and add `datePublished`. *Effort: 15 min (remove) to a few days (source real reviews).*
- [ ] **Fix or remove the broken `sameAs` links** — both the LinkedIn (`/company/pinexadigital`) and Twitter/X (`/pinexadigital`) URLs in the schema return 404. A broken claim is worse than no claim. *Effort: 15 min (remove) or 2-4 hrs (create real profiles).*
- [ ] **After deploying the above:** submit the site for re-crawl in Google Search Console and Bing Webmaster Tools, since the site has likely accumulated zero indexed pages during the outage.

---

## Phase 2: High-Impact Improvements (Weeks 2-3)

- [ ] Add real screenshots to `/portfolio` — currently only the logo renders on the site's dedicated proof-of-work page.
- [ ] Add named human authorship — a founder/team bio with credentials and a real LinkedIn URL on `/about`, plus `Person` schema attribution on blog posts (currently Organization-only).
- [ ] Replace the `+91 78198 32001` phone number with a US-based number (Google Voice, VoIP, or toll-free) sitewide — contradicts the site's US-market positioning in copy and schema alike.
- [ ] Add the 6 live blog posts to `src/app/sitemap.ts` dynamically (import from `blog-data.ts` instead of a hardcoded route array).
- [ ] Add `FAQPage` schema to `/services/web-design`, `/services/seo`, and `/pricing` — visible Q&A content already exists, just needs the schema wrapper (no SERP rich-result benefit post-May-2026 policy change, but valuable for AI/GEO citation).
- [ ] Fix the duplicate `"| PinexaDigital"` title suffix on `services/seo/page.tsx` and `services/maintenance/page.tsx`.
- [ ] Add a "Why PinexaDigital vs. a typical agency" comparison block to the homepage and `/services/web-design` — 3 of 4 analyzed keywords show a directory/listicle competitor dominating the SERP, and the site currently has zero comparison content.
- [ ] Add an SEO monthly retainer price to `/pricing` and link it from `/services/seo` — competitors anchor at explicit prices like "$499/mo" while this site shows only one-time web-design packages.

---

## Phase 3: Content & Authority (Month 2)

- [ ] Source and date the homepage headline stats (+127% growth, 50+ businesses, 5.0 stars, 40% traffic lift, 98% satisfaction) — currently bare marketing claims with no methodology or link.
- [ ] Add a trust-signal strip (rating/testimonials) directly beside the `/pricing` tier cards — currently zero trust signals at the point of highest purchase anxiety.
- [ ] Expand `/pricing` content depth (currently 250 words) with a post-purchase process narrative and at least one linked case study per tier.
- [ ] Add a Content-Security-Policy header to `next.config.ts` (4 of 5 standard security headers already ship; CSP is the missing one).
- [ ] Replace generic stock photography (Unsplash "team at work" images) with real team/project photos.
- [ ] Fix mobile nav tap-target sizing — theme toggle and hamburger menu measure 32x32px sitewide, below the 44-48px accessibility guideline.
- [ ] Add `fetchpriority="high"` to the homepage hero/LCP image to close the borderline mobile LCP gap (2.7s lab estimate, right at the 2.5s threshold).
- [ ] Correct non-chronological blog post publish dates.
- [ ] Add an IndexNow key file for faster Bing/Yandex re-indexing once Phase 1 ships.

---

## Phase 4: Monitoring & Iteration (Ongoing)

- [ ] Once real traffic accumulates, configure a PageSpeed Insights API key to validate the lab-only LCP estimate against real CrUX field data.
- [ ] Build off-site authority signals in priority order: verified LinkedIn/Twitter profiles (prerequisite for the `sameAs` fix above) → Google Business Profile → Clutch.co listing → YouTube channel (highest AI-citation correlation of any off-site signal checked).
- [ ] Configure Moz or Bing Webmaster API keys to unlock real backlink discovery beyond Common Crawl's quarterly-lag snapshot (currently Tier 0 — no measurable profile detected, expected for a new site).
- [ ] **Re-run this audit after Phase 1 ships** to confirm indexation recovery and re-baseline all category scores — expect Technical, On-Page, and GEO scores to jump substantially once the robots.txt fix takes effect and Google/AI crawlers re-discover the already-improved content.

---

## Why the score didn't move this cycle

Five days ago, this site scored 36/100 because almost everything was broken: schema was incomplete (18/100), content was thin (28/100), and the site was fully blocked from crawling. Today, schema (78/100), content (48/100), and AI readiness (32/100) have all improved substantially — real engineering work happened. But the score is 38/100 today because the one blocking issue, `robots.txt: Disallow: /`, was never touched. **The site is exactly as invisible to Google today as it was on day one of the last audit — none of the improvement work has had any effect yet, because it's never been allowed to be seen.** Fixing Phase 1 item #1 is the highest-leverage single action available on this entire list.
