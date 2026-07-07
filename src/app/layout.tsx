import type { Metadata } from "next";
import { Jost, Outfit } from "next/font/google";
import "./globals.css";
import { SITE, siteUrl } from "@/lib/site-config";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ThemeProvider from "./ThemeProvider";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: {
    default: `${SITE.brandName} — Web Design & Development Agency`,
    template: `%s | ${SITE.brandName}`,
  },
  description: SITE.description,
  keywords: [
    "web design agency",
    "web development",
    "US web design",
    "website design for small business",
    "ecommerce development",
    "CRM automation",
    "PinexaDigital",
  ],
  authors: [{ name: SITE.brandName, url: siteUrl() }],
  creator: SITE.brandName,
  publisher: SITE.brandName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl(),
    siteName: SITE.brandName,
    title: `${SITE.brandName} — Web Design & Development Agency`,
    description: SITE.description,
    images: [{ url: "/logo.png", width: 512, height: 512, alt: `${SITE.brandName} — Web Agency` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.brandName} — Web Design & Development Agency`,
    description: SITE.description,
    images: ["/logo.png"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: { canonical: siteUrl() },
  verification: {
    google: "vC6GILrYuOPS48p8dTs985v-muH8FNf-BE4hSIWRc60",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl()}/#website`,
      url: siteUrl(),
      name: SITE.brandName,
      publisher: { "@id": `${siteUrl()}/#organization` },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl()}/#organization`,
      name: SITE.brandName,
      url: siteUrl(),
      description: SITE.description,
      telephone: SITE.phone,
      email: SITE.emailContact,
      priceRange: "$$",
      areaServed: { "@type": "Country", name: "United States" },
      serviceType: ["Web Design", "Web Development", "CRM Automation", "E-commerce"],
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl()}/logo.png`,
        width: 512,
        height: 512,
      },
      sameAs: [
        "https://www.linkedin.com/in/pinexa-digital-064059420",
        "https://www.instagram.com/pinexadigital/",
      ],
      // aggregateRating and review removed until we have real, verifiable client reviews —
      // fabricated review schema violates Google's structured data policy and FTC endorsement guides.
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jost.variable} ${outfit.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-screen antialiased">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
