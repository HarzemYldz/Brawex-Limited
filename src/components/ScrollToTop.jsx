import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          onClick={scrollToTop}
          className="
            fixed bottom-8 right-8 z-50
            w-14 h-14 rounded-full
            bg-white/90 dark:bg-slate-800/90
            backdrop-blur-lg
            border-2 border-brawex-300/50 dark:border-brawex-400/50
            shadow-xl shadow-brawex-200/30 dark:shadow-brawex-900/50
            hover:shadow-2xl hover:shadow-brawex-300/40 dark:hover:shadow-brawex-800/60
            flex items-center justify-center
            transition-all duration-300 ease-in-out
            hover:scale-110 hover:bg-white dark:hover:bg-slate-700
            hover:border-brawex-400 dark:hover:border-brawex-300
            focus:outline-none focus:ring-2 focus:ring-brawex-400/50 focus:ring-offset-2
            group
          "
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          {/* Icon */}
          <ChevronUp className="
            w-6 h-6 
            text-brawex-600 dark:text-brawex-300
            group-hover:text-brawex-700 dark:group-hover:text-brawex-200
            transition-all duration-300
            group-hover:scale-110 group-hover:-translate-y-0.5
            drop-shadow-sm
          " />
          
          {/* Background glow effect */}
          <div className="
            absolute inset-0 rounded-full
            bg-gradient-to-br from-brawex-400/20 to-brawex-600/20
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
            blur-xl
          "></div>
          
          {/* Ripple effect */}
          <div className="
            absolute inset-0 rounded-full
            bg-brawex-400/30
            scale-0 group-hover:scale-150
            opacity-0 group-hover:opacity-20
            transition-all duration-500
          "></div>
          
          {/* Floating animation */}
          <motion.div
            animate={{ y: [0, -2, 0] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: 'easeInOut' 
            }}
            className="absolute inset-0"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;