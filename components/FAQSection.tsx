
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  delay?: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick, delay = "0ms" }) => {
  return (
    <div className="reveal w-full mb-4" style={{ transitionDelay: delay }}>
      <button
        onClick={onClick}
        className={`w-full text-left p-6 rounded-2xl glass transition-all duration-300 flex items-center justify-between gap-4 border-white/5 hover:border-white/20 group ${
          isOpen ? 'bg-white/10 border-white/20' : ''
        }`}
      >
        <span className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
          {question}
        </span>
        <div className="shrink-0">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-purple-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-purple-400" />
          )}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100 mt-2' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-6 rounded-2xl bg-white/5 border border-white/5 text-gray-400 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "A IA reconhece áudios?",
      answer: "Sim! A nossa IA processa áudios perfeitamente e responde com uma voz natural e humana. Ela trata o cliente pelo nome e cria uma conexão imediata, eliminando aquela sensação fria de 'robô'."
    },
    {
      question: "A IA pode falar informações erradas?",
      answer: "Não. A IA é treinada exclusivamente com as informações, procedimentos e valores da sua clínica ou escritório. Ela atua como um colaborador digital que segue rigorosamente o seu 'manual de atendimento'."
    },
    {
      question: "Como ela marca na minha agenda?",
      answer: "Nós integramos a IA com ferramentas como Google Agenda ou CRMs. Ela consulta seus horários livres em tempo real e, quando o cliente escolhe uma vaga, o agendamento aparece automaticamente para você."
    },
    {
      question: "Preciso mudar meu número de WhatsApp?",
      answer: "Não é necessário. A IA é integrada ao seu número atual de forma segura, permitindo que você ou sua secretária assumam o controle da conversa manualmente sempre que desejarem."
    },
    {
      question: "A IA faz a triagem de convênios ou procedimentos?",
      answer: "Com certeza. Você define os critérios e a IA qualifica o lead. Por exemplo: ela pode perguntar qual o convênio ou se é uma urgência antes de oferecer os horários para agendamento."
    },
    {
      question: "É difícil de configurar?",
      answer: "De forma alguma. Nossa equipe cuida de toda a implementação técnica e treinamento da sua IA. Você só precisa nos fornecer as informações básicas da sua empresa e nós entregamos o agente pronto para rodar."
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 relative">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="reveal text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Perguntas Frequentes</h2>
          <p className="text-gray-400">Descubra como a Neurix cuida de toda a parte tecnológica para você focar apenas no atendimento.</p>
        </div>

        <div className="flex flex-col">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              delay={`${index * 100}ms`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;