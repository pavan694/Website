"use client";
import { useEffect, useRef } from "react";

const links = [
  {
    label: "Email",
    value: "pavanjinugu123@gmail.com",
    href: "mailto:pavanjinugu123@gmail.com",
    icon: "✉",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/pavanjinugu",
    href: "https://linkedin.com/in/pavanjinugu-81571822a",
    icon: "◈",
  },
  {
    label: "GitHub",
    value: "github.com/Pavan",
    href: "https://github.com/Pavan",
    icon: "◉",
  },
  {
    label: "Phone",
    value: "+91 9676042905",
    href: "tel:+919676042905",
    icon: "◐",
  },
];

export default function Contact() {
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
    <section id="contact" ref={sectionRef} className="py-28 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-amber-400 tracking-widest uppercase">05 / Contact</span>
          <div className="flex-1 h-px bg-gradient-to-r from-amber-400/30 to-transparent" />
        </div>

        <div className="max-w-2xl">
          <h2 className="reveal font-display font-800 text-5xl md:text-6xl text-white leading-none mb-4">
            Let's build<br />
            <span className="text-amber-400">something smart.</span>
          </h2>
          <p className="reveal font-body text-slate-400 text-base leading-relaxed mb-12">
            I'm actively seeking Data Analyst roles — full-time or contract. If you have data that needs to become decisions, let's talk.
          </p>

          {/* Contact cards */}
          <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {links.map((l, i) => (
              <a
                key={i}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center gap-4 p-5 border border-[#242420] bg-[#111110] hover:border-amber-400/30 hover:bg-[#1a1a17] transition-all duration-200 group"
              >
                <span className="text-amber-400 text-lg w-5 shrink-0 group-hover:scale-110 transition-transform">{l.icon}</span>
                <div>
                  <div className="font-mono text-xs text-slate-500 tracking-widest uppercase mb-1">{l.label}</div>
                  <div className="font-body text-sm text-slate-200 group-hover:text-amber-300 transition-colors truncate">{l.value}</div>
                </div>
                <span className="ml-auto text-slate-600 group-hover:text-amber-400 transition-colors text-xs">↗</span>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="reveal">
            <a
              href="mailto:pavanjinugu123@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-amber-400 text-[#0a0a08] font-display font-700 text-sm tracking-wide hover:bg-amber-300 transition-colors duration-200"
            >
              <span>Start a Conversation</span>
              <span className="text-lg">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
