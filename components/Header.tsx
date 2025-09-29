import React, { useState, useEffect } from 'react';
import { TransformRevenueAILogo } from './Icons';
import { useTranslations } from '../hooks/useTranslations';
import LanguageSelector from './LanguageSelector';
import { headerNavLinks } from '../site.config';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const t = useTranslations();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        event.preventDefault();
        const element = document.getElementById(targetId.substring(1)); // Remove '#' for getElementById
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0A0F2C]/80 backdrop-blur-lg border-b border-gray-800/50' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="flex items-center flex-shrink-0">
                        <TransformRevenueAILogo className="h-8 w-8" />
                        <span className="ml-3 text-xl font-bold text-white font-['Satoshi'] whitespace-nowrap">Transform Revenue AI</span>
                    </a>
                    <div className="flex items-center">
                        <nav className="hidden md:flex items-center md:space-x-4 lg:space-x-8">
                            {headerNavLinks.map(link => (
                                <a 
                                    key={link.key} 
                                    href={link.href} 
                                    onClick={(e) => handleNavClick(e, link.href)} 
                                    className="text-gray-300 hover:text-white transition-colors whitespace-nowrap"
                                >
                                    {t[link.key as keyof typeof t]}
                                </a>
                            ))}
                        </nav>
                        <div className="flex items-center md:ml-4 lg:ml-8">
                           <a href="#cta" onClick={(e) => handleNavClick(e, '#cta')} className="hidden md:inline-block bg-gradient-to-r from-[#00E5FF] to-[#12A8CD] text-white font-bold py-2 md:px-4 lg:px-6 rounded-full hover:shadow-lg hover:shadow-[#00E5FF]/30 transition-all whitespace-nowrap">
                                {t.nav_get_started}
                            </a>
                           <div className="ml-4">
                             <LanguageSelector />
                           </div>
                        </div>
                    </div>
                    <div className="md:hidden">
                        {/* Mobile menu button could go here */}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;