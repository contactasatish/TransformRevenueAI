import React, { useState, useContext, useRef, useEffect } from 'react';
import { LanguageContext, Language } from '../contexts/LanguageContext';
import { GlobeIcon } from './Icons';
import { supportedLanguages, languageNames } from '../site.config';


const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const context = useContext(LanguageContext);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Effect to close the dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);
  
  if (!context) return null;
  const { language, setLanguage } = context;

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={wrapperRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center p-2 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label="Select language"
      >
        <GlobeIcon className="w-6 h-6" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-[#10183b] border border-gray-700/50 rounded-lg shadow-lg z-20">
          <ul className="py-1">
            {/* Dynamically generate language options */}
            {supportedLanguages.map((langCode) => (
                <li key={langCode}>
                    <button
                        onClick={() => handleLanguageChange(langCode)}
                        className={`block w-full text-left px-4 py-2 text-sm ${language === langCode ? 'text-cyan-400' : 'text-gray-300'} hover:bg-gray-700/50`}
                    >
                        {languageNames[langCode]}
                    </button>
                </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;