import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Award, ArrowRight, Shield, Zap, Clock } from 'lucide-react';
import { ThemeProvider } from './config/theme.jsx';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ImageSlider from './components/ImageSlider';
import ManagementTeam from './components/ManagementTeam';
import ScrollToTop from './components/ScrollToTop';

function App() {
  // Slider images data
  const sliderImages = [
    {
      src: '/img/full-icon.png',
      alt: 'Brawex Limited - Commercial & Domestic Construction',
      title: 'Commercial & Domestic Construction',
      description: 'Founded in 2025, delivering high-quality building construction and installation services across London.'
    },
    {
      src: '/img/favicon.png',
      alt: 'Brawex Limited - Specialised Construction',
      title: 'Specialised Construction Services',
      description: 'Expert construction installation and specialised building activities for commercial and domestic projects.'
    }
  ];

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-light-bg dark:bg-dark-bg gradient-bg noise-bg soft-overlay transition-colors duration-300">
        <Navbar />
        
        {/* Hero Section */}
        <section id="home" className="relative pt-28 pb-20 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-brawex-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brawex-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
                    Brawex Limited
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-light-text-secondary dark:text-dark-text-secondary mb-8 max-w-3xl mx-auto">
                  Modern construction and property development solutions in the United Kingdom
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
                  <span>Explore Projects</span>
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
                  <span>Contact Us</span>
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
                Our Showcase
              </h2>
              <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
                Discover our commitment to excellence through our featured projects and capabilities
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
                Why Choose Brawex?
              </h2>
              <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
                We combine cutting-edge technology with traditional craftsmanship to deliver exceptional results
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Building2,
                  title: "Modern Construction",
                  description: "State-of-the-art building techniques and sustainable practices for tomorrow's infrastructure.",
                  features: ["Sustainable Materials", "Smart Technology", "Energy Efficient"]
                },
                {
                  icon: Users,
                  title: "Expert Team",
                  description: "Experienced professionals dedicated to delivering excellence in every project we undertake.",
                  features: ["Certified Engineers", "Project Managers", "Safety Specialists"]
                },
                {
                  icon: Award,
                  title: "Quality Assured",
                  description: "Rigorous quality control and attention to detail ensure projects exceed expectations.",
                  features: ["ISO Certified", "Quality Control", "Customer Satisfaction"]
                },
                {
                  icon: Shield,
                  title: "Safety First",
                  description: "Comprehensive safety protocols and training ensure secure working environments.",
                  features: ["Safety Training", "Risk Assessment", "Compliance"]
                },
                {
                  icon: Zap,
                  title: "Innovation",
                  description: "Cutting-edge technology and innovative solutions for modern construction challenges.",
                  features: ["3D Modeling", "Digital Planning", "Smart Solutions"]
                },
                {
                  icon: Clock,
                  title: "Timely Delivery",
                  description: "Efficient project management ensures on-time completion within budget constraints.",
                  features: ["Project Scheduling", "Resource Planning", "Progress Tracking"]
                }
              ].map((feature, index) => {
                const Icon = feature.icon;
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
                          {feature.title}
                        </h3>
                      </div>
                      
                      <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6 flex-grow">
                        {feature.description}
                      </p>
                      
                      <div className="space-y-3">
                        {feature.features.map((item, itemIndex) => (
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
                Our Projects
              </h2>
              <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
                Showcasing our commitment to excellence in construction and development
              </p>
            </motion.div>

            <div className="glass-card text-center">
              <h3 className="text-2xl font-semibold mb-4 text-light-text dark:text-dark-text">
                Coming Soon
              </h3>
              <p className="text-light-text-secondary dark:text-dark-text-secondary">
                Our portfolio of exceptional projects will be showcased here soon.
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
                Get In Touch
              </h2>
              <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto mb-8">
                Ready to start your next construction project? Contact us today.
              </p>
              
              <div className="glass-card max-w-md mx-auto">
                <p className="text-light-text dark:text-dark-text mb-4">
                  Contact information will be added here.
                </p>
                <button className="glass-button bg-brawex-400/20 hover:bg-brawex-400/30 text-brawex-400 font-semibold w-full">
                  Contact Us
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
    </ThemeProvider>
  );
}

export default App;
