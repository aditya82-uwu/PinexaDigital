# AI Search Readiness (GEO) Findings — pinexadigital.com
**Score: 32/100** | Audit date: 2026-07-04 | Previous audit: 2026-06-29 (score 21/100)

---

## Summary

The single highest-impact blocker from the 2026-06-29 audit remains **unfixed**: `robots.txt` still disallows every crawler, AI or otherwise. This makes the site invisible to GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, and Google-Extended regardless of any content quality improvements. Since the last audit the site has made real content-side progress — `/llms.txt` now exists, the blog is live with dated posts (previously 404), and `/services`, `/pricing`, and `/about` have been substantially expanded with FAQ-style Q&A sections. However, none of this can be discovered or cited while `Disallow: /` is in effect, and new integrity problems have surfaced: the JSON-LD `sameAs` links to LinkedIn and Twitter/X both resolve to 404 — these entity-verification signals are not just weak, they are actively broken. Core marketing statistics (+127% traffic growth, 50+ businesses, 5.0 stars, 40% avg. traffic increase) remain bare, unsourced, undated claims embedded only in on-page copy and a self-authored `aggregateRating` schema block with 3 reviews — nothing a third-party AI system can independently verify.

---

## Platform Visibility Estimate (current state)

| Platform | Estimated Visibility | Primary Blocker |
|----------|---------------------|-----------------|
| Google AI Overviews | ~2/100 | robots.txt total disallow |
| ChatGPT (browsing/search) | ~4/100 | robots.txt + broken sameAs entity links |
| Perplexity | ~3/100 | robots.txt + no off-site mentions |
| Bing Copilot | ~5/100 | robots.txt |

---

## AI Crawler Access Status

Verified via `curl https://www.pinexadigital.com/robots.txt` on 2026-07-04:

```
User-Agent: *
Disallow: /

Sitemap: https://pinexadigital.com/sitemap.xml
```

| Crawler | Status | Reason |
|---------|--------|--------|
| GPTBot | BLOCKED | `Disallow: /` under `User-agent: *` — no bot-specific allowlist exists |
| OAI-SearchBot | BLOCKED | same |
| ClaudeBot | BLOCKED | same |
| PerplexityBot | BLOCKED | same |
| Google-Extended | BLOCKED | same |
| Regular Googlebot/Bingbot | BLOCKED | same — this also suppresses classic organic search, not just AI |

**This is identical to the rule flagged in the 2026-06-29 audit. Five days later, in production, it is still live.** Every other finding in this report is secondary until this is corrected.

---

## llms.txt Status: Present (new since last audit)

`curl https://www.pinexadigital.com/llms.txt` returns 200 with a well-formed file: agency summary, 10 linked pages with one-line descriptions, and an "AI Usage" line ("Content may be cited with attribution. Contact: contact@pinexadigital.com"). No RSL 1.0 licensing block is present — the AI Usage line is informal prose, not a machine-readable RSL license reference. Minor gap; not urgent relative to the robots.txt issue.

---

## Passage-Level Citability of Key Claims

Checked against `extracted_text` (trafilatura-stripped) for homepage, `/services`, `/pricing`, `/about`.

| Claim | Location | Sourced/Dated? | Verifiable? |
|-------|----------|-----------------|-------------|
| "+127% Growth" (traffic) | Homepage hero stat | No — no methodology, date range, client, or link | No |
| "Trusted by 50+ US businesses" / "50+ Projects" | Homepage, About | No — no client list, logos, or case-study links | No |
| "5.0 Stars, Client avg." | Homepage; also `aggregateRating` schema (3 reviews) | No — reviewCount is only 3, no link to Google Business Profile/Clutch/Trustpilot where reviews could be independently checked | No |
| "40% avg. ↑ Traffic after launch" | Homepage | No | No |
| "98% Client satisfaction" | About page stat | No | No |
| Testimonials (Sarah M., James R., Diana L.) | Homepage, JSON-LD `review` | First-name + last-initial + company only; no external link, photo, or verification | No |
| Website cost figures ($997–$5,000 typical) | Blog: "How much does a website cost in 2026?" | Internally consistent with pricing page; presented as first-party pricing, reasonably self-contained and citable as a direct-answer passage | Partially — no third-party benchmarking data cited |

None of the four headline stats used to build trust (traffic growth, business count, star rating, satisfaction %) carry a source, a date, or a link to underlying evidence. For AI systems that weight citability on verifiability, these read as marketing copy, not citable facts. This was flagged in principle in the prior audit; it remains true today with the same specific numbers still on the page.

