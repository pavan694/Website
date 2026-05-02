"use client";
import { useEffect, useRef } from "react";

const stats = [
  { value: "36Cr+", label: "RFQ Pipeline Managed" },
  { value: "200+", label: "CRM Clients Maintained" },
  { value: "3", label: "Markets Unified in GCP" },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    setTimeout(() => el.classList.add("visible"), 100);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden grid-bg">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-400/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Corner decoration */}
      <div className="absolute top-0 right-0 w-px h-40 bg-gradient-to-b from-transparent via-amber-400/30 to-transparent" />
      <div className="absolute top-0 right-0 w-40 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-px h-40 bg-gradient-to-t from-transparent via-amber-400/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-40 h-px bg-gradient-to-l from-transparent via-amber-400/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-20 w-full">
        {/* Status pill */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 border border-emerald-400/30 bg-emerald-400/5 mb-8"
          style={{ animation: "fadeIn 0.6s ease 0.2s both" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase">
            Open to opportunities
          </span>
        </div>

        {/* Headline */}
        <div ref={containerRef} className="reveal">
          <h1 className="font-display font-800 text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight mb-6">
            <span className="block text-white">Pavan</span>
            <span className="block text-white">Jinugu</span>
            <span className="block text-amber-400 mt-1 text-4xl md:text-5xl lg:text-6xl">
              Data Analyst
            </span>
          </h1>
        </div>

        {/* Tagline */}
        <p
          className="font-body text-slate-300 text-lg md:text-xl max-w-xl leading-relaxed mb-4"
          style={{ animation: "fadeUp 0.7s ease 0.4s both" }}
        >
          I turn messy pipelines into clean insights —{" "}
          <span className="text-amber-200">SQL queries, Python models, and Power BI dashboards</span>{" "}
          that give sales teams the edge to close faster.
        </p>

        <p
          className="font-mono text-xs text-slate-500 tracking-wide mb-10"
          style={{ animation: "fadeUp 0.7s ease 0.5s both" }}
        >
          B.Tech Chemical Engineering · NIT Warangal &nbsp;|&nbsp; PL-300 Candidate
        </p>

        {/* CTA */}
        <div
          className="flex flex-wrap gap-4 mb-20"
          style={{ animation: "fadeUp 0.7s ease 0.6s both" }}
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-amber-400 text-ink-950 font-display font-600 text-sm tracking-wide hover:bg-amber-300 transition-colors duration-200"
          >
            View My Work
          </a>
          <a
            href="https://github.com/Pavan"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 border border-[#2e2e29] text-slate-300 font-mono text-xs tracking-widest uppercase hover:border-amber-400/40 hover:text-amber-300 transition-all duration-200"
          >
            GitHub ↗
          </a>
          <a
            href="https://linkedin.com/in/Pavan"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 border border-[#2e2e29] text-slate-300 font-mono text-xs tracking-widest uppercase hover:border-amber-400/40 hover:text-amber-300 transition-all duration-200"
          >
            LinkedIn ↗
          </a>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-3 gap-px bg-[#1a1a17] border border-[#242420]"
          style={{ animation: "fadeUp 0.7s ease 0.75s both" }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-[#111110] px-6 py-5 group hover:bg-[#1a1a17] transition-colors"
            >
              <div className="font-display font-700 text-2xl md:text-3xl text-amber-400 stat-num" style={{ animationDelay: `${i * 0.1}s` }}>
                {s.value}
              </div>
              <div className="font-mono text-xs text-slate-500 mt-1 tracking-wide">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-mono text-xs text-slate-500 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-slate-500 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
