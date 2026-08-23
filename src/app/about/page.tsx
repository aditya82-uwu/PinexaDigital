import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Check, Target, Zap, BarChart3, MessageSquare, ShieldCheck, Globe, Clock } from "lucide-react";
import { SITE, pageMetadata } from "@/lib/site-config";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Eyebrow from "@/components/ui/Eyebrow";
import MarqueeText from "@/components/ui/MarqueeText";
import DottedWaveBackground from "@/components/ui/DottedWaveBackground";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { faqPageJsonLd } from "@/lib/faq-schema";

export const metadata: Metadata = pageMetadata({
  title: "About Us – Web Agency for US Businesses",
  description: `Learn about ${SITE.brandName}, a web design and development agency focused on helping US businesses grow online with professional, high-converting websites, SEO, and e-commerce solutions.`,
  path: "/about",
});

const values = [
  {
    icon: Globe,
    title: "US-market focus.",
    desc: "Everything we build is tailored to what US audiences expect: familiar navigation patterns, fast load times on American infrastructure, clear pricing, and calls-to-action that match how US buyers make decisions. We don't apply generic templates and hope they work; we design specifically for the market you're competing in.",
  },
  {
    icon: MessageSquare,
    title: "Transparency first.",
    desc: "Fixed pricing, honest timelines, clear communication at every step. You'll know your total cost before we start, receive updates without having to chase them, and never encounter a surprise invoice. We've seen too many clients burned by agencies that bill by the hour with no ceiling, and we won't do that to you.",
  },
  {
    icon: BarChart3,
    title: "Results over aesthetics.",
    desc: "A beautiful website that doesn't generate leads is expensive art. We design for both: sites that look credible and professional to US audiences, and that are built specifically to convert visitors into inquiries. Every design decision we make traces back to a conversion or ranking objective.",
  },
  {
    icon: ShieldCheck,
    title: "Long-term partnership.",
    desc: "We're not a one-and-done project shop. Our monthly maintenance plans keep us invested in your success after launch: when something breaks, we fix it. When you want to add a page or update your services, we're available. We measure our success by whether your business grows, not by how many projects we close.",
  },
];

const stats = [
  { icon: Clock,         num: "2–3 wk", label: "Delivery time" },
  { icon: MessageSquare, num: "24 hr",  label: "Response time" },
  { icon: ShieldCheck,   num: "Fixed",  label: "Transparent pricing" },
  { icon: Globe,         num: "US",     label: "Primary market focus" },
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
    desc: "We research your competitors, map the user journey, and build a site architecture designed to convert your specific target customer. Full design mockups are delivered within 5 business days. We iterate on feedback until every detail is right, and you approve the design before we write a line of code.",
  },
  {
    icon: Zap,
    step: "03",
    title: "Build, test, and launch",
    desc: "We develop your site on a staging environment, run cross-browser and mobile testing, optimize for Core Web Vitals performance, and set up analytics. Launch day includes submitting your sitemap to Google and completing all technical SEO setup. You receive full ownership of the codebase.",
  },
];

const whyUs = [
  "Fixed pricing, so you know your total cost before we start",
  "2–3 week delivery for most projects",
  "Built with Next.js for PageSpeed scores of 90–99",
  "SEO setup included on every project",
  "30-day post-launch support at no extra charge",
  "You own the code, with no platform lock-in",
];

