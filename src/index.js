import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { IntlProvider } from 'react-intl';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import enMessages from './locales/en.json';
import arMessages from './locales/ar.json';

const messages = {
  en: enMessages,
  ar: arMessages,
};

function AppWithIntl() {
  const { locale } = useLanguage();
  
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <App />
    </IntlProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <LanguageProvider>
    <AppWithIntl />
  </LanguageProvider>
);
