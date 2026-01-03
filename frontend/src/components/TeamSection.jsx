import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Award, Code } from 'lucide-react';
import { teamMembers } from '../data/mock';

export const TeamSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-[#10B981]/10 rounded-full blur-[150px]" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-[#352694]/20 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-white mb-4">
            L'Alliance de l'<span className="text-[#10B981]">Expertise Métier</span> et de la Tech
          </h2>
          <p className="section-subtitle mx-auto">
            Une équipe passionnée par l'innovation comptable en Afrique
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div
                className="glass-card glass-card-hover p-8 h-full relative overflow-hidden"
                whileHover={{ y: -5 }}
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote size={60} className="text-white" />
                </div>

                {/* Avatar & Role */}
                <div className="flex items-start gap-5 mb-6">
                  <motion.div
                    className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#352694] to-[#10B981] flex items-center justify-center text-xl font-bold text-white flex-shrink-0"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                  >
                    {member.avatar}
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-[#10B981] text-sm font-medium">{member.role}</p>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-white/70 text-lg italic leading-relaxed mb-6">
                  "{member.quote}"
                </p>

                {/* Expertise Badge */}
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    index === 0 
                      ? 'bg-[#10B981]/20 text-[#10B981]' 
                      : 'bg-[#352694]/30 text-[#352694]'
                  }`}>
                    {index === 0 ? <Award size={18} /> : <Code size={18} />}
                  </div>
                  <span className="text-white/50 text-sm">
                    {index === 0 ? 'Normes OHADA & Audit' : 'Automatisation & Data'}
                  </span>
                </div>

                {/* Decorative Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 ${
                  index === 0 
                    ? 'bg-gradient-to-r from-transparent via-[#10B981] to-transparent' 
                    : 'bg-gradient-to-r from-transparent via-[#352694] to-transparent'
                }`} />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-6"
        >
          {[
            { label: 'Certifié OHADA', icon: '✅' },
            { label: 'Sécurité Renforcée', icon: '🔐' },
            { label: 'Support 24/7', icon: '📞' }
          ].map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10"
            >
              <span>{badge.icon}</span>
              <span className="text-white/70 text-sm">{badge.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
