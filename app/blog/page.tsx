import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { BLOG_POSTS } from "@/app/lib/blog";

export default function BlogIndexPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 px-6">
        <section className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] mb-4">
            Blog
          </h1>
          <div className="w-24 h-0.5 bg-[#d2d2d7] mb-6" />
          <p className="text-[#6e6e73] max-w-2xl mb-12">
            Long-form writing on systems engineering, AI workflows, and technical research execution.
          </p>

          <div className="grid gap-6">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="group bg-[#f8f8fc] border border-[#ddddf5] rounded-2xl p-8 hover:border-[#0071e3]/40 hover:shadow-[0_8px_28px_rgba(0,0,0,0.08)] transition-all duration-300"
              >
                <p className="text-xs font-mono text-[#0071e3] uppercase tracking-widest mb-3">
                  {post.date}
                </p>
                <h2 className="text-2xl font-bold text-[#1d1d1f] mb-4 group-hover:text-[#0071e3] transition-colors">
                  {post.title}
                </h2>
                <p className="text-[#1a1a1a] leading-relaxed mb-6 max-w-4xl">
                  {post.summary}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-[#0071e3] font-semibold hover:underline"
                >
                  Read full article →
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
