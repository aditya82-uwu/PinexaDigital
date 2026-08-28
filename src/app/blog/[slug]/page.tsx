import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, Quote } from "lucide-react";
import { getPost, getRelatedPosts, getAllPosts, posts, type Block } from "@/lib/blog-data";
import { SITE, siteUrl } from "@/lib/site-config";
import Breadcrumb from "@/components/ui/Breadcrumb";
import PostCard from "@/components/ui/PostCard";
import Eyebrow from "@/components/ui/Eyebrow";

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
      images: [{ url: siteUrl(post.image) }],
    },
  };
}

/** Parses `[label](/internal/path)` markdown-style links inside block text into clickable internal links. */
function renderInline(text: string): ReactNode[] {
  const linkPattern = /\[([^\]]+)\]\((\/[a-z0-9-/]+)\)/g;
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = linkPattern.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
    parts.push(
      <Link
        key={`link-${key++}`}
        href={match[2]}
        className="text-link underline underline-offset-2 decoration-link/40 hover:decoration-link"
      >
        {match[1]}
      </Link>
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts;
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
                {renderInline(block.v)}
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="list-none mb-5 space-y-2">
                {block.v.map((item, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-[15px] leading-6 text-prose">
                    <span className="text-link mt-1 shrink-0 text-[12px]">▸</span>
                    <span>{renderInline(item)}</span>
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="mb-5 space-y-3">
                {block.v.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-[15px] leading-6 text-prose">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-link/10 text-link text-[12px] font-bold flex items-center justify-center mt-0.5">
                      {j + 1}
                    </span>
                    <span>{renderInline(item)}</span>
                  </li>
                ))}
              </ol>
            );
          case "note":
            return (
              <div key={i} className="relative bg-accent-solid/6 border-l-4 border-accent-solid rounded-r-xl pl-5 pr-5 py-5 my-8">
                <Quote size={18} className="text-accent-solid/50 mb-2" aria-hidden />
                <p className="text-[15px] leading-6 text-prose font-medium">{renderInline(block.v)}</p>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

/** Circular share-icon button using a text glyph rather than a brand SVG mark. */
function ShareIcon({ href, label, glyph }: { href: string; label: string; glyph: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-full border border-line bg-card flex items-center justify-center text-[13px] font-bold text-prose hover:border-accent-solid hover:text-accent-solid transition-colors"
    >
      {glyph}
    </a>
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

  const related = getRelatedPosts(slug);
  const morePosts = getAllPosts()
    .filter((p) => p.slug !== slug)
    .slice(0, 4);

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const postUrl = siteUrl(`/blog/${post.slug}`);
  const shareLinks = {
    x: `https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent(post.title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`,
  };

  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: siteUrl(post.image),
    url: postUrl,
    datePublished: post.date,
    dateModified: post.updatedAt ?? post.date,
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
    mainEntityOfPage: postUrl,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="bg-card pt-12 md:pt-20 pb-10 px-6 border-b border-line">
        <div className="max-w-350 mx-auto grid lg:grid-cols-[1fr_56px] gap-8">
          <div className="max-w-195">
            <Breadcrumb
              crumbs={[
                { label: "Blog", href: "/blog" },
                { label: post.title },
              ]}
            />
            <div className="flex items-center gap-3 mb-5">
              <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${post.accent}`}>
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-[13px] text-faint">
                <Clock size={13} />
                {post.readTime}
              </span>
            </div>
            <h1 className="display-xl text-title mb-6 leading-tight">{post.title}</h1>
            <p className="text-[18px] leading-7 text-prose mb-8">{post.excerpt}</p>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-linear-to-br from-[#0F4C3A] to-emerald-500 flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-[13px]">PD</span>
              </div>
              <div>
                <p className="text-[14px] font-semibold text-title">{SITE.brandName}</p>
                <p className="flex items-center gap-1.5 text-[12px] text-faint">
                  <Calendar size={11} />
                  {formattedDate}
                </p>
              </div>
            </div>
            {/*
              Mobile share row (rail is desktop-only): on its own line, not right-aligned,
              so it never lands in the same bottom-right screen corner as the fixed
              FloatingContact button regardless of scroll position.
            */}
            <div className="flex lg:hidden items-center gap-2 mt-4">
              <ShareIcon href={shareLinks.x} label="Share on X" glyph="X" />
              <ShareIcon href={shareLinks.linkedin} label="Share on LinkedIn" glyph="in" />
              <ShareIcon href={shareLinks.facebook} label="Share on Facebook" glyph="f" />
            </div>
          </div>

          {/* Desktop sticky share rail */}
          <div className="hidden lg:flex flex-col items-center gap-3 sticky top-28 h-fit">
            <ShareIcon href={shareLinks.x} label="Share on X" glyph="X" />
            <ShareIcon href={shareLinks.linkedin} label="Share on LinkedIn" glyph="in" />
            <ShareIcon href={shareLinks.facebook} label="Share on Facebook" glyph="f" />
          </div>
        </div>
      </section>

      {/* ── Featured image ── */}
      <section className="bg-card pb-16 px-6">
        <div className="max-w-350 mx-auto">
          <div className="rounded-3xl overflow-hidden shadow-card-lg">
            <Image
              src={post.image}
              alt={post.title}
              width={1600}
              height={1000}
              priority
              className="w-full object-cover max-h-125"
            />
          </div>
        </div>
      </section>

      {/* ── Content + sidebar ── */}
      <section className="bg-surface py-16 px-6">
        <div className="max-w-350 mx-auto grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 max-w-195">
            <BlockRenderer blocks={post.content} />
          </div>

          <div className="lg:sticky lg:top-24 flex flex-col gap-8">
            <div className="bg-card rounded-xl p-6 shadow-card">
              <Eyebrow className="mb-4">More articles</Eyebrow>
              <div className="flex flex-col gap-4">
                {morePosts.map((p) => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} className="group flex gap-3">
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0">
                      <Image src={p.image} alt={p.title} fill sizes="64px" className="object-cover" />
                    </div>
                    <div className="min-w-0">
                      <span className={`inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full mb-1 ${p.accent}`}>
                        {p.category}
                      </span>
                      <p className="text-[13px] font-semibold text-title leading-snug line-clamp-2 group-hover:text-link transition-colors">
                        {p.title}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-invert rounded-xl p-8 shadow-card-lg">
              <h3 className="display-sm text-on-invert mb-3">Ready to apply this?</h3>
              <p className="text-[14px] leading-6 text-[#888] mb-6">
                Tell us about your project and we&apos;ll follow up within 24 hours.
              </p>
              <Link
                href="/contact"
                className="h-12 w-full flex items-center justify-center rounded-full bg-white text-[#171717] text-[15px] font-medium hover:bg-[#f0f0f0] transition-colors"
              >
                Get a free quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Author bio ── */}
      <section className="bg-card py-10 px-6 border-t border-line">
        <div className="max-w-195 mx-auto flex items-start gap-5">
          <div className="w-12 h-12 rounded-full bg-linear-to-br from-[#0F4C3A] to-emerald-500 flex items-center justify-center shrink-0">
            <span className="text-white font-bold text-[14px]">PD</span>
          </div>
          <div>
            <p className="text-[15px] font-semibold text-title mb-1">{SITE.brandName}</p>
            <p className="text-[14px] leading-6 text-prose">
              Web design and SEO agency helping US businesses grow online. We write about web design, SEO, e-commerce, and digital growth for business owners who want honest, actionable information.
            </p>
          </div>
        </div>
      </section>

      {/* ── Related articles ── */}
      {related.length > 0 && (
        <section className="bg-surface py-16 px-6 border-t border-line">
          <div className="max-w-350 mx-auto">
            <Eyebrow className="mb-3">Keep reading</Eyebrow>
            <h2 className="display-lg text-title mb-8">Related articles.</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {related.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Back + CTA ── */}
      <section className="bg-surface py-16 px-6 border-t border-line">
        <div className="max-w-195 mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
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
            style={{ background: "linear-gradient(135deg, #0F4C3A 0%, #22C55E 100%)" }}
          >
            Get a free quote
          </Link>
        </div>
      </section>
    </>
  );
}
