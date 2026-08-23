# Action Plan — pinexadigital.com

Prioritized by severity and effort. See `FULL-AUDIT-REPORT.md` for full context and `findings/*.md` for evidence and ready-to-use code/schema snippets.

---

## Phase 1: Quick Wins (Week 1)

| # | Item | Category | Severity | Effort |
|---|---|---|---|---|
| 1 | Replace the 146KB favicon with a properly optimized icon (a few KB) | Performance | High | Trivial |
| 2 | Fix the CSS collision between the floating contact button and share icons on mobile blog posts | Visual/UX | High | Low |
| 3 | Correct `llms.txt` — remove or fix the inaccurate "testimonials" claim | GEO | Medium | Trivial |
| 4 | Switch site-wide schema from `ProfessionalService` to `Organization` + `ContactPoint` (ready-made snippet in `findings/schema.md`) | Schema | Medium | Low |
| 5 | Add `/privacy` and `/terms` to `sitemap.xml` | Technical | Medium | Trivial |
| 6 | Fix sitemap `lastmod` for the 11 static pages that share a build-time timestamp | Technical | Low | Low |
| 7 | Increase mobile nav tap targets (theme toggle, hamburger) to 44×44px minimum | Visual/UX | Medium | Low |

---

## Phase 2: High-Impact Improvements (Weeks 2-3)

| # | Item | Category | Severity | Effort |
|---|---|---|---|---|
| 1 | Reduce header-to-content whitespace on interior pages, especially mobile | Visual/UX | Medium | Medium |
| 2 | Reorder the mobile Contact page so the form appears above the fold | Visual/UX | Medium | Medium |
| 3 | Resolve Shopify-vs-WooCommerce content cannibalization — consolidate or clearly re-scope one post | Content Architecture | High | Medium |
| 4 | Add contextual internal links between blog posts and relevant service/pricing pages | Content Architecture | Medium | Medium |
| 5 | Harden CSP — remove `'unsafe-inline'` via nonce-based script/style policy | Technical | Medium | Medium |
| 6 | Investigate and improve mobile LCP timing (prioritize LCP element, reduce hydration-blocking JS) | Performance | Medium | Medium |
| 7 | Replace `Service.provider` inline objects with `@id` references to the canonical org node | Schema | Low | Low |
| 8 | Add item-level `ItemList`/`CreativeWork` schema for the 8 portfolio demo tiles | Schema | Low | Low |

---

## Phase 3: Content & Authority (Month 2)

| # | Item | Category | Severity | Effort |
|---|---|---|---|---|
| 1 | Add named human author(s) with title/bio to blog content; set `BlogPosting.author` to `Person` | Content | High | Medium |
| 2 | Build a real case-study section as client projects ship (client identity, problem, measurable outcome) | Content & SXO | High | Ongoing |
| 3 | Add verifiable proof points to `/about` (founding year, project count, team size) | Content | Medium | Low |
| 4 | Claim directory listings: Clutch, DesignRush, GoodFirms, Google Business Profile | Off-Page Authority | High | Medium |
| 5 | Add an SEO/AI-search service line item to `/services`, or fold that content cluster explicitly into `/services/web-design` | Content Architecture | Medium | Medium |
| 6 | Add a homepage trust strip (client count, rating, or logos) once real client data exists | On-Page SEO | Medium | Low |
| 7 | Manually verify/upgrade the LinkedIn `sameAs` link to a Company Page if available | Schema / Off-Page | Low | Trivial |

---

## Phase 4: Monitoring & Iteration (Ongoing)

| # | Item | Category |
|---|---|---|
| 1 | Add IndexNow integration so new/updated blog posts are pushed to Bing/Yandex on publish | Technical |
| 2 | Configure Moz's free tier (2,500 rows/month) once directory listings/guest posts go live, to start tracking real referring domains | Off-Page Authority |
| 3 | Re-run a full audit after Phase 1-2 ship to confirm fixes and re-baseline scores | All |
| 4 | Configure Google API credentials (PageSpeed/CrUX/GSC/GA4) to replace lab-only performance data with real field data and indexation/traffic tracking | Performance / Technical |
| 5 | Make the "Related articles" module topic/category-aware instead of recency-based, to automatically reinforce content clusters | Content Architecture |

---

## Not Actionable / No Action Needed

- **Schema `BlogPosting.author` using `Organization` instead of `Person`** — consistent with the site's current faceless-brand model; only relevant once Phase 3 Item 1 (named authors) ships.
- **Sitemap `priority`/`changefreq` values** — present and sensibly tiered but ignored by Google; cosmetic only, no functional impact either way.
- **Location-page doorway quality gate** — not applicable; this is a remote-service agency with no physical/service-area pages.
