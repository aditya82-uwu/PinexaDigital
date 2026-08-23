# Content Quality & E-E-A-T Findings — pinexadigital.com

**Score: 74/100** | Audit date: 2026-08-23
**Note:** This supersedes the stale 2026-07-04 audit (which itself was a fallback write-up after three prior subagent runs stalled without saving). The site has been rebuilt since (git commit `f5cee20 "new website"`). This pass was done via direct fetch + trafilatura extraction of `/about`, all 4 service pages, `/pricing`, `/portfolio`, and 3 representative blog posts (`how-much-does-a-website-cost`, `how-to-choose-a-web-design-agency`, `seo-for-small-business-us`), plus a raw-HTML check for author/schema bylines.

## Summary

Content quality here is genuinely above average for an agency site: copy is specific, numeric, and low on marketing fluff (concrete pricing, PageSpeed numbers, delivery timelines, named tools like n8n/Zapier/HubSpot). Service pages don't read as templated boilerplate — each has distinct structure and depth (450–550 words) rather than one generic "we do X" paragraph copy-pasted four times. Blog posts sampled are substantial (900–1,225 words), structured for skimmability, and written with an opinionated, specific voice ("A written testimonial is curated and, occasionally, entirely fabricated") that reads as more trustworthy than generic AI-agency filler.

The main weaknesses are all E-E-A-T / trust signals rather than writing quality: every page is authored by "PinexaDigital" the organization, never a named person; the `/portfolio` page explicitly frames its 8 site examples as demos to "imagine your brand in its place" rather than real client work, meaning there are currently **zero real case studies, client names, or testimonials** anywhere on the site; and the `/about` page's confident claims of experience and process carry no verifiable proof points (no client count, no years-in-business figure, no team size or names).

## What Works

- Service pages (`/services/web-design`, `/crm-automation`, `/ecommerce`, `/maintenance`) are differentiated, not duplicated — each targets a distinct audience segment and includes its own FAQ, pricing anchor, and "who this is for" section
- Concrete, checkable claims throughout: "$299 Starter / $499 Growth," "PageSpeed 90–99," "2–3 week delivery," "24hr response time" — far more specific and citable than typical agency copy
- Blog content answers real buyer questions directly and structures answers for extraction (numbered questions, "good sign / red flag" pairs, decision tables) — strong AI-citation and featured-snippet shape
- `/pricing` FAQ directly and honestly answers objection-handling questions (payment plans, post-launch support, "do you work with US businesses only?")
- Voice is consistent and opinionated rather than generic ("A beautiful website that doesn't generate leads is expensive art") — reads as written by people who understand the business, not template-filled

## Findings

### 1. No named human authors anywhere on the site
**Severity: High**
Every blog post's `BlogPosting` schema (verified in raw HTML on `/blog/how-to-choose-a-web-design-agency`) sets `"author":{"@type":"Organization","name":"PinexaDigital"}` — never a `Person`. The `/about` page describes "we" throughout with no founder or team member named. For a site publishing advice that influences real purchasing decisions (web design pricing, agency selection, SEO strategy), Google's E-E-A-T guidance specifically rewards identifiable, credentialed authors. This is the single highest-leverage content fix available.
**Recommendation:** Add at least one named author (real person, title, short bio, headshot) to blog posts and reference them in `BlogPosting.author` as `Person`. If the team genuinely prefers to stay faceless, at minimum add a founder/leadership bio to `/about` with a real name and credentials.

### 2. Portfolio shows demo templates, not real client work — zero case studies or testimonials exist
**Severity: High**
`/portfolio` is explicitly framed as a "Live Demo Showcase" — 8 industry template previews with copy like "imagine your brand in its place," not completed client projects. This is honest (it doesn't misrepresent demos as real work), but it means the site currently has **no proof of actual outcomes**: no client names, no before/after results, no testimonial quotes, no case study with numbers. For a site whose own blog post argues "a written testimonial is curated... a 15-minute call with a real client tells you things a quote never will," the site doesn't yet hold itself to that same standard.
**Recommendation:** As real client projects ship, add a genuine case-study section (client name or industry, problem, outcome, ideally a metric) separate from the demo showcase. Even 2-3 real examples meaningfully changes the trust profile.

### 3. About page makes unverified experience claims
**Severity: Medium**
`/about` asserts operational maturity ("We've seen too many clients burned by agencies that bill by the hour," established process, principles) without any backing numbers — no "X projects delivered," no founding year, no team size, no location/registration info beyond the phone number and email on `/contact`.
**Recommendation:** Add concrete, verifiable specifics: years operating, number of projects/clients served, team size, or a founding story with a date. Even modest real numbers outperform confident-but-unverifiable claims.

### 4. Process/approach section duplicated near-verbatim between `/about` and `/services/web-design`
**Severity: Low**
Both pages describe the same "Discovery call → Strategy/Design → Build, test, launch" sequence in very similar language (e.g., "Full design mockups within 5 business days... You approve before we write a line of code" appears almost identically on both). Not harmful for users (different contexts), but worth a light rewrite pass to avoid the two pages reading as copy-pasted for anyone comparing them directly.
**Recommendation:** Keep `/about`'s version high-level/philosophical and `/services/web-design`'s version more tactical/specific to avoid near-duplicate phrasing.

### 5. Blog byline/date is present but author expertise is never established beyond the org name
**Severity: Info**
`datePublished`/`dateModified` are correctly set per post (good freshness signal), and the org-level `sameAs` links to LinkedIn/Instagram exist — but nothing connects the content to a demonstrable subject-matter expert. This compounds Finding 1 rather than being a separate defect.

## JSON Category Block

```json
{
  "name": "Content Quality",
  "score": 74,
  "what_works": [
    "Differentiated, non-boilerplate service page copy across all 4 service pages",
    "Specific, checkable claims (pricing, PageSpeed scores, delivery timelines) instead of vague marketing language",
    "Blog content structured for direct-answer extraction (numbered lists, decision tables, good-sign/red-flag framing)",
    "Consistent, opinionated brand voice that reads as written by domain experts, not templated AI filler",
    "Honest FAQ content on /pricing and service pages addressing real objections"
  ],
  "findings": [
    {
      "title": "No named human authors anywhere on the site",
      "severity": "High",
      "description": "BlogPosting.author and all page bylines use Organization type only, never Person, across all sampled blog posts and the /about page.",
      "recommendation": "Add named author(s) with title/bio to blog posts and set BlogPosting.author to Person; add founder/leadership names to /about."
    },
    {
      "title": "Portfolio shows demo templates, not real client work — no case studies or testimonials exist",
      "severity": "High",
      "description": "/portfolio explicitly presents 8 industry demo templates ('imagine your brand in its place'), and no other page has client names, testimonials, or outcome data.",
      "recommendation": "Add a real case-study section as client projects ship, with client identity, problem, and measurable outcome."
    },
    {
      "title": "About page makes unverified experience claims",
      "severity": "Medium",
      "description": "/about asserts process maturity and past client pain points without any concrete numbers (years operating, project count, team size).",
      "recommendation": "Add specific, verifiable proof points to /about — founding year, project count, or team size."
    },
    {
      "title": "Process description duplicated near-verbatim between /about and /services/web-design",
      "severity": "Low",
      "description": "The Discovery/Design/Build process narrative is repeated in very similar phrasing on both pages.",
      "recommendation": "Differentiate tone/detail level between the two instances to reduce near-duplicate phrasing."
    }
  ]
}
```
