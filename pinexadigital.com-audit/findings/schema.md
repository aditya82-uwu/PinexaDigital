# Schema / Structured Data Findings — pinexadigital.com

**Score: 88/100** | Audit date: 2026-08-23 (re-audit; previous score was 78/100 on 2026-07-04, following a full site rebuild — commit `f5cee20 "new website"`)

---

## Summary

The site was substantially rebuilt since the last audit (new commit history shows a "new website" pass). Structured data quality has **improved further** on this pass:

- The Critical finding from July 4 — a self-serving, unverifiable `AggregateRating`/`Review` block on the site-wide `ProfessionalService` node — has been **removed entirely**. No rating/review claims remain anywhere on the site. This resolves the biggest risk from the prior audit.
- The Medium finding about `BlogPosting` missing `image` has also been **resolved** — every blog post sampled now carries a populated `image` field.
- `FAQPage` markup has expanded (now on `/services`, all 4 service sub-pages, `/pricing`, and `/about`) and in every case the questions/answers are genuinely visible on-page (verified against extracted page text), so there's no hidden-content risk. Per current policy this yields no Google SERP feature (FAQ rich results are fully retired), but it is a legitimate, low-risk aid for AI/LLM citation — treated as informational, not a defect.
- The one substantive issue carried over from the prior audit is unchanged: **`ProfessionalService` (a `LocalBusiness` subtype) is used for a business with no address**, which is a type-appropriateness mismatch, not a hard validation error.

13 of 32 sitemap URLs were spot-checked directly (homepage, `/services` + all 4 sub-pages, `/pricing`, `/portfolio`, `/about`, `/blog`, `/contact` [previously fetched], and 3 blog posts spanning old/new publish dates). All returned HTTP 200, `is_spa: false` (fully server-rendered — confirmed via `render_page.py --mode never`, meaning JSON-LD is present in the raw, non-JS-executed HTML and fully crawlable). Given the identical, template-driven structure observed across every sampled service/blog page, findings are extrapolated with high confidence to the remaining un-sampled service and blog URLs.

---

## What Works

- **Format hygiene is perfect across every block sampled:** `@context: "https://schema.org"` (never `http`), pure JSON-LD (no Microdata/RDFa found anywhere), absolute URLs throughout, ISO 8601 dates (`2026-08-19` etc.), no placeholder/bracket text, no deprecated types (`HowTo`, `SpecialAnnouncement`, `CourseInfo`, `EstimatedSalary`, `LearningVideo` — none present).
- **Site-wide `@graph` (`WebSite` + `ProfessionalService`)** is injected identically on every page via the root layout — confirmed byte-identical across all 11 non-blog-post URLs checked. `WebSite.publisher` correctly references the org via `@id`.
- **The July Critical finding is fixed:** the self-authored `aggregateRating`/`review` block on the `ProfessionalService` node has been completely removed. No star-rating or review markup exists anywhere on the site — the safest posture given no third-party-verifiable review source.
- **`BreadcrumbList`** is implemented correctly on every non-homepage page sampled (correctly omitted on the homepage itself), with proper `position`/`name`/`item` structure and full nested paths (e.g. Home → Services → Web Design & Development).
- **`Service` schema** on all 4 service sub-pages (`/services/web-design`, `/services/crm-automation`, `/services/ecommerce`, `/services/maintenance`) — each has `name`, `description`, `url`, `provider`, `areaServed`. `Offer`/`UnitPriceSpecification` is correctly present where pricing is fixed (Web Design $299, Maintenance $97/mo) and correctly omitted where pricing is variable/quoted (CRM Automation, E-commerce).
- **`/pricing`** uses `ItemList` of 3 `Offer`s (Starter $299, Growth $499, Enterprise — no price, correctly reflecting "custom pricing").
- **Blog** — `/blog` correctly uses `Blog` (not `BlogPosting`) for the index; every sampled post (`whats-included-in-a-maintenance-plan`, `how-much-does-a-website-cost`, `schema-markup-small-business-guide` — spanning Jul 9, Jul 13, and Aug 19 publish dates) has a complete `BlogPosting`: `headline`, `description`, **`image`** (previously missing — now fixed), `datePublished`, `dateModified`, `author`, `publisher` (with `logo`), and `mainEntityOfPage`.
- **`FAQPage`** content is genuinely visible on every page where it's marked up (verified against extracted page text on `/about` and cross-checked against FAQ copy on service pages) — no hidden-content risk.
- **No deprecated or non-rich-result schema being over-relied on** — `FAQPage` is present but the team is not treating it as a rich-result driver; that's the correct posture under current Google policy.

