import type { Metadata } from "next";
import Link from "next/link";
import { Check, Search, FileSearch, PenTool, MapPin, Link2, LineChart } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Eyebrow from "@/components/ui/Eyebrow";
import DoodleArrow from "@/components/ui/DoodleArrow";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { faqPageJsonLd } from "@/lib/faq-schema";
import ServicesSidebarNav from "@/components/ui/ServicesSidebarNav";
import { SITE, siteUrl, pageMetadata } from "@/lib/site-config";

export const metadata: Metadata = pageMetadata({
  title: "SEO Services for US Businesses",
  description: `Rank higher and win organic traffic with ${SITE.brandName}'s SEO services: technical SEO, on-page optimisation, content strategy, and local SEO. Free audit, fixed monthly quote.`,
  path: "/services/seo",
});

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO Services",
  description: "Technical SEO, on-page optimisation, content strategy, local SEO, and link building for US businesses.",
  url: siteUrl("/services/seo"),
  provider: { "@id": `${siteUrl()}/#organization` },
  areaServed: { "@type": "Country", name: "United States" },
};

const tags = ["Technical SEO", "On-Page SEO", "Content Strategy", "Local SEO"];

const deliverables = [
  {
    icon: FileSearch,
    title: "Technical SEO audit & fixes.",
    desc: "Crawlability, indexability, site speed, Core Web Vitals, and structured data, the technical issues that quietly cap how well a site can rank, found and fixed.",
  },
  {
    icon: Search,
    title: "On-page optimisation.",
    desc: "Title tags, meta descriptions, header structure, and internal linking across every page, aligned to what your customers are actually searching for.",
  },
  {
    icon: PenTool,
    title: "Keyword research & content strategy.",
    desc: "We identify the keywords with real buyer intent for your market, then build a content plan around them, new pages, blog posts, and service pages.",
  },
  {
    icon: MapPin,
    title: "Local SEO & Google Business Profile.",
    desc: "Google Business Profile optimisation, citation consistency, and location page structure for businesses that depend on map pack visibility.",
  },
  {
    icon: Link2,
    title: "Link building & authority.",
    desc: "Earning links from relevant, credible sources to build the domain authority Google rewards, no spammy directories or link farms.",
  },
  {
    icon: LineChart,
    title: "Reporting & tracking.",
    desc: "Monthly reporting on rankings, organic traffic, and the work completed, so you always know what's being done and whether it's working.",
  },
];

const whoFor = [
  "Businesses with a website that isn't showing up for the terms that matter",
  "Businesses that rely on local search and map pack visibility",
  "Companies ready to invest in organic traffic instead of paying for every visitor",
  "Businesses that tried SEO before and got vague reports with no real results",
  "Anyone launching a new site who wants SEO built in from day one",
];

const faqs = [
  {
    q: "How is SEO pricing structured?",
    a: "SEO isn't one-size-fits-all, so we don't sell fixed packages. After a free audit of your site and competitors, we scope a monthly plan around your goals and follow up with a fixed quote, so you know exactly what you're paying for and why.",
  },
  {
    q: "How long until I see results?",
    a: "SEO is a compounding investment, not an instant fix. Most businesses start seeing meaningful movement in rankings and traffic within 3–6 months, with results building from there. Anyone promising overnight results is not doing SEO.",
  },
  {
    q: "Do you handle both technical and content SEO?",
    a: "Yes. We cover technical SEO, on-page optimisation, content strategy, and local SEO under one engagement, so nothing falls through the gap between specialists.",
  },
  {
    q: "Will I get regular reports?",
    a: "Yes, every SEO client gets a monthly report covering rankings, organic traffic, and exactly what work was completed that month. No vague summaries, no jargon without explanation.",
  },
  {
    q: "Can I combine SEO with a new website or redesign?",
    a: "Yes, and it's often the best time to start. Building SEO in from the first line of code, correct structure, fast performance, clean URLs, is far more effective than retrofitting it onto an existing site later.",
  },
];

