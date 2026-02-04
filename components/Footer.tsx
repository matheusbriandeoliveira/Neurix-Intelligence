
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-white/5 bg-black/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
        
        {/* Trust Banner */}
        <div className="w-full flex justify-center reveal">
          <div className="glass px-6 py-5 md:px-8 md:py-4 rounded-[32px] flex flex-col md:flex-row items-center gap-6 md:gap-8 border-white/10 shadow-2xl max-w-4xl w-full md:w-auto will-change-transform">
            
            {/* Avatars Group with Lazy Loading */}
            <div className="flex -space-x-3 shrink-0">
              {[...Array(5)].map((_, i) => (
                <img 
                  key={i} 
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 42}`} 
                  alt="Review User Avatar" 
                  className="w-10 h-10 md:w-11 md:h-11 rounded-full border-2 border-[#0a0a0a] bg-white/10"
                  loading="lazy"
                  width="44"
                  height="44"
                />
              ))}
              <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 border-2 border-[#0a0a0a] flex items-center justify-center text-[10px] md:text-xs font-black shadow-lg">
                +60k
              </div>
            </div>

            {/* Trust Text */}
            <p className="text-sm md:text-base font-medium text-gray-400 text-center md:text-left leading-snug max-w-sm md:max-w-md">
              <span className="text-white font-bold">+ de 60 mil empresas</span> confiam na tecnologia Neurix para automatizar seus atendimentos.
            </p>

            {/* Action Button */}
            <button className="w-full md:w-auto px-8 py-3 md:py-2 rounded-full bg-white/5 hover:bg-white/10 text-xs md:text-sm font-bold transition-all border border-white/5 hover:border-white/20 active:scale-95 whitespace-nowrap">
              Ver Cases
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 md:gap-6 border-t border-white/5 pt-12">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center shadow-lg">
              <span className="text-lg font-bold">N</span>
            </div>
            <div className="flex items-baseline">
              <span className="text-lg font-extrabold tracking-tight">Neurix Intelligence</span>
              <span className="text-lg font-extrabold text-purple-500">.</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-xs md:text-sm text-gray-500 font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
            <a href="#" className="hover:text-white transition-colors">Segurança</a>
            <a href="#" className="hover:text-white transition-colors">API</a>
          </div>
          
          <div className="text-[10px] md:text-xs text-gray-600 font-mono tracking-widest uppercase">
            © 2024 Neurix • Scale with Intelligence
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
