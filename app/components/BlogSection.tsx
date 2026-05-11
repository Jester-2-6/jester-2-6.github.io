import Link from "next/link";
import { BLOG_POSTS } from "@/app/lib/blog";

export default function BlogSection() {
  const firstPost = BLOG_POSTS[0];

  return (
    <section id="blog" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1d1d1f] mb-2">
          <span className="text-[#0071e3] font-mono text-xl mr-3">06.</span>
          Blog
        </h2>
        <div className="w-24 h-0.5 bg-[#d2d2d7] mb-4" />
        <p className="text-[#6e6e73] mb-10 max-w-2xl">
          Writing about practical systems engineering, AI tooling, and research workflows.
        </p>

        <article className="group bg-[#f8f8fc] border border-[#ddddf5] rounded-2xl p-8 hover:border-[#0071e3]/40 hover:shadow-[0_8px_28px_rgba(0,0,0,0.08)] transition-all duration-300">
          <p className="text-xs font-mono text-[#0071e3] uppercase tracking-widest mb-3">
            {firstPost.date}
          </p>
          <h3 className="text-2xl font-bold text-[#1d1d1f] mb-4 group-hover:text-[#0071e3] transition-colors">
            {firstPost.title}
          </h3>
          <p className="text-[#1a1a1a] leading-relaxed mb-6 max-w-4xl">
            {firstPost.summary}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={`/blog/${firstPost.slug}`}
              className="relative overflow-hidden inline-flex items-center px-6 py-3 rounded-full bg-[#0071e3] border border-[#0071e3] shadow-[0_4px_20px_rgba(0,113,227,0.25)] text-white font-semibold hover:bg-[#0064c8] transition-all duration-200"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none" aria-hidden="true" />
              <span className="relative">Read Full Article</span>
            </Link>
            <Link
              href="/blog"
              className="relative overflow-hidden inline-flex items-center px-6 py-3 rounded-full bg-white border border-[#d2d2d7] shadow-[0_2px_8px_rgba(0,0,0,0.06)] text-[#1d1d1f] font-semibold hover:bg-[#f5f5f7] transition-all duration-200"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-b from-white/[0.06] to-transparent pointer-events-none" aria-hidden="true" />
              <span className="relative">View Blog Index</span>
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
