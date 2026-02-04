
import React, { useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import CopySection from './components/CopySection';
import FeaturesSection from './components/FeaturesSection';
import FAQSection from './components/FAQSection';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import GuaranteeSection from './components/GuaranteeSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Performance: Observer otimizado para não sobrecarregar o Event Loop
    const observerOptions = {
      threshold: 0.05,
      rootMargin: "0px 0px -10% 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      // Uso de requestAnimationFrame para garantir que a manipulação de classe ocorra no frame correto
      window.requestAnimationFrame(() => {
        for (let i = 0; i < entries.length; i++) {
          const entry = entries[i];
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Performance: Camadas de background isoladas para evitar repaints no conteúdo principal
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white selection:bg-purple-500/30">
      <div className="fixed inset-0 z-0 pointer-events-none transform-gpu" style={{ contain: 'strict' }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,_#2e0066_0%,_#0a0a0a_70%)] opacity-80" />
        <div className="absolute inset-0 noise-bg" />
        <div className="absolute inset-0 grid-bg opacity-20" />
      </div>

      <div className="relative z-10 flex flex-col">
        <Navbar />
        <main id="main-content">
          <Hero />
          <VideoSection />
          <CopySection />
          <FeaturesSection />
          <FAQSection />
          <GuaranteeSection />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </div>
  );
};

export default App;
