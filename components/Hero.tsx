import React, { useRef, useEffect, useState } from 'react';
import { useTranslations } from '../hooks/useTranslations';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const t = useTranslations();

  // Trigger animation on component mount
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
        const offset = window.scrollY;
        if (heroRef.current) {
            // Slower layer (distant stars)
            heroRef.current.style.setProperty('--parallax-offset-slow', `${offset * 0.4}px`);
            // Faster layer (closer stars)
            heroRef.current.style.setProperty('--parallax-offset-fast', `${offset * 0.6}px`);
        }
        if (contentRef.current) {
            // Content parallax to create depth
            contentRef.current.style.transform = `translateY(${offset * 0.2}px)`;
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const titleWords = t.hero_title.split(' ');
  const subtitleWords = t.hero_subtitle.split(' ');

  return (
    <section id="hero" ref={heroRef} className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden futuristic-background hero-bg-animation">
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F2C] via-transparent to-[#0A0F2C] z-10"></div>
      
      <div 
        ref={contentRef} 
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20"
      >
        <div className={`max-w-4xl mx-auto hero-reveal-container ${isLoaded ? 'visible' : ''}`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-['Satoshi'] font-extrabold leading-tight tracking-tight">
            {titleWords.map((word, index) => (
              <span key={index} className="inline-block hero-reveal-child" style={{ transitionDelay: `${100 + index * 50}ms` }}>
                {word}&nbsp;
              </span>
            ))}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
             {subtitleWords.map((word, index) => (
              <span key={index} className="inline-block hero-reveal-child" style={{ transitionDelay: `${100 + titleWords.length * 50 + index * 30}ms` }}>
                {word}&nbsp;
              </span>
            ))}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 hero-reveal-child" style={{ transitionDelay: `${100 + (titleWords.length * 50) + (subtitleWords.length * 30)}ms`}}>
            <a
              href="#cta"
              onClick={(e) => handleNavClick(e, 'cta')}
              className="w-full sm:w-auto bg-gradient-to-r from-[#00E5FF] to-[#12A8CD] text-white font-bold py-3 px-8 rounded-full hover:shadow-lg hover:shadow-[#00E5FF]/30 transition-all text-lg"
            >
              {t.hero_cta_main}
            </a>
            <a
              href="#real-impact"
              onClick={(e) => handleNavClick(e, 'real-impact')}
              className="w-full sm:w-auto bg-white/10 border border-white/20 text-white font-medium py-3 px-8 rounded-full hover:bg-white/20 transition-all text-lg"
            >
              {t.hero_cta_secondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
