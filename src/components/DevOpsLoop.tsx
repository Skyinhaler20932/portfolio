"use client"

import { useEffect, useState } from "react"

const stages: { phase: string; tool: string }[] = [
  { phase: "PLAN", tool: "Jira" },
  { phase: "CODE", tool: "Git" },
  { phase: "BUILD", tool: "Docker" },
  { phase: "TEST", tool: "Selenium" },
  { phase: "RELEASE", tool: "Jenkins" },
  { phase: "DEPLOY", tool: "Kubernetes" },
  { phase: "OPERATE", tool: "Terraform" },
  { phase: "MONITOR", tool: "Prometheus" },
]

function toPoint(t: number) {
  const a = t * Math.PI * 2
  const scale = 120
  const x = scale * Math.sin(a) / (1 + Math.cos(a) * Math.cos(a))
  const y = scale * Math.sin(a) * Math.cos(a) / (1 + Math.cos(a) * Math.cos(a))
  return { x: 250 + x, y: 150 + y }
}

export default function DevOpsLoop() {
  const [index, setIndex] = useState(0)
  const [stageProgress, setStageProgress] = useState(0)

  useEffect(() => {
    const stageDuration = 4000
    const interval = 50
    const stepsPerStage = stageDuration / interval

    let step = 0

    const timer = setInterval(() => {
      step = (step + 1) % (stepsPerStage * stages.length)
      const idx = Math.floor(step / stepsPerStage) % stages.length
      const sp = (step % stepsPerStage) / stepsPerStage
      setIndex(idx)
      setStageProgress(sp)
    }, interval)

    return () => clearInterval(timer)
  }, [])

  const currentAngle = (index + stageProgress) / stages.length
  const dot = toPoint(currentAngle)

  const labelPositions = stages.map((_, i) => toPoint(i / stages.length))

  return (
    <div className="flex flex-col items-center gap-[calc(12*var(--u))] select-none w-full px-[var(--hw-gutter)]">
      <div className="flex flex-col items-center gap-[calc(2*var(--u))]">
        <span className="hw-mono text-[calc(10*var(--u))] tracking-[0.2em] opacity-50">CURRENT STAGE</span>
        <span className="text-[calc(38*var(--u))] font-bold tracking-[0.05em] text-purple-400">
          {stages[index].phase}
        </span>
        <span className="hw-mono text-[calc(22*var(--u))] tracking-[0.15em] opacity-80">
          {stages[index].tool}
        </span>
      </div>
      <svg
        viewBox="0 60 500 180"
        className="w-full h-auto"
        style={{ filter: "drop-shadow(0 0 30px rgba(255,255,255,0.05))" }}
      >
        <defs>
          <linearGradient id="infinityGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
        </defs>

        <path
          d="M 250 150 C 250 50, 100 50, 100 150 C 100 250, 250 250, 250 150 C 250 50, 400 50, 400 150 C 400 250, 250 250, 250 150"
          fill="none"
          stroke="url(#infinityGrad)"
          strokeWidth="4"
          strokeOpacity="0.3"
        />

        {labelPositions.map((pos, i) => {
          const isActive = i === index
          const next = (index + 1) % stages.length
          const prev = (index - 1 + stages.length) % stages.length
          const isNear = i === next || i === prev
          return (
            <g key={i}>
              <circle
                cx={pos.x}
                cy={pos.y}
                r={isActive ? 9 : isNear ? 6 : 4}
                fill={isActive ? "#a855f7" : "rgba(255,255,255,0.3)"}
                opacity={isActive ? 1 : isNear ? 0.5 : 0.2}
              />
              <text
                x={pos.x}
                y={pos.y + (pos.y < 150 ? -20 : 26)}
                textAnchor="middle"
                fill={isActive ? "#a855f7" : "rgba(255,255,255,0.4)"}
                fontSize={isActive ? "12" : "8"}
                fontWeight={isActive ? "700" : "400"}
                fontFamily="monospace"
                opacity={isActive ? 1 : isNear ? 0.5 : 0.15}
              >
                {stages[i].phase}
              </text>
              <text
                x={pos.x}
                y={pos.y + (pos.y < 150 ? -5 : 40)}
                textAnchor="middle"
                fill={isActive ? "#fff" : "rgba(255,255,255,0.3)"}
                fontSize={isActive ? "11" : "7"}
                fontFamily="monospace"
                fontWeight={isActive ? "600" : "400"}
                opacity={isActive ? 1 : isNear ? 0.4 : 0.1}
              >
                {stages[i].tool}
              </text>
            </g>
          )
        })}

        <circle
          cx={dot.x}
          cy={dot.y}
          r="10"
          fill="#a855f7"
          opacity="0.9"
        />
        <circle
          cx={dot.x}
          cy={dot.y}
          r="18"
          fill="none"
          stroke="#a855f7"
          strokeWidth="2.5"
          opacity="0.3"
        >
          <animate
            attributeName="r"
            values="18;26;18"
            dur="2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.3;0.1;0.3"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  )
}
