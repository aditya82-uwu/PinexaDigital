import type { Metadata } from "next";
import Link from "next/link";
import { Code2, Workflow, ShoppingBag, ShieldCheck, ArrowRight, Check } from "lucide-react";
import { SITE, siteUrl } from "@/lib/site-config";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Web Design, SEO & E-commerce Services for US Businesses",
  description: `Explore ${SITE.brandName}'s full range of services — custom web design, SEO, e-commerce development, and monthly maintenance. Fixed pricing, fast delivery, built for US businesses.`,
  alternates: { canonical: siteUrl("/services") },
};

const services = [
  {
    icon: Code2,
    title: "Web Design & Development",
    shortDesc: "Custom websites built from scratch — pixel-perfect design, fast load times, and conversion-focused layouts.",
    fullDesc:
      "A well-designed website is your highest-leverage sales tool. We don't use templates — every site starts from a brief, informed by your business goals and your target customer. We handle everything from strategy and design through to development, performance optimisation, and launch. Sites are built with Next.js for PageSpeed scores of 90–99, structured data for Google, and mobile-first layouts that meet US user expectations. Most Starter projects (up to 5 pages) are delivered in 2 weeks. Growth projects (up to 12 pages with blog setup) in 3 weeks.",
    href: "/services/web-design",
    tags: ["Next.js", "React", "WordPress", "Webflow"],
    gradient: "from-blue-500 to-cyan-500",
    includes: [
      "Custom design tailored to your brand and market",
      "Mobile-first, fully responsive layout",
      "Core Web Vitals optimisation (LCP, INP, CLS)",
      "On-page SEO and structured data setup",
      "Google Analytics 4 integration",
      "30-day post-launch support",
    ],
  },
  {
    icon: Workflow,
    title: "CRM Automation & Integration",
    shortDesc: "Automate your sales and support workflows so leads get followed up and data stays in sync.",
    fullDesc:
      "Most businesses lose leads and time to disconnected tools and manual data entry — a form submission that sits unread, a spreadsheet that's always a day out of date, a follow-up that never happens because someone forgot. We set up your CRM and build the automation layer around it using n8n, Zapier, and Make: lead routing, follow-up sequences, and integrations with the tools you already use. Simple, single-workflow automations start at $200–$300. For custom, multi-system integrations, we scope it with you first and follow up with a fixed quote — no hourly billing, no surprises.",
    href: "/services/crm-automation",
    tags: ["n8n", "Zapier", "Make", "CRM Setup"],
    gradient: "from-violet-500 to-purple-500",
    includes: [
      "CRM setup and pipeline configuration",
      "Lead routing and data sync automation",
      "Email and SMS follow-up sequences",
      "Third-party tool integrations",
      "Workflow monitoring and error alerts",
      "Custom automation quoted after a discovery call",
    ],
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Development",
    shortDesc: "Online stores built to convert, optimised for US customers and payment methods.",
    fullDesc:
      "E-commerce for US customers has specific requirements: familiar payment methods (Stripe, PayPal, Apple Pay, Shop Pay), fast checkout with minimal friction, mobile-first product browsing, and trust signals that reduce cart abandonment. We build on Shopify, WooCommerce, or custom Next.js + Stripe depending on your requirements and budget. Shopify is best for fast launches and product-first businesses. WooCommerce suits businesses already on WordPress who want full ownership. Custom builds are the right choice for businesses with unique checkout flows, subscription models, or high-volume sales where platform fees erode margins.",
    href: "/services/ecommerce",
    tags: ["Shopify", "WooCommerce", "Custom", "Payments"],
    gradient: "from-orange-500 to-amber-500",
    includes: [
      "Platform selection consultation",
      "US payment gateway integration",
      "Mobile-optimised checkout flow",
      "Product filtering and search",
      "SEO-optimised product pages",
      "Abandoned cart recovery setup",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Website Maintenance",
    shortDesc: "Monthly plans to keep your site fast, secure, and always up to date.",
    fullDesc:
      "A website launched and left unattended degrades — plugins go outdated, security vulnerabilities emerge, performance drifts as the web evolves. Our maintenance plans keep your site in the condition it was on launch day, and better. The Basic plan covers all updates, daily backups, uptime monitoring, and security scanning. The Pro plan adds 2 hours of content edits per month and a monthly performance review. The Agency plan adds a dedicated communication channel, 5 hours of edits, and a monthly strategy call. Every plan includes a direct line to the team that built your site — not a generic support ticket queue.",
    href: "/services/maintenance",
    tags: ["Updates", "Backups", "Monitoring", "Support"],
    gradient: "from-emerald-500 to-teal-500",
    includes: [
      "CMS, plugin, and theme updates",
      "Daily automated backups",
      "24/7 uptime monitoring",
      "Security scanning and patching",
      "Monthly performance review",
      "Priority response for urgent issues",
    ],
  },
];

const faqs = [
  {
    q: "Do you work with businesses outside the US?",
    a: "We work with businesses globally, but our expertise, design patterns, and SEO strategies are specifically built for the US market. If your target customers are in the US, we're the right fit.",
  },
  {
    q: "Can I hire you for just one service, or do I need to use all of them?",
    a: "Absolutely — each service is available individually. Many clients start with a website and add SEO or maintenance later. We'll tell you honestly which combination makes the most sense for your situation.",
  },
  {
    q: "What do you need from me to get started?",
    a: "A discovery call, your existing brand assets (logo, colours, any existing copy), and a list of your main competitors. We handle everything else from there.",
  },
  {
    q: "How is your pricing structured?",
    a: "Web design and e-commerce projects are fixed-price, one-time fees — Starter from $299, Growth from $499. Maintenance is a monthly retainer, and CRM automation starts at $200–$300 for simple workflows, with custom integrations quoted individually. All pricing is transparent with no hidden fees.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-card pt-20 pb-16 px-6 text-center border-b border-line">
        <div className="max-w-350 mx-auto">
          <Breadcrumb crumbs={[{ label: "Services" }]} />
          <p className="eyebrow mb-3">Services</p>
          <h1 className="display-xl text-title mb-4">Everything you need to grow online.</h1>
          <p className="text-[18px] leading-7 text-prose max-w-xl mx-auto mb-4">
            From first impression to ongoing growth — we cover every part of your web presence, built specifically for the US market.
          </p>
          <p className="text-[16px] leading-7 text-prose max-w-2xl mx-auto">
            Most US businesses we work with have one of two problems: their website doesn't exist yet, or it exists but isn't generating business. We solve both — with transparent pricing, fast delivery, and work that's built to perform on Google and convert visitors into customers.
          </p>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="bg-surface py-20 px-6">
        <div className="max-w-350 mx-auto space-y-6">
          {services.map(({ icon: Icon, title, shortDesc, fullDesc, href, tags, gradient, includes }) => (
            <div key={href} className="bg-card rounded-xl shadow-card overflow-hidden">
              <div className="grid md:grid-cols-[1fr_280px]">
                {/* Left: content */}
                <div className="p-8">
                  <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${gradient} flex items-center justify-center mb-5`}>
                    <Icon size={22} className="text-white" strokeWidth={1.8} />
                  </div>
                  <h2 className="display-md text-title mb-2">{title}</h2>
                  <p className="text-[15px] font-medium text-prose mb-4">{shortDesc}</p>
                  <p className="text-[14px] leading-7 text-prose mb-5">{fullDesc}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {tags.map((tag) => (
                      <span key={tag} className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-surface border border-line text-faint">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href={href} className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-link hover:gap-2.5 transition-all">
                    Full details & pricing <ArrowRight size={13} />
                  </Link>
                </div>
                {/* Right: includes */}
                <div className="bg-surface p-8 border-t md:border-t-0 md:border-l border-line">
                  <p className="eyebrow mb-4">Includes</p>
                  <ul className="space-y-3">
                    {includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Check size={13} className="text-link mt-0.5 shrink-0" />
                        <span className="text-[13px] leading-5 text-prose">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Why PinexaDigital ── */}
      <section className="bg-card py-20 px-6">
        <div className="max-w-350 mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="display-lg text-title mb-5">Why businesses choose us.</h2>
            <p className="text-[16px] leading-7 text-prose mb-5">
              There are a lot of web agencies. Here is the honest version of what makes us different — and what doesn&apos;t.
            </p>
            <p className="text-[16px] leading-7 text-prose mb-5">
              We don&apos;t have a large team of account managers and project coordinators that add billing hours without adding value. The people you talk to are the people who build your site. That means fewer misunderstandings, faster iteration, and someone who can explain every technical decision in plain language.
            </p>
            <p className="text-[16px] leading-7 text-prose">
              We specialise in the US market. Not because we can&apos;t work with other markets — but because being deeply focused makes us better at this specific thing. Our design patterns, our SEO strategies, and our conversion frameworks are all built around what works for US audiences and US search behaviour.
            </p>
          </div>
          <div>
            <h2 className="display-lg text-title mb-5">Common questions.</h2>
            <div className="space-y-5">
              {faqs.map(({ q, a }) => (
                <div key={q} className="bg-surface rounded-xl p-5 shadow-card">
                  <p className="text-[15px] font-semibold text-title mb-2">{q}</p>
                  <p className="text-[14px] leading-6 text-prose">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-invert py-20 px-6 text-center">
        <div className="max-w-350 mx-auto">
          <h2 className="display-lg text-on-invert mb-4">Ready to get started?</h2>
          <p className="text-[18px] text-[#888] mb-8">Tell us about your project and we&apos;ll respond within 24 hours.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/contact" className="h-12 px-8 inline-flex items-center rounded-full bg-white text-[#171717] text-[16px] font-medium hover:bg-[#f0f0f0] transition-colors">
              Get a free quote
            </Link>
            <Link href="/pricing" className="h-12 px-8 inline-flex items-center rounded-full border border-[#333] text-on-invert text-[16px] font-medium hover:border-[#666] transition-colors">
              See pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
