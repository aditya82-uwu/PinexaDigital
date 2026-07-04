import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, ArrowRight, TrendingUp } from "lucide-react";
import { SITE, siteUrl } from "@/lib/site-config";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Portfolio & Live Demos — See Our Work",
  description: `Browse ${SITE.brandName}'s live website demos across industries — gyms, restaurants, hotels, clinics, law firms, and more.`,
  alternates: { canonical: siteUrl("/portfolio") },
};

/* ── Demo sites ── */
const demos = [
  {
    title: "Gym & Fitness",
    category: "Health & Fitness",
    desc: "High-energy fitness studio site with class schedules, memberships, and trainer profiles.",
    url: `https://gym.${SITE.rootDomain}`,
    tags: ["Fitness", "Booking"],
    /* Simulated hero colours for the preview card */
    heroBg: "from-[#0a0a0a] via-[#111] to-[#1a0500]",
    heroAccent: "bg-orange-500",
    navBg: "bg-[#0a0a0a]",
    textLines: ["bg-white/80", "bg-white/50", "bg-white/30"],
    ctaColor: "bg-orange-500",
    cardsBg: ["bg-orange-500/20", "bg-orange-400/10", "bg-orange-300/10"],
  },
  {
    title: "Restaurant & Café",
    category: "Food & Beverage",
    desc: "Warm, appetising restaurant site with menu, reservations, and gallery.",
    url: `https://restaurant.${SITE.rootDomain}`,
    tags: ["Restaurant", "Reservations"],
    heroBg: "from-[#1a0900] via-[#2d1200] to-[#1a0600]",
    heroAccent: "bg-amber-500",
    navBg: "bg-[#1a0900]",
    textLines: ["bg-amber-100/80", "bg-amber-100/50", "bg-amber-100/30"],
    ctaColor: "bg-amber-500",
    cardsBg: ["bg-amber-500/20", "bg-amber-400/10", "bg-yellow-300/10"],
  },
  {
    title: "Hotel & Resort",
    category: "Hospitality",
    desc: "Elegant hotel site with room listings, booking engine, and amenities showcase.",
    url: `https://hotel.${SITE.rootDomain}`,
    tags: ["Hotel", "Booking"],
    heroBg: "from-[#050d1a] via-[#0a1628] to-[#0d1f3c]",
    heroAccent: "bg-yellow-400",
    navBg: "bg-[#050d1a]",
    textLines: ["bg-white/80", "bg-white/50", "bg-white/30"],
    ctaColor: "bg-yellow-400",
    cardsBg: ["bg-blue-500/20", "bg-blue-400/10", "bg-indigo-300/10"],
  },
  {
    title: "Travel Agency",
    category: "Travel & Tourism",
    desc: "Adventure-focused travel site with destination packages, itineraries, and booking.",
    url: `https://travel.${SITE.rootDomain}`,
    tags: ["Travel", "Packages"],
    heroBg: "from-[#00111f] via-[#003d6b] to-[#0077b6]",
    heroAccent: "bg-cyan-400",
    navBg: "bg-[#00111f]",
    textLines: ["bg-white/80", "bg-white/50", "bg-cyan-200/30"],
    ctaColor: "bg-cyan-400",
    cardsBg: ["bg-cyan-500/20", "bg-sky-400/10", "bg-blue-300/10"],
  },
  {
    title: "Doctor & Clinic",
    category: "Healthcare",
    desc: "Professional medical clinic site with doctor profiles, appointments, and services.",
    url: `https://clinic.${SITE.rootDomain}`,
    tags: ["Healthcare", "Appointments"],
    heroBg: "from-[#e8f4fd] via-[#d6eaf8] to-[#ebf5fb]",
    heroAccent: "bg-blue-600",
    navBg: "bg-white",
    textLines: ["bg-blue-900/70", "bg-blue-900/40", "bg-blue-900/25"],
    ctaColor: "bg-blue-600",
    cardsBg: ["bg-blue-500/15", "bg-blue-400/10", "bg-sky-300/10"],
  },
  {
    title: "Law Firm",
    category: "Legal Services",
    desc: "Authoritative law firm site with practice areas, attorney bios, and consultations.",
    url: `https://lawyer.${SITE.rootDomain}`,
    tags: ["Legal", "Consultations"],
    heroBg: "from-[#0a0a0a] via-[#111] to-[#1a1500]",
    heroAccent: "bg-yellow-600",
    navBg: "bg-[#0a0a0a]",
    textLines: ["bg-white/80", "bg-white/50", "bg-yellow-100/30"],
    ctaColor: "bg-yellow-600",
    cardsBg: ["bg-yellow-500/20", "bg-yellow-400/10", "bg-amber-300/10"],
  },
  {
    title: "Real Estate",
    category: "Property",
    desc: "Modern real estate site with property listings, agent profiles, and valuations.",
    url: `https://realestate.${SITE.rootDomain}`,
    tags: ["Real Estate", "Listings"],
    heroBg: "from-[#1a0f00] via-[#2d1a00] to-[#3d2400]",
    heroAccent: "bg-emerald-500",
    navBg: "bg-[#1a0f00]",
    textLines: ["bg-white/80", "bg-white/50", "bg-green-100/30"],
    ctaColor: "bg-emerald-500",
    cardsBg: ["bg-emerald-500/20", "bg-green-400/10", "bg-teal-300/10"],
  },
  {
    title: "Construction",
    category: "Construction",
    desc: "Bold construction company site with project gallery, services, and quote request.",
    url: `https://roofing.${SITE.rootDomain}`,
    tags: ["Construction", "Projects"],
    heroBg: "from-[#0f0800] via-[#1a1000] to-[#2d1a00]",
    heroAccent: "bg-orange-600",
    navBg: "bg-[#0f0800]",
    textLines: ["bg-white/80", "bg-white/50", "bg-orange-100/30"],
    ctaColor: "bg-orange-600",
    cardsBg: ["bg-orange-500/20", "bg-orange-400/10", "bg-yellow-300/10"],
  },
];