const faqs = [
  {
    q: "What makes PinexaDigital different from other agencies?",
    a: "Fixed pricing you know before we start, honest timelines, and direct communication throughout the project. We don't bill by the hour with no ceiling, and we stay involved after launch through our maintenance plans rather than disappearing once the invoice is paid.",
  },
  {
    q: "Do you only build for US businesses?",
    a: "The US market is our focus: every site we build is engineered for American infrastructure, search results, and consumer expectations. It's a specialisation we design every decision around, not a limitation we work around.",
  },
  {
    q: "How long does a typical project take?",
    a: "Most projects are delivered in 2–3 weeks from kickoff. A Starter build can move faster; larger Growth or custom projects take longer, and we'll give you a realistic timeline before any work begins, not after.",
  },
  {
    q: "What happens after my site launches?",
    a: "Every project includes 30 days of free post-launch support. After that, our monthly maintenance plans start at $97/month and cover updates, security monitoring, backups, and a set number of content edit hours, so nothing quietly breaks after we've moved on.",
  },
  {
    q: "Do I own the website once it's finished?",
    a: "Yes. You get full ownership of the codebase with no platform lock-in and no recurring licence fees to us. If you ever want to work with someone else, you can take everything with you.",
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd(faqs)) }}
      />

      {/* ── Hero ── */}
      <section className="bg-card pt-20 pb-16 px-6 border-b border-line">
        <div className="max-w-350 mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Breadcrumb crumbs={[{ label: "About" }]} />
            <Eyebrow className="mb-3">About</Eyebrow>
            <h1 className="display-xl text-title mb-6">
              We build the web for ambitious{" "}
              <Image
                src="/images/home/about-team.webp"
                alt=""
                width={64}
                height={64}
                className="inline-block w-11 h-11 md:w-14 md:h-14 rounded-full object-cover align-middle -mt-2 mx-1"
              />{" "}
              US businesses.
            </h1>
            <p className="text-[18px] leading-7 text-prose mb-4">
              {SITE.brandName} is a web design and development agency specialising in US markets. We help businesses, from solo founders to established companies, build the professional web presence they need to compete and grow online.
            </p>
            <p className="text-[16px] leading-7 text-prose mb-4">
              We built this agency because the web design market is full of a predictable pattern: overpriced projects, missed deadlines, agencies that disappear after launch, and websites that look nice but don't generate business. We decided to do the opposite: fixed prices, honest timelines, measurable outcomes, and genuine accountability for results.
            </p>
            <p className="text-[16px] leading-7 text-prose">
              Every site we build is engineered specifically for the US market: fast on American infrastructure, designed to meet US consumer expectations, and optimised for Google's US search results. We are not a general-purpose digital agency. We are focused on one thing: high-converting web presence for US businesses.
            </p>
          </div>
          <div className="bg-surface rounded-xl p-8 shadow-card grid grid-cols-2 gap-8">
            {stats.map(({ icon: Icon, num, label }) => (
              <div key={label}>
                <div className="w-10 h-10 rounded-lg bg-accent-solid/10 flex items-center justify-center mb-3">
                  <Icon size={18} className="text-accent-solid" />
                </div>
                <p className="display-md text-title">{num}</p>
                <p className="text-[13px] text-faint mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Marquee divider ── */}
      <section className="bg-card py-10 border-b border-line overflow-hidden">
        <MarqueeText
          items={["Web Design & Development", "CRM Automation & Integration", "E-commerce Solutions", "Website Maintenance"]}
        />
      </section>

      {/* ── Who we work with / Our approach (split panel) ── */}
      <section className="bg-surface py-20 px-6">
        <div className="max-w-350 mx-auto grid lg:grid-cols-2 gap-6 items-stretch">
          {/* Light panel */}
          <div className="bg-card rounded-3xl p-8 md:p-10 shadow-card flex flex-col">
            <Eyebrow className="mb-4">Who we work with</Eyebrow>
            <h2 className="display-md text-title mb-4">Business owners who take their web presence seriously.</h2>
            <p className="text-[15px] leading-7 text-prose mb-5">
              Our clients have often had a website for years that isn&apos;t generating the leads it should. Or they&apos;re launching something new and want to do it right the first time. They value quality, are willing to invest in it, and want a partner who gives them straight answers, not an agency that tells them what they want to hear and then over-bills.
            </p>
            <p className="text-[15px] leading-7 text-prose mb-6">
              We work with service businesses (law firms, agencies, consultants, contractors), e-commerce brands, real estate and property businesses, health and wellness practices, and B2B companies across the US.
            </p>
            <ul className="space-y-3 mb-8">
              {whyUs.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check size={15} className="text-link mt-0.5 shrink-0" />
                  <span className="text-[14px] leading-6 text-prose">{item}</span>
                </li>
              ))}
            </ul>
            <div className="relative rounded-2xl overflow-hidden mt-auto">
              <Image
                src="/images/home/about-sprint.webp"
                alt="PinexaDigital planning a client project"
                width={700}
                height={420}
                className="w-full object-cover"
              />
            </div>
          </div>

          {/* Dark panel */}
          <div className="relative bg-contrast rounded-3xl p-8 md:p-10 overflow-hidden flex flex-col">
            <DottedWaveBackground />
            <div className="relative flex flex-col flex-1">
              <Eyebrow tone="on-contrast" className="mb-4">Our approach</Eyebrow>
              <h2 className="display-md text-on-contrast mb-4">Discovery, design, build. In that order.</h2>
              <div className="space-y-5 mb-6">
                {process.map(({ icon: Icon, step, title, desc }) => (
                  <div key={step} className="flex gap-4">
                    <div className="shrink-0 mt-0.5">
                      <div className="w-10 h-10 rounded-xl bg-accent-solid/15 flex items-center justify-center">
                        <Icon size={17} className="text-accent-solid" />
                      </div>
                    </div>
                    <div>
                      <p className="text-on-contrast text-[13px] font-semibold mb-1">{step} · {title}</p>
                      <p className="text-[14px] leading-6 text-on-contrast-faint">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="relative rounded-2xl overflow-hidden mt-auto">
                <Image
                  src="/images/about/our-approach.webp"
                  alt="PinexaDigital mapping out a project plan"
                  width={700}
                  height={420}
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 bg-card rounded-xl shadow-card-lg px-4 py-3 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-accent-solid/10 flex items-center justify-center shrink-0">
                    <Clock size={16} className="text-accent-solid" />
                  </div>
                  <div>
                    <p className="text-title text-[15px] font-bold leading-none">2–3 wk</p>
                    <p className="text-faint text-[11px] mt-0.5">Typical delivery</p>
                  </div>
                </div>
              </div>
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
                <div className="w-9 h-9 rounded-lg bg-link/10 flex items-center justify-center mb-4">
                  <Icon size={17} className="text-link" />
                </div>
                <h3 className="display-sm text-title mb-2">{title}</h3>
                <p className="text-[14px] leading-6 text-prose">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-surface py-20 px-6">
        <div className="max-w-195 mx-auto">
          <Eyebrow className="mb-3">FAQ</Eyebrow>
          <h2 className="display-lg text-title mb-8">Got any questions?</h2>
          <FAQAccordion items={faqs} />
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
