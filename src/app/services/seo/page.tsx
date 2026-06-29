import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { SITE, siteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "SEO Services for US Businesses | PinexaDigital",
  description: `Data-driven SEO services that rank your business on Google. ${SITE.brandName} specialises in on-page, technical, and local SEO for US markets. Start with a free audit.`,
  alternates: { canonical: siteUrl("/services/seo") },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO & Digital Marketing",
  description: "Data-driven SEO services that rank US businesses on Google — on-page, technical, and local SEO.",
  url: siteUrl("/services/seo"),
  provider: {
    "@type": "ProfessionalService",
    name: SITE.brandName,
    url: siteUrl(),
  },
  areaServed: { "@type": "Country", name: "United States" },
};

const deliverables = [
  {
    title: "Technical SEO audit.",
    desc: "We crawl your entire site to identify and fix indexing issues, crawl errors, duplicate content, broken internal links, missing canonical tags, and Core Web Vitals problems that are suppressing your rankings. Technical health is the foundation everything else depends on.",
  },
  {
    title: "On-page optimisation.",
    desc: "Keyword research, title tags, meta descriptions, heading structure, image alt text, internal linking, and schema markup on every key page. We optimise for the specific search queries your target US customers are using — not generic high-volume terms you can't compete for.",
  },
  {
    title: "Local SEO.",
    desc: "Google Business Profile optimisation, NAP consistency across citations, local schema markup, and location-targeted content for businesses serving specific US geographic areas. Local SEO is the fastest path to the Google Map Pack.",
  },
  {
    title: "Content strategy.",
    desc: "Topic cluster planning and a blog calendar built around your target audience's actual search behaviour. Content marketing is how you build topical authority — the signal Google uses to decide whether you deserve to rank for competitive terms.",
  },
  {
    title: "Link building.",
    desc: "Targeted outreach to earn links from relevant, authoritative US websites. We focus on quality over quantity — one link from a credible industry publication is worth more than a hundred low-quality directory submissions.",
  },
  {
    title: "Monthly reporting.",
    desc: "Clear rank tracking for your target keywords, organic traffic reports, competitor analysis, and a plain-language summary of what we did and what we're doing next. No vanity metrics — just the numbers that affect your business.",
  },
];

const whoFor = [
  "Service businesses competing for local or national US searches",
  "E-commerce stores trying to rank product and category pages",
  "B2B companies targeting industry-specific keywords",
  "Businesses with an existing website that isn't generating organic traffic",
  "New sites that need a strong SEO foundation from day one",
];

const faqs = [
  {
    q: "How long does SEO take to show results?",
    a: "For local SEO and Google Business Profile improvements, you'll typically see movement within 1–3 months. For competitive national keywords, meaningful ranking improvements usually take 4–9 months of consistent work. SEO compounds — businesses that start now and stay consistent for 12 months build positions that are difficult for newer competitors to displace.",
  },
  {
    q: "Do you guarantee first-page rankings?",
    a: "No — and any agency that does is either lying or selling you on terms with no real search volume. What we do guarantee: transparent reporting on exactly where you rank and what's changing, honest assessments of what's achievable in your market, and consistent execution of proven SEO practices.",
  },
  {
    q: "Can you do SEO if my website was built by someone else?",
    a: "Yes. We start every engagement with a technical audit regardless of who built the site. We can make on-page and technical changes directly if you give us access, or we can provide a detailed specification for your existing developer to implement.",
  },
  {
    q: "What's the difference between local SEO and regular SEO?",
    a: "Local SEO targets geographically qualified searches — \"plumber in Austin TX\" or \"web design agency near me.\" It relies heavily on your Google Business Profile, NAP consistency across citations, and location-specific page content. Regular SEO targets non-geographic terms and relies more on content depth and backlink authority. Most service businesses need both.",
  },
  {
    q: "Is SEO still worth it in 2026 with AI search growing?",
    a: "More so than ever. Google's AI Overviews pull from highly-ranked, well-structured content — so ranking well is now a prerequisite for AI citation too. Businesses with strong SEO foundations are the ones AI search surfaces. We build for both traditional rankings and AI Overviews visibility.",
  },
];

