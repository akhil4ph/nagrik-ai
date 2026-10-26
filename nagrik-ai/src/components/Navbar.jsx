import { FaGithub } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi2';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-600/20 p-2 rounded-lg border border-indigo-500/30">
            <HiSparkles className="w-5 h-5 text-indigo-400" />
          </div>
          <span className="font-bold text-lg text-slate-100 tracking-tight">Nagrik-Ai</span>
          <span className="text-xs bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-2 py-0.5 rounded-full font-medium">
            Beta 
          </span>
        </div>

        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-sm text-slate-400 hover:text-slate-100 transition-colors border border-slate-800 px-3 py-1.5 rounded-lg hover:border-slate-700 bg-slate-900/50"
        >
          <FaGithub className="w-4 h-4" />
          <span className="hidden sm:inline">GitHub</span>
        </a>
      </div>
    </header>
  );
}