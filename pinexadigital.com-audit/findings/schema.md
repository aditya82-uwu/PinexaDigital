# Schema / Structured Data Findings — pinexadigital.com
**Score: 78/100** | Audit date: 2026-07-04 (re-audit; previous score was 18/100 on 2026-06-29)

---

## Summary

Since the last audit (2026-06-29), the site has been substantially rebuilt. Nearly every gap previously flagged (`BreadcrumbList`, per-service `Service` schema, `WebSite`/`Organization` graph, `logo`, `sameAs`, `AggregateRating`, `Blog`/`ItemList`) has been implemented, and all JSON-LD is confirmed **server-rendered** (present in raw HTML with Playwright disabled — verified via `render_page.py --mode never`), so it is fully crawlable by Google. This is a well-instrumented site for structured data. The remaining issues are: (1) a real Google review-policy risk around the site-wide `AggregateRating`/`Review` block, (2) a type-appropriateness question (`ProfessionalService` vs `Organization`) given the business has no physical address, (3) missing `image` on blog posts, and (4) a few low-priority/optional additions (FAQPage for AI/GEO only, portfolio ItemList).

All 11 fetched URLs returned 200 and are `is_spa: False` (fully static/SSR — no client-only rendering risk for crawlers).

---

## What's Implemented (per page, validated against live HTML)

| Page | JSON-LD present | Validation |
|---|---|---|
| `/` | `@graph`: `WebSite` + `ProfessionalService` (incl. `aggregateRating`, 3 `Review`s, `logo`, `sameAs`) | ✅ Valid types/properties, `https://schema.org` context, absolute URLs. ⚠️ See Critical #1 (review risk) and Medium #1 (type choice). |
| `/services` | `WebSite`+`ProfessionalService` (inherited) + `BreadcrumbList` | ✅ Pass |
| `/services/web-design` | + `Service` + `BreadcrumbList` | ✅ Pass. `Service.provider` correctly references the org; `Offer`/`UnitPriceSpecification` well-formed. |
| `/services/seo` | + `Service` + `BreadcrumbList` | ✅ Pass (no `offers` — SEO is retainer-based, acceptable to omit) |
| `/services/ecommerce` | + `Service` + `BreadcrumbList` | ✅ Pass (no `offers` — variable pricing, acceptable) |
| `/services/maintenance` | + `Service` (with `Offer`, $97/mo) + `BreadcrumbList` | ✅ Pass |
| `/pricing` | + `ItemList` of 3 `Offer`s + `BreadcrumbList` | ✅ Pass. Good use of `ItemList`+`Offer` for tiered pricing (no native Google rich-result for pricing tables, but strong AI/LLM signal). |
| `/portfolio` | `WebSite`+`ProfessionalService` (inherited) + `BreadcrumbList` only | ⚠️ No item-level schema for the 8 demo sites (see Missing #4) |
| `/about` | inherited + `BreadcrumbList` | ✅ Pass (no page-specific schema needed) |
| `/contact` | inherited + `BreadcrumbList` | ✅ Pass |
| `/blog` | + `Blog` + `BreadcrumbList` | ✅ Pass — correct use of `Blog` (not `BlogPosting`) for the index |
| `/blog/[slug]` | + `BlogPosting` + `BreadcrumbList` | ⚠️ Valid types/dates (`datePublished` ISO 8601) but **missing `image`** — see Missing #3 |

**BreadcrumbList** is implemented once, centrally, in `src/components/ui/Breadcrumb.tsx` and reused everywhere `<Breadcrumb crumbs={...}>` is rendered — correctly encodes nested paths (e.g. Home > Services > Web Design). No changes needed.

**Service schema** is implemented on all four service pages — this was the #1 prior recommendation and is now done correctly, including `provider`, `areaServed`, and `Offer`/`priceSpecification` where pricing is fixed.

Format/context checklist across all blocks: `@context: "https://schema.org"` (not http) ✅, JSON-LD (not Microdata/RDFa) ✅, absolute URLs via `siteUrl()` helper ✅, ISO 8601 dates (`2026-06-15` etc.) ✅, no placeholder text ✅, no deprecated types (`HowTo`, `SpecialAnnouncement`, `CourseInfo` etc. — none used) ✅.

---

## Critical

### 1. Site-wide `AggregateRating`/`Review` is a self-serving, unverifiable review — rich-result policy risk
**File:** `src/app/layout.tsx` (lines 100-129)

The `ProfessionalService` node carries `aggregateRating` (5.0 / 3 reviews) and 3 embedded `Review` objects (Sarah M., James R., Diana L.). These reviews:
- Are authored/hosted entirely by the business itself, with no link to a third-party review platform (Google Business Profile, Trustpilot, Clutch, G2) for verification.
- Have no `datePublished` on any `Review`.
- Use generic first-name + last-initial identities that can't be independently verified.

Google's structured data guidelines for review snippets explicitly prohibit "self-serving" reviews — testimonials the business itself writes/curates and marks up as if they were independent reviews — and Google can take manual action / withhold star-rating rich results for markup that appears to be gaming review signals. This is a policy compliance risk, not just a quality nitpick. (Note: the reviews *do* match visibly-displayed testimonial content in `HomeClient.tsx`, so there's no "hidden content" violation — that's a mitigating factor, but doesn't resolve the self-serving-source problem.)

