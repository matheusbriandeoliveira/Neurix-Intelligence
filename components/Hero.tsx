
import React, { useState, useEffect } from 'react';
import { Bot, Mic, CheckCircle2 } from 'lucide-react';

const words = ["VENDEDOR", "ATENDENTE"];

const Typewriter: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 font-black">
      {words[index].substring(0, subIndex)}
      <span className="text-purple-500 animate-pulse">|</span>
    </span>
  );
};

const TypingBubble: React.FC<{ isRight?: boolean }> = ({ isRight }) => (
  <div className={`flex ${isRight ? 'flex-row-reverse' : 'flex-row'} items-start gap-2 opacity-0 animate-[messagePop_0.4s_ease_forwards]`} style={{ willChange: 'transform, opacity' }}>
    <div className="w-7 h-7 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/50 shrink-0">
      <Bot className="w-3.5 h-3.5 text-purple-400" />
    </div>
    <div className={`bg-purple-600/10 border border-purple-500/20 px-3 py-2 rounded-2xl ${isRight ? 'rounded-tr-none' : 'rounded-tl-none shadow-[0_0_10px_rgba(168,85,247,0.05)]'}`}>
      <div className="flex gap-1">
        <span className="w-1 h-1 bg-purple-400 rounded-full animate-[bounce_1s_infinite_0ms]" />
        <span className="w-1 h-1 bg-purple-400 rounded-full animate-[bounce_1s_infinite_200ms]" />
        <span className="w-1 h-1 bg-purple-400 rounded-full animate-[bounce_1s_infinite_400ms]" />
      </div>
    </div>
  </div>
);

