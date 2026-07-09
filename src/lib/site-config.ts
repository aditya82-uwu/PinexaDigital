export const SITE = {
  brandName: "PinexaDigital",
  rootDomain: "www.pinexadigital.com",
  emailContact: "contact@pinexadigital.com",
  emailSales: "sales@pinexadigital.com",
  phone: "+91 78198 32001",
  tagline: "We build websites that win clients.",
  description:
    "Professional web design and development agency helping US businesses grow online with high-converting websites, SEO, and e-commerce solutions.",
} as const;

export function siteUrl(path: string = "") {
  return `https://${SITE.rootDomain}${path}`;
}
