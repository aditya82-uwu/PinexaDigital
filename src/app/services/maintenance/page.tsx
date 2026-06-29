import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { SITE, siteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Website Maintenance & Support Plans | PinexaDigital",
  description: `Keep your website fast, secure, and up to date with ${SITE.brandName}'s monthly maintenance plans. Starting at $97/month. Updates, backups, monitoring, and priority support.`,
  alternates: { canonical: siteUrl("/services/maintenance") },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Website Maintenance & Support",
  description: "Monthly website maintenance plans — security, updates, backups, and support. Starting at $97/month.",
  url: siteUrl("/services/maintenance"),
  provider: {
    "@type": "ProfessionalService",
    name: SITE.brandName,
    url: siteUrl(),
  },
  areaServed: { "@type": "Country", name: "United States" },
  offers: {
    "@type": "Offer",
    price: "97",
    priceCurrency: "USD",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "97",
      priceCurrency: "USD",
      unitText: "month",
    },
  },
};

const plans = [
  {
    name: "Basic",
    price: "$97",
    desc: "For businesses that need their site kept secure and stable, with email support for issues that arise.",
    features: [
      "Monthly CMS, plugin, and theme updates",
      "Daily automated backups (30-day retention)",
      "24/7 uptime monitoring with alerts",
      "Monthly security scanning",
      "Email support (48-hour response)",
    ],
    featured: false,
  },
  {
    name: "Pro",
    price: "$197",
    desc: "For businesses that want performance monitoring and regular content updates without managing it themselves.",
    features: [
      "Everything in Basic",
      "Monthly performance report (PageSpeed, Core Web Vitals)",
      "2 hours of content edits per month",
      "Priority email support (24-hour response)",
      "Monthly Google Analytics review",
      "Quarterly SEO health check",
    ],
    featured: true,
  },
  {
    name: "Agency",
    price: "$397",
    desc: "For growing businesses that want a dedicated partner for their web presence, with strategy included.",
    features: [
      "Everything in Pro",
      "5 hours of edits and additions per month",
      "Dedicated Slack or Teams channel",
      "Monthly 30-minute strategy call",
      "Monthly SEO performance review",
      "Priority same-day response for urgent issues",
    ],
    featured: false,
  },
];

const whyMaintenance = [
  {
    title: "Security vulnerabilities emerge constantly.",
    desc: "WordPress plugins, CMS platforms, and server software release security patches regularly. A single unpatched vulnerability can lead to site defacement, data theft, or your site being blacklisted by Google. Monthly updates prevent the vast majority of these issues.",
  },
  {
    title: "Performance degrades over time.",
    desc: "Databases grow, caches get stale, and new content adds weight. A site that scored 95 on PageSpeed at launch can drift below 70 within a year without maintenance. Slower sites rank lower and convert less.",
  },
  {
    title: "Content needs to stay current.",
    desc: "Outdated pricing, old team photos, stale service descriptions, or broken links erode trust. Clients on our Pro and Agency plans get content edit hours every month so their site stays accurate and fresh.",
  },
  {
    title: "Downtime costs you money.",
    desc: "The average cost of website downtime for a small business is hundreds of dollars per hour in lost leads and revenue. Our 24/7 uptime monitoring catches issues immediately — often before you or your customers notice anything.",
  },
];

const faqs = [
  {
    q: "Do I need to have my site built by you to sign up for maintenance?",
    a: "No. We maintain sites built by any agency or developer. We'll review your site during onboarding to confirm it's in a maintainable state and assess the initial work needed to bring it up to standard.",
  },
  {
    q: "What does '2 hours of content edits' actually cover?",
    a: "Two hours covers most common updates: changing text, updating pricing, swapping images, adding a team member, or adjusting a service description. It doesn't cover redesigns, new page layouts, or development work. If you have a larger project in a given month, we'll quote the additional hours at our standard rate.",
  },
  {
    q: "Can I cancel or change plans at any time?",
    a: "Yes. All plans are month-to-month with no contracts. You can upgrade, downgrade, or cancel with 30 days' notice. We don't lock you in — we earn your business each month by being useful.",
  },
  {
    q: "What happens if my site gets hacked?",
    a: "Site security incidents are covered under all plans — we'll work to restore your site from a clean backup, identify the entry point, and patch the vulnerability. If a site is compromised due to an update we applied, remediation is completely at our cost.",
  },
  {
    q: "Is the monthly strategy call on the Agency plan a sales call?",
    a: "No. The 30-minute monthly call is a review of your site's analytics, a discussion of any changes to your business or market that should be reflected on the site, and planning for the next month's edit hours. It's working time, not a pitch.",
  },
];

