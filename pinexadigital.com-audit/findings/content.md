# Content Quality & E-E-A-T Findings — pinexadigital.com
**Score: 28/100** | Audit date: 2026-06-29

---

## E-E-A-T Breakdown

| Dimension | Score | Weight | Notes |
|-----------|-------|--------|-------|
| Experience | 4/20 | 20% | Testimonials unverifiable, fictional dashboard, no real project screenshots |
| Expertise | 7/25 | 25% | Competent service copy, but zero author attribution anywhere |
| Authoritativeness | 3/25 | 25% | No press, no third-party reviews, no social footprint, currently noindexed |
| Trustworthiness | 14/30 | 30% | Transparent pricing ✓, but Indian phone on US site, no Privacy Policy |

---

## Word Count vs. Minimums

| Page | Words | Minimum | Status |
|------|-------|---------|--------|
| Homepage | ~850 | 500 | Pass (marginal) |
| Services overview | ~285 | 800 | **FAIL — 64% under** |
| About | ~375 | 500 | **FAIL — 25% under** |
| Pricing | ~450 | 500 | Borderline |
| Service sub-pages | ~350-400 each | 800 | **FAIL — 50% under** |
| Blog posts | 0 (404) | 1,500 | **FAIL — content does not exist** |

---

## What Works

- Transparent fixed pricing published openly ($997/$2,497/Custom) with payment split terms
- Clear site architecture with breadcrumbs on all inner pages
- Service sub-pages have numbered process steps and feature inclusion lists
- FAQ section on pricing page is structurally ready
- Page-level metadata correctly implemented on all inner pages

---

## Critical

### 1. Indian phone number (+91) on a US-targeted site
**File:** `src/lib/site-config.ts:5`

`phone: "+91 78198 32001"` — an Indian mobile number — appears on the contact page and in the JSON-LD schema `telephone` field. A US prospect clicking "Call us" reaches an international line. A quality rater checking the schema finds a +91 number on a site claiming "US market expertise." This is the most damaging single trust signal on the site.

**Fix:** Obtain a US virtual number (Google Voice — free, OpenPhone ~$13/mo, Grasshopper ~$26/mo). Update `site-config.ts:5`. The change auto-propagates to contact page and schema.

---

### 2. All 6 blog posts return 404
The blog listing displays 6 articles (March–June 2025) but `/app/blog/[slug]/page.tsx` doesn't exist. Every link goes to a 404. The most recent post is 13 months old as of June 2026. For an agency selling SEO services, a broken blog is a credibility disaster.

**Fix:** Build the dynamic route and write real content before enabling indexing. Minimum 1,500 words per post. At least one post dated 2026.

---

## High

### 3. About page has no named humans
**File:** `src/app/about/page.tsx`

No founder name, no team names, no photos, no credentials, no LinkedIn links. The origin story ("We started because we saw too many bad websites") matches a common AI-generated agency template. US clients spending $997–$2,497 cannot determine who they are paying.

**Fix:** Add a founder/team section with: real full name, 2-3 sentence bio covering professional background, headshot, and LinkedIn profile URL.

---

### 4. Services overview page is critically thin (~285 words)
**File:** `src/app/services/page.tsx`

Four service cards with 30–50 words each. Less than 35% of the 800-word minimum for a commercial service page. Google's quality systems evaluate whether a page demonstrates genuine expertise — four short blurbs do not.

**Fix:** Expand each service section to 200+ words covering: the specific problem it solves, what differentiates the agency's approach, a relevant outcome metric, and a mini-FAQ. Target 1,000+ total words on this page.

---

### 5. Testimonials are completely unverifiable
**File:** `src/app/page.tsx:222-247`

Sarah M. / Austin Property Group, James R. / Pacific Wellness Studio, Diana L. / Brooklyn Home Goods — all use initials-only avatars, no headshots, no company URLs, no review platform links. A 4th avatar ("TK") in the hero strip has no corresponding testimonial — implies a fabricated client.

**Fix:** Upgrade to full name + company name linked to their website. Add a Google Business Profile or Clutch review link per testimonial. Remove the "TK" placeholder or add a real corresponding testimonial.

---

### 6. Homepage stats are unverified claims
**File:** `src/app/page.tsx:202-207`

50+ projects, 98% satisfaction, 21 days avg delivery, 100% 5-star reviews — no third-party verification. The animated hero dashboard displays fictional "+127% Growth," "8.4% Conv. Rate," and "99/100 PageSpeed" as if they are real client results. These are hardcoded UI elements.

**Fix:**
- Add source attribution ("Based on 52 completed projects, Jan 2024–Jun 2026")
- Link the 5-star claim to a Google Business Profile or Clutch
- Replace fictional dashboard with a real client screenshot (with permission) or remove it

---

### 7. Blog last updated 13 months ago
Most recent post: June 1, 2025. Current date: June 29, 2026. Two post titles include "2025" in the heading. For an agency selling SEO services, a stale blog signals operational abandon.

**Fix:** Publish at least one substantive post in 2026 before enabling indexing. Update year-dated titles when content is published.

---

### 8. No Privacy Policy or Terms of Service
The contact form collects name, email, and message. No Privacy Policy, no cookie notice, no ToS linked anywhere on the site. This is a CCPA/CAN-SPAM compliance gap and a Google quality rater trust flag.

**Fix:** Add `/privacy-policy` and `/terms` pages. Link both from the footer. Generate base content from a reputable generator (iubenda, Termly), then customize.

---

## Medium

### 9. No author bylines on blog listing
No author name attributed to any blog post. No human identity attached to any content on this site.

**Fix:** Add author field to each post in `blog/page.tsx`. Create author bio pages linked from each post page once built.

---

### 10. No Google Business Profile or third-party review profile
"100% 5-star reviews" claim with no verification path.

**Fix:** Create and verify a Google Business Profile. Also create a Clutch.co profile (standard for US web agencies, AI systems treat it as credible citation source).

---

## Low

### 11. Blog titles reference "2025"
"How much does a website cost in 2025?" and "Web design trends US businesses should use in 2025." — stale before a word of content is written.

**Fix:** Update to "2026" or use evergreen titles with a "Last updated" byline.

### 12. No city/vertical targeting
"US clients" framing is too broad to rank for localized commercial queries. The existing testimonial personas (Austin property, Pacific wellness, Brooklyn home goods) hint at viable verticals.

**Fix:** After indexing is live, add landing pages for specific verticals or US cities where clients are concentrated.
