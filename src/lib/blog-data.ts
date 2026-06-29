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
  date: string;
  readTime: string;
  category: string;
  accent: string;
  content: Block[];
}

export const posts: Post[] = [
  {
    slug: "how-much-does-a-website-cost",
    title: "How much does a website cost in 2026?",
    excerpt:
      "A transparent breakdown of web design pricing — from DIY builders to custom agencies — and how to decide what's right for your business.",
    date: "2026-06-15",
    readTime: "5 min read",
    category: "Web Design",
    accent: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    content: [
      {
        t: "p",
        v: "Websites can cost anywhere from $0 on a free DIY plan to $100,000 for a complex enterprise platform. For most US small businesses, a professionally built custom website runs between $997 and $5,000 — and understanding what drives that range is the first step to budgeting smartly.",
      },
      {
        t: "h2",
        v: "What you're actually paying for",
      },
      {
        t: "p",
        v: "When a web agency quotes you a price, the fee covers far more than just making something look nice. You're paying for conversion architecture — the strategic decisions about layout, copy flow, and calls-to-action that determine whether visitors contact you or leave. You're paying for development quality: code that loads fast, doesn't break on different devices, and won't need a rebuild in 18 months. You're paying for SEO setup: structured data, meta tags, Core Web Vitals performance, and a sitemap submitted to Google on day one. And you're paying for communication: someone who answers questions, explains decisions, and delivers without surprises.",
      },
      {
        t: "h2",
        v: "Option 1 — DIY website builders ($0–$40/month)",
      },
      {
        t: "p",
        v: "Wix, Squarespace, and similar platforms let you launch quickly with drag-and-drop tools. For a brand-new business testing whether there's demand, they're a reasonable starting point. But they have hard ceilings: generic templates that look like a thousand other sites, performance limitations that hurt Google rankings, and customization walls you'll hit the moment you need anything non-standard. Most businesses using these platforms find themselves rebuilding on a real platform within two years anyway — paying twice.",
      },
      {
        t: "h2",
        v: "Option 2 — Freelancers and template shops ($500–$2,000)",
      },
      {
        t: "p",
        v: "A mid-tier freelancer or template-based shop can deliver a functional site for under $2,000. The trade-off is usually SEO setup (often skipped entirely), limited post-launch support, and a site that looks professional but not differentiated. If your business competes on price or operates in an uncontested local market, this may be enough. If you compete for the same Google searches as other businesses, you need something built with performance and conversion in mind from the start.",
      },
      {
        t: "h2",
        v: "Option 3 — Custom web design agencies ($997–$10,000+)",
      },
      {
        t: "p",
        v: "A proper agency builds your site from a strategy brief, not a template. At PinexaDigital, the Starter package starts at $997 for a 5-page custom site with SEO setup and 2-week delivery. The Growth package at $2,497 covers up to 12 pages, a custom design system, advanced SEO, and a blog setup ready for content. Enterprise projects with e-commerce, custom integrations, or large page counts are quoted individually.",
      },
      {
        t: "note",
        v: "PinexaDigital pricing: Starter $997 (5 pages, 2 weeks) · Growth $2,497 (12 pages, 3 weeks) · Enterprise custom — all one-time, no hidden fees.",
      },
      {
        t: "h2",
        v: "What drives the price up",
      },
      {
        t: "ul",
        v: [
          "Number of pages — each page needs design, copy review, and development",
          "E-commerce functionality — product pages, cart, payment gateway integration",
          "Custom features — booking systems, calculators, member portals",
          "Content creation — photography, copywriting, video",
          "Ongoing SEO — monthly work to maintain and improve rankings",
          "Multilingual support — multiple language versions multiply the workload",
        ],
      },
      {
        t: "h2",
        v: "What's the ROI on a professional website?",
      },
      {
        t: "p",
        v: "Consider a service business getting 500 website visitors per month with an average project value of $3,000. A generic DIY site might convert 0.5% — that's 2-3 new clients per month. A conversion-optimized custom site converting at 2.5% is 12-13 new clients. The difference — roughly 10 additional clients per month at $3,000 each — is $30,000 in monthly revenue. A $2,497 website pays for itself with one new client. The return is not on the website — it's on what the website enables.",
      },
      {
        t: "h2",
        v: "Which option is right for your business?",
      },
      {
        t: "ul",
        v: [
          "Testing an idea, pre-revenue stage → DIY builder is fine for now",
          "Local business needing a basic digital presence → freelancer or $997 starter",
          "Service business competing for Google searches → custom site with SEO setup",
          "E-commerce, lead generation, or appointment booking → Growth package or above",
          "High-traffic, complex requirements → Enterprise quote",
        ],
      },
      {
        t: "p",
        v: "The best website is the one that matches your current stage and has room to grow. If you're unsure, get a free quote — we'll recommend the right fit for your situation honestly, even if it's not us.",
      },
    ],
  },
  {
    slug: "seo-for-small-business-us",
    title: "Local SEO for US small businesses: the complete guide.",
    excerpt:
      "Step-by-step tactics to rank your business on Google for local searches — Google Business Profile, citations, on-page SEO, and more.",
    date: "2025-05-15",
    readTime: "8 min read",
    category: "SEO",
    accent: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
    content: [
      {
        t: "p",
        v: "When someone in your city searches \"web designer near me\" or \"best plumber in Austin,\" Google shows them a Map Pack — three local results — before any organic results. Appearing in that Map Pack is often worth more than ranking #1 organically. This guide covers exactly how to get there.",
      },
      {
        t: "h2",
        v: "Why local SEO works differently",
      },
      {
        t: "p",
        v: "Regular SEO is about relevance — matching your content to what someone searches. Local SEO adds a third dimension: proximity. Google's local ranking algorithm weighs three factors: relevance (does your business match the search?), distance (how close are you to the searcher?), and prominence (how well-known and trusted is your business?). You can't control distance, but you can dramatically influence relevance and prominence.",
      },
      {
        t: "h2",
        v: "Step 1 — Claim and optimize your Google Business Profile",
      },
      {
        t: "p",
        v: "Your Google Business Profile (GBP) is the single most important local SEO asset you own — more important than your website for local searches. If you haven't claimed it yet, go to business.google.com and verify your listing. Once verified, treat every field like it matters, because it does.",
      },
      {
        t: "ul",
        v: [
          "Business name: use your exact legal name — no keyword stuffing",
          "Category: choose the most specific primary category, then add relevant secondary categories",
          "Description: write 750 characters naturally incorporating your main keywords",
          "Hours: keep these accurate and updated — wrong hours hurt your ranking",
          "Photos: add at least 10 photos — exterior, interior, team, products. Profiles with photos get 42% more requests for directions.",
          "Posts: publish at least one update per week. Google rewards active profiles.",
          "Q&A: seed your own questions and answers with your most common inquiries",
        ],
      },
      {
        t: "h2",
        v: "Step 2 — Get your NAP consistent everywhere",
      },
      {
        t: "p",
        v: "NAP stands for Name, Address, Phone number. These three pieces of information need to be completely identical everywhere your business appears online — your website, GBP, Yelp, BBB, Bing Places, Facebook, and every industry directory. Even a small inconsistency (\"St.\" vs \"Street\", \"Suite 4\" vs \"Ste. 4\") sends conflicting signals to Google and suppresses your local ranking. Search your business name and phone number on Google to find all your existing listings and correct any inconsistencies.",
      },
      {
        t: "h2",
        v: "Step 3 — On-page local SEO",
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
          "Add LocalBusiness schema markup to your homepage (name, address, phone, hours, geo coordinates)",
          "If you serve multiple cities, create individual city landing pages — not one page with all cities listed",
          "Include the city name naturally in your service descriptions, not just in headings",
        ],
      },
      {
        t: "h2",
        v: "Step 4 — Build local citations",
      },
      {
        t: "p",
        v: "A citation is any online mention of your business that includes your NAP. Search engines use citations as trust signals: the more authoritative directories list your business consistently, the more Google trusts that you exist and serve that area. Start with the major directories: Yelp, Apple Maps, Bing Places, BBB, Chamber of Commerce, and any industry-specific directories relevant to your type of business. Aim for 50+ consistent citations in your first six months.",
      },
      {
        t: "h2",
        v: "Step 5 — Collect reviews strategically",
      },
      {
        t: "p",
        v: "Reviews are the dominant ranking factor in Google's Map Pack. More importantly, they're what potential customers read before calling you. Ask every satisfied client for a review within 24 hours of completing their project — that's when their experience is freshest. Create a short Google review link (available in your GBP dashboard) and include it in your follow-up email. Respond to every review, positive or negative. A business that responds to negative reviews professionally often looks more trustworthy than one with nothing but perfect scores.",
      },
      {
        t: "note",
        v: "Never buy reviews or use review generation services that violate Google's guidelines. Google detects manipulated review patterns and can remove your GBP listing entirely — far worse than having fewer reviews.",
      },
      {
        t: "h2",
        v: "Step 6 — Build local backlinks",
      },
      {
        t: "p",
        v: "A backlink from a relevant local source — a local newspaper, Chamber of Commerce, community organization, or complementary business — is worth far more than a generic directory link. Ways to earn local backlinks: sponsor a local event and ask for a link on their site; join your local Chamber of Commerce (most list member websites); write a guest post for a local business publication; partner with a complementary business (a web designer and a photographer referring each other, for example) and exchange portfolio links.",
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
          "Maintaining position: ongoing — competitors are doing the same work",
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
      "An honest comparison for US businesses — pricing, performance, ownership, and which platform is right for your product and goals.",
    date: "2025-05-02",
    readTime: "6 min read",
    category: "E-commerce",
    accent: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
    content: [
      {
        t: "p",
        v: "Two platforms dominate e-commerce for US small and mid-size businesses: Shopify and WooCommerce. We've built stores on both. Here's an honest comparison — no affiliate links, no sponsored content — to help you pick the right platform for your specific situation.",
      },
      {
        t: "h2",
        v: "The core difference",
      },
      {
        t: "p",
        v: "Shopify is a fully hosted SaaS platform — you pay a monthly fee and Shopify handles hosting, security, updates, and uptime. WooCommerce is an open-source plugin for WordPress — you install it on your own hosting account and manage everything yourself. Neither is universally better. The right choice depends on your technical comfort, budget priorities, and how much control you want.",
      },
      {
        t: "h2",
        v: "Shopify — built for speed and simplicity",
      },
      {
        t: "h3",
        v: "What Shopify does well",
      },
      {
        t: "ul",
        v: [
          "Fastest time to launch — a basic store can be live in hours",
          "No technical maintenance — security patches, uptime monitoring, and CDN are included",
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
          "Limited content marketing tools — blog functionality is basic",
          "Difficult to migrate away from — your store data is tied to Shopify's format",
        ],
      },
      {
        t: "h2",
        v: "WooCommerce — built for control and customization",
      },
      {
        t: "h3",
        v: "What WooCommerce does well",
      },
      {
        t: "ul",
        v: [
          "Free core plugin — you only pay for hosting ($20–$50/month) and any premium plugins",
          "No transaction fees whatsoever",
          "Full ownership — you can move hosts, export everything, modify anything",
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
          "Performance requires deliberate optimization — a poorly configured WooCommerce site can be very slow",
          "Premium plugin costs add up — $300–$600/year is realistic for a full-featured store",
          "No built-in support — you troubleshoot via forums or hire a developer",
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
        v: "The third option — custom Next.js + Stripe",
      },
      {
        t: "p",
        v: "For businesses with unique requirements — subscription boxes, complex configurators, digital product delivery, B2B pricing tiers — neither Shopify nor WooCommerce may be the right fit. A custom Next.js storefront with Stripe handles payment gives you maximum performance (sub-second load times), zero platform fees, and built exactly to your specifications. The upfront investment is higher ($3,000–$10,000), but the ongoing cost is just hosting ($20–$50/month). For high-revenue stores, the ROI is typically reached within 12–18 months.",
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
        v: "If you're still unsure, tell us about your products and goals and we'll give you an honest recommendation — including whether you even need us or whether Shopify's own setup wizard will serve you perfectly well.",
      },
    ],
  },
  {
    slug: "website-speed-optimization",
    title: "Why your slow website is costing you customers.",
    excerpt:
      "A 1-second delay reduces conversions by 7%. Here's how we optimise Core Web Vitals and what you can do right now.",
    date: "2025-04-18",
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
        v: "Google uses three metrics — collectively called Core Web Vitals — as ranking signals. Understanding them helps you prioritize what to fix.",
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
        v: "Google uses Core Web Vitals as a ranking factor. Two pages with identical content — one scoring 95, one scoring 45 — will not rank equally. The faster page wins.",
      },
      {
        t: "h2",
        v: "The five biggest causes of slow websites",
      },
      {
        t: "ol",
        v: [
          "Unoptimized images. A single uncompressed hero image can add 3–5 seconds to load time. Every image on your site should be served in WebP format, sized to the exact display dimensions, and lazy-loaded if it's below the fold.",
          "Too many plugins (WordPress). Sites with 30+ active plugins regularly load in 6–10 seconds. Audit ruthlessly — if a plugin serves a function you can replicate with 10 lines of code, remove it.",
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
          "Google PageSpeed Insights (pagespeed.web.dev) — free, shows both mobile and desktop scores",
          "GTmetrix — detailed waterfall analysis showing exactly which resources are slow",
          "WebPageTest.org — advanced testing from different global locations",
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
        v: "At PinexaDigital, every site we build with Next.js consistently scores 90–99 on PageSpeed Insights. Next.js pre-renders pages at build time, so there's no server processing delay. Images are automatically converted to WebP/AVIF and sized correctly via next/image. Fonts load with font-display: swap to eliminate invisible text. The result is a site that feels instant — because it nearly is.",
      },
      {
        t: "h2",
        v: "The real cost of a slow website",
      },
      {
        t: "p",
        v: "A service business generating $15,000/month from its website at a 1.5% conversion rate is converting 1.5 out of every 100 visitors. Improving load time from 5 seconds to 1.5 seconds — with no other changes — can realistically push that to 3.5%. That's more than doubling revenue from the same traffic. A $2,497 website rebuild that achieves this pays for itself in the first month. Speed isn't a technical detail. It's a business decision.",
      },
    ],
  },
  {
    slug: "web-design-trends-us-2026",
    title: "Web design trends US businesses should use in 2026.",
    excerpt:
      "Clean minimalism, high-contrast CTAs, and trust signals — what's working for US audiences this year and why.",
    date: "2026-05-10",
    readTime: "5 min read",
    category: "Web Design",
    accent: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    content: [
      {
        t: "p",
        v: "Design trends matter not because you should chase what's fashionable, but because they reflect evolving user expectations. When US visitors arrive at your website, they've already seen thousands of other sites. They arrive with standards — and a site that feels dated signals that your business might be too. Here's what's working in 2026.",
      },
      {
        t: "h2",
        v: "Clean minimalism with clear hierarchy",
      },
      {
        t: "p",
        v: "US users have zero patience for cluttered interfaces. The most effective business websites in 2026 follow a single principle: show less, communicate more clearly. One primary call-to-action per section. White space that guides the eye rather than fills it. A clear H1 → H2 → body hierarchy that lets someone scan the page in 8 seconds and understand exactly what you offer and who it's for. Minimalism is not about removing content — it's about removing everything that dilutes your message.",
      },
      {
        t: "h2",
        v: "High-contrast CTAs",
      },
      {
        t: "p",
        v: "Your call-to-action button needs to be the most visually dominant element on the page — not one of five competing buttons. Blue, green, and orange buttons on light backgrounds consistently outperform subtle, on-brand alternatives in A/B tests. Button copy matters as much as color: \"Get a free quote\" converts better than \"Learn more,\" which converts better than \"Submit.\" On mobile, buttons should be at least 44×44 pixels for reliable thumb tapping — smaller than that and you're adding friction to every conversion.",
      },
      {
        t: "h2",
        v: "Trust signals positioned above the fold",
      },
      {
        t: "p",
        v: "US customers are appropriately skeptical. They've been burned by businesses that overpromised. The best-converting sites address this skepticism before a visitor scrolls. A real review count with a star rating (linked to Google or Clutch — not a badge you designed), a specific metric (\"21-day delivery\" beats \"fast delivery\" every time), or recognizable client logos — these signals answer the question \"why should I trust you?\" before the visitor has to consciously ask it.",
      },
      {
        t: "h2",
        v: "Mobile-first design — not just mobile-friendly",
      },
      {
        t: "p",
        v: "More than 60% of US web traffic is now mobile. \"Mobile-friendly\" means your desktop site scales down acceptably. \"Mobile-first\" means you designed for the phone first, then expanded to desktop. The difference shows up in navigation patterns, button placement, font sizing, and load performance on cellular connections. Test your site on an actual iPhone or Android device, not just a browser simulator — the experience is often dramatically different.",
      },
      {
        t: "h2",
        v: "Speed as a visible experience",
      },
      {
        t: "p",
        v: "Users don't consciously think \"this site is fast.\" They feel the confidence it creates — or the hesitation when it isn't. In 2026, a sub-2-second load time on mobile is a table stake, not a differentiator. Sites built on legacy infrastructure or overloaded with tracking scripts simply cannot compete. If you're running a site on shared WordPress hosting from 2020, your competitors on modern stacks are winning the speed comparison before a visitor reads a single word.",
      },
      {
        t: "h2",
        v: "Social proof where decisions happen",
      },
      {
        t: "p",
        v: "Testimonials buried at the bottom of the homepage are decoration. Social proof placed strategically — next to a pricing table, beside the main CTA button, on service pages near the quote request form — actively reduces purchase anxiety at the exact moment a visitor is deciding whether to act. Specificity converts better than superlatives: \"Our e-commerce revenue doubled in the first month after launch\" is worth ten times more than \"amazing service.\"",
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
      "Small changes to your contact form — fewer fields, better copy, strategic placement — can dramatically increase the number of inquiries you receive.",
    date: "2025-03-20",
    readTime: "3 min read",
    category: "Conversion",
    accent: "bg-pink-500/10 text-pink-600 dark:text-pink-400",
    content: [
      {
        t: "p",
        v: "The average small business contact form converts at 1–2%. The best-performing ones convert at 5–10%. The difference is almost never the form itself — it's the decisions surrounding it: how many fields, what the button says, what's placed next to it, and what happens after submission. Here are five changes you can make today.",
      },
      {
        t: "h2",
        v: "Tweak 1 — Cut your fields to the minimum",
      },
      {
        t: "p",
        v: "Every additional field reduces conversions by approximately 10%. Before adding a field, ask: will this information change how I respond to this person? If the answer is no, remove it. For most service businesses, you need exactly three fields to qualify and respond to a lead: name, email, and a message. Phone number, company name, website URL, budget range, referral source — these feel useful but they add friction. Collect this information in your first conversation, not before someone has decided to contact you.",
      },
      {
        t: "note",
        v: "Exception: if a field genuinely helps you serve the client better — like \"what service are you interested in?\" on a multi-service agency site — keep it. Just apply the same scrutiny to every other field.",
      },
      {
        t: "h2",
        v: "Tweak 2 — Replace generic placeholder text",
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
        v: "Tweak 3 — Change your submit button copy",
      },
      {
        t: "p",
        v: "\"Submit\" is the worst possible label for a form button — it's what a bureaucratic process makes you do, not what a friendly business interaction looks like. Replace it with a phrase that describes what happens next and confirms the value the user gets. First-person phrasing consistently outperforms second-person in A/B tests: \"Send my project details\" beats \"Send your project details\" by around 25%. Specific beats generic: \"Request my free quote\" beats \"Get in touch.\" Match the button copy to the promise you made in the headline.",
      },
      {
        t: "h2",
        v: "Tweak 4 — Add one testimonial next to the form",
      },
      {
        t: "p",
        v: "A single testimonial placed adjacent to your contact form — not at the bottom of the page, right next to the form — can increase conversions by 30–40%. Choose a testimonial specifically about the experience of working with you, not just the results: \"Getting a response within 24 hours and knowing exactly what to expect at each stage made this so much easier than I expected\" is more convincing near a contact form than \"our traffic went up 40%.\" Result-focused testimonials belong near your pricing. Process-focused testimonials belong near your form.",
      },
      {
        t: "h2",
        v: "Tweak 5 — Send an automatic confirmation email",
      },
      {
        t: "p",
        v: "Approximately 70% of people who fill out a contact form feel a moment of doubt after clicking submit: did it work? Will they actually respond? An instant confirmation email eliminates that doubt, prevents follow-up \"did you get my message?\" emails, and gives the person something to find in their inbox when they want to reference what they wrote. Use that confirmation email to reinforce one concrete reason they made a good decision — your response time commitment, a brief reminder of what you do well, or a client quote. Keep it short. It's confirmation, not a newsletter.",
      },
      {
        t: "h2",
        v: "Putting it all together",
      },
      {
        t: "p",
        v: "These five changes take less than two hours to implement and cost nothing. Combined — cutting from six fields to three, rewriting placeholder text, changing the button copy, adding a process-focused testimonial, and setting up an auto-reply — routinely doubles contact form conversion rates. If your site gets 1,000 visitors per month and your form currently converts at 1.5%, you're getting 15 leads. The same traffic with a 3% conversion rate is 30 leads — without spending another dollar on ads or SEO. Optimize what you already have first.",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
