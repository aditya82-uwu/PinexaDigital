export interface FAQItem {
  q: string;
  a: string;
}

/** Builds FAQPage JSON-LD for a page rendering these items via FAQAccordion. */
export function faqPageJsonLd(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}
