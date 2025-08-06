import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const ImageSlider = ({ images, autoPlay = true, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  // Auto play functionality
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, isPlaying, images.length, interval]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  if (!images || images.length === 0) {
    return (
      <div className="glass-card h-96 flex items-center justify-center">
        <p className="text-light-text-secondary dark:text-dark-text-secondary">
          No images available
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl group">
      {/* Main image container */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-full object-cover"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={goToPrevious}
            className="
              w-12 h-12 rounded-full
              bg-slate-800/80 dark:bg-black/30 backdrop-blur-md
              border-2 border-slate-700/80 dark:border-white/30
              flex items-center justify-center
              hover:bg-slate-700/90 dark:hover:bg-black/40
              hover:border-slate-600 dark:hover:border-white/40
              hover:scale-110 hover:shadow-xl
              shadow-lg shadow-slate-900/50
              transition-all duration-300 ease-in-out
              focus:outline-none focus:ring-2 focus:ring-brawex-400/50
              group/btn
            "
            disabled={images.length <= 1}
          >
            <ChevronLeft className="w-6 h-6 text-white drop-shadow-lg group-hover/btn:scale-110 transition-transform" />
          </button>
          
          <button
            onClick={goToNext}
            className="
              w-12 h-12 rounded-full
              bg-slate-800/80 dark:bg-black/30 backdrop-blur-md
              border-2 border-slate-700/80 dark:border-white/30
              flex items-center justify-center
              hover:bg-slate-700/90 dark:hover:bg-black/40
              hover:border-slate-600 dark:hover:border-white/40
              hover:scale-110 hover:shadow-xl
              shadow-lg shadow-slate-900/50
              transition-all duration-300 ease-in-out
              focus:outline-none focus:ring-2 focus:ring-brawex-400/50
              group/btn
            "
            disabled={images.length <= 1}
          >
            <ChevronRight className="w-6 h-6 text-white drop-shadow-lg group-hover/btn:scale-110 transition-transform" />
          </button>
        </div>

        {/* Play/Pause button */}
        {images.length > 1 && (
          <button
            onClick={togglePlayPause}
            className="
              absolute top-4 right-4
              w-10 h-10 rounded-full
              bg-slate-800/80 dark:bg-black/30 backdrop-blur-md
              border-2 border-slate-700/80 dark:border-white/30
              flex items-center justify-center
              hover:bg-slate-700/90 dark:hover:bg-black/40
              hover:border-slate-600 dark:hover:border-white/40
              hover:scale-110 hover:shadow-xl
              shadow-lg shadow-slate-900/50
              transition-all duration-300 ease-in-out
              opacity-0 group-hover:opacity-100
              focus:outline-none focus:ring-2 focus:ring-brawex-400/50
              group/play
            "
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-white drop-shadow-lg group-hover/play:scale-110 transition-transform" />
            ) : (
              <Play className="w-5 h-5 text-white drop-shadow-lg group-hover/play:scale-110 transition-transform ml-0.5" />
            )}
          </button>
        )}

        {/* Image info overlay */}
        {images[currentIndex].title && (
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="
                bg-slate-900/85 dark:bg-black/60
                backdrop-blur-lg
                rounded-xl
                p-6
                border-2 border-slate-700/60 dark:border-white/20
                shadow-xl shadow-slate-900/60
              "
            >
              <h3 className="text-xl font-semibold text-white mb-2 drop-shadow-lg">
                {images[currentIndex].title}
              </h3>
              {images[currentIndex].description && (
                <p className="text-white/95 drop-shadow-md leading-relaxed">
                  {images[currentIndex].description}
                </p>
              )}
            </motion.div>
          </div>
        )}
      </div>

      {/* Dots indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`
                w-3 h-3 rounded-full transition-all duration-300 ease-in-out
                border-2 backdrop-blur-sm shadow-lg
                hover:scale-125 focus:outline-none focus:scale-125
                ${index === currentIndex
                  ? 'bg-brawex-400 border-white scale-125 shadow-lg shadow-brawex-400/70'
                  : 'bg-slate-700/80 border-slate-600/80 hover:bg-slate-600/90 hover:border-slate-500/90 shadow-slate-900/50'
                }
              `}
            />
          ))}
        </div>
      )}

      {/* Progress bar */}
      {isPlaying && images.length > 1 && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20">
          <motion.div
            className="h-full bg-brawex-400"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: interval / 1000, ease: 'linear' }}
            key={currentIndex}
          />
        </div>
      )}
    </div>
  );
};

export default ImageSlider;