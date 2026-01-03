import React from 'react';
import { motion } from 'framer-motion';
import { X, Check, AlertTriangle, Zap } from 'lucide-react';
import { comparisonData } from '../data/mock';

export const ComparisonSection = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
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
            Le moment de <span className="text-[#10B981]">changer</span> est arrivé
          </h2>
          <p className="section-subtitle mx-auto">
            Découvrez la différence entre l'ancienne méthode et la révolution FlowLedger
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Old Way - Excel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="glass-card p-8 h-full border-red-500/20 bg-gradient-to-br from-red-500/5 to-transparent">
              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-xl bg-red-500/20 flex items-center justify-center">
                  <AlertTriangle size={28} className="text-red-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{comparisonData.oldWay.title}</h3>
                  <p className="text-white/50 text-sm">La méthode traditionnelle</p>
                </div>
              </div>

              {/* Problems List */}
              <div className="space-y-4">
                {comparisonData.oldWay.problems.map((problem, index) => (
                  <motion.div
                    key={problem}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5"
                  >
                    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                      <X size={16} className="text-red-400" />
                    </div>
                    <span className="text-white/70">{problem}</span>
                  </motion.div>
                ))}
              </div>

              {/* Visual Indicator */}
              <div className="mt-8 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-red-400 text-sm font-medium">Risque d'erreurs élevé</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* New Way - FlowLedger */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="glass-card p-8 h-full border-[#10B981]/20 bg-gradient-to-br from-[#352694]/10 via-[#10B981]/5 to-transparent glow-accent">
              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#352694] to-[#10B981] flex items-center justify-center">
                  <Zap size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{comparisonData.newWay.title}</h3>
                  <p className="text-[#10B981] text-sm">La révolution FlowLedger</p>
                </div>
              </div>

              {/* Benefits List */}
              <div className="space-y-4">
                {comparisonData.newWay.benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-[#10B981]/20"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#10B981]/20 flex items-center justify-center flex-shrink-0">
                      <Check size={16} className="text-[#10B981]" />
                    </div>
                    <span className="text-white">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* Visual Indicator */}
              <div className="mt-8 p-4 rounded-xl bg-[#10B981]/10 border border-[#10B981]/20">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#10B981]" />
                  <span className="text-[#10B981] text-sm font-medium">100% Automatisé & Sécurisé</span>
                </div>
              </div>
            </div>

            {/* Decorative Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#352694]/20 to-[#10B981]/20 rounded-3xl blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
