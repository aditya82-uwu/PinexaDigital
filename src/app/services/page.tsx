import type { Metadata } from "next";
import Link from "next/link";
import { Code2, Search, ShoppingBag, ShieldCheck, ArrowRight } from "lucide-react";
import { SITE, siteUrl } from "@/lib/site-config";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Web Design & Development Services",
  description: `Explore ${SITE.brandName}'s full range of services — web design, SEO, e-commerce, and website maintenance for US businesses.`,
  alternates: { canonical: siteUrl("/services") },
};

const services = [
  {
    icon: Code2,
    title: "Web Design & Development",
    desc: "Custom websites built from scratch — pixel-perfect design, fast load times, and conversion-focused layouts. We handle strategy, design, development, and launch.",
    href: "/services/web-design",
    tags: ["Next.js", "React", "WordPress", "Webflow"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Search,
    title: "SEO & Digital Marketing",
    desc: "Rank on Google and attract qualified US visitors. We handle on-page SEO, technical audits, content strategy, and local SEO for US markets.",
    href: "/services/seo",
    tags: ["On-page SEO", "Technical SEO", "Local SEO", "Content"],
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Development",
    desc: "Online stores built to convert. Whether you need Shopify, WooCommerce, or a custom solution — we build stores optimised for US customers.",
    href: "/services/ecommerce",
    tags: ["Shopify", "WooCommerce", "Custom", "Payments"],
    gradient: "from-orange-500 to-amber-500",
  },
  {
    icon: ShieldCheck,
    title: "Website Maintenance",
    desc: "Keep your site fast, secure, and up to date with our monthly maintenance plans. Includes updates, backups, monitoring, and priority support.",
    href: "/services/maintenance",
    tags: ["Updates", "Backups", "Monitoring", "Support"],
    gradient: "from-emerald-500 to-teal-500",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-card pt-20 pb-16 px-6 text-center border-b border-line">
        <div className="max-w-350 mx-auto">
          <Breadcrumb crumbs={[{ label: "Services" }]} />
          <p className="eyebrow mb-3">Services</p>
          <h1 className="display-xl text-title mb-4">Everything you need to grow online.</h1>
          <p className="text-[18px] leading-7 text-prose max-w-lg mx-auto">
            From first impression to ongoing growth — we cover every part of your web presence.
          </p>
        </div>
      </section>

      <section className="bg-surface py-20 px-6">
        <div className="max-w-350 mx-auto grid md:grid-cols-2 gap-4">
          {services.map(({ icon: Icon, title, desc, href, tags, gradient }) => (
            <Link key={href} href={href} className="group bg-card rounded-xl p-8 shadow-card hover:shadow-card-lg transition-all">
              <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${gradient} flex items-center justify-center mb-5`}>
                <Icon size={22} className="text-white" strokeWidth={1.8} />
              </div>
              <h2 className="display-md text-title mb-3">{title}</h2>
              <p className="text-[14px] leading-6 text-prose mb-5">{desc}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {tags.map((tag) => (
                  <span key={tag} className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-surface border border-line text-faint">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-link">
                Learn more <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-invert py-20 px-6 text-center">
        <div className="max-w-350 mx-auto">
          <h2 className="display-lg text-on-invert mb-4">Ready to get started?</h2>
          <p className="text-[18px] text-[#888] mb-8">Let&apos;s talk about what you need.</p>
          <Link href="/contact" className="h-12 px-8 inline-flex items-center rounded-full bg-white text-[#171717] text-[16px] font-medium hover:bg-[#f0f0f0] transition-colors">
            Get a free quote
          </Link>
        </div>
      </section>
    </>
  );
}
