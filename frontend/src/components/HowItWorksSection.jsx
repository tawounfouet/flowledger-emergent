import React from 'react';
import { motion } from 'framer-motion';
import { FileInput, Cog, FileOutput, ArrowRight } from 'lucide-react';
import { processSteps } from '../data/mock';

const iconMap = {
  FileInput: FileInput,
  Cog: Cog,
  FileOutput: FileOutput
};

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#352694]/20 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="section-title text-white mb-4">
            Du <span className="text-[#10B981]">Dépouillement</span> à l'Écriture
          </h2>
          <p className="section-subtitle mx-auto">
            Un processus en 3 étapes simples pour automatiser votre comptabilité
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#352694]/50 to-transparent transform -translate-y-1/2" />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {processSteps.map((step, index) => {
              const IconComponent = iconMap[step.icon];
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Step Card */}
                  <div className="glass-card glass-card-hover p-8 text-center h-full">
                    {/* Step Number */}
                    <motion.div
                      className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#352694] flex items-center justify-center text-sm font-bold text-white border-4 border-[#020418]"
                      whileHover={{ scale: 1.1 }}
                    >
                      {step.step}
                    </motion.div>

                    {/* Icon */}
                    <motion.div
                      className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#352694]/40 to-[#10B981]/20 flex items-center justify-center"
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <IconComponent size={36} className="text-[#10B981]" />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-white/60 leading-relaxed">{step.description}</p>
                  </div>

                  {/* Arrow (between steps) */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10">
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight size={24} className="text-[#352694]" />
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-white/50 mb-6">Prêt à automatiser votre comptabilité ?</p>
          <motion.button
            className="btn-primary inline-flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Commencer maintenant
            <ArrowRight size={18} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
