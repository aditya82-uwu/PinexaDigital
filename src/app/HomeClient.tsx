"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Code2, Workflow, ShoppingBag, ShieldCheck, ArrowRight, ArrowUpRight,
  Clock, BarChart3, Zap, Globe, MessageSquare, Layers, ChevronDown, Check,
} from "lucide-react";
import Eyebrow from "@/components/ui/Eyebrow";
import CircleArrowLink from "@/components/ui/CircleArrowLink";
import StatCard from "@/components/ui/StatCard";
import MarqueeText from "@/components/ui/MarqueeText";
import DottedWaveBackground from "@/components/ui/DottedWaveBackground";
import Tabs from "@/components/ui/Tabs";
import PostCard from "@/components/ui/PostCard";
import { getAllPosts } from "@/lib/blog-data";
import { SITE } from "@/lib/site-config";

/* ─── Animation helper ─── */
const stagger = (delay = 0) => ({
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
});

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

/* ─── Data (all real, kept in sync with services/pricing/portfolio pages) ─── */
const services = [
  {
    icon: Code2,
    title: "Web Design & Development",
    desc: "Custom, high-converting websites built for speed, SEO, and your US audience.",
    href: "/services/web-design",
    pastel: "bg-amber-100 dark:bg-amber-950/25",
  },
  {
    icon: Workflow,
    title: "CRM Automation & Integration",
    desc: "Automate your sales workflows with n8n, Zapier, and Make so no lead falls through.",
    href: "/services/crm-automation",
    pastel: "bg-sky-100 dark:bg-sky-950/25",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Solutions",
    desc: "Shopify, WooCommerce, and custom stores optimised for US shoppers.",
    href: "/services/ecommerce",
    pastel: "bg-emerald-100 dark:bg-emerald-950/25",
  },
  {
    icon: ShieldCheck,
    title: "Website Maintenance",
    desc: "Monthly plans to keep your site fast, secure, and always up to date.",
    href: "/services/maintenance",
    pastel: "bg-rose-100 dark:bg-rose-950/25",
  },
];

const stats = [
  { num: 2,  suffix: " Week",  label: "Average Delivery", Icon: Clock },
  { num: 24, suffix: " Hr",    label: "Response Time",    Icon: MessageSquare },
  { num: 0,  suffix: "",       label: "Hidden Fees",       Icon: ShieldCheck },
];

const whyUs = [
  { icon: Zap,           title: "Lightning Fast Delivery", desc: "From kickoff to live site in 3 weeks, without cutting corners." },
  { icon: Globe,         title: "US Market Expertise",     desc: "We know what American customers expect and design specifically for that." },
  { icon: BarChart3,     title: "Results-Focused",         desc: "Every decision traces back to traffic, leads, and revenue, not just looks." },
  { icon: MessageSquare, title: "Clear Communication",     desc: "No agency jargon. You're always in the loop with clear, honest updates." },
];

const steps = [
  {
    n: "01",
    title: "Discovery call",
    desc: "We learn your goals, audience, and vision and recommend the right approach before we touch a pixel.",
    icon: MessageSquare,
    pastel: "bg-sky-100 dark:bg-sky-950/25",
    photo: "/images/home/process-discovery.webp",
    stats: [
      { num: "30 Min", label: "Discovery call" },
      { num: "24 Hr",  label: "Response time" },
    ],
  },
  {
    n: "02",
    title: "Design sprint",
    desc: "Full mockups delivered within 5 business days. Iterate until every detail is right.",
    icon: Layers,
    pastel: "bg-rose-100 dark:bg-rose-950/25",
    photo: "/images/home/process-design.webp",
    stats: [
      { num: "5 Days", label: "Mockup delivery" },
      { num: "3",      label: "Rounds of revision" },
    ],
  },
  {
    n: "03",
    title: "Build & launch",
    desc: "We develop, test, optimise, and go live, then submit your sitemap to Google on day one.",
    icon: Zap,
    pastel: "bg-emerald-100 dark:bg-emerald-950/25",
    photo: "/images/home/process-launch.webp",
    stats: [
      { num: "2 Week", label: "Average delivery" },
      { num: "90+",    label: "PageSpeed score" },
    ],
  },
];

