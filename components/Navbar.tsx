import Link from 'next/link';
import { Github, Linkedin, Mail, Activity } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg tracking-tight text-slate-100">
          <Activity className="w-5 h-5 text-indigo-400" />
          <span>Md Muntasir Hossain</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
          <Link href="/" className="hover:text-slate-100 transition-colors">Dashboard</Link>
          <Link href="/education" className="hover:text-slate-100 transition-colors">Education</Link>
          <Link href="/experience" className="hover:text-slate-100 transition-colors">Experience</Link>
          <Link href="/projects" className="hover:text-slate-100 transition-colors">Projects</Link>
          <Link href="/publications" className="hover:text-slate-100 transition-colors">Publications</Link>
        </nav>
        <div className="flex items-center gap-4">
          <a href="mailto:muntasir.hossain007@gmail.com" className="text-slate-400 hover:text-slate-100 transition-colors">
            <Mail className="w-5 h-5" />
            <span className="sr-only">Email</span>
          </a>
          <a href="https://github.com/Muhit1204" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-100 transition-colors">
            <Github className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://linkedin.com/in/mdmuntasirhossain98" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-100 transition-colors">
            <Linkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
    </header>
  );
}
