/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="hermes-web" style={{ height: '100dvh', overflow: 'hidden' }}>
      <div className="hw-scroll" style={{ marginBottom: 0, height: '100dvh', overflow: 'hidden' }}>
        <nav className="absolute inset-x-0 top-[var(--hw-frame)] z-20 flex items-start justify-between px-[var(--hw-gutter)] pt-[calc(50*var(--u))]">
          <Link className="hw-mono text-[length:clamp(0.8rem,calc(22*var(--u)),1.35rem)] font-extrabold tracking-[0.03em] underline-offset-[0.3em] decoration-1 hover:underline py-[calc(14*var(--u))] -my-[calc(14*var(--u))] max-md:hidden" href="/">Home</Link>
          <span className="max-md:order-last"></span>
          <span className="max-md:order-first"></span>
          <span className="max-md:hidden"></span>
        </nav>

        <section className="pt-[calc(130*var(--u))] pb-[calc(40*var(--u))] px-[var(--hw-gutter)] flex flex-col items-center justify-center min-h-[100dvh]">
          <div className="flex flex-col gap-2 mb-8 text-center">
            <p className="hw-mono text-[length:var(--hw-text-eyebrow)] tracking-[0.18em] opacity-80">Contact</p>
            <h1 className="text-[clamp(2.5rem,4.2vw,5rem)] leading-none font-light">Get In Touch</h1>
          </div>

          <p className="hw-mono w-[calc(600*var(--u))] max-w-full text-[length:var(--hw-text-body)] leading-[1.4] opacity-70 mb-[calc(28*var(--u))] text-center">
            Have a question, project idea, or just want to say hi? Fill out the form below and I&apos;ll get back to you.
          </p>

          <div className="w-full flex justify-center">
            <ContactForm />
          </div>
        </section>

        <div className="hw-frame" aria-hidden="true"></div>
      </div>
    </div>
  );
}
