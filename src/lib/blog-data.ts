export type Block =
  | { t: "p"; v: string }
  | { t: "h2"; v: string }
  | { t: "h3"; v: string }
  | { t: "ul"; v: string[] }
  | { t: "ol"; v: string[] }
  | { t: "note"; v: string };

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  /** Optional SEO-specific <title>, kept short (~50-60 chars incl. "| PinexaDigital"). Falls back to `title`. */
  seoTitle?: string;
  /** Optional SEO-specific meta description (~150-160 chars). Falls back to `excerpt`. */
  seoDescription?: string;
  date: string;
  readTime: string;
  category: string;
  accent: string;
  content: Block[];
}

export const posts: Post[] = [
  {
    slug: "crm-automation-small-business-guide",
    title: "CRM automation for small businesses: how to stop leads slipping through the cracks.",
    excerpt:
      "A practical guide to CRM automation for US small businesses: which workflows to automate first, which tools to use, and what it realistically costs.",
    seoTitle: "CRM Automation Guide for Small Businesses",
    seoDescription:
      "How CRM automation stops leads slipping through the cracks: the workflows to build first, HubSpot vs Pipedrive vs GoHighLevel, and realistic 2026 pricing.",
    date: "2026-07-12",
    readTime: "6 min read",
    category: "Automation",
    accent: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
    content: [
      {
        t: "p",
        v: "CRM automation means connecting your customer relationship management system to the other tools you use, your website, email, calendar, invoicing, so leads and data move between them without anyone manually copying and pasting. For a small business, the highest-value automation is almost always the simplest one: getting a new lead into the CRM and followed up with automatically, the moment they submit a form, not whenever someone remembers to check.",
      },
      {
        t: "h2",
        v: "The real cost of manual lead follow-up",
      },
      {
        t: "p",
        v: "Research from Harvard Business Review and InsideSales found that businesses contacting a lead within 5 minutes of submission are roughly 21 times more likely to qualify that lead than businesses that wait 30 minutes. Most small businesses aren't losing deals to competitors with a better product, they're losing them to competitors who simply responded first. If your leads sit in an inbox until someone has time, or worse, live only in a spreadsheet someone updates once a day, you are actively losing winnable business to slower follow-up, not worse service.",
      },
      {
        t: "h2",
        v: "What CRM automation actually means",
      },
      {
        t: "p",
        v: "A CRM (HubSpot, Pipedrive, GoHighLevel, Salesforce, Zoho) is the system of record: it stores your contacts, deals, and pipeline stages. Automation tools (n8n, Zapier, Make) sit on top and move data between the CRM and everything else, your [contact form](/blog/contact-form-conversion-tips), email, Slack, invoicing software, without a human touching it. You need both pieces. A CRM without automation is just a fancier spreadsheet someone still has to update by hand.",
      },
      {
        t: "h2",
        v: "The five automations worth building first",
      },
      {
        t: "ul",
        v: [
          "Instant lead routing: a website form submission creates a CRM contact and assigns it to the right person within seconds, not at the next check-in",
          "Automated follow-up sequences: a scheduled email or SMS sequence triggers the moment a lead comes in, so nobody goes cold while your team is busy",
          "Deal stage sync: when a deal moves stages in the CRM, connected tools (invoicing, project boards, Slack) update automatically instead of needing a second manual step",
          "Duplicate detection and enrichment: incoming leads are checked against existing contacts and enriched with basic company data before a human ever sees them",
          "Missed-call and no-show recovery: a missed call or a no-show appointment automatically triggers a text or email instead of quietly disappearing",
        ],
      },
      {
        t: "h2",
        v: "Choosing the right CRM before you automate anything",
      },
      {
        t: "p",
        v: "Automating a CRM that doesn't fit how you actually sell just makes the wrong process happen faster. Pick the platform first.",
      },
      {
        t: "ul",
        v: [
          "HubSpot: strong free tier, excellent for businesses that also want marketing and content tools in one place",
          "Pipedrive: simple, visual pipeline, a good fit for straightforward sales-only teams that don't need marketing features",
          "GoHighLevel: built for agencies and service businesses managing multiple clients or locations from one dashboard",
          "Salesforce: the most powerful and the most complex, worth it once your team and process outgrow simpler tools",
          "Zoho or Airtable: budget-friendly, flexible options for businesses with a smaller lead volume or a highly custom process",
        ],
      },
      {
        t: "h2",
        v: "n8n vs. Zapier vs. Make",
      },
      {
        t: "p",
        v: "The three main automation platforms differ mostly in cost structure and flexibility, not core capability.",
      },
      {
        t: "ul",
        v: [
          "Zapier: the easiest to learn, huge app library, pricing scales quickly once you need more than a few thousand tasks a month",
          "Make: more visual and flexible than Zapier for complex, branching logic, generally cheaper at higher volume",
          "n8n: open-source and self-hostable, the most cost-effective at scale, but benefits from technical setup help to configure correctly",
        ],
      },
      {
        t: "h2",
        v: "A realistic first project",
      },
      {
        t: "p",
        v: "A typical starting automation looks like this: a visitor submits your website's contact form. Within seconds, a new contact is created in your CRM, assigned to the right team member based on the service they selected, a Slack notification alerts your team, and an automated email confirms receipt and sets expectations for response time. That single workflow, buildable in a few days, closes the exact gap the 5-minute response research points to, and it's usually the first automation we build for a new client.",
      },
      {
        t: "h2",
        v: "What it actually costs",
      },
      {
        t: "p",
        v: "Simple, single-workflow automations, like the lead routing example above, typically run $200–$300 as a one-time setup cost. Multi-system integrations with custom logic, such as syncing a CRM, invoicing platform, and project management tool together, are scoped individually and usually land between $500 and $2,000 depending on complexity. There's rarely an ongoing monthly fee beyond what the CRM and automation platform themselves charge, since the automation logic itself is a one-time build.",
      },
      {
        t: "note",
        v: "Automations fail silently. A connected app changes its API, a field gets renamed, and a workflow that worked for months quietly stops routing leads, often for weeks before anyone notices. Set up error alerts on every automation you build, or have whoever built it monitor it for you.",
      },
      {
        t: "h2",
        v: "The ROI math",
      },
      {
        t: "p",
        v: "Consider a service business getting 40 website leads a month at a 25% close rate and a $2,000 average deal size. Improving response time from same-day to instant, based on the 21x qualification research, realistically pushes close rate up by even a few percentage points. A single additional closed deal at $2,000 pays for a $200–$300 automation build many times over in the first month, and the automation keeps working every month after that without additional cost.",
      },
      {
        t: "h2",
        v: "Common mistakes",
      },
      {
        t: "ul",
        v: [
          "Automating a broken process instead of fixing it first, speed doesn't help if the underlying workflow is wrong",
          "Skipping monitoring, so a silent failure goes unnoticed for weeks",
          "Over-automating on day one instead of starting with the highest-impact workflow and expanding from there",
          "Choosing a CRM based on features you might need someday instead of the process you actually run today",
        ],
      },
      {
        t: "p",
        v: "CRM automation isn't about replacing your team, it's about making sure a lead never waits on a human who's simply busy with something else. Start with one workflow, the one costing you the most missed leads today, and expand from there. If you want a fixed quote on [connecting your specific tools](/services/crm-automation), tell us what you're working with and we'll follow up honestly, including if a simpler fix would solve it first.",
      },
    ],
  },
  {
    slug: "schema-markup-small-business-guide",
    title: "Schema markup for small business websites: what to add (and what to skip) in 2026.",
    excerpt:
      "A practical guide to Schema.org structured data: the JSON-LD types worth adding, the deprecated ones to avoid, and why schema now matters for AI search too.",
    seoTitle: "Schema Markup Guide for Small Business Sites",
    seoDescription:
      "Which Schema.org structured data types to add in 2026, which ones Google deprecated, and how JSON-LD helps both Google rankings and AI search citations.",
    date: "2026-07-13",
    readTime: "6 min read",
    category: "Schema",
    accent: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    content: [
      {
        t: "p",
        v: "Schema markup is a standardized code format, usually JSON-LD, that tells search engines exactly what your content means, not just what it says. A page can say \"Open Mon-Fri, 9-5\" in plain text and a crawler has to guess whether that's your hours or a quote from a customer. Schema removes the guessing: it labels that text as openingHours on a LocalBusiness entity, unambiguously. Content with proper schema has roughly 2.5x higher odds of being pulled into AI-generated answers, according to data Google and Microsoft have both confirmed, which makes this less optional than it used to be.",
      },
      {
        t: "h2",
        v: "What schema markup actually does",
      },
      {
        t: "p",
        v: "Schema doesn't change how your page looks to a human visitor. It's invisible markup sitting in a <script type=\"application/ld+json\"> tag, read only by machines: Google's crawler, Bing's crawler, and increasingly the retrieval systems behind ChatGPT, Perplexity, and Google's AI Overviews. Done well, it can earn you rich results (star ratings, breadcrumbs, sitelinks in search) and, more importantly in 2026, it's how AI systems verify facts about your business before citing you as a source.",
      },
      {
        t: "h2",
        v: "The types worth adding today",
      },
      {
        t: "ul",
        v: [
          "Organization or ProfessionalService: your business name, logo, contact info, and social profiles, the foundational entity everything else references",
          "LocalBusiness: for any business with a physical location or service area, name, address, phone, hours, geo coordinates, priceRange",
          "Service: what you offer, who provides it, and what area it covers",
          "Article or BlogPosting: headline, author, publish date, and publisher for every blog post, exactly what powers this post's own markup",
          "BreadcrumbList: the navigation path to a page, cheap to add and genuinely useful for both crawlers and rich results",
          "Product and Offer: for e-commerce, pricing, availability, and SKU data that feeds Google Shopping",
          "Review and AggregateRating: only when the reviews are real and verifiable. Fabricated review schema violates Google's structured data policies and FTC endorsement guidance, and it's easy to get caught",
        ],
      },
      {
        t: "h2",
        v: "What to skip",
      },
      {
        t: "p",
        v: "Not every schema type still earns its keep. A few common ones are worth avoiding or retiring:",
      },
      {
        t: "ul",
        v: [
          "HowTo: Google removed how-to rich results back in September 2023. Adding this schema today does nothing for your SERP appearance",
          "FAQPage for the sake of a rich result: Google fully retired FAQ rich results for every site on May 7, 2026. It no longer changes how you appear in classic search",
          "Any schema with placeholder text left in from a template (\"[Business Name]\", \"[City]\"). This actively damages trust signals and can trigger manual review",
          "Duplicate or conflicting schema blocks on the same page describing the same entity differently, this confuses crawlers more than having no schema at all",
        ],
      },
      {
        t: "note",
        v: "FAQPage schema is still worth keeping if you already have it, and still worth adding if AI visibility is your goal rather than a Google rich result. AI Overviews and AI Mode use structured data for entity resolution during answer synthesis, so accurate FAQ markup can lift your odds of being cited by an AI assistant even though it no longer earns SERP real estate.",
      },
      {
        t: "h2",
        v: "LocalBusiness schema if you serve a specific area",
      },
      {
        t: "p",
        v: "If your business serves customers in specific cities, LocalBusiness schema is one of the highest-leverage additions you can make, alongside the Google Business Profile work covered in our [local SEO guide](/blog/seo-for-small-business-us). Include your exact NAP (name, address, phone) matching what's on your GBP listing, your service area, and your hours. Inconsistency between your schema and your GBP listing sends a mild distrust signal to Google, so keep them identical.",
      },
      {
        t: "h2",
        v: "Schema is now an AI search signal too",
      },
      {
        t: "p",
        v: "Structured data used to be purely a Google SERP play. That's changed. As covered in our [guide to AEO and GEO](/blog/ai-search-optimization-aeo-geo-guide), AI systems retrieve and verify facts using structured data during answer generation, it's one of the clearest, lowest-effort signals you can give a language model about who you are and what you do. A business with clean Organization and Service schema is simply easier for an AI system to describe accurately than one with none.",
      },
      {
        t: "h2",
        v: "How to add schema without hiring a developer",
      },
      {
        t: "ol",
        v: [
          "Identify the entity type that matches your page (Organization, LocalBusiness, Service, Article, Product)",
          "Write the JSON-LD block by hand or generate it with a schema generator tool, filling in only real, verifiable data",
          "Add it inside a <script type=\"application/ld+json\"> tag in your page's <head> or body",
          "Test it in Google's Rich Results Test and the Schema.org validator before publishing",
          "Re-test after any redesign, since schema is easy to lose silently when a template changes",
        ],
      },
      {
        t: "h2",
        v: "Common mistakes that undo the benefit",
      },
      {
        t: "ul",
        v: [
          "Relative URLs instead of absolute (https://yoursite.com/page, not /page)",
          "Dates not in ISO 8601 format (2026-07-13, not \"July 13\")",
          "Schema describing something the visible page doesn't actually say, Google calls this a mismatch and can ignore or penalize it",
          "Only adding schema to the homepage and forgetting service and blog pages, where it matters just as much",
        ],
      },
      {
        t: "p",
        v: "Schema markup is a few hours of careful, unglamorous work that pays off every time a crawler or an AI model tries to understand your site. It won't rescue thin content or a slow page, but layered on top of a site that's already solid, it's one of the cheapest ways to make sure both Google and AI search describe your business correctly. It's part of the technical SEO we build into every site from day one, not bolted on after launch.",
      },
    ],
  },
  {
    slug: "ai-search-optimization-aeo-geo-guide",
    title: "AI search is changing SEO: how to get cited by ChatGPT and Google AI Overviews in 2026.",
    excerpt:
      "Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO), explained: how AI search actually picks what to cite, and the steps US businesses need to take now.",
    seoTitle: "AEO & GEO: How to Get Cited by AI Search",
    seoDescription:
      "Learn how AEO and GEO help your business get cited by ChatGPT, Perplexity, and Google AI Overviews in 2026. Actionable steps for US small businesses.",
    date: "2026-07-11",
    readTime: "7 min read",
    category: "AI Search",
    accent: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
    content: [
      {
        t: "p",
        v: "AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization) are the practices of structuring your website so AI systems, Google AI Overviews, ChatGPT, Perplexity, Copilot, can find, understand, and cite it as a source. Traditional SEO earns you a blue link. AEO and GEO earn you a mention inside the answer itself, often with no click at all. For US small businesses, that shift is no longer optional to ignore.",
      },
      {
        t: "h2",
        v: "How AEO and GEO differ from traditional SEO",
      },
      {
        t: "p",
        v: "Traditional SEO optimizes for ranking position on a results page: you compete for the #1 spot, and the searcher clicks through to your site. AEO and GEO optimize for something different: being the source an AI model pulls from when it composes an answer directly on the results page or inside a chat interface. The searcher may never visit your site, yet your brand name gets said out loud, and that citation still drives awareness, trust, and eventually direct traffic. The two disciplines overlap heavily (both reward genuine expertise, clear structure, and technical crawlability) but GEO adds a layer traditional SEO never had to think about: writing in a way a language model can lift a clean, accurate, self-contained answer out of your page.",
      },
      {
        t: "h2",
        v: "Why this matters for your business right now",
      },
      {
        t: "p",
        v: "Zero-click searches, where the user gets their answer without visiting any website, already account for the majority of Google searches, and AI Overviews have pushed that further by inserting a generated summary above the traditional results for most informational queries. Gartner has predicted that traditional search engine volume will fall meaningfully by 2026 as more people default to AI assistants for research. If your business's information (services, pricing logic, service area, expertise) only exists in a format AI systems can't parse cleanly, you become invisible in exactly the moment more of your customers are looking.",
      },
      {
        t: "h2",
        v: "How AI engines actually decide what to cite",
      },
      {
        t: "p",
        v: "AI answer engines aren't ranking pages the way Google's classic algorithm does. They're retrieving passages and judging which ones are trustworthy and extractable enough to summarize. The signals that matter:",
      },
      {
        t: "ul",
        v: [
          "Crawlability: the page must be reachable by the AI's crawler and rendered content must be present in the HTML, not locked behind client-side JavaScript the crawler can't execute",
          "Clear, self-contained passages: a paragraph that answers one question fully in a few sentences is easy to lift; a paragraph that depends on three other paragraphs of context is not",
          "Corroboration across the web: AI models weigh confidence higher when the same fact appears consistently across multiple independent sources, not just your own site",
          "Freshness and specificity: dated, vague content loses to content with clear numbers, dates, and named specifics",
          "E-E-A-T signals: demonstrated experience and expertise still matter, arguably more, since AI models are explicitly trained to prefer trustworthy sources over generic content",
        ],
      },
      {
        t: "h2",
        v: "Step 1: make your content machine-readable",
      },
      {
        t: "p",
        v: "Before an AI system can cite you, it has to be able to parse you cleanly. This is the technical foundation everything else sits on.",
      },
      {
        t: "ul",
        v: [
          "Use semantic HTML: real <h1>-<h6> headings, real lists, real tables, not divs styled to look like them",
          "Server-render your critical content (Next.js does this by default) so it's present in the initial HTML, not injected later by JavaScript",
          "[Add Schema.org structured data](/blog/schema-markup-small-business-guide) (Organization, Service, Article) so AI systems get an unambiguous, machine-readable summary of who you are and what you offer",
          "Keep one clear topic per page. Pages that try to answer five unrelated questions dilute the passage-level clarity AI retrieval depends on",
        ],
      },
      {
        t: "h2",
        v: "Step 2: write answer-first, extractable content",
      },
      {
        t: "p",
        v: "The single highest-leverage change most businesses can make is restructuring how they open a section. Bury the answer under three sentences of throat-clearing and an AI model has to work to extract it, or skips your page for a competitor's cleaner passage. Lead with the direct answer in the first sentence, then support it.",
      },
      {
        t: "h3",
        v: "Before and after",
      },
      {
        t: "ul",
        v: [
          "Before: \"There are a lot of factors that go into how much a website costs, and it really depends on your specific needs, but generally speaking...\"",
          "After: \"A professional US small business website typically costs $299–$5,000 depending on page count and features. Here's what drives that range.\"",
        ],
      },
      {
        t: "p",
        v: "The second version is a complete, quotable answer on its own. That's the sentence a search engine's AI summary or a ChatGPT response is most likely to lift verbatim, with your brand attached.",
      },
      {
        t: "h2",
        v: "Step 3: build topical authority with content clusters",
      },
      {
        t: "p",
        v: "AI systems weigh a site's overall depth on a subject, not just the single page being cited. A business with one thin blog post about web design pricing is a weaker source than one with a genuine cluster: pricing, timelines, platform comparisons, and process, all linked together and all specific. Build out the two or three topics your business is genuinely expert in and cover them thoroughly rather than spreading thin across everything.",
      },
      {
        t: "h2",
        v: "Step 4: let AI crawlers in",
      },
      {
        t: "p",
        v: "None of this matters if your robots.txt blocks the crawlers that feed these systems. Check that GPTBot, ClaudeBot, PerplexityBot, and Google-Extended are explicitly allowed, not caught by an old blanket disallow rule. Many sites accidentally block AI crawlers years ago while trying to stop scrapers, and never revisited the file. Adding an llms.txt file at your root, a plain-text summary of your site's key pages and purpose, is an emerging convention several AI platforms already reference to understand a site faster.",
      },
      {
        t: "note",
        v: "Audit your robots.txt today. A single overly broad \"Disallow: /\" rule combined with a wildcard user-agent silently blocks every AI crawler and makes you invisible to AI search regardless of how good your content is.",
      },
      {
        t: "h2",
        v: "Step 5: earn mentions beyond your own website",
      },
      {
        t: "p",
        v: "GEO leans harder on third-party corroboration than classic SEO ever did. AI models trust a fact more when it's repeated consistently across independent sources: review platforms, industry directories, local press, Reddit threads, comparison sites. This is the same groundwork as local SEO citation building and digital PR, but now it directly feeds whether an AI assistant recommends your business by name when someone asks for a recommendation in your category.",
      },
      {
        t: "h2",
        v: "How to know if it's working",
      },
      {
        t: "p",
        v: "AI citations don't show up cleanly in standard analytics yet, so you have to check a few places directly.",
      },
      {
        t: "ul",
        v: [
          "Check your analytics referral sources for traffic from chatgpt.com, perplexity.ai, and copilot.microsoft.com, this traffic is growing fast and easy to miss if you're not filtering for it",
          "Watch for an increase in direct or branded search, people who saw your name in an AI answer often Google you by name afterward",
          "Manually ask ChatGPT, Perplexity, and Google AI Overview the questions your customers ask, and see whether your business appears in the answer",
        ],
      },
      {
        t: "h2",
        v: "What to avoid",
      },
      {
        t: "p",
        v: "Don't chase this by publishing generic, keyword-stuffed AI-generated filler. AI raters and AI answer models are both explicitly trained to penalize exactly that pattern, low specificity, no first-hand experience, repetitive structure, and it now hurts you in classic Google rankings and AI citations alike.",
      },
      {
        t: "note",
        v: "Google retired FAQ rich results in search for all sites as of May 2026, so FAQPage schema no longer earns you extra space on a Google results page. It's still worth keeping well-written Q&A content on your site, that format remains genuinely useful for AI citation, just don't expect it to change how you look in classic Google search anymore. See our [schema markup guide](/blog/schema-markup-small-business-guide) for the full breakdown of what to add and what to retire.",
      },
      {
        t: "p",
        v: "AI search isn't replacing SEO, it's adding a second surface you need to earn a place on. The businesses that win both are the ones that were already doing SEO honestly: clear, specific, genuinely expert content, published by a business that's easy to verify is real. If your site isn't structured for that yet, that's exactly the kind of technical and content work we build into every project.",
      },
    ],
  },
  {
    slug: "how-much-does-a-website-cost",
    title: "How much does a website cost in 2026?",
    excerpt:
      "A transparent breakdown of web design pricing, from DIY builders to custom agencies, and how to decide what's right for your business.",
    date: "2026-07-09",
    readTime: "5 min read",
    category: "Web Design",
    accent: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    content: [
      {
        t: "p",
        v: "Websites can cost anywhere from $0 on a free DIY plan to $100,000 for a complex enterprise platform. For most US small businesses, a professionally built custom website runs between $299 and $5,000, and understanding what drives that range is the first step to budgeting smartly.",
      },
      {
        t: "h2",
        v: "What you're actually paying for",
      },
      {
        t: "p",
        v: "When a web agency quotes you a price, the fee covers far more than just making something look nice. You're paying for conversion architecture: the strategic decisions about layout, copy flow, and calls-to-action that determine whether visitors contact you or leave. You're paying for development quality: code that loads fast, doesn't break on different devices, and won't need a rebuild in 18 months. You're paying for SEO setup: [structured data](/blog/schema-markup-small-business-guide), meta tags, Core Web Vitals performance, and a sitemap submitted to Google on day one. And you're paying for communication: someone who answers questions, explains decisions, and delivers without surprises.",
      },
      {
        t: "h2",
        v: "Option 1: DIY website builders ($0–$40/month)",
      },
      {
        t: "p",
        v: "Wix, Squarespace, and similar platforms let you launch quickly with drag-and-drop tools. For a brand-new business testing whether there's demand, they're a reasonable starting point. But they have hard ceilings: generic templates that look like a thousand other sites, performance limitations that hurt Google rankings, and customization walls you'll hit the moment you need anything non-standard. Most businesses using these platforms find themselves rebuilding on a real platform within two years anyway, paying twice.",
      },
      {
        t: "h2",
        v: "Option 2: Freelancers and template shops ($300–$2,000)",
      },
      {
        t: "p",
        v: "A mid-tier freelancer or template-based shop can deliver a functional site for under $2,000. The trade-off is usually SEO setup (often skipped entirely), limited post-launch support, and a site that looks professional but not differentiated. If your business competes on price or operates in an uncontested local market, this may be enough. If you compete for the same Google searches as other businesses, you need something built with performance and conversion in mind from the start.",
      },
      {
        t: "h2",
        v: "Option 3: Custom web design agencies ($299–$10,000+)",
      },
      {
        t: "p",
        v: "A proper agency builds your site from a strategy brief, not a template, and pricing here varies enormously depending on the agency's overhead and process. At PinexaDigital, the Starter package starts at $299 for a 5-page custom site with SEO setup and 2-week delivery. It's priced right alongside freelancers, but with a strategy brief, custom design, and full technical SEO included instead of skipped. The Growth package at $499 covers up to 12 pages, a custom design system, advanced SEO, and a blog setup ready for content. Enterprise projects with e-commerce, custom integrations, or large page counts are quoted individually.",
      },
      {
        t: "note",
        v: "PinexaDigital pricing: Starter $299 (5 pages, 2 weeks) · Growth $499 (12 pages, 3 weeks) · Enterprise custom, all one-time, no hidden fees.",
      },
      {
        t: "h2",
        v: "What drives the price up",
      },
      {
        t: "ul",
        v: [
          "Number of pages: each page needs design, copy review, and development",
          "E-commerce functionality: product pages, cart, payment gateway integration",
          "Custom features: booking systems, calculators, member portals",
          "Content creation: photography, copywriting, video",
          "Ongoing SEO: monthly work to maintain and improve rankings",
          "Multilingual support: multiple language versions multiply the workload",
        ],
      },
      {
        t: "h2",
        v: "What's the ROI on a professional website?",
      },
      {
        t: "p",
        v: "Consider a service business getting 500 website visitors per month with an average project value of $3,000. A generic DIY site might convert 0.5%, which works out to 2 or 3 new clients per month. A conversion-optimized custom site converting at 2.5% is 12 to 13 new clients. The difference, roughly 10 additional clients per month at $3,000 each, is $30,000 in monthly revenue. A $299 website pays for itself many times over with a single new client. The return isn't on the website. It's on what the website enables.",
      },
      {
        t: "h2",
        v: "Which option is right for your business?",
      },
      {
        t: "ul",
        v: [
          "Testing an idea, pre-revenue stage → DIY builder is fine for now",
          "Local business needing a basic digital presence → freelancer or $299 starter",
          "Service business competing for Google searches → custom site with SEO setup",
          "E-commerce, lead generation, or appointment booking → Growth package or above",
          "High-traffic, complex requirements → Enterprise quote",
        ],
      },
      {
        t: "p",
        v: "The best website is the one that matches your current stage and has room to grow. If you're unsure, get a free quote and we'll recommend the right fit for your situation honestly, even if it's not us.",
      },
    ],
  },
  {
    slug: "seo-for-small-business-us",
    title: "Local SEO for US small businesses: the complete guide.",
    excerpt:
      "Step-by-step tactics to rank your business on Google for local searches: Google Business Profile, citations, on-page SEO, and more.",
    date: "2026-07-08",
    readTime: "8 min read",
    category: "SEO",
    accent: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
    content: [
      {
        t: "p",
        v: "When someone in your city searches \"web designer near me\" or \"best plumber in Austin,\" Google shows them a Map Pack, three local results, before any organic results. Appearing in that Map Pack is often worth more than ranking #1 organically. This guide covers exactly how to get there.",
      },
      {
        t: "h2",
        v: "Why local SEO works differently",
      },
      {
        t: "p",
        v: "Regular SEO is about relevance: matching your content to what someone searches. Local SEO adds a third dimension, proximity. Google's local ranking algorithm weighs three factors: relevance (does your business match the search?), distance (how close are you to the searcher?), and prominence (how well-known and trusted is your business?). You can't control distance, but you can dramatically influence relevance and prominence.",
      },
      {
        t: "h2",
        v: "Step 1: claim and optimize your Google Business Profile",
      },
      {
        t: "p",
        v: "Your Google Business Profile (GBP) is the single most important local SEO asset you own, more important than your website for local searches. If you haven't claimed it yet, go to business.google.com and verify your listing. Once verified, treat every field like it matters, because it does.",
      },
      {
        t: "ul",
        v: [
          "Business name: use your exact legal name, no keyword stuffing",
          "Category: choose the most specific primary category, then add relevant secondary categories",
          "Description: write 750 characters naturally incorporating your main keywords",
          "Hours: keep these accurate and updated, since wrong hours hurt your ranking",
          "Photos: add at least 10 photos of the exterior, interior, team, and products. Profiles with photos get 42% more requests for directions.",
          "Posts: publish at least one update per week. Google rewards active profiles.",
          "Q&A: seed your own questions and answers with your most common inquiries",
        ],
      },
      {
        t: "h2",
        v: "Step 2: get your NAP consistent everywhere",
      },
      {
        t: "p",
        v: "NAP stands for Name, Address, Phone number. These three pieces of information need to be completely identical everywhere your business appears online: your website, GBP, Yelp, BBB, Bing Places, Facebook, and every industry directory. Even a small inconsistency (\"St.\" vs \"Street\", \"Suite 4\" vs \"Ste. 4\") sends conflicting signals to Google and suppresses your local ranking. Search your business name and phone number on Google to find all your existing listings and correct any inconsistencies.",
      },
      {
        t: "h2",
        v: "Step 3: on-page local SEO",
      },
      {
        t: "p",
        v: "Your website needs to explicitly tell Google where you operate. This is straightforward but often skipped.",
      },
      {
        t: "ul",
        v: [
          "Include your city and state in your homepage H1 or title tag: \"Web Design Services in Austin, TX\"",
          "Create a dedicated Contact page with your full address, phone, and embedded Google Map",
          "[Add LocalBusiness schema markup](/blog/schema-markup-small-business-guide) to your homepage (name, address, phone, hours, geo coordinates)",
          "If you serve multiple cities, create individual city landing pages, not one page with all cities listed",
          "Include the city name naturally in your service descriptions, not just in headings",
        ],
      },
      {
        t: "h2",
        v: "Step 4: build local citations",
      },
      {
        t: "p",
        v: "A citation is any online mention of your business that includes your NAP. Search engines use citations as trust signals: the more authoritative directories list your business consistently, the more Google trusts that you exist and serve that area. Start with the major directories: Yelp, Apple Maps, Bing Places, BBB, Chamber of Commerce, and any industry-specific directories relevant to your type of business. Aim for 50+ consistent citations in your first six months.",
      },
      {
        t: "h2",
        v: "Step 5: collect reviews strategically",
      },
      {
        t: "p",
        v: "Reviews are the dominant ranking factor in Google's Map Pack. More importantly, they're what potential customers read before calling you. Ask every satisfied client for a review within 24 hours of completing their project, since that's when their experience is freshest. Create a short Google review link (available in your GBP dashboard) and include it in your follow-up email. Respond to every review, positive or negative. A business that responds to negative reviews professionally often looks more trustworthy than one with nothing but perfect scores.",
      },
      {
        t: "note",
        v: "Never buy reviews or use review generation services that violate Google's guidelines. Google detects manipulated review patterns and can remove your GBP listing entirely, which is far worse than having fewer reviews.",
      },
      {
        t: "h2",
        v: "Step 6: build local backlinks",
      },
      {
        t: "p",
        v: "A backlink from a relevant local source, such as a local newspaper, Chamber of Commerce, community organization, or complementary business, is worth far more than a generic directory link. Ways to earn local backlinks: sponsor a local event and ask for a link on their site; join your local Chamber of Commerce (most list member websites); write a guest post for a local business publication; partner with a complementary business (a web designer and a photographer referring each other, for example) and exchange portfolio links.",
      },
      {
        t: "h2",
        v: "How long does local SEO take?",
      },
      {
        t: "ul",
        v: [
          "GBP fully optimized: see improvement in 2–4 weeks",
          "Citations built and consistent: 1–3 months for full propagation",
          "Map Pack ranking: typically 3–6 months of consistent work",
          "Top organic positions: 6–12 months",
          "Maintaining position: ongoing, since competitors are doing the same work",
        ],
      },
      {
        t: "p",
        v: "Local SEO compounds over time. A business that starts today and works consistently for 12 months will be nearly impossible for a brand-new competitor to displace quickly. Start now.",
      },
    ],
  },
  {
    slug: "shopify-vs-woocommerce-2026",
    title: "Shopify vs. WooCommerce in 2026: which should you choose?",
    excerpt:
      "An honest comparison for US businesses: pricing, performance, ownership, and which platform is right for your product and goals.",
    date: "2026-07-06",
    readTime: "6 min read",
    category: "E-commerce",
    accent: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
    content: [
      {
        t: "p",
        v: "Two platforms dominate e-commerce for US small and mid-size businesses: Shopify and WooCommerce. We've built stores on both. Here's an honest comparison, no affiliate links and no sponsored content, to help you pick the right platform for your specific situation.",
      },
      {
        t: "h2",
        v: "The core difference",
      },
      {
        t: "p",
        v: "Shopify is a fully hosted SaaS platform: you pay a monthly fee and Shopify handles hosting, security, updates, and uptime. WooCommerce is an open-source plugin for WordPress: you install it on your own hosting account and manage everything yourself. Neither is universally better. The right choice depends on your technical comfort, budget priorities, and how much control you want.",
      },
      {
        t: "h2",
        v: "Shopify: built for speed and simplicity",
      },
      {
        t: "h3",
        v: "What Shopify does well",
      },
      {
        t: "ul",
        v: [
          "Fastest time to launch: a basic store can be live in hours",
          "No technical maintenance: security patches, uptime monitoring, and CDN are included",
          "Built-in US payment processing via Shopify Payments (no extra gateway needed)",
          "Excellent app ecosystem for US-specific tools: reviews, loyalty programs, shipping integrations",
          "24/7 support included in all plans",
          "Mobile app for managing orders anywhere",
        ],
      },
      {
        t: "h3",
        v: "Where Shopify falls short",
      },
      {
        t: "ul",
        v: [
          "Monthly fees add up: Basic $39/month, Shopify $105/month, Advanced $399/month",
          "Transaction fees if you don't use Shopify Payments: 0.5%–2% per sale",
          "Less flexibility for unusual product types or checkout flows",
          "Limited content marketing tools; blog functionality is basic",
          "Difficult to migrate away from: your store data is tied to Shopify's format",
        ],
      },
      {
        t: "h2",
        v: "WooCommerce: built for control and customization",
      },
      {
        t: "h3",
        v: "What WooCommerce does well",
      },
      {
        t: "ul",
        v: [
          "Free core plugin: you only pay for hosting ($20–$50/month) and any premium plugins",
          "No transaction fees whatsoever",
          "Full ownership: you can move hosts, export everything, modify anything",
          "Unlimited customization via PHP and WordPress hooks",
          "Superior content marketing through WordPress's native blogging",
          "Enormous plugin library for every imaginable feature",
        ],
      },
      {
        t: "h3",
        v: "Where WooCommerce falls short",
      },
      {
        t: "ul",
        v: [
          "Requires WordPress knowledge and ongoing technical management",
          "You handle your own security updates, backups, and uptime monitoring",
          "Performance requires deliberate optimization: a poorly configured WooCommerce site can be very slow",
          "Premium plugin costs add up: $300–$600/year is realistic for a full-featured store",
          "No built-in support: you troubleshoot via forums or hire a developer",
        ],
      },
      {
        t: "h2",
        v: "Real pricing over three years",
      },
      {
        t: "ul",
        v: [
          "Shopify Basic: $39 × 36 months = $1,404 + transaction fees on non-Shopify Payments sales",
          "WooCommerce: ~$30/month hosting × 36 = $1,080 + $400/year in premium plugins = ~$2,280",
          "The cost difference narrows or reverses when you factor in developer time for WooCommerce maintenance",
          "At high revenue ($50k+/month), WooCommerce's zero transaction fees create significant savings",
        ],
      },
      {
        t: "h2",
        v: "The third option: custom Next.js + Stripe",
      },
      {
        t: "p",
        v: "For businesses with unique requirements, such as subscription boxes, complex configurators, digital product delivery, or B2B pricing tiers, neither Shopify nor WooCommerce may be the right fit. A custom Next.js storefront with Stripe handling payment gives you maximum performance (sub-second load times), zero platform fees, and a build tailored exactly to your specifications. The upfront investment is higher ($3,000–$10,000), but the ongoing cost is just hosting ($20–$50/month). For high-revenue stores, the ROI is typically reached within 12–18 months.",
      },
      {
        t: "h2",
        v: "Our recommendation by situation",
      },
      {
        t: "ul",
        v: [
          "Launching your first store, no developer available → Shopify Basic",
          "Already on WordPress, comfortable managing it → WooCommerce",
          "Highest priority: lowest ongoing cost → WooCommerce with good managed hosting",
          "Highest priority: launch speed → Shopify",
          "Complex requirements, high revenue, or need maximum performance → Custom Next.js",
        ],
      },
      {
        t: "p",
        v: "If you're still unsure, tell us about your products and goals and we'll give you an honest recommendation, including whether you even need us or whether Shopify's own setup wizard will serve you perfectly well.",
      },
    ],
  },
  {
    slug: "website-speed-optimization",
    title: "Why your slow website is costing you customers.",
    excerpt:
      "A 1-second delay reduces conversions by 7%. Here's how we optimise Core Web Vitals and what you can do right now.",
    date: "2026-07-04",
    readTime: "4 min read",
    category: "Performance",
    accent: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    content: [
      {
        t: "p",
        v: "Google's research is unambiguous: a 1-second delay in page load time reduces conversions by 7%. A 3-second load time loses 53% of mobile visitors before your page even finishes rendering. If your website takes more than 3 seconds to load on a phone, you are paying for advertising and SEO that drives people to a page they leave before you get a chance to make your case.",
      },
      {
        t: "h2",
        v: "What Core Web Vitals actually measure",
      },
      {
        t: "p",
        v: "Google uses three metrics, collectively called Core Web Vitals, as ranking signals. Understanding them helps you prioritize what to fix.",
      },
      {
        t: "ul",
        v: [
          "LCP (Largest Contentful Paint): how fast the main visible content loads. Target: under 2.5 seconds. This is usually your hero image or headline.",
          "INP (Interaction to Next Paint): how responsive the page is when users click, type, or tap. Target: under 200ms. Slow INP means the page feels laggy and unresponsive.",
          "CLS (Cumulative Layout Shift): how much the page jumps around while loading. Target: under 0.1. Every jump erodes user confidence and causes accidental clicks.",
        ],
      },
      {
        t: "note",
        v: "Google uses Core Web Vitals as a ranking factor. Two pages with identical content, one scoring 95 and one scoring 45, will not rank equally. The faster page wins.",
      },
      {
        t: "h2",
        v: "The five biggest causes of slow websites",
      },
      {
        t: "ol",
        v: [
          "Unoptimized images. A single uncompressed hero image can add 3–5 seconds to load time. Every image on your site should be served in WebP format, sized to the exact display dimensions, and lazy-loaded if it's below the fold.",
          "Too many plugins (WordPress). Sites with 30+ active plugins regularly load in 6–10 seconds. Audit ruthlessly: if a plugin serves a function you can replicate with 10 lines of code, remove it.",
          "Cheap shared hosting. A $3/month shared hosting plan puts your site on a server with hundreds of other sites. When any of them gets traffic, everyone slows down. For a business website, spend at least $20/month on managed hosting.",
          "No page caching. Without caching, your server rebuilds every page from scratch on every request. Enable caching and your server serves pre-built HTML in milliseconds.",
          "Render-blocking third-party scripts. Live chat widgets, ad tracking pixels, and marketing automation tools often block page rendering until they load. Audit every third-party script and defer or remove anything non-essential.",
        ],
      },
      {
        t: "h2",
        v: "How to check your current speed",
      },
      {
        t: "ul",
        v: [
          "Google PageSpeed Insights (pagespeed.web.dev): free, shows both mobile and desktop scores",
          "GTmetrix: detailed waterfall analysis showing exactly which resources are slow",
          "WebPageTest.org: advanced testing from different global locations",
        ],
      },
      {
        t: "p",
        v: "A PageSpeed score below 70 on mobile is actively hurting your search rankings. Below 50 is a significant competitive disadvantage. Above 90 is where high-converting sites typically live.",
      },
      {
        t: "h2",
        v: "What a fast website looks like in practice",
      },
      {
        t: "p",
        v: "At PinexaDigital, every site we build with Next.js consistently scores 90–99 on PageSpeed Insights. Next.js pre-renders pages at build time, so there's no server processing delay. Images are automatically converted to WebP/AVIF and sized correctly via next/image. Fonts load with font-display: swap to eliminate invisible text. The result is a site that feels instant, because it nearly is.",
      },
      {
        t: "h2",
        v: "The real cost of a slow website",
      },
      {
        t: "p",
        v: "A service business generating $15,000/month from its website at a 1.5% conversion rate is converting 1.5 out of every 100 visitors. Improving load time from 5 seconds to 1.5 seconds, with no other changes, can realistically push that to 3.5%. That's more than doubling revenue from the same traffic. A $499 website rebuild that achieves this pays for itself in the first month. Speed isn't a technical detail. It's a business decision.",
      },
    ],
  },
  {
    slug: "web-design-trends-us-2026",
    title: "Web design trends US businesses should use in 2026.",
    excerpt:
      "Clean minimalism, high-contrast CTAs, and trust signals: what's working for US audiences this year and why.",
    date: "2026-07-03",
    readTime: "5 min read",
    category: "Web Design",
    accent: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    content: [
      {
        t: "p",
        v: "Design trends matter not because you should chase what's fashionable, but because they reflect evolving user expectations. When US visitors arrive at your website, they've already seen thousands of other sites. They arrive with standards, and a site that feels dated signals that your business might be too. Here's what's working in 2026.",
      },
      {
        t: "h2",
        v: "Clean minimalism with clear hierarchy",
      },
      {
        t: "p",
        v: "US users have zero patience for cluttered interfaces. The most effective business websites in 2026 follow a single principle: show less, communicate more clearly. One primary call-to-action per section. White space that guides the eye rather than fills it. A clear H1 → H2 → body hierarchy that lets someone scan the page in 8 seconds and understand exactly what you offer and who it's for. Minimalism isn't about removing content. It's about removing everything that dilutes your message.",
      },
      {
        t: "h2",
        v: "High-contrast CTAs",
      },
      {
        t: "p",
        v: "Your call-to-action button needs to be the most visually dominant element on the page, not one of five competing buttons. Blue, green, and orange buttons on light backgrounds consistently outperform subtle, on-brand alternatives in A/B tests. Button copy matters as much as color: \"Get a free quote\" converts better than \"Learn more,\" which converts better than \"Submit.\" On mobile, buttons should be at least 44×44 pixels for reliable thumb tapping. Anything smaller adds friction to every conversion.",
      },
      {
        t: "h2",
        v: "Trust signals positioned above the fold",
      },
      {
        t: "p",
        v: "US customers are appropriately skeptical. They've been burned by businesses that overpromised. The best-converting sites address this skepticism before a visitor scrolls. A real review count with a star rating (linked to Google or Clutch, not a badge you designed), a specific metric (\"21-day delivery\" beats \"fast delivery\" every time), or recognizable client logos: these signals answer the question \"why should I trust you?\" before the visitor has to consciously ask it.",
      },
      {
        t: "h2",
        v: "Mobile-first design, not just mobile-friendly",
      },
      {
        t: "p",
        v: "More than 60% of US web traffic is now mobile. \"Mobile-friendly\" means your desktop site scales down acceptably. \"Mobile-first\" means you designed for the phone first, then expanded to desktop. The difference shows up in navigation patterns, button placement, font sizing, and load performance on cellular connections. Test your site on an actual iPhone or Android device, not just a browser simulator, since the experience is often dramatically different.",
      },
      {
        t: "h2",
        v: "Speed as a visible experience",
      },
      {
        t: "p",
        v: "Users don't consciously think \"this site is fast.\" They feel the confidence it creates, or the hesitation when it isn't. In 2026, a sub-2-second load time on mobile is a table stake, not a differentiator. Sites built on legacy infrastructure or overloaded with tracking scripts simply cannot compete. If you're running a site on shared WordPress hosting from 2020, your competitors on modern stacks are winning the speed comparison before a visitor reads a single word.",
      },
      {
        t: "h2",
        v: "Social proof where decisions happen",
      },
      {
        t: "p",
        v: "Testimonials buried at the bottom of the homepage are decoration. Social proof placed strategically, next to a pricing table, beside the main CTA button, or on service pages near the quote request form, actively reduces purchase anxiety at the exact moment a visitor is deciding whether to act. Specificity converts better than superlatives: \"Our e-commerce revenue doubled in the first month after launch\" is worth ten times more than \"amazing service.\"",
      },
      {
        t: "note",
        v: "One thing that hasn't changed: the fundamentals still outperform trends. Clear headline → specific value proposition → proof → CTA. A site that nails this in plain HTML will outconvert a visually stunning site with a muddled message.",
      },
    ],
  },
  {
    slug: "contact-form-conversion-tips",
    title: "5 contact form tweaks that double your leads.",
    excerpt:
      "Small changes to your contact form, fewer fields, better copy, strategic placement, can dramatically increase the number of inquiries you receive.",
    date: "2026-07-02",
    readTime: "3 min read",
    category: "Conversion",
    accent: "bg-pink-500/10 text-pink-600 dark:text-pink-400",
    content: [
      {
        t: "p",
        v: "The average small business contact form converts at 1–2%. The best-performing ones convert at 5–10%. The difference is almost never the form itself. It's the decisions surrounding it: how many fields, what the button says, what's placed next to it, and what happens after submission. Here are five changes you can make today.",
      },
      {
        t: "h2",
        v: "Tweak 1: cut your fields to the minimum",
      },
      {
        t: "p",
        v: "Every additional field reduces conversions by approximately 10%. Before adding a field, ask: will this information change how I respond to this person? If the answer is no, remove it. For most service businesses, you need exactly three fields to qualify and respond to a lead: name, email, and a message. Phone number, company name, website URL, budget range, referral source: these feel useful but they add friction. Collect this information in your first conversation, not before someone has decided to contact you.",
      },
      {
        t: "note",
        v: "Exception: if a field genuinely helps you serve the client better, like \"what service are you interested in?\" on a multi-service agency site, keep it. Just apply the same scrutiny to every other field.",
      },
      {
        t: "h2",
        v: "Tweak 2: replace generic placeholder text",
      },
      {
        t: "p",
        v: "Placeholder text is your last chance to reduce hesitation before someone commits to typing. Generic labels (\"Name,\" \"Email,\" \"Message\") tell users nothing about what you actually want. More specific guidance reduces anxiety and increases completion rates:",
      },
      {
        t: "ul",
        v: [
          "\"Your first name\" instead of \"Name\"",
          "\"Work email you check daily\" instead of \"Email\"",
          "\"What would you like to build? (the more detail, the better)\" instead of \"Message\"",
          "\"Acme Inc. / acme.com\" as a placeholder hint for company/website fields",
        ],
      },
      {
        t: "h2",
        v: "Tweak 3: change your submit button copy",
      },
      {
        t: "p",
        v: "\"Submit\" is the worst possible label for a form button. It's what a bureaucratic process makes you do, not what a friendly business interaction looks like. Replace it with a phrase that describes what happens next and confirms the value the user gets. First-person phrasing consistently outperforms second-person in A/B tests: \"Send my project details\" beats \"Send your project details\" by around 25%. Specific beats generic: \"Request my free quote\" beats \"Get in touch.\" Match the button copy to the promise you made in the headline.",
      },
      {
        t: "h2",
        v: "Tweak 4: add one testimonial next to the form",
      },
      {
        t: "p",
        v: "A single testimonial placed adjacent to your contact form, not at the bottom of the page but right next to the form, can increase conversions by 30–40%. Choose a testimonial specifically about the experience of working with you, not just the results: \"Getting a response within 24 hours and knowing exactly what to expect at each stage made this so much easier than I expected\" is more convincing near a contact form than \"our traffic went up 40%.\" Result-focused testimonials belong near your pricing. Process-focused testimonials belong near your form.",
      },
      {
        t: "h2",
        v: "Tweak 5: send an automatic confirmation email",
      },
      {
        t: "p",
        v: "Approximately 70% of people who fill out a contact form feel a moment of doubt after clicking submit: did it work? Will they actually respond? An instant confirmation email eliminates that doubt, prevents follow-up \"did you get my message?\" emails, and gives the person something to find in their inbox when they want to reference what they wrote. Use that confirmation email to reinforce one concrete reason they made a good decision: your response time commitment, a brief reminder of what you do well, or a client quote. Keep it short. It's confirmation, not a newsletter.",
      },
      {
        t: "h2",
        v: "Putting it all together",
      },
      {
        t: "p",
        v: "These five changes take less than two hours to implement and cost nothing. Combined, cutting from six fields to three, rewriting placeholder text, changing the button copy, adding a process-focused testimonial, and setting up an auto-reply, routinely doubles contact form conversion rates. If your site gets 1,000 visitors per month and your form currently converts at 1.5%, you're getting 15 leads. The same traffic with a 3% conversion rate is 30 leads, without spending another dollar on ads or SEO. Optimize what you already have first, then look at [what happens to a lead after they submit](/blog/crm-automation-small-business-guide), since a great form feeding a slow follow-up process still loses the deal.",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

/** Same-category posts first (most recent first), backfilled with other recent posts. */
export function getRelatedPosts(slug: string, limit = 3): Post[] {
  const current = getPost(slug);
  if (!current) return [];
  const sameCategory = posts.filter((p) => p.slug !== slug && p.category === current.category);
  const others = posts.filter((p) => p.slug !== slug && p.category !== current.category);
  return [...sameCategory, ...others].slice(0, limit);
}
