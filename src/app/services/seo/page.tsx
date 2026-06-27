import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { SITE, siteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "SEO Services for US Businesses",
  description: `Data-driven SEO services that rank your business on Google. ${SITE.brandName} specialises in on-page, technical, and local SEO for US markets.`,
  alternates: { canonical: siteUrl("/services/seo") },
};

const deliverables = [
  { title: "Technical SEO audit.", desc: "Full crawl to identify and fix indexing issues, broken links, duplicate content, and Core Web Vitals problems." },
  { title: "On-page optimisation.", desc: "Keyword research, meta tags, heading structure, internal linking, and schema markup on every key page." },
  { title: "Local SEO.", desc: "Google Business Profile, local citations, and location-targeted content for US local searches." },
  { title: "Content strategy.", desc: "Topic clusters and blog calendars built around your target US audience's search behaviour." },
  { title: "Monthly reporting.", desc: "Clear rank tracking, organic traffic reports, and competitor analysis every month." },
];

export default function SEOPage() {
  return (
    <>
      <section className="bg-card pt-20 pb-16 px-6 border-b border-line">
        <div className="max-w-350 mx-auto">
          <Breadcrumb crumbs={[{ label: "Services", href: "/services" }, { label: "SEO & Digital Marketing" }]} />
          <p className="eyebrow mb-3">SEO & Digital Marketing</p>
          <h1 className="display-xl text-title mb-4 max-w-2xl">Rank higher on Google. Get found by US customers.</h1>
          <p className="text-[18px] leading-7 text-prose max-w-xl mb-8">
            Data-driven SEO strategies built specifically for the US market to increase organic traffic and qualified leads.
          </p>
          <Link href="/contact" className="h-12 px-7 inline-flex items-center rounded-full bg-[#171717] text-white dark:bg-white dark:text-[#171717] text-[15px] font-medium hover:opacity-85 transition-opacity">
            Get a free SEO audit
          </Link>
        </div>
      </section>

      <section className="bg-surface py-20 px-6">
        <div className="max-w-350 mx-auto">
          <h2 className="display-lg text-title mb-12 text-center">What we deliver.</h2>
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

      <section className="bg-invert py-20 px-6 text-center">
        <div className="max-w-350 mx-auto">
          <h2 className="display-lg text-on-invert mb-4">Start ranking. Start growing.</h2>
          <p className="text-[18px] text-[#888] mb-8">Get a free SEO audit of your current site.</p>
          <Link href="/contact" className="h-12 px-8 inline-flex items-center rounded-full bg-white text-[#171717] text-[16px] font-medium hover:bg-[#f0f0f0] transition-colors">
            Request free audit
          </Link>
        </div>
      </section>
    </>
  );
}
