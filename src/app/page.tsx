"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Code2, Search, ShoppingBag, ShieldCheck, ArrowRight, Star, TrendingUp, Clock, Users, Award } from "lucide-react";

/* ── Animation helpers ── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};
const stagger = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
});

/* ── Browser mockup ── */
function BrowserMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative"
    >
      {/* Glow */}
      <div className="absolute -inset-6 bg-linear-to-tr from-blue-500/10 via-violet-500/8 to-pink-500/8 blur-3xl rounded-full pointer-events-none" />

      <div className="relative rounded-xl overflow-hidden border border-line shadow-card-lg">
        {/* Chrome bar */}
        <div className="bg-[#f0f0f0] dark:bg-[#1a1a1a] border-b border-line px-4 py-2.5 flex items-center gap-3">
          <div className="flex gap-1.5 shrink-0">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 bg-white dark:bg-[#2a2a2a] border border-line rounded-md h-5 flex items-center px-2 max-w-[200px]">
            <span className="text-[10px] text-faint truncate">pinexadigital.com</span>
          </div>
        </div>

        {/* Simulated website content */}
        <div className="bg-white dark:bg-[#111] aspect-[16/10] overflow-hidden">
          {/* Hero area with gradient */}
          <div className="h-[45%] bg-linear-to-br from-slate-900 to-slate-800 dark:from-black dark:to-slate-900 relative flex flex-col justify-center px-5 gap-2">
            <div className="absolute inset-0 opacity-30"
              style={{ background: "radial-gradient(ellipse 60% 60% at 80% 50%, rgba(99,102,241,0.4) 0%, transparent 70%)" }} />
            <div className="h-2 bg-white/80 rounded w-1/2 relative z-10" />
            <div className="h-2 bg-white/50 rounded w-2/5 relative z-10" />
            <div className="h-1.5 bg-white/30 rounded w-3/5 relative z-10 mt-1" />
            <div className="mt-2 flex gap-2 relative z-10">
              <div className="h-5 w-16 bg-white rounded-full" />
              <div className="h-5 w-16 bg-white/20 rounded-full border border-white/30" />
            </div>
          </div>

          {/* Content cards row */}
          <div className="px-4 py-3 grid grid-cols-3 gap-2.5">
            {["bg-blue-50 dark:bg-blue-950/30", "bg-violet-50 dark:bg-violet-950/30", "bg-emerald-50 dark:bg-emerald-950/30"].map((bg, i) => (
              <div key={i} className={`${bg} rounded-lg p-2.5 space-y-1.5`}>
                <div className={`w-4 h-4 rounded-md ${["bg-blue-400","bg-violet-400","bg-emerald-400"][i]}`} />
                <div className="h-1.5 bg-current opacity-30 rounded w-full" />
                <div className="h-1.5 bg-current opacity-20 rounded w-3/4" />
                <div className="h-1.5 bg-current opacity-15 rounded w-1/2" />
              </div>
            ))}
          </div>

          {/* Metrics row */}
          <div className="px-4 grid grid-cols-3 gap-2">
            {["40%↑ Traffic", "3× Leads", "2× Revenue"].map((s) => (
              <div key={s} className="h-6 bg-[#fafafa] dark:bg-[#1a1a1a] rounded text-[9px] flex items-center justify-center font-medium text-[#171717] dark:text-white/70">
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating stat card */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.4 }}
        className="absolute -bottom-3 -left-6 bg-card border border-line rounded-xl shadow-card-lg px-4 py-3 flex items-center gap-3"
      >
        <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
          <TrendingUp size={14} className="text-emerald-500" />
        </div>
        <div>
          <p className="text-[12px] font-semibold text-title leading-none">+127%</p>
          <p className="text-[11px] text-faint mt-0.5">Organic Traffic</p>
        </div>
      </motion.div>

      {/* Floating speed card */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.4 }}
        className="absolute -top-3 -right-4 bg-card border border-line rounded-xl shadow-card-lg px-4 py-3 flex items-center gap-3"
      >
        <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
          <Award size={14} className="text-blue-500" />
        </div>
        <div>
          <p className="text-[12px] font-semibold text-title leading-none">PageSpeed 99</p>
          <p className="text-[11px] text-faint mt-0.5">Performance Score</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Data ── */
const services = [
  {
    icon: Code2,
    title: "Web Design & Development",
    desc: "Custom, high-converting websites built for speed, SEO, and your US audience.",
    href: "/services/web-design",
    gradient: "from-blue-500 to-cyan-500",
    bg: "bg-blue-500/8 dark:bg-blue-500/10",
  },
  {
    icon: Search,
    title: "SEO & Digital Marketing",
    desc: "Rank higher on Google and get found by the right US customers.",
    href: "/services/seo",
    gradient: "from-violet-500 to-purple-500",
    bg: "bg-violet-500/8 dark:bg-violet-500/10",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Solutions",
    desc: "Shopify, WooCommerce, and custom stores optimised for US shoppers.",
    href: "/services/ecommerce",
    gradient: "from-orange-500 to-amber-500",
    bg: "bg-orange-500/8 dark:bg-orange-500/10",
  },
  {
    icon: ShieldCheck,
    title: "Website Maintenance",
    desc: "Monthly plans to keep your site fast, secure, and always up to date.",
    href: "/services/maintenance",
    gradient: "from-emerald-500 to-teal-500",
    bg: "bg-emerald-500/8 dark:bg-emerald-500/10",
  },
];

const stats = [
  { icon: Award,  num: "50+",  label: "Projects delivered" },
  { icon: Users,  num: "98%",  label: "Client satisfaction" },
  { icon: Clock,  num: "3 wk", label: "Average delivery" },
  { icon: Star,   num: "5.0",  label: "Average rating" },
];

const process = [
  { n: "01", title: "Discovery call.", desc: "We learn your goals, audience, and vision. We'll recommend the right approach before we touch a pixel." },
  { n: "02", title: "Design sprint.", desc: "Full mockups delivered within 5 business days. Iterate until every detail is right." },
  { n: "03", title: "Build & launch.", desc: "We develop, test, optimise, and go live — then submit your sitemap to Google on day one." },
];

const testimonials = [
  {
    body: "PinexaDigital delivered a stunning website in 3 weeks. Organic traffic is up 40% and we're closing quality leads every single week.",
    name: "Sarah M.",
    role: "Founder, Austin Property Group",
    initials: "SM",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    body: "They understood exactly what US customers expect. Clean, professional, loads incredibly fast — we couldn't be happier.",
    name: "James R.",
    role: "CEO, Pacific Wellness Studio",
    initials: "JR",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    body: "Our e-commerce revenue doubled in the first month after launch. Best investment we've made for our online store.",
    name: "Diana L.",
    role: "Owner, Brooklyn Home Goods",
    initials: "DL",
    gradient: "from-orange-500 to-amber-500",
  },
];

/* ── Page ── */
export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-card overflow-hidden pt-20 pb-24 px-6">
        <div className="mesh-gradient absolute inset-0 pointer-events-none" aria-hidden />
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div variants={stagger(0)} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-line mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="eyebrow">Now taking US clients</span>
            </motion.div>

            <motion.h1 variants={stagger(0.05)} className="display-xl text-title mb-5">
              We build websites that win US clients.
            </motion.h1>

            <motion.p variants={stagger(0.1)} className="text-[18px] leading-7 text-prose mb-8 max-w-lg">
              High-converting web design and development for businesses ready to grow online. Fast delivery, transparent pricing, real results.
            </motion.p>

            <motion.div variants={stagger(0.15)} className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="h-12 px-7 flex items-center gap-2 rounded-full bg-[#171717] text-white dark:bg-white dark:text-[#171717] text-[15px] font-medium hover:opacity-85 transition-opacity"
              >
                Start your project <ArrowRight size={16} />
              </Link>
              <Link
                href="/portfolio"
                className="h-12 px-7 flex items-center rounded-full bg-surface border border-line dark:border-[#444] text-title text-[15px] font-medium hover:bg-card transition-colors"
              >
                See our work
              </Link>
            </motion.div>
          </motion.div>

          {/* Right */}
          <div className="hidden lg:block">
            <BrowserMockup />
          </div>
        </div>
      </section>

      {/* ── Stats band ── */}
      <section className="bg-surface border-y border-line py-10 px-6">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, num, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-lg bg-card border border-line flex items-center justify-center shrink-0">
                <Icon size={16} className="text-prose" />
              </div>
              <div>
                <p className="display-sm text-title">{num}</p>
                <p className="text-[12px] text-faint mt-0.5">{label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Services ── */}
      <section className="bg-card py-24 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-14">
            <p className="eyebrow mb-3">What we build</p>
            <h2 className="display-lg text-title">Everything your business needs online.</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map(({ icon: Icon, title, desc, href, gradient, bg }, i) => (
              <motion.div
                key={href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -4 }}
              >
                <Link href={href} className="group flex flex-col h-full bg-surface rounded-xl p-6 shadow-card hover:shadow-card-lg transition-all">
                  <div className={`w-11 h-11 rounded-xl bg-linear-to-br ${gradient} flex items-center justify-center mb-5`}>
                    <Icon size={20} className="text-white" strokeWidth={1.8} />
                  </div>
                  <h3 className="display-sm text-title mb-2">{title}</h3>
                  <p className="text-[14px] leading-6 text-prose flex-1 mb-4">{desc}</p>
                  <span className="inline-flex items-center gap-1 text-[13px] font-medium text-link">
                    Learn more <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="bg-surface py-24 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-14">
            <p className="eyebrow mb-3">How it works</p>
            <h2 className="display-lg text-title">From idea to live site in weeks.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-7 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-px bg-line" />

            {process.map(({ n, title, desc }, i) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-full bg-card border-2 border-line flex items-center justify-center mb-5 relative z-10">
                  <span className="eyebrow text-title">{n}</span>
                </div>
                <h3 className="display-sm text-title mb-2">{title}</h3>
                <p className="text-[14px] leading-6 text-prose">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-card py-24 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-14">
            <p className="eyebrow mb-3">Client results</p>
            <h2 className="display-lg text-title">What our clients say.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.map(({ body, name, role, initials, gradient }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-surface rounded-xl p-7 shadow-card flex flex-col gap-5"
              >
                {/* Stars */}
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-[15px] leading-7 text-prose flex-1">&ldquo;{body}&rdquo;</p>

                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full bg-linear-to-br ${gradient} flex items-center justify-center shrink-0`}>
                    <span className="text-white text-[11px] font-semibold">{initials}</span>
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-title leading-none">{name}</p>
                    <p className="text-[12px] text-faint mt-0.5">{role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-invert py-24 px-6 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{ background: "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(99,102,241,0.5) 0%, transparent 70%)" }}
          aria-hidden
        />
        <div className="relative max-w-[1400px] mx-auto">
          <p className="eyebrow text-[#555] mb-4">Ready to grow?</p>
          <h2 className="display-lg text-on-invert mb-4">Start your project today.</h2>
          <p className="text-[18px] text-[#888] mb-10 max-w-md mx-auto">
            Tell us about your business and we&apos;ll get back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="h-12 px-8 flex items-center gap-2 rounded-full bg-white text-[#171717] text-[16px] font-medium hover:bg-[#f0f0f0] transition-colors"
            >
              Get a free quote <ArrowRight size={16} />
            </Link>
            <Link
              href="/pricing"
              className="h-12 px-8 flex items-center rounded-full border border-[#333] text-on-invert text-[16px] font-medium hover:border-[#666] transition-colors"
            >
              View pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
