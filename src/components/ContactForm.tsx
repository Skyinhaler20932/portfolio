"use client"

import { useState, FormEvent } from "react"

export default function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus("sending")

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contact",
          name,
          email,
          subject,
          message,
        }).toString(),
      })

      if (!res.ok) throw new Error()

      setStatus("sent")
      setName("")
      setEmail("")
      setSubject("")
      setMessage("")
    } catch {
      setStatus("error")
    }
  }

  return (
    <form onSubmit={handleSubmit} data-netlify="true" name="contact" className="w-full max-w-[calc(600*var(--u))] flex flex-col gap-[calc(20*var(--u))]">
      <input type="hidden" name="form-name" value="contact" />
      <div className="flex flex-col gap-[calc(8*var(--u))]">
        <label className="hw-mono text-[calc(14*var(--u))] tracking-[0.12em] opacity-60">NAME</label>
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-transparent border border-white/20 px-[calc(22*var(--u))] py-[calc(20*var(--u))] text-[calc(20*var(--u))] outline-none focus:border-white/60 transition-colors"
          placeholder="Your name"
        />
      </div>
      <div className="flex flex-col gap-[calc(8*var(--u))]">
        <label className="hw-mono text-[calc(14*var(--u))] tracking-[0.12em] opacity-60">EMAIL</label>
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-transparent border border-white/20 px-[calc(22*var(--u))] py-[calc(20*var(--u))] text-[calc(20*var(--u))] outline-none focus:border-white/60 transition-colors"
          placeholder="your@email.com"
        />
      </div>
      <div className="flex flex-col gap-[calc(8*var(--u))]">
        <label className="hw-mono text-[calc(14*var(--u))] tracking-[0.12em] opacity-60">SUBJECT</label>
        <input
          required
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full bg-transparent border border-white/20 px-[calc(22*var(--u))] py-[calc(20*var(--u))] text-[calc(20*var(--u))] outline-none focus:border-white/60 transition-colors"
          placeholder="What is this about?"
        />
      </div>
      <div className="flex flex-col gap-[calc(8*var(--u))]">
        <label className="hw-mono text-[calc(14*var(--u))] tracking-[0.12em] opacity-60">MESSAGE</label>
        <textarea
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full bg-transparent border border-white/20 px-[calc(22*var(--u))] py-[calc(20*var(--u))] text-[calc(20*var(--u))] outline-none focus:border-white/60 transition-colors resize-none"
          placeholder="Your message..."
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full hw-mono text-[calc(18*var(--u))] tracking-[0.15em] py-[calc(22*var(--u))] bg-white text-black font-bold hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        {status === "sending" ? "SENDING..." : status === "sent" ? "SENT ✓" : status === "error" ? "FAILED — TRY AGAIN" : "SEND MESSAGE"}
      </button>
    </form>
  )
}
