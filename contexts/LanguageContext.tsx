import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { translations } from '../translations';
import { supportedLanguages } from '../site.config';

// The Language type is now dynamically created from the keys of the translations object.
// This means you only need to add a new language to `translations.ts` and it will be
// automatically recognized here.
export type Language = keyof typeof translations;

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: typeof translations.en; // `t` will always have the shape of the English translations
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Check for a language saved in localStorage
    const storedLang = localStorage.getItem('language');

    // Check if the stored language is a valid, supported language
    const isValidLanguage = (lang: string | null): lang is Language => {
        return lang !== null && supportedLanguages.includes(lang as Language);
    };

    if (isValidLanguage(storedLang)) {
        return storedLang;
    }

    // Default to 'en' if no valid language is stored
    return 'en';
  });

  // Save the selected language to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Select the appropriate translation object based on the current language
  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};