
import React, { useEffect } from 'react';
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
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          // Re-trigger animations when scrolling back up for a dynamic feel
          entry.target.classList.remove('visible');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white">
      {/* Global Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,_#2e0066_0%,_#0a0a0a_70%)] opacity-80" />
        <div className="absolute inset-0 noise-bg" />
        <div className="absolute inset-0 grid-bg opacity-30" />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
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
