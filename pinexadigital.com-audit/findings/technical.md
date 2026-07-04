# Technical SEO Findings — pinexadigital.com
**Score: 28/100** | Audit date: 2026-06-29

---

## What Works

- Sitemap.xml at /sitemap.xml with 11 URLs, correct lastmod (2026-06-28) and priority values
- Canonical tags on all inner pages via Next.js `alternates.canonical`
- `lang="en"` on `<html>` element
- `next/font/google` — zero render-blocking font requests (Jost + Outfit, font-display: swap)
- `next/image` — automatic WebP/AVIF conversion, lazy loading, and size optimization
- Sitemap URL declared in robots.txt (discoverable even if Disallow is present)
- Single-language site — no hreflang complexity needed

---

## Critical

### 1. robots.txt blocks ALL crawlers
**File:** `public/robots.txt`

Current content:
```
User-Agent: *
Disallow: /

Host: https://pinexadigital.com
Sitemap: https://pinexadigital.com/sitemap.xml
```

`Disallow: /` prevents Googlebot, Bingbot, GPTBot, ClaudeBot, PerplexityBot, and every other crawler from accessing any page. The site has zero organic visibility.

**Fix:**
```
User-agent: *
Allow: /

Sitemap: https://pinexadigital.com/sitemap.xml
```
Remove the non-standard `Host:` directive (Yandex-only, ignored by Google/Bing).

---

### 2. Global meta noindex/nofollow in layout.tsx
**File:** `src/app/layout.tsx:57-60`

```ts
robots: {
  index: false,
  follow: false,
},
```

This emits `<meta name="robots" content="noindex, nofollow">` on every single page. Even after fixing robots.txt, Googlebot will drop every page from the index on first crawl.

**Fix:** Change to `robots: { index: true, follow: true }` in layout.tsx. Apply `noindex` at the page level only for pages that genuinely should not be indexed (e.g., `/thank-you`).

---

### 3. Homepage is a Client Component with no metadata export
**File:** `src/app/page.tsx:1`

`'use client'` at the top prevents Next.js App Router from exporting `metadata`. The homepage inherits only layout defaults — including the global noindex. It also cannot set a page-specific title, OG override, or canonical.

**Fix:** Split the homepage:
```ts
// src/app/page.tsx (Server Component — no 'use client')
import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Web Design Agency for US Businesses | PinexaDigital',
  description: '...',
  alternates: { canonical: 'https://pinexadigital.com' },
  robots: { index: true, follow: true },
};

export default function Home() {
  return <HomeClient />;
}
```
Move all `useState`/`useEffect`/Framer Motion code into `HomeClient.tsx`.

---

## High

### 4. OG image /og-image.jpg missing from /public
All metadata references `/og-image.jpg` (OG + Twitter card). The file does not exist in `/public`. Social sharing previews — Google Discover, LinkedIn, Slack, Twitter/X — will all show no image. This also triggers a 404 request on every page crawl.

**Fix:** Create a 1200×630px branded JPEG at `/public/og-image.jpg`. Export from Figma, Canva, or any design tool showing the logo + tagline on a branded background.

---

### 5. Six blog post pages return 404
All 6 blog post cards in `/blog` link to `/blog/[slug]` routes that return 404. No `app/blog/[slug]/page.tsx` exists. Internal links pointing to dead pages waste PageRank flow and generate crawl errors in Google Search Console.

**Options (in order of preference):**
1. Build `/src/app/blog/[slug]/page.tsx` with real content (best)
2. Remove blog post links and clean the sitemap until pages exist
3. Redirect each slug to `/blog` temporarily via `next.config.ts` redirects

---

### 6. Contact form POSTs to /api/contact — route does not exist
Every form submission returns 404. Prospective clients cannot contact the agency. This is a business-critical failure, not just an SEO issue.

**Fix:** Create `src/app/api/contact/route.ts`:
```ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  // validate + send via Resend/Nodemailer
  return NextResponse.json({ success: true });
}
```

---

### 7. No security headers
`next.config.ts` has no `headers()` export. Missing: CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy. securityheaders.com will grade this F.

**Fix:** Add to `next.config.ts`:
```ts
async headers() {
  return [{
    source: '/(.*)',
    headers: [
      { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
    ],
  }];
}
```

---

## Medium

### 8. Sitemap lists non-existent URLs
After fixing or removing blog post pages, regenerate sitemap dynamically. A sitemap should only list canonically indexable, HTTP 200 pages.

**Fix:** Replace the static sitemap with `src/app/sitemap.ts` using a dynamic export that queries your actual content source. Resubmit via Google Search Console.

---

### 9. No llms.txt file
AI crawlers (GPTBot, ClaudeBot, PerplexityBot) have no structured guidance file. An emerging standard analogous to robots.txt for LLM agents.

**Fix:** Create `/public/llms.txt`:
```
# PinexaDigital
> Web design and development agency for US businesses. Fixed-price packages from $997.

## Pages
- [Home](https://pinexadigital.com/): Agency overview and services
- [Pricing](https://pinexadigital.com/pricing): Service tiers and pricing
- [Services](https://pinexadigital.com/services): Full service catalog
- [Blog](https://pinexadigital.com/blog): Web design and SEO articles
- [Contact](https://pinexadigital.com/contact): Get a free quote
```

---

## Low

### 10. Non-standard Host: directive in robots.txt
Recognized only by Yandex. Google and Bing ignore it. Adds noise. Remove it.

---

### 11. Core Web Vitals risks (LCP + INP)
- Hero image may be missing `priority` prop — delays LCP
- Entire homepage is Client-Side Rendered — INP risk on mobile

**Fix:** Add `priority` to the above-the-fold hero image. After splitting homepage into Server/Client, measure actual CWV via PageSpeed Insights.
