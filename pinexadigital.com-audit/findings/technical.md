# Technical SEO Findings — pinexadigital.com

**Score: 91/100** | Audit date: 2026-08-23
**Note:** This supersedes the stale 2026-07-04 audit (score 24/100), which described a pre-rebuild version of the site with a sitewide noindex and blocked robots.txt. The site has since been rebuilt (git commit `f5cee20 "new website"`) and the picture is now substantially different — nearly all prior blockers are resolved.

## Summary

The current build is in strong technical shape. All 32 sitemap URLs return clean 200s with self-referencing canonicals and no duplicate `<title>` tags. Domain canonicalization is handled correctly (non-www → www and http → https both 301/308 redirect to the single canonical `https://www.pinexadigital.com`). robots.txt is fully open (`Allow: /`), meta robots is `index, follow` sitewide, a 404 correctly returns HTTP 404, and a strong, consistent security header set (CSP, HSTS with preload, X-Content-Type-Options, X-Frame-Options) is applied across both homepage and interior pages — not just the homepage. The one real weakness is the CSP's reliance on `'unsafe-inline'` for scripts and styles, which weakens its XSS-mitigation value.

## What Works

- All 32 URLs return HTTP 200; no broken links, no redirect chains, no orphaned sitemap entries
- Self-referencing canonical tags on every page checked, no cross-page canonical conflicts
- Clean domain canonicalization: `pinexadigital.com` → `www.pinexadigital.com` (308) and `http://` → `https://` (308), single-hop each
- 404 page returns a true HTTP 404 status (not a soft-404 200)
- `meta name="robots" content="index, follow"` consistent sitewide — no accidental noindex
- Security headers (CSP, HSTS max-age=63072000 with includeSubDomains/preload, X-Content-Type-Options: nosniff, X-Frame-Options: SAMEORIGIN, Permissions-Policy, Referrer-Policy) present identically on homepage and interior pages (verified on a blog post)
- No duplicate `<title>` tags across any of the 32 pages
- Server-rendered HTML (Next.js SSR/SSG on Vercel) — content is present in raw HTML, not dependent on client-side JS execution for crawlability (`is_spa: false`, confirmed via render_page.py)
- All homepage `<img>` tags have descriptive, non-generic alt text; single `<h1>` on homepage; Next.js `/_next/image` optimization in use (responsive `srcSet`, lazy loading on below-fold images)
- `llms.txt` exists at the root with a clean page manifest and an explicit AI-usage/attribution policy (see GEO findings for detail)

## Findings

### 1. CSP allows `'unsafe-inline'` for script-src and style-src
**Severity: Medium**
The Content-Security-Policy header (`script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'`) permits inline scripts and styles, which significantly reduces CSP's effectiveness as an XSS mitigation — an attacker who can inject HTML can also execute inline script despite the CSP being present. This is a common Next.js default (inline styles/scripts from framework internals) but worth hardening.
**Recommendation:** Migrate to nonce-based or hash-based CSP for inline scripts/styles where the framework requires them, removing the blanket `'unsafe-inline'` allowance. Next.js supports CSP nonces via middleware.

### 2. llms.txt references the apex domain (non-www), adding an avoidable redirect hop
**Severity: Low**
`llms.txt` links use `https://pinexadigital.com/...` (no www), which 308-redirects to `https://www.pinexadigital.com/...`. Functionally fine, but AI crawlers that don't follow redirects, or that penalize the extra hop, get a slightly worse signal than necessary.
**Recommendation:** Update `llms.txt` to use the canonical `www.pinexadigital.com` URLs directly.

### 3. No IndexNow integration detected
**Severity: Low**
No evidence of IndexNow key file or ping-on-publish integration. For a site publishing new blog content regularly (21 posts, several within the last two weeks), IndexNow would help Bing/Yandex pick up new/updated URLs faster than waiting on crawl scheduling.
**Recommendation:** Add an IndexNow key file and call the IndexNow API on publish/update (low effort, Bing/Yandex only — does not affect Google).

### 4. Sitemap `lastmod` is a shared build timestamp, not genuine per-page modification dates for static pages
**Severity: Low**
Non-blog URLs in `sitemap.xml` all share an identical `lastmod` (`2026-08-23T08:19:13.292Z`), which looks like a build-time stamp rather than tracked content-change dates — see `findings/sitemap.md` for detail. This is a technical/data-quality issue more than a crawlability one, so it's flagged here as a secondary note.
**Recommendation:** Only update `lastmod` when a page's content actually changes, or omit it for pages where genuine tracking isn't implemented (a wrong-but-present lastmod is worse than an absent one).

## JSON Category Block

```json
{
  "name": "Technical SEO",
  "score": 91,
  "what_works": [
    "All 32 sitemap URLs return clean 200s with self-referencing canonicals",
    "Correct domain canonicalization (non-www and http both redirect to https://www.)",
    "True HTTP 404 on nonexistent pages, no soft-404s",
    "Consistent robots meta (index, follow) and strong security headers sitewide, not just homepage",
    "Server-rendered content, fully crawlable without JS execution",
    "llms.txt present with clean page manifest and AI usage policy"
  ],
  "findings": [
    {
      "title": "CSP allows 'unsafe-inline' for script-src and style-src",
      "severity": "Medium",
      "description": "Content-Security-Policy permits inline scripts/styles, reducing XSS mitigation value.",
      "recommendation": "Move to nonce- or hash-based CSP via Next.js middleware instead of 'unsafe-inline'."
    },
    {
      "title": "llms.txt uses apex (non-www) URLs requiring a redirect hop",
      "severity": "Low",
      "description": "llms.txt links to pinexadigital.com which 308-redirects to www.pinexadigital.com.",
      "recommendation": "Update llms.txt to reference canonical www URLs directly."
    },
    {
      "title": "No IndexNow integration",
      "severity": "Low",
      "description": "No IndexNow key file or publish-time ping detected despite regular blog publishing.",
      "recommendation": "Add IndexNow key file and ping on publish/update for faster Bing/Yandex pickup."
    },
    {
      "title": "Sitemap lastmod is a shared build timestamp for static pages",
      "severity": "Low",
      "description": "All non-blog URLs share one identical lastmod value, undermining its use as a change signal.",
      "recommendation": "Only update lastmod on genuine content change, or omit it where not tracked."
    }
  ]
}
```
