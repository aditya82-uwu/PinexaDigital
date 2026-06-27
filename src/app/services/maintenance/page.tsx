import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { SITE, siteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Website Maintenance & Support Plans",
  description: `Keep your website fast, secure, and up to date with ${SITE.brandName}'s monthly maintenance plans. Starting at $97/month.`,
  alternates: { canonical: siteUrl("/services/maintenance") },
};

const plans = [
  {
    name: "Basic",
    price: "$97",
    features: ["Monthly CMS/plugin updates", "Daily backups", "Uptime monitoring", "Security scanning", "Email support"],
    featured: false,
  },
  {
    name: "Pro",
    price: "$197",
    features: ["Everything in Basic", "Monthly performance report", "2 hours of content edits", "Priority email support", "Google Analytics review"],
    featured: true,
  },
  {
    name: "Agency",
    price: "$397",
    features: ["Everything in Pro", "5 hours of edits/month", "Dedicated Slack channel", "Monthly strategy call", "SEO health check"],
    featured: false,
  },
];

export default function MaintenancePage() {
  return (
    <>
      <section className="bg-card pt-20 pb-16 px-6 border-b border-line">
        <div className="max-w-350 mx-auto">
          <Breadcrumb crumbs={[{ label: "Services", href: "/services" }, { label: "Maintenance" }]} />
          <p className="eyebrow mb-3">Website Maintenance</p>
          <h1 className="display-xl text-title mb-4 max-w-2xl">Your website, always fast and always secure.</h1>
          <p className="text-[18px] leading-7 text-prose max-w-xl mb-8">
            Monthly plans so you never worry about security patches, plugin updates, or broken features.
          </p>
          <Link href="/contact" className="h-12 px-7 inline-flex items-center rounded-full bg-[#171717] text-white dark:bg-white dark:text-[#171717] text-[15px] font-medium hover:opacity-85 transition-opacity">
            See plans
          </Link>
        </div>
      </section>

      <section className="bg-surface py-20 px-6">
        <div className="max-w-350 mx-auto grid md:grid-cols-3 gap-4">
          {plans.map(({ name, price, features, featured }) => (
            <div
              key={name}
              className={`rounded-xl p-8 flex flex-col ${featured ? "bg-invert" : "bg-card shadow-card-lg"}`}
            >
              <p className="eyebrow mb-3">{name}</p>
              <div className="flex items-end gap-1.5 mb-6">
                <span className="display-xl text-title">{price}</span>
                <span className={`text-[14px] mb-2 ${featured ? "text-[#888]" : "text-faint"}`}>/month</span>
              </div>
              <ul className="flex flex-col gap-3 flex-1 mb-8">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[14px]">
                    <Check size={14} className={`mt-0.5 shrink-0 ${featured ? "text-emerald-400" : "text-link"}`} />
                    <span className={featured ? "text-[#d0d0d0]" : "text-prose"}>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`h-12 flex items-center justify-center rounded-full text-[15px] font-medium transition-colors ${
                  featured
                    ? "bg-white text-[#171717] hover:bg-[#f0f0f0]"
                    : "bg-invert text-on-invert hover:opacity-85"
                }`}
              >
                Get started
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-invert py-20 px-6 text-center">
        <div className="max-w-350 mx-auto">
          <h2 className="display-lg text-on-invert mb-4">Questions about maintenance?</h2>
          <p className="text-[18px] text-[#888] mb-8">We&apos;re happy to create a custom plan for your needs.</p>
          <Link href="/contact" className="h-12 px-8 inline-flex items-center rounded-full bg-white text-[#171717] text-[16px] font-medium hover:bg-[#f0f0f0] transition-colors">
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
}