/* ── Past client results ── */
const results = [
  { title: "Austin Property Group",    result: "+40% organic traffic", category: "Real Estate" },
  { title: "Pacific Wellness Studio",  result: "3× online bookings",   category: "Health" },
  { title: "Brooklyn Home Goods",      result: "2× e-commerce revenue",category: "E-commerce" },
  { title: "Coastal Legal Partners",   result: "#1 keyword ranking",   category: "Legal" },
  { title: "Meridian Consulting",      result: "60% more demo requests",category: "B2B" },
  { title: "Summit Outdoor Gear",      result: "PageSpeed 42 → 97",    category: "E-commerce" },
];

/* ── Browser-style preview card ── */
function PreviewCard({ demo }: { demo: (typeof demos)[0] }) {
  return (
    <div className="group bg-card rounded-xl overflow-hidden border border-line shadow-card hover:shadow-card-lg transition-all duration-300">
      {/* Browser chrome */}
      <div className="bg-[#ebebeb] dark:bg-[#222] border-b border-line flex items-center gap-2.5 px-3 py-2 shrink-0">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 max-w-45 bg-white dark:bg-[#333] rounded h-4 flex items-center px-2">
          <span className="text-[9px] text-faint truncate">{demo.url.replace("https://", "")}</span>
        </div>
      </div>

      {/* Simulated website preview */}
      <div className="relative aspect-video overflow-hidden">
        {/* Simulated page: nav + hero + cards */}
        <div className="w-full h-full flex flex-col">
          {/* Simulated navbar */}
          <div className={`${demo.navBg} h-[14%] flex items-center px-3 gap-2 shrink-0`}>
            <div className="w-10 h-1.5 rounded bg-white/60" />
            <div className="flex gap-2 ml-auto">
              {[1, 2, 3].map((i) => <div key={i} className="w-6 h-1 rounded bg-white/30" />)}
              <div className={`w-8 h-3.5 rounded ${demo.heroAccent} opacity-90`} />
            </div>
          </div>

          {/* Simulated hero */}
          <div className={`bg-linear-to-br ${demo.heroBg} flex-1 flex flex-col justify-center px-4 pb-2 gap-1.5 relative`}>
            <div className={`h-2 rounded w-3/5 ${demo.textLines[0]}`} />
            <div className={`h-2 rounded w-2/5 ${demo.textLines[1]}`} />
            <div className={`h-1.5 rounded w-3/4 ${demo.textLines[2]} mt-0.5`} />
            <div className="flex gap-2 mt-2">
              <div className={`h-4 w-14 rounded-full ${demo.ctaColor}`} />
              <div className="h-4 w-14 rounded-full border border-white/30" />
            </div>

            {/* Simulated content cards */}
            <div className="absolute bottom-2 inset-x-4 grid grid-cols-3 gap-1.5">
              {demo.cardsBg.map((bg, i) => (
                <div key={i} className={`${bg} rounded h-7 backdrop-blur-sm`} />
              ))}
            </div>
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#171717]/75 dark:bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-3">
          <p className="text-white font-semibold text-[13px]">{demo.title}</p>
          <a
            href={demo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="h-9 px-5 flex items-center gap-2 rounded-full bg-white text-[#171717] text-[13px] font-semibold hover:bg-[#f0f0f0] transition-colors"
          >
            Live Preview <ExternalLink size={12} />
          </a>
        </div>
      </div>

      {/* Card footer */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-semibold tracking-widest uppercase text-faint">{demo.category}</span>
          <div className="flex gap-1">
            {demo.tags.map((t) => (
              <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-surface border border-line text-faint">{t}</span>
            ))}
          </div>
        </div>
        <h3 className="display-sm text-title mb-3">{demo.title}</h3>
        <p className="text-[12px] leading-5 text-prose mb-4">{demo.desc}</p>
        <a
          href={demo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[13px] font-medium text-link hover:underline"
        >
          Open live demo <ExternalLink size={12} />
        </a>
      </div>
    </div>
  );
}

/* ── Page ── */
export default function PortfolioPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-card pt-20 pb-16 px-6 text-center border-b border-line">
        <div className="max-w-350 mx-auto">
          <Breadcrumb crumbs={[{ label: "Portfolio" }]} />
          <p className="eyebrow mb-3">Live Demo Showcase</p>
          <h1 className="display-xl text-title mb-4">See exactly what we build.</h1>
          <p className="text-[18px] leading-7 text-prose max-w-lg mx-auto">
            Click any card to preview a live website we&apos;ve built for that industry — then imagine your brand in its place.
          </p>
        </div>
      </section>

      {/* ThemeForest-style demo grid */}
      <section className="bg-surface py-20 px-6">
        <div className="max-w-350 mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="eyebrow mb-1">Industry Demos</p>
              <h2 className="display-lg text-title">{demos.length} live websites, ready to preview.</h2>
            </div>
            <span className="hidden md:block text-[13px] text-faint">Hover a card → click Live Preview</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {demos.map((demo) => (
              <PreviewCard key={demo.url} demo={demo} />
            ))}
          </div>
        </div>
      </section>

      {/* Client results strip (hidden until we have real, verifiable client results) */}
      {false && (
        <section className="bg-card py-20 px-6 border-t border-line">
          <div className="max-w-350 mx-auto">
            <div className="text-center mb-12">
              <p className="eyebrow mb-3">Client Results</p>
              <h2 className="display-lg text-title">Real projects, real numbers.</h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {results.map(({ title, result, category }) => (
                <div key={title} className="bg-surface rounded-xl p-5 shadow-card flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-link/10 flex items-center justify-center shrink-0 mt-0.5">
                    <TrendingUp size={15} className="text-link" />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold tracking-widest uppercase text-faint block mb-1">{category}</span>
                    <p className="text-[14px] font-semibold text-title leading-tight mb-1">{title}</p>
                    <p className="text-[13px] font-medium text-link">{result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-invert py-20 px-6 text-center">
        <div className="max-w-350 mx-auto">
          <h2 className="display-lg text-on-invert mb-4">Want a site like these for your business?</h2>
          <p className="text-[18px] text-[#888] mb-8 max-w-md mx-auto">Tell us your industry and goals — we&apos;ll build something better than the demo.</p>
          <Link href="/contact" className="h-12 px-8 inline-flex items-center gap-2 rounded-full bg-white text-[#171717] text-[16px] font-medium hover:bg-[#f0f0f0] transition-colors">
            Start your project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
