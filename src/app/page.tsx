import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { projects } from "@/lib/work";
import { TerminalCard } from "@/components/TerminalCard";
import { ParallaxPanel, ParallaxImage, ParallaxText } from "@/components/ParallaxPanel";
import CardCarousel from "@/components/CardCarousel";
import DevOpsLoop from "@/components/DevOpsLoop";

const expertise = [
  { num: "#1", title: "CI/CD", subtitle: "Pipelines That Deliver", desc: "Designing and implementing robust CI/CD pipelines that automate testing, building, and deployment across multiple environments. Every push becomes a confident release.", img: "https://hermes-agent.nousresearch.com/img/desktop/feature-connect.webp" },
  { num: "#2", title: "Containers", subtitle: "Containerization", desc: "Containerizing applications with Docker and orchestrating at scale with Kubernetes for consistent, portable deployments across any infrastructure.", img: "https://hermes-agent.nousresearch.com/img/desktop/feature-memory.webp" },
  { num: "#3", title: "Monitoring", subtitle: "Full Observability", desc: "Setting up comprehensive monitoring stacks with Prometheus, Grafana, and centralized logging for complete system visibility and proactive incident response.", img: "https://hermes-agent.nousresearch.com/img/desktop/feature-automation.webp" },
  { num: "#4", title: "IaC", subtitle: "Infrastructure as Code", desc: "Provisioning and managing infrastructure through code using Terraform, Ansible, and cloud-native tools for reproducible, version-controlled environments.", img: "https://hermes-agent.nousresearch.com/img/desktop/feature-tasks.webp" },
  { num: "#5", title: "Automation", subtitle: "Automate Everything", desc: "Automating repetitive tasks with Bash, Python, and modern automation frameworks to reduce toil, eliminate errors, and increase engineering velocity.", img: "https://hermes-agent.nousresearch.com/img/desktop/feature-browse.webp" },
  { num: "#6", title: "Security", subtitle: "Cloud & Security", desc: "Building secure, scalable cloud architectures with integrated security practices from SAST scanning to compliance automation and policy as code.", img: "https://hermes-agent.nousresearch.com/img/desktop/feature-sandbox.webp" },
];

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="hermes-web">
      <div className="hw-scroll" style={{ marginBottom: 0 }}>
        <nav className="absolute inset-x-0 top-[var(--hw-frame)] z-20 flex items-start justify-between px-[var(--hw-gutter)] pt-[calc(50*var(--u))]">
          <Link className="hw-mono text-[length:clamp(0.8rem,calc(22*var(--u)),1.35rem)] font-extrabold tracking-[0.03em] underline-offset-[0.3em] decoration-1 hover:underline py-[calc(14*var(--u))] -my-[calc(14*var(--u))] max-md:hidden" href="/work">Work</Link>
          <Link className="hw-mono text-[length:clamp(0.8rem,calc(22*var(--u)),1.35rem)] font-extrabold tracking-[0.03em] underline-offset-[0.3em] decoration-1 hover:underline py-[calc(14*var(--u))] -my-[calc(14*var(--u))] max-md:order-last" href="/blog">Blog</Link>
          <div className="flex flex-col items-center gap-[calc(16*var(--u))] leading-none">
            <Link className="text-center text-[length:clamp(1.1rem,calc(40*var(--u)),2.5rem)] font-extrabold tracking-[0.03em]" href="/">Youssef<br/>Moussa</Link>
            <span className="flex items-center gap-[calc(18*var(--u))]">
              <a aria-label="GitHub" className="opacity-70 transition-opacity duration-200 ease-out hover:opacity-100" href="https://github.com/Skyinhaler20932"><svg fill="currentColor" viewBox="0 0 24 24" className="block h-[max(calc(21*var(--u)),0.85rem)] w-[max(calc(27*var(--u)),1.1rem)] shrink-0"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg></a>
              <a aria-label="LinkedIn" className="opacity-70 transition-opacity duration-200 ease-out hover:opacity-100" href="https://www.linkedin.com/in/youssef-moussa-83397a358/"><svg fill="currentColor" viewBox="0 0 24 24" className="block h-[max(calc(21*var(--u)),0.85rem)] w-[max(calc(27*var(--u)),1.1rem)] shrink-0"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg></a>
            </span>
          </div>
          <a className="hw-mono text-[length:clamp(0.8rem,calc(22*var(--u)),1.35rem)] font-extrabold tracking-[0.03em] underline-offset-[0.3em] decoration-1 hover:underline py-[calc(14*var(--u))] -my-[calc(14*var(--u))] max-md:order-first" href="mailto:youssef.aboubaker8@gmail.com">Email</a>
          <a className="hw-mono text-[length:clamp(0.8rem,calc(22*var(--u)),1.35rem)] font-extrabold tracking-[0.03em] underline-offset-[0.3em] decoration-1 hover:underline py-[calc(14*var(--u))] -my-[calc(14*var(--u))] max-md:hidden" href="#expertise">Expertise <svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="inline-block align-middle shrink-0 max-w-[2rem] max-h-[2rem]"><path d="M7 7h10v10M7 17L17 7"/></svg></a>
        </nav>

        <header className="hw-vignette relative flex min-h-[calc(1360*var(--u))] overflow-x-clip max-md:min-h-[88dvh] max-md:items-end max-md:pb-[8dvh] md:items-start md:overflow-hidden md:pt-[calc(442*var(--u))]">
          <img className="hw-hero-art" width="1129" height="1418" src="https://hermes-agent.nousresearch.com/img/desktop/hero-art.webp" alt="" />
          <div className="relative z-3 mx-[var(--hw-gutter)] flex w-[calc(980*var(--u))] max-w-full min-w-0 flex-col gap-[calc(30*var(--u))] max-md:w-full md:ms-[calc(var(--hw-gutter)-var(--hw-frame))]">
            <p className="hw-mono text-[length:var(--hw-text-eyebrow)] tracking-[0.18em]">Open Source &bull; MIT License</p>
            <h1 className="flex max-w-full min-w-0 flex-col text-[calc(132*var(--u))] leading-[0.88] font-light tracking-[0.03em] max-md:text-[13.75vw]">
              <span>The DevOps</span>
              <span>Engineer That</span>
              <span>Grows With You</span>
            </h1>
            <p className="hw-mono w-[calc(780*var(--u))] max-w-full text-[length:var(--hw-text-body)] leading-[1.4] opacity-80">
              I design scalable infrastructures, automate workflows, and ensure reliable deployments that help teams move faster with confidence.
            </p>
            <div className="flex flex-wrap gap-[calc(15*var(--u))]">
              <a className="group relative inline-flex items-center px-[calc(30*var(--u))] py-[calc(20*var(--u))] bg-hermes-fg text-hermes shadow-[0_4px_14px_rgba(0,0,0,0.25)] transition-colors hover:bg-white" href="https://drive.google.com/uc?export=download&id=152MsjKHDUQecPAxqTVVbHD7VjyupZDdn">
                <span className="hw-mono text-[length:var(--hw-text-body)] leading-none">Download CV</span>
              </a>
              <a className="group relative inline-flex items-center px-[calc(30*var(--u))] py-[calc(20*var(--u))] border border-white/30 text-hermes-fg transition-colors hover:bg-white/5" href="https://www.linkedin.com/in/youssef-moussa-83397a358/">
                <span className="hw-mono text-[length:var(--hw-text-body)] leading-none">Let&apos;s Connect</span>
              </a>
            </div>
          </div>
        </header>

        <section className="relative z-1 px-[var(--hw-gutter)] pt-[calc(80*var(--u))] pb-[calc(120*var(--u))]">
          <div className="flex flex-col gap-2 mb-[calc(60*var(--u))]">
            <p className="hw-mono text-[length:var(--hw-text-eyebrow)] tracking-[0.18em] opacity-80">Interactive</p>
            <h2 className="text-[calc(72*var(--u))] leading-none font-light">Tool<br/>Stack</h2>
          </div>
          <TerminalCard />
        </section>

        <section className="hw-feature-panel pt-[calc(30*var(--u))]" id="expertise">
          <div className="flex absolute top-[calc(30*var(--u))] right-[calc(30*var(--u))] z-2">
            <span className="hw-mono border border-current px-[calc(15*var(--u))] py-[calc(10*var(--u))] text-[0.75rem] opacity-90">Expertise</span>
            <span className="hw-mono border border-current px-[calc(15*var(--u))] py-[calc(10*var(--u))] text-[0.75rem] opacity-90 border-l-0">Preview</span>
          </div>
          <div className="relative z-1 grid grid-cols-1 gap-x-[calc(30*var(--u))] gap-y-[calc(150*var(--u))] pt-[calc(60*var(--u))] pr-[calc(30*var(--u))] pl-[calc(150*var(--u))] max-md:gap-y-[calc(90*var(--u))] max-md:px-[var(--hw-gutter)] md:grid-cols-3">
            {expertise.map((f) => (
              <ParallaxPanel key={f.num} offset={100}>
                <article className="flex flex-col gap-[calc(60*var(--u))] text-left">
                  <ParallaxText offset={30}>
                    <div className="flex flex-col gap-[calc(50*var(--u))] pr-[calc(180*var(--u))] max-md:pr-0">
                      <p className="hw-mono text-[length:var(--hw-text-eyebrow)] tracking-[0.18em] opacity-80">{f.num} {f.title}</p>
                      <h2 className="w-[calc(486*var(--u))] max-w-full text-[calc(64*var(--u))] leading-none font-light">{f.subtitle}</h2>
                    </div>
                  </ParallaxText>
                  <ParallaxImage src={f.img} alt="" offset={150} className="hw-noise bg-hermes relative aspect-[666/574] overflow-hidden" />
                  <ParallaxText offset={-30}>
                    <p className="hw-mono pr-[calc(180*var(--u))] text-[length:var(--hw-text-body)] leading-[1.4] opacity-90 max-md:pr-0">{f.desc}</p>
                  </ParallaxText>
                </article>
              </ParallaxPanel>
            ))}
          </div>
          <div className="hw-feature-stop relative z-1 mt-[12rem] w-full overflow-clip max-md:mt-[4rem]">
            <Link
              href="/blog"
              className="block font-light leading-none text-center"
              style={{
                fontSize: "min(18vw, 14vh)",
                color: "#000",
                letterSpacing: "-0.02em",
                lineHeight: 0.85,
                opacity: 0.13,
                textShadow: "0 1px 0 rgba(255,255,255,0.3)",
              }}
            >
              BLOG
            </Link>
          </div>

          <div className="px-[var(--hw-gutter)] max-md:px-[var(--hw-gutter)]">
            <CardCarousel
              cards={posts.slice(0, 5).map((p) => ({
                title: p.title,
                description: p.excerpt,
                tags: p.tags,
                date: p.date,
                href: `/blog/${p.slug}`,
              }))}
              hideHeader
            />
            <div className="mt-[calc(20*var(--u))] text-center">
              <Link href="/blog" className="hw-mono text-[calc(14*var(--u))] tracking-[0.15em] underline underline-offset-[0.5em] decoration-1 opacity-60 hover:opacity-100 transition-opacity">
                All Blog →
              </Link>
            </div>
          </div>

          <div className="hw-feature-stop relative z-1 mt-[6rem] w-full overflow-clip max-md:mt-[3rem]">
            <Link
              href="/work"
              className="block font-light leading-none text-center"
              style={{
                fontSize: "min(18vw, 14vh)",
                color: "#000",
                letterSpacing: "-0.02em",
                lineHeight: 0.85,
                opacity: 0.13,
                textShadow: "0 1px 0 rgba(255,255,255,0.3)",
              }}
            >
              WORK
            </Link>
          </div>

          <div className="px-[var(--hw-gutter)] max-md:px-[var(--hw-gutter)] pb-[calc(40*var(--u))]">
            <CardCarousel
              cards={projects.map((p) => ({
                title: p.title,
                description: p.desc,
                tags: p.tags,
                href: p.link,
              }))}
              hideHeader
            />
            <div className="mt-[calc(24*var(--u))] text-center">
              <Link href="/work" className="hw-mono text-[calc(14*var(--u))] tracking-[0.15em] underline underline-offset-[0.5em] decoration-1 opacity-60 hover:opacity-100 transition-opacity">
                All Work →
              </Link>
            </div>
          </div>
        </section>

        <footer className="relative z-1 hw-vignette pt-[calc(80*var(--u))] pb-[calc(120*var(--u))] px-[var(--hw-gutter)] overflow-hidden border-t border-white/10">
          <div className="flex flex-col items-center text-center gap-[min(calc(36*var(--u)),3dvh)] max-w-[calc(980*var(--u))] mx-auto">
            <p className="hw-mono text-[length:var(--hw-text-eyebrow)] tracking-[0.18em]">Free &bull; Open Source &bull; MIT</p>
            <h2 className="text-[calc(112*var(--u))] leading-none font-light tracking-[0.03em] max-md:text-[2.6rem]">Let&apos;s Work Together</h2>
            <p className="hw-mono w-[calc(800*var(--u))] max-w-full text-[length:var(--hw-text-body)] leading-[1.4] opacity-90">
              Have a project in mind? Reach out and let&apos;s build something great.
            </p>
            <Link href="/contact" className="relative inline-flex items-center px-[calc(30*var(--u))] py-[calc(20*var(--u))] bg-hermes-fg text-hermes shadow-[0_4px_14px_rgba(0,0,0,0.25)] transition-colors hover:bg-white">
              <span className="hw-mono text-[length:var(--hw-text-body)] leading-none">Contact →</span>
            </Link>
          </div>
          <div className="flex justify-center mt-[calc(60*var(--u))]">
            <DevOpsLoop />
          </div>
          <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 mt-[calc(60*var(--u))] hw-mono text-[length:var(--hw-text-eyebrow)] leading-none opacity-50">
            <p>DevOps Engineer</p>
            <a href="/admin.html" className="underline underline-offset-4 hover:opacity-100 transition-opacity">Admin</a>
          </div>
        </footer>
      </div>
      <div className="hw-frame" aria-hidden="true"></div>
    </div>
  );
}
