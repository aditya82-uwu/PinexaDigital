# Visual Analysis — pinexadigital.com

**Date:** 2026-07-04
**Tool:** Playwright (Chromium) — installed fresh in this environment (`pip install playwright && python -m playwright install chromium`), confirmed working via headless launch test.
**Capture status:** SUCCESS — all 6 screenshots (3 pages x 2 viewports) captured without errors, no timeouts, no console errors on any page.

Viewports used: Desktop 1920x1080, Mobile 390x844 (iPhone-size, per task spec).

## Screenshots

| Page | Desktop | Mobile |
|---|---|---|
| Home | `screenshots/desktop.png` | `screenshots/mobile.png` |
| Services | `screenshots/services_desktop.png` | `screenshots/services_mobile.png` |
| Pricing | `screenshots/pricing_desktop.png` | `screenshots/pricing_mobile.png` |

All paths relative to `c:\pinexa-digital\pinexadigital.com-audit\`.

## Summary

The homepage delivers a strong, professional above-the-fold experience on both desktop and mobile: H1 value proposition ("We build websites that win US clients.") and the primary CTA ("Start your project") are both fully visible without scrolling on both viewport sizes, alongside a secondary CTA ("See our work"), a trust badge (5 stars, "Trusted by 50+ US businesses"), and a polished stats/analytics illustration card. No horizontal scroll, no unsized-image layout-shift risk, and no console errors were detected on any of the three pages tested. The main deductions are (a) undersized tap targets on mobile nav icon buttons (theme toggle, hamburger menu) at 32x32px, below the 44-48px accessibility guideline, and (b) on the Services and Pricing pages, no page-specific CTA is visible above the fold on mobile (only global nav "Get a quote" — itself borderline-small at 100x32 desktop / hidden behind hamburger on mobile).

## Findings

### 1. Homepage above-the-fold: excellent (Low severity / positive finding)
**Severity:** Informational
**Description:** On both desktop (1920x1080) and mobile (390x844), the H1, sub-headline, primary CTA button "Start your project" (48px tall, high-contrast indigo/purple gradient), secondary CTA "See our work", and a trust signal (avatars + "50+ US businesses") are all visible without scrolling. On desktop, an additional stats/illustration card reinforces credibility in the same viewport.
**Recommendation:** No action needed — this is a best-practice implementation. Preserve this layout when making future changes to the hero section.

### 2. Mobile nav icon buttons below recommended tap-target size
**Severity:** Medium
**Description:** On mobile (390px width), the theme-toggle button and hamburger/menu-toggle button both measure 32x32px (measured via bounding box). Apple HIG recommends a minimum of 44x44pt and Google Material Design recommends 48x48dp for touch targets. The logo/home link box is also only 32px tall. These are present on all three pages tested (home, services, pricing).
**Recommendation:** Increase the tappable hit area to at least 44x44px (padding can be added around the icon without changing its visual size) to reduce mis-taps, particularly important since the hamburger menu is the only way to reach primary nav links (Services, Portfolio, Pricing, About, Blog, Contact) on mobile.

### 3. No page-level CTA above the fold on Services/Pricing mobile views
**Severity:** Low
**Description:** On the Services page (mobile), the only actionable elements above the fold are the global nav (hidden behind hamburger) — the page's own "Full details & pricing" and "Get a free quote" links appear far down the page (~7000px down). On the Pricing page (mobile), the plan CTA buttons ("Get started", "Start growing", "Let's talk") sit just below the fold (~937px top vs. 844px viewport height) — visible after one scroll, not on load. Desktop views do not have this issue (Pricing CTAs are visible in the 1920x1080 viewport; Services relies on nav only there too).
**Recommendation:** Consider adding a lightweight sticky "Get a quote" CTA bar/button on Services and Pricing mobile views, or moving a compact CTA into the hero subhead area, so conversion intent isn't fully dependent on a scroll + finding the hamburger menu.

### 4. No layout-shift (CLS) risk detected from images
**Severity:** Informational
**Description:** All `<img>` elements found (3 on homepage, 1 each on services/pricing) had explicit width/height attributes or CSS aspect-ratio set — no unsized images that would cause layout shift on load. The hero "analytics" visual on the homepage appears to be built with HTML/CSS/SVG rather than a raster image, further reducing CLS risk.
**Recommendation:** No action needed. Continue using explicit dimensions or `next/image` (which auto-sizes) for any new images added to the site.

### 5. Text contrast and readability
**Severity:** Informational
**Description:** Base font size is 16px across all pages/viewports (meets the 16px+ minimum for mobile readability without pinch-zoom). H1 text uses a near-black (`rgb(23,23,23)`) on white background — strong contrast. Body copy uses a mid-gray on white, which reads fine in the rendered screenshots. No visible overlapping elements or text truncation/overflow was detected on any page/viewport combination tested.
**Recommendation:** No action needed. If a dedicated contrast-ratio audit is desired, spot check the light-blue "NOW TAKING US CLIENTS" badge (blue text on light-blue pill) with a contrast checker, as pill-badges with tinted backgrounds are the most common contrast failure pattern on otherwise-compliant pages.

### 6. No horizontal scroll on any page/viewport
**Severity:** Informational
**Description:** `document.documentElement.scrollWidth` equaled `window.innerWidth` on all 6 page/viewport combinations tested — no horizontal overflow.
**Recommendation:** No action needed.

## Category Score: 90 / 100

**Rationale:** Above-the-fold execution on the highest-priority page (homepage) is excellent on both desktop and mobile with no CLS risk, no horizontal scroll, and strong contrast/readability. Points deducted for undersized mobile nav tap targets (present sitewide) and the lack of an above-the-fold CTA on Services/Pricing mobile views, both of which are moderate/low-severity UX polish items rather than structural problems.
