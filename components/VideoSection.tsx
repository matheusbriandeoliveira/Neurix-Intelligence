
import React, { useState } from 'react';
import { Play } from 'lucide-react';

const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        <h2 className="reveal text-3xl md:text-5xl font-bold tracking-tight">
          Assista à <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">Neurix Intelligence</span> em ação
        </h2>
        
        <div className="reveal relative" style={{ transitionDelay: '150ms' }}>
          {/* Background decoration with low complexity */}
          <div className="absolute inset-0 bg-purple-600/5 rounded-[32px] blur-3xl -z-10" />
          
          <div className="relative w-full aspect-video rounded-[32px] overflow-hidden glass border-white/10 shadow-2xl bg-[#050505] will-change-transform">
            {!isPlaying ? (
              /* Performance: Static Thumbnail with Lazy Loading */
              <div 
                className="absolute inset-0 w-full h-full cursor-pointer group"
                onClick={() => setIsPlaying(true)}
                aria-label="Play Video"
              >
                <img 
                  src="https://img.youtube.com/vi/Xkye7OaQFMU/maxresdefault.jpg" 
                  alt="Assista à demonstração da Neurix"
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-purple-600/90 text-white flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-200 will-change-transform">
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-xs font-bold uppercase tracking-widest bg-black/40 px-6 py-2 rounded-full backdrop-blur-md">
                  Clique para assistir
                </div>
              </div>
            ) : (
              /* Actual Iframe: Loaded only when user requests */
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/Xkye7OaQFMU?si=LE-vFqgLTBjUmBIl&autoplay=1" 
                title="Demonstração Neurix Intelligence" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                loading="lazy"
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
