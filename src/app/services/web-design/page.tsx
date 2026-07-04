import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { SITE, siteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Web Design & Development Services for US Businesses",
  description: `Custom web design and development for US businesses. ${SITE.brandName} builds fast, high-converting websites that drive real results. Fixed pricing from $299. Get a free quote.`,
  alternates: { canonical: siteUrl("/services/web-design") },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Web Design & Development",
  description: "Custom websites built for speed, SEO, and US audiences. Starting from $299.",
  url: siteUrl("/services/web-design"),
  provider: {
    "@type": "ProfessionalService",
    name: SITE.brandName,
    url: siteUrl(),
  },
  areaServed: { "@type": "Country", name: "United States" },
  offers: {
    "@type": "Offer",
    price: "299",
    priceCurrency: "USD",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "299",
      priceCurrency: "USD",
      unitText: "one-time",
    },
  },
};

const steps = [
  { n: "01", title: "Discovery call.", desc: "We learn about your business, goals, and target audience. We'll recommend the right approach and scope — no proposal until we understand the problem." },
  { n: "02", title: "Design sprint.", desc: "Full design mockups within 5 business days. We iterate on your feedback until every detail is right. You approve before we write a line of code." },
  { n: "03", title: "Build & test.", desc: "We develop on a staging environment, run cross-browser and mobile testing, optimise Core Web Vitals, and set up analytics." },
  { n: "04", title: "Launch & handoff.", desc: "We go live, submit your sitemap to Google, complete technical SEO setup, and give you full ownership of the codebase." },
];

const includes = [
  "Custom design tailored to your brand and US audience",
  "Mobile-first, fully responsive layout",
  "Optimised for Google Core Web Vitals (90–99 PageSpeed score)",
  "SEO meta tags and structured data on every page",
  "Google Analytics 4 integration",
  "Contact forms with email notifications",
  "Hosting-ready deployment (Vercel / Netlify)",
  "30 days post-launch support",
];

const whoFor = [
  { label: "Service businesses", desc: "Law firms, consultants, contractors, agencies, healthcare practices — any professional service that needs a credible web presence to win clients." },
  { label: "B2B companies", desc: "Businesses selling to other businesses, where the website is part of a longer sales process and needs to establish trust and expertise." },
  { label: "Local businesses", desc: "Brick-and-mortar and service-area businesses that need to rank in local Google searches and convert nearby visitors into calls and bookings." },
  { label: "New ventures", desc: "Founders and entrepreneurs launching their first professional web presence and wanting to do it right the first time." },
];

const faqs = [
  {
    q: "What's the difference between your Starter and Growth packages?",
    a: "The Starter package ($299) covers up to 5 pages and is designed for businesses that need a clean, professional website quickly — homepage, about, services, contact, and one more. The Growth package ($499) covers up to 12 pages, includes a custom design system, advanced SEO, and a blog setup ready for content marketing. If you plan to publish content or need more than 5 pages, Growth is the right choice.",
  },
  {
    q: "Do you use templates or build from scratch?",
    a: "We build from scratch. Every site starts with a design brief and is custom-designed for your brand, your market, and your conversion goals. We don't use website builders or pre-made templates. The result is a site that looks unique, performs exceptionally, and doesn't share a layout with hundreds of other businesses.",
  },
  {
    q: "Will my website rank on Google?",
    a: "We handle all technical SEO setup on every project — structured data, meta tags, sitemap, canonical URLs, Core Web Vitals performance, and Google Analytics. This gives your site the right foundation to rank. Achieving and maintaining top positions for competitive keywords requires ongoing SEO work, which we offer as a separate service.",
  },
  {
    q: "Can I update the website myself after launch?",
    a: "Yes. If you choose a WordPress build, you get a full CMS and can update content, add pages, and manage your blog without touching code. For Next.js builds, we hand over the full codebase and documentation — any developer can work on it. We also offer monthly maintenance plans if you'd rather have us handle updates.",
  },
  {
    q: "What do I need to provide to get started?",
    a: "Your brand assets (logo, colours, any existing guidelines), any copy or content you want on the site, examples of websites you like and why, and a list of your main competitors. If you don't have copy ready, we can recommend copywriting resources or discuss adding it to the project scope.",
  },
  {
    q: "What happens if I need changes after launch?",
    a: "Every project includes 30 days of free bug fixes after launch. For content changes, additions, or design updates after that period, our monthly maintenance plans start at $97/month and include a set number of edit hours each month.",
  },
];

