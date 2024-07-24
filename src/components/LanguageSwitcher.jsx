import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

function LanguageSwitcher({ active, setActive }) {
  const { locale, changeLanguage } = useLanguage();
  const [checked, setChecked] = useState(locale === "ar");

  useEffect(() => {
    setChecked(locale === "ar");
  }, [locale]);

  const handleToggle = () => {
    const newLocale = checked ? "en" : "ar";
    changeLanguage(newLocale);
    setChecked(prevChecked => !prevChecked);
    if (typeof setActive === 'function') {
      setActive(prevActive => !prevActive); // Ensure this is a function
    } else {
      console.error('setActive is not a function');
    }
  };

  return (
    <div className="switch">
      <input
        id="language-toggle"
        className="check-toggle check-toggle-round-flat"
        type="checkbox"
        checked={checked}
        onChange={handleToggle}
      />
      <label htmlFor="language-toggle"></label>
      <span className="off">Ar</span>
      <span className="on">En</span>
    </div>
  );
}

export default LanguageSwitcher;
