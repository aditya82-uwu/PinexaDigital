import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { SITE, siteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "CRM Automation & Integration Services | PinexaDigital",
  description: `Automate your sales and support workflows with ${SITE.brandName}. CRM setup, n8n and Zapier automation, and tool integrations for US businesses. Starting at $200.`,
  alternates: { canonical: siteUrl("/services/crm-automation") },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "CRM Automation & Integration",
  description: "CRM setup, workflow automation, and third-party tool integration using n8n, Zapier, and Make for US businesses.",
  url: siteUrl("/services/crm-automation"),
  provider: {
    "@type": "ProfessionalService",
    name: SITE.brandName,
    url: siteUrl(),
  },
  areaServed: { "@type": "Country", name: "United States" },
};

const deliverables = [
  {
    title: "CRM setup & configuration.",
    desc: "We set up and configure your CRM — pipelines, custom fields, deal stages, and permissions — so it actually matches how your team sells, instead of forcing your process to fit a generic template.",
  },
  {
    title: "Workflow automation.",
    desc: "Using n8n, Zapier, or Make, we build automations that move data between your tools without manual entry — new leads routed instantly, follow-ups triggered on schedule, deals updated automatically as status changes.",
  },
  {
    title: "Lead routing & data sync.",
    desc: "Leads from your website, ads, and forms land directly in your CRM, assigned to the right person, with duplicate detection and enrichment handled automatically.",
  },
  {
    title: "Email & SMS sequences.",
    desc: "Automated follow-up sequences triggered by customer behaviour — new inquiry, abandoned quote, missed call — so leads don't go cold while your team is busy.",
  },
  {
    title: "Third-party integrations.",
    desc: "We connect your CRM to the tools you already use — Stripe, Google Sheets, Slack, WhatsApp, calendars, invoicing software — so information flows in one direction without double entry.",
  },
  {
    title: "Monitoring & support.",
    desc: "Automations fail silently if nobody's watching. We set up error alerts and check in on your workflows so a broken integration doesn't quietly cost you leads.",
  },
];

const whoFor = [
  "Businesses juggling disconnected tools and manual data entry",
  "Teams that want new leads followed up automatically, not eventually",
  "Businesses migrating from spreadsheets to a real CRM",
  "Companies switching CRMs and needing a clean, automated setup",
  "Anyone tired of copy-pasting data between apps",
];

const faqs = [
  {
    q: "Which CRMs and tools do you work with?",
    a: "We work with the tools most US small and mid-sized businesses already use — HubSpot, Pipedrive, GoHighLevel, Salesforce, Zoho, and Airtable — and build the automation layer on top with n8n, Zapier, or Make, depending on complexity and budget.",
  },
  {
    q: "How does pricing work?",
    a: "Simple, single-workflow automations — like routing form leads into your CRM or triggering a follow-up sequence — typically start at $200–$300. Anything involving multiple systems, custom logic, or a full CRM setup is scoped individually. Tell us what you're trying to automate and we'll get back to you with a fair, fixed quote before any work starts.",
  },
  {
    q: "Do I need to already have a CRM?",
    a: "No. If you don't have one yet, we'll help you pick the right fit for your budget and workflow, then set it up and automate it from day one.",
  },
  {
    q: "How long does an automation project take?",
    a: "Simple automations are usually live within a few days. Full CRM setups with multiple integrations typically take 1–3 weeks depending on scope, which we'll confirm upfront once we understand what you need.",
  },
  {
    q: "What do you need from me to get started?",
    a: "Access to the tools you want connected (or a plan to get them), a description of your current process, and what you want to happen automatically instead. We'll handle the rest.",
  },
];

export default function CRMAutomationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="bg-card pt-20 pb-16 px-6 border-b border-line">
        <div className="max-w-350 mx-auto">
          <Breadcrumb crumbs={[{ label: "Services", href: "/services" }, { label: "CRM Automation & Integration" }]} />
          <p className="eyebrow mb-3">CRM Automation & Integration</p>
          <h1 className="display-xl text-title mb-4 max-w-2xl">Stop losing leads to manual busywork.</h1>
          <p className="text-[18px] leading-7 text-prose max-w-xl mb-5">
            We set up your CRM and automate the workflows around it — using n8n, Zapier, and Make — so leads get followed up, data stays in sync, and your team spends less time on data entry.
          </p>
          <p className="text-[16px] leading-7 text-prose max-w-2xl mb-8">
            Simple automations start at $200–$300. For custom, multi-system integrations, tell us what you&apos;re trying to connect and we&apos;ll follow up with a fixed quote before any work begins — no hourly billing, no surprises.
          </p>
          <Link href="/contact" className="h-12 px-7 inline-flex items-center rounded-full bg-[#171717] text-white dark:bg-white dark:text-[#171717] text-[15px] font-medium hover:opacity-85 transition-opacity">
            Get a free quote
          </Link>
        </div>
      </section>

      {/* ── Deliverables ── */}
      <section className="bg-surface py-20 px-6">
        <div className="max-w-350 mx-auto">
          <h2 className="display-lg text-title mb-4 text-center">What we deliver.</h2>
          <p className="text-[16px] leading-7 text-prose max-w-xl mx-auto text-center mb-12">
            From a single automation to a fully connected CRM — we scope it to what you actually need.
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
              Our automation service is built for US businesses that are ready to stop managing leads and data by hand.
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
                We start with a short call to understand your current tools and where things break down — a missed lead, a manual export, a step someone forgets to do.
              </p>
              <p>
                For simple, well-defined automations, we quote a fixed price upfront (typically $200–$300) and get it live within days. For anything involving multiple systems or custom logic, we scope it with you first and follow up with a fixed quote before starting.
              </p>
              <p>
                You own everything we build. If you ever move on, the CRM setup and automations stay with you.
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
          <h2 className="display-lg text-on-invert mb-4">Ready to automate your workflow?</h2>
          <p className="text-[18px] text-[#888] mb-8">Tell us what you&apos;re trying to connect or automate — we&apos;ll follow up with a fixed quote.</p>
          <Link href="/contact" className="h-12 px-8 inline-flex items-center rounded-full bg-white text-[#171717] text-[16px] font-medium hover:bg-[#f0f0f0] transition-colors">
            Get a free quote
          </Link>
        </div>
      </section>
    </>
  );
}
