import Link from "next/link";
import { SITE } from "@/lib/site-config";

const cols = [
  {
    label: "SERVICES",
    links: [
      { label: "Web Design",  href: "/services/web-design" },
      { label: "CRM Automation", href: "/services/crm-automation" },
      { label: "E-commerce",  href: "/services/ecommerce" },
      { label: "Maintenance", href: "/services/maintenance" },
    ],
  },
  {
    label: "COMPANY",
    links: [
      { label: "About",     href: "/about" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Pricing",   href: "/pricing" },
      { label: "Blog",      href: "/blog" },
    ],
  },
  {
    label: "LEGAL",
    links: [
      { label: "Privacy Policy",   href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
  {
    label: "CONTACT",
    links: [
      { label: SITE.emailContact, href: `mailto:${SITE.emailContact}` },
      { label: SITE.emailSales,   href: `mailto:${SITE.emailSales}` },
      { label: SITE.phone,        href: `tel:${SITE.phone.replace(/\s/g, "")}` },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-line">
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {cols.map((col) => (
            <div key={col.label}>
              <p className="eyebrow mb-4">{col.label}</p>
              <ul className="flex flex-col gap-2">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-[14px] text-prose hover:text-title transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="font-display font-bold text-[15px] text-title">{SITE.brandName}</span>
          <p className="text-[12px] text-faint">
            © {new Date().getFullYear()} {SITE.brandName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
