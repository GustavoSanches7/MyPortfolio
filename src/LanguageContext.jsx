import React, { createContext, useState } from 'react';
import { PT_BR, EN_US } from './language.js';

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(EN_US);

  const handleLanguage = (langCode) =>{
    if (langCode === 'EN_US') {
      setLanguage(EN_US)
    }
    else if (langCode === 'PT_BR') {
      setLanguage(PT_BR)
    }
  }

  return (
    <LanguageContext.Provider value={{ language, handleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}