---

## Findings

### 1. `ProfessionalService` vs `Organization` — type-appropriateness mismatch (carried over from prior audit)
**Severity: Medium**

`ProfessionalService` is a subtype of `LocalBusiness` in schema.org, and Google's own LocalBusiness structured-data guidance assumes a physical location or defined local service area (`address`, `geo`). The site-wide node has **no `address` property**, and the business is explicitly positioned as a remote, US-market-focused agency with no storefront. Compounding this: the `telephone` field is an Indian number (`+91 78198 32001`) while `areaServed` claims `{"@type":"Country","name":"United States"}` — a country-code mismatch that reads oddly on a `LocalBusiness`-family type where telephone often implies a local point of contact. None of this breaks validation (all required `LocalBusiness` fields for basic parsing are technically optional), but it's a semantic mismatch that risks Google mis-modeling the entity, and it forfeits nothing to fix — `Organization` supports every property currently in use (`telephone`, `email`, `areaServed`, `logo`, `sameAs`) without implying a physical/local presence.

**Recommended fix** — replace the `ProfessionalService` node with `Organization` in the shared layout `@graph` (and in the `provider` reference on each `Service` page, see Finding 2):

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.pinexadigital.com/#organization",
  "name": "PinexaDigital",
  "url": "https://www.pinexadigital.com",
  "description": "Professional web design and development agency helping US businesses grow online with high-converting websites, SEO, and e-commerce solutions.",
  "email": "contact@pinexadigital.com",
  "areaServed": { "@type": "Country", "name": "United States" },
  "serviceType": ["Web Design", "Web Development", "CRM Automation", "E-commerce"],
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.pinexadigital.com/logo.png",
    "width": 512,
    "height": 512
  },
  "sameAs": [
    "https://www.linkedin.com/in/pinexa-digital-064059420",
    "https://www.instagram.com/pinexadigital/"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91 78198 32001",
    "contactType": "sales",
    "areaServed": "US",
    "availableLanguage": ["English"],
    "email": "contact@pinexadigital.com"
  }
}
```

Note: `priceRange` is a `LocalBusiness`-only property with no defined meaning on plain `Organization` — drop it (pricing is already well represented via `Service`/`Offer` and the `/pricing` `ItemList`).

---

### 2. `Service.provider` duplicates organization data instead of referencing the shared `@id`
**Severity: Low**

Every `Service` block's `provider` field is a fresh, inline `{"@type":"ProfessionalService","name":"PinexaDigital","url":"https://www.pinexadigital.com"}` object rather than a reference to the canonical organization node already declared in the site-wide `@graph`. This isn't invalid, but it creates redundant, disconnected entity mentions instead of one clean, consolidated node — a minor entity-resolution quality signal for Google's Knowledge Graph and for AI/LLM parsers building an entity graph of the page.

**Recommended fix:**
```json
{
  "@type": "Service",
  "name": "Web Design & Development",
  "provider": { "@id": "https://www.pinexadigital.com/#organization" }
}
```
(Only works cleanly if Finding 1 is also applied, so the `@id`'d node's `@type` is consistent — `@id` references don't need matching `@type` to resolve, but it's cleaner once there's one canonical org type.)

---

### 3. Portfolio page has no item-level schema for the 8 demo showcases
**Severity: Low**

`/portfolio` carries only the inherited site-wide `@graph` + `BreadcrumbList` — no schema describing the 8 individual demo sites (Gym & Fitness, Restaurant & Café, Hotel & Resort, Travel Agency, Doctor & Clinic, Law Firm, Real Estate, Construction). These are illustrative templates, not documented client case studies, so `Product`/`Review`-bearing schema would be inappropriate — but a light `ItemList` of `CreativeWork` entries is a reasonable, low-risk addition.

```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "PinexaDigital Industry Demos",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "CreativeWork",
        "name": "Gym & Fitness demo",
        "about": "High-energy fitness studio site with class schedules, memberships, and trainer profiles.",
        "creator": { "@id": "https://www.pinexadigital.com/#organization" }
      }
    }
  ]
}
```
Expand `itemListElement` to all 8 demos; add `url` per item if each demo has its own live preview URL.

---

### 4. `sameAs` — LinkedIn link returned an inconclusive automated check result
**Severity: Low (needs manual verification)**

Automated `curl` check of `https://www.linkedin.com/in/pinexa-digital-064059420` returned **HTTP 999**, which is LinkedIn's standard anti-scraping response for non-browser clients (it returns 999 for many valid profile URLs when hit by curl/bots, not necessarily a broken link) — so this is **not** a confirmed dead link the way the July audit's Twitter/X 404s were. The Instagram link (`https://www.instagram.com/pinexadigital/`) returned a clean HTTP 200.

