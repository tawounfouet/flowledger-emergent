import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles, FileSpreadsheet, BarChart3 } from 'lucide-react';
import { heroContent } from '../data/mock';

export const HeroSection = ({ onDemoClick, onLearnMoreClick }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#352694]/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#10B981]/10 rounded-full blur-[100px]" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#352694]/20 border border-[#352694]/40 mb-8"
            >
              <Sparkles size={16} className="text-[#10B981]" />
              <span className="text-sm font-medium text-white/80">Nouvelle génération comptable</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              {heroContent.headline.split('OHADA').map((part, i) => (
                <React.Fragment key={i}>
                  {part}
                  {i === 0 && <span className="text-[#10B981]">OHADA</span>}
                </React.Fragment>
              ))}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-white/70 leading-relaxed mb-10 max-w-xl"
            >
              {heroContent.subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                onClick={onDemoClick}
                className="btn-primary flex items-center justify-center gap-3"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {heroContent.primaryCTA}
                <ArrowRight size={18} />
              </motion.button>
              
              <motion.button
                onClick={onLearnMoreClick}
                className="btn-secondary flex items-center justify-center gap-3"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Play size={18} className="text-[#10B981]" />
                {heroContent.secondaryCTA}
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-8 mt-12 pt-8 border-t border-white/10"
            >
              {[
                { value: '90%', label: 'Temps économisé' },
                { value: '100%', label: 'Conformité OHADA' },
                { value: '0', label: 'Erreurs de saisie' }
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-[#10B981]">{stat.value}</div>
                  <div className="text-sm text-white/50">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual - Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Dashboard Card */}
              <motion.div
                className="glass-card p-6 glow-primary"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#352694] flex items-center justify-center">
                      <BarChart3 size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">Tableau de bord</div>
                      <div className="text-xs text-white/50">FlowLedger Pro</div>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-[#10B981]/20 text-[#10B981] text-xs font-medium">
                    En temps réel
                  </div>
                </div>

                {/* Chart Simulation */}
                <div className="h-40 flex items-end gap-2 mb-6">
                  {[65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88, 92].map((height, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 rounded-t-sm"
                      style={{ 
                        height: `${height}%`,
                        background: i >= 8 ? '#10B981' : 'rgba(53, 38, 148, 0.6)'
                      }}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ delay: 0.8 + i * 0.05, duration: 0.4 }}
                    />
                  ))}
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: 'Écritures', value: '1,247', change: '+12%' },
                    { label: 'Balance', value: '0.00 XAF', change: 'Équilibrée' },
                    { label: 'Dossiers', value: '24', change: 'Actifs' }
                  ].map((item) => (
                    <div key={item.label} className="text-center">
                      <div className="text-lg font-bold text-white">{item.value}</div>
                      <div className="text-xs text-white/50">{item.label}</div>
                      <div className="text-xs text-[#10B981] mt-1">{item.change}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Floating Card - FEC Export */}
              <motion.div
                className="absolute -right-4 top-1/4 glass-card p-4 w-48"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#10B981]/20 flex items-center justify-center">
                    <FileSpreadsheet size={16} className="text-[#10B981]" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">Export FEC</div>
                    <div className="text-xs text-[#10B981]">Prêt</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card - Transformation */}
              <motion.div
                className="absolute -left-4 bottom-1/4 glass-card p-4 w-52"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-xs text-white/50">Transformation</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-xs px-2 py-1 rounded bg-red-500/20 text-red-400">Excel</div>
                  <ArrowRight size={12} className="text-white/30" />
                  <div className="text-xs px-2 py-1 rounded bg-[#10B981]/20 text-[#10B981]">FlowLedger</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
