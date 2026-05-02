"use client";
import { useEffect, useRef } from "react";

const qualities = [
  { icon: "◈", label: "Analytical", desc: "Pattern recognition in noisy datasets" },
  { icon: "◉", label: "Builder", desc: "End-to-end pipelines, not just reports" },
  { icon: "◐", label: "Communicator", desc: "Insights that drive stakeholder action" },
];

export default function About() {
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
    <section id="about" ref={sectionRef} className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-amber-400 tracking-widest uppercase">01 / About</span>
          <div className="flex-1 h-px bg-gradient-to-r from-amber-400/30 to-transparent" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <div>
            <h2 className="reveal font-display font-700 text-4xl md:text-5xl text-white leading-tight mb-6">
              Engineering precision,<br />
              <span className="text-amber-400">data fluency.</span>
            </h2>
            <p className="reveal font-body text-slate-300 text-base leading-relaxed mb-5">
              My background is unconventional — Chemical Engineering teaches you to model complex systems, optimize processes, and extract signal from noise. Those same instincts drive my data work.
            </p>
            <p className="reveal font-body text-slate-400 text-base leading-relaxed mb-8">
              At Clair Engineers, I owned the entire analytics function for a 7-month stretch: maintaining CRM hygiene for 200+ industrial clients, building Excel MIS dashboards that tracked a ₹36 Cr RFQ pipeline, and generating the weekly forecasts the sales team actually used to plan deals. That experience hardened my conviction that clean data infrastructure and clear storytelling are inseparable.
            </p>
            <div className="reveal font-mono text-xs text-slate-500 flex flex-wrap gap-3">
              <span className="tag">SQL</span>
              <span className="tag">Python</span>
              <span className="tag">Power BI</span>
              <span className="tag">BigQuery</span>
              <span className="tag">Excel (Adv.)</span>
              <span className="tag">Looker Studio</span>
              <span className="tag">Salesforce CRM</span>
            </div>
          </div>

          {/* Qualities + ONGC highlight */}
          <div className="space-y-6">
            {qualities.map((q, i) => (
              <div
                key={i}
                className="reveal flex gap-4 p-5 border border-[#242420] bg-[#111110] hover:border-amber-400/20 transition-colors group"
              >
                <span className="text-amber-400 text-lg mt-0.5 group-hover:scale-110 transition-transform">{q.icon}</span>
                <div>
                  <div className="font-display font-600 text-white text-sm mb-1">{q.label}</div>
                  <div className="font-body text-slate-400 text-sm">{q.desc}</div>
                </div>
              </div>
            ))}

            {/* ONGC card */}
            <div className="reveal p-5 border border-[#242420] bg-[#0a0a08] scan-container">
              <div className="font-mono text-xs text-slate-500 tracking-widest uppercase mb-3">Internship Highlight</div>
              <div className="font-display font-600 text-white text-sm mb-1">ONGC Engineering Intern</div>
              <div className="font-body text-slate-400 text-sm leading-relaxed">
                Supported field engineering teams at Oil and Natural Gas Corporation — data collection, technical reporting, and analysis during active drilling operations. Built early habits around structured data capture under real-world constraints.
              </div>
              <div className="mt-3 font-mono text-xs text-amber-400/60">Jun 2023 – Jul 2023</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