**Recommendation:** Manually open the LinkedIn URL in a logged-in browser to confirm it resolves to the correct company/profile page. If PinexaDigital has (or creates) an actual **LinkedIn Company Page** (rather than a personal/individual profile), switching to that URL would be a stronger, more canonical `sameAs` entity signal for `Organization` markup than a personal profile.

---

### 5. `BlogPosting.author` is `Organization`, not `Person`
**Severity: Info / Low**

All sampled posts use `"author": {"@type": "Organization", "name": "PinexaDigital", ...}`. This is valid schema (Google accepts `Organization` as a `BlogPosting` author) and appropriate for a faceless-brand content operation with no named writers surfaced elsewhere on the site (no bylines, no team/author bios found on `/about`). If PinexaDigital later introduces named contributors or wants stronger E-E-A-T signals for AI citation, switching to `"@type": "Person"` with a real name/bio (and adding a `Person` node with `worksFor` pointing at the `Organization` `@id`) is the standard upgrade path — not urgent given the current faceless-brand positioning is intentional and consistent.

---

### 6. `Blog` schema on `/blog` doesn't enumerate posts via `blogPost`
**Severity: Low / Optional**

The `Blog` type on the index page has `name`, `url`, `description`, `publisher` but no `blogPost` array linking to the individual `BlogPosting` entries. Not required — `BreadcrumbList` + per-post `BlogPosting` already gives crawlers/AI a full picture — but adding `"blogPost": [{"@id": ".../blog/slug-1#post"}, ...]` (with matching `@id`s added to each `BlogPosting`) would make the site's full content graph explicit in a single fetch, which is a mild AI/GEO-citation nicety rather than a Google rich-result requirement.

---

## Validation Checklist Summary

| Check | Result |
|---|---|
| `@context` is `https://schema.org` | Pass — all blocks, all pages sampled |
| `@type` valid, not deprecated | Pass — no `HowTo`, `SpecialAnnouncement`, `CourseInfo`, `EstimatedSalary`, `LearningVideo` |
| Required properties present | Pass |
| Property value types correct | Pass |
| No placeholder text | Pass |
| URLs absolute | Pass |
| Dates ISO 8601 | Pass |
| JSON-LD server-rendered (not client-injected only) | Pass — confirmed via `render_page.py --mode never` (raw fetch, Playwright disabled) on all 13 sampled URLs |
| Reviews genuine/verifiable | N/A — no review/rating markup present (resolved by removal) |
| LocalBusiness/Organization type matches business model | Fail — see Finding 1 |
| FAQPage content matches visible page content | Pass — spot-checked on `/about` and service pages |

---

## Score Rationale: 88/100

Up from 78/100 (2026-07-04). The two prior deductions that carried the most weight — the self-serving/unverifiable `AggregateRating`+`Review` block (was −12) and missing `BlogPosting.image` (was −5) — are both fully resolved and add back to the score. Remaining deductions: −6 for the unresolved `ProfessionalService`/no-address type mismatch plus the compounding `+91` telephone vs. US `areaServed` inconsistency (Finding 1), −3 for `Service.provider` not using `@id` references (Finding 2), −2 for the portfolio page's missing item-level schema (Finding 3), −1 for the unverified `sameAs` LinkedIn link (Finding 4). Findings 5–6 are informational/optional and not scored. Everything else — format hygiene, `BreadcrumbList`, `Service`+`Offer` on service pages, `ItemList`/`Offer` pricing, `Blog`/`BlogPosting` (now with images), and server-rendering — is implemented correctly and verified live.

---

## Structured Data JSON block (for audit-data.json)

