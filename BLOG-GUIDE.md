# Blog authoring guide

Rules for adding new posts to the PinexaDigital blog (`src/lib/blog-data.ts`). Read this before writing a new post. Its purpose is consistency: every post should read like it came from the same author and should strengthen the interlinking web between posts and service pages, not sit as an orphan.

## Where everything lives

- All posts live in one array: `posts` in [blog-data.ts](src/lib/blog-data.ts).
- There is no CMS, no MDX, no per-file post. A new post is a new object appended to that array.
- `src/app/blog/page.tsx` lists all posts (sorted newest-first via `getAllPosts`).
- `src/app/blog/[slug]/page.tsx` renders one post, plus a "Related articles" section from `getRelatedPosts`.
- Order inside the `posts` array doesn't matter — sorting is always done by `date`.

## Post schema

```ts
{
  slug: string;          // kebab-case, unique, matches the URL /blog/<slug>
  title: string;          // on-page H1, can be long/conversational
  excerpt: string;        // 1-2 sentences, shown on cards and as fallback meta description
  seoTitle?: string;      // ~50-60 chars incl. "| PinexaDigital", falls back to `title`
  seoDescription?: string;// ~150-160 chars, falls back to `excerpt`
  date: string;           // "YYYY-MM-DD", must be a real, sequential date (see Dates below)
  readTime: string;       // "N min read", estimate ~200 wpm
  category: string;       // MUST reuse an existing category unless genuinely new topic — see taxonomy below
  accent: string;         // Tailwind classes tied 1:1 to category — see taxonomy below
  content: Block[];       // the body, see Block types below
}
```

### Block types

```ts
{ t: "p";    v: string }    // paragraph
{ t: "h2";   v: string }    // section heading
{ t: "h3";   v: string }    // rare, sub-section heading
{ t: "ul";   v: string[] }  // bullet list
{ t: "ol";   v: string[] }  // numbered list (steps, checklists)
{ t: "note"; v: string }    // single highlighted callout box — use once, maybe twice per post, for the one thing worth making unmissable
```

### Dates

Pick the next date after the most recent post's date, spaced 2-5 days apart (matches existing cadence). Check the current newest post before choosing one — don't backdate or collide with an existing date.

## Category taxonomy — reuse before adding

Every category has an accent color hardcoded alongside it. Reusing a category is required for `getRelatedPosts` to surface a new post under existing posts' "Related articles" — a brand-new category starts the post with zero automatic relations.

| Category | Accent classes |
|---|---|
| Content | `bg-lime-500/10 text-lime-600 dark:text-lime-400` |
| Security | `bg-red-500/10 text-red-600 dark:text-red-400` |
| Conversion | `bg-pink-500/10 text-pink-600 dark:text-pink-400` |
| Automation | `bg-indigo-500/10 text-indigo-600 dark:text-indigo-400` |
| Accessibility | `bg-rose-500/10 text-rose-600 dark:text-rose-400` |
| SEO | `bg-violet-500/10 text-violet-600 dark:text-violet-400` |
| Maintenance | `bg-teal-500/10 text-teal-600 dark:text-teal-400` |
| Schema | `bg-amber-500/10 text-amber-600 dark:text-amber-400` |
| AI Search | `bg-cyan-500/10 text-cyan-600 dark:text-cyan-400` |
| Web Design | `bg-blue-500/10 text-blue-600 dark:text-blue-400` |
| E-commerce | `bg-orange-500/10 text-orange-600 dark:text-orange-400` |
| Performance | `bg-emerald-500/10 text-emerald-600 dark:text-emerald-400` |
| Pricing | `bg-yellow-500/10 text-yellow-600 dark:text-yellow-400` |

Only introduce a new category + accent color pair if the post genuinely doesn't fit any of the above. Pick an unused Tailwind color to keep every category visually distinct on the blog grid.

## Voice and structure (match the existing 21 posts)

- **Opening paragraph is the answer, not a preamble.** State the direct, specific claim in sentence one — no "In today's digital landscape..." throat-clearing. E.g. "Website maintenance is the ongoing work that keeps a site secure, fast, and accurate after launch: software updates, backups, uptime monitoring..."
- **Honest, not salesy.** Actively argue against the reader's assumption when it's wrong (e.g. the "does-my-business-need-a-blog" post tells some readers *not* to blog). This is a deliberate trust-building pattern — don't write pure boosterism.
- **Concrete numbers over vague claims.** Real price ranges, percentages, timeframes ("$97–$397/month", "20-70% traffic drop", "6-9 months"). Cite a source when the stat is a real external study (HBR, DOJ, Seyfarth Shaw); don't fabricate stats or sources.
- **Structure:** hero claim paragraph → 4-8 `h2` sections mixing prose/`ul`/`ol` → one `note` callout for the single most important warning or tip → closing paragraph that reframes the takeaway and ends with a CTA link into a `/services/` page.
- **"Common mistakes" section** is a recurring, expected pattern — include one when the topic supports it.
- Keep paragraphs short (3-5 sentences). Bullets get a short lead-in sentence, not just a bare list.

