export default function Footer() {
  return (
    <footer className="border-t border-[#1a1a17] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span className="font-mono text-xs text-slate-500">Pavan Jinugu</span>
          <span className="font-mono text-xs text-slate-700">/ Data Analyst · Hyderabad, India</span>
        </div>
        <div className="font-mono text-xs text-slate-600">
          Built with Next.js · {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}