const pricingTiers = [
  { name: "Starter",    price: "$299",  period: "one-time", desc: "For small businesses launching their first professional website.", featured: false },
  { name: "Growth",     price: "$499",  period: "one-time", desc: "For businesses serious about generating leads and growing online.", featured: true },
  { name: "Enterprise", price: "Custom", period: "project",  desc: "For large projects, e-commerce, and ongoing partnerships.",         featured: false },
];

const workSamples = [
  { title: "Gym & Fitness",  category: "Health & Fitness", url: `https://gym.${SITE.baseDomain}`,       accent: "from-orange-500 to-amber-400" },
  { title: "Law Firm",       category: "Legal Services",   url: `https://lawyer.${SITE.baseDomain}`,     accent: "from-yellow-600 to-amber-500" },
  { title: "Real Estate",    category: "Property",         url: `https://realestate.${SITE.baseDomain}`, accent: "from-emerald-500 to-teal-400" },
];

const trustPoints = [
  "Fixed pricing, so you know your total cost before we start",
  "2–3 week delivery for most projects",
  "30-day post-launch support at no extra charge",
];

/* ─── Page ─── */
export default function HomeClient() {
  const router = useRouter();
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* ──── Hero: full-bleed photo ──── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <Image
          src="/images/home/hero-desk.webp"
          alt="PinexaDigital team collaborating"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/60 to-black/30" />
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{ clipPath: "polygon(55% 0, 100% 0, 100% 100%, 75% 100%)", background: "linear-gradient(135deg, rgba(59,130,246,0.35), transparent)" }}
        />

        <div className="relative max-w-350 mx-auto px-6 py-32 w-full">
          <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.1 } } }} className="max-w-2xl">
            <motion.div variants={stagger(0)}>
              <Eyebrow tone="on-contrast" className="mb-6">Now taking US clients</Eyebrow>
            </motion.div>

            <motion.h1 variants={stagger(0.05)} className="display-hero text-white mb-6">
              We build websites that bring people in.
            </motion.h1>

            <motion.p variants={stagger(0.1)} className="text-[19px] leading-8 text-white/70 mb-10 max-w-lg">
              High-converting web design and development for businesses ready to grow online. Fast delivery, transparent pricing, real results.
            </motion.p>

            <motion.div variants={stagger(0.15)} className="relative max-w-md mb-6">
              <select
                aria-label="How can we help?"
                defaultValue=""
                onChange={(e) => { if (e.target.value) router.push(e.target.value); }}
                className="w-full h-14 pl-6 pr-12 rounded-full bg-accent-solid text-white text-[15px] font-semibold appearance-none cursor-pointer hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-white"
              >
                <option value="" disabled>How can we help?</option>
                {services.map((s) => (
                  <option key={s.href} value={s.href} className="text-title bg-card">{s.title}</option>
                ))}
              </select>
              <ChevronDown size={20} className="absolute right-5 top-1/2 -translate-y-1/2 text-white pointer-events-none" />
            </motion.div>

            <motion.div variants={stagger(0.2)} className="flex flex-wrap gap-3">
              <Link href="/contact" className="h-13 px-7 flex items-center gap-2 rounded-full bg-white text-[#171717] text-[15px] font-semibold hover:opacity-90 transition-opacity">
                Start your project <ArrowRight size={16} />
              </Link>
              <Link href="/portfolio" className="h-13 px-7 flex items-center rounded-full border border-white/30 text-white text-[15px] font-medium hover:bg-white/10 transition-colors">
                See our work
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ──── About / why PinexaDigital ──── */}
      <section className="bg-card py-24 px-6 relative overflow-hidden">
        <div className="max-w-350 mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={reveal}
            className="relative pb-12 lg:pb-4"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-card-lg">
              <Image
                src="/images/home/about-team.webp"
                alt="PinexaDigital team at work"
                width={700}
                height={500}
                className="w-full object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 h-2/5 bg-linear-to-t from-black/55 to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3">
                <div className="w-9 h-9 rounded-full bg-accent-solid flex items-center justify-center shrink-0">
                  <ShieldCheck size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-white text-[15px] font-bold leading-none">Fixed Price</p>
                  <p className="text-white/70 text-[11px] mt-0.5">No hidden fees</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1.5">
                <Globe size={12} className="text-white" />
                <span className="text-white text-[11px] font-semibold">US-focused</span>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-3 sm:-right-6 w-44 h-32 rounded-2xl overflow-hidden shadow-card-lg border-4 border-card hidden sm:block"
            >
              <Image
                src="/images/home/about-sprint.webp"
                alt="Design process"
                width={300}
                height={220}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-2 left-2 bg-white/90 dark:bg-[#171717]/90 backdrop-blur-sm rounded-lg px-2 py-0.5">
                <p className="text-[10px] font-bold text-title">Design Sprint</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={reveal}>
            <Eyebrow className="mb-5">Why PinexaDigital</Eyebrow>
            <h2 className="display-lg text-title mb-4">We&apos;re not just another web agency.</h2>
            <p className="text-prose text-[16px] leading-7 mb-8">
              We&apos;re a focused team obsessed with one thing: measurable results for US businesses. No bloat, no fluff. Just clean, fast, conversion-optimized digital products.
            </p>
            <div className="grid sm:grid-cols-2 gap-5 mb-8">
              {whyUs.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-accent-solid/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={16} className="text-accent-solid" />
                  </div>
                  <div>
                    <h4 className="text-[14px] font-semibold text-title mb-0.5">{title}</h4>
                    <p className="text-[13px] text-prose leading-5">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <CircleArrowLink href="/about" label="More about us" />
          </motion.div>
        </div>
      </section>

      {/* ──── Marquee ──── */}
      <section className="bg-surface py-10 border-y border-line overflow-hidden">
        <MarqueeText items={services.map((s) => s.title)} speed={30} />
      </section>

      {/* ──── Numbered service cards ──── */}
      <section className="bg-surface py-24 px-6 overflow-hidden">
        <div className="max-w-350 mx-auto">
          <div className="text-center mb-14">
            <div className="flex justify-center"><Eyebrow className="mb-4">What we build</Eyebrow></div>
            <h2 className="display-lg text-title mb-3">Everything your business needs online.</h2>
            <p className="text-prose max-w-xl mx-auto">From first impression to final conversion, we handle every digital touchpoint.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {services.map(({ icon: Icon, title, desc, href, pastel }, i) => (
              <motion.div
                key={href}
                initial={{ opacity: 0, rotate: i % 2 === 0 ? -7 : 7, y: 50 }}
                whileInView={{ opacity: 1, rotate: 0, y: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: "bottom center" }}
                className={`flex flex-col justify-between h-full min-h-90 rounded-[28px] p-10 ${pastel} transition-transform hover:-translate-y-1`}
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="w-16 h-16 rounded-full bg-card shadow-card flex items-center justify-center">
                    <Icon size={26} className="text-accent-solid" strokeWidth={1.6} />
                  </div>
                  <span className="font-display font-bold text-[15px] text-accent-solid">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div>
                  <h3 className="display-sm text-title mb-3">{title}</h3>
                  <p className="text-[14px] leading-6 text-prose mb-8 max-w-70">{desc}</p>
                  <div className="border-t border-black/10 dark:border-white/10 pt-5">
                    <CircleArrowLink href={href} label="Learn more" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── Capabilities (dark) ──── */}
      <section className="bg-contrast py-24 px-6 relative overflow-hidden">
        <DottedWaveBackground />
        <div className="relative max-w-350 mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={reveal} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card-lg">
              <Image
                src="/images/home/capabilities-highfive.webp"
                alt="PinexaDigital process and delivery"
                width={700}
                height={550}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-card rounded-xl shadow-card-lg px-5 py-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent-solid/10 flex items-center justify-center shrink-0">
                <Clock size={18} className="text-accent-solid" />
              </div>
              <div>
                <p className="text-title text-[16px] font-bold leading-none">24 Hr</p>
                <p className="text-faint text-[11px] mt-0.5">Response Time</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={reveal}>
            <Eyebrow tone="on-contrast" className="mb-5">How we work</Eyebrow>
            <h2 className="display-lg text-on-contrast mb-4">Capabilities built around your goals.</h2>
            <p className="text-on-contrast-faint text-[16px] leading-7 mb-8">
              Every engagement is scoped around measurable outcomes: traffic, leads, and revenue, backed by transparent process at every step.
            </p>
            <Tabs
              tone="on-contrast"
              tabs={whyUs.map(({ icon: Icon, title, desc }) => ({
                label: title,
                content: (
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent-solid/15 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={18} className="text-accent-solid" />
                    </div>
                    <p className="text-[15px] text-on-contrast-faint leading-7">{desc}</p>
                  </div>
                ),
              }))}
            />
          </motion.div>
        </div>
      </section>

      {/* ──── Stats band (light) ──── */}
      <section className="bg-card py-20 px-6 border-b border-line">
        <div className="max-w-350 mx-auto grid grid-cols-3 gap-8">
          {stats.map(({ num, suffix, label, Icon }, i) => (
            <StatCard key={label} Icon={Icon} to={num} suffix={suffix} label={label} tone="default" delay={i * 0.1} />
          ))}
        </div>
      </section>

      {/* ──── Work samples teaser ──── */}
      <section className="bg-surface py-24 px-6">
        <div className="max-w-350 mx-auto">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <Eyebrow className="mb-3">Our work</Eyebrow>
              <h2 className="display-lg text-title">See exactly what we build.</h2>
            </div>
            <CircleArrowLink href="/portfolio" label="View all work" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {workSamples.map(({ title, category, url, accent }, i) => (
              <motion.a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-lg transition-all block"
              >
                <div className={`h-48 bg-linear-to-br ${accent} relative flex items-end p-5`}>
                  <span className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-transform group-hover:rotate-45">
                    <ArrowUpRight size={16} className="text-white" />
                  </span>
                  <span className="text-white/90 text-[11px] font-semibold uppercase tracking-wide">{category}</span>
                </div>
                <div className="p-5">
                  <h3 className="display-sm text-title">{title}</h3>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ──── Process (sticky stacking cards) ──── */}
      <section className="bg-card">
        <div className="text-center pt-24 pb-10 px-6">
          <div className="flex justify-center"><Eyebrow className="mb-4">How it works</Eyebrow></div>
          <h2 className="display-lg text-title">From idea to live site in weeks.</h2>
        </div>

        {steps.map(({ n, title, desc, pastel, photo, stats }, i) => {
          const isLast = i === steps.length - 1;
          return (
            <div
              key={n}
              className={`relative mb-6 md:mb-0 ${isLast ? "md:h-[calc(min(60vh,460px)+15vh)]" : "md:h-[calc(min(60vh,460px)+90vh)]"}`}
            >
              <div
                className="md:sticky md:top-20 h-auto md:h-[min(60vh,460px)] flex items-center px-6"
                style={{ zIndex: i + 1 }}
              >
                <div className={`relative w-full max-w-350 mx-auto md:h-full rounded-4xl ${pastel} shadow-2xl overflow-hidden grid md:grid-cols-2`}>
                  <div className="p-8 sm:p-10 md:p-16 flex flex-col justify-center">
                    <span className="inline-flex w-fit items-center px-4 py-1.5 rounded-full border border-black/15 dark:border-white/20 text-[12px] font-semibold text-title mb-6">
                      Step {n}
                    </span>
                    <h3 className="display-lg text-title mb-4">{title}</h3>
                    <p className="text-[16px] leading-7 text-prose mb-8 md:mb-10 max-w-md">{desc}</p>
                    <div className="flex items-end gap-10">
                      {stats.map((s) => (
                        <div key={s.label}>
                          <p className="text-[13px] text-faint mb-1">{s.label}</p>
                          <p className="font-display font-bold text-[34px] leading-none text-title">{s.num}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative h-56 md:h-full min-h-70">
                    <Image src={photo} alt={title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                    <div className="absolute inset-0 bg-linear-to-t from-black/15 to-transparent md:bg-linear-to-l md:from-black/10" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* ──── Pricing teaser ──── */}
      <section className="bg-surface py-24 px-6">
        <div className="max-w-350 mx-auto">
          <div className="text-center mb-14">
            <div className="flex justify-center"><Eyebrow className="mb-4">Pricing</Eyebrow></div>
            <h2 className="display-lg text-title mb-3">Simple, transparent pricing.</h2>
            <p className="text-prose max-w-xl mx-auto">Fixed-price packages. No hourly billing. No surprises.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {pricingTiers.map(({ name, price, period, desc, featured }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`rounded-xl p-8 flex flex-col ${featured ? "bg-invert text-on-invert" : "bg-card shadow-card"}`}
              >
                <p className="eyebrow mb-3">{name}</p>
                <div className="flex items-end gap-2 mb-3">
                  <span className="display-md">{price}</span>
                  <span className="text-[13px] text-faint mb-1">{period}</span>
                </div>
                <p className={`text-[13px] leading-6 mb-6 flex-1 ${featured ? "text-[#888]" : "text-prose"}`}>{desc}</p>
                <Link
                  href="/pricing"
                  className={`h-11 flex items-center justify-center rounded-full text-[14px] font-semibold transition-colors ${
                    featured ? "bg-white text-[#171717] hover:bg-[#f0f0f0]" : "bg-accent-solid text-white hover:opacity-90"
                  }`}
                >
                  See full details
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── Contact CTA (dark split) ──── */}
      <section className="relative bg-contrast overflow-hidden">
        <DottedWaveBackground />
        <div className="relative max-w-350 mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={reveal}
            className="relative h-72 lg:h-full min-h-100"
          >
            <Image
              src="/images/home/contact-cta.webp"
              alt="Let's talk about your project"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-transparent to-contrast lg:bg-linear-to-r" />
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={reveal} className="px-6 py-20 lg:pr-6 lg:pl-0">
            <Eyebrow tone="on-contrast" className="mb-5">Get in touch</Eyebrow>
            <h2 className="display-lg text-on-contrast mb-4">Let&apos;s build something great.</h2>
            <p className="text-on-contrast-faint text-[16px] leading-7 mb-8 max-w-md">
              Tell us about your project. We respond to every inquiry within 24 hours with honest feedback on whether and how we can help.
            </p>
            <ul className="flex flex-col gap-3 mb-10">
              {trustPoints.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check size={15} className="text-emerald-400 mt-0.5 shrink-0" />
                  <span className="text-[14px] leading-6 text-on-contrast-faint">{item}</span>
                </li>
              ))}
            </ul>
            <CircleArrowLink href="/contact" label="Start a conversation" variant="button" tone="on-contrast" />
          </motion.div>
        </div>
      </section>

      {/* ──── Blog teaser ──── */}
      <section className="bg-card py-24 px-6">
        <div className="max-w-350 mx-auto">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <Eyebrow className="mb-3">Blog and articles</Eyebrow>
              <h2 className="display-lg text-title">Insights for growing businesses.</h2>
            </div>
            <CircleArrowLink href="/blog" label="View all posts" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
