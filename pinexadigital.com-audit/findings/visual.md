# Visual Analysis — pinexadigital.com

**Date:** 2026-08-23
**Supersedes:** The 2026-07-04 visual audit in this same file is STALE (pre-rebuild) and is fully replaced by this report. The site has since been rebuilt (see git log: "new website", 2026-08-23) and the design, page set, and layout are materially different from what was previously documented.
**Tool:** Playwright (Chromium) automated capture + DOM inspection (bounding boxes, above-fold detection, overlap/text-overflow/console-error checks), executed earlier today. This report analyzes those existing fresh screenshots and the accompanying `visual_audit_raw.json` rather than re-capturing, since both were verified complete and uncorrupted.
**Pages audited:** Homepage, Services, Pricing, Portfolio, Contact, Blog post (`/blog/whats-included-in-a-maintenance-plan`) — 6 pages x 2 viewports = 12 screenshots.
**Viewports used:** Desktop 1440x900, Mobile 375x812 (iPhone-size).

## Screenshots

| Page | Desktop | Mobile |
|---|---|---|
| Home | `screenshots/homepage-desktop.png` | `screenshots/homepage-mobile.png` |
| Services | `screenshots/services-desktop.png` | `screenshots/services-mobile.png` |
| Pricing | `screenshots/pricing-desktop.png` | `screenshots/pricing-mobile.png` |
| Portfolio | `screenshots/portfolio-desktop.png` | `screenshots/portfolio-mobile.png` |
| Contact | `screenshots/contact-desktop.png` | `screenshots/contact-mobile.png` |
| Blog post | `screenshots/blog-post-desktop.png` | `screenshots/blog-post-mobile.png` |

