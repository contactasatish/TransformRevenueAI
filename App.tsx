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

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  const openModal = (title: string, content: React.ReactNode) => {
    setModalTitle(title);
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-8');
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => {
      el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-1000', 'ease-out');
      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        if (el) {
          observer.unobserve(el);
        }
      });
    };
  }, []);

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
    <div className="bg-[#0A0F2C] text-white font-sans antialiased">
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

      <div 
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center p-4 transition-opacity duration-300 ease-in-out ${isModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={closeModal}
      >
        <div 
            className={`bg-[#10183b] rounded-2xl border border-gray-700/50 shadow-2xl shadow-cyan-500/10 w-full max-w-2xl max-h-[90vh] flex flex-col relative transition-all duration-300 ease-in-out ${isModalOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
        >
          <div className="flex justify-between items-center p-6 border-b border-gray-700/50">
            <h2 className="text-2xl font-bold text-white font-['Satoshi']">{modalTitle}</h2>
            <button onClick={closeModal} className="text-gray-400 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10">
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
