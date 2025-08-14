// Multi-language configuration
export const languages = {
  en: {
    code: 'en',
    name: 'English',
    flag: '🇬🇧',
    dir: 'ltr'
  },
  tr: {
    code: 'tr', 
    name: 'Türkçe',
    flag: '🇹🇷',
    dir: 'ltr'
  },
  de: {
    code: 'de',
    name: 'Deutsch', 
    flag: '🇩🇪',
    dir: 'ltr'
  }
};

export const defaultLanguage = 'en';

// Get browser language preference
export const getBrowserLanguage = () => {
  const browserLang = navigator.language || navigator.userLanguage;
  const langCode = browserLang.split('-')[0];
  return languages[langCode] ? langCode : defaultLanguage;
};

// Get saved language from localStorage
export const getSavedLanguage = () => {
  return localStorage.getItem('brawex-language') || getBrowserLanguage();
};

// Save language to localStorage
export const saveLanguage = (langCode) => {
  localStorage.setItem('brawex-language', langCode);
};
