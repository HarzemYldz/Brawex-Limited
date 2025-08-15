import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Award, ArrowRight, Shield, Zap, Clock } from 'lucide-react';
import { ThemeProvider } from './config/theme.jsx';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ImageSlider from './components/ImageSlider';
import ManagementTeam from './components/ManagementTeam';
import ScrollToTop from './components/ScrollToTop';

// Main App Content Component
const AppContent = () => {
  const { t } = useLanguage();
  
  // Slider images data
  const sliderImages = [
    {
      src: '/img/full-icon.png',
      alt: `Brawex Limited - ${t('slider.defaultTitle')}`,
      title: t('slider.defaultTitle'),
      description: t('slider.defaultDescription')
    },
    {
      src: '/favicon.png',
      alt: `Brawex Limited - ${t('services.specialised')}`,
      title: t('services.specialised'),
      description: t('slider.defaultDescription')
    }
  ];

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg gradient-bg noise-bg soft-overlay transition-colors duration-300">
        <Navbar />
        
        {/* Hero Section */}
        <section id="home" className="relative pt-20 sm:pt-22 md:pt-24 lg:pt-28 pb-20 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-50 h-80 bg-brawex-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-50 h-80 bg-brawex-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
                  <span className="bg-gradient-to-r from-brawex-400 via-brawex-500 to-brawex-600 bg-clip-text text-transparent">
                    {t('hero.title')}
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-light-text-secondary dark:text-dark-text-secondary mb-8 max-w-3xl mx-auto">
                  {t('hero.subtitle')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
              >
                <button 
                  onClick={() => {
                    const element = document.querySelector('#projects');
                    if (element) {
                      const offset = 100;
                      const elementPosition = element.offsetTop - offset;
                      window.scrollTo({
                        top: elementPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className="glass-button flex items-center justify-center space-x-2 bg-brawex-400/20 hover:bg-brawex-400/30 text-brawex-400 font-semibold group"
                >
                  <span>{t('hero.exploreProjects')}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button 
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    if (element) {
                      const offset = 100;
                      const elementPosition = element.offsetTop - offset;
                      window.scrollTo({
                        top: elementPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className="glass-button group"
                >
                  <span>{t('hero.contactUs')}</span>
        </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Image Slider Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 bg-gradient-to-r from-brawex-400 to-brawex-600 bg-clip-text text-transparent">
                {t('nav.projects')}
              </h2>
              <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
                {t('about.description')}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ImageSlider images={sliderImages} autoPlay={true} interval={6000} />
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="about" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-brawex-400 to-brawex-600 bg-clip-text text-transparent">
                {t('about.whyChoose')}
              </h2>
              <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
                {t('about.whyChooseDesc')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Building2,
                  key: 'modernConstruction'
                },
                {
                  icon: Users,
                  key: 'expertTeam'
                },
                {
                  icon: Award,
                  key: 'qualityAssured'
                },
                {
                  icon: Shield,
                  key: 'safetyFirst'
                },
                {
                  icon: Zap,
                  key: 'innovation'
                },
                {
                  icon: Clock,
                  key: 'timelyDelivery'
                }
              ].map((feature, index) => {
                const Icon = feature.icon;
                const featureData = t(`features.${feature.key}`, { returnObjects: true });
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="glass-card group h-full relative overflow-hidden"
                  >
                    {/* Background decorative elements */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-brawex-100/30 to-brawex-200/20 dark:from-brawex-900/20 dark:to-brawex-800/10 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-brawex-50/40 to-brawex-100/30 dark:from-brawex-950/30 dark:to-brawex-900/20 rounded-full translate-y-8 -translate-x-8 group-hover:scale-125 transition-transform duration-700"></div>
                    
                    <div className="relative flex flex-col h-full z-10">
                      <div className="flex items-center mb-6">
                        <div className="relative w-14 h-14 bg-gradient-to-br from-brawex-400 to-brawex-600 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 mr-4 shadow-lg shadow-brawex-400/30">
                          <Icon className="w-7 h-7 text-white drop-shadow-sm" />
                          {/* Icon glow effect */}
                          <div className="absolute inset-0 bg-brawex-300/30 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <h3 className="text-xl font-semibold text-light-text dark:text-dark-text group-hover:text-brawex-600 dark:group-hover:text-brawex-300 transition-colors duration-300">
                          {featureData.title}
                        </h3>
                      </div>
                      
                      <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6 flex-grow">
                        {featureData.description}
                      </p>
                      
                      <div className="space-y-3">
                        {featureData.features?.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center text-sm group/item">
                            <div className="w-2 h-2 bg-gradient-to-r from-brawex-400 to-brawex-500 rounded-full mr-3 group-hover/item:scale-125 transition-transform duration-200 shadow-sm shadow-brawex-400/50" />
                            <span className="text-light-text-secondary dark:text-dark-text-secondary group-hover/item:text-brawex-600 dark:group-hover/item:text-brawex-300 transition-colors duration-200 font-medium">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-brawex-400 to-brawex-600 bg-clip-text text-transparent">
                {t('projects.title')}
              </h2>
              <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
                {t('projects.subtitle')}
              </p>
            </motion.div>

            <div className="glass-card text-center">
              <h3 className="text-2xl font-semibold mb-4 text-light-text dark:text-dark-text">
                {t('projects.comingSoon')}
              </h3>
              <p className="text-light-text-secondary dark:text-dark-text-secondary">
                {t('projects.comingSoonDesc')}
              </p>
      </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-brawex-400 to-brawex-600 bg-clip-text text-transparent">
                {t('contact.title')}
              </h2>
              <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto mb-8">
                {t('contact.subtitle')}
              </p>
              
              <div className="glass-card max-w-md mx-auto">
                <p className="text-light-text dark:text-dark-text mb-4">
                  {t('contact.info')}
                </p>
                <button className="glass-button bg-brawex-400/20 hover:bg-brawex-400/30 text-brawex-400 font-semibold w-full">
                  {t('contact.button')}
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Management Team Section */}
        <ManagementTeam />

        {/* Footer */}
        <Footer />
        
        {/* Scroll to Top Button */}
        <ScrollToTop />
        </div>
  );
};

// Main App Component with Providers
function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
