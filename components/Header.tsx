import React, { useState, useEffect } from 'react';
import { TransformRevenueAILogo } from './Icons';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

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
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0A0F2C]/80 backdrop-blur-lg border-b border-gray-800/50' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')} className="flex items-center">
                        <TransformRevenueAILogo className="h-8 w-8" />
                        <span className="ml-3 text-xl font-bold text-white font-['Satoshi'] whitespace-nowrap">Transform Revenue AI</span>
                    </a>
                    <nav className="hidden md:flex items-center space-x-8">
                        <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="text-gray-300 hover:text-white transition-colors">Services</a>
                        <a href="#real-impact" onClick={(e) => handleNavClick(e, 'real-impact')} className="text-gray-300 hover:text-white transition-colors">Case Studies</a>
                        <a href="#process" onClick={(e) => handleNavClick(e, 'process')} className="text-gray-300 hover:text-white transition-colors">Process</a>
                        <a href="#differentiators" onClick={(e) => handleNavClick(e, 'differentiators')} className="text-gray-300 hover:text-white transition-colors">Why Us</a>
                    </nav>
                    <a href="#cta" onClick={(e) => handleNavClick(e, 'cta')} className="hidden md:inline-block bg-gradient-to-r from-[#00E5FF] to-[#12A8CD] text-white font-bold py-2 px-6 rounded-full hover:shadow-lg hover:shadow-[#00E5FF]/30 transition-all">
                        Get Started
                    </a>
                    <div className="md:hidden">
                        {/* Mobile menu button could go here */}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;