const ChatSimulator: React.FC = () => {
  const [step, setStep] = useState(0);
  const totalSteps = 9;

  useEffect(() => {
    let delay = 2000;
    if (step === 0) delay = 1000;
    if (step === 2 || step === 4 || step === 7) delay = 3000;
    if (step === 3 || step === 5 || step === 8) delay = 2500;
    
    const timer = setTimeout(() => {
      setStep((prev) => (prev < totalSteps ? prev + 1 : prev));
    }, delay);

    if (step === totalSteps) {
      const resetTimer = setTimeout(() => setStep(0), 6000);
      return () => clearTimeout(resetTimer);
    }

    return () => clearTimeout(timer);
  }, [step]);

  return (
    <div className="w-full max-w-[360px] glass rounded-[32px] p-5 flex flex-col gap-3 overflow-hidden relative shadow-2xl min-h-[500px] will-change-transform mx-auto lg:mr-0">
      {/* Header compactado */}
      <div className="flex items-center gap-2 border-b border-white/10 pb-3 mb-1">
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-red-500/30" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/30" />
          <div className="w-2 h-2 rounded-full bg-green-500/30" />
        </div>
        <span className="ml-1 text-[9px] text-white/30 uppercase tracking-[0.2em] font-bold">IA Ativa • 24/7</span>
      </div>

      {step >= 1 && (
        <div className="flex flex-col items-start opacity-0 animate-[messagePop_0.5s_ease_forwards]" style={{ willChange: 'transform, opacity' }}>
          <div className="bg-blue-600/10 border border-blue-500/20 px-3 py-2.5 rounded-2xl rounded-tl-none flex flex-col gap-2 max-w-[85%]">
            <span className="text-[9px] block font-bold text-blue-400/80 uppercase tracking-tight">Cliente</span>
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                <Mic className="w-3.5 h-3.5 text-blue-400" />
              </div>
              <div className="flex gap-1 items-center h-3">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="wave-bar bg-blue-400/60" style={{ animationDelay: `${i * 0.08}s`, height: `${Math.random() * 8 + 4}px`, width: '2px' }} />
                ))}
              </div>
            </div>
            <p className="text-[10px] text-blue-100/60 italic leading-tight">
              "Oi! Vocês fazem limpeza de pele?"
            </p>
          </div>
        </div>
      )}

      {step === 2 && <TypingBubble isRight />}

      {step >= 3 && (
        <div className="flex flex-row-reverse items-start gap-2.5 opacity-0 animate-[messagePop_0.5s_ease_forwards]" style={{ willChange: 'transform, opacity' }}>
          <div className="w-7 h-7 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/40 shrink-0">
            <Bot className="w-3.5 h-3.5 text-purple-400" />
          </div>
          <div className="bg-purple-600/10 border border-purple-500/20 px-3.5 py-2 rounded-2xl rounded-tr-none text-[13px] leading-snug max-w-[85%] text-gray-200">
            Olá! Fazemos sim. Temos a limpeza profunda que é nossa especialidade. 🧴
          </div>
        </div>
      )}

      {step === 4 && <TypingBubble isRight />}

      {step >= 5 && (
        <div className="flex flex-row-reverse items-start gap-2.5 opacity-0 animate-[messagePop_0.5s_ease_forwards]" style={{ willChange: 'transform, opacity' }}>
          <div className="w-7 h-7 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/40 shrink-0">
            <Bot className="w-3.5 h-3.5 text-purple-400" />
          </div>
          <div className="bg-purple-600/10 border border-purple-500/20 px-3 py-1.5 rounded-2xl rounded-tr-none flex flex-col gap-1 w-full max-w-[80%]">
            <div className="flex items-center gap-2 flex-row-reverse w-full">
              <div className="flex gap-1 items-center h-4 flex-1 justify-end overflow-hidden">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="wave-bar bg-purple-400/60" style={{ animationDelay: `${i * 0.05}s`, height: `${Math.random() * 12 + 4}px`, width: '3px' }} />
                ))}
              </div>
            </div>
            <p className="text-[10px] text-purple-300/70 italic leading-tight text-right">
              "Para quinta-feira às 14h, pode ser?"
            </p>
          </div>
        </div>
      )}

      {step >= 6 && (
        <div className="flex flex-col items-start opacity-0 animate-[messagePop_0.5s_ease_forwards]" style={{ willChange: 'transform, opacity' }}>
          <div className="bg-blue-600/10 border border-blue-500/20 px-3.5 py-2 rounded-2xl rounded-tl-none text-[13px] text-gray-200">
            Pode sim! Às 14h fica ótimo.
          </div>
        </div>
      )}

      {step === 7 && <TypingBubble isRight />}

      {step >= 8 && (
        <div className="flex flex-row-reverse items-start gap-2.5 opacity-0 animate-[messagePop_0.5s_ease_forwards]" style={{ willChange: 'transform, opacity' }}>
          <div className="w-7 h-7 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/40 shrink-0">
            <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
          </div>
          <div className="bg-green-600/10 border border-green-500/20 px-3.5 py-2 rounded-2xl rounded-tr-none text-[13px] text-gray-200 shadow-[0_0_20px_rgba(34,197,94,0.1)]">
            Agendado! ✅ Reservei seu horário para quinta às 14h. Até lá!
          </div>
        </div>
      )}

      <style>{`
        @keyframes messagePop {
          0% { opacity: 0; transform: translateY(8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .wave-bar {
            background-color: currentColor;
            border-radius: 1px;
            animation: wave 1.2s ease-in-out infinite;
            will-change: height;
        }
        @keyframes wave {
            0%, 100% { height: 4px; }
            50% { height: 18px; }
        }
      `}</style>
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center">
        
        <div className="space-y-8 text-center lg:text-left">
          <div className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-[0.2em] text-purple-400 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
            Neurix Intelligence
          </div>
          
          <h1 className="reveal text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05]" style={{ transitionDelay: '100ms' }}>
            Clone seu melhor<br />
            <Typewriter /> <br />
            com IA
          </h1>
          
          <p className="reveal text-lg md:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed" style={{ transitionDelay: '200ms' }}>
            Tenha um agente com IA atendendo, agendando e vendendo 24/7 em diversos canais com total naturalidade.
          </p>
          
          <div className="reveal flex flex-col gap-6 items-center lg:items-start" style={{ transitionDelay: '300ms' }}>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a 
                href="https://wa.me/5514998200954"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg text-center glow-btn flex items-center justify-center gap-2 group transition-all"
              >
                Experimente Grátis
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
            
            <div className="max-w-xs space-y-3">
              <div className="h-px w-full bg-white/5" />
              <p className="text-xs md:text-sm font-medium text-white/40 tracking-tight">
                <span className="text-white font-bold tracking-tight">+ de 60 mil</span> empresas confiam na Neurix.
              </p>
            </div>
          </div>
        </div>

        <div className="reveal relative flex justify-center lg:justify-end" style={{ transitionDelay: '500ms' }}>
          <div className="absolute -z-10 w-[140%] h-[140%] bg-purple-600/5 rounded-full blur-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <ChatSimulator />
        </div>
      </div>
    </section>
  );
};

export default Hero;
