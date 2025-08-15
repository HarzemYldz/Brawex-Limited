import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../config/theme.jsx';
import { useLanguage } from '../context/LanguageContext';

const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme, isDark } = useTheme();
  const { t } = useLanguage();

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative 
        w-9 h-9 sm:w-10 sm:h-10 md:w-16 md:h-8
        rounded-full
        transition-all duration-500 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-brawex-400/50 focus:ring-offset-2
        group
        ${isDark 
          ? 'bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 shadow-lg shadow-slate-900/50' 
          : 'bg-gradient-to-r from-blue-200 via-sky-100 to-blue-200 shadow-lg shadow-blue-200/50'
        }
        hover:shadow-xl
        ${isDark ? 'hover:shadow-blue-500/30' : 'hover:shadow-orange-300/40'}
        ${className}
      `}
      aria-label={t('common.toggleTheme', `Switch to ${isDark ? 'light' : 'dark'} mode`)}
      title={t('common.toggleTheme', `Switch to ${isDark ? 'light' : 'dark'} mode`)}
    >
      {/* Track background effects */}
      <div className={`
        absolute inset-0 rounded-full transition-all duration-500
        ${isDark 
          ? 'bg-gradient-to-r from-indigo-900/50 to-purple-900/50' 
          : 'bg-gradient-to-r from-orange-100/50 to-yellow-100/50'
        }
      `} />
      
      {/* Glowing background */}
      <div className={`
        absolute inset-0 rounded-full transition-all duration-500
        ${isDark 
          ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20' 
          : 'bg-gradient-to-r from-yellow-300/30 to-orange-300/30'
        }
        group-hover:scale-110 group-hover:opacity-80
      `} />
      
      {/* Toggle slider */}
      <div className={`
        absolute top-1 w-7 h-7 sm:w-8 sm:h-8 md:w-6 md:h-6 rounded-full
        transition-all duration-500 ease-in-out
        flex items-center justify-center
        ${isDark 
          ? 'translate-x-1 sm:translate-x-1 md:translate-x-9 bg-gradient-to-br from-slate-800 to-slate-900 shadow-lg shadow-slate-900/50' 
          : 'translate-x-1 sm:translate-x-1 bg-gradient-to-br from-yellow-300 to-orange-400 shadow-lg shadow-orange-400/50'
        }
        group-hover:scale-110
        border-2 ${isDark ? 'border-slate-600' : 'border-white'}
      `}>
        {/* Icon container */}
        <div className="relative w-3 h-3 sm:w-3 sm:h-3 md:w-4 md:h-4 overflow-hidden">
          {/* Sun Icon */}
          <Sun 
            className={`
              absolute inset-0 w-3 h-3 sm:w-3 sm:h-3 md:w-4 md:h-4
              transition-all duration-500 ease-in-out
              ${isDark 
                ? 'text-yellow-400/50 translate-y-6 rotate-180 opacity-0 scale-50' 
                : 'text-orange-700 translate-y-0 rotate-0 opacity-100 scale-100'
              }
              drop-shadow-sm
            `}
          />
          
          {/* Moon Icon */}
          <Moon 
            className={`
              absolute inset-0 w-3 h-3 sm:w-3 sm:h-3 md:w-4 md:h-4
              transition-all duration-500 ease-in-out
              ${isDark 
                ? 'text-blue-200 translate-y-0 rotate-0 opacity-100 scale-100' 
                : 'text-slate-400/50 translate-y-6 -rotate-180 opacity-0 scale-50'
              }
              drop-shadow-sm
            `}
          />
        </div>
      </div>
      
      {/* Stars effect for dark mode */}
      {isDark && (
        <div className="absolute inset-0 overflow-hidden rounded-full">
          <div className="absolute top-2 left-2 w-1 h-1 bg-blue-300 rounded-full animate-pulse" />
          <div className="absolute top-3 right-3 w-0.5 h-0.5 bg-purple-300 rounded-full animate-pulse delay-500" />
          <div className="absolute bottom-2 left-3 w-0.5 h-0.5 bg-blue-200 rounded-full animate-pulse delay-1000" />
        </div>
      )}
      
      {/* Sun rays effect for light mode */}
      {!isDark && (
        <div className="absolute inset-0 overflow-hidden rounded-full">
          <div className="absolute top-1 right-4 w-3 h-0.5 bg-yellow-300/60 rounded-full rotate-45 origin-left" />
          <div className="absolute bottom-1 right-4 w-3 h-0.5 bg-yellow-300/60 rounded-full -rotate-45 origin-left" />
          <div className="absolute top-3 right-2 w-0.5 h-3 bg-yellow-300/60 rounded-full" />
        </div>
      )}
      
      {/* Mode text indicator */}
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className={`text-xs font-medium ${isDark ? 'text-blue-300' : 'text-orange-600'}`}>
          {isDark ? 'Dark' : 'Light'}
        </span>
      </div>
    </button>
  );
};

export default ThemeToggle;