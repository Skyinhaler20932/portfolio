/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="hermes-web" style={{ minHeight: '100dvh' }}>
      <div className="hw-scroll" style={{ marginBottom: 0 }}>
        <nav className="absolute inset-x-0 top-[var(--hw-frame)] z-20 flex items-start justify-between px-[var(--hw-gutter)] pt-[calc(50*var(--u))]">
          <Link className="hw-mono text-[length:clamp(0.8rem,calc(22*var(--u)),1.35rem)] font-extrabold tracking-[0.03em] underline-offset-[0.3em] decoration-1 hover:underline py-[calc(14*var(--u))] -my-[calc(14*var(--u))]" href="/blog">← Blog</Link>
          <div className="flex flex-col items-center gap-[calc(16*var(--u))] leading-none">
            <Link className="text-center text-[length:clamp(1.1rem,calc(40*var(--u)),2.5rem)] font-extrabold tracking-[0.03em]" href="/">
              Youssef<br/>Moussa
            </Link>
          </div>
          <span></span>
        </nav>

        <article className="pt-[calc(200*var(--u))] pb-[calc(120*var(--u))] px-[var(--hw-gutter)]">
          <div className="max-w-3xl mx-auto">
            <div className="mb-10">
              <h1 className="text-[clamp(2rem,3.4vw,4rem)] leading-none font-light mt-6">{post.title}</h1>
              <div className="flex items-center gap-4 mt-4">
                <span className="hw-mono text-[length:var(--hw-text-eyebrow)] tracking-[0.18em] opacity-50">{post.date}</span>
                {post.tags && post.tags.length > 0 && (
                  <div className="flex gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="hw-mono text-[0.6rem] px-2 py-0.5 border border-white/20">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="hw-mono text-[length:var(--hw-text-body)] leading-[1.7] opacity-90 normal-case space-y-4 [&_a]:underline [&_a]:opacity-70 [&_a:hover]:opacity-100 [&_h2]:text-[calc(48*var(--u))] [&_h2]:font-bold [&_h2]:not-italic [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:normal-case [&_h3]:text-[calc(32*var(--u))] [&_h3]:font-bold [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:normal-case [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_code]:bg-black/30 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_pre]:bg-black/20 [&_pre]:border [&_pre]:border-white/10 [&_pre]:rounded-xl [&_pre]:p-4 [&_pre]:mb-4 [&_pre]:overflow-x-auto [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_blockquote]:border-l-4 [&_blockquote]:border-white/30 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:opacity-60 [&_blockquote]:mb-4 [&_p]:mb-4">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.content}
              </ReactMarkdown>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
