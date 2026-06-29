import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { siteUrl } from "@/lib/site-config";

export interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  const all: Crumb[] = [{ label: "Home", href: "/" }, ...crumbs];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.label,
      ...(crumb.href ? { item: siteUrl(crumb.href) } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    <nav aria-label="Breadcrumb" className="mb-5">
      <ol className="flex items-center flex-wrap gap-y-1">
        {all.map((crumb, i) => {
          const isLast = i === all.length - 1;
          return (
            <li key={crumb.label} className="flex items-center">
              {i > 0 && <ChevronRight size={12} className="mx-1.5 text-faint shrink-0" />}
              {!isLast && crumb.href ? (
                <Link href={crumb.href} className="text-[12px] text-faint hover:text-prose transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-[12px] text-prose font-medium">{crumb.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
    </>
  );
}
