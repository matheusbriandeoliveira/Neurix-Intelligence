
import React, { useState } from 'react';
import { Play } from 'lucide-react';

const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "S3qfh6bfI74";

  return (
    <section className="py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        <h2 className="reveal text-3xl md:text-5xl font-bold tracking-tight">
          Assista à <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">Neurix Intelligence</span> em ação
        </h2>
        
        <div className="reveal relative" style={{ transitionDelay: '150ms' }}>
          {/* Background decoration */}
          <div className="absolute inset-0 bg-purple-600/5 rounded-[32px] blur-3xl -z-10" />
          
          <div className="relative w-full aspect-video rounded-[32px] overflow-hidden glass border-white/10 shadow-2xl bg-[#050505] will-change-transform">
            {!isPlaying ? (
              /* Custom Preview Overlay with our specific branding */
              <div 
                className="absolute inset-0 w-full h-full cursor-pointer group"
                onClick={() => setIsPlaying(true)}
                aria-label="Play Video"
              >
                <img 
                  src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`} 
                  alt="Assista à demonstração da Neurix"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300 scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-purple-600/90 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 will-change-transform z-10 relative">
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </div>
                  {/* Pulse ripple effect */}
                  <div className="absolute w-20 h-20 rounded-full bg-purple-500/40 animate-ping pointer-events-none" />
                </div>
                
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/90 text-sm font-bold uppercase tracking-[0.3em] bg-black/60 px-8 py-3 rounded-full backdrop-blur-xl border border-white/10 group-hover:bg-purple-600/40 transition-colors">
                  PLAY DEMO
                </div>
              </div>
            ) : (
              /* Actual Video Embed with controls restored */
              <iframe 
                width="100%" 
                height="100%" 
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&rel=0&modestbranding=1`} 
                title="Demonstração Neurix Intelligence" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
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
