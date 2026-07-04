# AI Search Readiness (GEO) Findings — pinexadigital.com
**Score: 21/100** | Audit date: 2026-06-29

---

## Platform Visibility Estimate (current state)

| Platform | Estimated Visibility | Primary Blocker |
|----------|---------------------|-----------------|
| Google AI Overviews | ~2/100 | robots.txt + thin content |
| ChatGPT (browsing) | ~3/100 | robots.txt + no entity signals |
| Perplexity | ~2/100 | robots.txt + no off-site mentions |
| Bing Copilot | ~5/100 | robots.txt |

---

## AI Crawler Access Status

| Crawler | Status | Reason |
|---------|--------|--------|
| GPTBot | BLOCKED | `Disallow: /` catches all agents |
| OAI-SearchBot | BLOCKED | `Disallow: /` catches all agents |
| ClaudeBot | BLOCKED | `Disallow: /` catches all agents |
| PerplexityBot | BLOCKED | `Disallow: /` catches all agents |
| Google-Extended | BLOCKED | `Disallow: /` catches all agents |

**llms.txt:** Missing (404)

---

## What Works

- Pricing page has structured, specific data ($997/$2,497/Custom with feature breakdowns) — most citable page on the site
- Process enumerated in clear numbered steps — AI-extractable format
- Blog post titles target high-intent question queries — topic selection is correct
- ProfessionalService JSON-LD present site-wide
- Service descriptions clearly name specific technologies (Next.js, Shopify, WooCommerce)

---

## Critical

### 1. robots.txt blocks all AI crawlers
`Disallow: /` blocks GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended. The site cannot be indexed by, cited by, or appear in responses from any AI search engine. All other GEO improvements are moot until this is fixed.

**Fix:** See `findings/technical.md` — fix robots.txt first. Estimated impact: +35 GEO points.

---

### 2. No llms.txt — AI agents cannot discover site structure
The emerging llms.txt standard is absent. AI agents crawling the site have no structured guidance on content type, permissions, or key pages.

**Fix:** Create `/public/llms.txt`:
```
# PinexaDigital
> Web design and development agency serving US businesses. Fixed-price packages from $997.

## Pages
- [Home](https://pinexadigital.com/): Agency overview, services, and testimonials
- [Pricing](https://pinexadigital.com/pricing): Service tiers — Starter $997, Growth $2,497, Enterprise custom
- [Services](https://pinexadigital.com/services): Web Design, SEO, E-commerce, Maintenance
- [Blog](https://pinexadigital.com/blog): Articles on web design, SEO, and digital growth
- [Portfolio](https://pinexadigital.com/portfolio): Client project examples
- [Contact](https://pinexadigital.com/contact): Get a free quote

## AI Usage
Content may be cited with attribution. Contact: contact@pinexadigital.com
```
Estimated impact: +5 GEO points.

---

### 3. Blog posts 404 — highest-citability content type is completely broken
Blog post titles match high-volume AI-answerable queries: "how much does a website cost", "Shopify vs WooCommerce", "local SEO for small businesses." Every URL returns 404. The entire content marketing investment is invisible to AI engines.

**Fix:** Build the blog route and publish 600-800+ word articles with:
- Author name + short bio
- A direct answer in the first 50 words of each section
- At least 2-3 cited statistics with sources
- Self-contained answer blocks per H2
The pricing article alone, if published, could generate AI Overview citations within weeks of indexing. Estimated impact: +18 GEO points.

---

## High

### 4. Zero named authorship
No page attributes content to a named human. AI citation systems apply E-E-A-T signals — anonymous content from an unknown entity is systematically deprioritized.

**Fix:** Add a named founder/author with: full name, professional headshot, 2-3 sentence bio with credentials, LinkedIn profile URL. Add `Person` schema linked from `Article` schema on each blog post. Estimated impact: significant for blog citability.

---

### 5. Content passages too short for AI citation (40-90 words vs. 134-167 word optimum)
Research on AI citation behavior shows passages of 134-167 words are most frequently extracted. Every section on the site is below this threshold. No self-contained answer blocks exist — an AI system cannot extract a passage that fully answers a user question without surrounding context.

**Fix:** Expand each service card and process step to 150+ words with a direct answer in the first sentence:
> "PinexaDigital builds custom websites for US businesses starting at $997, delivered in 3 weeks. Our process uses Next.js and React for performance scores above 95 on Google's Core Web Vitals..."

This does not require visual redesign — content can expand within accordions or "Learn more" sections.

---

### 6. +91 phone number creates entity classification as Indian business
AI systems use contact geography as a trust signal for local relevance queries. The Indian number undermines US entity classification in Google's Knowledge Graph, ChatGPT's entity resolution, and Perplexity's source evaluation.

**Fix:** Replace with a US virtual number and update the JSON-LD schema `telephone` field.

---

### 7. No brand signals on YouTube, Reddit, LinkedIn, or Clutch
YouTube mentions correlate at ~0.737 with AI citation frequency — the strongest signal of any brand presence metric. Reddit discussions and Wikipedia presence are also high-correlation factors. PinexaDigital has zero detectable presence on any of these platforms.

**Priority order by impact-to-effort:**
1. **YouTube channel** — 3-5 short videos answering the exact questions the blog targets. ChatGPT cites YouTube when users ask those questions.
2. **Reddit** — participate authentically in r/smallbusiness, r/webdev, r/entrepreneur
3. **Clutch.co profile** — verified B2B review platform, AI systems treat it as credible
4. **LinkedIn company page** — consistent posting, entity signal

---

## Medium

### 8. No FAQ schema or question-based headings
All headings are statements ("Our Services", "Why Choose Us"). AI Overviews preferentially surface content structured around questions. No FAQPage schema implemented anywhere.

**Fix:** Add FAQ sections to homepage, pricing, and each service page with question-format headings. Use FAQPage JSON-LD schema (note: provides no Google SERP rich result as of May 2026, but helps AI citation). Sample questions:
- "How much does it cost to build a website for a US business?"
- "How long does a website project take?"
- "What's included in the Starter package?"
- "Do you work with clients outside the US?"

Estimated impact: +8 GEO points.

---

### 9. Service sub-pages too thin for competitive AI citation (~200 words each)
When users ask ChatGPT or Perplexity "what is included in professional web design services," the AI cites sources with detailed, specific answers. At 200 words, these pages cannot compete.

**Fix:** Expand each service page to 800-1,200 words using this structure:
1. Direct answer to "what is this service" in first 60 words
2. Detailed what's-included list with explanations
3. Who it's for (specific business types)
4. Process walkthrough (numbered steps)
5. Pricing transparency
6. FAQ section (5-7 questions)
7. Case study excerpt

---

## Impact Summary

| Fix | Effort | GEO Impact |
|-----|--------|------------|
| Fix robots.txt | 30 min | +35 pts |
| Publish blog posts (2-3) with author | 1-2 weeks | +18 pts |
| Add FAQ schema to key pages | Half-day | +8 pts |
| Create llms.txt | 2 hours | +5 pts |
| Replace +91 with US number | 1 hour | +4 pts |
| Add YouTube videos (3-5) | 2-4 weeks | +7 pts (lagging) |
| **Total potential** | | **~77/100** |
