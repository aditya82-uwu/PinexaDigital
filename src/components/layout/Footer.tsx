import Link from "next/link";
import { SITE } from "@/lib/site-config";
import DottedWaveBackground from "@/components/ui/DottedWaveBackground";

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
      { label: SITE.phone,        href: `https://wa.me/${SITE.phone.replace(/[^\d]/g, "")}` },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-contrast overflow-hidden">
      <DottedWaveBackground />
      <div className="relative max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {cols.map((col) => (
            <div key={col.label}>
              <p className="eyebrow mb-4 text-on-contrast-faint">{col.label}</p>
              <ul className="flex flex-col gap-2">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      target={l.href.startsWith("http") ? "_blank" : undefined}
                      rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-[14px] text-on-contrast-faint hover:text-on-contrast transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border-contrast flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="font-display font-bold text-[15px] text-on-contrast">{SITE.brandName}</span>
          <p className="text-[12px] text-on-contrast-faint">
            © {new Date().getFullYear()} {SITE.brandName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
