import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { SITE, siteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "E-commerce Development Services",
  description: `Custom e-commerce stores built for US markets. ${SITE.brandName} builds Shopify, WooCommerce, and custom stores that convert visitors into buyers.`,
  alternates: { canonical: siteUrl("/services/ecommerce") },
};

const platforms = [
  {
    name: "Shopify",
    desc: "Ideal for product-based businesses. Fast setup, great ecosystem, and built-in US payment processing.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    name: "WooCommerce",
    desc: "Perfect for businesses that want full control and already run on WordPress.",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    name: "Custom",
    desc: "Next.js + Stripe for businesses that need unique functionality, maximum performance, and zero platform fees.",
    gradient: "from-blue-500 to-cyan-500",
  },
];

const features = [
  "US payment gateway integration (Stripe, PayPal, Apple Pay)",
  "Mobile-optimised checkout flow",
  "Product filtering and search",
  "Inventory and order management",
  "Abandoned cart recovery",
  "SEO-optimised product pages",
];

export default function EcommercePage() {
  return (
    <>
      <section className="bg-card pt-20 pb-16 px-6 border-b border-line">
        <div className="max-w-350 mx-auto">
          <Breadcrumb crumbs={[{ label: "Services", href: "/services" }, { label: "E-commerce" }]} />
          <p className="eyebrow mb-3">E-commerce</p>
          <h1 className="display-xl text-title mb-4 max-w-2xl">Online stores built to sell to US customers.</h1>
          <p className="text-[18px] leading-7 text-prose max-w-xl mb-8">
            E-commerce experiences optimised for the US market — fast checkout, familiar payment methods, and mobile-first design.
          </p>
          <Link href="/contact" className="h-12 px-7 inline-flex items-center rounded-full bg-[#171717] text-white dark:bg-white dark:text-[#171717] text-[15px] font-medium hover:opacity-85 transition-opacity">
            Discuss your store
          </Link>
        </div>
      </section>

      <section className="bg-surface py-20 px-6">
        <div className="max-w-350 mx-auto">
          <h2 className="display-lg text-title mb-12 text-center">Choose your platform.</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-16">
            {platforms.map(({ name, desc, gradient }) => (
              <div key={name} className="bg-card rounded-xl p-8 shadow-card-lg text-center">
                <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${gradient} flex items-center justify-center mx-auto mb-5`}>
                  <span className="text-white font-bold text-[13px]">{name[0]}</span>
                </div>
                <h3 className="display-md text-title mb-3">{name}</h3>
                <p className="text-[14px] leading-6 text-prose">{desc}</p>
              </div>
            ))}
          </div>

          <h2 className="display-lg text-title mb-8 text-center">Every store includes.</h2>
          <div className="grid sm:grid-cols-2 gap-3 max-w-190 mx-auto">
            {features.map((f) => (
              <div key={f} className="flex items-start gap-3 bg-card rounded-lg p-4 shadow-card">
                <span className="text-link mt-0.5 shrink-0">✓</span>
                <span className="text-[14px] leading-6 text-prose">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-invert py-20 px-6 text-center">
        <div className="max-w-350 mx-auto">
          <h2 className="display-lg text-on-invert mb-4">Ready to launch your store?</h2>
          <p className="text-[18px] text-[#888] mb-8">Tell us about your products and we&apos;ll recommend the best platform.</p>
          <Link href="/contact" className="h-12 px-8 inline-flex items-center rounded-full bg-white text-[#171717] text-[16px] font-medium hover:bg-[#f0f0f0] transition-colors">
            Start your store
          </Link>
        </div>
      </section>
    </>
  );
}
