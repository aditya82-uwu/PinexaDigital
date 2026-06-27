import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SITE, siteUrl } from "@/lib/site-config";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Blog — Web Design & Business Growth Tips",
  description: `${SITE.brandName}'s blog — actionable tips on web design, SEO, e-commerce, and growing your business online in the US market.`,
  alternates: { canonical: siteUrl("/blog") },
};

const posts = [
  {
    slug: "how-much-does-a-website-cost",
    title: "How much does a website cost in 2025?",
    excerpt: "A transparent breakdown of web design pricing — from DIY builders to custom agencies — and how to decide what's right for your business.",
    date: "2025-06-01",
    readTime: "5 min read",
    category: "Web Design",
    accent: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    slug: "seo-for-small-business-us",
    title: "Local SEO for US small businesses: the complete guide.",
    excerpt: "Step-by-step tactics to rank your business on Google for local searches — Google Business Profile, citations, on-page SEO, and more.",
    date: "2025-05-15",
    readTime: "8 min read",
    category: "SEO",
    accent: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  },
  {
    slug: "shopify-vs-woocommerce-2025",
    title: "Shopify vs. WooCommerce in 2025: which should you choose?",
    excerpt: "An honest comparison for US businesses — pricing, performance, ownership, and which platform is right for your product and goals.",
    date: "2025-05-02",
    readTime: "6 min read",
    category: "E-commerce",
    accent: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  },
  {
    slug: "website-speed-optimization",
    title: "Why your slow website is costing you customers.",
    excerpt: "A 1-second delay reduces conversions by 7%. Here's how we optimise Core Web Vitals and what you can do right now.",
    date: "2025-04-18",
    readTime: "4 min read",
    category: "Performance",
    accent: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },
  {
    slug: "web-design-trends-us-2025",
    title: "Web design trends US businesses should use in 2025.",
    excerpt: "Clean minimalism, high-contrast CTAs, and trust signals — what's working for US audiences this year and why.",
    date: "2025-04-05",
    readTime: "5 min read",
    category: "Web Design",
    accent: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    slug: "contact-form-conversion-tips",
    title: "5 contact form tweaks that double your leads.",
    excerpt: "Small changes to your contact form — fewer fields, better copy, strategic placement — can dramatically increase the number of inquiries you receive.",
    date: "2025-03-20",
    readTime: "3 min read",
    category: "Conversion",
    accent: "bg-pink-500/10 text-pink-600 dark:text-pink-400",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-card pt-20 pb-16 px-6 text-center border-b border-line">
        <div className="max-w-350 mx-auto">
          <Breadcrumb crumbs={[{ label: "Blog" }]} />
          <p className="eyebrow mb-3">Blog</p>
          <h1 className="display-xl text-title mb-4">Insights for growing businesses.</h1>
          <p className="text-[18px] leading-7 text-prose max-w-lg mx-auto">
            Actionable tips on web design, SEO, and digital growth — written for US business owners.
          </p>
        </div>
      </section>

      <section className="bg-surface py-20 px-6">
        <div className="max-w-350 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-card rounded-xl p-6 shadow-card hover:shadow-card-lg transition-all flex flex-col"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${post.accent}`}>
                  {post.category}
                </span>
                <span className="text-[12px] text-faint">{post.readTime}</span>
              </div>
              <h2 className="display-sm text-title mb-3 group-hover:text-link transition-colors flex-1">
                {post.title}
              </h2>
              <p className="text-[14px] leading-6 text-prose mb-5">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <p className="text-[12px] text-faint">
                  {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </p>
                <ArrowRight size={14} className="text-link group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
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
