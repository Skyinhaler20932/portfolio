"use client"

import { useRef } from "react"
import Link from "next/link"

export type CarouselCard = {
  title: string
  description: string
  tags?: string[]
  date?: string
  href: string
}

export default function CardCarousel({
  cards,
  label,
  title,
  hideHeader,
}: {
  cards: CarouselCard[]
  label?: string
  title?: string
  hideHeader?: boolean
}) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return
    const amount = scrollRef.current.clientWidth * 0.75
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    })
  }

  return (
    <div className="pt-[calc(50*var(--u))]">
      {!hideHeader && (
        <div className="flex items-end justify-between mb-[calc(20*var(--u))]">
          <div>
            <p className="hw-mono text-[length:var(--hw-text-eyebrow)] tracking-[0.18em] opacity-70">
              {label}
            </p>
            <h3 className="text-[calc(36*var(--u))] leading-none font-light mt-[calc(6*var(--u))]">
              {title}
            </h3>
          </div>
          <div className="flex gap-[calc(6*var(--u))] max-md:hidden">
            <button
              onClick={() => scroll("left")}
              className="w-[calc(32*var(--u))] h-[calc(32*var(--u))] flex items-center justify-center border border-current/20 hover:border-current/60 transition-colors text-[calc(16*var(--u))] opacity-50 hover:opacity-100"
              aria-label="Scroll left"
            >
              ←
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-[calc(32*var(--u))] h-[calc(32*var(--u))] flex items-center justify-center border border-current/20 hover:border-current/60 transition-colors text-[calc(16*var(--u))] opacity-50 hover:opacity-100"
              aria-label="Scroll right"
            >
              →
            </button>
          </div>
        </div>
      )}

      <div
        ref={scrollRef}
        className="flex gap-[calc(16*var(--u))] overflow-x-auto scroll-smooth snap-x snap-mandatory pb-[calc(12*var(--u))] hw-hide-scrollbar"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="snap-start shrink-0 w-[clamp(18rem,44vw,26rem)] p-[calc(28*var(--u))] border border-current/10 hover:border-current/30 transition-colors bg-hermes/[0.03] flex flex-col gap-[calc(14*var(--u))] group"
          >
            {card.tags && card.tags.length > 0 && (
              <div className="flex flex-wrap gap-[calc(6*var(--u))]">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="hw-mono text-[0.55rem] px-[calc(8*var(--u))] py-[calc(4*var(--u))] border border-current/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <h4 className="text-[calc(22*var(--u))] leading-[1.15] font-bold group-hover:opacity-70 transition-opacity">
              {card.title}
            </h4>
            <p className="hw-mono text-[max(calc(10*var(--u)),0.5rem)] leading-[1.4] opacity-65 flex-1 line-clamp-3">
              {card.description}
            </p>
            {card.date && (
              <div className="hw-mono text-[0.55rem] tracking-wider opacity-45 mt-auto pt-[calc(8*var(--u))]">
                {card.date}
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  )
}
