"use client";
import { useEffect, useRef } from "react";

const experiences = [
  {
    company: "Clair Engineers Pvt. Ltd.",
    role: "Sales Analyst",
    period: "May 2025 – Nov 2025",
    location: "Hyderabad, India",
    type: "Full-time · 7 months",
    bullets: [
      "Designed and maintained Excel-based MIS dashboards tracking the full sales funnel — leads, RFQs, conversion rates, and revenue forecasts — across a ₹36 Cr pipeline.",
      "Rebuilt CRM database architecture for 200+ B2B clients (Steel, Cement, Sugar sectors), improving segmentation accuracy and pipeline prioritization velocity.",
      "Delivered weekly and monthly KPI reports and RFQ dashboards used directly by sales leadership for forecasting and capacity planning.",
      "Partnered with cross-functional teams to translate pipeline metrics into narrative insights, cutting reporting turnaround by ~40%.",
    ],
    stack: ["Excel", "Salesforce CRM", "Power BI", "SQL", "Google Sheets"],
  },
  {
    company: "Oil and Natural Gas Corporation (ONGC)",
    role: "Engineering Intern",
    period: "Jun 2023 – Jul 2023",
    location: "India",
    type: "Internship · 2 months",
    bullets: [
      "Embedded with field engineering teams during active drilling operations — structured data collection, process documentation, and technical reporting.",
      "Gained firsthand exposure to high-stakes, real-time data environments where accuracy and timeliness directly affect operational decisions.",
    ],
    stack: ["Technical Reporting", "Data Collection", "Process Documentation"],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
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
    <section id="experience" ref={sectionRef} className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-amber-400 tracking-widest uppercase">03 / Experience</span>
          <div className="flex-1 h-px bg-gradient-to-r from-amber-400/30 to-transparent" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-amber-400/40 via-amber-400/20 to-transparent hidden md:block ml-1" />

          <div className="space-y-12 md:pl-10">
            {experiences.map((exp, i) => (
              <div key={i} className="reveal relative">
                {/* Timeline dot */}
                <div className="absolute -left-10 top-1 w-2.5 h-2.5 rounded-full bg-amber-400 border-2 border-[#0a0a08] hidden md:block" style={{ left: "-2.75rem" }} />

                <div className="border border-[#242420] bg-[#111110] p-7 hover:border-amber-400/20 transition-all duration-300 group">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
                    <div>
                      <div className="font-display font-700 text-xl text-white mb-1">{exp.role}</div>
                      <div className="font-body text-amber-400 text-sm font-medium">{exp.company}</div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="font-mono text-xs text-slate-400 tracking-wide">{exp.period}</div>
                      <div className="font-mono text-xs text-slate-600 mt-1">{exp.type}</div>
                      <div className="font-mono text-xs text-slate-600">{exp.location}</div>
                    </div>
                  </div>

                  <div className="divider mb-5" />

                  {/* Bullets */}
                  <ul className="space-y-3 mb-6">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="text-amber-400 text-xs mt-1.5 shrink-0">▸</span>
                        <span className="font-body text-sm text-slate-300 leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((s) => (
                      <span key={s} className="tag">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Education node */}
            <div className="reveal relative">
              <div className="absolute -left-10 top-1 w-2.5 h-2.5 rounded-full border-2 border-amber-400/50 hidden md:block" style={{ left: "-2.75rem" }} />
              <div className="border border-[#1a1a17] bg-[#0d0d0b] p-6 hover:border-amber-400/10 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <div className="font-display font-600 text-base text-white mb-1">
                      B.Tech — Chemical Engineering
                    </div>
                    <div className="font-body text-amber-400/70 text-sm">National Institute of Technology, Warangal</div>
                    <div className="font-body text-slate-500 text-xs mt-1">One of India's premier technical institutions (NIT)</div>
                  </div>
                  <div className="font-mono text-xs text-slate-500">2021 – 2025</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
