import { Mail, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-zinc-900 bg-zinc-950">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} AI Data Marketer Portfolio. All rights reserved.
        </div>
        
        <div className="flex items-center gap-6">
          <a href="#" className="text-zinc-400 hover:text-white transition-colors">
            <Mail className="w-5 h-5" />
          </a>
          <a href="#" className="text-zinc-400 hover:text-white transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="text-zinc-400 hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
