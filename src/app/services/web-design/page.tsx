import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { SITE, siteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Web Design & Development Services",
  description: `Custom web design and development for US businesses. ${SITE.brandName} builds fast, high-converting websites that drive real results. Get a free quote.`,
  alternates: { canonical: siteUrl("/services/web-design") },
};

const steps = [
  { n: "01", title: "Discovery call.", desc: "We learn about your business, goals, and target audience. We'll recommend the right approach and scope." },
  { n: "02", title: "Design sprint.", desc: "Full design mockups within 5 business days. We iterate until every detail is right." },
  { n: "03", title: "Build & test.", desc: "We develop, cross-browser test, optimise performance, and set up analytics." },
  { n: "04", title: "Launch & handoff.", desc: "We go live, submit your sitemap to Google, and give you full ownership of the codebase." },
];

const includes = [
  "Custom design tailored to your brand",
  "Mobile-first, fully responsive layout",
  "Optimised for Google Core Web Vitals",
  "SEO meta tags and structured data",
  "Google Analytics 4 integration",
  "Contact forms with email notifications",
  "Hosting-ready deployment (Vercel / Netlify)",
  "30 days post-launch support",
];

export default function WebDesignPage() {
  return (
    <>
      <section className="bg-card pt-20 pb-16 px-6 border-b border-line">
        <div className="max-w-350 mx-auto">
          <Breadcrumb crumbs={[{ label: "Services", href: "/services" }, { label: "Web Design & Development" }]} />
          <p className="eyebrow mb-3">Web Design & Development</p>
          <h1 className="display-xl text-title mb-4 max-w-2xl">Websites built to convert US visitors into customers.</h1>
          <p className="text-[18px] leading-7 text-prose max-w-xl mb-8">
            Custom websites that look professional, load fast, and are built specifically for US audiences.
          </p>
          <Link href="/contact" className="h-12 px-7 inline-flex items-center rounded-full bg-[#171717] text-white dark:bg-white dark:text-[#171717] text-[15px] font-medium hover:opacity-85 transition-opacity">
            Get a free quote
          </Link>
        </div>
      </section>

      <section className="bg-surface py-20 px-6">
        <div className="max-w-350 mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="display-lg text-title mb-8">What&apos;s included.</h2>
            <ul className="flex flex-col gap-3">
              {includes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check size={15} className="text-link mt-0.5 shrink-0" />
                  <span className="text-[14px] leading-6 text-prose">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-invert rounded-xl p-8 shadow-card-lg">
            <p className="eyebrow text-[#555] mb-4">Starting from</p>
            <p className="display-xl text-on-invert mb-1">$997</p>
            <p className="text-[14px] text-[#888] mb-6">one-time, no hidden fees</p>
            <p className="text-[14px] leading-6 text-[#888] mb-8">
              Larger projects quoted individually based on scope and complexity.
            </p>
            <Link href="/contact" className="h-12 w-full flex items-center justify-center rounded-full bg-white text-[#171717] text-[15px] font-medium hover:bg-[#f0f0f0] transition-colors">
              Start your project
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-card py-20 px-6">
        <div className="max-w-350 mx-auto">
          <h2 className="display-lg text-title mb-12 text-center">How it works.</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {steps.map(({ n, title, desc }) => (
              <div key={n} className="bg-surface rounded-xl p-6 shadow-card">
                <p className="eyebrow mb-3">{n}</p>
                <h3 className="display-sm text-title mb-2">{title}</h3>
                <p className="text-[14px] leading-6 text-prose">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-invert py-20 px-6 text-center">
        <div className="max-w-350 mx-auto">
          <h2 className="display-lg text-on-invert mb-4">Ready to get a professional website?</h2>
          <p className="text-[18px] text-[#888] mb-8">We reply to every inquiry within 24 hours.</p>
          <Link href="/contact" className="h-12 px-8 inline-flex items-center rounded-full bg-white text-[#171717] text-[16px] font-medium hover:bg-[#f0f0f0] transition-colors">
            Get a free quote
          </Link>
        </div>
      </section>
    </>
  );
}
