# PinexaDigital.com — SEO Action Plan
**Generated:** 2026-06-29 | **Current Score:** 36/100 | **Target:** 82+/100

---

## Phase 1: Unblock the Site — Day 1
> Do NOT enable indexing until ALL items in this phase are done.

### 🔴 CRITICAL — Fix in this order

**1. Fix robots.txt** _(5 minutes)_
```
# Replace entire content of public/robots.txt with:
User-agent: *
Allow: /

Sitemap: https://pinexadigital.com/sitemap.xml
```
**Why:** `Disallow: /` is blocking 100% of search engine and AI crawler access. This single fix is the highest-leverage action in the entire audit.

---

**2. Remove global noindex from layout.tsx** _(2 minutes)_

`src/app/layout.tsx:57-60` — change:
```ts
// FROM:
robots: {
  index: false,
  follow: false,
},

// TO:
robots: {
  index: true,
  follow: true,
},
```
**Why:** Second independent blocking layer. Even after fixing robots.txt, this meta tag prevents any page from being indexed.

---

**3. Get a US phone number and update site-config.ts** _(1-2 hours)_

Current: `+91 78198 32001` (Indian mobile)

Options:
- **Google Voice** — Free (personal US number with call forwarding)
- **OpenPhone** — ~$13/mo (business grade, recommended)
- **Grasshopper** — ~$26/mo (most business-like)

Update `src/lib/site-config.ts:5`:
```ts
phone: "+1 (XXX) XXX-XXXX",  // your new US number
```
This auto-propagates to contact page, footer, and JSON-LD schema.

**Why:** An Indian phone number on a US-specialist site causes immediate trust failure with US prospects and confuses Google's entity classification.

---

**4. Create OG image** _(1-2 hours)_

Create a 1200×630px branded JPEG at `/public/og-image.jpg`.

What to include: PinexaDigital logo + tagline ("We build websites that win clients.") on brand background (dark gradient or white with blue accents).

Tools: Figma, Canva, or Adobe Express. Export as JPEG, quality 85+.

**Why:** Referenced in OG and Twitter card metadata but missing — all social sharing (LinkedIn, Slack, iMessage, Twitter) shows no image.

---

**5. Add Privacy Policy and Terms of Service** _(2-3 hours)_

Create two pages:
- `src/app/privacy-policy/page.tsx` — route `/privacy-policy`
- `src/app/terms/page.tsx` — route `/terms`

