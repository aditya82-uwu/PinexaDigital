"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import {
  Code2, Workflow, ShoppingBag, ShieldCheck, ArrowRight, Star,
  TrendingUp, Clock, BarChart3, Zap, Globe,
  MessageSquare, Layers, ChevronRight,
} from "lucide-react";

/* ─── Animation helper ─── */
const stagger = (delay = 0) => ({
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
});

/* ─── Animated number counter ─── */
function AnimatedNumber({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const el = ref.current;
    const duration = 1500;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * to) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

/* ─── Hero visual (analytics dashboard) ─── */
function HeroVisual() {
  const chartBars = [35, 52, 41, 60, 55, 70, 65, 80, 74, 87, 80, 95];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative w-full max-w-130 mx-auto"
    >
      {/* Ambient glow */}
      <div className="absolute -inset-10 rounded-full bg-linear-to-tr from-[#0F4C3A]/15 via-emerald-500/12 to-teal-400/8 blur-3xl pointer-events-none" />

      {/* Main card */}
      <div className="relative rounded-2xl overflow-hidden border border-line shadow-card-lg bg-card">
        {/* Gradient header with bar chart */}
        <div className="px-5 pt-5 pb-4" style={{ background: "linear-gradient(135deg, #0F4C3A 0%, #22C55E 100%)" }}>
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-white/60 text-[11px] font-medium uppercase tracking-wide">Site Performance</p>
              <p className="text-white text-xl font-bold mt-0.5">Built for Speed</p>
            </div>
            <div className="px-2.5 py-1 rounded-full bg-white/20 text-white text-[11px] font-semibold">This month</div>
          </div>
          <div className="flex items-end gap-1 h-14">
            {chartBars.map((h, i) => (
              <motion.div
                key={i}
                style={{ height: `${h}%`, transformOrigin: "bottom" }}
                className="flex-1 rounded-t bg-white/30"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.6 + i * 0.06, duration: 0.4, ease: "easeOut" }}
              />
            ))}
          </div>
        </div>

        {/* Metric strip */}
        <div className="grid grid-cols-3 divide-x divide-line">
          {[
            { label: "Load Time", val: "1.2s", color: "text-emerald-500" },
            { label: "Uptime", val: "99.9%", color: "text-[#0F4C3A] dark:text-emerald-400" },
            { label: "PageSpeed", val: "99/100", color: "text-teal-600 dark:text-teal-400" },
          ].map(({ label, val, color }) => (
            <div key={label} className="py-3 text-center">
              <div className={`text-[15px] font-bold ${color}`}>{val}</div>
              <div className="text-[10px] text-faint mt-0.5">{label}</div>
            </div>
          ))}
        </div>

        {/* Active projects grid */}
        <div className="p-4 bg-surface grid grid-cols-2 gap-2">
          {[
            { Icon: Globe, label: "New Website", status: "Live ✓", iconBg: "bg-[#0F4C3A]", statusColor: "text-emerald-500" },
            { Icon: Workflow, label: "CRM Automation", status: "Active", iconBg: "bg-emerald-500", statusColor: "text-[#0F4C3A]" },
            { Icon: ShoppingBag, label: "E-commerce", status: "Live ✓", iconBg: "bg-orange-500", statusColor: "text-emerald-500" },
            { Icon: BarChart3, label: "Analytics", status: "Tracking", iconBg: "bg-emerald-500", statusColor: "text-teal-600" },
          ].map(({ Icon, label, status, iconBg, statusColor }) => (
            <div key={label} className="bg-card rounded-lg p-2.5 flex items-center gap-2.5 border border-line">
              <div className={`w-7 h-7 rounded-md ${iconBg} flex items-center justify-center shrink-0`}>
                <Icon size={12} className="text-white" />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] font-semibold text-title truncate">{label}</div>
                <div className={`text-[10px] font-semibold ${statusColor}`}>{status}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating badge: traffic */}
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.0, duration: 0.5 }}
        className="absolute -left-10 top-[30%] bg-card border border-line rounded-2xl shadow-card-lg px-3.5 py-3 flex items-center gap-3"
      >
        <div className="w-9 h-9 rounded-full bg-emerald-500/10 flex items-center justify-center">
          <TrendingUp size={15} className="text-emerald-500" />
        </div>
        <div>
          <p className="text-[13px] font-bold text-title leading-none">90+ Score</p>
          <p className="text-[11px] text-faint mt-0.5">PageSpeed rating</p>
        </div>
      </motion.div>

      {/* Floating badge: pricing */}
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.15, duration: 0.5 }}
        className="absolute -right-10 bottom-[25%] bg-card border border-line rounded-2xl shadow-card-lg px-3.5 py-3 flex items-center gap-3"
      >
        <div className="w-9 h-9 rounded-full bg-amber-500/10 flex items-center justify-center">
          <ShieldCheck size={15} className="text-amber-500" />
        </div>
        <div>
          <p className="text-[13px] font-bold text-title leading-none">$299 Starter</p>
          <p className="text-[11px] text-faint mt-0.5">One-time price</p>
        </div>
      </motion.div>

      {/* Floating badge: delivery */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.5 }}
        className="absolute -top-5 right-[20%] bg-card border border-line rounded-xl shadow-card-lg px-3 py-2 flex items-center gap-2"
      >
        <div className="w-6 h-6 rounded-full bg-[#0F4C3A]/10 flex items-center justify-center">
          <Clock size={11} className="text-[#0F4C3A]" />
        </div>
        <p className="text-[12px] font-bold text-title">2-Week Delivery</p>
      </motion.div>
    </motion.div>
  );
}

