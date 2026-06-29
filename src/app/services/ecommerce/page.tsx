import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { SITE, siteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "E-commerce Development Services for US Businesses",
  description: `Custom e-commerce stores built for US markets. ${SITE.brandName} builds Shopify, WooCommerce, and custom Next.js stores that convert visitors into buyers. Get a free quote.`,
  alternates: { canonical: siteUrl("/services/ecommerce") },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "E-commerce Development",
  description: "Custom Shopify, WooCommerce, and Next.js e-commerce stores built for US markets.",
  url: siteUrl("/services/ecommerce"),
  provider: {
    "@type": "ProfessionalService",
    name: SITE.brandName,
    url: siteUrl(),
  },
  areaServed: { "@type": "Country", name: "United States" },
};

const platforms = [
  {
    name: "Shopify",
    bestFor: "Product-based businesses launching fast",
    desc: "Ideal for businesses that want to go live quickly and don't need complex customisation. Shopify handles hosting, security, and updates — you focus on your products. Built-in US payment processing via Shopify Payments means no extra gateway configuration. The app ecosystem covers most US-specific needs (reviews, loyalty, multi-channel selling). Starter stores can be live within 1–2 weeks.",
    gradient: "from-green-500 to-emerald-500",
    pros: ["Fastest launch time", "No technical maintenance", "Built-in US payments", "Excellent mobile app"],
    cons: ["Monthly fees ($39–$399)", "Less customisation flexibility", "Platform lock-in"],
  },
  {
    name: "WooCommerce",
    bestFor: "WordPress businesses wanting full ownership",
    desc: "The right choice if you're already on WordPress or you want to own your infrastructure completely. WooCommerce is free — you pay only for hosting and any premium plugins you add. No transaction fees, unlimited product types, and full control over every aspect of the experience. Requires more technical management but gives you complete ownership and flexibility.",
    gradient: "from-violet-500 to-purple-500",
    pros: ["No transaction fees", "Full ownership and control", "Deep WordPress integration", "Unlimited customisation"],
    cons: ["Requires WordPress management", "Performance needs optimisation", "Plugin costs add up"],
  },
  {
    name: "Custom (Next.js + Stripe)",
    bestFor: "High-volume stores or unique requirements",
    desc: "For businesses that need maximum performance, unique checkout flows, subscription models, B2B pricing tiers, or complex product configurators that neither Shopify nor WooCommerce handles well. Built on Next.js for sub-second load times, with Stripe for US payment processing. Higher upfront investment, lowest ongoing cost, and no per-transaction platform fees.",
    gradient: "from-blue-500 to-cyan-500",
    pros: ["Maximum performance (90–99 PageSpeed)", "Zero platform fees", "Built exactly to spec", "Lowest long-term cost"],
    cons: ["Higher upfront cost", "Requires developer for major changes"],
  },
];

const features = [
  "US payment gateway integration (Stripe, PayPal, Apple Pay, Shop Pay)",
  "Mobile-optimised checkout flow — built for US buying patterns",
  "Product filtering, search, and sorting for large catalogs",
  "Inventory and order management setup",
  "Abandoned cart recovery configuration",
  "SEO-optimised product and category pages",
  "Google Analytics 4 e-commerce tracking",
  "Tax calculation setup for US states",
];

const faqs = [
  {
    q: "Which platform should I choose — Shopify or WooCommerce?",
    a: "If you want to launch quickly, don't have a developer, and primarily sell physical products: Shopify. If you're already on WordPress, want full ownership, or have a tight ongoing budget: WooCommerce. If you have complex requirements, unique checkout flows, or sell at high volume where transaction fees are significant: custom Next.js. We'll give you an honest recommendation during our initial call.",
  },
  {
    q: "Can you migrate my existing store to a new platform?",
    a: "Yes. We handle migrations from Shopify to WooCommerce and vice versa, including product data, customer records, and order history. We also migrate from platforms like BigCommerce, Magento, Wix, and Squarespace. Migrations are quoted individually based on catalog size and data complexity.",
  },
  {
    q: "Do you handle product photography or copywriting?",
    a: "We specialise in development and SEO — not photography or copywriting. For product photography, we can recommend professional services. For product copy, we can provide guidelines for writing effective descriptions, or we'll work with copy you provide.",
  },
  {
    q: "How do you handle US sales tax?",
    a: "US sales tax is complex — different rates across 50 states, plus product-specific exemptions. For Shopify, we configure Shopify Tax or TaxJar integration. For WooCommerce, we set up TaxJar or Avalara. We don't provide tax advice, but we ensure your store's technical tax calculation is properly configured.",
  },
  {
    q: "Will my store be optimised for mobile?",
    a: "Absolutely — mobile is non-negotiable for US e-commerce. Over 70% of US online shopping browsing happens on mobile. Every store we build is mobile-first: large tap targets, simplified navigation, a streamlined checkout that minimises friction on small screens.",
  },
  {
    q: "What about ongoing support after launch?",
    a: "All e-commerce projects include 30 days of post-launch support. After that, our maintenance plans start at $97/month and cover updates, security monitoring, and a set number of content edit hours. E-commerce sites tend to benefit most from our Pro and Agency plans given the ongoing need for product updates and performance monitoring.",
  },
];

