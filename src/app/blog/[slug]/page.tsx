import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { getPost, posts, type Block } from "@/lib/blog-data";
import { SITE, siteUrl } from "@/lib/site-config";
import Breadcrumb from "@/components/ui/Breadcrumb";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const metaTitle = post.seoTitle ?? post.title;
  const metaDescription = post.seoDescription ?? post.excerpt;
  return {
    title: metaTitle,
    description: metaDescription,
    alternates: { canonical: siteUrl(`/blog/${post.slug}`) },
    openGraph: {
      type: "article",
      title: metaTitle,
      description: metaDescription,
      url: siteUrl(`/blog/${post.slug}`),
      publishedTime: post.date,
    },
  };
}

function BlockRenderer({ blocks }: { blocks: Block[] }) {
  return (
    <div className="prose-content">
      {blocks.map((block, i) => {
        switch (block.t) {
          case "h2":
            return (
              <h2 key={i} className="text-[22px] font-bold text-title mt-10 mb-4 leading-snug">
                {block.v}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="text-[18px] font-semibold text-title mt-7 mb-3">
                {block.v}
              </h3>
            );
          case "p":
            return (
              <p key={i} className="text-[16px] leading-7 text-prose mb-5">
                {block.v}
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="list-none mb-5 space-y-2">
                {block.v.map((item, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-[15px] leading-6 text-prose">
                    <span className="text-link mt-1 shrink-0 text-[12px]">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="mb-5 space-y-3">
                {block.v.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-[15px] leading-6 text-prose">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[12px] font-bold flex items-center justify-center mt-0.5">
                      {j + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            );
          case "note":
            return (
              <div key={i} className="bg-blue-500/8 border border-blue-500/20 rounded-xl px-5 py-4 mb-5">
                <p className="text-[14px] leading-6 text-prose font-medium">{block.v}</p>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url: siteUrl(`/blog/${post.slug}`),
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: SITE.brandName,
      url: siteUrl(),
    },
    publisher: {
      "@type": "Organization",
      name: SITE.brandName,
      url: siteUrl(),
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl()}/logo.png`,
      },
    },
    mainEntityOfPage: siteUrl(`/blog/${post.slug}`),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="bg-card pt-20 pb-14 px-6 border-b border-line">
        <div className="max-w-[780px] mx-auto">
          <Breadcrumb
            crumbs={[
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
          />
          <div className="flex items-center gap-2 mb-5">
            <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${post.accent}`}>
              {post.category}
            </span>
          </div>
          <h1 className="display-xl text-title mb-6 leading-tight">{post.title}</h1>
          <p className="text-[18px] leading-7 text-prose mb-8">{post.excerpt}</p>
          <div className="flex items-center gap-5 text-[13px] text-faint">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} />
              {post.readTime}
            </span>
            <span>By {SITE.brandName}</span>
          </div>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="bg-surface py-16 px-6">
        <div className="max-w-[780px] mx-auto">
          <BlockRenderer blocks={post.content} />
        </div>
      </section>

      {/* ── Author bio ── */}
      <section className="bg-card py-10 px-6 border-t border-line">
        <div className="max-w-[780px] mx-auto flex items-start gap-5">
          <div className="w-12 h-12 rounded-full bg-linear-to-br from-blue-500 to-violet-500 flex items-center justify-center shrink-0">
            <span className="text-white font-bold text-[14px]">PD</span>
          </div>
          <div>
            <p className="text-[15px] font-semibold text-title mb-1">{SITE.brandName}</p>
            <p className="text-[14px] leading-6 text-prose">
              Web design and development agency helping US businesses grow online. We write about web design, SEO, e-commerce, and digital growth for business owners who want honest, actionable information.
            </p>
          </div>
        </div>
      </section>

      {/* ── Back + CTA ── */}
      <section className="bg-surface py-16 px-6 border-t border-line">
        <div className="max-w-[780px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-link hover:gap-3 transition-all"
          >
            <ArrowLeft size={14} />
            Back to all articles
          </Link>
          <Link
            href="/contact"
            className="h-11 px-6 inline-flex items-center rounded-full text-white text-[14px] font-medium hover:opacity-90 transition-opacity"
            style={{ background: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)" }}
          >
            Get a free quote
          </Link>
        </div>
      </section>
    </>
  );
}
