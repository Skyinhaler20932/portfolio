/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="hermes-web" style={{ minHeight: '100dvh' }}>
      <div className="hw-scroll" style={{ marginBottom: 0 }}>
        <nav className="absolute inset-x-0 top-[var(--hw-frame)] z-20 flex items-start justify-between px-[var(--hw-gutter)] pt-[calc(50*var(--u))]">
          <Link className="hw-mono text-[length:clamp(0.8rem,calc(22*var(--u)),1.35rem)] font-extrabold tracking-[0.03em] underline-offset-[0.3em] decoration-1 hover:underline py-[calc(14*var(--u))] -my-[calc(14*var(--u))] max-md:hidden" href="/">Home</Link>
          <span className="max-md:order-last"></span>
          <div className="flex flex-col items-center gap-[calc(16*var(--u))] leading-none">
            <Link className="text-center text-[length:clamp(1.1rem,calc(40*var(--u)),2.5rem)] font-extrabold tracking-[0.03em]" href="/">
              Youssef<br/>Moussa
            </Link>
          </div>
          <span className="max-md:order-first"></span>
          <span className="max-md:hidden"></span>
        </nav>

        <section className="pt-[calc(200*var(--u))] pb-[calc(120*var(--u))] px-[var(--hw-gutter)]">
          <div className="flex flex-col gap-2 mb-16">
            <p className="hw-mono text-[length:var(--hw-text-eyebrow)] tracking-[0.18em] opacity-80">Blog</p>
            <h1 className="text-[clamp(2.5rem,4.2vw,5rem)] leading-none font-light">All Posts</h1>
          </div>

          {posts.length === 0 ? (
            <div className="py-20 text-center">
              <p className="hw-mono text-[length:var(--hw-text-body)] opacity-50">No posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--hw-gap)]">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col gap-4 p-6 bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] transition-colors"
                >
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span key={tag} className="hw-mono text-[0.6rem] px-2 py-0.5 border border-white/20">{tag}</span>
                      ))}
                    </div>
                  )}
                  <h2 className="font-serif text-lg font-bold leading-snug group-hover:opacity-70 transition-opacity">{post.title}</h2>
                  {post.excerpt && (
                    <p className="hw-mono text-[0.65rem] leading-relaxed opacity-70 line-clamp-3">{post.excerpt}</p>
                  )}
                  <div className="mt-auto pt-2 flex items-center justify-between hw-mono text-[0.55rem] tracking-wider opacity-50">
                    <span>{post.date}</span>
                    <span className="group-hover:opacity-100 transition-opacity">Read →</span>
                  </div>
                </Link>
              ))}
            </div>
          )}

          <div className="mt-12 text-center">
            <Link href="/" className="group relative inline-flex items-center px-[calc(30*var(--u))] py-[calc(20*var(--u))] border border-white/30 text-hermes-fg transition-colors hover:bg-white/5">
              <span className="hw-mono text-[length:var(--hw-text-body)] leading-none">← Home</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