**Recommended fix (pick one):**
- **Safest:** Remove `aggregateRating`/`review` from the site-wide `Organization`/`ProfessionalService` node entirely and keep testimonials as plain page content (no schema). Rich star-rating snippets aren't worth the manual-action risk on 3 unverifiable reviews.
- **If keeping ratings:** Source them from a verifiable third party (Google Business Profile via Google's own review count, Clutch, Trustpilot) and link `sameAs`/`url` to that profile so the claim is externally checkable, and add `datePublished` to each `Review`.

---

## Medium

### 2. `ProfessionalService` vs `Organization` — type appropriateness
**File:** `src/app/layout.tsx`

`ProfessionalService` is a subtype of `LocalBusiness`, which schema.org and Google's own guidance model as a physical-location or defined-service-area business (Google's LocalBusiness rich-result features expect `address`/`geo`). PinexaDigital is described as a remote-only agency serving US clients from an India-based team with no storefront — and indeed no `address` is present in the markup. Since `Organization` supports every property currently used (`telephone`, `email`, `areaServed`, `logo`, `sameAs`, `aggregateRating`, `review`) without implying a physical/local-business presence, it is the more semantically accurate type here and avoids sending a "local business" signal Google can't verify (no address) or misapply.

**Recommended fix:**
```json
{
  "@type": "Organization",
  "@id": "https://www.pinexadigital.com/#organization",
  "name": "PinexaDigital",
  "url": "https://www.pinexadigital.com",
  "description": "Professional web design and development agency helping US businesses grow online with high-converting websites, SEO, and e-commerce solutions.",
  "email": "contact@pinexadigital.com",
  "areaServed": { "@type": "Country", "name": "United States" },
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.pinexadigital.com/logo.png",
    "width": 512,
    "height": 512
  },
  "sameAs": [
    "https://www.linkedin.com/company/pinexadigital",
    "https://twitter.com/pinexadigital"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91 78198 32001",
    "contactType": "customer service",
    "areaServed": "US",
    "email": "contact@pinexadigital.com"
  }
}
```
Note: `priceRange` is a `LocalBusiness`-only property and has no defined meaning on `Organization` — drop it if you switch types (pricing is already well-represented via the `Service`/`Offer` schema on service pages and the `ItemList` on `/pricing`).

### 3. Blog posts missing `image` on `BlogPosting`
**File:** `src/app/blog/[slug]/page.tsx`, `src/lib/blog-data.ts`

`Post` has no `image` field, so `blogPostingJsonLd` can't populate one. `image` is a required/near-required property for Google's Article/BlogPosting rich results (large/enhanced link previews, Top Stories eligibility) and for good AI-citation previews.

