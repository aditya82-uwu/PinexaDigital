# Performance / Core Web Vitals Audit — pinexadigital.com

**Method note (important caveat):** No PageSpeed Insights / CrUX API key was configured for this run, so this assessment is **lab-only** (Lighthouse 13.4.0 CLI, local runs) with simulated throttling. There is no real Chrome User Experience Report (field) data behind these numbers — actual 75th-percentile visitor experience (device mix, network conditions, cache-cold visits) may differ. Treat the "estimated CWV status" below as a lab-based projection, not a confirmed pass/fail.

Pages tested: `/`, `/services`, `/pricing`, `/portfolio`
Tool: `npx lighthouse` (performance category only), one run per page per profile.

## Category Score: 85 / 100 (lab estimate)

## Estimated Core Web Vitals Status (mobile, simulated — closest proxy to real-world 75th percentile)

| Metric | Homepage (lab) | Estimated Field Status | Notes |
|---|---|---|---|
| LCP | 2.7s (mobile sim) / 1.1s (desktop sim) | **Needs Improvement (borderline)** | Mobile simulated result sits right at the 2.5s "Good" boundary; real-world 75th percentile (slower devices, cache-cold TTFB, no CDN warm hit) plausibly crosses into 2.5–4.0s territory. |
| INP (proxy via TBT) | 161ms mobile TBT / 0–21ms desktop TBT | **Good** | Low JS execution cost, no long tasks observed, no third-party scripts hijacking the main thread. |
| CLS | 0 (all 4 pages, both profiles) | **Good** | Every image request inspected carried explicit `width`/`height` attributes via `next/image`; no layout shift measured in any run. |

## Raw Lab Data

### Desktop (simulate, no CPU throttle, RTT 40ms / 10 Mbps)
| Page | Perf Score | LCP | CLS | TBT | Speed Index | Server Response |
|---|---|---|---|---|---|---|
| / | 93 | 1.1s | 0 | 21ms | 2.3s | 185ms |
| /services | 98 | 0.4s | 0 | 0ms | 1.6s | 307ms |
| /pricing | 99 | 0.5s | 0 | 0ms | 1.3s | 184ms |
| /portfolio | 93 | 0.5s | 0 | 0ms | 2.7s | 290ms |

### Mobile (simulate, 4x CPU slowdown, slow-4G-like RTT 150ms / ~1.6 Mbps) — homepage only run in this session
| Metric | Value | Score |
|---|---|---|
| LCP | 2.7s | 0.85 |
| CLS | 0 | 1.0 |
| TBT | 161ms | 0.93 |
| FCP | 1.0s | 1.0 |
| Speed Index | 3.9s | 0.82 |
| Server response (TTFB) | 293ms | 1.0 |
| Total page weight | 512 KiB | good |
| Unused JavaScript | ~48 KiB estimated savings | flagged |

### Real-world curl check (single sample, this network location)
- Homepage: `HTTP 200`, total time 0.575s, TTFB 0.43s, 77 KB HTML, `X-Vercel-Cache: HIT`, `Age: 606` (served from edge cache), gzip encoding confirmed.

## Findings

### 1. Mobile LCP is borderline at the "Good" threshold (Medium severity)
Simulated mobile LCP for the homepage measured 2.7s — just above the 2.5s "Good" cutoff. Desktop LCP is excellent (1.1s), so the gap is driven by mobile CPU/network throttling and hero image delivery on constrained connections. Given CWV grading uses the 75th percentile, any additional real-world variance (slower devices, cache-cold ISR revalidation, cellular networks) could push a meaningful share of mobile visits into "Needs Improvement."
**Recommendation:** Add `fetchpriority="high"` (and ensure no `loading="lazy"`) on the hero/LCP image; preload it explicitly if it's not the site logo; confirm the LCP element is served at an appropriately capped resolution for mobile viewports (avoid shipping the same large `srcSet` candidate unnecessarily); verify the hero image compresses well via `next/image` AVIF/WebP output.

### 2. ~48 KiB of estimated unused JavaScript (Low severity)
Lighthouse flagged unused JS on the homepage bundle (9 first-party `_next/static` chunks observed, none third-party). This is a minor contributor to mobile TBT/parse cost.
**Recommendation:** Audit chunk composition for unused component code (e.g., unused UI library paths, icon sets); confirm route-level code-splitting so `/pricing` and `/services` don't pull homepage-only logic; re-run `next build --analyze` if available.

### 3. Speed Index elevated on image-heavy pages (Low-Medium severity)
Portfolio (2.7s desktop) and homepage mobile (3.9s) show slower visual completeness than `/services` and `/pricing`, consistent with more/larger imagery (Unsplash-sourced photos) painting progressively.
**Recommendation:** Ensure only the first 1-2 above-the-fold images are eager-loaded; confirm all portfolio grid images use `loading="lazy"` (largely already true per HTML sample) and appropriately small `srcSet` breakpoints for grid thumbnails.

### 4. Good practices already in place (Positive / Informational)
- CLS measured at 0 across all four pages and both device profiles — `next/image` is consistently emitting explicit `width`/`height`, eliminating the most common layout-shift cause.
- Fonts use `next/font/google` (Jost, Outfit) with `display: swap` and preloaded `woff2` — no font-driven CLS/FOIT risk observed.
- No third-party analytics/tag-manager scripts (GTM, GA, Hotjar, Clarity, etc.) were found in the network request list or HTML `<head>` for the homepage — nothing hijacking the main thread today. (Re-check this if/when analytics tooling is added, as that is the single most common future INP regression source.)
- Vercel edge caching is functioning (`X-Vercel-Cache: HIT`, gzip `Content-Encoding`), keeping TTFB in the 180–310ms lab range across pages, within acceptable bounds for LCP.

### 5. No field (CrUX) data available (Informational)
This assessment could not validate against real Chrome User Experience Report data (no API key configured / possibly below CrUX traffic threshold). All figures above are single-run lab simulations and should be treated as directional, not authoritative. Recommend configuring a PageSpeed Insights API key or checking CrUX Vis once the domain accumulates sufficient traffic, and re-running this audit against field data before treating LCP as fully resolved.

## Prioritized Recommendations (by expected impact)
1. **High:** Confirm/optimize LCP element delivery on mobile (fetchpriority, sizing, compression) — closes the borderline LCP gap.
2. **Medium:** Trim ~48 KiB unused JS from shipped bundles to reduce mobile TBT/INP risk headroom.
3. **Medium:** Audit image loading strategy on `/portfolio` (and homepage) to improve Speed Index.
4. **Low:** Once real traffic accumulates, replace this lab-only estimate with CrUX field data (PageSpeed Insights API key or CrUX Vis) for authoritative pass/fail against the 75th-percentile thresholds.
5. **Ongoing:** If analytics/tag-manager scripts are added in the future, load them via `next/script` with `strategy="lazyOnload"` or `afterInteractive` to protect the currently-clean INP profile.
