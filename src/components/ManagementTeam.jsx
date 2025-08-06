import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Award, 
  Globe, 
  Users,
  Mail,
  Phone,
  Linkedin
} from 'lucide-react';

const ManagementTeam = () => {
  const boardMembers = [
    {
      name: "Mutluer Bali",
      position: "Director & Co-Founder",
      nationality: "British",
      born: "April 1978",
      specialization: "Construction Management & Business Development",
      background: "Experienced construction professional with expertise in commercial and domestic building projects. Previously associated with Bali Building & Construction Ltd.",
      achievements: [
        "Co-founded Brawex Limited in May 2025",
        "Specialist in commercial building construction",
        "Expert in construction installation services",
        "Strong background in UK construction industry"
      ],
      email: "m.bali@brawex.co.uk",
      linkedin: "#"
    },
    {
      name: "Sinan Girgin",
      position: "Director & Co-Founder", 
      nationality: "Turkish",
      born: "December 1978",
      specialization: "Technical Operations & Project Management",
      background: "Construction industry professional with focus on domestic buildings and specialized construction activities. Resident in England with extensive UK construction experience.",
      achievements: [
        "Co-founded Brawex Limited in May 2025",
        "Expertise in domestic building construction",
        "Specialized construction activities management",
        "Strong technical background in construction installation"
      ],
      email: "s.girgin@brawex.co.uk", 
      linkedin: "#"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="management" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brawex-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brawex-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-brawex-400 to-brawex-600 rounded-xl flex items-center justify-center mr-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl font-display font-bold bg-gradient-to-r from-brawex-600 to-brawex-400 bg-clip-text text-transparent">
              Founding Directors
            </h2>
          </div>
          <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto leading-relaxed">
            Founded in May 2025, our dynamic leadership team brings extensive construction industry 
            expertise to drive innovation in commercial and domestic building projects across the UK.
          </p>
        </motion.div>

        {/* Management Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
        >
          {boardMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="glass-card group h-full relative overflow-hidden"
            >
              {/* Background decorative elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-brawex-100/30 to-brawex-200/20 dark:from-brawex-900/20 dark:to-brawex-800/10 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative z-10">
                {/* Member Header */}
                <div className="flex items-start space-x-6 mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-brawex-400 to-brawex-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl shadow-brawex-400/40 flex-shrink-0">
                    <Building2 className="w-10 h-10 text-white drop-shadow-md" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-light-text dark:text-dark-text mb-2">
                      {member.name}
                    </h3>
                    <p className="text-brawex-600 dark:text-brawex-400 font-bold text-lg mb-2">
                      {member.position}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-light-text-secondary dark:text-dark-text-secondary">
                      <span className="px-3 py-1 bg-brawex-50 dark:bg-brawex-900/20 rounded-full font-medium">
                        {member.nationality}
                      </span>
                      <span>Born {member.born}</span>
                    </div>
                  </div>
                </div>

                {/* Specialization */}
                <div className="mb-6">
                  <h4 className="font-bold text-light-text dark:text-dark-text mb-3 text-lg">Specialization</h4>
                  <p className="text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                    {member.specialization}
                  </p>
                </div>

                {/* Background */}
                <div className="mb-6">
                  <h4 className="font-bold text-light-text dark:text-dark-text mb-3 text-lg">Background</h4>
                  <p className="text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                    {member.background}
                  </p>
                </div>

                {/* Key Achievements */}
                <div className="mb-8">
                  <h4 className="font-bold text-light-text dark:text-dark-text mb-4 text-lg flex items-center">
                    <Award className="w-5 h-5 mr-3 text-brawex-500" />
                    Key Achievements
                  </h4>
                  <div className="space-y-3">
                    {member.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start group/item">
                        <div className="w-2 h-2 bg-gradient-to-r from-brawex-400 to-brawex-500 rounded-full mr-4 mt-2.5 group-hover/item:scale-150 transition-transform duration-200 shadow-sm shadow-brawex-400/50 flex-shrink-0" />
                        <span className="text-light-text-secondary dark:text-dark-text-secondary group-hover/item:text-brawex-600 dark:group-hover/item:text-brawex-300 transition-colors duration-200 leading-relaxed">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6 pt-6 border-t border-neutral-soft-200/60 dark:border-white/10">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center space-x-3 px-4 py-3 rounded-xl bg-brawex-50 dark:bg-brawex-900/20 hover:bg-brawex-100 dark:hover:bg-brawex-900/30 transition-all duration-300 group/contact hover:scale-105"
                    title={`Email ${member.name}`}
                  >
                    <Mail className="w-5 h-5 text-brawex-600 dark:text-brawex-400 group-hover/contact:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-brawex-600 dark:text-brawex-400">Email</span>
                  </a>
                  <a
                    href={member.linkedin}
                    className="flex items-center space-x-3 px-4 py-3 rounded-xl bg-brawex-50 dark:bg-brawex-900/20 hover:bg-brawex-100 dark:hover:bg-brawex-900/30 transition-all duration-300 group/contact hover:scale-105"
                    title={`${member.name} on LinkedIn`}
                  >
                    <Linkedin className="w-5 h-5 text-brawex-600 dark:text-brawex-400 group-hover/contact:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-brawex-600 dark:text-brawex-400">LinkedIn</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Partnership Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass-card">
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-brawex-400 to-brawex-600 rounded-xl flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-light-text dark:text-dark-text">
                  Partnership Excellence
                </h3>
              </div>
              <p className="text-light-text-secondary dark:text-dark-text-secondary text-lg leading-relaxed mb-6">
                Our founding directors combine complementary expertise in construction management 
                and technical operations, ensuring comprehensive project delivery from inception to completion.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="text-center">
                  <div className="text-brawex-600 dark:text-brawex-400 font-bold text-lg">British & Turkish</div>
                  <div className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Heritage</div>
                </div>
                <div className="hidden md:block w-px h-12 bg-neutral-soft-200 dark:bg-white/10"></div>
                <div className="text-center">
                  <div className="text-brawex-600 dark:text-brawex-400 font-bold text-lg">May 2025</div>
                  <div className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Partnership Founded</div>
                </div>
                <div className="hidden md:block w-px h-12 bg-neutral-soft-200 dark:bg-white/10"></div>
                <div className="text-center">
                  <div className="text-brawex-600 dark:text-brawex-400 font-bold text-lg">London Based</div>
                  <div className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Operations</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ManagementTeam;