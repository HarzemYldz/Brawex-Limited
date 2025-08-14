import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Info, Users, Briefcase, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: t('nav.home'), href: '#home', icon: Home },
    { name: t('nav.about'), href: '#about', icon: Info },
    { name: t('nav.management'), href: '#management', icon: Users },
    { name: t('nav.projects'), href: '#projects', icon: Briefcase },
    { name: t('nav.contact'), href: '#contact', icon: Mail },
  ];

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    
    // Add a small delay for mobile menu close animation
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const offset = 100; // Account for fixed navbar height
        const elementPosition = element.offsetTop - offset;
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }, 150);
  };

  return (
    <div className={`
      fixed top-0 left-0 right-0 z-50
      transition-all duration-500 ease-in-out
      ${isScrolled ? 'px-4 py-2' : 'px-0 py-0'}
    `}>
      <nav 
        className={`
          transition-all duration-500 ease-in-out
          backdrop-blur-lg
          border
          ${isScrolled 
            ? 'bg-ocean-50/95 dark:bg-slate-900/95 shadow-2xl shadow-ocean-200/30 dark:shadow-brawex-900/50 border-ocean-200/40 dark:border-brawex-700/30 rounded-2xl mx-auto max-w-6xl' 
            : 'bg-ocean-50/90 dark:bg-white/5 shadow-lg border-ocean-200/60 dark:border-white/10 rounded-none w-full'
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className={`
            flex items-center justify-between transition-all duration-500
            ${isScrolled ? 'h-18 sm:h-20 md:h-22 lg:h-24' : 'h-20 sm:h-22 md:h-24 lg:h-30'}
          `}>
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="flex items-center space-x-3 group"
            >
              {/* Company Logo */}
              <div className="relative">
                <img 
                  src="/img/full-icon.png" 
                  alt="Brawex Limited Logo" 
                  className={`
                    object-contain transition-all duration-500 ease-in-out
                    ${isScrolled 
                      ? 'w-40 h-15 sm:w-45 sm:h-18 md:w-50 md:h-20 lg:w-45 lg:h-22' 
                      : 'w-40 h-16 sm:w-52 sm:h-20 md:w-56 md:h-22 lg:w-55 lg:h-28'
                    }
                    group-hover:scale-105 group-hover:drop-shadow-lg
                  `}
                />
                <div className="absolute inset-0 rounded-xl bg-brawex-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="
                      relative
                      px-3 py-2 rounded-lg
                      text-xs sm:text-sm font-medium
                      flex items-center space-x-1.5
                      transition-all duration-300 ease-in-out
                      text-ocean-600 dark:text-slate-300
                      hover:text-ocean-500 dark:hover:text-brawex-400
                      group
                    "
                  >
                    {/* Subtle background */}
                    <div className="absolute inset-0 bg-ocean-100 dark:bg-brawex-900/20 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg"></div>
                    
                    {/* Content */}
                    <div className="relative z-10 flex items-center space-x-2">
                      <Icon className="w-4 h-4 transition-all duration-300 group-hover:scale-105" />
                      <span className="font-medium">{item.name}</span>
                    </div>
                    
                    {/* Subtle underline */}
                    <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-brawex-400 group-hover:w-1/2 transition-all duration-300 transform -translate-x-1/2 rounded-full"></div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Language Selector, Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Desktop Language Selector */}
            <div className="hidden md:flex flex-shrink-0">
              <LanguageSelector />
            </div>
            
            <div className="flex-shrink-0">
              <ThemeToggle />
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex-shrink-0">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="
                  glass-button
                  w-9 h-9 sm:w-10 sm:h-10
                  flex items-center justify-center
                  transition-all duration-300 ease-in-out
                "
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isMenuOpen ? 'close' : 'menu'}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isMenuOpen ? (
                      <X className="w-4 h-4 sm:w-5 sm:h-5" />
                    ) : (
                      <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden"
            >
              <div className="px-3 pt-3 pb-4 space-y-2 sm:px-4">
                {navigation.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      className="
                        relative
                        w-full
                        px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg
                        text-left
                        flex items-center space-x-3
                        transition-all duration-300 ease-in-out
                        text-ocean-600 dark:text-slate-300
                        hover:text-ocean-500 dark:hover:text-brawex-400
                        group
                        bg-ocean-50/90 dark:bg-slate-800/80
                        hover:bg-ocean-100 dark:hover:bg-brawex-900/30
                        backdrop-blur-sm
                        border border-ocean-200/50 dark:border-slate-700/50
                        hover:border-ocean-300/70 dark:hover:border-brawex-600/50
                        shadow-sm hover:shadow-md
                      "
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300 group-hover:scale-105" />
                      <span className="font-medium text-sm sm:text-base">{item.name}</span>
                    </motion.a>
                  );
                })}
                
                {/* Mobile Language Selector */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navigation.length * 0.1, duration: 0.3 }}
                  className="border-t border-ocean-200/50 dark:border-slate-700/50 pt-4 mt-4"
                >
                  <LanguageSelector isMobile={true} />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;