export default function SEOPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="bg-card pt-20 pb-16 px-6 border-b border-line">
        <div className="max-w-350 mx-auto">
          <Breadcrumb crumbs={[{ label: "Services", href: "/services" }, { label: "SEO & Digital Marketing" }]} />
          <p className="eyebrow mb-3">SEO & Digital Marketing</p>
          <h1 className="display-xl text-title mb-4 max-w-2xl">Rank higher on Google. Get found by US customers.</h1>
          <p className="text-[18px] leading-7 text-prose max-w-xl mb-5">
            Data-driven SEO strategies built specifically for the US market. We identify the searches your target customers are making and build a plan to put your business in front of them.
          </p>
          <p className="text-[16px] leading-7 text-prose max-w-2xl mb-8">
            Most business websites have untapped SEO potential. Common problems — missing technical SEO basics, thin content, zero local signals, no Google Business Profile — are entirely fixable. We start every engagement with a full audit to identify exactly what&apos;s holding your rankings back, then build a prioritised plan to fix it. No generic SEO packages — everything is specific to your site and your market.
          </p>
          <Link href="/contact" className="h-12 px-7 inline-flex items-center rounded-full bg-[#171717] text-white dark:bg-white dark:text-[#171717] text-[15px] font-medium hover:opacity-85 transition-opacity">
            Get a free SEO audit
          </Link>
        </div>
      </section>

      {/* ── Deliverables ── */}
      <section className="bg-surface py-20 px-6">
        <div className="max-w-350 mx-auto">
          <h2 className="display-lg text-title mb-4 text-center">What we deliver.</h2>
          <p className="text-[16px] leading-7 text-prose max-w-xl mx-auto text-center mb-12">
            SEO is not one thing — it&apos;s a set of interconnected disciplines. We handle all of them.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {deliverables.map(({ title, desc }) => (
              <div key={title} className="bg-card rounded-xl p-6 shadow-card">
                <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center mb-4">
                  <Check size={15} className="text-violet-500" />
                </div>
                <h3 className="display-sm text-title mb-2">{title}</h3>
                <p className="text-[14px] leading-6 text-prose">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who it's for ── */}
      <section className="bg-card py-20 px-6">
        <div className="max-w-350 mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="display-lg text-title mb-5">Who this is for.</h2>
            <p className="text-[16px] leading-7 text-prose mb-6">
              Our SEO service is designed for US businesses that want sustainable organic traffic — not businesses looking for a quick fix that disappears when they stop paying.
            </p>
            <ul className="space-y-3">
              {whoFor.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check size={14} className="text-violet-500 mt-0.5 shrink-0" />
                  <span className="text-[14px] leading-6 text-prose">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-surface rounded-xl p-8 shadow-card">
            <h3 className="display-md text-title mb-4">What to expect.</h3>
            <div className="space-y-4 text-[14px] leading-6 text-prose">
              <p>
                We start with a full technical and on-page audit — typically delivered within 5 business days of onboarding. This audit identifies every fixable issue on your current site and ranks them by impact.
              </p>
              <p>
                From there, we execute improvements in priority order, report on ranking changes monthly, and adjust strategy based on what the data shows. SEO is an iterative process, not a one-time job.
              </p>
              <p>
                You own all the work we do. If you ever stop working with us, the rankings, content, and optimisations we&apos;ve built stay with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-surface py-20 px-6">
        <div className="max-w-190 mx-auto">
          <h2 className="display-lg text-title mb-12 text-center">Frequently asked questions.</h2>
          <div className="flex flex-col divide-y divide-line">
            {faqs.map(({ q, a }) => (
              <div key={q} className="py-6">
                <p className="text-[16px] font-semibold text-title mb-2">{q}</p>
                <p className="text-[14px] leading-6 text-prose">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-invert py-20 px-6 text-center">
        <div className="max-w-350 mx-auto">
          <h2 className="display-lg text-on-invert mb-4">Start ranking. Start growing.</h2>
          <p className="text-[18px] text-[#888] mb-8">Get a free SEO audit of your current site — we&apos;ll identify exactly what&apos;s holding your rankings back.</p>
          <Link href="/contact" className="h-12 px-8 inline-flex items-center rounded-full bg-white text-[#171717] text-[16px] font-medium hover:bg-[#f0f0f0] transition-colors">
            Request free audit
          </Link>
        </div>
      </section>
    </>
  );
}
