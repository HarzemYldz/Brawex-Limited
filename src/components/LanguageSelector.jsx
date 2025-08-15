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
    // Mobile version - compact dropdown style
    return (
      <div className="language-selector relative">
        <button
          onClick={toggleDropdown}
          disabled={isLoading}
                     className={`
             w-9 h-9 sm:w-10 sm:h-10
             flex items-center justify-center
             rounded-lg
             transition-all duration-300 ease-in-out
             text-ocean-600 dark:text-slate-300
             hover:text-ocean-500 dark:hover:text-brawex-400
             hover:bg-ocean-100/60 dark:hover:bg-slate-800/40
             active:scale-95
             ${isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
             group
             relative
           `}
        >
          <div className="flex items-center space-x-0.5">
            <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-all duration-300 group-hover:scale-105" />
            {(() => {
              const FlagComponent = getFlagComponent(currentLanguage);
              return <FlagComponent className="w-4 h-2.5 sm:w-4.5 sm:h-3 rounded-sm shadow-sm border border-gray-200 dark:border-gray-600 transition-transform duration-200 group-hover:scale-105" />;
            })()}
          </div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="
                absolute top-full right-0 mt-2 w-36
                bg-ocean-50/95 dark:bg-slate-900/95
                backdrop-blur-xl
                rounded-xl
                border border-ocean-200/60 dark:border-slate-700/60
                shadow-lg shadow-ocean-300/20 dark:shadow-black/40
                py-1.5
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
                    w-full flex items-center space-x-2 px-2.5 py-1.5
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
                    return <FlagComponent className="w-4 h-2.5 rounded-sm shadow-sm border border-gray-200 dark:border-gray-600 transition-transform duration-200 hover:scale-110" />;
                  })()}
                  <span className="text-xs font-medium">{lang.name}</span>
                  {currentLanguage === lang.code && (
                    <Check className="w-3 h-3 ml-auto text-ocean-500 dark:text-brawex-400" />
                  )}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
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
           w-8 h-8 sm:w-9 sm:h-9 md:w-auto md:h-auto
           flex items-center justify-center md:justify-start
           space-x-1 md:space-x-2
           px-2 md:px-3 py-2 rounded-lg
           text-xs md:text-sm font-medium
           transition-all duration-300 ease-in-out
           text-ocean-600 dark:text-slate-300
           hover:text-ocean-500 dark:hover:text-brawex-400
           hover:bg-ocean-100/60 dark:hover:bg-slate-800/40
           active:scale-95
           ${isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
           group
         `}
      >
        <Globe className="w-3 h-3 sm:w-4 sm:h-4 transition-all duration-300 group-hover:scale-105" />
        {(() => {
          const FlagComponent = getFlagComponent(currentLanguage);
          return <FlagComponent className="w-5 h-3 sm:w-6 sm:h-4 rounded-sm shadow-sm border border-gray-200 dark:border-gray-600 transition-transform duration-200 group-hover:scale-105" />;
        })()}
        <span className="text-xs sm:text-sm font-medium hidden md:inline">{currentLangInfo.name}</span>
        <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
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