**What did improve:** the blog post "How much does a website cost in 2026?" opens with a direct, self-contained answer in the first two sentences ("Websites can cost anywhere from $0 on a free DIY plan to $100,000... a professionally built custom website runs between $997 and $5,000") — this is a legitimately extractable AI-citation passage, well within the 134–167 word optimal range for the section. The `/services` and `/pricing` pages now include "Common questions" / "Frequently asked questions" sections with genuine Q&A pairs (e.g., "Do you work with businesses outside the US?", "How is your pricing structured?") — good structural progress, but **no `FAQPage` JSON-LD schema wraps any of it**, so the machine-readable signal is missing even though the human-readable structure exists.

---

## Authority & Entity Signal Verification

- **sameAs links are broken, not just thin.** `ProfessionalService` JSON-LD on every page lists `sameAs: ["https://www.linkedin.com/company/pinexadigital", "https://twitter.com/pinexadigital"]`. Verified directly:
  - `https://www.linkedin.com/company/pinexadigital` → **HTTP 404**
  - `https://twitter.com/pinexadigital` → redirects to `https://x.com/pinexadigital` → **HTTP 404**
  - Neither profile is linked anywhere in the visible page HTML (no footer/header social icons found) — these are schema-only claims about profiles that do not exist. This is materially worse than having no `sameAs` at all: an AI entity-resolution system that checks these links will find dead ends, which can suppress trust rather than merely fail to add it.
- **Phone number still `+91 78198 32001`** in the `ProfessionalService` schema `telephone` field, despite the site's "areaServed: United States" claim and US-market positioning throughout copy. This contact-geography mismatch was flagged in the prior audit and is unchanged.
- **No named human author** anywhere. Blog posts use `BlogPosting` schema with `author: {"@type": "Organization", "name": "PinexaDigital"}` — no `Person` entity, no bio, no credentials. E-E-A-T-sensitive AI citation systems deprioritize anonymous/organization-only authorship.
- **No detectable YouTube, Reddit, Wikipedia, or Clutch presence** — the strongest-correlating off-site brand signals (YouTube ~0.737 correlation with AI citation) remain entirely absent.

---

## Structural Readiness for AI Overviews / ChatGPT / Perplexity

- Positive: `/services`, `/pricing` now have genuine Q&A sections with question-phrased subheadings; blog posts lead with direct-answer opening sentences; numbered process steps (Discovery → Design → Build) are clearly enumerated; specific technology names (Next.js, Shopify, WooCommerce, Stripe) are used precisely rather than vaguely.
- Gap: No `FAQPage` schema on any page with visible FAQ content — a low-effort, high-leverage fix now that the content exists.
- Gap: Homepage itself has no Q&A structure — it's the page most likely to be used for an AI Overview snapshot and currently reads as pure marketing copy (stat blocks, testimonials, CTAs) with no direct-answer passage a generative engine could lift cleanly.
- Technical accessibility of content itself is good: all pages tested (`home`, `/services`, `/pricing`, `/about`, `/blog`, a blog post) returned `is_spa: False` with full content present in the raw, pre-JS HTML — this is server-rendered and would be trivially crawlable by any bot **if robots.txt allowed it**. This is the frustrating core of the finding: the technical foundation for AI crawling is fine, and it is entirely negated by one two-line robots.txt rule.

---

## Critical

### 1. robots.txt still blocks every crawler — unresolved from prior audit
`User-agent: * / Disallow: /` blocks GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, and standard Googlebot/Bingbot alike. Flagged 2026-06-29; verified still live in production on 2026-07-04. No other fix on this list has any effect until this is corrected.

**Fix:** Replace with an explicit allow policy (e.g., permit `/`, disallow only non-content routes like `/api/`, `/_next/`), verify via Google Search Console URL Inspection and a fresh `curl` after deploy. Effort: 15–30 minutes. Estimated impact: +35–40 pts.

---

### 2. sameAs entity links point to non-existent profiles (404s)
Both `sameAs` URLs in the `ProfessionalService` schema (LinkedIn company page, Twitter/X) return HTTP 404 and are not linked anywhere in visible page HTML. This is a false/stale structured-data claim, not just a missing signal.

**Fix:** Either create and populate the LinkedIn company page and X account and confirm they resolve before redeploying the schema, or remove the `sameAs` array entirely until real profiles exist. A broken claim is worse than an absent one. Effort: 2–4 hours (create profiles) or 15 minutes (remove field). Estimated impact: +6–10 pts, prevents entity-trust penalty.

