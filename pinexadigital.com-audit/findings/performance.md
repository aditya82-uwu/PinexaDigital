# Performance / Core Web Vitals Audit — pinexadigital.com

**Score: 78/100** | Audit date: 2026-08-23
**Method note (caveat):** No PageSpeed Insights / CrUX API key is configured in this environment, so this is **lab-only** data (Lighthouse, simulated mobile throttling), not real Chrome UX Report field data from actual visitors. Lab numbers under simulated throttling are typically more pessimistic than real-world field data on a fast connection, but they're the best available signal here. This supersedes the 2026-07-04 audit — the site has been rebuilt since (git commit `f5cee20`).

## Summary

Desktop performance is excellent (Lighthouse performance score 100, LCP 0.7s). Mobile performance is good but not great: Lighthouse mobile scores range 0.88–0.94 across the homepage, a service page, a blog post, and `/pricing`, with mobile LCP landing in Google's "Needs Improvement" band (2.5–4.0s) on every page tested — homepage 3.9s, blog post 3.4s, service page 3.2s, pricing 2.9s. Cumulative Layout Shift is perfect (0) everywhere, and Total Blocking Time is well within budget (58–80ms) everywhere, so the site isn't janky or unresponsive — the bottleneck is purely how long it takes the largest above-fold element to paint on a throttled mobile connection.

One concrete, easy fix stood out: **the favicon (`/favicon.png`) is 146KB** — by far the single largest network transfer on the homepage, larger than the actual hero image. A favicon should be a few KB; this one is loaded on every single page view.

## What Works

- Desktop: Lighthouse performance score 100/100, LCP 0.7s, CLS 0, TBT 0ms — no desktop issues
- CLS is 0 (perfect) on every page tested (mobile and desktop) — no layout shift problems from fonts, images, or ads
- TBT is low everywhere (58–80ms, well under the 200ms "good" threshold) — main thread isn't blocked, interactions stay responsive
- Total page weight is reasonable (~649KB on homepage mobile, 32 requests) — not bloated by third-party trackers or excess scripts
- Images use Next.js `/_next/image` with responsive `srcSet` and lazy loading on below-fold images
- Font preloading is already in place (`<link rel="preload">` for woff2 files, confirmed in homepage headers)
- Unused CSS is negligible (0 estimated savings); unused JS is minor (~25KB estimated savings)

## Findings

### 1. Favicon is 146KB — the single largest resource on the homepage
**Severity: High**
`/favicon.png` transfers 146,954 bytes — larger than every other asset on the page, including the hero image (77KB). Favicons are typically expected to be under 10-15KB; a modern favicon setup uses a small optimized PNG/ICO plus SVG, not a full-resolution image. Since the favicon loads on every single page across the entire site, this is pure unnecessary weight repeated site-wide (though browser-cached after first load, it still costs on first visit and cold cache).
**Recommendation:** Replace with a properly sized favicon (32x32 / 180x180 for apple-touch-icon, optimized PNG typically 1-5KB) or an SVG favicon. This is a five-minute fix with an outsized (no pun intended) impact on first-load weight.

### 2. Mobile LCP is in the "Needs Improvement" band (2.5–4.0s) on all 4 pages tested
**Severity: Medium**
Homepage 3.9s, blog post 3.4s, service page 3.2s, pricing 2.9s under Lighthouse's simulated mobile throttling. None crossed into "Poor" (>4.0s), but none hit "Good" (<2.5s) either. Given CLS and TBT are both excellent, this points to render-path timing (JS chunk loading/hydration ahead of the LCP element, or the LCP image/text not being prioritized) rather than a fundamentally slow site.
**Recommendation:** Identify the actual LCP element per page (Lighthouse's `largest-contentful-paint-element` audit didn't resolve an element in this run — worth re-running with `--throttling-method=devtools` for a cleaner trace) and ensure it's prioritized: use `fetchpriority="high"` on the LCP image if it's image-based, or ensure critical text isn't blocked behind JS hydration if it's text-based. Also consider deferring non-critical JS chunks that load before first paint.

### 3. Several JS chunks in the 40–70KB range load on the homepage
**Severity: Low**
Network data shows multiple `/_next/static/chunks/*.js` files each in the 40-70KB range (transfer size) loading on the homepage. Not alarming individually, but cumulatively they compete with the LCP element for bandwidth/parse time on a throttled mobile connection, and likely contribute to Finding 2.
**Recommendation:** Audit whether all homepage chunks are needed for above-the-fold content, or whether some (e.g., below-fold interactive sections) can be code-split to load after LCP.

## JSON Category Block

```json
{
  "name": "Performance (CWV)",
  "score": 78,
  "what_works": [
    "Desktop performance is excellent: Lighthouse 100/100, LCP 0.7s",
    "CLS is 0 (perfect) across every page and viewport tested",
    "TBT is low everywhere (58-80ms), well within the good threshold",
    "Reasonable total page weight (~649KB, 32 requests) with responsive/lazy-loaded images and font preloading already in place"
  ],
  "findings": [
    {
      "title": "Favicon is 146KB, the largest resource on the homepage",
      "severity": "High",
      "description": "/favicon.png transfers 146,954 bytes, larger than the hero image, loaded on every page site-wide.",
      "recommendation": "Replace with a properly optimized favicon (a few KB, PNG or SVG)."
    },
    {
      "title": "Mobile LCP in the Needs Improvement band on all pages tested",
      "severity": "Medium",
      "description": "Lab LCP under mobile throttling ranges 2.9-3.9s across homepage, service page, blog post, and pricing page, versus a <2.5s Good threshold.",
      "recommendation": "Identify and prioritize the actual LCP element per page (fetchpriority=high or reduced JS-hydration blocking)."
    },
    {
      "title": "Multiple 40-70KB JS chunks load on the homepage",
      "severity": "Low",
      "description": "Several Next.js chunk files in this size range compete with the LCP element for mobile bandwidth/parse time.",
      "recommendation": "Audit whether all homepage JS is needed above-the-fold; code-split non-critical sections to load after first paint."
    }
  ]
}
```