```json
{
  "name": "Schema / Structured Data",
  "score": 88,
  "weight": 0.10,
  "what_works": [
    "Site-wide JSON-LD @graph (WebSite + ProfessionalService) injected identically on every page via the root layout, with correct @id linking between WebSite.publisher and the org node",
    "Prior Critical finding resolved: self-authored, unverifiable AggregateRating/Review block has been fully removed from the site — no review-policy risk remains",
    "BreadcrumbList correctly implemented on every non-homepage page with proper position/name/item structure and full nested paths",
    "Service schema present on all 4 service sub-pages with provider, areaServed, and Offer/UnitPriceSpecification correctly included for fixed-price services and correctly omitted for variable-pricing services",
    "/pricing uses ItemList of Offer for all 3 tiers, correctly omitting price on the custom-quote Enterprise tier",
    "/blog uses Blog (not BlogPosting) for the index; every sampled BlogPosting has headline, description, image, datePublished, dateModified, author, publisher+logo, and mainEntityOfPage -- prior missing-image gap is fixed",
    "FAQPage markup present on /services, all 4 service sub-pages, /pricing, and /about, with content verified visible on-page (no hidden-content risk); correctly not relied upon for SERP rich results under current retired-FAQ-rich-result policy",
    "No deprecated schema types (HowTo, SpecialAnnouncement, CourseInfo, EstimatedSalary, LearningVideo) anywhere on the site",
    "All JSON-LD confirmed server-rendered (present in raw HTML with Playwright disabled) across every sampled URL -- fully crawlable, zero SPA-shell risk",
    "Consistent format hygiene sitewide: https://schema.org context, JSON-LD only (no Microdata/RDFa), absolute URLs, ISO 8601 dates, no placeholder text"
  ],
  "findings": [
    {
      "title": "ProfessionalService (LocalBusiness subtype) used for a remote agency with no address",
      "severity": "Medium",
      "description": "The site-wide organization node uses @type ProfessionalService (a LocalBusiness subtype implying a physical location or defined local service area per Google's guidance) but has no address property, and the business is explicitly remote/no-storefront. Compounding this, the telephone field is an Indian number (+91 78198 32001) while areaServed claims United States, a semantic mismatch. Does not break validation but risks entity mis-modeling.",
      "recommendation": "Switch the shared @graph node's @type from ProfessionalService to Organization (which supports every property currently used without implying a physical LocalBusiness presence), add a structured ContactPoint, and drop the LocalBusiness-only priceRange property."
    },
    {
      "title": "Service.provider duplicates organization data instead of referencing the shared @id",
      "severity": "Low",
      "description": "Each Service block's provider field is a fresh inline object ({\"@type\":\"ProfessionalService\",\"name\":...,\"url\":...}) rather than an @id reference to the canonical organization node already declared in the site-wide @graph, creating redundant/disconnected entity mentions.",
      "recommendation": "Replace the inline provider object with {\"@id\": \"https://www.pinexadigital.com/#organization\"} on every Service page."
    },
    {
      "title": "Portfolio page has no item-level schema for the 8 demo showcases",
      "severity": "Low",
      "description": "/portfolio carries only the inherited site-wide graph and BreadcrumbList; the 8 individual industry demo tiles (gym, restaurant, hotel, travel, clinic, law firm, real estate, construction) have no ItemList/CreativeWork markup.",
      "recommendation": "Add an ItemList of CreativeWork entries (one ListItem per demo) with name, about, and creator referencing the org @id."
    },
    {
      "title": "sameAs LinkedIn link returned an inconclusive automated status (HTTP 999)",
      "severity": "Low",
      "description": "Automated curl check of the LinkedIn sameAs URL returned HTTP 999, LinkedIn's standard anti-scraping response for non-browser clients, so link health could not be automatically confirmed either way. Instagram sameAs link returned a clean 200.",
      "recommendation": "Manually verify the LinkedIn URL resolves correctly in a browser; consider linking a LinkedIn Company Page instead of a personal profile URL for a stronger Organization entity signal."
    },
    {
      "title": "BlogPosting.author uses Organization, not Person",
      "severity": "Info",
      "description": "All sampled blog posts attribute authorship to the Organization node rather than a named Person, consistent with the site's faceless-brand content model (no bylines or author bios found on /about).",
      "recommendation": "No action required while content remains unattributed to named writers; if named contributors are introduced later, add Person authors with worksFor referencing the org @id for stronger E-E-A-T/AI-citation signals."
    },
    {
      "title": "Blog schema on /blog index does not enumerate posts via blogPost",
      "severity": "Low",
      "description": "The Blog type on the index page has name/url/description/publisher but no blogPost array linking to individual BlogPosting entries, so the full content graph is not explicit in a single fetch.",
      "recommendation": "Optional: add a blogPost array of @id references once BlogPosting entries carry stable @id values, primarily as an AI/GEO-citation nicety."
    }
  ]
}
```