## Interlinking — the required part

Links inside body text use markdown-style syntax that a regex parser converts to real `<Link>`s:

```
[anchor text](/blog/some-slug)
[anchor text](/services/web-design)
```

**Hard technical constraint:** the parser regex is `/\[([^\]]+)\]\((\/[a-z0-9-/]+)\)/g` (in [`[slug]/page.tsx`](src/app/blog/%5Bslug%5D/page.tsx)). The path inside `()` must be lowercase letters, digits, hyphens, and slashes only — no uppercase, no query strings, no anchors/fragments, no trailing punctuation caught in the match. Always start with `/`.

Every new post must do **both** of the following — one-way links from a new post don't build real topical authority on their own:

1. **Link out, 3-5 times minimum.** Weave in natural anchor text (never "click here" or "this article") linking to:
   - 2-4 existing posts that are genuinely relevant to a specific sentence (not dumped in a list at the end)
   - Exactly one `/services/<slug>` link in the closing paragraph as the CTA, phrased as an offer ("tell us what you're running and we'll...", "that's work we build into every...")
2. **Link back in, from 1-2 existing posts.** After writing the new post, find 1-2 existing posts whose content genuinely touches the new post's topic and add an inline link to the new slug at the relevant sentence. This is the step people skip — a new post with no existing posts pointing to it is nearly invisible in the internal graph, since `getRelatedPosts` only surfaces same-category posts automatically and doesn't create in-body links.

### Valid link targets

Service pages that actually exist — do not link to any other `/services/*` path:
- `/services/web-design`
- `/services/ecommerce`
- `/services/maintenance`
- `/services/crm-automation`

There is no `/services/seo` page. For SEO/schema/AI-search topics, CTA into `/services/web-design` (SEO work is sold as part of builds) or `/contact`.

Current post slugs (check this list before choosing a CTA target or claiming a topic isn't covered yet):

```
does-my-business-need-a-blog              (Content)
website-security-small-business-guide     (Security)
landing-page-vs-homepage-ppc              (Conversion)
n8n-vs-zapier-vs-make-comparison          (Automation)
website-accessibility-ada-compliance-guide (Accessibility)
website-redesign-seo-checklist            (SEO)
website-maintenance-guide                 (Maintenance)
crm-automation-small-business-guide       (Automation)
schema-markup-small-business-guide        (Schema)
ai-search-optimization-aeo-geo-guide      (AI Search)
how-much-does-a-website-cost              (Web Design)
seo-for-small-business-us                 (SEO)
shopify-vs-woocommerce-2026               (E-commerce)
website-speed-optimization                (Performance)
web-design-trends-us-2026                 (Web Design)
contact-form-conversion-tips              (Conversion)
how-to-choose-a-web-design-agency         (Web Design)
signs-your-website-needs-a-redesign       (Web Design)
small-business-website-pricing-guide      (Pricing)
shopify-vs-woocommerce-which-is-right-for-you (E-commerce)
whats-included-in-a-maintenance-plan      (Maintenance)
```

## Avoid duplicate/cannibalizing topics

Two pairs already exist that cover nearly the same query (`how-much-does-a-website-cost` / `small-business-website-pricing-guide`, and `shopify-vs-woocommerce-2026` / `shopify-vs-woocommerce-which-is-right-for-you`). Don't add a third. Before writing a new post, scan the slug list above for a title targeting the same core question — if one exists, either pick a genuinely different angle or link to the existing post instead of duplicating it.

## Checklist for adding a new post

1. Pick a topic that isn't already covered (check the slug list above).
2. Pick a category — reuse an existing one unless the topic truly doesn't fit.
3. Write `slug`, `title`, `excerpt`, `seoTitle`, `seoDescription`, `date` (next in sequence), `readTime`, `category`, `accent`.
4. Write `content` as an array of blocks following the voice/structure rules above.
5. While writing, add 3-5 `[anchor](/blog/...)` or `[anchor](/services/...)` links inline, matching the regex constraint.
6. End with a closing paragraph CTA into one real `/services/*` page.
7. Go back to 1-2 existing, topically related posts and add an inline link from them into the new slug.
8. Append the new post object to the `posts` array in `blog-data.ts`.
9. Run the dev server and visually check `/blog/<new-slug>` — confirm links render as clickable, category color matches the table above, and "Related articles" shows sensible posts.