/* ─── Data ─── */
const services = [
  {
    icon: Code2,
    title: "Web Design & Development",
    desc: "Custom, high-converting websites built for speed, SEO, and your US audience.",
    href: "/services/web-design",
    gradient: "from-[#0F4C3A] to-[#22C55E]",
    accentColor: "text-[#0F4C3A] dark:text-emerald-400",
  },
  {
    icon: Workflow,
    title: "CRM Automation & Integration",
    desc: "Automate your sales workflows with n8n, Zapier, and Make so no lead falls through.",
    href: "/services/crm-automation",
    gradient: "from-[#1A1A1A] to-[#22C55E]",
    accentColor: "text-neutral-700 dark:text-emerald-400",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Solutions",
    desc: "Shopify, WooCommerce, and custom stores optimised for US shoppers.",
    href: "/services/ecommerce",
    gradient: "from-orange-500 to-amber-400",
    accentColor: "text-orange-600 dark:text-orange-400",
  },
  {
    icon: ShieldCheck,
    title: "Website Maintenance",
    desc: "Monthly plans to keep your site fast, secure, and always up to date.",
    href: "/services/maintenance",
    gradient: "from-emerald-500 to-teal-400",
    accentColor: "text-emerald-600 dark:text-emerald-400",
  },
];

const stats = [
  { num: 2,  suffix: " Week",  label: "Average Delivery", Icon: Clock },
  { num: 24, suffix: " Hr",    label: "Response Time",    Icon: MessageSquare },
  { num: 0,  suffix: "",       label: "Hidden Fees",       Icon: ShieldCheck },
];

const whyUs = [
  { icon: Zap,          title: "Lightning Fast Delivery",  desc: "From kickoff to live site in 3 weeks, without cutting corners.",                   color: "bg-emerald-500/10 text-emerald-500" },
  { icon: Globe,        title: "US Market Expertise",      desc: "We know what American customers expect and design specifically for that.",            color: "bg-[#0F4C3A]/10 text-[#0F4C3A]" },
  { icon: BarChart3,    title: "Results-Focused",          desc: "Every decision traces back to traffic, leads, and revenue, not just looks.",        color: "bg-emerald-500/10 text-emerald-500" },
  { icon: MessageSquare,title: "Clear Communication",      desc: "No agency jargon. You're always in the loop with clear, honest updates.",            color: "bg-orange-500/10 text-orange-500" },
];

