
import React, { memo } from 'react';
import { MessageSquare } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-black/10 border-b border-white/5 transform-gpu">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center shadow-lg transform-gpu">
          <span className="text-xl font-bold tracking-tighter">N</span>
        </div>
        <div className="flex items-baseline">
          <span className="text-xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Neurix
          </span>
          <span className="text-xl font-extrabold text-purple-500">.</span>
        </div>
      </div>
      
      <a 
        href="https://wa.me/5514998200954"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition-colors group"
      >
        <span className="hidden sm:inline">Falar no WhatsApp</span>
        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all transform-gpu">
          <MessageSquare className="w-4 h-4" />
        </div>
      </a>
    </nav>
  );
};

export default memo(Navbar);
