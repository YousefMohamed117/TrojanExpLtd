import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState(navigator.language.split(/[-_]/)[0] || 'en');
  
  const changeLanguage = (lang) => {
    setLocale(lang);
  };

  return (
    <LanguageContext.Provider value={{ locale, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
