import type { Metadata } from "next";
import { SITE, siteUrl } from "@/lib/site-config";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: `Web Design Agency for US Businesses | ${SITE.brandName}`,
  description: SITE.description,
  alternates: { canonical: siteUrl() },
  robots: { index: true, follow: true },
};

export default function Home() {
  return <HomeClient />;
}
