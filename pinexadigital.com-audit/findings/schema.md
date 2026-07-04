# Schema / Structured Data Findings — pinexadigital.com
**Score: 18/100** | Audit date: 2026-06-29

---

## Existing Schema (layout.tsx, site-wide)

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "PinexaDigital",
  "url": "https://pinexadigital.com",
  "description": "Professional web design and development agency...",
  "telephone": "+91 78198 32001",
  "email": "contact@pinexadigital.com",
  "priceRange": "$$",
  "areaServed": ["US", "IN"],
  "serviceType": ["Web Design", "Web Development", "SEO", "E-commerce"]
}
```

**Validation:** `@context`, `@type`, and core fields pass. Missing `@id`, `address`, `logo`, `sameAs`. `areaServed` including "IN" conflicts with US-only positioning. `telephone` is an Indian number.

---

## What Works

- `ProfessionalService` @type is semantically appropriate for an agency
- `@context` uses https (not deprecated http)
- Core identity fields present: name, url, description, telephone, email, priceRange
- `serviceType` array communicates offering scope
- JSON-LD format used (correct choice over Microdata or RDFa)
- `siteUrl()` helper centralises domain — no URL drift risk

---

## Critical

### 1. Global noindex renders all schema inert
Google does not show rich results for noindexed pages. Fix the indexing issue (see `findings/technical.md`) before investing time in schema improvements — everything below is blocked until indexing is enabled.

---

## High

### 2. No BreadcrumbList schema
**File:** `src/components/ui/Breadcrumb.tsx`

The `Breadcrumb` component renders correct visual breadcrumbs on all inner pages but emits zero structured data. The `crumbs` prop already contains all the data needed to generate BreadcrumbList JSON-LD.

**Fix:** Add JSON-LD inside the Breadcrumb component built from the crumbs prop:
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pinexadigital.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://pinexadigital.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Web Design", "item": "https://pinexadigital.com/services/web-design" }
  ]
}
```
This is a high-impact, low-effort win — the data already exists, only the JSON-LD output is missing.

---

### 3. No Service schema on any of the four service pages

Each service page (`/services/web-design`, `/services/seo`, `/services/ecommerce`, `/services/maintenance`) describes a distinct offering with name, description, deliverables, and pricing — but no Service schema.

**Fix per service page:**
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Web Design & Development",
  "description": "Custom websites built for speed, SEO, and US audiences. Starting from $997.",
  "url": "https://pinexadigital.com/services/web-design",
  "provider": {
    "@type": "ProfessionalService",
    "name": "PinexaDigital",
    "url": "https://pinexadigital.com"
  },
  "areaServed": { "@type": "Country", "name": "United States" },
  "offers": {
    "@type": "Offer",
    "price": "997",
    "priceCurrency": "USD",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "price": "997",
      "priceCurrency": "USD",
      "unitText": "one-time"
    }
  }
}
```

---

### 4. No PriceSpecification or Offer schema on pricing page
**File:** `src/app/pricing/page.tsx`

Three tiers ($997, $2,497, Custom) with full feature lists — zero structured data. Google and LLMs must infer pricing from raw text.

**Fix:**
```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "PinexaDigital Web Design Packages",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Offer",
        "name": "Starter",
        "description": "For small businesses launching their first professional website.",
        "price": "997",
        "priceCurrency": "USD",
        "url": "https://pinexadigital.com/pricing"
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Offer",
        "name": "Growth",
        "price": "2497",
        "priceCurrency": "USD",
        "url": "https://pinexadigital.com/pricing"
      }
    }
  ]
}
```

---

### 5. No AggregateRating schema despite explicit 5-star claims
**File:** `src/app/page.tsx:222-247` (testimonials) + HeroVisual

Homepage displays "5.0 Stars / Client avg." badge, five filled stars on 3 testimonial cards, and "100% 5-Star Reviews" in the stats band. This is exactly what `AggregateRating` captures — and it's the data that produces star ratings in SERPs.

**Fix:** Add to root ProfessionalService block:
```json
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "5.0",
  "reviewCount": "3",
  "bestRating": "5",
  "worstRating": "1"
},
"review": [
  {
    "@type": "Review",
    "reviewRating": { "@type": "Rating", "ratingValue": "5" },
    "author": { "@type": "Person", "name": "Sarah M." },
    "reviewBody": "PinexaDigital delivered a stunning website in 3 weeks..."
  }
]
```
**Important:** Only use the review count matching the number of testimonials actually shown on the page. Google's review policy requires genuine reviews.

---

## Medium

### 6. areaServed includes "IN" (India)
All site copy targets US businesses exclusively. Including India in `areaServed` sends a conflicting signal to Google's entity graph.

**Fix:**
```json
"areaServed": { "@type": "Country", "name": "United States" }
```

---

### 7. No logo property
Google's Knowledge Panel uses `logo` from Organization schema.

**Fix:**
```json
"logo": {
  "@type": "ImageObject",
  "url": "https://pinexadigital.com/logo.png",
  "width": 512,
  "height": 512
}
```
Create the logo file at `/public/logo.png` (512×512px minimum per Google spec).

---

### 8. No sameAs social profile links
`sameAs` is the primary mechanism for Google's Knowledge Graph to connect the entity to external identity signals.

**Fix:** Once profiles exist:
```json
"sameAs": [
  "https://www.linkedin.com/company/pinexadigital",
  "https://twitter.com/pinexadigital",
  "https://www.clutch.co/profile/pinexadigital"
]
```

---

### 9. No WebSite schema
Missing for Knowledge Panel brand entity association.

**Fix:** Use `@graph` to group WebSite + ProfessionalService in layout.tsx:
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://pinexadigital.com/#website",
      "url": "https://pinexadigital.com",
      "name": "PinexaDigital",
      "publisher": { "@id": "https://pinexadigital.com/#organization" }
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://pinexadigital.com/#organization",
      "name": "PinexaDigital"
    }
  ]
}
```

---

### 10. No Blog or ItemList schema on blog listing

**Fix:** Add to `src/app/blog/page.tsx`:
```json
{
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "PinexaDigital Blog",
  "url": "https://pinexadigital.com/blog",
  "publisher": { "@type": "ProfessionalService", "name": "PinexaDigital" }
}
```
When blog post pages are built, add `BlogPosting` schema per post with `headline`, `datePublished`, `dateModified`, `author`, `publisher`, and `url`.

---

## Info

### 11. FAQPage schema — no SERP value as of May 2026
FAQPage schema lost Google SERP rich result support for all sites on May 7, 2026. Adding FAQPage markup provides no SERP enhancement. It may still assist LLM/AI citation. Do not add for SEO benefit.
