import type { Metadata } from "next";
import Link from "next/link";
import { Check, Target, Zap, BarChart3, MessageSquare, ShieldCheck, Globe } from "lucide-react";
import { SITE, siteUrl } from "@/lib/site-config";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "About PinexaDigital — Web Agency for US Businesses",
  description: `Learn about ${SITE.brandName} — a web design and development agency focused on helping US businesses grow online with professional, high-converting websites, SEO, and e-commerce solutions.`,
  alternates: { canonical: siteUrl("/about") },
};

const values = [
  {
    icon: Globe,
    title: "US-market focus.",
    desc: "Everything we build is tailored to what US audiences expect — familiar navigation patterns, fast load times on American infrastructure, clear pricing, and calls-to-action that match how US buyers make decisions. We don't apply generic templates and hope they work; we design specifically for the market you're competing in.",
  },
  {
    icon: MessageSquare,
    title: "Transparency first.",
    desc: "Fixed pricing, honest timelines, clear communication at every step. You'll know your total cost before we start, receive updates without having to chase them, and never encounter a surprise invoice. We've seen too many clients burned by agencies that bill by the hour with no ceiling — we won't do that to you.",
  },
  {
    icon: BarChart3,
    title: "Results over aesthetics.",
    desc: "A beautiful website that doesn't generate leads is expensive art. We design for both — sites that look credible and professional to US audiences, and that are built specifically to convert visitors into inquiries. Every design decision we make traces back to a conversion or ranking objective.",
  },
  {
    icon: ShieldCheck,
    title: "Long-term partnership.",
    desc: "We're not a one-and-done project shop. Our monthly maintenance plans keep us invested in your success after launch — when something breaks, we fix it. When you want to add a page or update your services, we're available. We measure our success by whether your business grows, not by how many projects we close.",
  },
];

const stats = [
  { num: "50+", label: "Projects delivered" },
  { num: "3 wk", label: "Avg. delivery time" },
  { num: "98%", label: "Client satisfaction" },
  { num: "US", label: "Primary market focus" },
];

const process = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Discovery call",
    desc: "We start every project with a 30-minute conversation. We want to understand your business, your target audience, what's working and what isn't about your current web presence, and what success looks like for you specifically. No proposal until we understand the problem.",
  },
  {
    icon: Target,
    step: "02",
    title: "Strategy and design",
    desc: "We research your competitors, map the user journey, and build a site architecture designed to convert your specific target customer. Full design mockups are delivered within 5 business days. We iterate on feedback until every detail is right — you approve the design before we write a line of code.",
  },
  {
    icon: Zap,
    step: "03",
    title: "Build, test, and launch",
    desc: "We develop your site on a staging environment, run cross-browser and mobile testing, optimize for Core Web Vitals performance, and set up analytics. Launch day includes submitting your sitemap to Google and completing all technical SEO setup. You receive full ownership of the codebase.",
  },
];

const whyUs = [
  "Fixed pricing — you know your total cost before we start",
  "2–3 week delivery for most projects",
  "Built with Next.js for PageSpeed scores of 90–99",
  "SEO setup included on every project",
  "30-day post-launch support at no extra charge",
  "You own the code — no platform lock-in",
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-card pt-20 pb-16 px-6 border-b border-line">
        <div className="max-w-350 mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Breadcrumb crumbs={[{ label: "About" }]} />
            <p className="eyebrow mb-3">About</p>
            <h1 className="display-xl text-title mb-6">We build the web for ambitious US businesses.</h1>
            <p className="text-[18px] leading-7 text-prose mb-4">
              {SITE.brandName} is a web design and development agency specialising in US markets. We help businesses — from solo founders to established companies — build the professional web presence they need to compete and grow online.
            </p>
            <p className="text-[16px] leading-7 text-prose mb-4">
              We built this agency because the web design market is full of a predictable pattern: overpriced projects, missed deadlines, agencies that disappear after launch, and websites that look nice but don't generate business. We decided to do the opposite — fixed prices, honest timelines, measurable outcomes, and genuine accountability for results.
            </p>
            <p className="text-[16px] leading-7 text-prose">
              Every site we build is engineered specifically for the US market: fast on American infrastructure, designed to meet US consumer expectations, and optimised for Google's US search results. We are not a general-purpose digital agency. We are focused on one thing: high-converting web presence for US businesses.
            </p>
          </div>
          <div className="bg-surface rounded-xl p-8 shadow-card grid grid-cols-2 gap-8">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="display-md text-title">{s.num}</p>
                <p className="text-[13px] text-faint mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who we serve ── */}
      <section className="bg-surface py-20 px-6">
        <div className="max-w-350 mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="display-lg text-title mb-5">Who we work with.</h2>
            <p className="text-[16px] leading-7 text-prose mb-5">
              Our clients are US business owners who take their web presence seriously. They've often had a website for years that isn't generating the leads it should. Or they're launching something new and want to do it right the first time. They value quality, are willing to invest in it, and want a partner who gives them straight answers — not an agency that tells them what they want to hear and then over-bills.
            </p>
            <p className="text-[16px] leading-7 text-prose mb-6">
              We work with service businesses (law firms, agencies, consultants, contractors), e-commerce brands, real estate and property businesses, health and wellness practices, and B2B companies across the US. If your business needs a web presence that competes at a national or local level, we're equipped to build it.
            </p>
            <ul className="space-y-3">
              {whyUs.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check size={15} className="text-link mt-0.5 shrink-0" />
                  <span className="text-[14px] leading-6 text-prose">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="display-lg text-title mb-5">Our approach.</h2>
            <div className="space-y-6">
              {process.map(({ icon: Icon, step, title, desc }) => (
                <div key={step} className="flex gap-4">
                  <div className="shrink-0 mt-0.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                      <Icon size={17} className="text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <p className="eyebrow mb-1">{step} · {title}</p>
                    <p className="text-[14px] leading-6 text-prose">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="bg-card py-20 px-6">
        <div className="max-w-350 mx-auto">
          <div className="text-center mb-12">
            <h2 className="display-lg text-title">What we stand for.</h2>
            <p className="text-prose text-[16px] mt-3 max-w-xl mx-auto">
              The principles that guide every project, every conversation, and every decision we make.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-surface rounded-xl p-6 shadow-card">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                  <Icon size={17} className="text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="display-sm text-title mb-2">{title}</h3>
                <p className="text-[14px] leading-6 text-prose">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-invert py-20 px-6 text-center">
        <div className="max-w-350 mx-auto">
          <h2 className="display-lg text-on-invert mb-4">Let&apos;s work together.</h2>
          <p className="text-[18px] text-[#888] mb-3 max-w-lg mx-auto">
            Tell us about your business and what you&apos;re trying to build. We respond to every inquiry within 24 hours with honest feedback on whether and how we can help.
          </p>
          <p className="text-[15px] text-[#666] mb-8">No sales pitch. No obligation. Just a straight conversation.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/contact" className="h-12 px-8 inline-flex items-center rounded-full bg-white text-[#171717] text-[16px] font-medium hover:bg-[#f0f0f0] transition-colors">
              Get a free quote
            </Link>
            <Link href="/portfolio" className="h-12 px-8 inline-flex items-center rounded-full border border-[#333] text-on-invert text-[16px] font-medium hover:border-[#666] transition-colors">
              See our work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