export default function EcommercePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="bg-card pt-20 pb-16 px-6 border-b border-line">
        <div className="max-w-350 mx-auto">
          <Breadcrumb crumbs={[{ label: "Services", href: "/services" }, { label: "E-commerce" }]} />
          <p className="eyebrow mb-3">E-commerce</p>
          <h1 className="display-xl text-title mb-4 max-w-2xl">Online stores built to sell to US customers.</h1>
          <p className="text-[18px] leading-7 text-prose max-w-xl mb-5">
            E-commerce experiences optimised for the US market — fast checkout, familiar payment methods, and mobile-first design that converts browsers into buyers.
          </p>
          <p className="text-[16px] leading-7 text-prose max-w-2xl mb-8">
            US shoppers have high expectations: they expect Apple Pay or PayPal at checkout, they abandon if the mobile experience is clunky, and they won&apos;t return if the site is slow. We build stores that meet these expectations from day one — on the platform that best fits your product, budget, and long-term plans. Every store includes US payment gateway integration, SEO-optimised product pages, and Google Analytics 4 e-commerce tracking.
          </p>
          <Link href="/contact" className="h-12 px-7 inline-flex items-center rounded-full bg-[#171717] text-white dark:bg-white dark:text-[#171717] text-[15px] font-medium hover:opacity-85 transition-opacity">
            Discuss your store
          </Link>
        </div>
      </section>

      {/* ── Platforms ── */}
      <section className="bg-surface py-20 px-6">
        <div className="max-w-350 mx-auto">
          <h2 className="display-lg text-title mb-4 text-center">Choose your platform.</h2>
          <p className="text-[16px] leading-7 text-prose max-w-xl mx-auto text-center mb-12">
            There&apos;s no universal best platform. The right choice depends on your products, budget, technical comfort, and growth plans.
          </p>
          <div className="grid md:grid-cols-3 gap-5 mb-16">
            {platforms.map(({ name, bestFor, desc, gradient, pros, cons }) => (
              <div key={name} className="bg-card rounded-xl overflow-hidden shadow-card-lg flex flex-col">
                <div className={`bg-linear-to-br ${gradient} p-6`}>
                  <p className="text-white/70 text-[11px] font-semibold uppercase tracking-wide mb-1">Best for</p>
                  <p className="text-white font-semibold text-[13px]">{bestFor}</p>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="display-md text-title mb-3">{name}</h3>
                  <p className="text-[14px] leading-6 text-prose mb-5 flex-1">{desc}</p>
                  <div className="space-y-4">
                    <div>
                      <p className="text-[12px] font-semibold text-emerald-600 dark:text-emerald-400 mb-2">Strengths</p>
                      <ul className="space-y-1">
                        {pros.map((p) => (
                          <li key={p} className="text-[13px] text-prose flex items-start gap-2">
                            <span className="text-emerald-500 mt-0.5 shrink-0">+</span>{p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-[12px] font-semibold text-orange-600 dark:text-orange-400 mb-2">Trade-offs</p>
                      <ul className="space-y-1">
                        {cons.map((c) => (
                          <li key={c} className="text-[13px] text-prose flex items-start gap-2">
                            <span className="text-orange-500 mt-0.5 shrink-0">−</span>{c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="display-lg text-title mb-8 text-center">Every store includes.</h2>
          <div className="grid sm:grid-cols-2 gap-3 max-w-190 mx-auto">
            {features.map((f) => (
              <div key={f} className="flex items-start gap-3 bg-card rounded-lg p-4 shadow-card">
                <span className="text-link mt-0.5 shrink-0">✓</span>
                <span className="text-[14px] leading-6 text-prose">{f}</span>
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
          <h2 className="display-lg text-on-invert mb-4">Ready to launch your store?</h2>
          <p className="text-[18px] text-[#888] mb-8">Tell us about your products and we&apos;ll recommend the best platform and approach.</p>
          <Link href="/contact" className="h-12 px-8 inline-flex items-center rounded-full bg-white text-[#171717] text-[16px] font-medium hover:bg-[#f0f0f0] transition-colors">
            Start your store
          </Link>
        </div>
      </section>
    </>
  );
}
