"use client";
import { useEffect, useRef } from "react";

const projects = [
  {
    num: "01",
    title: "Customer Purchase Behavior & Revenue Analysis",
    headline: "Identified the 20% of customers driving 60% of revenue.",
    description:
      "Performed end-to-end cohort and segmentation analysis on customer transaction history. Surfaced high-CLV segments and top-converting product lines, enabling the sales team to reprioritize outreach and improve close rates. Delivered an interactive Power BI dashboard tracking Revenue, CLV, and 90-day Retention in real-time.",
    stack: ["SQL", "Python", "Power BI", "Excel"],
    highlights: [
      "CLV segmentation across 5 customer tiers",
      "Interactive KPI dashboard — Revenue, Retention, Conversion",
      "Targeted segment insights for sales prioritization",
    ],
    featured: true,
    link: "https://github.com/pavan694",
    color: "amber",
  },
  {
    num: "02",
    title: "Sales Data Pipeline — GCP Analytics",
    headline: "Three markets, one source of truth.",
    description:
      "Architected a centralized analytics pipeline consolidating multi-region sales data from 3 markets into BigQuery. Automated ingestion with Python, built Looker Studio dashboards for real-time performance monitoring, and reduced cross-market reporting lag from days to hours.",
    stack: ["Python", "SQL", "BigQuery", "Looker Studio", "GCP"],
    highlights: [
      "Multi-region data consolidation across 3 markets",
      "Automated ingestion pipeline in Python",
      "Real-time Looker Studio dashboards for forecasting",
    ],
    featured: true,
    link: "https://github.com/pavan694",
    color: "emerald",
  },
];

const colorMap: Record<string, { border: string; text: string; bg: string; dot: string }> = {
  amber: {
    border: "hover:border-amber-400/30",
    text: "text-amber-400",
    bg: "bg-amber-400/5",
    dot: "bg-amber-400",
  },
  emerald: {
    border: "hover:border-emerald-400/30",
    text: "text-emerald-400",
    bg: "bg-emerald-400/5",
    dot: "bg-emerald-400",
  },
};

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-28 bg-[#0d0d0b] relative">
      {/* Background accent */}
      <div className="absolute right-0 top-1/2 w-96 h-96 bg-amber-400/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal flex items-center gap-4 mb-6">
          <span className="font-mono text-xs text-amber-400 tracking-widest uppercase">02 / Featured Work</span>
          <div className="flex-1 h-px bg-gradient-to-r from-amber-400/30 to-transparent" />
        </div>

        <div className="reveal mb-14">
          <h2 className="font-display font-700 text-4xl md:text-5xl text-white leading-tight">
            Projects that ship,<br />
            <span className="text-amber-400">not just notebooks.</span>
          </h2>
        </div>

        <div className="space-y-6">
          {projects.map((p) => {
            const c = colorMap[p.color];
            return (
              <div
                key={p.num}
                className={`reveal project-card border border-[#242420] ${c.border} bg-[#111110] p-8 md:p-10 cursor-pointer`}
                onClick={() => window.open(p.link, "_blank")}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  {/* Left: number + content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`font-mono text-xs ${c.text} tracking-widest opacity-60`}>{p.num}</span>
                      <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
                      <span className={`font-mono text-xs ${c.text} tracking-widest uppercase`}>Featured</span>
                    </div>

                    <h3 className="font-display font-700 text-xl md:text-2xl text-white mb-2 leading-tight">
                      {p.title}
                    </h3>
                    <p className={`font-body text-base ${c.text} mb-4 font-medium`}>{p.headline}</p>
                    <p className="font-body text-slate-400 text-sm leading-relaxed mb-6">{p.description}</p>

                    {/* Stack */}
                    <div className="flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <span key={s} className="tag">{s}</span>
                      ))}
                    </div>
                  </div>

                  {/* Right: highlights */}
                  <div className={`md:w-72 ${c.bg} border border-[#242420] p-5 shrink-0`}>
                    <div className="font-mono text-xs text-slate-500 tracking-widest uppercase mb-4">Key Outputs</div>
                    <ul className="space-y-3">
                      {p.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className={`${c.text} text-xs mt-1 shrink-0`}>→</span>
                          <span className="font-body text-sm text-slate-300">{h}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 pt-4 border-t border-[#242420]">
                      <span className={`font-mono text-xs ${c.text} tracking-wide`}>View on GitHub ↗</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* GitHub CTA */}
        <div className="reveal mt-10 flex items-center justify-center">
          <a
            href="https://github.com/pavan694"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs text-slate-500 tracking-widest uppercase hover:text-amber-300 transition-colors border border-[#242420] hover:border-amber-400/30 px-6 py-3"
          >
            View All Projects on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
