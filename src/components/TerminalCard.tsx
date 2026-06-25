"use client";

import { useEffect, useState, useCallback } from "react";

type SkillCategory = {
  id: string;
  label: string;
  key: string;
  var: string;
  tools: string[];
};

const categories: SkillCategory[] = [
  { id: "cicd", label: "CI/CD", key: "1", var: "CI_CD", tools: ["Jenkins", "GitLab CI", "GitHub Actions", "ArgoCD", "SonarQube"] },
  { id: "containers", label: "Containers", key: "2", var: "CONTAINERS", tools: ["Docker", "Kubernetes", "Docker Compose", "kind", "Helm"] },
  { id: "iac", label: "Infrastructure", key: "3", var: "INFRA", tools: ["Terraform", "Ansible", "Vagrant", "CloudFormation", "Packer"] },
  { id: "monitoring", label: "Monitoring", key: "4", var: "MONITORING", tools: ["Prometheus", "Grafana", "ELK Stack", "Datadog", "Loki"] },
  { id: "security", label: "Security", key: "5", var: "SECURITY", tools: ["SonarQube", "Trivy", "SAST", "HashiCorp Vault", "Policy as Code"] },
  { id: "languages", label: "Languages", key: "6", var: "LANGUAGES", tools: ["Python", "Bash", "JavaScript", "Go", "Groovy"] },
];

type Line = { type: "cmd"; text: string } | { type: "out"; text: string };

function buildScript(cat: SkillCategory): Line[] {
  const lines: Line[] = [];
  const hr = "────────────────────────────────────────";
  lines.push({ type: "cmd", text: `echo $${cat.var}` });
  lines.push({ type: "out", text: hr });
  lines.push({ type: "out", text: `>>> ${cat.label} TOOLKIT <<<` });
  lines.push({ type: "out", text: hr });
  cat.tools.forEach((t) => lines.push({ type: "out", text: `  ● ${t}` }));
  lines.push({ type: "out", text: hr });
  return lines;
}

export const TerminalCard = () => {
  const [lines, setLines] = useState<Line[]>([]);
  const [visibleIdx, setVisibleIdx] = useState(0);
  const [charPos, setCharPos] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [animating, setAnimating] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((c) => !c), 530);
    return () => clearInterval(blink);
  }, []);

  useEffect(() => {
    if (!animating) return;
    if (visibleIdx >= lines.length) { setAnimating(false); return; }
    const cur = lines[visibleIdx];
    if (charPos < cur.text.length) {
      const speed = cur.type === "cmd" ? 25 : 12;
      const t = setTimeout(() => setCharPos((p) => p + 1), speed);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => { setVisibleIdx((v) => v + 1); setCharPos(0); }, 180);
    return () => clearTimeout(t);
  }, [animating, visibleIdx, charPos, lines]);

  const getText = useCallback((i: number) => {
    if (i < visibleIdx) return lines[i].text;
    if (i === visibleIdx) return lines[i].text.slice(0, charPos);
    return null;
  }, [visibleIdx, charPos, lines]);

  const run = useCallback((cat: SkillCategory) => {
    setSelected(cat.label);
    setAnimating(true);
    setVisibleIdx(0);
    setCharPos(0);
    setHasStarted(true);
    setLines(buildScript(cat));
  }, []);

  const isDivider = (s: string) => s.startsWith("─");
  const isSection = (s: string) => s.startsWith(">>>");

  return (
    <div className="flex flex-col gap-[calc(20*var(--u))]">
      <div className="w-full border border-blue-500/20 bg-blue-950/40 shadow-[0_0_80px_rgba(0,0,242,0.12)] overflow-hidden">
        <div className="flex items-center gap-[calc(10*var(--u))] px-[calc(20*var(--u))] py-[calc(12*var(--u))] border-b border-blue-500/10 bg-blue-950/60">
          <span className="w-[calc(10*var(--u))] h-[calc(10*var(--u))] rounded-full bg-red-500/50"></span>
          <span className="w-[calc(10*var(--u))] h-[calc(10*var(--u))] rounded-full bg-yellow-500/50"></span>
          <span className="w-[calc(10*var(--u))] h-[calc(10*var(--u))] rounded-full bg-green-500/50"></span>
          <span className="hw-mono text-[0.55rem] tracking-wider opacity-30 ml-[calc(12*var(--u))]">toolstack@youssef:~$</span>
        </div>
        <div className="p-[calc(28*var(--u))] min-h-[clamp(18rem,30vw,28rem)] font-mono text-[max(calc(14*var(--u)),0.6rem)] leading-[1.7] tracking-normal normal-case">
          {!hasStarted ? (
            <div className="text-blue-200/60">
              <div className="text-blue-300/70 mb-[calc(12*var(--u))]">
                toolstack@youssef:~$ <span className="text-cyan-300/60">./env.sh</span>
              </div>
              <div className="text-blue-200/50">Set environment:</div>
              <div className="text-blue-200/40 mt-[calc(8*var(--u))]">
                <div>  [1] CI/CD</div>
                <div>  [2] Containers</div>
                <div>  [3] Infrastructure</div>
                <div>  [4] Monitoring</div>
                <div>  [5] Security</div>
                <div>  [6] Languages</div>
              </div>
              <span className={`inline-block w-[0.5em] h-[1.2em] bg-blue-400/70 ml-[0.05em] -mb-[0.05em] ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
            </div>
          ) : (
            <>
              {lines.map((_, i) => {
                const text = getText(i);
                if (text === null) return null;
                const line = lines[i];
                const isCurrent = i === visibleIdx;
                return (
                  <div key={i} className={
                    line.type === "cmd"
                      ? "text-cyan-300/70"
                      : isSection(line.text)
                        ? "text-cyan-300/90 font-bold"
                        : isDivider(line.text)
                          ? "text-blue-400/30"
                          : "text-blue-200/80"
                  }>
                    {line.type === "cmd" ? <span className="text-green-400/50">$ </span> : null}
                    {text}
                    {isCurrent ? (
                      <span className={`inline-block w-[0.5em] h-[1.2em] bg-blue-400/70 ml-[0.05em] -mb-[0.05em] ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
                    ) : null}
                  </div>
                );
              })}
              {!animating ? (
                <span className={`inline-block w-[0.5em] h-[1.2em] bg-blue-400/70 ml-[0.05em] -mb-[0.05em] ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
              ) : null}
            </>
          )}
        </div>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-[calc(8*var(--u))]">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => run(cat)}
            disabled={animating}
            className={`hw-mono text-[max(calc(11*var(--u)),0.55rem)] tracking-wider px-[calc(10*var(--u))] py-[calc(10*var(--u))] border transition-all duration-200 text-center ${
              selected === cat.label
                ? "border-blue-400/60 bg-blue-500/20 text-blue-200"
                : "border-blue-500/20 bg-blue-950/60 text-blue-300/60 hover:border-blue-400/40 hover:text-blue-200/80"
            } ${animating ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
          >
            <span className="text-blue-400/60">[{cat.key}]</span> {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
};
