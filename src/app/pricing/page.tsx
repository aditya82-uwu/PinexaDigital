import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { SITE, siteUrl } from "@/lib/site-config";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Pricing — Transparent Web Design Packages",
  description: `Simple, transparent pricing for professional web design and development. No hidden fees. ${SITE.brandName} serves US clients with fixed-price packages.`,
  alternates: { canonical: siteUrl("/pricing") },
};

const tiers = [
  {
    name: "Starter",
    price: "$997",
    period: "one-time",
    description: "For small businesses launching their first professional website.",
    features: [
      "Up to 5 pages",
      "Mobile-responsive design",
      "Contact form",
      "Basic SEO setup",
      "Google Analytics",
      "1 round of revisions",
      "2-week delivery",
    ],
    cta: "Get started",
    featured: false,
  },
  {
    name: "Growth",
    price: "$2,497",
    period: "one-time",
    description: "For businesses serious about generating leads and growing online.",
    features: [
      "Up to 12 pages",
      "Custom design system",
      "Advanced SEO (on-page + technical)",
      "Blog setup",
      "Lead capture forms",
      "Speed optimisation",
      "3 rounds of revisions",
      "3-week delivery",
    ],
    cta: "Start growing",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "project",
    description: "For large projects, e-commerce, and ongoing partnerships.",
    features: [
      "Unlimited pages",
      "E-commerce integration",
      "Custom functionality",
      "Priority support",
      "Monthly maintenance",
      "Performance reporting",
      "Dedicated project manager",
    ],
    cta: "Let's talk",
    featured: false,
  },
];

const faqs = [
  {
    q: "Do you offer payment plans?",
    a: "Yes — we split all projects 50% upfront and 50% on delivery. Enterprise projects can be split into 3 milestones.",
  },
  {
    q: "What's included after launch?",
    a: "All packages include 30 days of free bug fixes. After that, we offer monthly maintenance plans starting at $97/month.",
  },
  {
    q: "How long does a project take?",
    a: "Starter projects typically take 2 weeks. Growth projects take 3 weeks. Enterprise timelines depend on scope.",
  },
  {
    q: "Do you work with US businesses only?",
    a: "We work with businesses worldwide but specialise in the US market — our designs, copy guidance, and SEO strategies are tailored for US audiences.",
  },
];

const pricingJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "PinexaDigital Web Design Packages",
  url: siteUrl("/pricing"),
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Offer",
        name: "Starter",
        description: "For small businesses launching their first professional website. Up to 5 pages, 2-week delivery.",
        price: "997",
        priceCurrency: "USD",
        url: siteUrl("/pricing"),
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "997",
          priceCurrency: "USD",
          unitText: "one-time",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Offer",
        name: "Growth",
        description: "For businesses serious about generating leads. Up to 12 pages, advanced SEO, 3-week delivery.",
        price: "2497",
        priceCurrency: "USD",
        url: siteUrl("/pricing"),
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "2497",
          priceCurrency: "USD",
          unitText: "one-time",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Offer",
        name: "Enterprise",
        description: "For large projects, e-commerce, and ongoing partnerships. Custom pricing.",
        url: siteUrl("/pricing"),
      },
    },
  ],
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd) }}
      />
      <section className="bg-card pt-20 pb-16 px-6 text-center border-b border-line">
        <div className="max-w-350 mx-auto">
          <Breadcrumb crumbs={[{ label: "Pricing" }]} />
          <p className="eyebrow mb-3">Pricing</p>
          <h1 className="display-xl text-title mb-4">Simple, transparent pricing.</h1>
          <p className="text-[18px] leading-7 text-prose max-w-lg mx-auto">
            Fixed-price packages. No hourly billing. No surprises.
          </p>
        </div>
      </section>

      <section className="bg-surface py-20 px-6">
        <div className="max-w-350 mx-auto grid md:grid-cols-3 gap-4">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-xl p-8 flex flex-col ${
                tier.featured
                  ? "bg-invert text-on-invert"
                  : "bg-card shadow-card-lg"
              }`}
            >
              <div className="mb-6">
                <p className="eyebrow mb-3">{tier.name}</p>
                <div className="flex items-end gap-2 mb-3">
                  <span className="display-xl">{tier.price}</span>
                  <span className="text-[14px] text-faint mb-2">{tier.period}</span>
                </div>
                <p className={`text-[14px] leading-6 ${tier.featured ? "text-[#888]" : "text-prose"}`}>
                  {tier.description}
                </p>
              </div>

              <ul className="flex flex-col gap-3 flex-1 mb-8">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[14px]">
                    <Check size={15} className={`mt-0.5 shrink-0 ${tier.featured ? "text-emerald-400" : "text-link"}`} />
                    <span className={tier.featured ? "text-[#d0d0d0]" : "text-prose"}>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`h-12 flex items-center justify-center rounded-full text-[16px] font-medium transition-colors ${
                  tier.featured
                    ? "bg-white text-[#171717] hover:bg-[#f0f0f0]"
                    : "bg-invert text-on-invert hover:opacity-85"
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-card py-20 px-6">
        <div className="max-w-190 mx-auto">
          <h2 className="display-lg text-title mb-12 text-center">Frequently asked questions.</h2>
          <div className="flex flex-col divide-y divide-line">
            {faqs.map((faq) => (
              <div key={faq.q} className="py-6">
                <p className="text-[16px] font-semibold text-title mb-2">{faq.q}</p>
                <p className="text-[14px] leading-6 text-prose">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-invert py-20 px-6 text-center">
        <div className="max-w-350 mx-auto">
          <h2 className="display-lg text-on-invert mb-4">Not sure which plan is right?</h2>
          <p className="text-[18px] text-[#888] mb-8 max-w-sm mx-auto">Tell us about your project and we&apos;ll recommend the best fit.</p>
          <Link href="/contact" className="h-12 px-8 inline-flex items-center rounded-full bg-white text-[#171717] text-[16px] font-medium hover:bg-[#f0f0f0] transition-colors">
            Talk to us
          </Link>
        </div>
      </section>
    </>
  );
}
