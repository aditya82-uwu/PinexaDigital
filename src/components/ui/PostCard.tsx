import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Post } from "@/lib/blog-data";

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link
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
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <ArrowRight size={14} className="text-link group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
