import React from 'react';
import { motion } from 'framer-motion';
import { Receipt, Users, ShoppingCart, Wallet } from 'lucide-react';
import { modules } from '../data/mock';

const iconMap = {
  Receipt: Receipt,
  Users: Users,
  ShoppingCart: ShoppingCart,
  Wallet: Wallet
};

export const ModulesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020418] via-[#0a0b1e] to-[#020418]" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

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
            Modules <span className="text-[#10B981]">Spécialisés</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Des outils puissants adaptés aux spécificités de la comptabilité OHADA
          </p>
        </motion.div>

        {/* Modules Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module, index) => {
            const IconComponent = iconMap[module.icon];
            return (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className="glass-card glass-card-hover p-6 h-full group"
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  {/* Icon Container */}
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#352694]/50 to-[#352694]/20 flex items-center justify-center mb-5 group-hover:from-[#10B981]/50 group-hover:to-[#10B981]/20 transition-all duration-500"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                  >
                    <IconComponent size={28} className="text-white group-hover:text-[#10B981] transition-colors duration-300" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#10B981] transition-colors duration-300">
                    {module.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {module.description}
                  </p>

                  {/* Hover Indicator */}
                  <div className="mt-5 pt-4 border-t border-white/10">
                    <motion.div
                      className="flex items-center gap-2 text-sm text-white/40 group-hover:text-[#10B981] transition-colors duration-300"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                    >
                      <span>En savoir plus</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transform group-hover:translate-x-1 transition-transform duration-300">
                        <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#352694]/20 border border-[#352694]/40">
            <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="text-white/70 text-sm">Tous les modules sont interconnectés et synchronisés en temps réel</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
