import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook,
  Linkedin,
  Instagram,
  ExternalLink,
  Award,
  Users,
  Target
} from 'lucide-react';
import { RiTwitterXFill } from 'react-icons/ri';
import ThemeToggle from './ThemeToggle';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const companyInfo = {
    phone: '+44 20 8XXX XXXX',
    email: 'contact@brawex.co.uk',
    website: 'https://www.brawex.co.uk',
    address: '61 Woodstock Crescent, London, N9 7NB, England',
    companyNumber: 'Company No: 16456830',
    hours: 'Mon - Fri: 9:00 AM - 5:00 PM'
  };

  const services = [
    'Commercial Building Construction',
    'Domestic Building Construction', 
    'Construction Installation Services',
    'Specialised Construction Activities',
    'Building Project Management',
    'Construction Consultancy'
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Management Team', href: '#management' },
    { name: 'Our Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
    { name: 'Careers', href: '#careers' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'X', icon: RiTwitterXFill, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' }
  ];

  const stats = [
    { icon: Building2, number: '2025', label: 'Company Founded' },
    { icon: Users, number: '2', label: 'Directors' },
    { icon: Award, number: 'Multi', label: 'Construction Services' },
    { icon: Target, number: 'London', label: 'Based in' }
  ];

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-soft-100 via-neutral-soft-50 to-brawex-50 dark:from-slate-950 dark:via-slate-900 dark:to-brawex-950" />
      <div className="absolute inset-0 noise-bg opacity-15 dark:opacity-30" />
      
      {/* Light mode overlay */}
      <div className="absolute inset-0 bg-neutral-soft-50/30 dark:bg-transparent" />
      
      <div className="relative">
        {/* Stats Section */}
        <div className="border-b border-neutral-soft-200/60 dark:border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center group"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-brawex-400 to-brawex-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-neutral-soft-800 dark:text-white mb-1">{stat.number}</div>
                    <div className="text-sm text-neutral-soft-600 dark:text-white/70">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Logo */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-brawex-400 to-brawex-600 rounded-xl flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl font-display font-bold bg-gradient-to-r from-brawex-600 to-brawex-400 dark:from-brawex-400 dark:to-brawex-300 bg-clip-text text-transparent">
                    Brawex Limited
                  </span>
                </div>

                <p className="text-neutral-soft-700 dark:text-white/80 mb-6 leading-relaxed">
                  A dynamic construction company founded in May 2025, specialising in commercial 
                  and domestic building projects. We deliver high-quality construction services 
                  and installation solutions across London and surrounding areas.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-neutral-soft-600 dark:text-white/70 hover:text-brawex-600 dark:hover:text-brawex-300 transition-colors">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">{companyInfo.phone}</span>
                  </div>
                  <a 
                    href={`mailto:${companyInfo.email}`}
                    className="flex items-center space-x-3 text-neutral-soft-600 dark:text-white/70 hover:text-brawex-600 dark:hover:text-brawex-300 transition-colors group"
                  >
                    <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span className="text-sm">{companyInfo.email}</span>
                  </a>
                  <div className="flex items-start space-x-3 text-neutral-soft-600 dark:text-white/70 hover:text-brawex-600 dark:hover:text-brawex-300 transition-colors">
                    <MapPin className="w-4 h-4 mt-0.5" />
                    <span className="text-sm">{companyInfo.address}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-neutral-soft-600 dark:text-white/70 hover:text-brawex-600 dark:hover:text-brawex-300 transition-colors">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{companyInfo.hours}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-neutral-soft-600 dark:text-white/70">
                    <Building2 className="w-4 h-4" />
                    <span className="text-sm font-medium">{companyInfo.companyNumber}</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Services */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-neutral-soft-800 dark:text-white mb-6">Our Services</h3>
                <ul className="space-y-2">
                  {services.map((service, index) => (
                    <li key={index}>
                      <a
                        href="#services"
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick('#services');
                        }}
                        className="text-neutral-soft-600 dark:text-white/70 hover:text-brawex-600 dark:hover:text-brawex-300 transition-colors text-sm flex items-center group"
                      >
                        <span className="w-1.5 h-1.5 bg-brawex-400 rounded-full mr-3 group-hover:scale-150 transition-transform" />
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-neutral-soft-800 dark:text-white mb-6">Quick Links</h3>
                <ul className="space-y-2">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(link.href);
                        }}
                        className="text-neutral-soft-600 dark:text-white/70 hover:text-brawex-600 dark:hover:text-brawex-300 transition-colors text-sm flex items-center group"
                      >
                        <ExternalLink className="w-3 h-3 mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>

                {/* Theme Toggle */}
                <div className="mt-8 pt-6 border-t border-neutral-soft-200/40 dark:border-white/10">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-soft-600 dark:text-white/70">Theme</span>
                    <ThemeToggle />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-neutral-soft-200/40 dark:border-white/10"
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex space-x-4 mb-4 md:mb-0">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:bg-brawex-400/20 transition-all duration-300 group"
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5 text-neutral-soft-600 dark:text-white/70 group-hover:text-brawex-600 dark:group-hover:text-brawex-300 transition-colors" />
                    </a>
                  );
                })}
              </div>

              <div className="text-center md:text-right">
                <p className="text-neutral-soft-600 dark:text-white/60 text-sm">
                  © {currentYear} Brawex Limited. All rights reserved.
                </p>
                <p className="text-neutral-soft-500 dark:text-white/40 text-xs mt-1">
                  Building excellence since 2025
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;