Use [Termly.io](https://termly.io) or [iubenda.com](https://iubenda.com) to generate content. Must cover:
- What data the contact form collects
- How it's stored/used
- User rights under CCPA (California) and GDPR

Add links to both pages in the Footer component.

**Why:** A contact form collecting email addresses without a Privacy Policy is a CCPA/CAN-SPAM violation and a Google quality rater trust flag.

---

**6. Fix the contact form API route** _(2-4 hours)_

Create `src/app/api/contact/route.ts`:
```ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  // validate fields
  // send email via Resend.com (free tier: 100 emails/day)
  return NextResponse.json({ success: true });
}
```
Recommended: [Resend.com](https://resend.com) — simple Node.js email API, generous free tier.

**Why:** Every contact form submission currently returns 404. Prospective clients cannot reach you.

---

**7. Add founder/team name to About page** _(30-60 minutes)_

`src/app/about/page.tsx` — add a team section:
```tsx
const team = [
  {
    name: "Your Full Name",
    role: "Founder & Lead Developer",
    bio: "2-3 sentences: relevant experience, years in web design, specific expertise.",
    linkedin: "https://linkedin.com/in/yourprofile",
    initials: "YN",
  },
];
```
**Why:** No human identity on the About page is the #1 E-E-A-T failure on the site. US clients spending $997+ need to know who they are paying.

---

**Projected score after Phase 1: ~58/100**

---

## Phase 2: Fix Critical Content Gaps — Week 1-2

**8. Build blog post pages** _(3-7 days)_

Create `src/app/blog/[slug]/page.tsx` dynamic route.

Start with the top 3 posts (highest commercial intent):
1. `how-much-does-a-website-cost` — Update title to 2026, write 1,500+ words
2. `seo-for-small-business-us` — Local SEO guide, 1,500+ words
3. `shopify-vs-woocommerce-2025` — Update title to 2026, write 1,200+ words

Each post must include:
- Named author (your real name + short bio)
- `BlogPosting` JSON-LD schema with `datePublished`, `author`, `headline`
- At least one 2026-dated post (reset freshness signal)
- Direct answer to the main question in the first 50 words

---

**9. Split homepage into Server + Client Components** _(2-4 hours)_

**Step 1:** Rename `src/app/page.tsx` → `src/app/HomeClient.tsx`, add `'use client'` at top.

**Step 2:** Create new `src/app/page.tsx` (Server Component):
```tsx
import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Web Design Agency for US Businesses | PinexaDigital',
  description: 'High-converting web design and development for US businesses. Fixed-price packages from $997. 3-week delivery.',
  alternates: { canonical: 'https://pinexadigital.com' },
};

export default function Home() {
  return <HomeClient />;
}
```
Remove `'use client'` from `HomeClient.tsx` — it's inherited automatically.

**Why:** Client Components cannot export metadata in Next.js App Router. The homepage currently has no page-specific title, no OG override, and no canonical self-link.

---

**10. Upgrade testimonials** _(1-2 hours)_

At minimum: replace initials-only format with full first-and-last names and company names linked to the client's actual website.

Best path: Create a Google Business Profile (free), collect 3-5 real reviews, then link to the GBP from the testimonials section ("Read our Google reviews →").

Remove the "TK" placeholder avatar or add a real corresponding testimonial.

---

**Projected score after Phase 2: ~67/100**

---

## Phase 3: Schema, Content Expansion, Technical Hardening — Weeks 3-4

**11. Add BreadcrumbList schema to Breadcrumb component** _(1 hour)_

`src/components/ui/Breadcrumb.tsx` — inject JSON-LD from the existing `crumbs` prop. High impact, low effort — all the data already exists in the component.

**12. Add AggregateRating + Review schema** _(1 hour)_

Add to root JSON-LD in `layout.tsx` — data already exists in `page.tsx` testimonials array.

**13. Fix areaServed and telephone in schema** _(15 minutes)_

In `layout.tsx`:
```ts
areaServed: { "@type": "Country", "name": "United States" }, // remove "IN"
telephone: "+1 (XXX) XXX-XXXX", // US number from Phase 1
```

**14. Add Service + Offer schema to each service page** _(2-3 hours)_

Add page-level JSON-LD to each of the four service pages. Use the pricing data already in each page file.

**15. Add PriceSpecification / ItemList schema to pricing page** _(1 hour)_

Structured data for the $997 and $2,497 tiers. Enterprise tier: omit price or use InvoicePrice.

**16. Add WebSite schema + logo to layout.tsx** _(30 minutes)_

Add `@type: WebSite` using `@graph` alongside existing `ProfessionalService`. Add `logo` property with a 512×512px image.

**17. Add security headers to next.config.ts** _(1 hour)_

Add `headers()` export with X-Frame-Options, X-Content-Type-Options, Referrer-Policy, HSTS, and basic CSP.

**18. Create /public/llms.txt** _(1 hour)_

See `findings/geo.md` for recommended content.

**19. Expand services overview page to 1,000+ words** _(3-4 hours)_

Currently ~285 words. Add 200+ words per service with problem/solution framing, differentiators, and a mini-FAQ.

**20. Switch to dynamic app/sitemap.ts** _(1-2 hours)_

Replace static sitemap with a dynamic TypeScript file that only lists HTTP 200, indexable URLs. Resubmit to Google Search Console.

**21. Create /public/logo.png** _(30 minutes)_

512×512px PNG for schema `logo` property and Google Knowledge Panel.

---

**Projected score after Phase 3: ~76/100**

---

## Phase 4: Authority, Off-Site Signals, AI Visibility — Month 2+

**22. Create and verify Google Business Profile**

Free. Collect first 5 real reviews. Link from About page footer ("See our Google reviews"). Add `sameAs` link to schema once created.

**23. Build Clutch.co profile**

Clutch is the standard B2B review platform for US web agencies. AI systems (ChatGPT, Perplexity) treat it as a credible citation source. Free to create — requires client verification for reviews.

**24. Launch YouTube channel with 3-5 videos**

YouTube mentions correlate at ~0.737 with AI citation frequency — the strongest off-site brand signal.

Target topics matching the blog posts:
- "How much does a website cost for a small US business? (2026)"
- "Shopify vs WooCommerce — which is better for US stores?"
- "Local SEO for US small businesses: 5-minute tutorial"

Keep each video 5-10 minutes. Thumbnail + intro matching the blog post title.

**25. Add sameAs to schema**

Once GBP, Clutch, LinkedIn, and YouTube are live:
```ts
sameAs: [
  "https://www.linkedin.com/company/pinexadigital",
  "https://www.clutch.co/profile/pinexadigital",
  "https://www.youtube.com/@pinexadigital",
  "https://g.page/pinexadigital", // GBP link
]
```

**26. Build real portfolio case studies**

Each case study needs:
- Client name + industry + location
- The actual client website URL
- Before/after screenshots
- Specific metrics: traffic change, conversion rate, delivery time
- Attributed client quote (full name + company)

Minimum 3 case studies for credible social proof.

**27. Add FAQ sections to homepage and each service page**

5-7 questions per page in question-format headings. Add FAQPage JSON-LD (no SERP rich result as of May 2026, but still helps AI citation).

**28. Set up Google Search Console**

Submit updated sitemap. Monitor:
- Coverage errors (check for 404s being flagged)
- Core Web Vitals report (measure actual INP + LCP)
- Index coverage (confirm pages are being indexed)

**29. Expand all service sub-pages to 800-1,200 words**

Current: ~350-400 words each. Target: 800-1,200 words using the structure from `findings/geo.md`.

**30. Reddit participation**

Authentically answer questions in:
- r/smallbusiness
- r/entrepreneur  
- r/webdev
- r/web_design

Do not spam links. Build a real Reddit identity. This creates off-site brand signals that correlate with AI citation.

---

**Projected score after Phase 4: 82+/100**

---

## Dependency Map

```
Phase 1 (must complete first)
  └── robots.txt fix + noindex removal ──────→ ALL search/AI visibility
  └── US phone number ─────────────────────→ Trust + schema accuracy
  └── Privacy Policy ──────────────────────→ Legal compliance + trust
  └── Blog route (Phase 2) ───────────────→ E-E-A-T + AI citability
  └── Homepage split (Phase 2) ──────────→ Homepage metadata export
      └── Schema improvements (Phase 3) ──→ Rich results
          └── GBP + Clutch (Phase 4) ─────→ sameAs + authority signals
```

---

## Priority Matrix

| Action | Impact | Effort | Priority |
|--------|--------|--------|----------|
| Fix robots.txt | 🔴 Critical | ⚡ 5 min | Do now |
| Remove global noindex | 🔴 Critical | ⚡ 2 min | Do now |
| US phone number | 🔴 Critical | 🟡 1-2 hr | Do now |
| Create OG image | 🟠 High | 🟡 1-2 hr | Day 1 |
| Privacy Policy | 🟠 High | 🟡 2-3 hr | Day 1 |
| Fix /api/contact | 🟠 High | 🟡 2-4 hr | Day 1 |
| Named team on About | 🟠 High | ⚡ 30 min | Day 1 |
| Blog posts (3 articles) | 🟠 High | 🔴 1-2 wk | Week 1-2 |
| Homepage Server split | 🟠 High | 🟡 2-4 hr | Week 1 |
| BreadcrumbList schema | 🟡 Medium | ⚡ 1 hr | Week 3 |
| AggregateRating schema | 🟡 Medium | ⚡ 1 hr | Week 3 |
| Service schema (×4) | 🟡 Medium | 🟡 2-3 hr | Week 3 |
| Pricing schema | 🟡 Medium | ⚡ 1 hr | Week 3 |
| Security headers | 🟡 Medium | ⚡ 1 hr | Week 3 |
| llms.txt | 🟡 Medium | ⚡ 1 hr | Week 3 |
| Expand service pages | 🟡 Medium | 🟡 4-6 hr | Week 3-4 |
| Google Business Profile | 🟡 Medium | 🟡 2-3 hr | Month 2 |
| Clutch.co profile | 🟡 Medium | 🟡 2-3 hr | Month 2 |
| YouTube channel (3 vids) | 🟡 Medium | 🔴 2-4 wk | Month 2 |
| Portfolio case studies | 🟡 Medium | 🔴 1-2 wk | Month 2 |
| FAQ sections | 🟢 Low | 🟡 3-4 hr | Month 2 |