const steps = [
  { n: "01", title: "Discovery call",  desc: "We learn your goals, audience, and vision and recommend the right approach before we touch a pixel.", icon: MessageSquare, gradient: "from-[#0F4C3A] to-[#22C55E]" },
  { n: "02", title: "Design sprint",   desc: "Full mockups delivered within 5 business days. Iterate until every detail is right.",                  icon: Layers,        gradient: "from-[#1A1A1A] to-[#22C55E]" },
  { n: "03", title: "Build & launch",  desc: "We develop, test, optimise, and go live, then submit your sitemap to Google on day one.",             icon: Zap,           gradient: "from-orange-500 to-amber-500" },
];

const testimonials = [
  {
    body: "PinexaDigital delivered a stunning website in 3 weeks. Organic traffic is up 40% and we're closing quality leads every single week.",
    name: "Sarah M.",
    role: "Founder, Austin Property Group",
    initials: "SM",
    gradient: "from-[#0F4C3A] to-[#22C55E]",
    accent: "from-[#0F4C3A] to-emerald-400",
  },
  {
    body: "They understood exactly what US customers expect. Clean, professional, loads incredibly fast. We couldn't be happier.",
    name: "James R.",
    role: "CEO, Pacific Wellness Studio",
    initials: "JR",
    gradient: "from-[#1A1A1A] to-[#22C55E]",
    accent: "from-[#1A1A1A] to-emerald-400",
  },
  {
    body: "Our e-commerce revenue doubled in the first month after launch. Best investment we've made for our online store.",
    name: "Diana L.",
    role: "Owner, Brooklyn Home Goods",
    initials: "DL",
    gradient: "from-orange-500 to-amber-500",
    accent: "from-orange-500 to-amber-400",
  },
];

