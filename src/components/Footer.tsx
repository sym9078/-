import { Mail, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-zinc-900 bg-zinc-950">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="text-zinc-500 text-xs font-mono tracking-widest uppercase">
          © {new Date().getFullYear()} Shinyongmin. All rights reserved.
        </div>
        
        <div className="flex items-center gap-8">
          <a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm uppercase tracking-wider">Email</a>
          <a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm uppercase tracking-wider">LinkedIn</a>
          <a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm uppercase tracking-wider">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
