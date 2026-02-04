
import React, { memo } from 'react';
import { MessageCircle, Activity, Calendar } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: string;
}

const FeatureCard = memo(({ icon, title, description, delay = "0ms" }: FeatureCardProps) => (
  <div className="reveal glass rounded-[32px] p-8 space-y-4 hover:border-purple-500/40 transition-all duration-300 group transform-gpu" style={{ transitionDelay: delay }}>
    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600/20 to-blue-500/20 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300 will-change-transform">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
      {title}
    </h3>
    <p className="text-gray-400 leading-relaxed">
      {description}
    </p>
  </div>
));

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 transform-gpu">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="reveal text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Tecnologia de Ponta</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Tudo o que você precisa para escalar sua operação comercial sem contratar novos funcionários.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<MessageCircle className="w-6 h-6 text-purple-400" />}
            title="Conversas naturais e inteligentes"
            description="Nossa IA qualifica leads e tira dúvidas de forma precisa, direcionando para o fechamento com contexto e empatia."
            delay="50ms"
          />
          <FeatureCard 
            icon={<Activity className="w-6 h-6 text-blue-400" />}
            title="Equipe 24/7"
            description="Seu time virtual opera sem pausas, atendendo milhares de leads simultaneamente com agilidade e precisão técnica."
            delay="150ms"
          />
          <FeatureCard 
            icon={<Calendar className="w-6 h-6 text-cyan-400" />}
            title="Agendamento Autónomo Integrado"
            description="A IA consulta a sua disponibilidade em tempo real e marca reuniões diretamente na sua agenda de forma totalmente automatizada."
            delay="250ms"
          />
        </div>
      </div>
    </section>
  );
};

export default memo(FeaturesSection);
