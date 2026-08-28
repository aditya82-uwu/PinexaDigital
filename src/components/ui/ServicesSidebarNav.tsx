import Link from "next/link";
import { Code2, Workflow, ShoppingBag, Search, ShieldCheck } from "lucide-react";

const services = [
  { title: "Web Design & Development", href: "/services/web-design", icon: Code2 },
  { title: "CRM Automation & Integration", href: "/services/crm-automation", icon: Workflow },
  { title: "E-commerce Solutions", href: "/services/ecommerce", icon: ShoppingBag },
  { title: "SEO", href: "/services/seo", icon: Search },
  { title: "Website Maintenance", href: "/services/maintenance", icon: ShieldCheck },
];

export default function ServicesSidebarNav({ currentHref }: { currentHref: string }) {
  return (
    <div>
      <p className="eyebrow mb-4">Our Services</p>
      <ul className="flex flex-col gap-2.5">
        {services.map(({ title, href, icon: Icon }) => {
          const active = href === currentHref;
          return (
            <li key={href}>
              <Link
                href={href}
                className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-[14px] font-medium transition-colors ${
                  active
                    ? "border-accent-solid/30 bg-accent-solid/8 text-accent-solid"
                    : "border-line text-prose hover:border-accent-solid/30 hover:bg-accent-solid/5 hover:text-title"
                }`}
              >
                <Icon size={16} className="shrink-0" />
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
