# Search Experience (SXO) Findings — pinexadigital.com

**Score: 76/100** | Audit date: 2026-08-23
**Note:** This supersedes the stale 2026-07-04 audit, which referenced a `/services/seo` page that no longer exists in the current site structure. Current service pages are: `/services`, `/services/web-design`, `/services/crm-automation`, `/services/ecommerce`, `/services/maintenance`, plus `/pricing` and `/portfolio`.

## Method

For each key commercial page, this reads the likely target keyword's SERP backwards: what page format/content does Google typically reward for that query, and does PinexaDigital's actual page match it? Analysis is based on full page content already extracted (see `content.md`) plus general knowledge of SERP patterns for these query types.

## Page-by-Page Analysis

### Homepage → "web design agency for small business" / "US web design agency"
**What Google rewards:** Clear value prop above the fold, credibility signals (client logos, results, reviews), obvious next-step CTA, fast load.
**User stories:** (1) "I'm a small business owner who typed this because my current site embarrasses me — I want to know fast if this agency 'gets' businesses like mine." (2) "I'm comparison-shopping 3 agencies in open tabs — I want pricing and process visible without a sales call."
**Score: 8/10.** Headline ("We build websites that win US clients") and sub-copy answer story #1 directly. Pricing and "Fixed Price / No hidden fees" badges answer story #2 without gatekeeping behind a form. Gap: no visible social proof (logos, review count, "trusted by X businesses") above the fold — see content.md Finding #2 on the absence of real testimonials/case studies sitewide.

### `/pricing` → "website design pricing" / "how much does a website cost"
**What Google rewards:** Transparent numbers, tiered comparison, FAQ addressing objections (hidden fees, what's included, payment terms).
**User stories:** "I want a number before I talk to anyone, and I want to know what's NOT included so I'm not surprised later."
**Score: 9/10.** Three clear tiers with itemized inclusions, explicit "no hourly billing," and an FAQ directly answering payment plans and post-launch costs. This page matches the rewarded format closely — one of the strongest pages on the site.

### `/services/web-design` → "custom website design US business"
**What Google rewards:** Specifics on tech stack/quality (not just "we design websites"), process transparency, who-it's-for segmentation.
**User stories:** "I want to know if this agency actually builds fast, modern sites or just uses a template — and whether they're right for a service business like mine specifically."
**Score: 8/10.** Names the tech stack (Next.js), gives a PageSpeed number (90-99), and explicitly segments by business type (service businesses, B2B, local businesses, new ventures). Matches intent well.

### `/services/ecommerce` → "ecommerce website development" / "Shopify vs WooCommerce agency"
**What Google rewards:** Platform-comparison honesty (agencies that only push one platform read as biased), clear "which is right for me" guidance.
**User stories:** "I don't know if I need Shopify, WooCommerce, or custom — I want an honest comparison, not a sales pitch for whichever platform pays this agency more."
**Score: 9/10.** The page gives an explicit strengths/trade-offs breakdown for all three options and closes with a direct "if X then Y" decision guide. This is exactly the trust-building format that performs well for comparison-intent queries — notably it structurally matches the two "Shopify vs WooCommerce" blog posts, reinforcing the same message (see cluster.md for the cannibalization risk between those two posts).

### `/services/crm-automation` → "CRM automation for small business"
**What Google rewards:** Naming specific tools (proves real expertise vs. generic "automation" claims), concrete use-case examples.
**User stories:** "I'm drowning in manual lead follow-up and want to know if this is a $200 fix or a $10,000 project before I reach out."
**Score: 8/10.** Names n8n/Zapier/Make and specific CRMs (HubSpot, Pipedrive, GoHighLevel, Salesforce, Zoho, Airtable) — strong expertise signal — and gives a concrete price anchor ($200-300 for simple automations). Matches intent well.

### `/portfolio` → "web design agency portfolio" / brand-check visits
**What Google rewards:** Real, verifiable work — actual client sites, results.
**User stories:** "I've narrowed to 2-3 agencies and want to see real proof before I commit."
**Score: 4/10.** This is the weakest page against intent. Visitors searching or clicking through to a portfolio page expect real client work; this page is explicitly industry demo templates ("imagine your brand in its place"). For the specific job this page needs to do (build final-stage trust before a purchase decision), it currently under-delivers — consistent with the content-quality finding on the absence of case studies sitewide.

### Blog posts (sampled: "how-much-does-a-website-cost", "how-to-choose-a-web-design-agency") → informational intent
**What Google rewards:** Direct, complete answers; original framework/opinion rather than rehashed generic advice; internal links to relevant commercial pages for users ready to convert.
**Score: 9/10.** Both posts open with a direct numeric/actionable answer in the first sentence (good for featured snippets and AI Overviews), use original frameworks (the "7 questions" structure, the DIY/freelancer/agency price-tier breakdown), and link back to PinexaDigital's own pricing as a natural next step. This is well above typical agency-blog quality.

## Findings

### 1. Portfolio page structurally mismatches its search intent
**Severity: High**
Users arriving at `/portfolio` (whether via search or from a comparison-stage click) expect verifiable client proof; the page delivers industry demo templates instead. This is the single biggest page-type/intent mismatch on the site.
**Recommendation:** Add a real case-study section as client work accumulates (see `content.md` Finding #2 — same root cause, cross-referenced here as a search-experience consequence).

### 2. Homepage lacks above-fold social proof
**Severity: Medium**
The homepage answers "what do you do and is it for me" well but doesn't yet answer "can I trust you" within the same scroll — no client count, review score, or logo strip visible before scrolling.
**Recommendation:** Once real client work exists, add a compact trust strip (client count, average rating, or 2-3 recognizable logos) near the hero.

### 3. E-commerce page and the two Shopify-vs-WooCommerce blog posts overlap in message and audience
**Severity: Low**
Not a mismatch on its own — the service page's comparison format is genuinely well-matched to intent — but it duplicates territory with two separate blog posts covering the same decision. See `cluster.md` for the full cannibalization analysis; flagged here because it also means a visitor could land on any of three pages for the same query with inconsistent depth.
**Recommendation:** Cross-link explicitly: the blog posts should point to `/services/ecommerce` as "ready to move forward," and the service page could link to the more detailed blog comparison for undecided visitors.

## JSON Category Block

```json
{
  "name": "Search Experience (SXO)",
  "score": 76,
  "what_works": [
    "Pricing and e-commerce pages closely match the trust-building/comparison format Google rewards for their query types",
    "Service pages name specific tools/tech (Next.js, n8n, HubSpot, etc.) as credible expertise signals rather than generic claims",
    "Blog posts open with direct, quotable answers and use original frameworks rather than generic advice",
    "Consistent 'who this is for' segmentation across service pages helps qualify/disqualify visitors efficiently"
  ],
  "findings": [
    {
      "title": "Portfolio page structurally mismatches its search intent",
      "severity": "High",
      "description": "Visitors expecting real client proof at /portfolio instead find industry demo templates.",
      "recommendation": "Add a real case-study section as client work accumulates."
    },
    {
      "title": "Homepage lacks above-fold social proof",
      "severity": "Medium",
      "description": "Homepage answers relevance well but not trust within the first scroll.",
      "recommendation": "Add a compact trust strip once real client data exists."
    },
    {
      "title": "E-commerce page and two blog posts overlap in message and audience",
      "severity": "Low",
      "description": "Three separate pages answer the same Shopify-vs-WooCommerce decision with inconsistent depth and no cross-linking.",
      "recommendation": "Cross-link the service page and blog posts explicitly toward each other's strengths."
    }
  ]
}
```
