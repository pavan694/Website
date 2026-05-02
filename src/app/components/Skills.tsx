"use client";
import { useEffect, useRef } from "react";

const skillGroups = [
  {
    category: "Data & Analytics",
    icon: "◈",
    skills: [
      { name: "SQL", level: 92, note: "LeetCode + HackerRank: all solved" },
      { name: "Python (Pandas, NumPy)", level: 80, note: "EDA, automation, pipeline scripting" },
      { name: "Power BI", level: 85, note: "PL-300 candidate" },
      { name: "Advanced Excel", level: 90, note: "MIS dashboards, pivot analysis" },
      { name: "Looker Studio", level: 75, note: "GCP Analytics project" },
    ],
  },
  {
    category: "Platforms & Tools",
    icon: "◉",
    skills: [
      { name: "Salesforce CRM", level: 80, note: "200+ client data management" },
      { name: "BigQuery / GCP", level: 70, note: "Centralized sales pipeline project" },
      { name: "Google Sheets", level: 88, note: "Collaborative reporting" },
      { name: "GitHub", level: 78, note: "Portfolio & version control" },
    ],
  },
  {
    category: "Domain Knowledge",
    icon: "◐",
    skills: [
      { name: "Sales Operations", level: 88, note: "Quote-to-cash, RFQ, forecasting" },
      { name: "KPI Reporting", level: 90, note: "Weekly/monthly cadence delivery" },
      { name: "CRM Data Management", level: 85, note: "Segmentation, hygiene" },
      { name: "B2B Industrial Markets", level: 80, note: "Steel, Cement, Sugar sectors" },
    ],
  },
];

const certifications = [
  { name: "IBM Data Analytics Professional Certificate", org: "Coursera", year: "2026" },
  { name: "Microsoft Power BI (PL-300 Prep)", org: "Microsoft Learn / Udemy", year: "2025–26" },
  { name: "Sales Operations Foundations", org: "LinkedIn Learning", year: "2025" },
  { name: "Microsoft Azure Essentials", org: "Microsoft + LinkedIn", year: "2025" },
  { name: "Introduction to Data Analytics", org: "Coursera", year: "2025" },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
            // Animate skill bars
            e.target.querySelectorAll(".skill-bar-fill").forEach((el) => {
              (el as HTMLElement).style.opacity = "1";
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
    <section id="skills" ref={sectionRef} className="py-28 bg-[#0d0d0b] relative">
      <div className="absolute left-0 top-1/4 w-72 h-72 bg-amber-400/3 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-amber-400 tracking-widest uppercase">04 / Skills</span>
          <div className="flex-1 h-px bg-gradient-to-r from-amber-400/30 to-transparent" />
        </div>

        <div className="reveal mb-12">
          <h2 className="font-display font-700 text-4xl md:text-5xl text-white leading-tight">
            Full-stack analyst toolkit —<br />
            <span className="text-amber-400">query to dashboard.</span>
          </h2>
        </div>

        {/* Skill groups */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {skillGroups.map((group, gi) => (
            <div key={gi} className="reveal border border-[#242420] bg-[#111110] p-6">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-amber-400 text-base">{group.icon}</span>
                <span className="font-display font-600 text-sm text-white tracking-wide">{group.category}</span>
              </div>
              <div className="space-y-5">
                {group.skills.map((skill, si) => (
                  <div key={si}>
                    <div className="flex justify-between items-baseline mb-1.5">
                      <span className="font-mono text-xs text-slate-300">{skill.name}</span>
                      <span className="font-mono text-xs text-amber-400/60">{skill.level}%</span>
                    </div>
                    {/* Bar track */}
                    <div className="h-1 bg-[#242420] rounded-sm overflow-hidden relative">
                      <div
                        className="h-full bg-gradient-to-r from-amber-400 to-amber-300 rounded-sm skill-bar-fill"
                        style={{
                          width: `${skill.level}%`,
                          opacity: 0,
                          transition: "opacity 0.3s ease, width 1.2s cubic-bezier(0.22,1,0.36,1)",
                        }}
                      />
                    </div>
                    <div className="font-mono text-xs text-slate-600 mt-1">{skill.note}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="reveal border border-[#242420] bg-[#111110] p-7">
          <div className="font-mono text-xs text-slate-500 tracking-widest uppercase mb-5">Certifications & Credentials</div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((c, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 border border-[#1a1a17] hover:border-amber-400/20 transition-colors"
              >
                <span className="text-amber-400 text-xs mt-1 shrink-0">◈</span>
                <div>
                  <div className="font-body text-sm text-slate-200 leading-tight mb-1">{c.name}</div>
                  <div className="font-mono text-xs text-slate-500">{c.org} · {c.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LeetCode achievement */}
        <div className="reveal mt-6 p-5 border border-amber-400/20 bg-amber-400/5 flex items-center gap-4">
          <span className="text-amber-400 text-2xl">⚡</span>
          <div>
            <div className="font-display font-600 text-white text-sm">Solved all SQL problems on LeetCode and HackerRank</div>
            <div className="font-mono text-xs text-slate-400 mt-1">Complete SQL fluency — window functions, CTEs, subqueries, optimization</div>
          </div>
        </div>
      </div>
    </section>
  );
}