export default function SEOPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd(faqs)) }}
      />

      {/* ── Hero ── */}
      <section className="bg-card pt-12 md:pt-20 pb-16 px-6 border-b border-line">
        <div className="max-w-350 mx-auto">
          <Breadcrumb crumbs={[{ label: "Services", href: "/services" }, { label: "SEO" }]} />
          <Eyebrow className="mb-3">SEO</Eyebrow>
          <h1 className="display-xl text-title mb-4 max-w-2xl">SEO that turns search traffic into customers.</h1>
          <p className="text-[18px] leading-7 text-prose max-w-xl mb-5">
            We handle technical SEO, on-page optimisation, content strategy, and local search, so your business shows up when your customers are searching, not just for vanity keywords.
          </p>
          <div className="grid lg:grid-cols-2 gap-10 items-start mb-8">
            <DoodleArrow className="w-20 h-24 text-faint" />
            <div>
              <p className="text-[16px] leading-7 text-prose mb-6">
                Every SEO engagement starts with a free audit of your site and market. From there we scope a plan around your goals, whether that&apos;s local visibility, national organic traffic, or both, and follow up with a fixed monthly quote before any work begins.
              </p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
                {tags.map((tag) => (
                  <span key={tag} className="text-[14px] font-medium text-title">+ {tag}</span>
                ))}
              </div>
            </div>
          </div>
          <Link href="/contact" className="h-12 px-7 inline-flex items-center rounded-full bg-accent-solid text-white text-[15px] font-semibold hover:opacity-90 transition-opacity">
            Get a free SEO audit
          </Link>
        </div>
      </section>

      {/* ── Deliverables ── */}
      <section className="bg-surface py-20 px-6">
        <div className="max-w-350 mx-auto">
          <h2 className="display-lg text-title mb-4 text-center">What we deliver.</h2>
          <p className="text-[16px] leading-7 text-prose max-w-xl mx-auto text-center mb-12">
            From a technical foundation to ongoing content and authority, scoped to what your site actually needs.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {deliverables.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-card rounded-xl p-6 shadow-card">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4">
                  <Icon size={15} className="text-indigo-500" />
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
              Our SEO service is built for US businesses that want organic search to actually generate leads, not just traffic.
            </p>
            <ul className="space-y-3">
              {whoFor.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check size={14} className="text-indigo-500 mt-0.5 shrink-0" />
                  <span className="text-[14px] leading-6 text-prose">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-surface rounded-xl p-8 shadow-card">
            <h3 className="display-md text-title mb-4">What to expect.</h3>
            <div className="space-y-4 text-[14px] leading-6 text-prose">
              <p>
                We start with a free audit covering technical health, on-page SEO, content gaps, and how you stack up against competitors ranking above you.
              </p>
              <p>
                From there, we scope a monthly plan and follow up with a fixed quote before any work begins, no hourly billing and no surprises.
              </p>
              <p>
                Every engagement is month-to-month, with a monthly report showing exactly what was done and how it moved rankings and traffic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ + sidebar ── */}
      <section className="bg-surface py-20 px-6">
        <div className="max-w-350 mx-auto grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2">
            <h2 className="display-lg text-title mb-8">Frequently asked questions.</h2>
            <FAQAccordion items={faqs} />
          </div>

          <div className="lg:sticky lg:top-24 flex flex-col gap-8">
            <ServicesSidebarNav currentHref="/services/seo" />
            <div className="bg-invert rounded-xl p-8 shadow-card-lg">
              <h3 className="display-sm text-on-invert mb-3">Not sure where you stand?</h3>
              <p className="text-[14px] leading-6 text-[#888] mb-6">
                Get a free audit of your site and we&apos;ll follow up with a fixed monthly quote, no hourly billing.
              </p>
              <Link href="/contact" className="h-12 w-full flex items-center justify-center rounded-full bg-white text-[#171717] text-[15px] font-medium hover:bg-[#f0f0f0] transition-colors">
                Get a free SEO audit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-invert py-20 px-6 text-center">
        <div className="max-w-350 mx-auto">
          <h2 className="display-lg text-on-invert mb-4">Ready to rank higher?</h2>
          <p className="text-[18px] text-[#888] mb-8">Tell us about your site and goals, and we&apos;ll follow up with a free audit and a fixed quote.</p>
          <Link href="/contact" className="h-12 px-8 inline-flex items-center rounded-full bg-white text-[#171717] text-[16px] font-medium hover:bg-[#f0f0f0] transition-colors">
            Get a free SEO audit
          </Link>
        </div>
      </section>
    </>
  );
}
