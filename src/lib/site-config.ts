import type { Metadata } from "next";

export const SITE = {
  brandName: "PinexaDigital",
  rootDomain: "www.pinexadigital.com",
  /** Apex domain (no "www."), used for demo subdomains like roofing.pinexadigital.com */
  baseDomain: "pinexadigital.com",
  emailContact: "contact@pinexadigital.com",
  emailSales: "sales@pinexadigital.com",
  phone: "+91 78198 32001",
  tagline: "We build websites that bring people in.",
  description:
    "Professional web design and development agency helping US businesses grow online with high-converting websites, SEO, and e-commerce solutions.",
} as const;

export function siteUrl(path: string = "") {
  return `https://${SITE.rootDomain}${path}`;
}

/** Per-page metadata with a real openGraph/twitter override, so a shared link preview reflects the actual page instead of falling back to the root layout's homepage defaults. */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = siteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: SITE.brandName,
      images: [{ url: "/logo.png", width: 512, height: 512, alt: `${SITE.brandName} Web Agency` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/logo.png"],
    },
  };
}
