
import React from 'react';

const CopySection: React.FC = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-12 text-gray-900">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="reveal text-4xl md:text-6xl font-black tracking-tight text-black">
          Sua empresa <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">nunca mais</span> para de vender.
        </h2>
        
        <div className="reveal space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed font-medium" style={{ transitionDelay: '200ms' }}>
          <p>
            Você já parou para pensar quantos pacientes e clientes você perde por falta de atenção imediata no WhatsApp, especialmente à noite ou nos finais de semana?
          </p>
          <p>
            Na Neurix, nós implementamos colaboradores digitais que ouvem e respondem por áudio, tratando cada interessado pelo nome e tirando dúvidas técnicas com total naturalidade. 
          </p>
          <p>
            Nosso sistema realiza a triagem, qualifica o lead e faz o agendamento direto na sua agenda, garantindo escala real sem aumentar seus custos fixos.
          </p>
        </div>
        
        <div className="reveal pt-8" style={{ transitionDelay: '400ms' }}>
          <div className="inline-flex items-center gap-6 grayscale opacity-60">
             <span className="text-2xl font-bold tracking-tighter italic">NEURIX.INT</span>
             <span className="text-2xl font-bold tracking-tighter italic">AI.SALES</span>
             <span className="text-2xl font-bold tracking-tighter italic">CORE.FLOW</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CopySection;