/* ─── Page ─── */
export default function HomeClient() {
  return (
    <>
      {/* ──── Hero ──── */}
      <section className="relative bg-card overflow-hidden pt-20 pb-28 px-6">
        <div className="absolute -top-32 right-0 w-175 h-175 rounded-full bg-linear-to-bl from-[#0F4C3A]/12 via-emerald-500/8 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 -left-32 w-125 h-125 rounded-full bg-linear-to-tr from-emerald-500/8 to-transparent blur-3xl pointer-events-none" />

        <div className="relative max-w-350 mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left copy */}
          <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div
              variants={stagger(0)}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-linear-to-r from-[#0F4C3A]/10 to-emerald-500/10 border border-emerald-500/20 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-semibold tracking-wide uppercase text-[#0F4C3A] dark:text-emerald-400">
                Now taking US clients
              </span>
            </motion.div>

            <motion.h1 variants={stagger(0.05)} className="display-xl text-title mb-5">
              We build websites that{" "}
              <span className="bg-linear-to-r from-[#0F4C3A] to-emerald-600 bg-clip-text text-transparent">
                win US clients.
              </span>
            </motion.h1>

            <motion.p variants={stagger(0.1)} className="text-[18px] leading-7 text-prose mb-8 max-w-lg">
              High-converting web design and development for businesses ready to grow online. Fast delivery, transparent pricing, real results.
            </motion.p>

            <motion.div variants={stagger(0.15)} className="flex flex-wrap gap-3 mb-10">
              <Link
                href="/contact"
                className="h-12 px-7 flex items-center gap-2 rounded-full text-white text-[15px] font-medium hover:opacity-90 transition-opacity shadow-lg shadow-emerald-500/20"
                style={{ background: "linear-gradient(135deg, #0F4C3A 0%, #22C55E 100%)" }}
              >
                Start your project <ArrowRight size={16} />
              </Link>
              <Link
                href="/portfolio"
                className="h-12 px-7 flex items-center rounded-full bg-surface border border-line text-title text-[15px] font-medium hover:bg-[#f0f0f0] dark:hover:bg-[#222] transition-colors"
              >
                See our work
              </Link>
            </motion.div>

            {/* Trust signals */}
            <motion.div variants={stagger(0.2)} className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-emerald-500 shrink-0" />
              <p className="text-[12px] text-faint">
                <span className="text-title font-semibold">Fixed-price projects</span>: no hourly billing, no surprises
              </p>
            </motion.div>
          </motion.div>

          {/* Right visual */}
          <div className="hidden lg:flex justify-center">
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* ──── Stats band ──── */}
      <section
        className="relative py-14 px-6"
        style={{ background: "linear-gradient(135deg, #0F4C3A 0%, #22C55E 100%)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(255,255,255,0.06) 0%, transparent 70%)" }}
        />
        <div className="relative max-w-350 mx-auto grid grid-cols-3 gap-8">
          {stats.map(({ num, suffix, label, Icon }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="inline-flex w-12 h-12 rounded-xl bg-white/15 items-center justify-center mb-3">
                <Icon size={20} className="text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                <AnimatedNumber to={num} suffix={suffix} />
              </div>
              <div className="text-[13px] text-white/70">{label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ──── Services ──── */}
      <section className="bg-surface py-24 px-6">
        <div className="max-w-350 mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/8 border border-emerald-500/15 mb-4">
              <span className="eyebrow text-emerald-700 dark:text-emerald-400">What we build</span>
            </div>
            <h2 className="display-lg text-title mb-3">Everything your business needs online.</h2>
            <p className="text-prose max-w-xl mx-auto">From first impression to final conversion, we handle every digital touchpoint.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map(({ icon: Icon, title, desc, href, gradient, accentColor }, i) => (
              <motion.div
                key={href}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -6 }}
              >
                <Link href={href} className="group flex flex-col h-full bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-lg transition-all">
                  {/* Gradient icon header */}
                  <div className={`bg-linear-to-br ${gradient} p-5 relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white/10 -translate-y-8 translate-x-8" />
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center relative z-10">
                      <Icon size={22} className="text-white" strokeWidth={1.8} />
                    </div>
                  </div>
                  {/* Body */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="display-sm text-title mb-2">{title}</h3>
                    <p className="text-[14px] leading-6 text-prose flex-1 mb-4">{desc}</p>
                    <span className={`inline-flex items-center gap-1.5 text-[13px] font-semibold ${accentColor}`}>
                      Learn more <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── Why Us ──── */}
      <section className="bg-card py-24 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 -translate-y-1/2 right-0 w-150 h-150 rounded-full bg-linear-to-l from-[#0F4C3A]/6 to-transparent blur-3xl pointer-events-none" />
        <div className="relative max-w-350 mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: photo mosaic */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative pb-12 lg:pb-4"
          >
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden shadow-card-lg">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&h=500&q=80&fit=crop"
                alt="PinexaDigital team at work"
                width={700}
                height={500}
                className="w-full object-cover"
                priority
              />
              {/* Bottom gradient fade */}
              <div className="absolute bottom-0 inset-x-0 h-2/5 bg-linear-to-t from-black/55 to-transparent pointer-events-none" />
              {/* Glassmorphism stat overlay */}
              <div className="absolute bottom-5 left-5 flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3">
                <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                  <ShieldCheck size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-white text-[15px] font-bold leading-none">Fixed Price</p>
                  <p className="text-white/70 text-[11px] mt-0.5">No hidden fees</p>
                </div>
              </div>
              {/* US-focused pill top-right */}
              <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1.5">
                <Globe size={12} className="text-white" />
                <span className="text-white text-[11px] font-semibold">US-focused</span>
              </div>
            </div>

            {/* Secondary floating image */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-3 sm:-right-6 w-44 h-32 rounded-2xl overflow-hidden shadow-card-lg border-4 border-card hidden sm:block"
            >
              <Image
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=300&h=220&q=80&fit=crop"
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

          {/* Right: differentiators */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F4C3A]/8 border border-[#0F4C3A]/15 mb-5">
              <span className="eyebrow text-[#0F4C3A] dark:text-emerald-400">Why Pinexa Digital</span>
            </div>
            <h2 className="display-lg text-title mb-4">We&apos;re not just another web agency.</h2>
            <p className="text-prose text-[16px] leading-7 mb-8">
              We&apos;re a focused team obsessed with one thing: measurable results for US businesses. No bloat, no fluff. Just clean, fast, conversion-optimized digital products.
            </p>
            <div className="space-y-5">
              {whyUs.map(({ icon: Icon, title, desc, color }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${color}`}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-semibold text-title mb-1">{title}</h4>
                    <p className="text-[14px] text-prose leading-6">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <Link href="/about" className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-link mt-8 hover:gap-2.5 transition-all">
              More about us <ChevronRight size={15} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ──── Process ──── */}
      <section className="bg-surface py-24 px-6">
        <div className="max-w-350 mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/8 border border-orange-500/15 mb-4">
              <span className="eyebrow text-orange-600 dark:text-orange-400">How it works</span>
            </div>
            <h2 className="display-lg text-title">From idea to live site in weeks.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 relative">
            <div className="hidden md:block absolute top-13 left-[calc(16.66%+2rem)] right-[calc(16.66%+2rem)]">
              <div className="h-px border-t-2 border-dashed border-line" />
            </div>

            {steps.map(({ n, title, desc, icon: Icon, gradient }, i) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.55 }}
                className="flex flex-col items-center text-center"
              >
                <div
                  className={`w-26 h-26 rounded-2xl bg-linear-to-br ${gradient} flex flex-col items-center justify-center mb-6 shadow-lg relative z-10`}
                >
                  <span className="text-white/60 text-[10px] font-bold tracking-widest mb-1.5">{n}</span>
                  <Icon size={28} className="text-white" strokeWidth={1.6} />
                </div>
                <h3 className="display-sm text-title mb-2">{title}</h3>
                <p className="text-[14px] leading-6 text-prose max-w-60">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── Testimonials (hidden until we have real, verifiable client testimonials) ──── */}
      {false && (
        <section className="bg-card py-24 px-6 relative overflow-hidden">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-225 h-[350px] rounded-full bg-linear-to-t from-[#0F4C3A]/6 to-transparent blur-3xl pointer-events-none" />
          <div className="relative max-w-350 mx-auto">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/8 border border-emerald-500/15 mb-4">
                <span className="eyebrow text-emerald-600 dark:text-emerald-400">Client results</span>
              </div>
              <h2 className="display-lg text-title">Real businesses. Real results.</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {testimonials.map(({ body, name, role, initials, gradient, accent }, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.55 }}
                  whileHover={{ y: -5 }}
                  className="bg-surface rounded-2xl shadow-card hover:shadow-card-lg transition-all flex flex-col overflow-hidden"
                >
                  {/* Colored accent bar */}
                  <div className={`h-1.5 bg-linear-to-r ${accent} shrink-0`} />
                  <div className="p-7 flex flex-col gap-5 flex-1">
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star key={s} size={14} className="fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-[15px] leading-7 text-prose flex-1">&ldquo;{body}&rdquo;</p>
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full bg-linear-to-br ${gradient} flex items-center justify-center shrink-0`}>
                        <span className="text-white text-[12px] font-bold">{initials}</span>
                      </div>
                      <div>
                        <p className="text-[14px] font-semibold text-title leading-none">{name}</p>
                        <p className="text-[12px] text-faint mt-0.5">{role}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ──── CTA ──── */}
      <section className="py-24 px-6 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0F4C3A 0%, #1A1A1A 50%, #0F4C3A 100%)" }}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 left-1/4 w-96 h-96 rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="absolute -bottom-24 right-1/4 w-96 h-96 rounded-full bg-[#0F4C3A]/30 blur-3xl" />
        </div>
        <div className="relative max-w-350 mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/8 border border-white/15 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-semibold tracking-wide uppercase text-white/60">Ready to grow?</span>
          </div>
          <h2 className="display-lg text-white mb-4">
            Let&apos;s build something{" "}
            <span className="bg-linear-to-r from-emerald-300 to-teal-400 bg-clip-text text-transparent">
              extraordinary.
            </span>
          </h2>
          <p className="text-[18px] text-white/55 mb-10 max-w-md mx-auto">
            Tell us about your business and we&apos;ll get back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="h-12 px-8 flex items-center gap-2 rounded-full text-white text-[16px] font-medium hover:opacity-90 transition-opacity shadow-lg shadow-emerald-500/25"
              style={{ background: "linear-gradient(135deg, #0F4C3A 0%, #22C55E 100%)" }}
            >
              Get a free quote <ArrowRight size={16} />
            </Link>
            <Link
              href="/pricing"
              className="h-12 px-8 flex items-center rounded-full border border-white/20 text-white text-[16px] font-medium hover:bg-white/5 transition-colors"
            >
              View pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
