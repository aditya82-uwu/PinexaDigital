import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SITE, siteUrl } from "@/lib/site-config";
import Breadcrumb from "@/components/ui/Breadcrumb";
import PostCard from "@/components/ui/PostCard";
import { posts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog | Web Design & Business Growth Tips",
  description: `${SITE.brandName}'s blog offers actionable tips on web design, SEO, e-commerce, and growing your business online in the US market.`,
  alternates: { canonical: siteUrl("/blog") },
};

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "PinexaDigital Blog",
  url: siteUrl("/blog"),
  description: `${SITE.brandName}'s blog offers actionable tips on web design, SEO, e-commerce, and growing your business online in the US market.`,
  publisher: {
    "@type": "ProfessionalService",
    name: SITE.brandName,
    url: siteUrl(),
  },
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />

      <section className="bg-card pt-20 pb-16 px-6 text-center border-b border-line">
        <div className="max-w-350 mx-auto">
          <Breadcrumb crumbs={[{ label: "Blog" }]} />
          <p className="eyebrow mb-3">Blog</p>
          <h1 className="display-xl text-title mb-4">Insights for growing businesses.</h1>
          <p className="text-[18px] leading-7 text-prose max-w-lg mx-auto">
            Actionable tips on web design, SEO, and digital growth, written for US business owners.
          </p>
        </div>
      </section>

      <section className="bg-surface py-20 px-6">
        <div className="max-w-350 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <section className="bg-invert py-20 px-6 text-center">
        <div className="max-w-350 mx-auto">
          <h2 className="display-lg text-on-invert mb-4">Ready to apply these insights?</h2>
          <p className="text-[18px] text-[#888] mb-8">Let&apos;s talk about your project.</p>
          <Link href="/contact" className="h-12 px-8 inline-flex items-center gap-2 rounded-full bg-white text-[#171717] text-[16px] font-medium hover:bg-[#f0f0f0] transition-colors">
            Get a free quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