export default function MaintenancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="bg-card pt-20 pb-16 px-6 border-b border-line">
        <div className="max-w-350 mx-auto">
          <Breadcrumb crumbs={[{ label: "Services", href: "/services" }, { label: "Maintenance" }]} />
          <p className="eyebrow mb-3">Website Maintenance</p>
          <h1 className="display-xl text-title mb-4 max-w-2xl">Your website, always fast and always secure.</h1>
          <p className="text-[18px] leading-7 text-prose max-w-xl mb-5">
            Monthly plans so you never worry about security patches, plugin updates, performance drift, or broken features again.
          </p>
          <p className="text-[16px] leading-7 text-prose max-w-2xl mb-8">
            A website is not a one-time project — it&apos;s an ongoing business asset that needs care to stay valuable. Software updates, security patches, performance monitoring, and regular content freshness aren&apos;t optional for a site that represents your business to thousands of potential customers. Our maintenance plans handle all of it, so you can focus on running your business.
          </p>
          <Link href="/contact" className="h-12 px-7 inline-flex items-center rounded-full bg-[#171717] text-white dark:bg-white dark:text-[#171717] text-[15px] font-medium hover:opacity-85 transition-opacity">
            View plans
          </Link>
        </div>
      </section>

      {/* ── Why maintenance ── */}
      <section className="bg-surface py-20 px-6">
        <div className="max-w-350 mx-auto">
          <h2 className="display-lg text-title mb-4 text-center">Why maintenance matters.</h2>
          <p className="text-[16px] leading-7 text-prose max-w-xl mx-auto text-center mb-12">
            Most business owners don&apos;t think about website maintenance until something goes wrong. Here&apos;s what can go wrong.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {whyMaintenance.map(({ title, desc }) => (
              <div key={title} className="bg-card rounded-xl p-6 shadow-card">
                <h3 className="display-sm text-title mb-2">{title}</h3>
                <p className="text-[14px] leading-6 text-prose">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Plans ── */}
      <section className="bg-card py-20 px-6">
        <div className="max-w-350 mx-auto">
          <h2 className="display-lg text-title mb-12 text-center">Choose your plan.</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {plans.map(({ name, price, desc, features, featured }) => (
              <div
                key={name}
                className={`rounded-xl p-8 flex flex-col ${featured ? "bg-invert" : "bg-surface shadow-card-lg"}`}
              >
                {featured && (
                  <div className="inline-flex items-center gap-1.5 bg-white/15 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full mb-4 self-start">
                    Most popular
                  </div>
                )}
                <p className="eyebrow mb-3">{name}</p>
                <div className="flex items-end gap-1.5 mb-3">
                  <span className={`display-xl ${featured ? "text-on-invert" : "text-title"}`}>{price}</span>
                  <span className={`text-[14px] mb-2 ${featured ? "text-[#888]" : "text-faint"}`}>/month</span>
                </div>
                <p className={`text-[14px] leading-6 mb-6 ${featured ? "text-[#888]" : "text-prose"}`}>{desc}</p>
                <ul className="flex flex-col gap-3 flex-1 mb-8">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[14px]">
                      <Check size={14} className={`mt-0.5 shrink-0 ${featured ? "text-emerald-400" : "text-link"}`} />
                      <span className={featured ? "text-[#d0d0d0]" : "text-prose"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`h-12 flex items-center justify-center rounded-full text-[15px] font-medium transition-colors ${
                    featured
                      ? "bg-white text-[#171717] hover:bg-[#f0f0f0]"
                      : "bg-invert text-on-invert hover:opacity-85"
                  }`}
                >
                  Get started
                </Link>
              </div>
            ))}
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
          <h2 className="display-lg text-on-invert mb-4">Questions about maintenance?</h2>
          <p className="text-[18px] text-[#888] mb-8">We&apos;re happy to recommend the right plan or create a custom option for your needs.</p>
          <Link href="/contact" className="h-12 px-8 inline-flex items-center rounded-full bg-white text-[#171717] text-[16px] font-medium hover:bg-[#f0f0f0] transition-colors">
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
}
