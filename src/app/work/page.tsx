/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { projects } from "@/lib/work";

export default function WorkPage() {
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
            <p className="hw-mono text-[length:var(--hw-text-eyebrow)] tracking-[0.18em] opacity-80">Projects</p>
            <h1 className="text-[clamp(2.5rem,4.2vw,5rem)] leading-none font-light">All Work</h1>
          </div>

          {projects.length === 0 ? (
            <div className="py-20 text-center">
              <p className="hw-mono text-[length:var(--hw-text-body)] opacity-50">No projects yet. Check back soon!</p>
            </div>
          ) : (
            <div className="flex flex-col gap-[calc(60*var(--u))]">
              {projects.map((p) => (
                <article key={p.title} className="group hw-noise relative flex flex-col lg:flex-row lg:items-center gap-[calc(40*var(--u))] p-[calc(40*var(--u))] border border-white/10 bg-white/[0.02] overflow-hidden">
                  <div className="flex-1 flex flex-col gap-[calc(30*var(--u))] z-10">
                    <div>
                      <div className="flex flex-wrap gap-2 mb-[calc(16*var(--u))]">
                        {p.tags.map((tag) => (
                          <span key={tag} className="hw-mono text-[0.6rem] px-[calc(10*var(--u))] py-[calc(5*var(--u))] border border-white/20">{tag}</span>
                        ))}
                      </div>
                      <h2 className="text-[calc(48*var(--u))] leading-none font-light">{p.title}</h2>
                    </div>
                    <p className="hw-mono text-[length:var(--hw-text-body)] leading-[1.4] opacity-80">{p.desc}</p>
                    <a className="relative inline-flex items-center px-[calc(30*var(--u))] py-[calc(20*var(--u))] bg-hermes-fg text-hermes shadow-[0_4px_14px_rgba(0,0,0,0.25)] transition-colors hover:bg-white w-fit" href={p.link}>
                      <span className="hw-mono text-[length:var(--hw-text-body)] leading-none">View Project</span>
                    </a>
                  </div>
                  <div className="flex-shrink-0 w-full lg:w-[clamp(15rem,28vw,30rem)] relative overflow-hidden rounded-lg">
                    <div className="aspect-[16/10] bg-hermes/30 flex items-center justify-center border border-white/10">
                      <span className="hw-mono text-[length:var(--hw-text-eyebrow)] opacity-30">Screenshot</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          <div className="mt-12 text-center">
            <Link href="/" className="group relative inline-flex items-center px-[calc(30*var(--u))] py-[calc(20*var(--u))] border border-white/30 text-hermes-fg transition-colors hover:bg-white/5">
              <span className="hw-mono text-[length:var(--hw-text-body)] leading-none">← Home</span>
            </Link>
          </div>
        </section>

        <footer className="relative z-1 hw-vignette pt-[calc(80*var(--u))] pb-[calc(120*var(--u))] px-[var(--hw-gutter)] overflow-hidden border-t border-white/10">
          <div className="flex flex-col items-center text-center gap-[min(calc(36*var(--u)),3dvh)] max-w-[calc(980*var(--u))] mx-auto">
            <p className="hw-mono text-[length:var(--hw-text-eyebrow)] tracking-[0.18em]">Free &bull; Open Source &bull; MIT</p>
            <h2 className="text-[calc(112*var(--u))] leading-none font-light tracking-[0.03em] max-md:text-[2.6rem]">Hire Me</h2>
            <p className="hw-mono w-[calc(800*var(--u))] max-w-full text-[length:var(--hw-text-body)] leading-[1.4] opacity-90">
              Whether it&apos;s containerization with Docker and Kubernetes, automation with Ansible and Terraform, or building robust CI/CD pipelines — I&apos;m here to help your team reach the next level.
            </p>
            <a className="relative inline-flex items-center px-[calc(30*var(--u))] py-[calc(20*var(--u))] bg-hermes-fg text-hermes shadow-[0_4px_14px_rgba(0,0,0,0.25)] transition-colors hover:bg-white" href="https://forms.gle/hdSDMZZdEZPp2QLz5">
              <span className="hw-mono text-[length:var(--hw-text-body)] leading-none">Get In Touch</span>
            </a>
          </div>
          <div aria-hidden="true" className="hw-ghost pointer-events-none select-none text-center mt-[calc(60*var(--u))]" style={{ fontSize: 'min(calc(400*var(--u)),20dvh)', fontWeight: 300, lineHeight: '.8' }}>
            <span>Youssef Moussa</span>
          </div>
          <img className="pointer-events-none select-none mx-auto mt-[calc(40*var(--u))] max-md:hidden" src="https://hermes-agent.nousresearch.com/img/desktop/portal-figure.webp" alt="" style={{ height: 'clamp(15rem,40dvh,30rem)', width: 'auto' }} />
          <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 mt-[calc(60*var(--u))] hw-mono text-[length:var(--hw-text-eyebrow)] leading-none opacity-50">
            <p>DevOps Engineer</p>
            <p>MIT License &bull; 2025</p>
          </div>
        </footer>
      </div>
      <div className="hw-frame" aria-hidden="true"></div>
    </div>
  );
}