All paths relative to `c:\pinexa-digital\pinexadigital.com-audit\`. Raw DOM/bbox data: `screenshots/visual_audit_raw.json`.

## Summary

This report **supersedes the 2026-07-04 audit**, which was written before the current rebuild and no longer reflects the live site. The rebuilt site is clean and professional: no horizontal scroll, no broken/missing-dimension images, and no console errors were detected across all 6 pages and both viewports. The homepage hero is a genuine strength — H1, sub-headline, and two CTAs are fully visible above the fold on both desktop and mobile with strong text contrast (16px base font, near-black text on white/photo-dark overlay). However, the rebuild introduces some regressions and rough edges that the July audit's simpler 3-page site didn't have: a large, mostly-empty vertical gap between the header and page content on every interior page (Services, Pricing, Portfolio, Contact, Blog) that pushes real content down and wastes above-the-fold space, especially on mobile; a genuine visual bug where the floating quick-contact button overlaps a social-share icon on the mobile blog post; the Contact page's form (its primary conversion element) is not visible above the fold on mobile, unlike the desktop layout where it sits directly beside the copy; and mobile nav icon buttons (theme toggle, hamburger) remain undersized at 32x32px.

## What Works

- **Homepage above-the-fold is strong on both viewports.** H1 ("We build websites that win US clients."), sub-headline, primary CTA ("Start your project"), and secondary CTA ("See our work") are all visible without scrolling on desktop (1440x900) and mobile (375x812) — confirmed via DOM bounding-box data (`h1.visibleAboveFold: true`, both CTAs `aboveFold: true` on both viewports).
- **No horizontal scroll on any page/viewport combination** — `scrollWidth` equals `innerWidth` on all 12 captures.
- **No broken or unsized images anywhere** — `images.missingDims: 0` and `images.broken: 0` on every page/viewport, meaning no CLS risk from images.
- **No console errors** on any of the 6 pages tested.
- **Consistent, readable base typography** — 16px base font size and high-contrast body text (`rgb(26,26,26)` on `rgb(250,250,250)`) sitewide, meeting the 16px minimum for mobile readability without pinch-zoom.
- **Header CTA ("Get a quote") persists above the fold on every page**, giving a consistent, always-reachable conversion path even on pages without a page-specific hero CTA.
- **Contact page desktop layout is excellent** — the full lead-capture form (Name, Email, Company/Website, Service needed, Budget range, project description, Send message button) is entirely visible above the fold alongside trust bullets and contact details, with zero scrolling required.
- **Portfolio page's live-demo showcase cards** are a strong, differentiated above-the-fold element on desktop, clearly communicating "click to preview real work."

## Findings

### 1. Large empty vertical gap between header and content on every interior page
**Severity:** Medium
**Description:** On Services, Pricing, Portfolio, Contact, and the Blog post page, there is a substantial blank white space (roughly 90-100px on desktop, and visually even more pronounced on mobile — see `screenshots/services-mobile.png`, `screenshots/pricing-mobile.png`, `screenshots/portfolio-mobile.png`, `screenshots/blog-post-mobile.png`) between the bottom of the sticky header and the breadcrumb/H1 content. On mobile this gap eats a large share of the 812px viewport before any meaningful content (breadcrumb, "SERVICES"/"PRICING" eyebrow, H1) appears, leaving less room for the value proposition and no room at all for a CTA above the fold on interior pages. The homepage does not have this problem — its hero image starts immediately below the header.
**Recommendation:** Reduce the top padding/margin on interior page hero sections, particularly on mobile, so the H1 and supporting copy start closer to the header the way the homepage does. This reclaims meaningful above-the-fold real estate sitewide.

### 2. Floating contact button overlaps social-share icon on mobile blog post (visual bug)
**Severity:** High
**Description:** On the mobile blog post page (`screenshots/blog-post-mobile.png`), the fixed floating "email" quick-contact button visually overlaps/covers the third social-share icon (Facebook "f") in the article header's share-icon row. This is confirmed by the DOM overlap detector in `visual_audit_raw.json` (`blog-post.mobile.overlaps: [{"a": "A:f", "b": "A:"}]`) — a real layout collision, not a screenshot artifact. The floating icon obscures the share button, making it unclickable/unreadable at that scroll position.
**Recommendation:** Add scroll-aware or position-aware logic so the floating contact/WhatsApp buttons don't render directly over other interactive elements, or increase the floating buttons' bottom offset / add a dismiss-on-scroll behavior near content that also has fixed/sticky interactive elements (like the share-icon column).

### 3. Contact form not visible above the fold on mobile (conversion friction)
**Severity:** Medium
**Description:** On desktop, the Contact page form (the primary conversion action) sits directly beside the copy and is fully visible without scrolling (`contact.desktop`: "Send message" button `aboveFold: true`, top=666.5). On mobile, the layout stacks vertically — headline, trust bullets, and contact-method blocks all appear first — pushing the actual form fields and "Send message" button to `top: 1442px`, far below the 812px mobile viewport (`aboveFold: false`). See `screenshots/contact-mobile.png`, which shows only the headline, bullets, and email/WhatsApp details above the fold, with no visible form field. Mobile visitors must scroll roughly 1.8 screen-heights before reaching the first input field.
**Recommendation:** On mobile, consider reordering the stack so the form (or at least the first field) appears sooner — e.g., collapse the trust bullets into a compact single line, or move the form above the contact-method list — so the conversion action doesn't require excessive scrolling.

### 4. Mobile nav icon buttons remain below recommended tap-target size
**Severity:** Medium
**Description:** On mobile (375px width), the theme-toggle button and hamburger/menu-toggle button both measure 32x32px per the DOM bounding-box data (present identically on all 6 pages tested). Apple HIG recommends a minimum 44x44pt and Google Material Design recommends 48x48dp touch targets. This matches a finding from the pre-rebuild July audit, indicating it was not addressed in the rebuild.
**Recommendation:** Increase the tappable hit area to at least 44x44px (padding around the icon, without necessarily changing the icon's visual size) — particularly important since the hamburger is the only way to reach primary nav (Services, Portfolio, Pricing, About, Blog, Contact) on mobile.

### 5. No page-specific CTA above the fold on Services/Pricing/Portfolio (mobile and desktop)
**Severity:** Low
**Description:** On Services, Pricing, and Portfolio pages, the only above-the-fold actionable elements are the global header nav links and the "Get a quote" header button — there is no in-hero CTA button reinforcing the page's specific value prop (e.g., no "See pricing" or "Start a project" button next to the H1). Page-specific CTAs ("Get a free quote", "Get started", "Start your project") only appear after scrolling ~1,700-8,000px down, per the bounding-box data. The header CTA does provide a baseline conversion path, but it's generic and not contextual to the page content.
**Recommendation:** Add a compact, page-relevant CTA directly beneath each hero sub-headline (e.g., "See our plans" on Services, "Get started" on Pricing) so intent-driven visitors don't need to rely solely on the persistent header button.

### 6. Minor inline-link overlap on blog post (desktop)
**Severity:** Low
**Description:** The DOM overlap check flagged two inline links overlapping in the blog article body on desktop: `"A:the security"` and `"A:See what's included at ea..."` (`visual_audit_raw.json`, `blog-post.desktop.overlaps`). This is a small in-content collision, likely from tight line-height around inline links wrapping near each other, rather than a structural layout break.
**Recommendation:** Review the article's inline link spacing/line-height in that section of the maintenance-plan post to confirm the links don't visually or functionally overlap; add margin or adjust line-height if confirmed on a real browser (not just the automated bbox check).

### 7. Homepage above-the-fold: strong execution (positive)
**Severity:** Informational
**Description:** On both desktop (1440x900) and mobile (375x812), the H1, sub-headline, primary CTA ("Start your project"), and secondary CTA ("See our work") are all visible without scrolling, over a full-bleed photographic hero with adequate text contrast (white text on darkened photo overlay). This is the strongest above-the-fold implementation on the site and should be used as the reference pattern when tightening up the interior pages (see Finding #1).
**Recommendation:** No action needed on the homepage itself; use it as the model for reducing the empty-space gap on interior pages.

## Category Score: 79 / 100

**Rationale:** The rebuild delivers a clean, error-free, professional site with an excellent homepage hero and zero technical rendering issues (no horizontal scroll, no broken images, no console errors, good contrast/type). Score is held back by a genuine visual bug (floating button overlapping a share icon on mobile blog), a real conversion-friction issue (Contact form buried below the fold on mobile), an unaddressed carryover issue (undersized mobile nav tap targets), and a new, sitewide pattern (excess empty space under the header on all interior pages) that reduces above-the-fold effectiveness on the pages that most need it (Services, Pricing).

---

```json
{
  "category": "Visual / UX",
  "score": 79,
  "date": "2026-08-23",
  "supersedes": "2026-07-04",
  "what_works": [
    "Homepage above-the-fold: H1, sub-headline, primary CTA (\"Start your project\"), and secondary CTA (\"See our work\") all visible without scrolling on both 1440x900 desktop and 375x812 mobile",
    "No horizontal scroll on any of the 12 page/viewport combinations tested",
    "No broken or unsized images anywhere (images.missingDims: 0, images.broken: 0 on all pages)",
    "No console errors on any of the 6 pages tested",
    "Consistent 16px base font and high-contrast body text (rgb(26,26,26) on rgb(250,250,250)) sitewide",
    "Header \"Get a quote\" CTA persists above the fold on every page",
    "Contact page desktop: full lead-capture form entirely visible above the fold with no scrolling",
    "Portfolio page live-demo showcase cards are a strong, differentiated above-the-fold element on desktop"
  ],
  "findings": [
    {
      "title": "Large empty vertical gap between header and content on every interior page",
      "severity": "Medium",
      "description": "Services, Pricing, Portfolio, Contact, and Blog post pages all have a substantial blank space between the header and the breadcrumb/H1, most pronounced on mobile, pushing content and any potential CTA out of the above-the-fold area.",
      "screenshots": ["services-mobile.png", "pricing-mobile.png", "portfolio-mobile.png", "blog-post-mobile.png", "services-desktop.png", "pricing-desktop.png", "portfolio-desktop.png"],
      "recommendation": "Reduce top padding/margin on interior page hero sections, especially on mobile, matching the homepage's tighter header-to-content spacing."
    },
    {
      "title": "Floating contact button overlaps social-share icon on mobile blog post",
      "severity": "High",
      "description": "The fixed floating email quick-contact button visually overlaps the Facebook share icon in the blog article header on mobile, confirmed by DOM overlap detection in visual_audit_raw.json (blog-post.mobile.overlaps).",
      "screenshots": ["blog-post-mobile.png"],
      "recommendation": "Add position-aware logic to floating contact/WhatsApp buttons so they do not render directly over other interactive elements like the share-icon column."
    },
    {
      "title": "Contact form not visible above the fold on mobile",
      "severity": "Medium",
      "description": "On mobile, the Contact page form fields and \"Send message\" button sit at top:1442px, far below the 812px viewport, because trust bullets and contact-method blocks are stacked above the form. Desktop shows the form fully above the fold.",
      "screenshots": ["contact-mobile.png", "contact-desktop.png"],
      "recommendation": "Reorder or compress the mobile stack so the form appears sooner, reducing scroll distance to the primary conversion action."
    },
    {
      "title": "Mobile nav icon buttons below recommended tap-target size",
      "severity": "Medium",
      "description": "Theme-toggle and hamburger-menu buttons measure 32x32px on mobile across all pages, below the 44-48px minimum recommended touch target size. This issue also existed in the pre-rebuild July audit and was not fixed.",
      "screenshots": ["homepage-mobile.png", "services-mobile.png", "pricing-mobile.png", "portfolio-mobile.png", "contact-mobile.png", "blog-post-mobile.png"],
      "recommendation": "Increase tappable hit area to at least 44x44px via padding around the icons."
    },
    {
      "title": "No page-specific CTA above the fold on Services/Pricing/Portfolio",
      "severity": "Low",
      "description": "Only the generic header \"Get a quote\" button is above the fold on these pages; page-relevant CTAs appear only after scrolling 1,700px+ down.",
      "screenshots": ["services-desktop.png", "services-mobile.png", "pricing-desktop.png", "pricing-mobile.png", "portfolio-desktop.png", "portfolio-mobile.png"],
      "recommendation": "Add a compact, page-relevant CTA beneath each hero sub-headline."
    },
    {
      "title": "Minor inline-link overlap in blog post body (desktop)",
      "severity": "Low",
      "description": "DOM overlap check flagged two inline links overlapping in the article body on desktop (\"the security\" and \"See what's included at ea...\").",
      "screenshots": ["blog-post-desktop.png"],
      "recommendation": "Review inline link spacing/line-height in that section; adjust margin if confirmed in a real browser."
    },
    {
      "title": "Homepage above-the-fold execution (positive)",
      "severity": "Informational",
      "description": "H1, sub-headline, and two CTAs fully visible without scrolling on both desktop and mobile, with good text contrast over the photographic hero.",
      "screenshots": ["homepage-desktop.png", "homepage-mobile.png"],
      "recommendation": "No action needed; use as the reference pattern for tightening interior-page hero spacing."
    }
  ]
}
```