export default function WebDesignPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="bg-card pt-20 pb-16 px-6 border-b border-line">
        <div className="max-w-350 mx-auto">
          <Breadcrumb crumbs={[{ label: "Services", href: "/services" }, { label: "Web Design & Development" }]} />
          <p className="eyebrow mb-3">Web Design & Development</p>
          <h1 className="display-xl text-title mb-4 max-w-2xl">Websites built to convert US visitors into customers.</h1>
          <p className="text-[18px] leading-7 text-prose max-w-xl mb-5">
            Custom websites that look professional, load fast, and are built specifically for US audiences. From a clean 5-page business site to a full content-driven growth platform.
          </p>
          <p className="text-[16px] leading-7 text-prose max-w-2xl mb-8">
            We build with Next.js — the framework used by some of the fastest sites on the web — for PageSpeed scores of 90–99 on mobile. Every site includes complete technical SEO setup, structured data, and a Google Analytics integration. You own the code. No platform lock-in, no recurring platform fees, no builder subscriptions.
          </p>
          <Link href="/contact" className="h-12 px-7 inline-flex items-center rounded-full bg-[#171717] text-white dark:bg-white dark:text-[#171717] text-[15px] font-medium hover:opacity-85 transition-opacity">
            Get a free quote
          </Link>
        </div>
      </section>

      {/* ── Includes + Pricing ── */}
      <section className="bg-surface py-20 px-6">
        <div className="max-w-350 mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="display-lg text-title mb-8">What&apos;s included.</h2>
            <ul className="flex flex-col gap-3">
              {includes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check size={15} className="text-link mt-0.5 shrink-0" />
                  <span className="text-[14px] leading-6 text-prose">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-invert rounded-xl p-8 shadow-card-lg">
            <p className="eyebrow text-[#555] mb-4">Starting from</p>
            <p className="display-xl text-on-invert mb-1">$299</p>
            <p className="text-[14px] text-[#888] mb-4">one-time, no hidden fees</p>
            <div className="border-t border-[#333] pt-4 mb-6 space-y-2">
              <div className="flex justify-between text-[13px]">
                <span className="text-[#888]">Starter (5 pages)</span>
                <span className="text-on-invert font-semibold">$299</span>
              </div>
              <div className="flex justify-between text-[13px]">
                <span className="text-[#888]">Growth (12 pages)</span>
                <span className="text-on-invert font-semibold">$499</span>
              </div>
              <div className="flex justify-between text-[13px]">
                <span className="text-[#888]">Enterprise</span>
                <span className="text-on-invert font-semibold">Custom</span>
              </div>
            </div>
            <p className="text-[13px] leading-5 text-[#888] mb-8">
              All projects: 50% upfront, 50% on delivery. No surprises.
            </p>
            <Link href="/contact" className="h-12 w-full flex items-center justify-center rounded-full bg-white text-[#171717] text-[15px] font-medium hover:bg-[#f0f0f0] transition-colors">
              Start your project
            </Link>
          </div>
        </div>
      </section>

      {/* ── Who it's for ── */}
      <section className="bg-card py-20 px-6">
        <div className="max-w-350 mx-auto">
          <h2 className="display-lg text-title mb-4 text-center">Who this is for.</h2>
          <p className="text-[16px] leading-7 text-prose max-w-xl mx-auto text-center mb-12">
            Our web design service is built for US businesses that take their online presence seriously and want measurable results from it.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whoFor.map(({ label, desc }) => (
              <div key={label} className="bg-surface rounded-xl p-6 shadow-card">
                <h3 className="display-sm text-title mb-2">{label}</h3>
                <p className="text-[14px] leading-6 text-prose">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="bg-surface py-20 px-6">
        <div className="max-w-350 mx-auto">
          <h2 className="display-lg text-title mb-12 text-center">How it works.</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {steps.map(({ n, title, desc }) => (
              <div key={n} className="bg-card rounded-xl p-6 shadow-card">
                <p className="eyebrow mb-3">{n}</p>
                <h3 className="display-sm text-title mb-2">{title}</h3>
                <p className="text-[14px] leading-6 text-prose">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-card py-20 px-6">
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
          <h2 className="display-lg text-on-invert mb-4">Ready to get a professional website?</h2>
          <p className="text-[18px] text-[#888] mb-8">We reply to every inquiry within 24 hours.</p>
          <Link href="/contact" className="h-12 px-8 inline-flex items-center rounded-full bg-white text-[#171717] text-[16px] font-medium hover:bg-[#f0f0f0] transition-colors">
            Get a free quote
          </Link>
        </div>
      </section>
    </>
  );
}
