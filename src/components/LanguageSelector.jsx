import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Globe, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { 
  GB, 
  TR, 
  DE 
} from 'country-flag-icons/react/3x2';

const LanguageSelector = ({ isMobile = false }) => {
  const { currentLanguage, changeLanguage, getCurrentLanguageInfo, getAvailableLanguages, isLoading } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLangInfo = getCurrentLanguageInfo();
  const availableLanguages = getAvailableLanguages();

  // Flag component mapping
  const getFlagComponent = (langCode) => {
    switch (langCode) {
      case 'en':
        return GB;
      case 'tr':
        return TR;
      case 'de':
        return DE;
      default:
        return GB;
    }
  };

  const handleLanguageChange = async (langCode) => {
    if (langCode !== currentLanguage) {
      await changeLanguage(langCode);
    }
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.language-selector')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  if (isMobile) {
    // Mobile version - simpler list style
    return (
      <div className="language-selector relative">
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-ocean-600 dark:text-slate-300 text-sm font-medium px-2">
            <Globe className="w-4 h-4" />
            <span>Language</span>
          </div>
          <div className="space-y-1">
            {availableLanguages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                disabled={isLoading}
                className={`
                  w-full flex items-center space-x-3 px-3 py-2 rounded-lg
                  text-left transition-all duration-200
                  ${currentLanguage === lang.code
                    ? 'bg-ocean-100 dark:bg-brawex-900/30 text-ocean-600 dark:text-brawex-400'
                    : 'text-ocean-500 dark:text-slate-400 hover:bg-ocean-50 dark:hover:bg-slate-800/50'
                  }
                  ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:text-ocean-600 dark:hover:text-brawex-300'}
                `}
              >
                {(() => {
                  const FlagComponent = getFlagComponent(lang.code);
                  return <FlagComponent className="w-6 h-4 rounded-sm shadow-sm border border-gray-200 dark:border-gray-600 transition-transform duration-200 hover:scale-110" />;
                })()}
                <span className="text-sm font-medium">{lang.name}</span>
                {currentLanguage === lang.code && (
                  <Check className="w-4 h-4 ml-auto" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Desktop version - dropdown style
  return (
    <div className="language-selector relative">
      <button
        onClick={toggleDropdown}
        disabled={isLoading}
        className={`
          flex items-center space-x-2 px-3 py-2 rounded-lg
          text-ocean-600 dark:text-slate-300
          hover:text-ocean-500 dark:hover:text-brawex-400
          hover:bg-ocean-100 dark:hover:bg-brawex-900/20
          transition-all duration-300 ease-in-out
          ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}
          group
        `}
      >
        <Globe className="w-4 h-4 transition-all duration-300 group-hover:scale-105" />
        {(() => {
          const FlagComponent = getFlagComponent(currentLanguage);
          return <FlagComponent className="w-6 h-4 rounded-sm shadow-sm border border-gray-200 dark:border-gray-600 transition-transform duration-200 group-hover:scale-105" />;
        })()}
        <span className="text-sm font-medium hidden sm:inline">{currentLangInfo.name}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="
              absolute top-full right-0 mt-2 w-48
              bg-ocean-50/95 dark:bg-slate-900/95
              backdrop-blur-xl
              rounded-xl
              border border-ocean-200/60 dark:border-slate-700/60
              shadow-lg shadow-ocean-300/20 dark:shadow-black/40
              py-2
              z-50
            "
          >
            {availableLanguages.map((lang, index) => (
              <motion.button
                key={lang.code}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => handleLanguageChange(lang.code)}
                disabled={isLoading}
                className={`
                  w-full flex items-center space-x-3 px-4 py-2.5
                  text-left transition-all duration-200
                  ${currentLanguage === lang.code
                    ? 'bg-ocean-100 dark:bg-brawex-900/40 text-ocean-600 dark:text-brawex-400'
                    : 'text-ocean-500 dark:text-slate-400 hover:bg-ocean-100/70 dark:hover:bg-slate-800/70'
                  }
                  ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:text-ocean-600 dark:hover:text-brawex-300'}
                  first:rounded-t-lg last:rounded-b-lg
                `}
              >
                {(() => {
                  const FlagComponent = getFlagComponent(lang.code);
                  return <FlagComponent className="w-6 h-4 rounded-sm shadow-sm border border-gray-200 dark:border-gray-600 transition-transform duration-200 hover:scale-110" />;
                })()}
                <div className="flex-1">
                  <div className="text-sm font-medium">{lang.name}</div>
                  <div className="text-xs opacity-70">{lang.code.toUpperCase()}</div>
                </div>
                {currentLanguage === lang.code && (
                  <Check className="w-4 h-4 text-ocean-500 dark:text-brawex-400" />
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector;
