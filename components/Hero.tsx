import React, { useRef, useEffect } from 'react';
import { useTranslations } from '../hooks/useTranslations';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const t = useTranslations();

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
            heroRef.current.style.setProperty('--parallax-offset-slow', `${offset * 0.3}px`);
            // Faster layer (closer stars)
            heroRef.current.style.setProperty('--parallax-offset-fast', `${offset * 0.5}px`);
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" ref={heroRef} className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden futuristic-background hero-bg-animation">
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F2C] via-transparent to-[#0A0F2C] z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-4xl mx-auto animate-on-scroll">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-['Satoshi'] font-extrabold leading-tight tracking-tight">
            {t.hero_title}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            {t.hero_subtitle}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
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