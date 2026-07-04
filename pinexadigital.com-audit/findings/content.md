# Content Quality & E-E-A-T Findings — pinexadigital.com
**Score: 48/100** | Audit date: 2026-07-04
**Note:** Written directly by the audit orchestrator after the delegated content-quality subagent failed to complete three times in a row (stalled mid-task without writing this file). Data below is drawn from direct fetches of all 11 sitemap pages plus one live blog post, via render_page.py + parse_html.py.

---

## Summary

Content depth has improved substantially since the 2026-06-29 audit (was 28/100): most pages now carry solid word counts, the blog is live with real long-form posts (previously all 404), and pricing is transparent. The remaining gaps are almost entirely E-E-A-T (trust/authority) issues rather than thin-content issues: unverifiable testimonials embedded in schema, zero named human authorship anywhere, a portfolio page with no actual project images, and a US-targeting site whose footer phone number is Indian (+91 78198 32001, live `tel:` link on every page).

---

## Word Counts (via parse_html.py, live 2026-07-04)

| Page | Words | Assessment |
|---|---|---|
| Homepage | 468 | Adequate |
| /about | 787 | Good |
| /services | 1,001 | Good |
| /services/web-design | 804 | Good |
| /services/seo | 868 | Good |
| /services/ecommerce | 828 | Good |
| /services/maintenance | 722 | Good |
| /pricing | 250 | **Thin** — just tier cards, no supporting narrative |
| /portfolio | 335 | **Thin**, and see Critical #2 below |
| /blog (index) | 263 | Adequate for a listing page |
| /contact | 88 | Fine for a contact page |
| /blog/seo-for-small-business-us (sample post) | 903 | Good — real long-form content, `article:published_time` present |

---

## What Works

- Blog posts are real, substantive (900+ words sampled), dated, and carry `BlogPosting`/`BreadcrumbList` schema (cross-ref `schema.md`) — the prior audit's "blog is 404" finding is fully resolved.
- Transparent, specific pricing ($997 / $2,497 / Custom tiers) with FAQ block — rare and valuable trust signal for a service business.
- Service sub-pages are well-differentiated (700-1000 words each, not template-duplicated) with numbered process steps.
- Clean breadcrumb navigation and consistent metadata (title/description/OG/canonical) present on every page checked.

---

## Critical

### 1. Site-wide testimonials/reviews are unverifiable and schema-embedded as fact
Homepage displays 3 testimonials (Sarah M., James R., Diana L. — first name + last initial only, no company, no photo, no link) that are simultaneously asserted as structured `Review`/`AggregateRating` data (5.0★, 3 reviews) in `layout.tsx`'s site-wide JSON-LD. There is no third-party verification path (no Google/Clutch/Trustpilot review source) for any of them. This is the single biggest authoritativeness/trustworthiness gap on the site — a reader (or Google) has no way to confirm these clients or results exist.
**Recommendation:** Replace with real, attributable client reviews (full name + company + link, or embedded from a verified platform like Google Business Profile or Clutch) or drop the `Review`/`AggregateRating` schema entirely until real reviews exist — false review markup risks a Google manual action.

### 2. Portfolio page has essentially no actual project imagery
`parse_html.py` found exactly **one** `<img>` on `/portfolio` — the site logo. A page whose entire purpose is visual proof-of-work ("See exactly what we build") ships with no screenshots of actual client sites. This directly undercuts the "Experience" pillar of E-E-A-T and was independently flagged by the SXO subagent as the top proof-page failure.
**Recommendation:** Add real screenshots (or high-quality mockups clearly labeled as such) for each of the portfolio entries.

---

## High

### 3. Zero named human authorship anywhere on the site
Blog posts use `"author": {"@type": "Organization", "name": "PinexaDigital"}` — no byline, no bio, no headshot, on any of the 6 posts. `/about` describes "a focused team" in the abstract with no named team members. For an agency selling expertise, this is a significant Expertise-signal gap; Google's E-E-A-T guidance specifically rewards identifiable, credentialed authors for advice content (e.g., the SEO and pricing-strategy blog posts).
**Recommendation:** Add at least one named author with a short bio/credentials to `/about` and attribute blog posts to that person (or a real team member).

### 4. US-targeting site displays an Indian phone number sitewide
`+91 78198 32001` appears as a live `tel:` link in the footer of every page (confirmed on home, about, contact, blog, portfolio, pricing, services*) while `areaServed` in schema and all page copy explicitly target "US businesses" / "US customers." A US visitor calling this number pays international rates and gets a signal that undercuts "we understand US customers" positioning stated in testimonials.
**Recommendation:** Get a US-based number (Google Voice, a VoIP US number, or a toll-free 800 number) for the public-facing footer/contact page, even if the operating team is based in India.

---

## Medium

### 5. /pricing is thin relative to purchase-decision weight
250 words is low for a page that has to carry an entire buying decision. No case studies, no "what's included in each phase" narrative, no risk-reversal/guarantee language beyond the tier cards + FAQ.
**Recommendation:** Add a short "what happens after you pay" process narrative and at least one linked case study per tier.

### 6. No dedicated author/team page or bios
Related to #3 — there's no `/team` or `/about#team` section with individual bios, which would reinforce both Expertise and Experience pillars simultaneously.
**Recommendation:** Low-effort addition: a 3-4 person "who we are" grid on `/about` with real names/roles/photos.

---

## Low

### 7. Blog post dates are not chronological / span a wide range
`article:published_time: 2025-05-15` on the sampled post — cross-ref SXO finding that post dates aren't in chronological order, which can read as backdated/batch-published content rather than an ongoing publishing cadence.
**Recommendation:** Verify and correct publish dates to reflect actual chronology; consider adding an `updated` date for evergreen posts refreshed later.

---

## Data Source & Confidence

Direct HTTP fetch of all 11 sitemap URLs + 1 sample blog post via `render_page.py --mode never --output` (raw HTML) piped through `parse_html.py` for word counts, schema, and image inventory, plus targeted `grep` checks for phone number and author markup. High confidence — this is live, current-state data as of 2026-07-04, not an estimate.

Cross-reference: `schema.md` for the AggregateRating/Review schema-policy risk, `sxo.md` for the portfolio-page proof gap from a searcher-intent angle, `geo.md` for the same testimonial/stat-sourcing gap from an AI-citability angle, `technical.md` for the indexability blockers that make all of this invisible to search/AI crawlers regardless of quality.
