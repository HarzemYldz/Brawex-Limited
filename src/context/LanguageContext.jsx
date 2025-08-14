import React, { createContext, useContext, useState, useEffect } from 'react';
import { languages, defaultLanguage, getSavedLanguage, saveLanguage } from '../config/languages';
import { translations } from '../config/translations';

// Create Language Context
const LanguageContext = createContext();

// Custom hook to use language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Language Provider Component
export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(getSavedLanguage());
  const [isLoading, setIsLoading] = useState(false);

  // Change language function
  const changeLanguage = async (langCode) => {
    if (!languages[langCode]) {
      console.warn(`Language ${langCode} not supported`);
      return;
    }

    setIsLoading(true);
    try {
      // Save to localStorage
      saveLanguage(langCode);
      
      // Update state
      setCurrentLanguage(langCode);
      
      // Update document language and direction
      document.documentElement.lang = langCode;
      document.documentElement.dir = languages[langCode].dir;
      
      // Update page title if needed
      if (translations[langCode]?.hero?.title) {
        document.title = `${translations[langCode].hero.title} - Professional Construction Company London`;
      }
      
    } catch (error) {
      console.error('Error changing language:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Get translation function
  const t = (key, options = {}) => {
    const { returnObjects = false } = options;
    const fallback = options.fallback || '';
    
    const keys = key.split('.');
    let translation = translations[currentLanguage];
    
    for (const k of keys) {
      if (translation && typeof translation === 'object' && k in translation) {
        translation = translation[k];
      } else {
        // Fallback to English if translation not found
        let englishTranslation = translations[defaultLanguage];
        for (const ek of keys) {
          if (englishTranslation && typeof englishTranslation === 'object' && ek in englishTranslation) {
            englishTranslation = englishTranslation[ek];
          } else {
            return fallback || key;
          }
        }
        return englishTranslation || fallback || key;
      }
    }
    
    // Return object or string based on returnObjects option
    if (returnObjects && typeof translation === 'object') {
      return translation;
    }
    
    return translation || fallback || key;
  };

  // Get current language info
  const getCurrentLanguageInfo = () => languages[currentLanguage];

  // Get all available languages
  const getAvailableLanguages = () => Object.values(languages);

  // Initialize language on mount
  useEffect(() => {
    const initializeLanguage = () => {
      const langCode = getSavedLanguage();
      if (langCode !== currentLanguage) {
        changeLanguage(langCode);
      } else {
        // Set initial document attributes
        document.documentElement.lang = langCode;
        document.documentElement.dir = languages[langCode]?.dir || 'ltr';
      }
    };

    initializeLanguage();
  }, []);

  const value = {
    currentLanguage,
    changeLanguage,
    t,
    getCurrentLanguageInfo,
    getAvailableLanguages,
    isLoading,
    languages
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
