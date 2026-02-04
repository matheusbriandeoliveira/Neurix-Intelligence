
import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';

const GuaranteeSection: React.FC = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-12 text-gray-900 relative overflow-hidden border-t border-gray-100">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Massive Static "7" */}
          <div className="reveal flex justify-center lg:justify-end">
            <div className="text-[15rem] md:text-[22rem] lg:text-[26rem] font-black bg-clip-text text-transparent bg-gradient-to-br from-purple-600 to-blue-500 select-none leading-[0.8] drop-shadow-2xl">
              7
            </div>
          </div>

          {/* Right Column: Info & Action */}
          <div className="reveal space-y-8 text-center lg:text-left" style={{ transitionDelay: '200ms' }}>
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-black tracking-tight text-black leading-tight">
                Dias de Teste.<br className="hidden lg:block" /> 
                <span className="relative inline-block lg:ml-2">
                  Risco Zero.
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-purple-200 -z-10 animate-[expand_1.5s_ease-out_forwards]"></span>
                </span>
              </h2>
              
              <div className="space-y-6 text-lg md:text-xl text-gray-600 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
                <p>
                  Temos total confiança na capacidade da nossa IA de transformar o seu atendimento. Por isso, oferecemos um teste completo de 7 dias. 
                </p>
                <p>
                  Se você não vir resultados, reembolsamos o seu dinheiro integralmente. É a <span className="text-purple-600 font-bold underline decoration-purple-200 underline-offset-4">Neurix</span> apostando no seu sucesso!
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-start gap-6">
              <a 
                href="https://wa.me/5514998200954"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-extrabold text-xl text-center glow-btn shadow-xl hover:shadow-purple-200 transition-all flex items-center justify-center gap-3 group"
              >
                Quero Meu Teste Grátis
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="flex items-center gap-2 text-gray-400 font-bold text-sm uppercase tracking-widest">
                <ShieldCheck className="w-5 h-5 text-green-500" />
                Satisfação Garantida • Risco Zero
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-60" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 opacity-60" />

      <style>{`
        @keyframes expand {
          from { width: 0; opacity: 0; }
          to { width: 100%; opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default GuaranteeSection;