**Fix:** Add an `image` field to each post in `blog-data.ts` (1200×630 min, matching the OG image convention already used elsewhere) and include it in the JSON-LD:
```json
{
  "@type": "BlogPosting",
  "headline": "How much does a website cost in 2026?",
  "image": ["https://www.pinexadigital.com/blog/how-much-does-a-website-cost-og.jpg"],
  "datePublished": "2026-06-15",
  "dateModified": "2026-06-15",
  "author": { "@type": "Organization", "name": "PinexaDigital", "url": "https://www.pinexadigital.com" },
  "publisher": {
    "@type": "Organization",
    "name": "PinexaDigital",
    "url": "https://www.pinexadigital.com",
    "logo": { "@type": "ImageObject", "url": "https://www.pinexadigital.com/logo.png" }
  },
  "mainEntityOfPage": "https://www.pinexadigital.com/blog/how-much-does-a-website-cost"
}
```

---

## Low / Optional

### 4. Portfolio page has no item-level schema
**File:** `src/app/portfolio/page.tsx`

The 8 tiles (gym, restaurant, hotel, travel, clinic, etc.) are illustrative demo templates, not documented client case studies — so `Product`/`Review`-bearing schema would be inappropriate. A light-touch `ItemList` of `CreativeWork` entries is a reasonable, low-risk addition since these are legitimate portfolio/demo works:
```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "PinexaDigital Portfolio",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "CreativeWork",
        "name": "Gym & Fitness demo",
        "url": "https://gym.pinexadigital.com",
        "about": "High-energy fitness studio website demo — class schedules, memberships, trainer profiles.",
        "creator": { "@type": "Organization", "name": "PinexaDigital", "url": "https://www.pinexadigital.com" }
      }
    }
  ]
}
```

### 5. `FAQPage` — content exists, no schema (optional, AI/GEO only)
FAQ sections exist on `/services/web-design`, `/services/seo`, `/services/ecommerce`, `/services/maintenance`, and `/pricing` with zero `FAQPage` markup. Per current Google policy, FAQ rich results are retired for all sites (May 7, 2026) — **adding this provides no SERP benefit**, so it is optional. If GEO/AI-citation visibility is a goal, it's low-risk to add since the FAQ arrays already exist in each page's source:
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What's the difference between your Starter and Growth packages?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Starter package ($997) covers up to 5 pages... Growth ($2,497) covers up to 12 pages, includes a custom design system, advanced SEO, and a blog setup."
      }
    }
  ]
}
```
Do not expect/report a SERP rich-result impact from this addition.

---

## Validation Checklist Summary

| Check | Result |
|---|---|
| `@context` is `https://schema.org` | ✅ Pass everywhere |
| `@type` valid, not deprecated | ✅ Pass (no `HowTo`, `SpecialAnnouncement`, `CourseInfo`, etc.) |
| Required properties present | ⚠️ Mostly pass; `BlogPosting.image` missing |
| Property value types correct | ✅ Pass |
| No placeholder text | ✅ Pass |
| URLs absolute | ✅ Pass (`siteUrl()` helper) |
| Dates ISO 8601 | ✅ Pass |
| Reviews genuine/verifiable | ❌ Fail — see Critical #1 |
| LocalBusiness/Organization type matches business model | ⚠️ Borderline — see Medium #2 |

---

## Score Rationale: 78/100

Up from 18/100 (2026-06-29). Deductions: −12 for the self-serving/unverifiable `AggregateRating`+`Review` policy risk (Critical #1), −5 for the `ProfessionalService`/no-address type mismatch (Medium #2), −5 for missing `BlogPosting.image` across all posts (Medium #3). Remaining minor deductions for the optional portfolio/FAQPage opportunities left on the table. Everything else — `BreadcrumbList` site-wide, `Service` on every service page, `WebSite`+`Organization` graph, `Blog`/`BlogPosting`, `ItemList`/`Offer` pricing — is implemented correctly and confirmed server-rendered on the live site.
