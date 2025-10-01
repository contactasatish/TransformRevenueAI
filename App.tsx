import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Process from './components/Process';
import Differentiators from './components/Differentiators';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';
import { seoConfig } from './site.config';
import AnimatedGridBackground from './components/AnimatedGridBackground';


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  // Set up scroll-reveal animations for any element with the class `animate-on-scroll`
  useScrollReveal('.animate-on-scroll');
  
  // Dynamically update SEO meta tags from the central config file
  useEffect(() => {
    document.title = seoConfig.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', seoConfig.description);
    document.querySelector('meta[name="keywords"]')?.setAttribute('content', seoConfig.keywords.join(', '));
    // Open Graph
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', seoConfig.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', seoConfig.description);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', seoConfig.url);
    // Twitter
    document.querySelector('meta[property="twitter:title"]')?.setAttribute('content', seoConfig.title);
    document.querySelector('meta[property="twitter:description"]')?.setAttribute('content', seoConfig.description);
    document.querySelector('meta[property="twitter:url"]')?.setAttribute('content', seoConfig.url);
  }, []);

  const openModal = (title: string, content: React.ReactNode) => {
    setModalTitle(title);
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const body = document.body;
    if (isModalOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'unset';
    }
    // Cleanup function
    return () => {
      body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="text-white font-sans antialiased relative">
      <AnimatedGridBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Services openModal={openModal} />
          <CaseStudies />
          <Process />
          <Differentiators />
          <Testimonials />
          <CTA openModal={openModal} />
        </main>
        <Footer openModal={openModal} />
      </div>

      {/* Global Modal Component */}
      <div 
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center p-4 transition-opacity duration-300 ease-in-out ${isModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={closeModal}
        aria-modal="true"
        role="dialog"
      >
        <div 
            className={`bg-[#10183b] rounded-2xl border border-gray-700/50 shadow-2xl shadow-cyan-500/10 w-full max-w-2xl max-h-[90vh] flex flex-col relative transition-all duration-300 ease-in-out ${isModalOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
        >
          <div className="flex justify-between items-center p-6 border-b border-gray-700/50">
            <h2 className="text-2xl font-bold text-white font-['Satoshi']">{modalTitle}</h2>
            <button onClick={closeModal} aria-label="Close modal" className="text-gray-400 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
          <div className="p-6 overflow-y-auto text-gray-300 space-y-4">
            {modalContent}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;