---

## High

### 3. Headline stats (+127%, 50+, 5.0, 40%, 98%) remain unsourced and undated
Same marketing statistics as the prior audit, still with no methodology, date, client reference, or link to verifiable evidence (e.g., a case study, a Google Business Profile, Clutch reviews).

**Fix:** For each stat, add one sentence of provenance — e.g., "Based on Google Analytics data across 12 client sites launched Jan–Jun 2026" — and/or link the star rating to an external, checkable review platform (Google Business Profile or Clutch). Effort: half-day. Estimated impact: +6 pts.

### 4. No FAQPage schema despite existing FAQ content
`/services` and `/pricing` now have genuine, well-formed Q&A content ("Common questions" / "Frequently asked questions") but it is not wrapped in `FAQPage` JSON-LD anywhere.

**Fix:** Add `FAQPage` schema mirroring the existing on-page Q&A on `/services`, `/pricing`, and add an FAQ block to the homepage and `/about`. Low effort since the content already exists. Effort: half-day. Estimated impact: +6–8 pts.

### 5. No named human authorship
Blog posts attribute authorship to the `PinexaDigital` organization only — no `Person` schema, bio, or credential anywhere on the site.

**Fix:** Add a named founder/author bio with headshot, 2–3 sentence credential statement, and a working LinkedIn profile URL; add `Person` schema linked from each `BlogPosting`. Effort: half-day content + 1 hour schema. Estimated impact: significant for blog citability, compounds with fix #2.

### 6. +91 phone number contradicts "areaServed: United States"
Unchanged from prior audit. Undermines US-entity classification for AI systems using contact geography as a trust/relevance signal.

**Fix:** Provision a US virtual number (Google Voice, OpenPhone, etc.) and update the `telephone` field in `ProfessionalService` schema and all visible contact points. Effort: 1 hour. Estimated impact: +4 pts.

---

## Medium

### 7. Homepage lacks any direct-answer/Q&A passage
Every other key page (`/services`, `/pricing`, blog) now has a self-contained answer block; the homepage — the page most likely to be crawled and surfaced first — is still pure marketing copy with no passage a generative engine could cleanly extract as a direct answer.

**Fix:** Add one FAQ-style block near the top of the homepage answering "What does PinexaDigital do and who is it for?" in 134–167 words. Effort: 2 hours. Estimated impact: +4 pts.

### 8. No off-site brand signals (YouTube, Reddit, Wikipedia, Clutch)
Zero detectable presence across the highest-correlating brand-citation platforms; YouTube alone correlates ~0.737 with AI citation frequency.

**Fix (priority order):** YouTube channel (3–5 short videos answering blog-post questions) → Clutch.co verified profile → Reddit participation in r/smallbusiness, r/webdev → LinkedIn company page (once real, matches fix #2). Effort: 2–4 weeks, lagging impact. Estimated impact: +7 pts.

---

## What Works (carried forward / new)

- `/llms.txt` now present and well-formed (new since 2026-06-29).
- Blog is live with dated, working posts — previously all 404 (fixed).
- `/services`, `/pricing`, `/about` substantially expanded with specific, self-contained answer passages and genuine FAQ sections (fixed).
- All pages are server-side rendered — `is_spa: False` across homepage, services, pricing, about, blog, and a blog post — meaning technical crawlability is not the bottleneck once robots.txt is fixed.
- Sitemap.xml is valid, complete, and correctly referenced from robots.txt.
- `BlogPosting` schema includes `datePublished`/`dateModified` — good freshness signal, once discoverable.

---

## Impact Summary

| Fix | Effort | GEO Impact |
|-----|--------|------------|
| Fix robots.txt `Disallow: /` | 15–30 min | +35–40 pts |
| Fix or remove broken sameAs links | 15 min–4 hrs | +6–10 pts |
| Add FAQPage schema to existing FAQ content | Half-day | +6–8 pts |
| Add named author + Person schema | Half-day + 1 hr | significant (compounding) |
| Source/date the headline stats | Half-day | +6 pts |
| Replace +91 with US number | 1 hour | +4 pts |
| Add homepage direct-answer block | 2 hours | +4 pts |
| Build YouTube/Clutch/Reddit presence | 2–4 weeks | +7 pts (lagging) |
| **Total potential** | | **~90/100** |
